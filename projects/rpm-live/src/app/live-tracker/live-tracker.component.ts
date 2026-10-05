import { Component, OnInit, OnDestroy, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService, LiveMatchService, MatchService, LiveMatchSession, Match, extractErrorMessage } from '@core';

@Component({
  selector: 'rpm-live-tracker',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ToastModule],
  templateUrl: './live-tracker.component.html',
  styleUrl: './live-tracker.component.scss'
})
export class LiveTrackerComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private liveMatchService = inject(LiveMatchService);
  private matchService = inject(MatchService);
  public authService = inject(AuthService);
  private messageService = inject(MessageService);
  public translate = inject(TranslateService);

  matchId = signal<string>('');
  session = signal<LiveMatchSession | null>(null);
  match = signal<Match | null>(null);
  loading = signal<boolean>(true);
  actionLoading = signal<boolean>(false);

  private sseSub?: Subscription;

  // Computed state
  currentUser = computed(() => this.authService.currentUser());
  
  isTeamOne = computed(() => {
    const user = this.currentUser();
    const team1Id = this.session()?.teamOneId || this.match()?.teamOneId;
    return !!(user && team1Id && user.teamId === team1Id);
  });

  isTeamTwo = computed(() => {
    const user = this.currentUser();
    const team2Id = this.session()?.teamTwoId || this.match()?.teamTwoId;
    return !!(user && team2Id && user.teamId === team2Id);
  });

  isAdmin = computed(() => this.currentUser()?.role === 'ADMIN');

  isParticipant = computed(() => this.isTeamOne() || this.isTeamTwo() || this.isAdmin());

  isSpectator = computed(() => !this.isParticipant());

  isRequester = computed(() => {
    const s = this.session();
    const user = this.currentUser();
    if (!s || !user) return false;
    if (s.requestedBy && s.requestedBy === user.id) return true;
    if (s.requestedByTeamId && user.teamId && s.requestedByTeamId === user.teamId) return true;
    return false;
  });

  canAccept = computed(() => {
    const s = this.session();
    const user = this.currentUser();
    if (!s || !user || s.status !== 'REQUESTED') return false;

    // The user/team who requested cannot accept
    if (this.isRequester()) return false;

    // The rival team can accept
    if (this.isTeamOne() || this.isTeamTwo()) return true;

    // Admin can accept if not the requester
    if (this.isAdmin()) return true;

    return false;
  });

  isWaitingForRival = computed(() => {
    const s = this.session();
    if (!s || s.status !== 'REQUESTED') return false;
    return this.isRequester();
  });

  canScore = computed(() => {
    const s = this.session();
    return this.isParticipant() && s?.status === 'IN_PROGRESS';
  });

  selectedGameMode = signal<'GOLDEN_POINT' | 'ADVANTAGE'>('GOLDEN_POINT');

  canSign = computed(() => {
    const s = this.session();
    const user = this.currentUser();
    if (!s || !user) return false;
    if (s.status !== 'COMPLETED' && s.status !== 'IN_PROGRESS') return false;

    if (this.isTeamOne() && s.confirmedByTeamOne === 0) return true;
    if (this.isTeamTwo() && s.confirmedByTeamTwo === 0) return true;
    if (this.isAdmin() && (s.confirmedByTeamOne === 0 || s.confirmedByTeamTwo === 0)) return true;
    return false;
  });

  isAdvantageMode = computed(() => {
    return (this.session()?.gameMode || this.selectedGameMode()) === 'ADVANTAGE';
  });

  isDeuce = computed(() => {
    const s = this.session();
    return this.isAdvantageMode() && !s?.isTiebreak && s?.pointsTeamOne === '40' && s?.pointsTeamTwo === '40';
  });

  isGoldenPoint = computed(() => {
    const s = this.session();
    return !this.isAdvantageMode() && !s?.isTiebreak && s?.pointsTeamOne === '40' && s?.pointsTeamTwo === '40';
  });

  totalGames = computed(() => {
    const s = this.session();
    if (!s) return 0;
    return (s.gamesTeamOne || 0) + (s.gamesTeamTwo || 0);
  });

  isSideSwitch = computed(() => {
    return this.totalGames() % 2 === 1;
  });

  setGameMode(mode: 'GOLDEN_POINT' | 'ADVANTAGE'): void {
    this.selectedGameMode.set(mode);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.matchId.set(id);
        this.loadInitialData(id);
        this.connectSse(id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sseSub) {
      this.sseSub.unsubscribe();
    }
  }

  private loadInitialData(id: string): void {
    this.loading.set(true);
    
    // Load match details
    this.matchService.getById(id).subscribe({
      next: (res) => this.match.set(res.data),
      error: () => console.warn('Could not load base match info')
    });

    // Load or check live session
    this.liveMatchService.getLiveSession(id).subscribe({
      next: (res) => {
        this.session.set(res.data);
        if (res.data?.gameMode) {
          this.selectedGameMode.set(res.data.gameMode);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading live session', err);
        this.loading.set(false);
      }
    });
  }

  private connectSse(id: string): void {
    this.sseSub = this.liveMatchService.listenMatchStream(id).subscribe({
      next: (sessionUpdate) => {
        this.session.set(sessionUpdate);
        if (sessionUpdate?.gameMode) {
          this.selectedGameMode.set(sessionUpdate.gameMode);
        }
      },
      error: (err) => {
        console.warn('Live match SSE stream error:', err);
      }
    });
  }

  onRequestLive(): void {
    this.actionLoading.set(true);
    this.liveMatchService.requestLive(this.matchId(), this.selectedGameMode()).subscribe({
      next: (res) => {
        this.session.set(res.data);
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('LIVE.REQUEST_SENT_TITLE'),
          detail: this.translate.instant('LIVE.REQUEST_SENT_DETAIL')
        });
      },
      error: (err) => {
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, 'Error al solicitar tanteo en vivo')
        });
      }
    });
  }

  onAcceptLive(): void {
    this.actionLoading.set(true);
    this.liveMatchService.acceptLive(this.matchId(), this.selectedGameMode()).subscribe({
      next: (res) => {
        this.session.set(res.data);
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'success',
          summary: this.translate.instant('LIVE.MATCH_STARTED_TITLE'),
          detail: this.translate.instant('LIVE.MATCH_STARTED_DETAIL')
        });
      },
      error: (err) => {
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, 'Error al aceptar partido')
        });
      }
    });
  }

  onScorePoint(team: 1 | 2): void {
    if (!this.canScore() || this.actionLoading()) return;

    this.actionLoading.set(true);
    this.liveMatchService.scorePoint(this.matchId(), team).subscribe({
      next: (res) => {
        this.session.set(res.data);
        this.actionLoading.set(false);
      },
      error: (err) => {
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, 'Error al registrar punto')
        });
      }
    });
  }

  onUndoPoint(): void {
    if (this.actionLoading()) return;

    this.actionLoading.set(true);
    this.liveMatchService.undoPoint(this.matchId()).subscribe({
      next: (res) => {
        this.session.set(res.data);
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'info',
          summary: this.translate.instant('LIVE.UNDO_SUCCESS_TITLE'),
          detail: this.translate.instant('LIVE.UNDO_SUCCESS_DETAIL')
        });
      },
      error: (err) => {
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'warn',
          summary: this.translate.instant('COMMON.WARNING'),
          detail: extractErrorMessage(err, 'No hay puntos para deshacer')
        });
      }
    });
  }

  onSign(): void {
    if (!this.canSign() || this.actionLoading()) return;

    this.actionLoading.set(true);
    this.liveMatchService.signLive(this.matchId()).subscribe({
      next: (res) => {
        this.session.set(res.data);
        this.actionLoading.set(false);
        if (res.data.status === 'CONFIRMED') {
          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('LIVE.SIGNED_AND_CONFIRMED_TITLE'),
            detail: this.translate.instant('LIVE.SIGNED_AND_CONFIRMED_DETAIL')
          });
        } else {
          this.messageService.add({
            severity: 'success',
            summary: this.translate.instant('LIVE.SIGNED_TITLE'),
            detail: this.translate.instant('LIVE.SIGNED_DETAIL')
          });
        }
      },
      error: (err) => {
        this.actionLoading.set(false);
        this.messageService.add({
          severity: 'error',
          summary: this.translate.instant('COMMON.ERROR'),
          detail: extractErrorMessage(err, 'Error al firmar acta')
        });
      }
    });
  }

  goBack(): void {
    if (this.authService.isAuthenticated()) {
      if (this.isAdmin()) {
        this.router.navigate(['/admin/matches']);
      } else {
        this.router.navigate(['/team']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }
}

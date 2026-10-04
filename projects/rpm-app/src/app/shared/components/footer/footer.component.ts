import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <span class="footer-logo">🎾 {{ 'APP.TITLE_MAIN' | translate }} <span class="highlight">{{ 'APP.TITLE_HIGHLIGHT' | translate }}</span></span>
          <p class="footer-desc">
            {{ 'FOOTER.DESC' | translate }}
          </p>
        </div>

        <div class="footer-info">
          <div class="rule-box">
            <span class="rule-title">{{ 'FOOTER.SCORING_TITLE' | translate }}</span>
            <span class="rule-detail">{{ 'FOOTER.SCORING_DETAIL_PREFIX' | translate }}<strong>{{ 'FOOTER.SCORING_DETAIL_2_0' | translate }}</strong>{{ 'FOOTER.SCORING_DETAIL_SEPARATOR' | translate }}<strong>{{ 'FOOTER.SCORING_DETAIL_2_1' | translate }}</strong></span>
          </div>
          <p class="footer-copy">
            {{ 'FOOTER.COPYRIGHT' | translate }}
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 5rem;
      border-top: 1px solid var(--border-color);
      background: #ffffff;
      padding: 3rem 0 2rem;
    }

    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .footer-brand {
      max-width: 400px;
    }

    .footer-logo {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.2rem;
      color: var(--text-main);
      .highlight { color: var(--primary); }
    }

    .footer-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 0.5rem;
    }

    .footer-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.75rem;

      @media (max-width: 768px) {
        align-items: flex-start;
      }
    }

    .rule-box {
      display: flex;
      flex-direction: column;
      background: rgba(0, 230, 118, 0.05);
      border: 1px solid rgba(0, 230, 118, 0.2);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.8rem;

      .rule-title {
        color: var(--primary);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.05em;
      }

      .rule-detail {
        color: var(--text-main);
      }
    }

    .footer-copy {
      font-size: 0.8rem;
      color: var(--text-dim);
    }
  `]
})
export class FooterComponent {}

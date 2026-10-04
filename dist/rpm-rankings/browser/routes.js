// projects/rpm-rankings/src/app/landing.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RankingService, MatchService, ClassificationService } from "@core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { CardModule } from "primeng/card";
import { BadgeModule } from "primeng/badge";
import { SelectModule } from "primeng/select";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
import * as i3 from "primeng/button";
import * as i4 from "primeng/tag";
import * as i5 from "primeng/card";
import * as i6 from "primeng/badge";
import * as i7 from "primeng/select";
import * as i8 from "@angular/common";
var _forTrack0 = ($index, $item) => $item.id;
function LandingComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 10)(1, "div", 46)(2, "span", 47);
    i0.\u0275\u0275text(3, "Ranking Seleccionado");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "div", 48);
    i0.\u0275\u0275element(5, "i", 49);
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275pipe(7, "date");
    i0.\u0275\u0275pipe(8, "date");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(9, "p-select", 50);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275listener("ngModelChange", function LandingComponent_Conditional_12_Template_p_select_ngModelChange_9_listener($event) {
      i0.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.onRankingChange($event));
    });
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(6);
    i0.\u0275\u0275textInterpolate2(" ", i0.\u0275\u0275pipeBind1(7, 4, ctx_r1.selectedRanking()?.startDate), " \u2192 ", i0.\u0275\u0275pipeBind1(8, 6, ctx_r1.selectedRanking()?.endDate), " ");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("options", ctx_r1.rankings())("ngModel", ctx_r1.selectedRanking()?.id);
    i0.\u0275\u0275control();
  }
}
function LandingComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "section", 11)(1, "p-card", 51)(2, "div", 52);
    i0.\u0275\u0275element(3, "i", 53);
    i0.\u0275\u0275elementStart(4, "div")(5, "span", 54);
    i0.\u0275\u0275text(6, "Sede");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "span", 55);
    i0.\u0275\u0275text(8);
    i0.\u0275\u0275elementEnd()()()();
    i0.\u0275\u0275elementStart(9, "p-card", 51)(10, "div", 52);
    i0.\u0275\u0275element(11, "i", 56);
    i0.\u0275\u0275elementStart(12, "div")(13, "span", 54);
    i0.\u0275\u0275text(14, "Nivel");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "span", 55);
    i0.\u0275\u0275text(16);
    i0.\u0275\u0275elementEnd()()()();
    i0.\u0275\u0275elementStart(17, "p-card", 51)(18, "div", 52);
    i0.\u0275\u0275element(19, "i", 57);
    i0.\u0275\u0275elementStart(20, "div")(21, "span", 54);
    i0.\u0275\u0275text(22, "Categor\xEDa");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(23, "span", 55);
    i0.\u0275\u0275text(24);
    i0.\u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const r_r3 = ctx;
    i0.\u0275\u0275advance(8);
    i0.\u0275\u0275textInterpolate(r_r3.locationName || "Club Central");
    i0.\u0275\u0275advance(8);
    i0.\u0275\u0275textInterpolate(r_r3.levelName || "Intermedio");
    i0.\u0275\u0275advance(8);
    i0.\u0275\u0275textInterpolate(r_r3.categoryName || "Masculina");
  }
}
function LandingComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "th", 58);
    i0.\u0275\u0275text(2, "Pos");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "th");
    i0.\u0275\u0275text(4, "Equipo & Pareja");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "th", 59);
    i0.\u0275\u0275text(6, "PJ");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "th", 59);
    i0.\u0275\u0275text(8, "PG");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "th", 59);
    i0.\u0275\u0275text(10, "PP");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "th", 60);
    i0.\u0275\u0275text(12, "Sets (DIF)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(13, "th", 60);
    i0.\u0275\u0275text(14, "Puntos (DIF)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "th", 61);
    i0.\u0275\u0275text(16, "TOTAL PTS");
    i0.\u0275\u0275elementEnd()();
  }
}
function LandingComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 62);
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(4, "td")(5, "div", 63);
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "div", 64);
    i0.\u0275\u0275text(8);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(9, "td", 65);
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "td", 66);
    i0.\u0275\u0275text(12);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(13, "td", 67);
    i0.\u0275\u0275text(14);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "td", 60);
    i0.\u0275\u0275text(16);
    i0.\u0275\u0275elementStart(17, "span", 68);
    i0.\u0275\u0275text(18);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(19, "td", 60);
    i0.\u0275\u0275text(20);
    i0.\u0275\u0275elementStart(21, "span", 68);
    i0.\u0275\u0275text(22);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(23, "td", 69)(24, "span", 70);
    i0.\u0275\u0275text(25);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    i0.\u0275\u0275classProp("podium-gold", row_r4.position === 1)("podium-silver", row_r4.position === 2)("podium-bronze", row_r4.position === 3);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275classProp("gold", row_r4.position === 1)("silver", row_r4.position === 2)("bronze", row_r4.position === 3);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate1(" ", row_r4.position, " ");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(row_r4.teamName);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", row_r4.player1, " \u2022 ", row_r4.player2);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(row_r4.played);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(row_r4.wins);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(row_r4.losses);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2(" ", row_r4.setsWon, "/", row_r4.setsLost, " ");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classProp("pos", row_r4.setsDiff > 0)("neg", row_r4.setsDiff < 0);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate2(" (", row_r4.setsDiff > 0 ? "+" : "", "", row_r4.setsDiff, ") ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2(" ", row_r4.pointsFor, "/", row_r4.pointsAgainst, " ");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classProp("pos", row_r4.pointsDiff > 0)("neg", row_r4.pointsDiff < 0);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate2(" (", row_r4.pointsDiff > 0 ? "+" : "", "", row_r4.pointsDiff, ") ");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(row_r4.totalPoints);
  }
}
function LandingComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "td", 71);
    i0.\u0275\u0275element(2, "i", 72);
    i0.\u0275\u0275text(3, " No hay datos de clasificaci\xF3n disponibles a\xFAn. ");
    i0.\u0275\u0275elementEnd()();
  }
}
function LandingComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p-card", 27)(1, "div", 73);
    i0.\u0275\u0275element(2, "i", 74);
    i0.\u0275\u0275elementStart(3, "p", 75);
    i0.\u0275\u0275text(4, "No hay partidos en esta categor\xEDa.");
    i0.\u0275\u0275elementEnd()()();
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 80);
    i0.\u0275\u0275element(1, "i", 49);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275pipe(3, "date");
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1(" ", i0.\u0275\u0275pipeBind1(3, 1, m_r5.matchDate));
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 81);
    i0.\u0275\u0275element(1, "i", 92);
    i0.\u0275\u0275text(2, " Por disputar");
    i0.\u0275\u0275elementEnd();
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 93);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(2, "p-badge", 94);
  }
  if (rf & 2) {
    const m_r5 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(m_r5.setsTeamOne);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("value", m_r5.pointsTeamOne + " pts");
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 88);
    i0.\u0275\u0275text(1, "-");
    i0.\u0275\u0275elementEnd();
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 93);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(2, "p-badge", 94);
  }
  if (rf & 2) {
    const m_r5 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(m_r5.setsTeamTwo);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("value", m_r5.pointsTeamTwo + " pts");
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 88);
    i0.\u0275\u0275text(1, "-");
    i0.\u0275\u0275elementEnd();
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 90);
    i0.\u0275\u0275element(1, "i", 72);
    i0.\u0275\u0275text(2, " Resultado registrado por ");
    i0.\u0275\u0275elementStart(3, "strong");
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(5, ". Pendiente de confirmaci\xF3n. ");
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate(m_r5.submittedByEmail);
  }
}
function LandingComponent_Conditional_45_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 91);
    i0.\u0275\u0275element(1, "i", 95);
    i0.\u0275\u0275text(2, " Incidencia comunicada. En revisi\xF3n administrativa. ");
    i0.\u0275\u0275elementEnd();
  }
}
function LandingComponent_Conditional_45_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    i0.\u0275\u0275element(2, "p-tag", 79);
    i0.\u0275\u0275conditionalCreate(3, LandingComponent_Conditional_45_For_2_Conditional_3_Template, 4, 3, "span", 80)(4, LandingComponent_Conditional_45_For_2_Conditional_4_Template, 3, 0, "span", 81);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "div", 82)(6, "div", 83)(7, "div", 84)(8, "span", 85);
    i0.\u0275\u0275text(9);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(10, "span", 86);
    i0.\u0275\u0275text(11);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(12, "div", 87);
    i0.\u0275\u0275conditionalCreate(13, LandingComponent_Conditional_45_For_2_Conditional_13_Template, 3, 2)(14, LandingComponent_Conditional_45_For_2_Conditional_14_Template, 2, 0, "span", 88);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(15, "div", 89)(16, "span");
    i0.\u0275\u0275text(17, "VS");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(18, "div", 83)(19, "div", 84)(20, "span", 85);
    i0.\u0275\u0275text(21);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(22, "span", 86);
    i0.\u0275\u0275text(23);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(24, "div", 87);
    i0.\u0275\u0275conditionalCreate(25, LandingComponent_Conditional_45_For_2_Conditional_25_Template, 3, 2)(26, LandingComponent_Conditional_45_For_2_Conditional_26_Template, 2, 0, "span", 88);
    i0.\u0275\u0275elementEnd()()();
    i0.\u0275\u0275conditionalCreate(27, LandingComponent_Conditional_45_For_2_Conditional_27_Template, 6, 1, "div", 90);
    i0.\u0275\u0275conditionalCreate(28, LandingComponent_Conditional_45_For_2_Conditional_28_Template, 3, 0, "div", 91);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275classProp("confirmed", m_r5.status === "CONFIRMED")("disputed", m_r5.status === "DISPUTED");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", ctx_r1.formatStatus(m_r5.status))("severity", ctx_r1.getTagSeverity(m_r5.status));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r5.matchDate ? 3 : 4);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275classProp("winner", m_r5.setsTeamOne !== null && m_r5.setsTeamTwo !== null && (m_r5.setsTeamOne ?? 0) > (m_r5.setsTeamTwo ?? 0));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r5.teamOneName);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate4("", m_r5.t1p1Name, " ", m_r5.t1p1Surname, " / ", m_r5.t1p2Name, " ", m_r5.t1p2Surname);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275conditional(m_r5.setsTeamOne !== null && m_r5.setsTeamOne !== void 0 ? 13 : 14);
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275classProp("winner", m_r5.setsTeamOne !== null && m_r5.setsTeamTwo !== null && (m_r5.setsTeamTwo ?? 0) > (m_r5.setsTeamOne ?? 0));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r5.teamTwoName);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate4("", m_r5.t2p1Name, " ", m_r5.t2p1Surname, " / ", m_r5.t2p2Name, " ", m_r5.t2p2Surname);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275conditional(m_r5.setsTeamTwo !== null && m_r5.setsTeamTwo !== void 0 ? 25 : 26);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275conditional(m_r5.status === "PENDING_CONFIRMATION" ? 27 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r5.status === "DISPUTED" ? 28 : -1);
  }
}
function LandingComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 28);
    i0.\u0275\u0275repeaterCreate(1, LandingComponent_Conditional_45_For_2_Template, 29, 25, "div", 76, _forTrack0);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275repeater(ctx_r1.filteredMatches());
  }
}
var LandingComponent = class _LandingComponent {
  rankingService = inject(RankingService);
  matchService = inject(MatchService);
  classificationService = inject(ClassificationService);
  rankings = signal(
    [],
    ...ngDevMode ? [{ debugName: "rankings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRanking = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRanking" }] : (
      /* istanbul ignore next */
      []
    )
  );
  classification = signal(
    [],
    ...ngDevMode ? [{ debugName: "classification" }] : (
      /* istanbul ignore next */
      []
    )
  );
  matches = signal(
    [],
    ...ngDevMode ? [{ debugName: "matches" }] : (
      /* istanbul ignore next */
      []
    )
  );
  viewMode = signal(
    "official",
    ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  matchFilter = signal(
    "ALL",
    ...ngDevMode ? [{ debugName: "matchFilter" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingClassification = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingClassification" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.loadRankings();
  }
  loadRankings() {
    this.rankingService.getAll().subscribe({
      next: (res) => {
        this.rankings.set(res.data);
        if (res.data.length > 0) {
          this.selectedRanking.set(res.data[0]);
          this.loadRankingData(res.data[0].id);
        }
      }
    });
  }
  onRankingChange(id) {
    const found = this.rankings().find((r) => r.id === id);
    if (found) {
      this.selectedRanking.set(found);
      this.loadRankingData(found.id);
    }
  }
  loadRankingData(rankingId) {
    this.loadClassification(rankingId);
    this.loadMatches(rankingId);
  }
  loadClassification(rankingId) {
    this.loadingClassification.set(true);
    const obs = this.viewMode() === "official" ? this.classificationService.getOfficial(rankingId) : this.classificationService.getProvisional(rankingId);
    obs.subscribe({
      next: (res) => {
        this.classification.set(res.data);
        this.loadingClassification.set(false);
      },
      error: () => this.loadingClassification.set(false)
    });
  }
  loadMatches(rankingId) {
    this.matchService.getAll({ rankingId }).subscribe({
      next: (res) => {
        this.matches.set(res.data);
      }
    });
  }
  setMode(mode) {
    this.viewMode.set(mode);
    const r = this.selectedRanking();
    if (r)
      this.loadClassification(r.id);
  }
  setMatchFilter(filter) {
    this.matchFilter.set(filter);
  }
  filteredMatches() {
    const f = this.matchFilter();
    if (f === "ALL")
      return this.matches();
    return this.matches().filter((m) => m.status === f);
  }
  getTagSeverity(status) {
    switch (status) {
      case "CONFIRMED":
        return "success";
      case "PENDING_CONFIRMATION":
        return "warn";
      case "DISPUTED":
        return "danger";
      default:
        return "secondary";
    }
  }
  formatStatus(status) {
    switch (status) {
      case "CONFIRMED":
        return "Confirmado";
      case "PENDING_CONFIRMATION":
        return "Pendiente Confirmar";
      case "DISPUTED":
        return "En Disputa";
      case "PENDING_RESULT":
        return "Pendiente Resultado";
      default:
        return status;
    }
  }
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 108, vars: 11, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "landing-page"], [1, "hero-section"], [1, "hero-badge"], [1, "pulse-dot"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-subtitle"], [1, "ranking-selector-card", "glass-panel-glow"], [1, "info-strip", "container"], ["id", "clasificacion", 1, "section", "container"], [1, "section-header"], [1, "section-tag"], [1, "section-title"], [1, "table-switcher"], ["label", "Oficial (Confirmados)", "severity", "success", "size", "small", 3, "onClick", "outlined"], ["label", "Provisional (Todos)", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], [1, "glass-panel", "p-3"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-striped", 3, "value", "loading"], ["id", "partidos", 1, "section", "container"], [1, "filter-pills"], ["label", "Todos", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Confirmados", "size", "small", "severity", "success", 3, "onClick", "outlined"], ["label", "Pendientes", "size", "small", "severity", "warn", 3, "onClick", "outlined"], ["label", "En Incidencia", "size", "small", "severity", "danger", 3, "onClick", "outlined"], ["styleClass", "empty-card"], [1, "matches-grid"], ["id", "reglamento", 1, "section", "container"], [1, "scoring-rules-grid"], ["styleClass", "rule-card-p"], ["value", "VICTORIA DIRECTA", "severity", "success"], [1, "rule-heading", "mt-2"], [1, "points-comparison"], [1, "winner-points"], [1, "pts"], [1, "lbl"], [1, "loser-points"], [1, "rule-text", "mt-3"], ["value", "VICTORIA AJUSTADA", "severity", "info"], [1, "winner-points", "blue"], [1, "loser-points", "blue"], ["value", "VALIDACI\xD3N Y FECHAS", "severity", "warn"], [1, "rule-list", "mt-3"], [1, "pi", "pi-check", "text-green"], [1, "selector-header"], [1, "label"], [1, "dates-pill"], [1, "pi", "pi-calendar"], ["optionLabel", "name", "optionValue", "id", "placeholder", "Seleccionar Ranking", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel"], ["styleClass", "info-card-p"], [1, "info-card-inner"], [1, "pi", "pi-map-marker", "icon"], [1, "info-label"], [1, "info-val"], [1, "pi", "pi-chart-line", "icon"], [1, "pi", "pi-users", "icon"], [2, "width", "70px"], [1, "text-center", 2, "width", "80px"], [1, "text-center"], [1, "text-right", 2, "width", "120px"], [1, "pos-badge"], [1, "team-name"], [1, "player-names"], [1, "text-center", "font-bold"], [1, "text-center", "text-green", "font-bold"], [1, "text-center", "text-red", "font-bold"], [1, "diff-tag"], [1, "text-right"], [1, "points-val"], ["colspan", "8", 1, "text-center", "p-4", "text-muted"], [1, "pi", "pi-info-circle"], [1, "text-center", "p-4"], [1, "pi", "pi-calendar-times", 2, "font-size", "2rem", "color", "var(--text-dim)"], [1, "mt-2", "text-muted"], [1, "match-card", "glass-panel", 3, "confirmed", "disputed"], [1, "match-card", "glass-panel"], [1, "match-meta"], [3, "value", "severity"], [1, "match-date"], [1, "match-date", "text-dim"], [1, "match-teams-box"], [1, "match-team"], [1, "team-info"], [1, "team-title"], [1, "players-sub"], [1, "score-display"], [1, "sets-dash"], [1, "match-divider"], [1, "match-alert-pending"], [1, "match-alert-dispute"], [1, "pi", "pi-clock"], [1, "sets-num"], ["severity", "secondary", 3, "value"], [1, "pi", "pi-exclamation-triangle"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 3)(1, "section", 4)(2, "div", 5);
      i0.\u0275\u0275element(3, "span", 6);
      i0.\u0275\u0275text(4, " TEMPORADA ACTIVA 2026 ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "h1", 7);
      i0.\u0275\u0275text(6, " PASI\xD3N, COMPETICI\xD3N Y ");
      i0.\u0275\u0275element(7, "br");
      i0.\u0275\u0275elementStart(8, "span", 8);
      i0.\u0275\u0275text(9, "RANKING OFICIAL DE P\xC1DEL");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(10, "p", 9);
      i0.\u0275\u0275text(11, " Sigue la clasificaci\xF3n en tiempo real, consulta los enfrentamientos round-robin y confirma los resultados con el sistema oficial de puntuaci\xF3n federado. ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275conditionalCreate(12, LandingComponent_Conditional_12_Template, 10, 8, "div", 10);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275conditionalCreate(13, LandingComponent_Conditional_13_Template, 25, 3, "section", 11);
      i0.\u0275\u0275elementStart(14, "section", 12)(15, "div", 13)(16, "div")(17, "span", 14);
      i0.\u0275\u0275text(18, "TABLA DE POSICIONES");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "h2", 15);
      i0.\u0275\u0275text(20, "Clasificaci\xF3n del Ranking");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(21, "div", 16)(22, "p-button", 17);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_22_listener() {
        return ctx.setMode("official");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(23, "p-button", 18);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_23_listener() {
        return ctx.setMode("provisional");
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(24, "div", 19)(25, "p-table", 20);
      i0.\u0275\u0275template(26, LandingComponent_ng_template_26_Template, 17, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor)(28, LandingComponent_ng_template_28_Template, 26, 36, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor)(30, LandingComponent_ng_template_30_Template, 4, 0, "ng-template", null, 2, i0.\u0275\u0275templateRefExtractor);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(32, "section", 21)(33, "div", 13)(34, "div")(35, "span", 14);
      i0.\u0275\u0275text(36, "CALENDARIO DE JUEGO");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(37, "h2", 15);
      i0.\u0275\u0275text(38, "Partidos y Resultados");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(39, "div", 22)(40, "p-button", 23);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_40_listener() {
        return ctx.setMatchFilter("ALL");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(41, "p-button", 24);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_41_listener() {
        return ctx.setMatchFilter("CONFIRMED");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(42, "p-button", 25);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_42_listener() {
        return ctx.setMatchFilter("PENDING_CONFIRMATION");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(43, "p-button", 26);
      i0.\u0275\u0275listener("onClick", function LandingComponent_Template_p_button_onClick_43_listener() {
        return ctx.setMatchFilter("DISPUTED");
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275conditionalCreate(44, LandingComponent_Conditional_44_Template, 5, 0, "p-card", 27)(45, LandingComponent_Conditional_45_Template, 3, 0, "div", 28);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(46, "section", 29)(47, "div", 13)(48, "div")(49, "span", 14);
      i0.\u0275\u0275text(50, "NORMATIVA DE JUEGO");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(51, "h2", 15);
      i0.\u0275\u0275text(52, "Reglamento y Puntuaci\xF3n");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(53, "div", 30)(54, "p-card", 31);
      i0.\u0275\u0275element(55, "p-tag", 32);
      i0.\u0275\u0275elementStart(56, "h3", 33);
      i0.\u0275\u0275text(57, "Resultado 2 - 0");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(58, "div", 34)(59, "div", 35)(60, "span", 36);
      i0.\u0275\u0275text(61, "5");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(62, "span", 37);
      i0.\u0275\u0275text(63, "PUNTOS GANADOR");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(64, "div", 38)(65, "span", 36);
      i0.\u0275\u0275text(66, "1");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(67, "span", 37);
      i0.\u0275\u0275text(68, "PUNTO PERDEDOR");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(69, "p", 39);
      i0.\u0275\u0275text(70, " La victoria contundente en 2 sets otorga la m\xE1xima recompensa de 5 puntos al ganador y 1 punto de consolaci\xF3n al derrotado por disputar el partido. ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(71, "p-card", 31);
      i0.\u0275\u0275element(72, "p-tag", 40);
      i0.\u0275\u0275elementStart(73, "h3", 33);
      i0.\u0275\u0275text(74, "Resultado 2 - 1");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(75, "div", 34)(76, "div", 41)(77, "span", 36);
      i0.\u0275\u0275text(78, "4");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(79, "span", 37);
      i0.\u0275\u0275text(80, "PUNTOS GANADOR");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(81, "div", 42)(82, "span", 36);
      i0.\u0275\u0275text(83, "2");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(84, "span", 37);
      i0.\u0275\u0275text(85, "PUNTOS PERDEDOR");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(86, "p", 39);
      i0.\u0275\u0275text(87, " Los partidos re\xF1idos a 3 sets otorgan 4 puntos a la pareja ganadora y premian la resistencia del equipo perdedor con 2 puntos en la tabla. ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(88, "p-card", 31);
      i0.\u0275\u0275element(89, "p-tag", 43);
      i0.\u0275\u0275elementStart(90, "h3", 33);
      i0.\u0275\u0275text(91, "Flujo de Resultados");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(92, "ul", 44)(93, "li");
      i0.\u0275\u0275element(94, "i", 45);
      i0.\u0275\u0275elementStart(95, "strong");
      i0.\u0275\u0275text(96, "Fecha Real:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275text(97, " Se registra la fecha exacta dentro del periodo del ranking.");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(98, "li");
      i0.\u0275\u0275element(99, "i", 45);
      i0.\u0275\u0275elementStart(100, "strong");
      i0.\u0275\u0275text(101, "Confirmaci\xF3n Rival:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275text(102, " El rival debe verificar el resultado o comunicar incidencia.");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(103, "li");
      i0.\u0275\u0275element(104, "i", 45);
      i0.\u0275\u0275elementStart(105, "strong");
      i0.\u0275\u0275text(106, "Criterios Desempate:");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275text(107, " Puntos totales \u2192 Diferencia de sets \u2192 Puntos a favor.");
      i0.\u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      i0.\u0275\u0275advance(12);
      i0.\u0275\u0275conditional(ctx.rankings().length > 0 ? 12 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional((tmp_4_0 = ctx.selectedRanking()) ? 13 : -1, tmp_4_0);
      i0.\u0275\u0275advance(9);
      i0.\u0275\u0275property("outlined", ctx.viewMode() !== "official");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.viewMode() !== "provisional");
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("value", ctx.classification())("loading", ctx.loadingClassification());
      i0.\u0275\u0275advance(15);
      i0.\u0275\u0275property("outlined", ctx.matchFilter() !== "ALL");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.matchFilter() !== "CONFIRMED");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.matchFilter() !== "PENDING_CONFIRMATION");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.matchFilter() !== "DISPUTED");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.filteredMatches().length === 0 ? 44 : 45);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    FormsModule,
    i1.NgControlStatus,
    i1.NgModel,
    TableModule,
    i2.Table,
    ButtonModule,
    i3.Button,
    TagModule,
    i4.Tag,
    CardModule,
    i5.Card,
    BadgeModule,
    i6.Badge,
    SelectModule,
    i7.Select,
    i8.DatePipe
  ], styles: ["\n.landing-page[_ngcontent-%COMP%] {\n  padding-bottom: 4rem;\n}\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 1.25rem 2rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  padding: 0.35rem 0.9rem;\n  border-radius: var(--%NS%radius-full);\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--%NS%primary);\n  margin-bottom: 1.5rem;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background-color: var(--%NS%primary);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--%NS%primary);\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  line-height: 1.15;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 640px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #0284c7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--%NS%text-muted);\n  line-height: 1.6;\n  max-width: 700px;\n  margin: 0 auto 2.5rem;\n}\n.ranking-selector-card[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n  padding: 1.25rem;\n  text-align: left;\n}\n.selector-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.selector-header[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--%NS%primary);\n}\n.selector-header[_ngcontent-%COMP%]   .dates-pill[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.info-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n  margin-bottom: 4rem;\n}\n.info-card-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.info-card-inner[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--%NS%primary);\n  background: rgba(16, 185, 129, 0.12);\n  padding: 0.75rem;\n  border-radius: var(--%NS%radius-sm);\n}\n.info-card-inner[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  color: var(--%NS%text-dim);\n  font-weight: 700;\n}\n.info-card-inner[_ngcontent-%COMP%]   .info-val[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--%NS%text-main);\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--%NS%primary);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.table-switcher[_ngcontent-%COMP%], \n.filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.pos-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-weight: 800;\n  font-family: var(--%NS%font-heading);\n  background: #f1f5f9;\n  color: var(--%NS%text-main);\n  border: 1px solid #e2e8f0;\n}\n.pos-badge.gold[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: #fff;\n  border: none;\n}\n.pos-badge.silver[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #64748b);\n  color: #fff;\n  border: none;\n}\n.pos-badge.bronze[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b45309,\n      #78350f);\n  color: #fff;\n  border: none;\n}\n.team-name[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-weight: 700;\n  color: var(--%NS%text-main);\n  font-size: 1rem;\n}\n.player-names[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-muted);\n}\n.diff-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-dim);\n  margin-left: 0.25rem;\n}\n.diff-tag.pos[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.diff-tag.neg[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.points-val[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-weight: 900;\n  font-size: 1.25rem;\n  color: var(--%NS%primary);\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted);\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.matches-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 1.25rem;\n}\n.match-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.match-card.confirmed[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-confirmed);\n}\n.match-card.disputed[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-disputed);\n}\n.match-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.match-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--%NS%text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.match-teams-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.match-team[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.6rem 0.8rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--%NS%radius-sm);\n}\n.match-team.winner[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.match-team.winner[_ngcontent-%COMP%]   .team-title[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n}\n.team-title[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--%NS%text-main);\n  display: block;\n}\n.players-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-muted);\n  display: block;\n}\n.score-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sets-num[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: var(--%NS%text-main);\n  width: 24px;\n  text-align: center;\n}\n.sets-dash[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--%NS%text-dim);\n}\n.match-divider[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: var(--%NS%text-dim);\n}\n.match-divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--%NS%bg-surface);\n  padding: 0 0.5rem;\n}\n.match-alert-pending[_ngcontent-%COMP%], \n.match-alert-dispute[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--%NS%radius-sm);\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.match-alert-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  color: #b45309;\n}\n.match-alert-dispute[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: #b91c1c;\n}\n.scoring-rules-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.rule-heading[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.points-comparison[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n  border-radius: var(--%NS%radius-sm);\n  margin-top: 0.75rem;\n}\n.winner-points[_ngcontent-%COMP%], \n.loser-points[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.winner-points[_ngcontent-%COMP%]   .pts[_ngcontent-%COMP%], \n.loser-points[_ngcontent-%COMP%]   .pts[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-size: 2rem;\n  font-weight: 900;\n  color: var(--%NS%primary);\n  line-height: 1;\n}\n.winner-points[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%], \n.loser-points[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--%NS%text-dim);\n  font-weight: 700;\n  margin-top: 0.35rem;\n}\n.winner-points.blue[_ngcontent-%COMP%]   .pts[_ngcontent-%COMP%], \n.loser-points.blue[_ngcontent-%COMP%]   .pts[_ngcontent-%COMP%] {\n  color: var(--%NS%accent-cyan);\n}\n.rule-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--%NS%text-muted);\n  line-height: 1.5;\n}\n.rule-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n}\n.rule-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=landing.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      TableModule,
      ButtonModule,
      TagModule,
      CardModule,
      BadgeModule,
      SelectModule
    ], template: `<div class="landing-page">
  <!-- \u2500\u2500\u2500 HERO SECTION \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="hero-section">
    <div class="hero-badge">
      <span class="pulse-dot"></span> TEMPORADA ACTIVA 2026
    </div>
    <h1 class="hero-title">
      PASI\xD3N, COMPETICI\xD3N Y <br/>
      <span class="gradient-text">RANKING OFICIAL DE P\xC1DEL</span>
    </h1>
    <p class="hero-subtitle">
      Sigue la clasificaci\xF3n en tiempo real, consulta los enfrentamientos round-robin y confirma los resultados con el sistema oficial de puntuaci\xF3n federado.
    </p>

    <!-- Ranking Selector con PrimeNG Select -->
    @if (rankings().length > 0) {
      <div class="ranking-selector-card glass-panel-glow">
        <div class="selector-header">
          <span class="label">Ranking Seleccionado</span>
          <div class="dates-pill">
            <i class="pi pi-calendar"></i>
            {{ selectedRanking()?.startDate | date }} \u2192 {{ selectedRanking()?.endDate | date }}
          </div>
        </div>
        <p-select
          [options]="rankings()"
          optionLabel="name"
          optionValue="id"
          [ngModel]="selectedRanking()?.id"
          (ngModelChange)="onRankingChange($event)"
          placeholder="Seleccionar Ranking"
          styleClass="w-full">
        </p-select>
      </div>
    }
  </section>

  <!-- \u2500\u2500\u2500 RANKING INFO SUMMARY (PrimeNG Cards) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (selectedRanking(); as r) {
    <section class="info-strip container">
      <p-card styleClass="info-card-p">
        <div class="info-card-inner">
          <i class="pi pi-map-marker icon"></i>
          <div>
            <span class="info-label">Sede</span>
            <span class="info-val">{{ r.locationName || 'Club Central' }}</span>
          </div>
        </div>
      </p-card>

      <p-card styleClass="info-card-p">
        <div class="info-card-inner">
          <i class="pi pi-chart-line icon"></i>
          <div>
            <span class="info-label">Nivel</span>
            <span class="info-val">{{ r.levelName || 'Intermedio' }}</span>
          </div>
        </div>
      </p-card>

      <p-card styleClass="info-card-p">
        <div class="info-card-inner">
          <i class="pi pi-users icon"></i>
          <div>
            <span class="info-label">Categor\xEDa</span>
            <span class="info-val">{{ r.categoryName || 'Masculina' }}</span>
          </div>
        </div>
      </p-card>
    </section>
  }

  <!-- \u2500\u2500\u2500 CLASIFICACI\xD3N (PrimeNG p-table) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section id="clasificacion" class="section container">
    <div class="section-header">
      <div>
        <span class="section-tag">TABLA DE POSICIONES</span>
        <h2 class="section-title">Clasificaci\xF3n del Ranking</h2>
      </div>
      <div class="table-switcher">
        <p-button
          label="Oficial (Confirmados)"
          [outlined]="viewMode() !== 'official'"
          severity="success"
          size="small"
          (onClick)="setMode('official')">
        </p-button>
        <p-button
          label="Provisional (Todos)"
          [outlined]="viewMode() !== 'provisional'"
          severity="secondary"
          size="small"
          (onClick)="setMode('provisional')">
        </p-button>
      </div>
    </div>

    <div class="glass-panel p-3">
      <p-table
        [value]="classification()"
        [loading]="loadingClassification()"
        responsiveLayout="scroll"
        styleClass="p-datatable-striped">
        <ng-template #header>
          <tr>
            <th style="width: 70px;">Pos</th>
            <th>Equipo & Pareja</th>
            <th class="text-center" style="width: 80px;">PJ</th>
            <th class="text-center" style="width: 80px;">PG</th>
            <th class="text-center" style="width: 80px;">PP</th>
            <th class="text-center">Sets (DIF)</th>
            <th class="text-center">Puntos (DIF)</th>
            <th class="text-right" style="width: 120px;">TOTAL PTS</th>
          </tr>
        </ng-template>
        <ng-template #body let-row let-idx="rowIndex">
          <tr [class.podium-gold]="row.position === 1" [class.podium-silver]="row.position === 2" [class.podium-bronze]="row.position === 3">
            <td>
              <span class="pos-badge" [class.gold]="row.position === 1" [class.silver]="row.position === 2" [class.bronze]="row.position === 3">
                {{ row.position }}
              </span>
            </td>
            <td>
              <div class="team-name">{{ row.teamName }}</div>
              <div class="player-names">{{ row.player1 }} \u2022 {{ row.player2 }}</div>
            </td>
            <td class="text-center font-bold">{{ row.played }}</td>
            <td class="text-center text-green font-bold">{{ row.wins }}</td>
            <td class="text-center text-red font-bold">{{ row.losses }}</td>
            <td class="text-center">
              {{ row.setsWon }}/{{ row.setsLost }}
              <span class="diff-tag" [class.pos]="row.setsDiff > 0" [class.neg]="row.setsDiff < 0">
                ({{ row.setsDiff > 0 ? '+' : '' }}{{ row.setsDiff }})
              </span>
            </td>
            <td class="text-center">
              {{ row.pointsFor }}/{{ row.pointsAgainst }}
              <span class="diff-tag" [class.pos]="row.pointsDiff > 0" [class.neg]="row.pointsDiff < 0">
                ({{ row.pointsDiff > 0 ? '+' : '' }}{{ row.pointsDiff }})
              </span>
            </td>
            <td class="text-right">
              <span class="points-val">{{ row.totalPoints }}</span>
            </td>
          </tr>
        </ng-template>
        <ng-template #emptymessage>
          <tr>
            <td colspan="8" class="text-center p-4 text-muted">
              <i class="pi pi-info-circle"></i> No hay datos de clasificaci\xF3n disponibles a\xFAn.
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  </section>

  <!-- \u2500\u2500\u2500 PARTIDOS Y RESULTADOS (PrimeNG Tags & Cards) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section id="partidos" class="section container">
    <div class="section-header">
      <div>
        <span class="section-tag">CALENDARIO DE JUEGO</span>
        <h2 class="section-title">Partidos y Resultados</h2>
      </div>
      <div class="filter-pills">
        <p-button label="Todos" [outlined]="matchFilter() !== 'ALL'" size="small" severity="secondary" (onClick)="setMatchFilter('ALL')"></p-button>
        <p-button label="Confirmados" [outlined]="matchFilter() !== 'CONFIRMED'" size="small" severity="success" (onClick)="setMatchFilter('CONFIRMED')"></p-button>
        <p-button label="Pendientes" [outlined]="matchFilter() !== 'PENDING_CONFIRMATION'" size="small" severity="warn" (onClick)="setMatchFilter('PENDING_CONFIRMATION')"></p-button>
        <p-button label="En Incidencia" [outlined]="matchFilter() !== 'DISPUTED'" size="small" severity="danger" (onClick)="setMatchFilter('DISPUTED')"></p-button>
      </div>
    </div>

    @if (filteredMatches().length === 0) {
      <p-card styleClass="empty-card">
        <div class="text-center p-4">
          <i class="pi pi-calendar-times" style="font-size: 2rem; color: var(--text-dim);"></i>
          <p class="mt-2 text-muted">No hay partidos en esta categor\xEDa.</p>
        </div>
      </p-card>
    } @else {
      <div class="matches-grid">
        @for (m of filteredMatches(); track m.id) {
          <div class="match-card glass-panel" [class.confirmed]="m.status === 'CONFIRMED'" [class.disputed]="m.status === 'DISPUTED'">
            <div class="match-meta">
              <p-tag [value]="formatStatus(m.status)" [severity]="getTagSeverity(m.status)"></p-tag>
              @if (m.matchDate) {
                <span class="match-date"><i class="pi pi-calendar"></i> {{ m.matchDate | date }}</span>
              } @else {
                <span class="match-date text-dim"><i class="pi pi-clock"></i> Por disputar</span>
              }
            </div>

            <div class="match-teams-box">
              <div class="match-team" [class.winner]="m.setsTeamOne !== null && m.setsTeamTwo !== null && (m.setsTeamOne ?? 0) > (m.setsTeamTwo ?? 0)">
                <div class="team-info">
                  <span class="team-title">{{ m.teamOneName }}</span>
                  <span class="players-sub">{{ m.t1p1Name }} {{ m.t1p1Surname }} / {{ m.t1p2Name }} {{ m.t1p2Surname }}</span>
                </div>
                <div class="score-display">
                  @if (m.setsTeamOne !== null && m.setsTeamOne !== undefined) {
                    <span class="sets-num">{{ m.setsTeamOne }}</span>
                    <p-badge [value]="m.pointsTeamOne + ' pts'" severity="secondary"></p-badge>
                  } @else {
                    <span class="sets-dash">-</span>
                  }
                </div>
              </div>

              <div class="match-divider"><span>VS</span></div>

              <div class="match-team" [class.winner]="m.setsTeamOne !== null && m.setsTeamTwo !== null && (m.setsTeamTwo ?? 0) > (m.setsTeamOne ?? 0)">
                <div class="team-info">
                  <span class="team-title">{{ m.teamTwoName }}</span>
                  <span class="players-sub">{{ m.t2p1Name }} {{ m.t2p1Surname }} / {{ m.t2p2Name }} {{ m.t2p2Surname }}</span>
                </div>
                <div class="score-display">
                  @if (m.setsTeamTwo !== null && m.setsTeamTwo !== undefined) {
                    <span class="sets-num">{{ m.setsTeamTwo }}</span>
                    <p-badge [value]="m.pointsTeamTwo + ' pts'" severity="secondary"></p-badge>
                  } @else {
                    <span class="sets-dash">-</span>
                  }
                </div>
              </div>
            </div>

            @if (m.status === 'PENDING_CONFIRMATION') {
              <div class="match-alert-pending">
                <i class="pi pi-info-circle"></i> Resultado registrado por <strong>{{ m.submittedByEmail }}</strong>. Pendiente de confirmaci\xF3n.
              </div>
            }
            @if (m.status === 'DISPUTED') {
              <div class="match-alert-dispute">
                <i class="pi pi-exclamation-triangle"></i> Incidencia comunicada. En revisi\xF3n administrativa.
              </div>
            }
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2500\u2500\u2500 REGLAMENTO Y SISTEMA DE PUNTUACI\xD3N \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section id="reglamento" class="section container">
    <div class="section-header">
      <div>
        <span class="section-tag">NORMATIVA DE JUEGO</span>
        <h2 class="section-title">Reglamento y Puntuaci\xF3n</h2>
      </div>
    </div>

    <div class="scoring-rules-grid">
      <p-card styleClass="rule-card-p">
        <p-tag value="VICTORIA DIRECTA" severity="success"></p-tag>
        <h3 class="rule-heading mt-2">Resultado 2 - 0</h3>
        <div class="points-comparison">
          <div class="winner-points">
            <span class="pts">5</span>
            <span class="lbl">PUNTOS GANADOR</span>
          </div>
          <div class="loser-points">
            <span class="pts">1</span>
            <span class="lbl">PUNTO PERDEDOR</span>
          </div>
        </div>
        <p class="rule-text mt-3">
          La victoria contundente en 2 sets otorga la m\xE1xima recompensa de 5 puntos al ganador y 1 punto de consolaci\xF3n al derrotado por disputar el partido.
        </p>
      </p-card>

      <p-card styleClass="rule-card-p">
        <p-tag value="VICTORIA AJUSTADA" severity="info"></p-tag>
        <h3 class="rule-heading mt-2">Resultado 2 - 1</h3>
        <div class="points-comparison">
          <div class="winner-points blue">
            <span class="pts">4</span>
            <span class="lbl">PUNTOS GANADOR</span>
          </div>
          <div class="loser-points blue">
            <span class="pts">2</span>
            <span class="lbl">PUNTOS PERDEDOR</span>
          </div>
        </div>
        <p class="rule-text mt-3">
          Los partidos re\xF1idos a 3 sets otorgan 4 puntos a la pareja ganadora y premian la resistencia del equipo perdedor con 2 puntos en la tabla.
        </p>
      </p-card>

      <p-card styleClass="rule-card-p">
        <p-tag value="VALIDACI\xD3N Y FECHAS" severity="warn"></p-tag>
        <h3 class="rule-heading mt-2">Flujo de Resultados</h3>
        <ul class="rule-list mt-3">
          <li><i class="pi pi-check text-green"></i> <strong>Fecha Real:</strong> Se registra la fecha exacta dentro del periodo del ranking.</li>
          <li><i class="pi pi-check text-green"></i> <strong>Confirmaci\xF3n Rival:</strong> El rival debe verificar el resultado o comunicar incidencia.</li>
          <li><i class="pi pi-check text-green"></i> <strong>Criterios Desempate:</strong> Puntos totales \u2192 Diferencia de sets \u2192 Puntos a favor.</li>
        </ul>
      </p-card>
    </div>
  </section>
</div>
`, styles: ["/* projects/rpm-rankings/src/app/landing.component.scss */\n.landing-page {\n  padding-bottom: 4rem;\n}\n.hero-section {\n  text-align: center;\n  padding: 4rem 1.25rem 2rem;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  padding: 0.35rem 0.9rem;\n  border-radius: var(--radius-full);\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 1.5rem;\n}\n.pulse-dot {\n  width: 8px;\n  height: 8px;\n  background-color: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--primary);\n}\n.hero-title {\n  font-size: 2.8rem;\n  line-height: 1.15;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 640px) {\n  .hero-title {\n    font-size: 2rem;\n  }\n}\n.gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #059669 0%,\n      #0284c7 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-subtitle {\n  font-size: 1.05rem;\n  color: var(--text-muted);\n  line-height: 1.6;\n  max-width: 700px;\n  margin: 0 auto 2.5rem;\n}\n.ranking-selector-card {\n  max-width: 520px;\n  margin: 0 auto;\n  padding: 1.25rem;\n  text-align: left;\n}\n.selector-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.selector-header .label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--primary);\n}\n.selector-header .dates-pill {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.info-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n  margin-top: 1.5rem;\n  margin-bottom: 4rem;\n}\n.info-card-inner {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.info-card-inner .icon {\n  font-size: 1.5rem;\n  color: var(--primary);\n  background: rgba(16, 185, 129, 0.12);\n  padding: 0.75rem;\n  border-radius: var(--radius-sm);\n}\n.info-card-inner .info-label {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  font-weight: 700;\n}\n.info-card-inner .info-val {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--text-main);\n}\n.section {\n  margin-top: 4rem;\n}\n.section-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-tag {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--primary);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.section-title {\n  font-size: 1.8rem;\n}\n.table-switcher,\n.filter-pills {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.pos-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-weight: 800;\n  font-family: var(--font-heading);\n  background: #f1f5f9;\n  color: var(--text-main);\n  border: 1px solid #e2e8f0;\n}\n.pos-badge.gold {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: #fff;\n  border: none;\n}\n.pos-badge.silver {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #64748b);\n  color: #fff;\n  border: none;\n}\n.pos-badge.bronze {\n  background:\n    linear-gradient(\n      135deg,\n      #b45309,\n      #78350f);\n  color: #fff;\n  border: none;\n}\n.team-name {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  color: var(--text-main);\n  font-size: 1rem;\n}\n.player-names {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.diff-tag {\n  font-size: 0.75rem;\n  color: var(--text-dim);\n  margin-left: 0.25rem;\n}\n.diff-tag.pos {\n  color: #059669;\n}\n.diff-tag.neg {\n  color: #dc2626;\n}\n.points-val {\n  font-family: var(--font-heading);\n  font-weight: 900;\n  font-size: 1.25rem;\n  color: var(--primary);\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-green {\n  color: #059669;\n}\n.text-red {\n  color: #dc2626;\n}\n.text-muted {\n  color: var(--text-muted);\n}\n.w-full {\n  width: 100%;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.matches-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 1.25rem;\n}\n.match-card {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.match-card.confirmed {\n  border-left: 4px solid var(--status-confirmed);\n}\n.match-card.disputed {\n  border-left: 4px solid var(--status-disputed);\n}\n.match-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.match-date {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.match-teams-box {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.match-team {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.6rem 0.8rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--radius-sm);\n}\n.match-team.winner {\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.match-team.winner .team-title {\n  color: var(--primary);\n}\n.team-title {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--text-main);\n  display: block;\n}\n.players-sub {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: block;\n}\n.score-display {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sets-num {\n  font-family: var(--font-heading);\n  font-size: 1.4rem;\n  font-weight: 900;\n  color: var(--text-main);\n  width: 24px;\n  text-align: center;\n}\n.sets-dash {\n  font-size: 1.2rem;\n  color: var(--text-dim);\n}\n.match-divider {\n  text-align: center;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: var(--text-dim);\n}\n.match-divider span {\n  background: var(--bg-surface);\n  padding: 0 0.5rem;\n}\n.match-alert-pending,\n.match-alert-dispute {\n  font-size: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.match-alert-pending {\n  background: rgba(245, 158, 11, 0.12);\n  border: 1px solid rgba(245, 158, 11, 0.25);\n  color: #b45309;\n}\n.match-alert-dispute {\n  background: rgba(239, 68, 68, 0.12);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n  color: #b91c1c;\n}\n.scoring-rules-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.rule-heading {\n  font-size: 1.3rem;\n}\n.points-comparison {\n  display: flex;\n  gap: 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 1rem;\n  border-radius: var(--radius-sm);\n  margin-top: 0.75rem;\n}\n.winner-points,\n.loser-points {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.winner-points .pts,\n.loser-points .pts {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  font-weight: 900;\n  color: var(--primary);\n  line-height: 1;\n}\n.winner-points .lbl,\n.loser-points .lbl {\n  font-size: 0.65rem;\n  color: var(--text-dim);\n  font-weight: 700;\n  margin-top: 0.35rem;\n}\n.winner-points.blue .pts,\n.loser-points.blue .pts {\n  color: var(--accent-cyan);\n}\n.rule-text {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.rule-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.rule-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=landing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "projects/rpm-rankings/src/app/landing.component.ts", lineNumber: 32 });
})();

// projects/rpm-rankings/src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LandingComponent
  }
];
export {
  routes
};
//# sourceMappingURL=routes.js.map

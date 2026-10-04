// projects/rpm-teams/src/app/team-portal.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService, MatchService, TeamService } from "@core";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";
import { BadgeModule } from "primeng/badge";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { MessageService } from "primeng/api";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/dialog";
import * as i3 from "primeng/button";
import * as i4 from "primeng/tag";
import * as i5 from "primeng/badge";
import * as i6 from "@angular/common";
var _c0 = () => ({ width: "90vw", maxWidth: "520px" });
var _c1 = () => ({ width: "90vw", maxWidth: "500px" });
var _forTrack0 = ($index, $item) => $item.id;
function TeamPortalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 9);
    i0.\u0275\u0275element(1, "i", 34);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2(" Reserva: ", ctx_r0.team()?.reserveName, " ", ctx_r0.team()?.reserveSurname);
  }
}
function TeamPortalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 22);
    i0.\u0275\u0275element(1, "i", 35);
    i0.\u0275\u0275text(2, " Cargando partidos del equipo... ");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 23);
    i0.\u0275\u0275element(1, "i", 36);
    i0.\u0275\u0275text(2, " A\xFAn no hay partidos asignados para tu equipo en este ranking. ");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 41);
    i0.\u0275\u0275element(1, "i", 53);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275pipe(3, "date");
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1(" ", i0.\u0275\u0275pipeBind1(3, 1, m_r2.matchDate));
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "strong", 45);
    i0.\u0275\u0275text(1, "(T\xDA)");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 47)(1, "span", 54);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(3, "p-badge", 55);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", m_r2.setsTeamOne, " Sets");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("value", m_r2.pointsTeamOne + " pts");
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "strong", 45);
    i0.\u0275\u0275text(1, "(T\xDA)");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 47)(1, "span", 54);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(3, "p-badge", 55);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", m_r2.setsTeamTwo, " Sets");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("value", m_r2.pointsTeamTwo + " pts");
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "p-button", 56);
    i0.\u0275\u0275listener("onClick", function TeamPortalComponent_Conditional_46_For_2_Conditional_22_Template_p_button_onClick_0_listener() {
      i0.\u0275\u0275restoreView(_r3);
      const m_r2 = i0.\u0275\u0275nextContext().$implicit;
      const ctx_r0 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r0.openSubmitModal(m_r2));
    });
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 58)(1, "p-button", 59);
    i0.\u0275\u0275listener("onClick", function TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_0_Template_p_button_onClick_1_listener() {
      i0.\u0275\u0275restoreView(_r4);
      const m_r2 = i0.\u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r0.confirmMatch(m_r2));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(2, "p-button", 60);
    i0.\u0275\u0275listener("onClick", function TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_0_Template_p_button_onClick_2_listener() {
      i0.\u0275\u0275restoreView(_r4);
      const m_r2 = i0.\u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r0.openDisputeModal(m_r2));
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(3, "p", 61);
    i0.\u0275\u0275text(4, "El equipo rival ha registrado este resultado. \xBFEst\xE1s conforme?");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 57);
    i0.\u0275\u0275element(1, "i", 62);
    i0.\u0275\u0275text(2, " Resultado enviado por tu equipo. Esperando confirmaci\xF3n del rival. ");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275conditionalCreate(0, TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_0_Template, 5, 0)(1, TeamPortalComponent_Conditional_46_For_2_Conditional_23_Conditional_1_Template, 3, 0, "div", 57);
  }
  if (rf & 2) {
    const m_r2 = i0.\u0275\u0275nextContext().$implicit;
    const ctx_r0 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275conditional(ctx_r0.canIConfirm(m_r2) ? 0 : 1);
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 51);
    i0.\u0275\u0275element(1, "i", 63);
    i0.\u0275\u0275text(2, " Resultado oficial confirmado. Puntos sumados a la clasificaci\xF3n. ");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 52);
    i0.\u0275\u0275element(1, "i", 64);
    i0.\u0275\u0275text(2, " Incidencia comunicada. La administraci\xF3n est\xE1 revisando el acta. ");
    i0.\u0275\u0275elementEnd();
  }
}
function TeamPortalComponent_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    i0.\u0275\u0275element(2, "p-tag", 40);
    i0.\u0275\u0275conditionalCreate(3, TeamPortalComponent_Conditional_46_For_2_Conditional_3_Template, 4, 3, "span", 41);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "div", 42)(5, "div", 43)(6, "span", 44);
    i0.\u0275\u0275text(7);
    i0.\u0275\u0275conditionalCreate(8, TeamPortalComponent_Conditional_46_For_2_Conditional_8_Template, 2, 0, "strong", 45);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "span", 46);
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275conditionalCreate(11, TeamPortalComponent_Conditional_46_For_2_Conditional_11_Template, 4, 2, "div", 47);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(12, "div", 48);
    i0.\u0275\u0275text(13, "VS");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(14, "div", 43)(15, "span", 44);
    i0.\u0275\u0275text(16);
    i0.\u0275\u0275conditionalCreate(17, TeamPortalComponent_Conditional_46_For_2_Conditional_17_Template, 2, 0, "strong", 45);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "span", 46);
    i0.\u0275\u0275text(19);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275conditionalCreate(20, TeamPortalComponent_Conditional_46_For_2_Conditional_20_Template, 4, 2, "div", 47);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(21, "div", 49);
    i0.\u0275\u0275conditionalCreate(22, TeamPortalComponent_Conditional_46_For_2_Conditional_22_Template, 1, 0, "p-button", 50);
    i0.\u0275\u0275conditionalCreate(23, TeamPortalComponent_Conditional_46_For_2_Conditional_23_Template, 2, 1);
    i0.\u0275\u0275conditionalCreate(24, TeamPortalComponent_Conditional_46_For_2_Conditional_24_Template, 3, 0, "div", 51);
    i0.\u0275\u0275conditionalCreate(25, TeamPortalComponent_Conditional_46_For_2_Conditional_25_Template, 3, 0, "div", 52);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r0 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275classProp("confirmed", m_r2.status === "CONFIRMED")("disputed", m_r2.status === "DISPUTED")("pending-conf", m_r2.status === "PENDING_CONFIRMATION");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", ctx_r0.formatStatus(m_r2.status))("severity", ctx_r0.getTagSeverity(m_r2.status));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.matchDate ? 3 : -1);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275classProp("my-team", ctx_r0.isMyTeam(m_r2.teamOneId));
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", m_r2.teamOneName, " ");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(ctx_r0.isMyTeam(m_r2.teamOneId) ? 8 : -1);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", m_r2.t1p1Name, " / ", m_r2.t1p2Name);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.setsTeamOne !== null && m_r2.setsTeamOne !== void 0 ? 11 : -1);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275classProp("my-team", ctx_r0.isMyTeam(m_r2.teamTwoId));
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", m_r2.teamTwoName, " ");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(ctx_r0.isMyTeam(m_r2.teamTwoId) ? 17 : -1);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", m_r2.t2p1Name, " / ", m_r2.t2p2Name);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.setsTeamTwo !== null && m_r2.setsTeamTwo !== void 0 ? 20 : -1);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275conditional(m_r2.status === "PENDING_RESULT" ? 22 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.status === "PENDING_CONFIRMATION" ? 23 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.status === "CONFIRMED" ? 24 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(m_r2.status === "DISPUTED" ? 25 : -1);
  }
}
function TeamPortalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 24);
    i0.\u0275\u0275repeaterCreate(1, TeamPortalComponent_Conditional_46_For_2_Template, 26, 27, "div", 37, _forTrack0);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275repeater(ctx_r0.matches());
  }
}
function TeamPortalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 65)(1, "strong");
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(3, " vs ");
    i0.\u0275\u0275elementStart(4, "strong");
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "form", 27);
    i0.\u0275\u0275listener("ngSubmit", function TeamPortalComponent_Conditional_48_Template_form_ngSubmit_6_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.submitResult());
    });
    i0.\u0275\u0275elementStart(7, "div", 28)(8, "label", 66);
    i0.\u0275\u0275text(9, "Fecha real del partido");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(10, "input", 67);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function TeamPortalComponent_Conditional_48_Template_input_ngModelChange_10_listener($event) {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r0.formMatchDate, $event) || (ctx_r0.formMatchDate = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(11, "div", 68)(12, "label", 69);
    i0.\u0275\u0275text(13, "Resultado en Sets");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(14, "div", 70)(15, "button", 71);
    i0.\u0275\u0275listener("click", function TeamPortalComponent_Conditional_48_Template_button_click_15_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.setScore(2, 0));
    });
    i0.\u0275\u0275elementStart(16, "strong");
    i0.\u0275\u0275text(17, "2 - 0");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "span");
    i0.\u0275\u0275text(19);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(20, "button", 71);
    i0.\u0275\u0275listener("click", function TeamPortalComponent_Conditional_48_Template_button_click_20_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.setScore(2, 1));
    });
    i0.\u0275\u0275elementStart(21, "strong");
    i0.\u0275\u0275text(22, "2 - 1");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(23, "span");
    i0.\u0275\u0275text(24);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(25, "button", 71);
    i0.\u0275\u0275listener("click", function TeamPortalComponent_Conditional_48_Template_button_click_25_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.setScore(1, 2));
    });
    i0.\u0275\u0275elementStart(26, "strong");
    i0.\u0275\u0275text(27, "1 - 2");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(28, "span");
    i0.\u0275\u0275text(29);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(30, "button", 71);
    i0.\u0275\u0275listener("click", function TeamPortalComponent_Conditional_48_Template_button_click_30_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.setScore(0, 2));
    });
    i0.\u0275\u0275elementStart(31, "strong");
    i0.\u0275\u0275text(32, "0 - 2");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(33, "span");
    i0.\u0275\u0275text(34);
    i0.\u0275\u0275elementEnd()()()();
    i0.\u0275\u0275elementStart(35, "div", 72)(36, "span", 73);
    i0.\u0275\u0275text(37, "Previsualizaci\xF3n de Puntos en Backend:");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(38, "div", 74)(39, "div");
    i0.\u0275\u0275text(40);
    i0.\u0275\u0275elementStart(41, "strong");
    i0.\u0275\u0275text(42);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(43, "div");
    i0.\u0275\u0275text(44);
    i0.\u0275\u0275elementStart(45, "strong");
    i0.\u0275\u0275text(46);
    i0.\u0275\u0275elementEnd()()()();
    i0.\u0275\u0275elementStart(47, "div", 31)(48, "p-button", 32);
    i0.\u0275\u0275listener("onClick", function TeamPortalComponent_Conditional_48_Template_p_button_onClick_48_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.closeSubmitModal());
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(49, "p-button", 75);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx;
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(m_r6.teamOneName);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r6.teamTwoName);
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r0.formMatchDate);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275classProp("selected", ctx_r0.formSetsOne === 2 && ctx_r0.formSetsTwo === 0);
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamOneName, " gana (5/1 pts)");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classProp("selected", ctx_r0.formSetsOne === 2 && ctx_r0.formSetsTwo === 1);
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamOneName, " gana (4/2 pts)");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classProp("selected", ctx_r0.formSetsOne === 1 && ctx_r0.formSetsTwo === 2);
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamTwoName, " gana (2/4 pts)");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classProp("selected", ctx_r0.formSetsOne === 0 && ctx_r0.formSetsTwo === 2);
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamTwoName, " gana (1/5 pts)");
    i0.\u0275\u0275advance(6);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamOneName, ": ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", ctx_r0.previewPointsOne(), " pts");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", m_r6.teamTwoName, ": ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1("", ctx_r0.previewPointsTwo(), " pts");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("loading", ctx_r0.submitting())("disabled", ctx_r0.submitting() || ctx_r0.formSetsOne === null);
  }
}
var TeamPortalComponent = class _TeamPortalComponent {
  authService = inject(AuthService);
  matchService = inject(MatchService);
  teamService = inject(TeamService);
  messageService = inject(MessageService);
  team = signal(
    null,
    ...ngDevMode ? [{ debugName: "team" }] : (
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Submit modal state
  showSubmitModal = false;
  activeSubmitMatch = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeSubmitMatch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formMatchDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  formSetsOne = null;
  formSetsTwo = null;
  // Dispute modal state
  showDisputeModal = false;
  activeDisputeMatch = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeDisputeMatch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  disputeDescription = "";
  ngOnInit() {
    this.loadTeamData();
  }
  loadTeamData() {
    const user = this.authService.currentUser();
    if (!user?.teamId)
      return;
    this.loading.set(true);
    this.teamService.getById(user.teamId).subscribe({
      next: (res) => {
        this.team.set(res.data);
      }
    });
    this.matchService.getAll({ teamId: user.teamId }).subscribe({
      next: (res) => {
        this.matches.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  isMyTeam(teamId) {
    return this.authService.currentUser()?.teamId === teamId;
  }
  canIConfirm(m) {
    const user = this.authService.currentUser();
    if (!user?.teamId)
      return false;
    const isParticipant = m.teamOneId === user.teamId || m.teamTwoId === user.teamId;
    const isSubmitter = m.resultSubmittedBy === user.id;
    return isParticipant && !isSubmitter;
  }
  countConfirmed() {
    return this.matches().filter((m) => m.status === "CONFIRMED").length;
  }
  countPending() {
    return this.matches().filter((m) => m.status === "PENDING_RESULT" || m.status === "PENDING_CONFIRMATION").length;
  }
  openSubmitModal(m) {
    this.activeSubmitMatch.set(m);
    this.formMatchDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.formSetsOne = null;
    this.formSetsTwo = null;
    this.showSubmitModal = true;
  }
  closeSubmitModal() {
    this.showSubmitModal = false;
    this.activeSubmitMatch.set(null);
  }
  setScore(s1, s2) {
    this.formSetsOne = s1;
    this.formSetsTwo = s2;
  }
  previewPointsOne() {
    if (this.formSetsOne === null || this.formSetsTwo === null)
      return 0;
    if (this.formSetsOne === 2 && this.formSetsTwo === 0)
      return 5;
    if (this.formSetsOne === 2 && this.formSetsTwo === 1)
      return 4;
    if (this.formSetsOne === 1 && this.formSetsTwo === 2)
      return 2;
    if (this.formSetsOne === 0 && this.formSetsTwo === 2)
      return 1;
    return 0;
  }
  previewPointsTwo() {
    if (this.formSetsOne === null || this.formSetsTwo === null)
      return 0;
    if (this.formSetsTwo === 2 && this.formSetsOne === 0)
      return 5;
    if (this.formSetsTwo === 2 && this.formSetsOne === 1)
      return 4;
    if (this.formSetsTwo === 1 && this.formSetsOne === 2)
      return 2;
    if (this.formSetsTwo === 0 && this.formSetsOne === 2)
      return 1;
    return 0;
  }
  submitResult() {
    const m = this.activeSubmitMatch();
    if (!m || this.formSetsOne === null || this.formSetsTwo === null)
      return;
    this.submitting.set(true);
    this.matchService.submitResult(m.id, {
      matchDate: this.formMatchDate,
      setsTeamOne: this.formSetsOne,
      setsTeamTwo: this.formSetsTwo
    }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeSubmitModal();
        this.messageService.add({
          severity: "success",
          summary: "Resultado Registrado",
          detail: "Pendiente de confirmaci\xF3n del equipo rival."
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: err.error?.error || "Error al registrar el resultado."
        });
      }
    });
  }
  confirmMatch(m) {
    this.matchService.confirmResult(m.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Resultado Confirmado",
          detail: "La clasificaci\xF3n oficial ha sido actualizada."
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Error al Confirmar",
          detail: err.error?.error || "No se pudo confirmar el partido."
        });
      }
    });
  }
  openDisputeModal(m) {
    this.activeDisputeMatch.set(m);
    this.disputeDescription = "";
    this.showDisputeModal = true;
  }
  closeDisputeModal() {
    this.showDisputeModal = false;
    this.activeDisputeMatch.set(null);
  }
  submitDispute() {
    const m = this.activeDisputeMatch();
    if (!m || !this.disputeDescription.trim())
      return;
    this.submitting.set(true);
    this.matchService.disputeResult(m.id, this.disputeDescription).subscribe({
      next: () => {
        this.submitting.set(false);
        this.closeDisputeModal();
        this.messageService.add({
          severity: "warn",
          summary: "Incidencia Comunicada",
          detail: "La administraci\xF3n ha sido notificada para revisar el acta."
        });
        this.loadTeamData();
      },
      error: (err) => {
        this.submitting.set(false);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: err.error?.error || "Error al comunicar la incidencia."
        });
      }
    });
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
        return "Por Jugar";
      default:
        return status;
    }
  }
  static \u0275fac = function TeamPortalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamPortalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _TeamPortalComponent, selectors: [["app-team-portal"]], decls: 60, vars: 26, consts: [[1, "team-portal", "container"], [1, "portal-header", "glass-panel-glow"], [1, "header-main"], [1, "team-badge-large"], [1, "portal-subtitle"], [1, "portal-title"], [1, "team-players"], [1, "player-tag"], [1, "pi", "pi-user"], [1, "player-tag", "reserve"], [1, "header-stats"], [1, "stat-box"], [1, "stat-val"], [1, "stat-lbl"], [1, "stat-val", "text-green"], [1, "stat-val", "text-orange"], [1, "matches-section"], [1, "section-top"], [1, "section-tag"], [1, "section-title"], [1, "help-text"], [1, "pi", "pi-info-circle"], [1, "loading-box", "glass-panel"], [1, "empty-box", "glass-panel"], [1, "team-matches-grid"], ["styleClass", "custom-p-dialog", 3, "visibleChange", "visible", "modal", "header"], [1, "modal-sub"], [1, "modal-form", 3, "ngSubmit"], [1, "form-group"], ["for", "incidentDesc", 1, "form-label"], ["id", "incidentDesc", "rows", "4", "placeholder", "Ej: El resultado registrado no coincide con el acta del partido. Terminamos 1-2...", "name", "incidentDesc", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["label", "Cancelar", "severity", "secondary", 3, "onClick"], ["label", "Notificar Administrador", "icon", "pi pi-send", "severity", "danger", "type", "submit", 3, "loading", "disabled"], [1, "pi", "pi-user-plus"], [1, "pi", "pi-spin", "pi-spinner"], [1, "pi", "pi-calendar-times"], [1, "portal-match-card", "glass-panel", 3, "confirmed", "disputed", "pending-conf"], [1, "portal-match-card", "glass-panel"], [1, "card-top"], [3, "value", "severity"], [1, "m-date"], [1, "versus-layout"], [1, "team-side"], [1, "name"], [1, "you-tag"], [1, "sub"], [1, "score-pill"], [1, "vs-circle"], [1, "card-actions"], ["label", "Registrar Resultado", "icon", "pi pi-pencil", "severity", "success", "size", "small", "styleClass", "w-full"], [1, "confirmed-box"], [1, "disputed-box"], [1, "pi", "pi-calendar"], [1, "sets"], ["severity", "secondary", 3, "value"], ["label", "Registrar Resultado", "icon", "pi pi-pencil", "severity", "success", "size", "small", "styleClass", "w-full", 3, "onClick"], [1, "waiting-box"], [1, "confirm-actions"], ["label", "Confirmar Resultado", "icon", "pi pi-check", "severity", "success", "size", "small", "styleClass", "flex-1", 3, "onClick"], ["label", "Incidencia", "icon", "pi pi-flag", "severity", "danger", "size", "small", 3, "onClick"], [1, "small-hint"], [1, "pi", "pi-clock"], [1, "pi", "pi-check-circle", "text-green"], [1, "pi", "pi-exclamation-triangle", "text-red"], [1, "match-summary-pill"], ["for", "matchDate", 1, "form-label"], ["id", "matchDate", "type", "date", "name", "matchDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "sets-selector-group"], [1, "form-label"], [1, "sets-options"], ["type", "button", 1, "set-option-btn", 3, "click"], [1, "points-preview"], [1, "preview-title"], [1, "preview-cols"], ["label", "Enviar Resultado", "icon", "pi pi-check", "severity", "success", "type", "submit", 3, "loading", "disabled"]], template: function TeamPortalComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
      i0.\u0275\u0275text(4, "\u{1F3BE}");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "div")(6, "span", 4);
      i0.\u0275\u0275text(7, "ZONA PRIVADA DE EQUIPO");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(8, "h1", 5);
      i0.\u0275\u0275text(9);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(10, "div", 6)(11, "span", 7);
      i0.\u0275\u0275element(12, "i", 8);
      i0.\u0275\u0275text(13);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "span", 7);
      i0.\u0275\u0275element(15, "i", 8);
      i0.\u0275\u0275text(16);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275conditionalCreate(17, TeamPortalComponent_Conditional_17_Template, 3, 2, "span", 9);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "span", 12);
      i0.\u0275\u0275text(21);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(22, "span", 13);
      i0.\u0275\u0275text(23, "Partidos");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(24, "div", 11)(25, "span", 14);
      i0.\u0275\u0275text(26);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(27, "span", 13);
      i0.\u0275\u0275text(28, "Jugados");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(29, "div", 11)(30, "span", 15);
      i0.\u0275\u0275text(31);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(32, "span", 13);
      i0.\u0275\u0275text(33, "Pendientes");
      i0.\u0275\u0275elementEnd()()()();
      i0.\u0275\u0275elementStart(34, "section", 16)(35, "div", 17)(36, "div")(37, "span", 18);
      i0.\u0275\u0275text(38, "MIS ENFRENTAMIENTOS");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(39, "h2", 19);
      i0.\u0275\u0275text(40, "Calendario y Resultados");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(41, "span", 20);
      i0.\u0275\u0275element(42, "i", 21);
      i0.\u0275\u0275text(43, " Solo puedes gestionar partidos en los que participa tu propio equipo. ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275conditionalCreate(44, TeamPortalComponent_Conditional_44_Template, 3, 0, "div", 22)(45, TeamPortalComponent_Conditional_45_Template, 3, 0, "div", 23)(46, TeamPortalComponent_Conditional_46_Template, 3, 0, "div", 24);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(47, "p-dialog", 25);
      i0.\u0275\u0275twoWayListener("visibleChange", function TeamPortalComponent_Template_p_dialog_visibleChange_47_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showSubmitModal, $event) || (ctx.showSubmitModal = $event);
        return $event;
      });
      i0.\u0275\u0275conditionalCreate(48, TeamPortalComponent_Conditional_48_Template, 50, 21);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(49, "p-dialog", 25);
      i0.\u0275\u0275twoWayListener("visibleChange", function TeamPortalComponent_Template_p_dialog_visibleChange_49_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showDisputeModal, $event) || (ctx.showDisputeModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(50, "p", 26);
      i0.\u0275\u0275text(51, " Explica el motivo por el cual no est\xE1s de acuerdo con el resultado registrado por el equipo rival. ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(52, "form", 27);
      i0.\u0275\u0275listener("ngSubmit", function TeamPortalComponent_Template_form_ngSubmit_52_listener() {
        return ctx.submitDispute();
      });
      i0.\u0275\u0275elementStart(53, "div", 28)(54, "label", 29);
      i0.\u0275\u0275text(55, "Descripci\xF3n de la Incidencia");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(56, "textarea", 30);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function TeamPortalComponent_Template_textarea_ngModelChange_56_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.disputeDescription, $event) || (ctx.disputeDescription = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(57, "div", 31)(58, "p-button", 32);
      i0.\u0275\u0275listener("onClick", function TeamPortalComponent_Template_p_button_onClick_58_listener() {
        return ctx.closeDisputeModal();
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(59, "p-button", 33);
      i0.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_12_0;
      i0.\u0275\u0275advance(9);
      i0.\u0275\u0275textInterpolate(ctx.team()?.name || ctx.authService.currentUser()?.teamName || "Mi Equipo");
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275textInterpolate2(" ", ctx.team()?.player1Name, " ", ctx.team()?.player1Surname);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275textInterpolate2(" ", ctx.team()?.player2Name, " ", ctx.team()?.player2Surname);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.team()?.reserveName ? 17 : -1);
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275textInterpolate(ctx.matches().length);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275textInterpolate(ctx.countConfirmed());
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275textInterpolate(ctx.countPending());
      i0.\u0275\u0275advance(13);
      i0.\u0275\u0275conditional(ctx.loading() ? 44 : ctx.matches().length === 0 ? 45 : 46);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(24, _c0));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showSubmitModal);
      i0.\u0275\u0275property("modal", true)("header", "Registrar Resultado");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional((tmp_12_0 = ctx.activeSubmitMatch()) ? 48 : -1, tmp_12_0);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(25, _c1));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showDisputeModal);
      i0.\u0275\u0275property("modal", true)("header", "Comunicar Incidencia Arbitral");
      i0.\u0275\u0275advance(7);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.disputeDescription);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275property("loading", ctx.submitting())("disabled", ctx.submitting() || !ctx.disputeDescription.trim());
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    i1.\u0275NgNoValidate,
    i1.DefaultValueAccessor,
    i1.NgControlStatus,
    i1.NgControlStatusGroup,
    i1.RequiredValidator,
    i1.NgModel,
    i1.NgForm,
    DialogModule,
    i2.Dialog,
    ButtonModule,
    i3.Button,
    TagModule,
    i4.Tag,
    BadgeModule,
    i5.Badge,
    CardModule,
    InputTextModule,
    i6.DatePipe
  ], styles: ["\n.team-portal[_ngcontent-%COMP%] {\n  padding: 2rem 1.25rem 4rem;\n}\n.portal-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: var(--%NS%radius-lg);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.header-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.team-badge-large[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  filter: drop-shadow(0 0 15px rgba(0, 230, 118, 0.4));\n}\n.portal-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--%NS%accent-cyan);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.portal-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1.1;\n  margin: 0.2rem 0 0.5rem;\n}\n.team-players[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.player-tag[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--%NS%radius-sm);\n  color: var(--%NS%text-main);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.player-tag.reserve[_ngcontent-%COMP%] {\n  color: var(--%NS%accent-orange);\n  background: rgba(249, 115, 22, 0.1);\n  border-color: rgba(249, 115, 22, 0.25);\n}\n.header-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.stat-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1.25rem;\n  border-radius: var(--%NS%radius-sm);\n}\n.stat-box[_ngcontent-%COMP%]   .stat-val[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-size: 1.8rem;\n  font-weight: 900;\n  line-height: 1;\n  color: var(--%NS%text-main);\n}\n.stat-box[_ngcontent-%COMP%]   .stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--%NS%text-dim);\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-top: 0.25rem;\n}\n.section-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.help-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--%NS%text-dim);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.team-matches-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.5rem;\n}\n.portal-match-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.portal-match-card.confirmed[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-confirmed);\n}\n.portal-match-card.pending-conf[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-pending);\n}\n.portal-match-card.disputed[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-disputed);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.m-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--%NS%text-muted);\n}\n.versus-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--%NS%radius-sm);\n  padding: 1rem;\n  gap: 0.5rem;\n}\n.team-side[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.team-side.my-team[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n  font-weight: 800;\n}\n.team-side[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--%NS%text-main);\n}\n.team-side[_ngcontent-%COMP%]   .you-tag[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--%NS%primary);\n}\n.team-side[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-muted);\n}\n.score-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-top: 0.35rem;\n}\n.score-pill[_ngcontent-%COMP%]   .sets[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--%NS%text-main);\n}\n.vs-circle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 900;\n  color: var(--%NS%text-dim);\n  background: #e2e8f0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.small-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%text-muted);\n  text-align: center;\n}\n.waiting-box[_ngcontent-%COMP%], \n.confirmed-box[_ngcontent-%COMP%], \n.disputed-box[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.6rem 0.8rem;\n  border-radius: var(--%NS%radius-sm);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.waiting-box[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n  border: 1px solid rgba(245, 158, 11, 0.25);\n}\n.confirmed-box[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.disputed-box[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.match-summary-pill[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  padding: 0.6rem 1rem;\n  border-radius: var(--%NS%radius-sm);\n  font-size: 0.9rem;\n  color: var(--%NS%text-main);\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.modal-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n  margin-bottom: 1.25rem;\n}\n.sets-selector-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.sets-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.set-option-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: var(--%NS%radius-sm);\n  cursor: pointer;\n  color: var(--%NS%text-main);\n  transition: all 0.2s ease;\n}\n.set-option-btn[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--%NS%font-heading);\n  font-size: 1.2rem;\n  color: var(--%NS%text-main);\n}\n.set-option-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--%NS%text-dim);\n  margin-top: 0.2rem;\n}\n.set-option-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.set-option-btn.selected[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.12);\n  border-color: var(--%NS%primary);\n}\n.set-option-btn.selected[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n}\n.points-preview[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1rem;\n  border-radius: var(--%NS%radius-sm);\n  margin-bottom: 1.5rem;\n}\n.points-preview[_ngcontent-%COMP%]   .preview-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: var(--%NS%text-dim);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 0.35rem;\n}\n.points-preview[_ngcontent-%COMP%]   .preview-cols[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n}\n.points-preview[_ngcontent-%COMP%]   .preview-cols[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%primary);\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.empty-box[_ngcontent-%COMP%], \n.loading-box[_ngcontent-%COMP%] {\n  padding: 3rem;\n  text-align: center;\n  color: var(--%NS%text-muted);\n}\n/*# sourceMappingURL=team-portal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TeamPortalComponent, [{
    type: Component,
    args: [{ selector: "app-team-portal", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DialogModule,
      ButtonModule,
      TagModule,
      BadgeModule,
      CardModule,
      InputTextModule
    ], template: `<div class="team-portal container">
  <!-- \u2500\u2500\u2500 HEADER DE EQUIPO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="portal-header glass-panel-glow">
    <div class="header-main">
      <div class="team-badge-large">\u{1F3BE}</div>
      <div>
        <span class="portal-subtitle">ZONA PRIVADA DE EQUIPO</span>
        <h1 class="portal-title">{{ team()?.name || authService.currentUser()?.teamName || 'Mi Equipo' }}</h1>
        <div class="team-players">
          <span class="player-tag"><i class="pi pi-user"></i> {{ team()?.player1Name }} {{ team()?.player1Surname }}</span>
          <span class="player-tag"><i class="pi pi-user"></i> {{ team()?.player2Name }} {{ team()?.player2Surname }}</span>
          @if (team()?.reserveName) {
            <span class="player-tag reserve"><i class="pi pi-user-plus"></i> Reserva: {{ team()?.reserveName }} {{ team()?.reserveSurname }}</span>
          }
        </div>
      </div>
    </div>

    <div class="header-stats">
      <div class="stat-box">
        <span class="stat-val">{{ matches().length }}</span>
        <span class="stat-lbl">Partidos</span>
      </div>
      <div class="stat-box">
        <span class="stat-val text-green">{{ countConfirmed() }}</span>
        <span class="stat-lbl">Jugados</span>
      </div>
      <div class="stat-box">
        <span class="stat-val text-orange">{{ countPending() }}</span>
        <span class="stat-lbl">Pendientes</span>
      </div>
    </div>
  </header>

  <!-- \u2500\u2500\u2500 LISTADO DE PARTIDOS DEL EQUIPO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <section class="matches-section">
    <div class="section-top">
      <div>
        <span class="section-tag">MIS ENFRENTAMIENTOS</span>
        <h2 class="section-title">Calendario y Resultados</h2>
      </div>
      <span class="help-text">
        <i class="pi pi-info-circle"></i> Solo puedes gestionar partidos en los que participa tu propio equipo.
      </span>
    </div>

    @if (loading()) {
      <div class="loading-box glass-panel">
        <i class="pi pi-spin pi-spinner"></i> Cargando partidos del equipo...
      </div>
    } @else if (matches().length === 0) {
      <div class="empty-box glass-panel">
        <i class="pi pi-calendar-times"></i> A\xFAn no hay partidos asignados para tu equipo en este ranking.
      </div>
    } @else {
      <div class="team-matches-grid">
        @for (m of matches(); track m.id) {
          <div class="portal-match-card glass-panel" [class.confirmed]="m.status === 'CONFIRMED'" [class.disputed]="m.status === 'DISPUTED'" [class.pending-conf]="m.status === 'PENDING_CONFIRMATION'">
            <div class="card-top">
              <p-tag [value]="formatStatus(m.status)" [severity]="getTagSeverity(m.status)"></p-tag>
              @if (m.matchDate) {
                <span class="m-date"><i class="pi pi-calendar"></i> {{ m.matchDate | date }}</span>
              }
            </div>

            <!-- Enfrentamiento -->
            <div class="versus-layout">
              <div class="team-side" [class.my-team]="isMyTeam(m.teamOneId)">
                <span class="name">{{ m.teamOneName }} @if (isMyTeam(m.teamOneId)) { <strong class="you-tag">(T\xDA)</strong> }</span>
                <span class="sub">{{ m.t1p1Name }} / {{ m.t1p2Name }}</span>
                @if (m.setsTeamOne !== null && m.setsTeamOne !== undefined) {
                  <div class="score-pill">
                    <span class="sets">{{ m.setsTeamOne }} Sets</span>
                    <p-badge [value]="m.pointsTeamOne + ' pts'" severity="secondary"></p-badge>
                  </div>
                }
              </div>

              <div class="vs-circle">VS</div>

              <div class="team-side" [class.my-team]="isMyTeam(m.teamTwoId)">
                <span class="name">{{ m.teamTwoName }} @if (isMyTeam(m.teamTwoId)) { <strong class="you-tag">(T\xDA)</strong> }</span>
                <span class="sub">{{ m.t2p1Name }} / {{ m.t2p2Name }}</span>
                @if (m.setsTeamTwo !== null && m.setsTeamTwo !== undefined) {
                  <div class="score-pill">
                    <span class="sets">{{ m.setsTeamTwo }} Sets</span>
                    <p-badge [value]="m.pointsTeamTwo + ' pts'" severity="secondary"></p-badge>
                  </div>
                }
              </div>
            </div>

            <!-- Acciones PrimeNG Buttons -->
            <div class="card-actions">
              @if (m.status === 'PENDING_RESULT') {
                <p-button
                  label="Registrar Resultado"
                  icon="pi pi-pencil"
                  severity="success"
                  size="small"
                  styleClass="w-full"
                  (onClick)="openSubmitModal(m)">
                </p-button>
              }

              @if (m.status === 'PENDING_CONFIRMATION') {
                @if (canIConfirm(m)) {
                  <div class="confirm-actions">
                    <p-button
                      label="Confirmar Resultado"
                      icon="pi pi-check"
                      severity="success"
                      size="small"
                      styleClass="flex-1"
                      (onClick)="confirmMatch(m)">
                    </p-button>
                    <p-button
                      label="Incidencia"
                      icon="pi pi-flag"
                      severity="danger"
                      size="small"
                      (onClick)="openDisputeModal(m)">
                    </p-button>
                  </div>
                  <p class="small-hint">El equipo rival ha registrado este resultado. \xBFEst\xE1s conforme?</p>
                } @else {
                  <div class="waiting-box">
                    <i class="pi pi-clock"></i> Resultado enviado por tu equipo. Esperando confirmaci\xF3n del rival.
                  </div>
                }
              }

              @if (m.status === 'CONFIRMED') {
                <div class="confirmed-box">
                  <i class="pi pi-check-circle text-green"></i> Resultado oficial confirmado. Puntos sumados a la clasificaci\xF3n.
                </div>
              }

              @if (m.status === 'DISPUTED') {
                <div class="disputed-box">
                  <i class="pi pi-exclamation-triangle text-red"></i> Incidencia comunicada. La administraci\xF3n est\xE1 revisando el acta.
                </div>
              }
            </div>
          </div>
        }
      </div>
    }
  </section>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: REGISTRAR RESULTADO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog
    [(visible)]="showSubmitModal"
    [modal]="true"
    [header]="'Registrar Resultado'"
    [style]="{ width: '90vw', maxWidth: '520px' }"
    styleClass="custom-p-dialog">
    
    @if (activeSubmitMatch(); as m) {
      <div class="match-summary-pill">
        <strong>{{ m.teamOneName }}</strong> vs <strong>{{ m.teamTwoName }}</strong>
      </div>

      <form (ngSubmit)="submitResult()" class="modal-form">
        <div class="form-group">
          <label class="form-label" for="matchDate">Fecha real del partido</label>
          <input
            id="matchDate"
            type="date"
            class="form-control"
            [(ngModel)]="formMatchDate"
            name="matchDate"
            required
          />
        </div>

        <div class="sets-selector-group">
          <label class="form-label">Resultado en Sets</label>
          <div class="sets-options">
            <button
              type="button"
              class="set-option-btn"
              [class.selected]="formSetsOne === 2 && formSetsTwo === 0"
              (click)="setScore(2, 0)">
              <strong>2 - 0</strong>
              <span>{{ m.teamOneName }} gana (5/1 pts)</span>
            </button>
            <button
              type="button"
              class="set-option-btn"
              [class.selected]="formSetsOne === 2 && formSetsTwo === 1"
              (click)="setScore(2, 1)">
              <strong>2 - 1</strong>
              <span>{{ m.teamOneName }} gana (4/2 pts)</span>
            </button>
            <button
              type="button"
              class="set-option-btn"
              [class.selected]="formSetsOne === 1 && formSetsTwo === 2"
              (click)="setScore(1, 2)">
              <strong>1 - 2</strong>
              <span>{{ m.teamTwoName }} gana (2/4 pts)</span>
            </button>
            <button
              type="button"
              class="set-option-btn"
              [class.selected]="formSetsOne === 0 && formSetsTwo === 2"
              (click)="setScore(0, 2)">
              <strong>0 - 2</strong>
              <span>{{ m.teamTwoName }} gana (1/5 pts)</span>
            </button>
          </div>
        </div>

        <div class="points-preview">
          <span class="preview-title">Previsualizaci\xF3n de Puntos en Backend:</span>
          <div class="preview-cols">
            <div>{{ m.teamOneName }}: <strong>{{ previewPointsOne() }} pts</strong></div>
            <div>{{ m.teamTwoName }}: <strong>{{ previewPointsTwo() }} pts</strong></div>
          </div>
        </div>

        <div class="modal-actions">
          <p-button label="Cancelar" severity="secondary" (onClick)="closeSubmitModal()"></p-button>
          <p-button
            label="Enviar Resultado"
            icon="pi pi-check"
            severity="success"
            type="submit"
            [loading]="submitting()"
            [disabled]="submitting() || formSetsOne === null">
          </p-button>
        </div>
      </form>
    }
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: COMUNICAR INCIDENCIA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog
    [(visible)]="showDisputeModal"
    [modal]="true"
    [header]="'Comunicar Incidencia Arbitral'"
    [style]="{ width: '90vw', maxWidth: '500px' }"
    styleClass="custom-p-dialog">

    <p class="modal-sub">
      Explica el motivo por el cual no est\xE1s de acuerdo con el resultado registrado por el equipo rival.
    </p>

    <form (ngSubmit)="submitDispute()" class="modal-form">
      <div class="form-group">
        <label class="form-label" for="incidentDesc">Descripci\xF3n de la Incidencia</label>
        <textarea
          id="incidentDesc"
          class="form-control"
          rows="4"
          placeholder="Ej: El resultado registrado no coincide con el acta del partido. Terminamos 1-2..."
          [(ngModel)]="disputeDescription"
          name="incidentDesc"
          required
        ></textarea>
      </div>

      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="closeDisputeModal()"></p-button>
        <p-button
          label="Notificar Administrador"
          icon="pi pi-send"
          severity="danger"
          type="submit"
          [loading]="submitting()"
          [disabled]="submitting() || !disputeDescription.trim()">
        </p-button>
      </div>
    </form>
  </p-dialog>
</div>
`, styles: ["/* projects/rpm-teams/src/app/team-portal.component.scss */\n.team-portal {\n  padding: 2rem 1.25rem 4rem;\n}\n.portal-header {\n  padding: 2rem;\n  border-radius: var(--radius-lg);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.header-main {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.team-badge-large {\n  font-size: 3rem;\n  filter: drop-shadow(0 0 15px rgba(0, 230, 118, 0.4));\n}\n.portal-subtitle {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--accent-cyan);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.portal-title {\n  font-size: 2rem;\n  line-height: 1.1;\n  margin: 0.2rem 0 0.5rem;\n}\n.team-players {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.player-tag {\n  font-size: 0.8rem;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 0.25rem 0.6rem;\n  border-radius: var(--radius-sm);\n  color: var(--text-main);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.player-tag.reserve {\n  color: var(--accent-orange);\n  background: rgba(249, 115, 22, 0.1);\n  border-color: rgba(249, 115, 22, 0.25);\n}\n.header-stats {\n  display: flex;\n  gap: 1.5rem;\n}\n.stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1.25rem;\n  border-radius: var(--radius-sm);\n}\n.stat-box .stat-val {\n  font-family: var(--font-heading);\n  font-size: 1.8rem;\n  font-weight: 900;\n  line-height: 1;\n  color: var(--text-main);\n}\n.stat-box .stat-lbl {\n  font-size: 0.7rem;\n  color: var(--text-dim);\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-top: 0.25rem;\n}\n.section-top {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.help-text {\n  font-size: 0.8rem;\n  color: var(--text-dim);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.team-matches-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.5rem;\n}\n.portal-match-card {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.portal-match-card.confirmed {\n  border-left: 4px solid var(--status-confirmed);\n}\n.portal-match-card.pending-conf {\n  border-left: 4px solid var(--status-pending);\n}\n.portal-match-card.disputed {\n  border-left: 4px solid var(--status-disputed);\n}\n.card-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.m-date {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n}\n.versus-layout {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--radius-sm);\n  padding: 1rem;\n  gap: 0.5rem;\n}\n.team-side {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.team-side.my-team .name {\n  color: var(--primary);\n  font-weight: 800;\n}\n.team-side .name {\n  font-family: var(--font-heading);\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.team-side .you-tag {\n  font-size: 0.7rem;\n  color: var(--primary);\n}\n.team-side .sub {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.score-pill {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin-top: 0.35rem;\n}\n.score-pill .sets {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.vs-circle {\n  font-size: 0.7rem;\n  font-weight: 900;\n  color: var(--text-dim);\n  background: #e2e8f0;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.confirm-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.flex-1 {\n  flex: 1;\n}\n.w-full {\n  width: 100%;\n}\n.small-hint {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-align: center;\n}\n.waiting-box,\n.confirmed-box,\n.disputed-box {\n  font-size: 0.8rem;\n  padding: 0.6rem 0.8rem;\n  border-radius: var(--radius-sm);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.waiting-box {\n  background: rgba(245, 158, 11, 0.12);\n  color: #b45309;\n  border: 1px solid rgba(245, 158, 11, 0.25);\n}\n.confirmed-box {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n  border: 1px solid rgba(16, 185, 129, 0.25);\n}\n.disputed-box {\n  background: rgba(239, 68, 68, 0.12);\n  color: #b91c1c;\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.match-summary-pill {\n  background: rgba(16, 185, 129, 0.08);\n  border: 1px solid rgba(16, 185, 129, 0.25);\n  padding: 0.6rem 1rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  color: var(--text-main);\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.modal-sub {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 1.25rem;\n}\n.sets-selector-group {\n  margin-bottom: 1.25rem;\n}\n.sets-options {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.75rem;\n}\n.set-option-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  color: var(--text-main);\n  transition: all 0.2s ease;\n}\n.set-option-btn strong {\n  font-family: var(--font-heading);\n  font-size: 1.2rem;\n  color: var(--text-main);\n}\n.set-option-btn span {\n  font-size: 0.7rem;\n  color: var(--text-dim);\n  margin-top: 0.2rem;\n}\n.set-option-btn:hover {\n  background: #f1f5f9;\n}\n.set-option-btn.selected {\n  background: rgba(16, 185, 129, 0.12);\n  border-color: var(--primary);\n}\n.set-option-btn.selected strong {\n  color: var(--primary);\n}\n.points-preview {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem 1rem;\n  border-radius: var(--radius-sm);\n  margin-bottom: 1.5rem;\n}\n.points-preview .preview-title {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: var(--text-dim);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 0.35rem;\n}\n.points-preview .preview-cols {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n}\n.points-preview .preview-cols strong {\n  color: var(--primary);\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.empty-box,\n.loading-box {\n  padding: 3rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=team-portal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(TeamPortalComponent, { className: "TeamPortalComponent", filePath: "projects/rpm-teams/src/app/team-portal.component.ts", lineNumber: 31 });
})();

// projects/rpm-teams/src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: TeamPortalComponent
  }
];
export {
  routes
};
//# sourceMappingURL=routes.js.map

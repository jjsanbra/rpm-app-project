// projects/rpm-admin/src/app/admin-dashboard.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RankingService, TeamService, MatchService, IncidentService, AuditService, AuxiliaryService } from "@core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TagModule } from "primeng/tag";
import { BadgeModule } from "primeng/badge";
import { CardModule } from "primeng/card";
import { SelectModule } from "primeng/select";
import { InputTextModule } from "primeng/inputtext";
import { TooltipModule } from "primeng/tooltip";
import { MessageService } from "primeng/api";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "primeng/table";
import * as i3 from "primeng/button";
import * as i4 from "primeng/dialog";
import * as i5 from "primeng/tag";
import * as i6 from "primeng/card";
import * as i7 from "primeng/select";
import * as i8 from "primeng/tooltip";
import * as i9 from "@angular/common";
var _c0 = () => ({ width: "90vw", maxWidth: "580px" });
var _c1 = () => ({ width: "90vw", maxWidth: "560px" });
var _c2 = () => ({ width: "90vw", maxWidth: "520px" });
var _c3 = () => ({ width: "90vw", maxWidth: "500px" });
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 74)(1, "div", 75);
    i0.\u0275\u0275element(2, "p-tag", 76);
    i0.\u0275\u0275elementStart(3, "span", 77);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275pipe(5, "date");
    i0.\u0275\u0275pipe(6, "date");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(7, "h3", 78);
    i0.\u0275\u0275text(8);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "p", 79);
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "div", 80)(12, "span", 81);
    i0.\u0275\u0275element(13, "i", 82);
    i0.\u0275\u0275text(14);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "span", 81);
    i0.\u0275\u0275element(16, "i", 83);
    i0.\u0275\u0275text(17);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "span", 81);
    i0.\u0275\u0275element(19, "i", 84);
    i0.\u0275\u0275text(20);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(21, "div", 85)(22, "p-button", 86);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_15_For_7_Template_p_button_onClick_22_listener() {
      const r_r4 = i0.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.openEditRankingModal(r_r4));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(23, "p-button", 87);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_15_For_7_Template_p_button_onClick_23_listener() {
      const r_r4 = i0.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.toggleRankingActive(r_r4));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(24, "p-button", 88);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_15_For_7_Template_p_button_onClick_24_listener() {
      const r_r4 = i0.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.selectForMatches(r_r4));
    });
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", r_r4.active ? "ACTIVO" : "INACTIVO")("severity", r_r4.active ? "success" : "secondary");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", i0.\u0275\u0275pipeBind1(5, 12, r_r4.startDate), " \u2192 ", i0.\u0275\u0275pipeBind1(6, 14, r_r4.endDate));
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate(r_r4.name);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(r_r4.description || "Sin descripci\xF3n");
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275textInterpolate1(" ", r_r4.locationName || "Sede Club");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate1(" ", r_r4.levelName || "Nivel General");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate1(" ", r_r4.categoryName || "Categor\xEDa \xDAnica");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("outlined", true);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("label", r_r4.active ? "Desactivar" : "Activar")("severity", r_r4.active ? "secondary" : "success");
  }
}
function AdminDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "h2");
    i0.\u0275\u0275text(3, "Gesti\xF3n de Rankings");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "p-button", 72);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_15_Template_p_button_onClick_4_listener() {
      i0.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.openCreateRankingModal());
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(5, "div", 73);
    i0.\u0275\u0275repeaterCreate(6, AdminDashboardComponent_Conditional_15_For_7_Template, 25, 16, "div", 74, _forTrack0);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(6);
    i0.\u0275\u0275repeater(ctx_r1.rankings());
  }
}
function AdminDashboardComponent_Conditional_16_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "th");
    i0.\u0275\u0275text(2, "Nombre del Equipo");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "th");
    i0.\u0275\u0275text(4, "Titular 1");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "th");
    i0.\u0275\u0275text(6, "Titular 2");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "th");
    i0.\u0275\u0275text(8, "Reserva");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "th");
    i0.\u0275\u0275text(10, "Emails de Contacto");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "th");
    i0.\u0275\u0275text(12, "Estado");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(13, "th", 93);
    i0.\u0275\u0275text(14, "Acciones");
    i0.\u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_16_ng_template_12_For_12_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 94);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(e_r7);
  }
}
function AdminDashboardComponent_Conditional_16_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(4, "td");
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(6, "td");
    i0.\u0275\u0275text(7);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(8, "td");
    i0.\u0275\u0275text(9);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(10, "td");
    i0.\u0275\u0275repeaterCreate(11, AdminDashboardComponent_Conditional_16_ng_template_12_For_12_Template, 2, 1, "span", 94, i0.\u0275\u0275repeaterTrackByIdentity);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(13, "td");
    i0.\u0275\u0275element(14, "p-tag", 76);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "td", 95)(16, "p-button", 96);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_16_ng_template_12_Template_p_button_onClick_16_listener() {
      const t_r8 = i0.\u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.openEditTeamModal(t_r8));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(17, "p-button", 97);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_16_ng_template_12_Template_p_button_onClick_17_listener() {
      const t_r8 = i0.\u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.toggleTeamActive(t_r8));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "p-button", 98);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_16_ng_template_12_Template_p_button_onClick_18_listener() {
      const t_r8 = i0.\u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.resendWelcome(t_r8));
    });
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(t_r8.name);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", t_r8.player1Name, " ", t_r8.player1Surname);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", t_r8.player2Name, " ", t_r8.player2Surname);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(t_r8.reserveName ? t_r8.reserveName + " " + t_r8.reserveSurname : "-");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275repeater(ctx_r1.getTeamEmailsList(t_r8));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("value", t_r8.active ? "Activo" : "Inactivo")("severity", t_r8.active ? "success" : "danger");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("outlined", true);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("icon", t_r8.active ? "pi pi-ban" : "pi pi-check")("severity", t_r8.active ? "secondary" : "success")("outlined", true)("pTooltip", t_r8.active ? "Desactivar Equipo" : "Activar Equipo");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("outlined", true);
  }
}
function AdminDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "div")(3, "h2");
    i0.\u0275\u0275text(4, "Equipos Registrados");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p", 89);
    i0.\u0275\u0275text(6, "Los equipos son dados de alta exclusivamente por la administraci\xF3n y reciben un email con token de configuraci\xF3n de contrase\xF1a.");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(7, "p-button", 90);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_16_Template_p_button_onClick_7_listener() {
      i0.\u0275\u0275restoreView(_r5);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.openCreateTeamModal());
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(8, "div", 91)(9, "p-table", 92);
    i0.\u0275\u0275template(10, AdminDashboardComponent_Conditional_16_ng_template_10_Template, 15, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor)(12, AdminDashboardComponent_Conditional_16_ng_template_12_Template, 19, 14, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(9);
    i0.\u0275\u0275property("value", ctx_r1.teams())("paginator", true)("rows", 10);
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "th");
    i0.\u0275\u0275text(2, "Estado");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "th");
    i0.\u0275\u0275text(4, "Equipo 1");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "th");
    i0.\u0275\u0275text(6, "Equipo 2");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "th");
    i0.\u0275\u0275text(8, "Fecha Disputa");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "th");
    i0.\u0275\u0275text(10, "Resultado");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "th");
    i0.\u0275\u0275text(12, "Puntos Backend");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(13, "th", 93);
    i0.\u0275\u0275text(14, "Acci\xF3n Admin");
    i0.\u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "strong");
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate2("", m_r11.setsTeamOne, " - ", m_r11.setsTeamTwo);
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0, " - ");
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 102);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate2("", m_r11.pointsTeamOne, " / ", m_r11.pointsTeamTwo, " pts");
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0, " - ");
  }
}
function AdminDashboardComponent_Conditional_17_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "tr")(1, "td");
    i0.\u0275\u0275element(2, "p-tag", 76);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "td")(4, "strong");
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "td")(7, "strong");
    i0.\u0275\u0275text(8);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(9, "td");
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275pipe(11, "date");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(12, "td");
    i0.\u0275\u0275conditionalCreate(13, AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_13_Template, 2, 2, "strong")(14, AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_14_Template, 1, 0);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "td");
    i0.\u0275\u0275conditionalCreate(16, AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_16_Template, 2, 2, "span", 102)(17, AdminDashboardComponent_Conditional_17_ng_template_11_Conditional_17_Template, 1, 0);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "td", 93)(19, "p-button", 103);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_17_ng_template_11_Template_p_button_onClick_19_listener() {
      const m_r11 = i0.\u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.openAdminOverrideModal(m_r11));
    });
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", m_r11.status)("severity", ctx_r1.getTagSeverity(m_r11.status));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r11.teamOneName);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r11.teamTwoName);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(i0.\u0275\u0275pipeBind1(11, 7, m_r11.matchDate) || "Sin fecha");
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275conditional(m_r11.setsTeamOne !== null && m_r11.setsTeamTwo !== null ? 13 : 14);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275conditional(m_r11.pointsTeamOne !== null && m_r11.pointsTeamTwo !== null ? 16 : 17);
  }
}
function AdminDashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "div", 99)(3, "h2");
    i0.\u0275\u0275text(4, "Partidos");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p-select", 100);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_17_Template_p_select_ngModelChange_5_listener($event) {
      i0.\u0275\u0275restoreView(_r9);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.selectedRankingId, $event) || (ctx_r1.selectedRankingId = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275listener("ngModelChange", function AdminDashboardComponent_Conditional_17_Template_p_select_ngModelChange_5_listener() {
      i0.\u0275\u0275restoreView(_r9);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.loadMatchesForSelectedRanking());
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "p-button", 101);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_17_Template_p_button_onClick_6_listener() {
      i0.\u0275\u0275restoreView(_r9);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.generateRoundRobin());
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(7, "div", 91)(8, "p-table", 92);
    i0.\u0275\u0275template(9, AdminDashboardComponent_Conditional_17_ng_template_9_Template, 15, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor)(11, AdminDashboardComponent_Conditional_17_ng_template_11_Template, 20, 9, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275property("options", ctx_r1.rankings());
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedRankingId);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("value", ctx_r1.matches())("paginator", true)("rows", 10);
  }
}
function AdminDashboardComponent_Conditional_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p-card", 104)(1, "div", 106);
    i0.\u0275\u0275element(2, "i", 107);
    i0.\u0275\u0275elementStart(3, "p", 108);
    i0.\u0275\u0275text(4, "No hay incidencias pendientes. \xA1Todo en orden!");
    i0.\u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 115)(1, "strong");
    i0.\u0275\u0275text(2, "Resoluci\xF3n:");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inc_r12 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate1(" ", inc_r12.resolution, " ");
  }
}
function AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "div", 116)(1, "p-button", 117);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Conditional_13_Template_p_button_onClick_1_listener() {
      i0.\u0275\u0275restoreView(_r13);
      const inc_r12 = i0.\u0275\u0275nextContext().$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(3);
      return i0.\u0275\u0275resetView(ctx_r1.openResolveIncidentModal(inc_r12));
    });
    i0.\u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 110)(1, "div", 111);
    i0.\u0275\u0275element(2, "p-tag", 76);
    i0.\u0275\u0275elementStart(3, "span", 112);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275pipe(5, "date");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "div", 113);
    i0.\u0275\u0275text(7, " Reportado por: ");
    i0.\u0275\u0275elementStart(8, "strong");
    i0.\u0275\u0275text(9);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(10, "p", 114);
    i0.\u0275\u0275text(11);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275conditionalCreate(12, AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Conditional_12_Template, 4, 1, "div", 115);
    i0.\u0275\u0275conditionalCreate(13, AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Conditional_13_Template, 2, 0, "div", 116);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inc_r12 = ctx.$implicit;
    i0.\u0275\u0275classProp("open-border", inc_r12.status === "OPEN");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", inc_r12.status)("severity", inc_r12.status === "OPEN" ? "danger" : "success");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(i0.\u0275\u0275pipeBind1(5, 9, inc_r12.reportedAt));
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275textInterpolate(inc_r12.reportedByEmail || "Usuario");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1('"', inc_r12.description, '"');
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(inc_r12.resolution ? 12 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(inc_r12.status === "OPEN" ? 13 : -1);
  }
}
function AdminDashboardComponent_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 105);
    i0.\u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_18_Conditional_5_For_2_Template, 14, 11, "div", 109, _forTrack0);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275repeater(ctx_r1.incidents());
  }
}
function AdminDashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "h2");
    i0.\u0275\u0275text(3, "Incidencias y Disputas de Partidos");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275conditionalCreate(4, AdminDashboardComponent_Conditional_18_Conditional_4_Template, 5, 0, "p-card", 104)(5, AdminDashboardComponent_Conditional_18_Conditional_5_Template, 3, 0, "div", 105);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275conditional(ctx_r1.incidents().length === 0 ? 4 : 5);
  }
}
function AdminDashboardComponent_Conditional_19_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "th");
    i0.\u0275\u0275text(2, "Nombre");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "th");
    i0.\u0275\u0275text(4, "Descripci\xF3n");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "th", 93);
    i0.\u0275\u0275text(6, "Acciones");
    i0.\u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_19_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(4, "td");
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(6, "td", 93)(7, "p-button", 125);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_ng_template_15_Template_p_button_onClick_7_listener() {
      const item_r16 = i0.\u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = i0.\u0275\u0275nextContext(2);
      return i0.\u0275\u0275resetView(ctx_r1.deleteAuxItem(item_r16.id));
    });
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(item_r16.name);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(item_r16.description || "-");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("outlined", true);
  }
}
function AdminDashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "div")(3, "h2");
    i0.\u0275\u0275text(4, "Datos Maestros Desacoplados");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "div", 118)(6, "p-button", 119);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_Template_p_button_onClick_6_listener() {
      i0.\u0275\u0275restoreView(_r14);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.setAuxType("levels"));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "p-button", 120);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_Template_p_button_onClick_7_listener() {
      i0.\u0275\u0275restoreView(_r14);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.setAuxType("categories"));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(8, "p-button", 121);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_Template_p_button_onClick_8_listener() {
      i0.\u0275\u0275restoreView(_r14);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.setAuxType("locations"));
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "p-button", 122);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_Template_p_button_onClick_9_listener() {
      i0.\u0275\u0275restoreView(_r14);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.setAuxType("sponsors"));
    });
    i0.\u0275\u0275elementEnd()()();
    i0.\u0275\u0275elementStart(10, "p-button", 123);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_19_Template_p_button_onClick_10_listener() {
      i0.\u0275\u0275restoreView(_r14);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.openCreateAuxModal());
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(11, "div", 91)(12, "p-table", 124);
    i0.\u0275\u0275template(13, AdminDashboardComponent_Conditional_19_ng_template_13_Template, 7, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor)(15, AdminDashboardComponent_Conditional_19_ng_template_15_Template, 8, 3, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(6);
    i0.\u0275\u0275property("outlined", ctx_r1.auxType() !== "levels");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("outlined", ctx_r1.auxType() !== "categories");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("outlined", ctx_r1.auxType() !== "locations");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("outlined", ctx_r1.auxType() !== "sponsors");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("label", "A\xF1adir " + ctx_r1.auxType());
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275property("value", ctx_r1.auxItems());
  }
}
function AdminDashboardComponent_Conditional_20_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "th");
    i0.\u0275\u0275text(2, "Fecha / Hora");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "th");
    i0.\u0275\u0275text(4, "Acci\xF3n");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "th");
    i0.\u0275\u0275text(6, "Entidad");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "th");
    i0.\u0275\u0275text(8, "ID Entidad");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "th");
    i0.\u0275\u0275text(10, "Detalles");
    i0.\u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_20_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "td");
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275pipe(3, "date");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "td");
    i0.\u0275\u0275element(5, "p-tag", 126);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(6, "td")(7, "strong");
    i0.\u0275\u0275text(8);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(9, "td", 127);
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "td", 127);
    i0.\u0275\u0275text(12);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r17 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(i0.\u0275\u0275pipeBind1(3, 5, log_r17.createdAt));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("value", log_r17.action);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(log_r17.entity);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(log_r17.entityId);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(ctx_r1.formatLogData(log_r17.data));
  }
}
function AdminDashboardComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "section", 14)(1, "div", 71)(2, "h2");
    i0.\u0275\u0275text(3, "Registro de Auditor\xEDa de Seguridad");
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(4, "div", 91)(5, "p-table", 92);
    i0.\u0275\u0275template(6, AdminDashboardComponent_Conditional_20_ng_template_6_Template, 11, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor)(8, AdminDashboardComponent_Conditional_20_ng_template_8_Template, 13, 7, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275property("value", ctx_r1.auditLogs())("paginator", true)("rows", 15);
  }
}
function AdminDashboardComponent_Conditional_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275elementStart(0, "p", 128)(1, "strong");
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(3, " vs ");
    i0.\u0275\u0275elementStart(4, "strong");
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "form", 16);
    i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Conditional_180_Template_form_ngSubmit_6_listener() {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.submitAdminOverride());
    });
    i0.\u0275\u0275elementStart(7, "div", 21)(8, "div", 17)(9, "label", 18);
    i0.\u0275\u0275text(10);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(11, "input", 129);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_180_Template_input_ngModelChange_11_listener($event) {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.overrideSetsOne, $event) || (ctx_r1.overrideSetsOne = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(12, "div", 17)(13, "label", 18);
    i0.\u0275\u0275text(14);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(15, "input", 130);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_180_Template_input_ngModelChange_15_listener($event) {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.overrideSetsTwo, $event) || (ctx_r1.overrideSetsTwo = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()()();
    i0.\u0275\u0275elementStart(16, "div", 17)(17, "label", 18);
    i0.\u0275\u0275text(18, "Estado del Partido");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(19, "select", 131);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_180_Template_select_ngModelChange_19_listener($event) {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.overrideStatus, $event) || (ctx_r1.overrideStatus = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementStart(20, "option", 132);
    i0.\u0275\u0275text(21, "CONFIRMED (Oficial)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(22, "option", 133);
    i0.\u0275\u0275text(23, "PENDING_RESULT (Reiniciar)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(24, "option", 134);
    i0.\u0275\u0275text(25, "CANCELLED (Cancelado)");
    i0.\u0275\u0275elementEnd()()();
    i0.\u0275\u0275elementStart(26, "div", 17)(27, "label", 18);
    i0.\u0275\u0275text(28, "Motivo / Acta de Resoluci\xF3n (Auditado)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(29, "input", 135);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Conditional_180_Template_input_ngModelChange_29_listener($event) {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.overrideReason, $event) || (ctx_r1.overrideReason = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(30, "div", 27)(31, "p-button", 28);
    i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Conditional_180_Template_p_button_onClick_31_listener() {
      i0.\u0275\u0275restoreView(_r18);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.showOverrideModal = false);
    });
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(32, "p-button", 136);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r19 = ctx;
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(m_r19.teamOneName);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(m_r19.teamTwoName);
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275textInterpolate1("Sets ", m_r19.teamOneName);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.overrideSetsOne);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate1("Sets ", m_r19.teamTwoName);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.overrideSetsTwo);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.overrideStatus);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(10);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.overrideReason);
    i0.\u0275\u0275control();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  rankingService = inject(RankingService);
  teamService = inject(TeamService);
  matchService = inject(MatchService);
  incidentService = inject(IncidentService);
  auditService = inject(AuditService);
  auxService = inject(AuxiliaryService);
  messageService = inject(MessageService);
  activeTab = signal(
    "rankings",
    ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rankings = signal(
    [],
    ...ngDevMode ? [{ debugName: "rankings" }] : (
      /* istanbul ignore next */
      []
    )
  );
  teams = signal(
    [],
    ...ngDevMode ? [{ debugName: "teams" }] : (
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
  incidents = signal(
    [],
    ...ngDevMode ? [{ debugName: "incidents" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auditLogs = signal(
    [],
    ...ngDevMode ? [{ debugName: "auditLogs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auxItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "auxItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auxType = signal(
    "levels",
    ...ngDevMode ? [{ debugName: "auxType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRankingId = "";
  levelsList = signal(
    [],
    ...ngDevMode ? [{ debugName: "levelsList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categoriesList = signal(
    [],
    ...ngDevMode ? [{ debugName: "categoriesList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  locationsList = signal(
    [],
    ...ngDevMode ? [{ debugName: "locationsList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Modals visibility
  showCreateRankingModal = false;
  newRankingName = "";
  newRankingDesc = "";
  newRankingStart = "2026-11-01";
  newRankingEnd = "2026-12-31";
  newRankingLocationId = "";
  newRankingLevelId = "";
  newRankingCategoryId = "";
  showEditRankingModal = false;
  editRankingId = "";
  editRankingName = "";
  editRankingDesc = "";
  editRankingStart = "";
  editRankingEnd = "";
  editRankingLocationId = "";
  editRankingLevelId = "";
  editRankingCategoryId = "";
  showCreateTeamModal = false;
  newTeamName = "";
  newTeamP1N = "";
  newTeamP1S = "";
  newTeamP2N = "";
  newTeamP2S = "";
  newTeamRN = "";
  newTeamRS = "";
  newTeamEmail1 = "";
  newTeamEmail2 = "";
  showEditTeamModal = false;
  editTeamId = "";
  editTeamName = "";
  editTeamP1N = "";
  editTeamP1S = "";
  editTeamP2N = "";
  editTeamP2S = "";
  editTeamRN = "";
  editTeamRS = "";
  editTeamEmail1 = "";
  editTeamEmail2 = "";
  showOverrideModal = false;
  activeOverrideMatch = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeOverrideMatch" }] : (
      /* istanbul ignore next */
      []
    )
  );
  overrideSetsOne = 0;
  overrideSetsTwo = 0;
  overrideStatus = "CONFIRMED";
  overrideReason = "";
  showResolveIncidentModal = false;
  activeResolveIncident = signal(
    null,
    ...ngDevMode ? [{ debugName: "activeResolveIncident" }] : (
      /* istanbul ignore next */
      []
    )
  );
  incResolveStatus = "RESOLVED";
  incResolution = "";
  showCreateAuxModal = false;
  newAuxName = "";
  newAuxDesc = "";
  ngOnInit() {
    this.loadAllData();
  }
  loadAllData() {
    this.loadRankings();
    this.loadTeams();
    this.loadIncidents();
    this.loadAuditLogs();
    this.loadAuxItems();
    this.loadAllAuxCatalogs();
  }
  loadAllAuxCatalogs() {
    this.auxService.getItems("levels").subscribe({
      next: (res) => this.levelsList.set(res.data)
    });
    this.auxService.getItems("categories").subscribe({
      next: (res) => this.categoriesList.set(res.data)
    });
    this.auxService.getItems("locations").subscribe({
      next: (res) => this.locationsList.set(res.data)
    });
  }
  setTab(tab) {
    this.activeTab.set(tab);
    if (tab === "matches" && this.selectedRankingId) {
      this.loadMatchesForSelectedRanking();
    }
    if (tab === "audit") {
      this.loadAuditLogs();
    }
  }
  loadRankings() {
    this.rankingService.getAll().subscribe({
      next: (res) => {
        this.rankings.set(res.data);
        if (res.data.length > 0 && !this.selectedRankingId) {
          this.selectedRankingId = res.data[0].id;
          this.loadMatchesForSelectedRanking();
        }
      }
    });
  }
  loadTeams() {
    this.teamService.getAll().subscribe({
      next: (res) => this.teams.set(res.data)
    });
  }
  loadMatchesForSelectedRanking() {
    if (!this.selectedRankingId)
      return;
    this.matchService.getAll({ rankingId: this.selectedRankingId }).subscribe({
      next: (res) => this.matches.set(res.data)
    });
  }
  loadIncidents() {
    this.incidentService.getAll().subscribe({
      next: (res) => this.incidents.set(res.data)
    });
  }
  loadAuditLogs() {
    this.auditService.getLogs().subscribe({
      next: (res) => this.auditLogs.set(res.data)
    });
  }
  loadAuxItems() {
    this.auxService.getItems(this.auxType()).subscribe({
      next: (res) => {
        this.auxItems.set(res.data);
        this.loadAllAuxCatalogs();
      }
    });
  }
  setAuxType(type) {
    this.auxType.set(type);
    this.loadAuxItems();
  }
  openIncidentsCount() {
    return this.incidents().filter((i) => i.status === "OPEN").length;
  }
  getTeamEmailsList(team) {
    if (!team.emails)
      return [];
    if (typeof team.emails[0] === "string")
      return team.emails;
    return team.emails.map((e) => e.email);
  }
  // Create & Edit Ranking
  openCreateRankingModal() {
    this.newRankingName = "";
    this.newRankingDesc = "";
    this.newRankingStart = "2026-11-01";
    this.newRankingEnd = "2026-12-31";
    this.newRankingLocationId = "";
    this.newRankingLevelId = "";
    this.newRankingCategoryId = "";
    this.showCreateRankingModal = true;
  }
  createRanking() {
    this.rankingService.create({
      name: this.newRankingName,
      description: this.newRankingDesc,
      startDate: this.newRankingStart,
      endDate: this.newRankingEnd,
      locationId: this.newRankingLocationId || void 0,
      levelId: this.newRankingLevelId || void 0,
      categoryId: this.newRankingCategoryId || void 0,
      active: true
    }).subscribe({
      next: () => {
        this.showCreateRankingModal = false;
        this.messageService.add({ severity: "success", summary: "Ranking Creado", detail: "El ranking ha sido creado correctamente." });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al crear el ranking." })
    });
  }
  openEditRankingModal(r) {
    this.editRankingId = r.id;
    this.editRankingName = r.name;
    this.editRankingDesc = r.description || "";
    this.editRankingStart = r.startDate || "";
    this.editRankingEnd = r.endDate || "";
    this.editRankingLocationId = r.locationId || "";
    this.editRankingLevelId = r.levelId || "";
    this.editRankingCategoryId = r.categoryId || "";
    this.showEditRankingModal = true;
  }
  saveEditRanking() {
    if (!this.editRankingId)
      return;
    this.rankingService.update(this.editRankingId, {
      name: this.editRankingName,
      description: this.editRankingDesc,
      startDate: this.editRankingStart,
      endDate: this.editRankingEnd,
      locationId: this.editRankingLocationId || null,
      levelId: this.editRankingLevelId || null,
      categoryId: this.editRankingCategoryId || null
    }).subscribe({
      next: () => {
        this.showEditRankingModal = false;
        this.messageService.add({ severity: "success", summary: "Ranking Actualizado", detail: "Categor\xEDa, nivel, sede y datos del ranking actualizados con \xE9xito." });
        this.loadRankings();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al actualizar el ranking." })
    });
  }
  toggleRankingActive(r) {
    this.rankingService.toggleActive(r.id, !r.active).subscribe({
      next: () => {
        this.messageService.add({ severity: "info", summary: "Estado Actualizado", detail: `Ranking ${!r.active ? "activado" : "desactivado"}.` });
        this.loadRankings();
      }
    });
  }
  selectForMatches(r) {
    this.selectedRankingId = r.id;
    this.setTab("matches");
    this.loadMatchesForSelectedRanking();
  }
  // Create Team
  openCreateTeamModal() {
    this.newTeamName = "";
    this.newTeamP1N = "";
    this.newTeamP1S = "";
    this.newTeamP2N = "";
    this.newTeamP2S = "";
    this.newTeamRN = "";
    this.newTeamRS = "";
    this.newTeamEmail1 = "";
    this.newTeamEmail2 = "";
    this.showCreateTeamModal = true;
  }
  createTeam() {
    const emails = [this.newTeamEmail1];
    if (this.newTeamEmail2.trim())
      emails.push(this.newTeamEmail2.trim());
    this.teamService.create({
      name: this.newTeamName,
      player1Name: this.newTeamP1N,
      player1Surname: this.newTeamP1S,
      player2Name: this.newTeamP2N,
      player2Surname: this.newTeamP2S,
      reserveName: this.newTeamRN.trim() || null,
      reserveSurname: this.newTeamRS.trim() || null,
      emails
    }).subscribe({
      next: () => {
        this.showCreateTeamModal = false;
        this.messageService.add({ severity: "success", summary: "Equipo Registrado", detail: "Email de bienvenida enviado con token de acceso." });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al crear el equipo." })
    });
  }
  openEditTeamModal(t) {
    this.editTeamId = t.id;
    this.editTeamName = t.name;
    this.editTeamP1N = t.player1Name;
    this.editTeamP1S = t.player1Surname;
    this.editTeamP2N = t.player2Name;
    this.editTeamP2S = t.player2Surname;
    this.editTeamRN = t.reserveName || "";
    this.editTeamRS = t.reserveSurname || "";
    const emails = this.getTeamEmailsList(t);
    this.editTeamEmail1 = emails[0] || "";
    this.editTeamEmail2 = emails[1] || "";
    this.showEditTeamModal = true;
  }
  saveEditTeam() {
    if (!this.editTeamId)
      return;
    const emails = [this.editTeamEmail1];
    if (this.editTeamEmail2.trim())
      emails.push(this.editTeamEmail2.trim());
    this.teamService.update(this.editTeamId, {
      name: this.editTeamName,
      player1Name: this.editTeamP1N,
      player1Surname: this.editTeamP1S,
      player2Name: this.editTeamP2N,
      player2Surname: this.editTeamP2S,
      reserveName: this.editTeamRN.trim() || null,
      reserveSurname: this.editTeamRS.trim() || null,
      emails
    }).subscribe({
      next: () => {
        this.showEditTeamModal = false;
        this.messageService.add({ severity: "success", summary: "Equipo Actualizado", detail: "Datos del equipo y usuarios actualizados con \xE9xito." });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al actualizar el equipo." })
    });
  }
  toggleTeamActive(t) {
    this.teamService.toggleActive(t.id, !t.active).subscribe({
      next: () => {
        this.messageService.add({ severity: "info", summary: "Estado Actualizado", detail: `Equipo ${!t.active ? "activado" : "desactivado"}.` });
        this.loadTeams();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al cambiar estado del equipo." })
    });
  }
  resendWelcome(t) {
    this.teamService.resendWelcome(t.id).subscribe({
      next: () => this.messageService.add({ severity: "success", summary: "Email Enviado", detail: `Email de acceso reenviado a ${t.name}.` }),
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al reenviar email." })
    });
  }
  // Round-Robin Generator
  generateRoundRobin() {
    if (!this.selectedRankingId)
      return;
    const teamIds = this.teams().map((t) => t.id);
    if (teamIds.length < 4) {
      this.messageService.add({ severity: "warn", summary: "Equipos Insuficientes", detail: "Se necesitan al menos 4 equipos para generar partidos." });
      return;
    }
    this.matchService.generateMatches(this.selectedRankingId, teamIds).subscribe({
      next: (res) => {
        this.messageService.add({ severity: "success", summary: "Partidos Generados", detail: res.data.message || "Calendario round-robin generado con \xE9xito." });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al generar partidos." })
    });
  }
  // Admin Override Match
  openAdminOverrideModal(m) {
    this.activeOverrideMatch.set(m);
    this.overrideSetsOne = m.setsTeamOne ?? 0;
    this.overrideSetsTwo = m.setsTeamTwo ?? 0;
    this.overrideStatus = m.status === "PENDING_RESULT" ? "CONFIRMED" : m.status;
    this.overrideReason = "";
    this.showOverrideModal = true;
  }
  submitAdminOverride() {
    const m = this.activeOverrideMatch();
    if (!m)
      return;
    this.matchService.adminOverride(m.id, {
      setsTeamOne: this.overrideSetsOne,
      setsTeamTwo: this.overrideSetsTwo,
      status: this.overrideStatus,
      matchDate: m.matchDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      reason: this.overrideReason
    }).subscribe({
      next: () => {
        this.showOverrideModal = false;
        this.activeOverrideMatch.set(null);
        this.messageService.add({ severity: "success", summary: "Partido Modificado", detail: "Puntos y clasificaci\xF3n recalculados." });
        this.loadMatchesForSelectedRanking();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al modificar el partido." })
    });
  }
  // Resolve Incident
  openResolveIncidentModal(inc) {
    this.activeResolveIncident.set(inc);
    this.incResolveStatus = "RESOLVED";
    this.incResolution = "";
    this.showResolveIncidentModal = true;
  }
  submitResolveIncident() {
    const inc = this.activeResolveIncident();
    if (!inc)
      return;
    this.incidentService.resolve(inc.id, {
      status: this.incResolveStatus,
      resolution: this.incResolution
    }).subscribe({
      next: () => {
        this.showResolveIncidentModal = false;
        this.activeResolveIncident.set(null);
        this.messageService.add({ severity: "success", summary: "Incidencia Resuelta", detail: "La disputa ha sido cerrada." });
        this.loadIncidents();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al resolver la incidencia." })
    });
  }
  // Auxiliary
  openCreateAuxModal() {
    this.newAuxName = "";
    this.newAuxDesc = "";
    this.showCreateAuxModal = true;
  }
  createAuxItem() {
    this.auxService.createItem(this.auxType(), {
      name: this.newAuxName,
      description: this.newAuxDesc
    }).subscribe({
      next: () => {
        this.showCreateAuxModal = false;
        this.messageService.add({ severity: "success", summary: "Registro Creado", detail: `Elemento a\xF1adido a ${this.auxType()}.` });
        this.loadAuxItems();
      },
      error: (err) => this.messageService.add({ severity: "error", summary: "Error", detail: err.error?.error || "Error al crear elemento." })
    });
  }
  deleteAuxItem(id) {
    this.auxService.deleteItem(this.auxType(), id).subscribe({
      next: () => {
        this.messageService.add({ severity: "info", summary: "Eliminado", detail: "Elemento eliminado con \xE9xito." });
        this.loadAuxItems();
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
      case "PENDING_RESULT":
        return "secondary";
      default:
        return "info";
    }
  }
  formatLogData(data) {
    if (!data)
      return "-";
    if (typeof data === "string")
      return data;
    return JSON.stringify(data);
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 211, vars: 104, consts: [["header", ""], ["body", ""], [1, "admin-dashboard", "container"], [1, "admin-header", "glass-panel-glow"], [1, "admin-tag"], [1, "pi", "pi-shield"], [1, "admin-title"], [1, "nav-tabs"], ["icon", "pi pi-trophy", "severity", "success", "size", "small", 3, "onClick", "label", "outlined"], ["icon", "pi pi-users", "severity", "success", "size", "small", 3, "onClick", "label", "outlined"], ["icon", "pi pi-calendar", "severity", "success", "size", "small", 3, "onClick", "label", "outlined"], ["label", "Incidencias", "icon", "pi pi-flag", "severity", "danger", "size", "small", "badgeSeverity", "danger", 3, "onClick", "outlined", "badge"], ["label", "Maestros", "icon", "pi pi-database", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], ["label", "Auditor\xEDa", "icon", "pi pi-history", "severity", "secondary", "size", "small", 3, "onClick", "outlined"], [1, "tab-section"], ["header", "Crear Nuevo Ranking", 3, "visibleChange", "visible", "modal"], [1, "modal-form", 3, "ngSubmit"], [1, "form-group"], [1, "form-label"], ["name", "rName", "required", "", "placeholder", "Ej: Ranking Primavera 2026", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "rDesc", "placeholder", "Descripci\xF3n breve", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["optionLabel", "name", "optionValue", "id", "name", "newRCategory", "placeholder", "Seleccionar Categor\xEDa", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["optionLabel", "name", "optionValue", "id", "name", "newRLevel", "placeholder", "Seleccionar Nivel", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["optionLabel", "name", "optionValue", "id", "name", "newRLocation", "placeholder", "Seleccionar Sede", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["type", "date", "name", "rStart", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "rEnd", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-actions"], ["label", "Cancelar", "severity", "secondary", 3, "onClick"], ["label", "Crear Ranking", "icon", "pi pi-check", "severity", "success", "type", "submit"], ["header", "Editar Ranking", 3, "visibleChange", "visible", "modal"], ["name", "editRName", "required", "", "placeholder", "Nombre del Ranking", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editRDesc", "placeholder", "Descripci\xF3n breve", 1, "form-control", 3, "ngModelChange", "ngModel"], ["optionLabel", "name", "optionValue", "id", "name", "editRCategory", "placeholder", "Seleccionar Categor\xEDa", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["optionLabel", "name", "optionValue", "id", "name", "editRLevel", "placeholder", "Seleccionar Nivel", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["optionLabel", "name", "optionValue", "id", "name", "editRLocation", "placeholder", "Seleccionar Sede", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["type", "date", "name", "editRStart", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "editREnd", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["label", "Guardar Cambios", "icon", "pi pi-save", "severity", "success", "type", "submit"], ["header", "Alta de Equipo", 3, "visibleChange", "visible", "modal"], ["name", "tName", "required", "", "placeholder", "Ej: Los Smashers", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tP1N", "required", "", "placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tP1S", "required", "", "placeholder", "Apellido", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tP2N", "required", "", "placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tP2S", "required", "", "placeholder", "Apellido", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tRN", "placeholder", "Opcional", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "tRS", "placeholder", "Opcional", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "tE1", "required", "", "placeholder", "equipo@dominio.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "tE2", "placeholder", "segundo_email@dominio.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["label", "Crear Equipo y Enviar Accesos", "icon", "pi pi-check", "severity", "success", "type", "submit"], ["header", "Editar Equipo y Jugadores", 3, "visibleChange", "visible", "modal"], ["name", "editTName", "required", "", "placeholder", "Ej: Los Smashers", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTP1N", "required", "", "placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTP1S", "required", "", "placeholder", "Apellido", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTP2N", "required", "", "placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTP2S", "required", "", "placeholder", "Apellido", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTRN", "placeholder", "Opcional", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "editTRS", "placeholder", "Opcional", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "editTE1", "required", "", "placeholder", "equipo@dominio.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "editTE2", "placeholder", "segundo_email@dominio.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["header", "Modificaci\xF3n Administrativa de Partido", 3, "visibleChange", "visible", "modal"], ["header", "Resolver Incidencia Arbitral", 3, "visibleChange", "visible", "modal"], ["name", "iStat", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "RESOLVED"], ["value", "REJECTED"], ["rows", "3", "name", "iRes", "required", "", "placeholder", "Detalla la decisi\xF3n arbitral...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["label", "Cerrar Incidencia", "icon", "pi pi-check", "severity", "success", "type", "submit"], [3, "visibleChange", "visible", "modal", "header"], ["name", "aName", "required", "", "placeholder", "Nombre", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "aDesc", "placeholder", "Descripci\xF3n", 1, "form-control", 3, "ngModelChange", "ngModel"], ["label", "Guardar", "icon", "pi pi-check", "severity", "success", "type", "submit"], [1, "section-actions"], ["label", "Crear Nuevo Ranking", "icon", "pi pi-plus", "severity", "success", "size", "small", 3, "onClick"], [1, "cards-grid"], [1, "admin-card", "glass-panel"], [1, "card-head"], [3, "value", "severity"], [1, "date-txt"], [1, "card-title"], [1, "card-desc"], [1, "card-tags"], [1, "mini-tag"], [1, "pi", "pi-map-marker"], [1, "pi", "pi-chart-line"], [1, "pi", "pi-users"], [1, "card-foot"], ["label", "Editar", "icon", "pi pi-pencil", "severity", "warn", "size", "small", 3, "onClick", "outlined"], ["size", "small", 3, "onClick", "label", "severity"], ["label", "Partidos", "icon", "pi pi-calendar", "severity", "info", "size", "small", "styleClass", "flex-1", 3, "onClick"], [1, "section-sub"], ["label", "Dar de Alta Equipo", "icon", "pi pi-plus", "severity", "success", "size", "small", 3, "onClick"], [1, "glass-panel", "p-3"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-striped", 3, "value", "paginator", "rows"], [1, "text-right"], [1, "email-badge"], [1, "text-right", "flex", "justify-end", "gap-2"], ["icon", "pi pi-pencil", "severity", "warn", "size", "small", "pTooltip", "Editar Equipo", 3, "onClick", "outlined"], ["size", "small", 3, "onClick", "icon", "severity", "outlined", "pTooltip"], ["icon", "pi pi-envelope", "severity", "secondary", "size", "small", "pTooltip", "Reenviar Acceso", 3, "onClick", "outlined"], [1, "flex", "items-center", "gap-3"], ["optionLabel", "name", "optionValue", "id", "placeholder", "Seleccionar Ranking", "styleClass", "w-64", 3, "ngModelChange", "options", "ngModel"], ["label", "Generar Calendario Round-Robin", "icon", "pi pi-refresh", "severity", "success", "size", "small", 3, "onClick"], [1, "pts-badge"], ["label", "Modificar / Resolver", "icon", "pi pi-pencil", "severity", "warn", "size", "small", 3, "onClick"], ["styleClass", "empty-card"], [1, "incidents-grid"], [1, "text-center", "p-4"], [1, "pi", "pi-check-circle", "text-green", 2, "font-size", "2rem"], [1, "mt-2", "text-muted"], [1, "incident-card", "glass-panel", 3, "open-border"], [1, "incident-card", "glass-panel"], [1, "inc-head"], [1, "inc-date"], [1, "inc-reporter"], [1, "inc-desc"], [1, "inc-res"], [1, "inc-foot"], ["label", "Resolver Incidencia", "icon", "pi pi-check", "severity", "success", "size", "small", 3, "onClick"], [1, "aux-switcher"], ["label", "Niveles", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Categor\xEDas", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Ubicaciones / Sedes", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], ["label", "Patrocinadores", "size", "small", "severity", "secondary", 3, "onClick", "outlined"], ["icon", "pi pi-plus", "severity", "success", "size", "small", 3, "onClick", "label"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-striped", 3, "value"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", 3, "onClick", "outlined"], ["severity", "warn", 3, "value"], [1, "font-mono", "text-dim"], [1, "modal-sub"], ["type", "number", "min", "0", "max", "2", "name", "oS1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "2", "name", "oS2", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "oStat", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "CONFIRMED"], ["value", "PENDING_RESULT"], ["value", "CANCELLED"], ["name", "oReason", "required", "", "placeholder", "Ej: Resoluci\xF3n arbitral tras revisi\xF3n de actas", 1, "form-control", 3, "ngModelChange", "ngModel"], ["label", "Aplicar y Recalcular", "icon", "pi pi-check", "severity", "warn", "type", "submit"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div")(3, "span", 4);
      i0.\u0275\u0275element(4, "i", 5);
      i0.\u0275\u0275text(5, " PANEL DE CONTROL GLOBAL");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(6, "h1", 6);
      i0.\u0275\u0275text(7, "Administraci\xF3n del Ranking");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(8, "div", 7)(9, "p-button", 8);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_9_listener() {
        return ctx.setTab("rankings");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(10, "p-button", 9);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_10_listener() {
        return ctx.setTab("teams");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(11, "p-button", 10);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_11_listener() {
        return ctx.setTab("matches");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(12, "p-button", 11);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_12_listener() {
        return ctx.setTab("incidents");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(13, "p-button", 12);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_13_listener() {
        return ctx.setTab("auxiliary");
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "p-button", 13);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_14_listener() {
        return ctx.setTab("audit");
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275conditionalCreate(15, AdminDashboardComponent_Conditional_15_Template, 8, 0, "section", 14);
      i0.\u0275\u0275conditionalCreate(16, AdminDashboardComponent_Conditional_16_Template, 14, 3, "section", 14);
      i0.\u0275\u0275conditionalCreate(17, AdminDashboardComponent_Conditional_17_Template, 13, 5, "section", 14);
      i0.\u0275\u0275conditionalCreate(18, AdminDashboardComponent_Conditional_18_Template, 6, 1, "section", 14);
      i0.\u0275\u0275conditionalCreate(19, AdminDashboardComponent_Conditional_19_Template, 17, 6, "section", 14);
      i0.\u0275\u0275conditionalCreate(20, AdminDashboardComponent_Conditional_20_Template, 10, 3, "section", 14);
      i0.\u0275\u0275elementStart(21, "p-dialog", 15);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_21_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showCreateRankingModal, $event) || (ctx.showCreateRankingModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(22, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_22_listener() {
        return ctx.createRanking();
      });
      i0.\u0275\u0275elementStart(23, "div", 17)(24, "label", 18);
      i0.\u0275\u0275text(25, "Nombre del Ranking");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(26, "input", 19);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_26_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingName, $event) || (ctx.newRankingName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(27, "div", 17)(28, "label", 18);
      i0.\u0275\u0275text(29, "Descripci\xF3n");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(30, "input", 20);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_30_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingDesc, $event) || (ctx.newRankingDesc = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(31, "div", 21)(32, "div", 17)(33, "label", 18);
      i0.\u0275\u0275text(34, "Categor\xEDa");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(35, "p-select", 22);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_35_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingCategoryId, $event) || (ctx.newRankingCategoryId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(36, "div", 17)(37, "label", 18);
      i0.\u0275\u0275text(38, "Nivel");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(39, "p-select", 23);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_39_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingLevelId, $event) || (ctx.newRankingLevelId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(40, "div", 17)(41, "label", 18);
      i0.\u0275\u0275text(42, "Sede / Club");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(43, "p-select", 24);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_43_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingLocationId, $event) || (ctx.newRankingLocationId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(44, "div", 21)(45, "div", 17)(46, "label", 18);
      i0.\u0275\u0275text(47, "Fecha Inicio");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(48, "input", 25);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_48_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingStart, $event) || (ctx.newRankingStart = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(49, "div", 17)(50, "label", 18);
      i0.\u0275\u0275text(51, "Fecha Fin");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(52, "input", 26);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_52_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newRankingEnd, $event) || (ctx.newRankingEnd = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(53, "div", 27)(54, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_54_listener() {
        return ctx.showCreateRankingModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(55, "p-button", 29);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(56, "p-dialog", 30);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_56_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showEditRankingModal, $event) || (ctx.showEditRankingModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(57, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_57_listener() {
        return ctx.saveEditRanking();
      });
      i0.\u0275\u0275elementStart(58, "div", 17)(59, "label", 18);
      i0.\u0275\u0275text(60, "Nombre del Ranking");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(61, "input", 31);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_61_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingName, $event) || (ctx.editRankingName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(62, "div", 17)(63, "label", 18);
      i0.\u0275\u0275text(64, "Descripci\xF3n");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(65, "input", 32);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_65_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingDesc, $event) || (ctx.editRankingDesc = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(66, "div", 21)(67, "div", 17)(68, "label", 18);
      i0.\u0275\u0275text(69, "Categor\xEDa");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(70, "p-select", 33);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_70_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingCategoryId, $event) || (ctx.editRankingCategoryId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(71, "div", 17)(72, "label", 18);
      i0.\u0275\u0275text(73, "Nivel");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(74, "p-select", 34);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_74_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingLevelId, $event) || (ctx.editRankingLevelId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(75, "div", 17)(76, "label", 18);
      i0.\u0275\u0275text(77, "Sede / Club");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(78, "p-select", 35);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_p_select_ngModelChange_78_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingLocationId, $event) || (ctx.editRankingLocationId = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(79, "div", 21)(80, "div", 17)(81, "label", 18);
      i0.\u0275\u0275text(82, "Fecha Inicio");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(83, "input", 36);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_83_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingStart, $event) || (ctx.editRankingStart = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(84, "div", 17)(85, "label", 18);
      i0.\u0275\u0275text(86, "Fecha Fin");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(87, "input", 37);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_87_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editRankingEnd, $event) || (ctx.editRankingEnd = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(88, "div", 27)(89, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_89_listener() {
        return ctx.showEditRankingModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(90, "p-button", 38);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(91, "p-dialog", 39);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_91_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showCreateTeamModal, $event) || (ctx.showCreateTeamModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(92, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_92_listener() {
        return ctx.createTeam();
      });
      i0.\u0275\u0275elementStart(93, "div", 17)(94, "label", 18);
      i0.\u0275\u0275text(95, "Nombre del Equipo");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(96, "input", 40);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_96_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamName, $event) || (ctx.newTeamName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(97, "div", 21)(98, "div", 17)(99, "label", 18);
      i0.\u0275\u0275text(100, "Titular 1 (Nombre)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(101, "input", 41);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_101_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamP1N, $event) || (ctx.newTeamP1N = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(102, "div", 17)(103, "label", 18);
      i0.\u0275\u0275text(104, "Titular 1 (Apellido)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(105, "input", 42);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_105_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamP1S, $event) || (ctx.newTeamP1S = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(106, "div", 21)(107, "div", 17)(108, "label", 18);
      i0.\u0275\u0275text(109, "Titular 2 (Nombre)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(110, "input", 43);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_110_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamP2N, $event) || (ctx.newTeamP2N = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(111, "div", 17)(112, "label", 18);
      i0.\u0275\u0275text(113, "Titular 2 (Apellido)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(114, "input", 44);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_114_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamP2S, $event) || (ctx.newTeamP2S = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(115, "div", 21)(116, "div", 17)(117, "label", 18);
      i0.\u0275\u0275text(118, "Reserva (Nombre - Opcional)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(119, "input", 45);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_119_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamRN, $event) || (ctx.newTeamRN = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(120, "div", 17)(121, "label", 18);
      i0.\u0275\u0275text(122, "Reserva (Apellido - Opcional)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(123, "input", 46);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_123_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamRS, $event) || (ctx.newTeamRS = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(124, "div", 17)(125, "label", 18);
      i0.\u0275\u0275text(126, "Email Principal (Para acceso)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(127, "input", 47);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_127_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamEmail1, $event) || (ctx.newTeamEmail1 = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(128, "div", 17)(129, "label", 18);
      i0.\u0275\u0275text(130, "Email Secundario (Opcional - M\xE1x 2)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(131, "input", 48);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_131_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newTeamEmail2, $event) || (ctx.newTeamEmail2 = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(132, "div", 27)(133, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_133_listener() {
        return ctx.showCreateTeamModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(134, "p-button", 49);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(135, "p-dialog", 50);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_135_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showEditTeamModal, $event) || (ctx.showEditTeamModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(136, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_136_listener() {
        return ctx.saveEditTeam();
      });
      i0.\u0275\u0275elementStart(137, "div", 17)(138, "label", 18);
      i0.\u0275\u0275text(139, "Nombre del Equipo");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(140, "input", 51);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_140_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamName, $event) || (ctx.editTeamName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(141, "div", 21)(142, "div", 17)(143, "label", 18);
      i0.\u0275\u0275text(144, "Titular 1 (Nombre)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(145, "input", 52);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_145_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamP1N, $event) || (ctx.editTeamP1N = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(146, "div", 17)(147, "label", 18);
      i0.\u0275\u0275text(148, "Titular 1 (Apellido)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(149, "input", 53);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_149_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamP1S, $event) || (ctx.editTeamP1S = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(150, "div", 21)(151, "div", 17)(152, "label", 18);
      i0.\u0275\u0275text(153, "Titular 2 (Nombre)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(154, "input", 54);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_154_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamP2N, $event) || (ctx.editTeamP2N = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(155, "div", 17)(156, "label", 18);
      i0.\u0275\u0275text(157, "Titular 2 (Apellido)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(158, "input", 55);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_158_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamP2S, $event) || (ctx.editTeamP2S = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(159, "div", 21)(160, "div", 17)(161, "label", 18);
      i0.\u0275\u0275text(162, "Reserva (Nombre - Opcional)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(163, "input", 56);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_163_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamRN, $event) || (ctx.editTeamRN = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(164, "div", 17)(165, "label", 18);
      i0.\u0275\u0275text(166, "Reserva (Apellido - Opcional)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(167, "input", 57);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_167_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamRS, $event) || (ctx.editTeamRS = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(168, "div", 17)(169, "label", 18);
      i0.\u0275\u0275text(170, "Email Principal (Para acceso)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(171, "input", 58);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_171_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamEmail1, $event) || (ctx.editTeamEmail1 = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(172, "div", 17)(173, "label", 18);
      i0.\u0275\u0275text(174, "Email Secundario (Opcional - M\xE1x 2)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(175, "input", 59);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_175_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.editTeamEmail2, $event) || (ctx.editTeamEmail2 = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(176, "div", 27)(177, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_177_listener() {
        return ctx.showEditTeamModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(178, "p-button", 38);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(179, "p-dialog", 60);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_179_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showOverrideModal, $event) || (ctx.showOverrideModal = $event);
        return $event;
      });
      i0.\u0275\u0275conditionalCreate(180, AdminDashboardComponent_Conditional_180_Template, 33, 8);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(181, "p-dialog", 61);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_181_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showResolveIncidentModal, $event) || (ctx.showResolveIncidentModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(182, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_182_listener() {
        return ctx.submitResolveIncident();
      });
      i0.\u0275\u0275elementStart(183, "div", 17)(184, "label", 18);
      i0.\u0275\u0275text(185, "Estado de Resoluci\xF3n");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(186, "select", 62);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_select_ngModelChange_186_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.incResolveStatus, $event) || (ctx.incResolveStatus = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(187, "option", 63);
      i0.\u0275\u0275text(188, "RESOLVED (Aceptada y Resuelta)");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(189, "option", 64);
      i0.\u0275\u0275text(190, "REJECTED (Rechazada / Resultado V\xE1lido)");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(191, "div", 17)(192, "label", 18);
      i0.\u0275\u0275text(193, "Resoluci\xF3n para los Equipos");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(194, "textarea", 65);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_textarea_ngModelChange_194_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.incResolution, $event) || (ctx.incResolution = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(195, "div", 27)(196, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_196_listener() {
        return ctx.showResolveIncidentModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(197, "p-button", 66);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(198, "p-dialog", 67);
      i0.\u0275\u0275twoWayListener("visibleChange", function AdminDashboardComponent_Template_p_dialog_visibleChange_198_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.showCreateAuxModal, $event) || (ctx.showCreateAuxModal = $event);
        return $event;
      });
      i0.\u0275\u0275elementStart(199, "form", 16);
      i0.\u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Template_form_ngSubmit_199_listener() {
        return ctx.createAuxItem();
      });
      i0.\u0275\u0275elementStart(200, "div", 17)(201, "label", 18);
      i0.\u0275\u0275text(202, "Nombre");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(203, "input", 68);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_203_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newAuxName, $event) || (ctx.newAuxName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(204, "div", 17)(205, "label", 18);
      i0.\u0275\u0275text(206, "Descripci\xF3n");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(207, "input", 69);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function AdminDashboardComponent_Template_input_ngModelChange_207_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.newAuxDesc, $event) || (ctx.newAuxDesc = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(208, "div", 27)(209, "p-button", 28);
      i0.\u0275\u0275listener("onClick", function AdminDashboardComponent_Template_p_button_onClick_209_listener() {
        return ctx.showCreateAuxModal = false;
      });
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(210, "p-button", 70);
      i0.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_107_0;
      i0.\u0275\u0275advance(9);
      i0.\u0275\u0275property("label", i0.\u0275\u0275interpolate1("Rankings (", ctx.rankings().length, ")"))("outlined", ctx.activeTab() !== "rankings");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("label", i0.\u0275\u0275interpolate1("Equipos (", ctx.teams().length, ")"))("outlined", ctx.activeTab() !== "teams");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("label", i0.\u0275\u0275interpolate1("Partidos (", ctx.matches().length, ")"))("outlined", ctx.activeTab() !== "matches");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.activeTab() !== "incidents")("badge", ctx.openIncidentsCount() > 0 ? ctx.openIncidentsCount().toString() : void 0);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.activeTab() !== "auxiliary");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("outlined", ctx.activeTab() !== "audit");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "rankings" ? 15 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "teams" ? 16 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "matches" ? 17 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "incidents" ? 18 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "auxiliary" ? 19 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.activeTab() === "audit" ? 20 : -1);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(97, _c0));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showCreateRankingModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingName);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingDesc);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("options", ctx.categoriesList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingCategoryId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("options", ctx.levelsList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingLevelId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("options", ctx.locationsList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingLocationId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingStart);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newRankingEnd);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(98, _c0));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showEditRankingModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingName);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingDesc);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("options", ctx.categoriesList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingCategoryId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("options", ctx.levelsList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingLevelId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("options", ctx.locationsList());
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingLocationId);
      i0.\u0275\u0275property("showClear", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingStart);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editRankingEnd);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(99, _c1));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showCreateTeamModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamName);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamP1N);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamP1S);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamP2N);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamP2S);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamRN);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamRS);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamEmail1);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newTeamEmail2);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(100, _c1));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showEditTeamModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamName);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamP1N);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamP1S);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamP2N);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamP2S);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamRN);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamRS);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamEmail1);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.editTeamEmail2);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(101, _c2));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showOverrideModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional((tmp_107_0 = ctx.activeOverrideMatch()) ? 180 : -1, tmp_107_0);
      i0.\u0275\u0275advance();
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(102, _c3));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showResolveIncidentModal);
      i0.\u0275\u0275property("modal", true);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.incResolveStatus);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(8);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.incResolution);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction0(103, _c3));
      i0.\u0275\u0275twoWayProperty("visible", ctx.showCreateAuxModal);
      i0.\u0275\u0275property("modal", true)("header", "A\xF1adir " + ctx.auxType());
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newAuxName);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.newAuxDesc);
      i0.\u0275\u0275control();
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    i1.\u0275NgNoValidate,
    i1.NgSelectOption,
    i1.\u0275NgSelectMultipleOption,
    i1.DefaultValueAccessor,
    i1.NumberValueAccessor,
    i1.SelectControlValueAccessor,
    i1.NgControlStatus,
    i1.NgControlStatusGroup,
    i1.RequiredValidator,
    i1.MinValidator,
    i1.MaxValidator,
    i1.NgModel,
    i1.NgForm,
    TableModule,
    i2.Table,
    ButtonModule,
    i3.Button,
    DialogModule,
    i4.Dialog,
    TagModule,
    i5.Tag,
    BadgeModule,
    CardModule,
    i6.Card,
    SelectModule,
    i7.Select,
    InputTextModule,
    TooltipModule,
    i8.Tooltip,
    i9.DatePipe
  ], styles: ["\n.admin-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem 1.25rem 4rem;\n}\n.admin-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: var(--%NS%radius-lg);\n  margin-bottom: 2rem;\n}\n.admin-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #f59e0b;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.admin-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0.2rem 0 1.5rem;\n}\n.nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-dim);\n  margin-top: 0.2rem;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.admin-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.date-txt[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--%NS%text-dim);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n  line-height: 1.4;\n}\n.card-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.mini-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 0.2rem 0.5rem;\n  border-radius: 4px;\n  color: var(--%NS%text-muted);\n}\n.card-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n  padding-top: 0.5rem;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.email-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  background: rgba(6, 182, 212, 0.1);\n  color: var(--%NS%accent-cyan);\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  margin-right: 0.25rem;\n}\n.pts-badge[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--%NS%primary);\n}\n.font-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n}\n.incidents-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 1.5rem;\n}\n.incident-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.incident-card.open-border[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--%NS%status-disputed);\n}\n.inc-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.inc-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--%NS%text-dim);\n}\n.inc-reporter[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n}\n.inc-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--%NS%text-main);\n  line-height: 1.4;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem;\n  border-radius: 6px;\n}\n.inc-res[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.12);\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.inc-foot[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.aux-switcher[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.5rem;\n}\n.modal-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n  margin-bottom: 1.25rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      DialogModule,
      TagModule,
      BadgeModule,
      CardModule,
      SelectModule,
      InputTextModule,
      TooltipModule
    ], template: `<div class="admin-dashboard container">
  <!-- \u2500\u2500\u2500 DASHBOARD TOP BAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="admin-header glass-panel-glow">
    <div>
      <span class="admin-tag"><i class="pi pi-shield"></i> PANEL DE CONTROL GLOBAL</span>
      <h1 class="admin-title">Administraci\xF3n del Ranking</h1>
    </div>

    <div class="nav-tabs">
      <p-button
        label="Rankings ({{ rankings().length }})"
        icon="pi pi-trophy"
        [outlined]="activeTab() !== 'rankings'"
        severity="success"
        size="small"
        (onClick)="setTab('rankings')">
      </p-button>
      <p-button
        label="Equipos ({{ teams().length }})"
        icon="pi pi-users"
        [outlined]="activeTab() !== 'teams'"
        severity="success"
        size="small"
        (onClick)="setTab('teams')">
      </p-button>
      <p-button
        label="Partidos ({{ matches().length }})"
        icon="pi pi-calendar"
        [outlined]="activeTab() !== 'matches'"
        severity="success"
        size="small"
        (onClick)="setTab('matches')">
      </p-button>
      <p-button
        label="Incidencias"
        icon="pi pi-flag"
        [outlined]="activeTab() !== 'incidents'"
        severity="danger"
        size="small"
        [badge]="openIncidentsCount() > 0 ? openIncidentsCount().toString() : undefined"
        badgeSeverity="danger"
        (onClick)="setTab('incidents')">
      </p-button>
      <p-button
        label="Maestros"
        icon="pi pi-database"
        [outlined]="activeTab() !== 'auxiliary'"
        severity="secondary"
        size="small"
        (onClick)="setTab('auxiliary')">
      </p-button>
      <p-button
        label="Auditor\xEDa"
        icon="pi pi-history"
        [outlined]="activeTab() !== 'audit'"
        severity="secondary"
        size="small"
        (onClick)="setTab('audit')">
      </p-button>
    </div>
  </header>

  <!-- \u2500\u2500\u2500 TAB 1: RANKINGS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'rankings') {
    <section class="tab-section">
      <div class="section-actions">
        <h2>Gesti\xF3n de Rankings</h2>
        <p-button label="Crear Nuevo Ranking" icon="pi pi-plus" severity="success" size="small" (onClick)="openCreateRankingModal()"></p-button>
      </div>

      <div class="cards-grid">
        @for (r of rankings(); track r.id) {
          <div class="admin-card glass-panel">
            <div class="card-head">
              <p-tag [value]="r.active ? 'ACTIVO' : 'INACTIVO'" [severity]="r.active ? 'success' : 'secondary'"></p-tag>
              <span class="date-txt">{{ r.startDate | date }} \u2192 {{ r.endDate | date }}</span>
            </div>
            <h3 class="card-title">{{ r.name }}</h3>
            <p class="card-desc">{{ r.description || 'Sin descripci\xF3n' }}</p>

            <div class="card-tags">
              <span class="mini-tag"><i class="pi pi-map-marker"></i> {{ r.locationName || 'Sede Club' }}</span>
              <span class="mini-tag"><i class="pi pi-chart-line"></i> {{ r.levelName || 'Nivel General' }}</span>
              <span class="mini-tag"><i class="pi pi-users"></i> {{ r.categoryName || 'Categor\xEDa \xDAnica' }}</span>
            </div>

            <div class="card-foot">
              <p-button
                label="Editar"
                icon="pi pi-pencil"
                severity="warn"
                size="small"
                [outlined]="true"
                (onClick)="openEditRankingModal(r)">
              </p-button>
              <p-button
                [label]="r.active ? 'Desactivar' : 'Activar'"
                [severity]="r.active ? 'secondary' : 'success'"
                size="small"
                (onClick)="toggleRankingActive(r)">
              </p-button>
              <p-button
                label="Partidos"
                icon="pi pi-calendar"
                severity="info"
                size="small"
                styleClass="flex-1"
                (onClick)="selectForMatches(r)">
              </p-button>
            </div>
          </div>
        }
      </div>
    </section>
  }

  <!-- \u2500\u2500\u2500 TAB 2: EQUIPOS (PrimeNG Table) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'teams') {
    <section class="tab-section">
      <div class="section-actions">
        <div>
          <h2>Equipos Registrados</h2>
          <p class="section-sub">Los equipos son dados de alta exclusivamente por la administraci\xF3n y reciben un email con token de configuraci\xF3n de contrase\xF1a.</p>
        </div>
        <p-button label="Dar de Alta Equipo" icon="pi pi-plus" severity="success" size="small" (onClick)="openCreateTeamModal()"></p-button>
      </div>

      <div class="glass-panel p-3">
        <p-table [value]="teams()" responsiveLayout="scroll" [paginator]="true" [rows]="10" styleClass="p-datatable-striped">
          <ng-template #header>
            <tr>
              <th>Nombre del Equipo</th>
              <th>Titular 1</th>
              <th>Titular 2</th>
              <th>Reserva</th>
              <th>Emails de Contacto</th>
              <th>Estado</th>
              <th class="text-right">Acciones</th>
            </tr>
          </ng-template>
          <ng-template #body let-t>
            <tr>
              <td><strong>{{ t.name }}</strong></td>
              <td>{{ t.player1Name }} {{ t.player1Surname }}</td>
              <td>{{ t.player2Name }} {{ t.player2Surname }}</td>
              <td>{{ t.reserveName ? t.reserveName + ' ' + t.reserveSurname : '-' }}</td>
              <td>
                @for (e of getTeamEmailsList(t); track e) {
                  <span class="email-badge">{{ e }}</span>
                }
              </td>
              <td>
                <p-tag [value]="t.active ? 'Activo' : 'Inactivo'" [severity]="t.active ? 'success' : 'danger'"></p-tag>
              </td>
              <td class="text-right flex justify-end gap-2">
                <p-button
                  icon="pi pi-pencil"
                  severity="warn"
                  size="small"
                  [outlined]="true"
                  pTooltip="Editar Equipo"
                  (onClick)="openEditTeamModal(t)">
                </p-button>
                <p-button
                  [icon]="t.active ? 'pi pi-ban' : 'pi pi-check'"
                  [severity]="t.active ? 'secondary' : 'success'"
                  size="small"
                  [outlined]="true"
                  [pTooltip]="t.active ? 'Desactivar Equipo' : 'Activar Equipo'"
                  (onClick)="toggleTeamActive(t)">
                </p-button>
                <p-button
                  icon="pi pi-envelope"
                  severity="secondary"
                  size="small"
                  [outlined]="true"
                  pTooltip="Reenviar Acceso"
                  (onClick)="resendWelcome(t)">
                </p-button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>
  }

  <!-- \u2500\u2500\u2500 TAB 3: PARTIDOS & ROUND-ROBIN (PrimeNG Table) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'matches') {
    <section class="tab-section">
      <div class="section-actions">
        <div class="flex items-center gap-3">
          <h2>Partidos</h2>
          <p-select
            [options]="rankings()"
            optionLabel="name"
            optionValue="id"
            [(ngModel)]="selectedRankingId"
            (ngModelChange)="loadMatchesForSelectedRanking()"
            placeholder="Seleccionar Ranking"
            styleClass="w-64">
          </p-select>
        </div>

        <p-button
          label="Generar Calendario Round-Robin"
          icon="pi pi-refresh"
          severity="success"
          size="small"
          (onClick)="generateRoundRobin()">
        </p-button>
      </div>

      <div class="glass-panel p-3">
        <p-table [value]="matches()" responsiveLayout="scroll" [paginator]="true" [rows]="10" styleClass="p-datatable-striped">
          <ng-template #header>
            <tr>
              <th>Estado</th>
              <th>Equipo 1</th>
              <th>Equipo 2</th>
              <th>Fecha Disputa</th>
              <th>Resultado</th>
              <th>Puntos Backend</th>
              <th class="text-right">Acci\xF3n Admin</th>
            </tr>
          </ng-template>
          <ng-template #body let-m>
            <tr>
              <td>
                <p-tag [value]="m.status" [severity]="getTagSeverity(m.status)"></p-tag>
              </td>
              <td><strong>{{ m.teamOneName }}</strong></td>
              <td><strong>{{ m.teamTwoName }}</strong></td>
              <td>{{ (m.matchDate | date) || 'Sin fecha' }}</td>
              <td>
                @if (m.setsTeamOne !== null && m.setsTeamTwo !== null) {
                  <strong>{{ m.setsTeamOne }} - {{ m.setsTeamTwo }}</strong>
                } @else { - }
              </td>
              <td>
                @if (m.pointsTeamOne !== null && m.pointsTeamTwo !== null) {
                  <span class="pts-badge">{{ m.pointsTeamOne }} / {{ m.pointsTeamTwo }} pts</span>
                } @else { - }
              </td>
              <td class="text-right">
                <p-button
                  label="Modificar / Resolver"
                  icon="pi pi-pencil"
                  severity="warn"
                  size="small"
                  (onClick)="openAdminOverrideModal(m)">
                </p-button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>
  }

  <!-- \u2500\u2500\u2500 TAB 4: INCIDENCIAS (PrimeNG Cards) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'incidents') {
    <section class="tab-section">
      <div class="section-actions">
        <h2>Incidencias y Disputas de Partidos</h2>
      </div>

      @if (incidents().length === 0) {
        <p-card styleClass="empty-card">
          <div class="text-center p-4">
            <i class="pi pi-check-circle text-green" style="font-size: 2rem;"></i>
            <p class="mt-2 text-muted">No hay incidencias pendientes. \xA1Todo en orden!</p>
          </div>
        </p-card>
      } @else {
        <div class="incidents-grid">
          @for (inc of incidents(); track inc.id) {
            <div class="incident-card glass-panel" [class.open-border]="inc.status === 'OPEN'">
              <div class="inc-head">
                <p-tag [value]="inc.status" [severity]="inc.status === 'OPEN' ? 'danger' : 'success'"></p-tag>
                <span class="inc-date">{{ inc.reportedAt | date }}</span>
              </div>
              <div class="inc-reporter">
                Reportado por: <strong>{{ inc.reportedByEmail || 'Usuario' }}</strong>
              </div>
              <p class="inc-desc">"{{ inc.description }}"</p>

              @if (inc.resolution) {
                <div class="inc-res">
                  <strong>Resoluci\xF3n:</strong> {{ inc.resolution }}
                </div>
              }

              @if (inc.status === 'OPEN') {
                <div class="inc-foot">
                  <p-button
                    label="Resolver Incidencia"
                    icon="pi pi-check"
                    severity="success"
                    size="small"
                    (onClick)="openResolveIncidentModal(inc)">
                  </p-button>
                </div>
              }
            </div>
          }
        </div>
      }
    </section>
  }

  <!-- \u2500\u2500\u2500 TAB 5: MAESTROS DESACOPLADOS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'auxiliary') {
    <section class="tab-section">
      <div class="section-actions">
        <div>
          <h2>Datos Maestros Desacoplados</h2>
          <div class="aux-switcher">
            <p-button label="Niveles" [outlined]="auxType() !== 'levels'" size="small" severity="secondary" (onClick)="setAuxType('levels')"></p-button>
            <p-button label="Categor\xEDas" [outlined]="auxType() !== 'categories'" size="small" severity="secondary" (onClick)="setAuxType('categories')"></p-button>
            <p-button label="Ubicaciones / Sedes" [outlined]="auxType() !== 'locations'" size="small" severity="secondary" (onClick)="setAuxType('locations')"></p-button>
            <p-button label="Patrocinadores" [outlined]="auxType() !== 'sponsors'" size="small" severity="secondary" (onClick)="setAuxType('sponsors')"></p-button>
          </div>
        </div>
        <p-button [label]="'A\xF1adir ' + auxType()" icon="pi pi-plus" severity="success" size="small" (onClick)="openCreateAuxModal()"></p-button>
      </div>

      <div class="glass-panel p-3">
        <p-table [value]="auxItems()" responsiveLayout="scroll" styleClass="p-datatable-striped">
          <ng-template #header>
            <tr>
              <th>Nombre</th>
              <th>Descripci\xF3n</th>
              <th class="text-right">Acciones</th>
            </tr>
          </ng-template>
          <ng-template #body let-item>
            <tr>
              <td><strong>{{ item.name }}</strong></td>
              <td>{{ item.description || '-' }}</td>
              <td class="text-right">
                <p-button icon="pi pi-trash" severity="danger" size="small" [outlined]="true" (onClick)="deleteAuxItem(item.id)"></p-button>
              </td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>
  }

  <!-- \u2500\u2500\u2500 TAB 6: AUDITOR\xCDA (PrimeNG Table) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  @if (activeTab() === 'audit') {
    <section class="tab-section">
      <div class="section-actions">
        <h2>Registro de Auditor\xEDa de Seguridad</h2>
      </div>

      <div class="glass-panel p-3">
        <p-table [value]="auditLogs()" responsiveLayout="scroll" [paginator]="true" [rows]="15" styleClass="p-datatable-striped">
          <ng-template #header>
            <tr>
              <th>Fecha / Hora</th>
              <th>Acci\xF3n</th>
              <th>Entidad</th>
              <th>ID Entidad</th>
              <th>Detalles</th>
            </tr>
          </ng-template>
          <ng-template #body let-log>
            <tr>
              <td>{{ log.createdAt | date }}</td>
              <td><p-tag [value]="log.action" severity="warn"></p-tag></td>
              <td><strong>{{ log.entity }}</strong></td>
              <td class="font-mono text-dim">{{ log.entityId }}</td>
              <td class="font-mono text-dim">{{ formatLogData(log.data) }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </section>
  }

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: CREAR RANKING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog [(visible)]="showCreateRankingModal" [modal]="true" header="Crear Nuevo Ranking" [style]="{ width: '90vw', maxWidth: '580px' }">
    <form (ngSubmit)="createRanking()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Nombre del Ranking</label>
        <input class="form-control" [(ngModel)]="newRankingName" name="rName" required placeholder="Ej: Ranking Primavera 2026" />
      </div>
      <div class="form-group">
        <label class="form-label">Descripci\xF3n</label>
        <input class="form-control" [(ngModel)]="newRankingDesc" name="rDesc" placeholder="Descripci\xF3n breve" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Categor\xEDa</label>
          <p-select
            [options]="categoriesList()"
            optionLabel="name"
            optionValue="id"
            [(ngModel)]="newRankingCategoryId"
            name="newRCategory"
            placeholder="Seleccionar Categor\xEDa"
            [showClear]="true"
            styleClass="w-full">
          </p-select>
        </div>
        <div class="form-group">
          <label class="form-label">Nivel</label>
          <p-select
            [options]="levelsList()"
            optionLabel="name"
            optionValue="id"
            [(ngModel)]="newRankingLevelId"
            name="newRLevel"
            placeholder="Seleccionar Nivel"
            [showClear]="true"
            styleClass="w-full">
          </p-select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Sede / Club</label>
        <p-select
          [options]="locationsList()"
          optionLabel="name"
          optionValue="id"
          [(ngModel)]="newRankingLocationId"
          name="newRLocation"
          placeholder="Seleccionar Sede"
          [showClear]="true"
          styleClass="w-full">
        </p-select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Fecha Inicio</label>
          <input type="date" class="form-control" [(ngModel)]="newRankingStart" name="rStart" required />
        </div>
        <div class="form-group">
          <label class="form-label">Fecha Fin</label>
          <input type="date" class="form-control" [(ngModel)]="newRankingEnd" name="rEnd" required />
        </div>
      </div>
      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showCreateRankingModal = false"></p-button>
        <p-button label="Crear Ranking" icon="pi pi-check" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: EDITAR RANKING \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog [(visible)]="showEditRankingModal" [modal]="true" header="Editar Ranking" [style]="{ width: '90vw', maxWidth: '580px' }">
    <form (ngSubmit)="saveEditRanking()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Nombre del Ranking</label>
        <input class="form-control" [(ngModel)]="editRankingName" name="editRName" required placeholder="Nombre del Ranking" />
      </div>
      <div class="form-group">
        <label class="form-label">Descripci\xF3n</label>
        <input class="form-control" [(ngModel)]="editRankingDesc" name="editRDesc" placeholder="Descripci\xF3n breve" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Categor\xEDa</label>
          <p-select
            [options]="categoriesList()"
            optionLabel="name"
            optionValue="id"
            [(ngModel)]="editRankingCategoryId"
            name="editRCategory"
            placeholder="Seleccionar Categor\xEDa"
            [showClear]="true"
            styleClass="w-full">
          </p-select>
        </div>
        <div class="form-group">
          <label class="form-label">Nivel</label>
          <p-select
            [options]="levelsList()"
            optionLabel="name"
            optionValue="id"
            [(ngModel)]="editRankingLevelId"
            name="editRLevel"
            placeholder="Seleccionar Nivel"
            [showClear]="true"
            styleClass="w-full">
          </p-select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Sede / Club</label>
        <p-select
          [options]="locationsList()"
          optionLabel="name"
          optionValue="id"
          [(ngModel)]="editRankingLocationId"
          name="editRLocation"
          placeholder="Seleccionar Sede"
          [showClear]="true"
          styleClass="w-full">
        </p-select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Fecha Inicio</label>
          <input type="date" class="form-control" [(ngModel)]="editRankingStart" name="editRStart" required />
        </div>
        <div class="form-group">
          <label class="form-label">Fecha Fin</label>
          <input type="date" class="form-control" [(ngModel)]="editRankingEnd" name="editREnd" required />
        </div>
      </div>
      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showEditRankingModal = false"></p-button>
        <p-button label="Guardar Cambios" icon="pi pi-save" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: CREAR EQUIPO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog [(visible)]="showCreateTeamModal" [modal]="true" header="Alta de Equipo" [style]="{ width: '90vw', maxWidth: '560px' }">
    <form (ngSubmit)="createTeam()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Nombre del Equipo</label>
        <input class="form-control" [(ngModel)]="newTeamName" name="tName" required placeholder="Ej: Los Smashers" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Titular 1 (Nombre)</label>
          <input class="form-control" [(ngModel)]="newTeamP1N" name="tP1N" required placeholder="Nombre" />
        </div>
        <div class="form-group">
          <label class="form-label">Titular 1 (Apellido)</label>
          <input class="form-control" [(ngModel)]="newTeamP1S" name="tP1S" required placeholder="Apellido" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Titular 2 (Nombre)</label>
          <input class="form-control" [(ngModel)]="newTeamP2N" name="tP2N" required placeholder="Nombre" />
        </div>
        <div class="form-group">
          <label class="form-label">Titular 2 (Apellido)</label>
          <input class="form-control" [(ngModel)]="newTeamP2S" name="tP2S" required placeholder="Apellido" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Reserva (Nombre - Opcional)</label>
          <input class="form-control" [(ngModel)]="newTeamRN" name="tRN" placeholder="Opcional" />
        </div>
        <div class="form-group">
          <label class="form-label">Reserva (Apellido - Opcional)</label>
          <input class="form-control" [(ngModel)]="newTeamRS" name="tRS" placeholder="Opcional" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Email Principal (Para acceso)</label>
        <input type="email" class="form-control" [(ngModel)]="newTeamEmail1" name="tE1" required placeholder="equipo@dominio.com" />
      </div>

      <div class="form-group">
        <label class="form-label">Email Secundario (Opcional - M\xE1x 2)</label>
        <input type="email" class="form-control" [(ngModel)]="newTeamEmail2" name="tE2" placeholder="segundo_email@dominio.com" />
      </div>

      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showCreateTeamModal = false"></p-button>
        <p-button label="Crear Equipo y Enviar Accesos" icon="pi pi-check" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: EDITAR EQUIPO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog [(visible)]="showEditTeamModal" [modal]="true" header="Editar Equipo y Jugadores" [style]="{ width: '90vw', maxWidth: '560px' }">
    <form (ngSubmit)="saveEditTeam()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Nombre del Equipo</label>
        <input class="form-control" [(ngModel)]="editTeamName" name="editTName" required placeholder="Ej: Los Smashers" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Titular 1 (Nombre)</label>
          <input class="form-control" [(ngModel)]="editTeamP1N" name="editTP1N" required placeholder="Nombre" />
        </div>
        <div class="form-group">
          <label class="form-label">Titular 1 (Apellido)</label>
          <input class="form-control" [(ngModel)]="editTeamP1S" name="editTP1S" required placeholder="Apellido" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Titular 2 (Nombre)</label>
          <input class="form-control" [(ngModel)]="editTeamP2N" name="editTP2N" required placeholder="Nombre" />
        </div>
        <div class="form-group">
          <label class="form-label">Titular 2 (Apellido)</label>
          <input class="form-control" [(ngModel)]="editTeamP2S" name="editTP2S" required placeholder="Apellido" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group">
          <label class="form-label">Reserva (Nombre - Opcional)</label>
          <input class="form-control" [(ngModel)]="editTeamRN" name="editTRN" placeholder="Opcional" />
        </div>
        <div class="form-group">
          <label class="form-label">Reserva (Apellido - Opcional)</label>
          <input class="form-control" [(ngModel)]="editTeamRS" name="editTRS" placeholder="Opcional" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Email Principal (Para acceso)</label>
        <input type="email" class="form-control" [(ngModel)]="editTeamEmail1" name="editTE1" required placeholder="equipo@dominio.com" />
      </div>

      <div class="form-group">
        <label class="form-label">Email Secundario (Opcional - M\xE1x 2)</label>
        <input type="email" class="form-control" [(ngModel)]="editTeamEmail2" name="editTE2" placeholder="segundo_email@dominio.com" />
      </div>

      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showEditTeamModal = false"></p-button>
        <p-button label="Guardar Cambios" icon="pi pi-save" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: ADMIN OVERRIDE DE PARTIDO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog
    [(visible)]="showOverrideModal"
    [modal]="true"
    header="Modificaci\xF3n Administrativa de Partido"
    [style]="{ width: '90vw', maxWidth: '520px' }">
    
    @if (activeOverrideMatch(); as m) {
      <p class="modal-sub">
        <strong>{{ m.teamOneName }}</strong> vs <strong>{{ m.teamTwoName }}</strong>
      </p>

      <form (ngSubmit)="submitAdminOverride()" class="modal-form">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group">
            <label class="form-label">Sets {{ m.teamOneName }}</label>
            <input type="number" min="0" max="2" class="form-control" [(ngModel)]="overrideSetsOne" name="oS1" required />
          </div>
          <div class="form-group">
            <label class="form-label">Sets {{ m.teamTwoName }}</label>
            <input type="number" min="0" max="2" class="form-control" [(ngModel)]="overrideSetsTwo" name="oS2" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Estado del Partido</label>
          <select class="form-control" [(ngModel)]="overrideStatus" name="oStat">
            <option value="CONFIRMED">CONFIRMED (Oficial)</option>
            <option value="PENDING_RESULT">PENDING_RESULT (Reiniciar)</option>
            <option value="CANCELLED">CANCELLED (Cancelado)</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Motivo / Acta de Resoluci\xF3n (Auditado)</label>
          <input class="form-control" [(ngModel)]="overrideReason" name="oReason" required placeholder="Ej: Resoluci\xF3n arbitral tras revisi\xF3n de actas" />
        </div>

        <div class="modal-actions">
          <p-button label="Cancelar" severity="secondary" (onClick)="showOverrideModal = false"></p-button>
          <p-button label="Aplicar y Recalcular" icon="pi pi-check" severity="warn" type="submit"></p-button>
        </div>
      </form>
    }
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: RESOLVER INCIDENCIA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog
    [(visible)]="showResolveIncidentModal"
    [modal]="true"
    header="Resolver Incidencia Arbitral"
    [style]="{ width: '90vw', maxWidth: '500px' }">
    
    <form (ngSubmit)="submitResolveIncident()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Estado de Resoluci\xF3n</label>
        <select class="form-control" [(ngModel)]="incResolveStatus" name="iStat">
          <option value="RESOLVED">RESOLVED (Aceptada y Resuelta)</option>
          <option value="REJECTED">REJECTED (Rechazada / Resultado V\xE1lido)</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Resoluci\xF3n para los Equipos</label>
        <textarea rows="3" class="form-control" [(ngModel)]="incResolution" name="iRes" required placeholder="Detalla la decisi\xF3n arbitral..."></textarea>
      </div>
      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showResolveIncidentModal = false"></p-button>
        <p-button label="Cerrar Incidencia" icon="pi pi-check" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>

  <!-- \u2500\u2500\u2500 MODAL PRIMENG: CREAR AUXILIAR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-dialog [(visible)]="showCreateAuxModal" [modal]="true" [header]="'A\xF1adir ' + auxType()" [style]="{ width: '90vw', maxWidth: '500px' }">
    <form (ngSubmit)="createAuxItem()" class="modal-form">
      <div class="form-group">
        <label class="form-label">Nombre</label>
        <input class="form-control" [(ngModel)]="newAuxName" name="aName" required placeholder="Nombre" />
      </div>
      <div class="form-group">
        <label class="form-label">Descripci\xF3n</label>
        <input class="form-control" [(ngModel)]="newAuxDesc" name="aDesc" placeholder="Descripci\xF3n" />
      </div>
      <div class="modal-actions">
        <p-button label="Cancelar" severity="secondary" (onClick)="showCreateAuxModal = false"></p-button>
        <p-button label="Guardar" icon="pi pi-check" severity="success" type="submit"></p-button>
      </div>
    </form>
  </p-dialog>
</div>
`, styles: ["/* projects/rpm-admin/src/app/admin-dashboard.component.scss */\n.admin-dashboard {\n  padding: 2rem 1.25rem 4rem;\n}\n.admin-header {\n  padding: 2rem;\n  border-radius: var(--radius-lg);\n  margin-bottom: 2rem;\n}\n.admin-tag {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #f59e0b;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.admin-title {\n  font-size: 2rem;\n  margin: 0.2rem 0 1.5rem;\n}\n.nav-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.section-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.section-sub {\n  font-size: 0.85rem;\n  color: var(--text-dim);\n  margin-top: 0.2rem;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.admin-card {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.card-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.date-txt {\n  font-size: 0.8rem;\n  color: var(--text-dim);\n}\n.card-title {\n  font-size: 1.25rem;\n}\n.card-desc {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.mini-tag {\n  font-size: 0.75rem;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  padding: 0.2rem 0.5rem;\n  border-radius: 4px;\n  color: var(--text-muted);\n}\n.card-foot {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n  padding-top: 0.5rem;\n}\n.text-right {\n  text-align: right;\n}\n.flex-1 {\n  flex: 1;\n}\n.w-64 {\n  width: 16rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.email-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  background: rgba(6, 182, 212, 0.1);\n  color: var(--accent-cyan);\n  padding: 0.15rem 0.45rem;\n  border-radius: 4px;\n  margin-right: 0.25rem;\n}\n.pts-badge {\n  font-weight: 800;\n  color: var(--primary);\n}\n.font-mono {\n  font-family: monospace;\n  font-size: 0.8rem;\n}\n.incidents-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 1.5rem;\n}\n.incident-card {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.incident-card.open-border {\n  border-left: 4px solid var(--status-disputed);\n}\n.inc-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.inc-date {\n  font-size: 0.8rem;\n  color: var(--text-dim);\n}\n.inc-reporter {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.inc-desc {\n  font-size: 0.9rem;\n  color: var(--text-main);\n  line-height: 1.4;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 0.75rem;\n  border-radius: 6px;\n}\n.inc-res {\n  font-size: 0.85rem;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.12);\n  padding: 0.5rem;\n  border-radius: 4px;\n}\n.inc-foot {\n  margin-top: auto;\n}\n.aux-switcher {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-top: 0.5rem;\n}\n.modal-sub {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin-bottom: 1.25rem;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "projects/rpm-admin/src/app/admin-dashboard.component.ts", lineNumber: 52 });
})();

// projects/rpm-admin/src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: AdminDashboardComponent
  }
];
export {
  routes
};
//# sourceMappingURL=routes.js.map

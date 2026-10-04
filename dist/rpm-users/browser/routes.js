import {
  __spreadValues
} from "./chunk-YQOESBWP.js";

// projects/rpm-users/src/app/login.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "@core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "primeng/card";
import * as i4 from "primeng/inputtext";
import * as i5 from "primeng/password";
import * as i6 from "primeng/button";
import * as i7 from "primeng/message";
function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    i0.\u0275\u0275text(2, "\u{1F3BE}");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "h1", 16);
    i0.\u0275\u0275text(4, "Acceso a la Plataforma");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p", 17);
    i0.\u0275\u0275text(6, "Ingresa con tus credenciales de Equipo o Administrador");
    i0.\u0275\u0275elementEnd()();
  }
}
function LoginComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p-message", 4);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function LoginComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    i0.\u0275\u0275element(2, "i", 20);
    i0.\u0275\u0275text(3, " Credenciales de Desarrollo (Dev Seed):");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "div", 21)(5, "strong");
    i0.\u0275\u0275text(6, "Admin:");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(7, " admin@padelranking.dev / Admin123!");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(8, "div", 21)(9, "strong");
    i0.\u0275\u0275text(10, "Equipo 1:");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(11, " equipo1@padelranking.dev / Team123!");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(12, "div", 21)(13, "strong");
    i0.\u0275\u0275text(14, "Equipo 2:");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275text(15, " equipo2@padelranking.dev / Team123!");
    i0.\u0275\u0275elementEnd()();
  }
}
var LoginComponent = class _LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  email = "";
  password = "";
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onSubmit() {
    if (!this.email || !this.password)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.data.user.role === "ADMIN") {
          this.router.navigate(["/admin"]);
        } else {
          this.router.navigate(["/team"]);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || "Credenciales incorrectas.");
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 20, vars: 7, consts: [["header", ""], ["footer", ""], [1, "auth-wrapper"], [1, "auth-card-prime", "glass-panel-glow"], ["severity", "error", "styleClass", "w-full mb-3"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "pInputText", "", "placeholder", "tu-email@ejemplo.com", "name", "email", "required", "", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-between", "items-center", "mb-1"], ["for", "password", 1, "form-label"], ["routerLink", "/auth/forgot-password", 1, "forgot-link"], ["id", "password", "name", "password", "styleClass", "w-full", "inputStyleClass", "w-full", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel", "feedback", "toggleMask"], ["type", "submit", "label", "Iniciar Sesi\xF3n", "icon", "pi pi-sign-in", "severity", "success", "styleClass", "w-full mt-3", 3, "loading", "disabled"], [1, "auth-header"], [1, "auth-icon"], [1, "auth-title"], [1, "auth-subtitle"], [1, "demo-hints"], [1, "hint-title"], [1, "pi", "pi-info-circle"], [1, "hint-item"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = i0.\u0275\u0275getCurrentView();
      i0.\u0275\u0275elementStart(0, "div", 2)(1, "p-card", 3);
      i0.\u0275\u0275template(2, LoginComponent_ng_template_2_Template, 7, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor);
      i0.\u0275\u0275conditionalCreate(4, LoginComponent_Conditional_4_Template, 2, 1, "p-message", 4);
      i0.\u0275\u0275elementStart(5, "form", 5);
      i0.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      i0.\u0275\u0275elementStart(6, "div", 6)(7, "label", 7);
      i0.\u0275\u0275text(8, "Correo Electr\xF3nico");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(9, "input", 8);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
        i0.\u0275\u0275restoreView(_r1);
        i0.\u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return i0.\u0275\u0275resetView($event);
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(10, "div", 6)(11, "div", 9)(12, "label", 10);
      i0.\u0275\u0275text(13, "Contrase\xF1a");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(14, "a", 11);
      i0.\u0275\u0275text(15, "\xBFOlvidaste tu contrase\xF1a?");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(16, "p-password", 12);
      i0.\u0275\u0275controlCreate();
      i0.\u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_16_listener($event) {
        i0.\u0275\u0275restoreView(_r1);
        i0.\u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return i0.\u0275\u0275resetView($event);
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275element(17, "p-button", 13);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275template(18, LoginComponent_ng_template_18_Template, 16, 0, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275conditional(ctx.errorMessage() ? 4 : -1);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.email);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance(7);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.password);
      i0.\u0275\u0275property("feedback", false)("toggleMask", true);
      i0.\u0275\u0275control();
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("loading", ctx.loading())("disabled", ctx.loading() || !ctx.email || !ctx.password);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    i1.RouterLink,
    FormsModule,
    i2.\u0275NgNoValidate,
    i2.DefaultValueAccessor,
    i2.NgControlStatus,
    i2.NgControlStatusGroup,
    i2.RequiredValidator,
    i2.NgModel,
    i2.NgForm,
    CardModule,
    i3.Card,
    InputTextModule,
    i4.InputText,
    PasswordModule,
    i5.Password,
    ButtonModule,
    i6.Button,
    MessageModule,
    i7.Message
  ], styles: ["\n.auth-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n[_nghost-%COMP%]     .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--%NS%bg-card);\n  border: 1px solid var(--%NS%border-color);\n  border-radius: var(--%NS%radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--%NS%shadow-card);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n  filter: drop-shadow(0 0 15px rgba(0, 230, 118, 0.4));\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--%NS%font-heading);\n  color: var(--%NS%text-main);\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--%NS%text-muted);\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--%NS%primary);\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.demo-hints[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid var(--%NS%border-color);\n  font-size: 0.75rem;\n  color: var(--%NS%text-dim);\n}\n.demo-hints[_ngcontent-%COMP%]   .hint-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: var(--%NS%text-muted);\n  margin-bottom: 0.35rem;\n}\n.demo-hints[_ngcontent-%COMP%]   .hint-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n.demo-hints[_ngcontent-%COMP%]   .hint-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--%NS%text-muted);\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      CardModule,
      InputTextModule,
      PasswordModule,
      ButtonModule,
      MessageModule
    ], template: '<div class="auth-wrapper">\n  <p-card class="auth-card-prime glass-panel-glow">\n    <ng-template #header>\n      <div class="auth-header">\n        <span class="auth-icon">\u{1F3BE}</span>\n        <h1 class="auth-title">Acceso a la Plataforma</h1>\n        <p class="auth-subtitle">Ingresa con tus credenciales de Equipo o Administrador</p>\n      </div>\n    </ng-template>\n\n    @if (errorMessage()) {\n      <p-message severity="error" styleClass="w-full mb-3">{{ errorMessage() }}</p-message>\n    }\n\n    <form (ngSubmit)="onSubmit()" class="auth-form">\n      <div class="form-field">\n        <label class="form-label" for="email">Correo Electr\xF3nico</label>\n        <input\n          id="email"\n          type="email"\n          pInputText\n          class="w-full"\n          placeholder="tu-email@ejemplo.com"\n          [(ngModel)]="email"\n          name="email"\n          required\n        />\n      </div>\n\n      <div class="form-field">\n        <div class="flex justify-between items-center mb-1">\n          <label class="form-label" for="password">Contrase\xF1a</label>\n          <a routerLink="/auth/forgot-password" class="forgot-link">\xBFOlvidaste tu contrase\xF1a?</a>\n        </div>\n        <p-password\n          id="password"\n          [(ngModel)]="password"\n          name="password"\n          [feedback]="false"\n          [toggleMask]="true"\n          styleClass="w-full"\n          inputStyleClass="w-full"\n          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\n          required>\n        </p-password>\n      </div>\n\n      <p-button\n        type="submit"\n        label="Iniciar Sesi\xF3n"\n        icon="pi pi-sign-in"\n        severity="success"\n        styleClass="w-full mt-3"\n        [loading]="loading()"\n        [disabled]="loading() || !email || !password">\n      </p-button>\n    </form>\n\n    <ng-template #footer>\n      <div class="demo-hints">\n        <span class="hint-title"><i class="pi pi-info-circle"></i> Credenciales de Desarrollo (Dev Seed):</span>\n        <div class="hint-item"><strong>Admin:</strong> admin&#64;padelranking.dev / Admin123!</div>\n        <div class="hint-item"><strong>Equipo 1:</strong> equipo1&#64;padelranking.dev / Team123!</div>\n        <div class="hint-item"><strong>Equipo 2:</strong> equipo2&#64;padelranking.dev / Team123!</div>\n      </div>\n    </ng-template>\n  </p-card>\n</div>\n', styles: ["/* projects/rpm-users/src/app/login.component.scss */\n.auth-wrapper {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n:host ::ng-deep .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--shadow-card);\n}\n.auth-header {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n  filter: drop-shadow(0 0 15px rgba(0, 230, 118, 0.4));\n}\n.auth-title {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--font-heading);\n  color: var(--text-main);\n}\n.auth-subtitle {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.w-full {\n  width: 100%;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n.forgot-link {\n  font-size: 0.75rem;\n  color: var(--primary);\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.demo-hints {\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-color);\n  font-size: 0.75rem;\n  color: var(--text-dim);\n}\n.demo-hints .hint-title {\n  display: block;\n  font-weight: 700;\n  color: var(--text-muted);\n  margin-bottom: 0.35rem;\n}\n.demo-hints .hint-item {\n  margin-bottom: 0.2rem;\n}\n.demo-hints .hint-item strong {\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "projects/rpm-users/src/app/login.component.ts", lineNumber: 30 });
})();

// projects/rpm-users/src/app/app.routes.ts
var routes = [
  {
    path: "login",
    component: LoginComponent
  },
  __spreadValues({
    path: "forgot-password",
    loadComponent: () => import("./forgot-password.component-IGOJDTW3.js").then((m) => m.ForgotPasswordComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/forgot-password/forgot-password.component.ts" } : {}),
  __spreadValues({
    path: "reset-password",
    loadComponent: () => import("./reset-password.component-ZUO7PH5W.js").then((m) => m.ResetPasswordComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/reset-password/reset-password.component.ts" } : {}),
  __spreadValues({
    path: "setup-password",
    loadComponent: () => import("./setup-password.component-P63DY5QT.js").then((m) => m.SetupPasswordComponent)
  }, typeof ngServerMode !== "undefined" && ngServerMode ? { \u0275entryName: "src/app/setup-password/setup-password.component.ts" } : {}),
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];
export {
  routes
};
//# sourceMappingURL=routes.js.map

import "./chunk-YQOESBWP.js";

// projects/rpm-users/src/app/forgot-password/forgot-password.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "@core";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/forms";
import * as i3 from "primeng/card";
import * as i4 from "primeng/inputtext";
import * as i5 from "primeng/button";
import * as i6 from "primeng/message";
function ForgotPasswordComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    i0.\u0275\u0275text(2, "\u{1F4E7}");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "h1", 6);
    i0.\u0275\u0275text(4, "Recuperar Contrase\xF1a");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p", 7);
    i0.\u0275\u0275text(6, "Ingresa tu email para recibir el enlace de restablecimiento");
    i0.\u0275\u0275elementEnd()();
  }
}
function ForgotPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 3)(1, "p-message", 8);
    i0.\u0275\u0275text(2, "Si el email est\xE1 registrado, se han enviado las instrucciones de recuperaci\xF3n.");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(3, "p-button", 9);
    i0.\u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p-message", 10);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r1.errorMessage());
  }
}
function ForgotPasswordComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275conditionalCreate(0, ForgotPasswordComponent_Conditional_5_Conditional_0_Template, 2, 1, "p-message", 10);
    i0.\u0275\u0275elementStart(1, "form", 11);
    i0.\u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_5_Template_form_ngSubmit_1_listener() {
      i0.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r1.onSubmit());
    });
    i0.\u0275\u0275elementStart(2, "div", 12)(3, "label", 13);
    i0.\u0275\u0275text(4, "Email Registrado");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "input", 14);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_5_Template_input_ngModelChange_5_listener($event) {
      i0.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275element(6, "p-button", 15);
    i0.\u0275\u0275elementStart(7, "div", 16)(8, "a", 17);
    i0.\u0275\u0275element(9, "i", 18);
    i0.\u0275\u0275text(10, " Volver al login ");
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275conditional(ctx_r1.errorMessage() ? 0 : -1);
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("loading", ctx_r1.loading())("disabled", ctx_r1.loading() || !ctx_r1.email);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  authService = inject(AuthService);
  email = "";
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitted = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitted" }] : (
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
    if (!this.email)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.loading.set(false);
        this.submitted.set(true);
      },
      error: () => {
        this.loading.set(false);
        this.submitted.set(true);
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 6, vars: 1, consts: [["header", ""], [1, "auth-wrapper"], [1, "auth-card-prime", "glass-panel"], [1, "success-box"], [1, "auth-header"], [1, "auth-icon"], [1, "auth-title"], [1, "auth-subtitle"], ["severity", "success", "styleClass", "w-full mb-3"], ["label", "Volver al inicio de sesi\xF3n", "icon", "pi pi-arrow-left", "severity", "secondary", "routerLink", "/auth/login", "styleClass", "w-full mt-2"], ["severity", "error", "styleClass", "w-full mb-3"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "pInputText", "", "placeholder", "tu-email@ejemplo.com", "name", "email", "required", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["type", "submit", "label", "Enviar Instrucciones", "icon", "pi pi-send", "severity", "success", "styleClass", "w-full mt-2", 3, "loading", "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/auth/login", 1, "back-link"], [1, "pi", "pi-arrow-left"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 1)(1, "p-card", 2);
      i0.\u0275\u0275template(2, ForgotPasswordComponent_ng_template_2_Template, 7, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor);
      i0.\u0275\u0275conditionalCreate(4, ForgotPasswordComponent_Conditional_4_Template, 4, 0, "div", 3)(5, ForgotPasswordComponent_Conditional_5_Template, 11, 4);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275conditional(ctx.submitted() ? 4 : 5);
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
    ButtonModule,
    i5.Button,
    MessageModule,
    i6.Message
  ], styles: ["\n.auth-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n[_nghost-%COMP%]     .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--%NS%bg-card);\n  border: 1px solid var(--%NS%border-color);\n  border-radius: var(--%NS%radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--%NS%shadow-card);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--%NS%font-heading);\n  color: var(--%NS%text-main);\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--%NS%text-muted);\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-dim);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%primary);\n}\n.success-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      CardModule,
      InputTextModule,
      ButtonModule,
      MessageModule
    ], template: `
    <div class="auth-wrapper">
      <p-card class="auth-card-prime glass-panel">
        <ng-template #header>
          <div class="auth-header">
            <span class="auth-icon">\u{1F4E7}</span>
            <h1 class="auth-title">Recuperar Contrase\xF1a</h1>
            <p class="auth-subtitle">Ingresa tu email para recibir el enlace de restablecimiento</p>
          </div>
        </ng-template>

        @if (submitted()) {
          <div class="success-box">
            <p-message severity="success" styleClass="w-full mb-3">Si el email est\xE1 registrado, se han enviado las instrucciones de recuperaci\xF3n.</p-message>
            <p-button
              label="Volver al inicio de sesi\xF3n"
              icon="pi pi-arrow-left"
              severity="secondary"
              routerLink="/auth/login"
              styleClass="w-full mt-2">
            </p-button>
          </div>
        } @else {
          @if (errorMessage()) {
            <p-message severity="error" styleClass="w-full mb-3">{{ errorMessage() }}</p-message>
          }

          <form (ngSubmit)="onSubmit()" class="auth-form">
            <div class="form-field">
              <label class="form-label" for="email">Email Registrado</label>
              <input
                id="email"
                type="email"
                pInputText
                class="w-full"
                placeholder="tu-email@ejemplo.com"
                [(ngModel)]="email"
                name="email"
                required
              />
            </div>

            <p-button
              type="submit"
              label="Enviar Instrucciones"
              icon="pi pi-send"
              severity="success"
              styleClass="w-full mt-2"
              [loading]="loading()"
              [disabled]="loading() || !email">
            </p-button>

            <div class="text-center mt-3">
              <a routerLink="/auth/login" class="back-link">
                <i class="pi pi-arrow-left"></i> Volver al login
              </a>
            </div>
          </form>
        }
      </p-card>
    </div>
  `, styles: ["/* angular:styles/component:scss;36ddf4ee5149f149;/Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-users/src/app/forgot-password/forgot-password.component.ts */\n.auth-wrapper {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n:host ::ng-deep .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--shadow-card);\n}\n.auth-header {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.auth-title {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--font-heading);\n  color: var(--text-main);\n}\n.auth-subtitle {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.w-full {\n  width: 100%;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.mt-2 {\n  margin-top: 0.75rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.back-link {\n  font-size: 0.85rem;\n  color: var(--text-dim);\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.back-link:hover {\n  color: var(--primary);\n}\n.success-box {\n  text-align: center;\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "projects/rpm-users/src/app/forgot-password/forgot-password.component.ts", lineNumber: 121 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=forgot-password.component-IGOJDTW3.js.map

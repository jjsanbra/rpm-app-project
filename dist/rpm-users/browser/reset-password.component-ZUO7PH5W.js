import "./chunk-YQOESBWP.js";

// projects/rpm-users/src/app/reset-password/reset-password.component.ts
import { Component, signal, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";
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
import * as i4 from "primeng/password";
import * as i5 from "primeng/button";
import * as i6 from "primeng/message";
function ResetPasswordComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 4)(1, "span", 5);
    i0.\u0275\u0275text(2, "\u{1F511}");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(3, "h1", 6);
    i0.\u0275\u0275text(4, "Restablecer Contrase\xF1a");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p", 7);
    i0.\u0275\u0275text(6, "Introduce tu nueva clave de acceso");
    i0.\u0275\u0275elementEnd()();
  }
}
function ResetPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 3)(1, "p-message", 8);
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275element(3, "p-button", 9);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
function ResetPasswordComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p-message", 10);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext(2);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function ResetPasswordComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i0.\u0275\u0275getCurrentView();
    i0.\u0275\u0275conditionalCreate(0, ResetPasswordComponent_Conditional_5_Conditional_0_Template, 2, 1, "p-message", 10);
    i0.\u0275\u0275elementStart(1, "form", 11);
    i0.\u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Conditional_5_Template_form_ngSubmit_1_listener() {
      i0.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      return i0.\u0275\u0275resetView(ctx_r0.onSubmit());
    });
    i0.\u0275\u0275elementStart(2, "div", 12)(3, "label", 13);
    i0.\u0275\u0275text(4, "Nueva Contrase\xF1a (m\xEDnimo 8 caracteres)");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "p-password", 14);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Conditional_5_Template_p_password_ngModelChange_5_listener($event) {
      i0.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r0.password, $event) || (ctx_r0.password = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(6, "div", 12)(7, "label", 15);
    i0.\u0275\u0275text(8, "Confirmar Nueva Contrase\xF1a");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(9, "p-password", 16);
    i0.\u0275\u0275controlCreate();
    i0.\u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_Conditional_5_Template_p_password_ngModelChange_9_listener($event) {
      i0.\u0275\u0275restoreView(_r2);
      const ctx_r0 = i0.\u0275\u0275nextContext();
      i0.\u0275\u0275twoWayBindingSet(ctx_r0.confirmPassword, $event) || (ctx_r0.confirmPassword = $event);
      return i0.\u0275\u0275resetView($event);
    });
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275element(10, "p-button", 17);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275conditional(ctx_r0.errorMessage() ? 0 : -1);
    i0.\u0275\u0275advance(5);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r0.password);
    i0.\u0275\u0275property("feedback", true)("toggleMask", true)("minlength", 8);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance(4);
    i0.\u0275\u0275twoWayProperty("ngModel", ctx_r0.confirmPassword);
    i0.\u0275\u0275property("feedback", false)("toggleMask", true);
    i0.\u0275\u0275control();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("loading", ctx_r0.loading())("disabled", ctx_r0.loading() || !ctx_r0.token);
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  route = inject(ActivatedRoute);
  authService = inject(AuthService);
  token = "";
  password = "";
  confirmPassword = "";
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"] || "";
    if (!this.token) {
      this.errorMessage.set("Token de restablecimiento no proporcionado.");
    }
  }
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage.set("Las contrase\xF1as no coinciden.");
      return;
    }
    if (this.password.length < 8) {
      this.errorMessage.set("La contrase\xF1a debe tener al menos 8 caracteres.");
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.authService.resetPassword({ token: this.token, password: this.password }).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set("Contrase\xF1a restablecida correctamente.");
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMessage.set(err.error?.error || "Token inv\xE1lido o expirado.");
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 6, vars: 1, consts: [["header", ""], [1, "auth-wrapper"], [1, "auth-card-prime", "glass-panel-glow"], [1, "success-box"], [1, "auth-header"], [1, "auth-icon"], [1, "auth-title"], [1, "auth-subtitle"], ["severity", "success", "styleClass", "w-full mb-3"], ["label", "Iniciar Sesi\xF3n Ahora", "icon", "pi pi-sign-in", "severity", "success", "routerLink", "/auth/login", "styleClass", "w-full mt-2"], ["severity", "error", "styleClass", "w-full mb-3"], [1, "auth-form", 3, "ngSubmit"], [1, "form-field"], ["for", "password", 1, "form-label"], ["id", "password", "name", "password", "styleClass", "w-full", "inputStyleClass", "w-full", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel", "feedback", "toggleMask", "minlength"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "name", "confirmPassword", "styleClass", "w-full", "inputStyleClass", "w-full", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "required", "", 3, "ngModelChange", "ngModel", "feedback", "toggleMask"], ["type", "submit", "label", "Guardar Nueva Contrase\xF1a", "icon", "pi pi-save", "severity", "success", "styleClass", "w-full mt-2", 3, "loading", "disabled"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "div", 1)(1, "p-card", 2);
      i0.\u0275\u0275template(2, ResetPasswordComponent_ng_template_2_Template, 7, 0, "ng-template", null, 0, i0.\u0275\u0275templateRefExtractor);
      i0.\u0275\u0275conditionalCreate(4, ResetPasswordComponent_Conditional_4_Template, 4, 1, "div", 3)(5, ResetPasswordComponent_Conditional_5_Template, 11, 10);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275conditional(ctx.successMessage() ? 4 : 5);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    i1.RouterLink,
    FormsModule,
    i2.\u0275NgNoValidate,
    i2.NgControlStatus,
    i2.NgControlStatusGroup,
    i2.RequiredValidator,
    i2.MinLengthValidator,
    i2.NgModel,
    i2.NgForm,
    CardModule,
    i3.Card,
    InputTextModule,
    PasswordModule,
    i4.Password,
    ButtonModule,
    i5.Button,
    MessageModule,
    i6.Message
  ], styles: ["\n.auth-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n[_nghost-%COMP%]     .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--%NS%bg-card);\n  border: 1px solid var(--%NS%border-color);\n  border-radius: var(--%NS%radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--%NS%shadow-card);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--%NS%font-heading);\n  color: var(--%NS%text-main);\n}\n.auth-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--%NS%text-muted);\n}\n.auth-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--%NS%text-muted);\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.success-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=reset-password.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      CardModule,
      InputTextModule,
      PasswordModule,
      ButtonModule,
      MessageModule
    ], template: `
    <div class="auth-wrapper">
      <p-card class="auth-card-prime glass-panel-glow">
        <ng-template #header>
          <div class="auth-header">
            <span class="auth-icon">\u{1F511}</span>
            <h1 class="auth-title">Restablecer Contrase\xF1a</h1>
            <p class="auth-subtitle">Introduce tu nueva clave de acceso</p>
          </div>
        </ng-template>

        @if (successMessage()) {
          <div class="success-box">
            <p-message severity="success" styleClass="w-full mb-3">{{ successMessage() }}</p-message>
            <p-button
              label="Iniciar Sesi\xF3n Ahora"
              icon="pi pi-sign-in"
              severity="success"
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
              <label class="form-label" for="password">Nueva Contrase\xF1a (m\xEDnimo 8 caracteres)</label>
              <p-password
                id="password"
                [(ngModel)]="password"
                name="password"
                [feedback]="true"
                [toggleMask]="true"
                styleClass="w-full"
                inputStyleClass="w-full"
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                required
                [minlength]="8">
              </p-password>
            </div>

            <div class="form-field">
              <label class="form-label" for="confirmPassword">Confirmar Nueva Contrase\xF1a</label>
              <p-password
                id="confirmPassword"
                [(ngModel)]="confirmPassword"
                name="confirmPassword"
                [feedback]="false"
                [toggleMask]="true"
                styleClass="w-full"
                inputStyleClass="w-full"
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                required>
              </p-password>
            </div>

            <p-button
              type="submit"
              label="Guardar Nueva Contrase\xF1a"
              icon="pi pi-save"
              severity="success"
              styleClass="w-full mt-2"
              [loading]="loading()"
              [disabled]="loading() || !token">
            </p-button>
          </form>
        }
      </p-card>
    </div>
  `, styles: ["/* angular:styles/component:scss;98ea3a884d48d711;/Users/jjsanquisb/Labs/rpm-app-project/projects/rpm-users/src/app/reset-password/reset-password.component.ts */\n.auth-wrapper {\n  min-height: calc(80vh - 100px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.25rem;\n}\n:host ::ng-deep .auth-card-prime .p-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  box-shadow: var(--shadow-card);\n}\n.auth-header {\n  text-align: center;\n  padding-top: 1.5rem;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.auth-title {\n  font-size: 1.5rem;\n  margin-bottom: 0.3rem;\n  font-family: var(--font-heading);\n  color: var(--text-main);\n}\n.auth-subtitle {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n}\n.auth-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--text-muted);\n}\n.w-full {\n  width: 100%;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.mt-2 {\n  margin-top: 0.75rem;\n}\n.success-box {\n  text-align: center;\n}\n/*# sourceMappingURL=reset-password.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "projects/rpm-users/src/app/reset-password/reset-password.component.ts", lineNumber: 130 });
})();
export {
  ResetPasswordComponent
};
//# sourceMappingURL=reset-password.component-ZUO7PH5W.js.map

if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
import { isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, ElementRef, NgModule, booleanAttribute, inject, input } from "@angular/core";
import { BaseComponent } from "primeng/basecomponent";
import { DomHandler } from "primeng/dom";
var AutoFocus = class AutoFocus2 extends BaseComponent {
  autofocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autofocus" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pAutoFocus",
    transform: booleanAttribute
  }));
  focused = false;
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus() === false) this.host.nativeElement.removeAttribute("autofocus");
    else this.host.nativeElement.setAttribute("autofocus", true);
    if (!this.focused) this.autoFocus();
  }
  onAfterViewChecked() {
    if (!this.focused) this.autoFocus();
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus()) setTimeout(() => {
      const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
      if (focusableElements.length === 0) this.host.nativeElement.focus();
      if (focusableElements.length > 0) focusableElements[0].focus();
      this.focused = true;
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory = void 0;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = i0.\u0275\u0275getInheritedFactory(AutoFocus2)))(__ngFactoryType__ || AutoFocus2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: AutoFocus2,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [1, "pAutoFocus", "autofocus"]
    },
    features: [i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, { autofocus: [{
    type: i0.Input,
    args: [{
      isSignal: true,
      alias: "pAutoFocus",
      required: false
    }]
  }] });
})();
var AutoFocusModule = class AutoFocusModule2 {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AutoFocusModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: AutoFocusModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();
export {
  AutoFocus,
  AutoFocusModule
};
//# sourceMappingURL=primeng_autofocus.q64kED9O0y-dev.js.map

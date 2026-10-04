if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Bt,
  Ot,
  Z,
  kt
} from "@nf-internal/chunk-Q6Y7ILSX";
import "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
import { isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, NgModule, booleanAttribute, effect, input } from "@angular/core";
import { BaseComponent } from "primeng/basecomponent";
var FocusTrap = class FocusTrap2 extends BaseComponent {
  pFocusTrapDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pFocusTrapDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  constructor() {
    super();
    effect(() => {
      const disabled = this.pFocusTrapDisabled();
      if (isPlatformBrowser(this.platformId)) {
        if (disabled) this.removeHiddenFocusableElements();
        else if (!this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement) this.createHiddenFocusableElements();
      }
    });
  }
  onInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled()) {
      if (!this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement) this.createHiddenFocusableElements();
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    this.firstHiddenFocusableElement = null;
    this.lastHiddenFocusableElement = null;
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => Z("span", {
      class: "p-hidden-accessible p-hidden-focusable",
      tabindex,
      role: "presentation",
      "aria-hidden": true,
      "data-p-hidden-accessible": true,
      "data-p-hidden-focusable": true,
      onFocus: onFocus?.bind(this)
    });
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Ot(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    kt(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const { currentTarget, relatedTarget } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Bt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    kt(focusableElement);
  }
  static \u0275fac = function FocusTrap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FocusTrap2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: FocusTrap2,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [1, "pFocusTrapDisabled"]
    },
    features: [i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], () => [], { pFocusTrapDisabled: [{
    type: i0.Input,
    args: [{
      isSignal: true,
      alias: "pFocusTrapDisabled",
      required: false
    }]
  }] });
})();
var FocusTrapModule = class FocusTrapModule2 {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FocusTrapModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: FocusTrapModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();
export {
  FocusTrap,
  FocusTrapModule
};
//# sourceMappingURL=primeng_focustrap.oDnLWN4d_n-dev.js.map

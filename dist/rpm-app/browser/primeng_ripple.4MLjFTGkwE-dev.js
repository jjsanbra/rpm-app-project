if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Ft,
  L,
  R,
  W,
  k,
  le,
  st,
  zt
} from "@nf-internal/chunk-Q6Y7ILSX";
import "@nf-internal/chunk-72IGR2JC";
import "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
import { isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, Injectable, NgModule, effect, inject } from "@angular/core";
import { BaseComponent } from "primeng/basecomponent";

// node_modules/@primeuix/styles/dist/ripple/index.mjs
var style = "\n    .p-ink {\n        display: block;\n        position: absolute;\n        background: dt('ripple.background');\n        border-radius: 100%;\n        transform: scale(0);\n        pointer-events: none;\n    }\n\n    .p-ink-active {\n        animation: ripple 0.4s linear;\n    }\n\n    @keyframes ripple {\n        100% {\n            opacity: 0;\n            transform: scale(2.5);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-ripple.mjs
import { BaseStyle } from "primeng/base";
var style$1 = `
    ${style}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
var classes = { root: "p-ink" };
var RippleStyle = class RippleStyle2 extends BaseStyle {
  name = "ripple";
  style = style$1;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RippleStyle_BaseFactory = void 0;
    return function RippleStyle_Factory(__ngFactoryType__) {
      return (\u0275RippleStyle_BaseFactory || (\u0275RippleStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(RippleStyle2)))(__ngFactoryType__ || RippleStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: RippleStyle2,
    factory: RippleStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RippleStyle, [{ type: Injectable }], null, null);
})();
var RippleClasses;
(function(RippleClasses2) {
  RippleClasses2["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class Ripple2 extends BaseComponent {
  componentName = "Ripple";
  _componentStyle = inject(RippleStyle);
  animationListener;
  mouseDownListener;
  timeout;
  constructor() {
    super();
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        if (this.config.ripple()) {
          this.create();
          this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        } else this.remove();
      }
    });
  }
  onMouseDown(event) {
    let ink = this.getInk();
    if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") return;
    if (!this.$unstyled()) W(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "false");
    if (!Ft(ink) && !zt(ink)) {
      let d = Math.max(L(this.el.nativeElement), k(this.el.nativeElement));
      ink.style.height = d + "px";
      ink.style.width = d + "px";
    }
    const offset = st(this.el.nativeElement);
    let x = event.pageX - offset.left + this.document.body.scrollTop - zt(ink) / 2;
    let y = event.pageY - offset.top + this.document.body.scrollLeft - Ft(ink) / 2;
    this.renderer.setStyle(ink, "top", y + "px");
    this.renderer.setStyle(ink, "left", x + "px");
    if (!this.$unstyled()) R(ink, "p-ink-active");
    ink.setAttribute("data-p-ink-active", "true");
    this.timeout = setTimeout(() => {
      let ink2 = this.getInk();
      if (ink2) {
        if (!this.$unstyled()) W(ink2, "p-ink-active");
        ink2.setAttribute("data-p-ink-active", "false");
      }
    }, 401);
  }
  getInk() {
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++) if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) return children[i];
    return null;
  }
  resetInk() {
    let ink = this.getInk();
    if (ink) {
      if (!this.$unstyled()) W(ink, "p-ink-active");
      ink.setAttribute("data-p-ink-active", "false");
    }
  }
  onAnimationEnd(event) {
    if (this.timeout) clearTimeout(this.timeout);
    if (!this.$unstyled()) W(event.currentTarget, "p-ink-active");
    event.currentTarget.setAttribute("data-p-ink-active", "false");
  }
  create() {
    let ink = this.renderer.createElement("span");
    this.renderer.addClass(ink, "p-ink");
    this.renderer.appendChild(this.el.nativeElement, ink);
    this.renderer.setAttribute(ink, "data-p-ink", "true");
    this.renderer.setAttribute(ink, "data-p-ink-active", "false");
    this.renderer.setAttribute(ink, "aria-hidden", "true");
    this.renderer.setAttribute(ink, "role", "presentation");
    if (!this.animationListener) this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
  }
  remove() {
    let ink = this.getInk();
    if (ink) {
      if (this.mouseDownListener) this.mouseDownListener();
      if (this.animationListener) this.animationListener();
      this.mouseDownListener = null;
      this.animationListener = null;
      le(ink);
    }
  }
  onDestroy() {
    if (this.config && this.config.ripple()) this.remove();
  }
  static \u0275fac = function Ripple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Ripple2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: Ripple2,
    selectors: [["", "pRipple", ""]],
    hostAttrs: [1, "p-ripple"],
    features: [i0.\u0275\u0275ProvidersFeature([RippleStyle]), i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Ripple, [{
    type: Directive,
    args: [{
      selector: "[pRipple]",
      host: { class: "p-ripple" },
      standalone: true,
      providers: [RippleStyle]
    }]
  }], () => [], null);
})();
var RippleModule = class RippleModule2 {
  static \u0275fac = function RippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RippleModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: RippleModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RippleModule, [{
    type: NgModule,
    args: [{
      imports: [Ripple],
      exports: [Ripple]
    }]
  }], null, null);
})();
export {
  Ripple,
  RippleClasses,
  RippleModule,
  RippleStyle
};
//# sourceMappingURL=primeng_ripple.4MLjFTGkwE-dev.js.map

if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  c
} from "@nf-internal/chunk-JNJ4QYQU";
import {
  b
} from "@nf-internal/chunk-72IGR2JC";
import "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-bind.mjs
import * as i0 from "@angular/core";
import { Directive, ElementRef, NgModule, Renderer2, SecurityContext, computed, effect, inject, input, signal } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
var SANITIZED_SINKS = {
  innerhtml: SecurityContext.HTML,
  srcdoc: SecurityContext.HTML,
  href: SecurityContext.URL,
  src: SecurityContext.URL,
  action: SecurityContext.URL,
  formaction: SecurityContext.URL
};
var REJECTED_SINKS = /* @__PURE__ */ new Set(["outerhtml"]);
var Bind = class Bind2 {
  pBind = input(void 0, ...ngDevMode ? [{ debugName: "pBind" }] : (
    /* istanbul ignore next */
    []
  ));
  _attrs = signal(void 0, ...ngDevMode ? [{ debugName: "_attrs" }] : (
    /* istanbul ignore next */
    []
  ));
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{ debugName: "attrs" }] : (
    /* istanbul ignore next */
    []
  ));
  styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{ debugName: "styles" }] : (
    /* istanbul ignore next */
    []
  ));
  classes = computed(() => c(this.attrs()?.class), ...ngDevMode ? [{ debugName: "classes" }] : (
    /* istanbul ignore next */
    []
  ));
  listeners = [];
  el = inject(ElementRef);
  renderer = inject(Renderer2);
  sanitizer = inject(DomSanitizer);
  constructor() {
    effect(() => {
      const attrs = this.attrs() || {};
      const rest = Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== "style" && key !== "class"));
      for (const [key, value] of Object.entries(rest)) {
        const normalizedKey = key.toLowerCase();
        if (normalizedKey.startsWith("on")) {
          if (typeof value === "function") {
            const eventName = normalizedKey.slice(2);
            if (!this.listeners.some((l) => l.eventName === eventName)) {
              const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
              this.listeners.push({
                eventName,
                unlisten
              });
            }
          }
        } else if (value === null || value === void 0) this.renderer.removeAttribute(this.el.nativeElement, key);
        else if (REJECTED_SINKS.has(normalizedKey)) continue;
        else if (SANITIZED_SINKS[normalizedKey] !== void 0) {
          const safe = this.sanitizer.sanitize(SANITIZED_SINKS[normalizedKey], value.toString()) ?? "";
          this.renderer.setAttribute(this.el.nativeElement, key, safe);
          if (key in this.el.nativeElement) this.el.nativeElement[key] = safe;
        } else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) this.el.nativeElement[key] = value;
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!b(this._attrs(), attrs)) this._attrs.set(attrs);
  }
  clearListeners() {
    this.listeners.forEach(({ unlisten }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Bind2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: Bind2,
    selectors: [["", "pBind", ""]],
    hostVars: 4,
    hostBindings: function Bind_HostBindings(rf, ctx) {
      if (rf & 2) {
        i0.\u0275\u0275styleMap(ctx.styles());
        i0.\u0275\u0275classMap(ctx.classes());
      }
    },
    inputs: {
      pBind: [1, "pBind"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Bind, [{
    type: Directive,
    args: [{
      selector: "[pBind]",
      standalone: true,
      host: {
        "[style]": "styles()",
        "[class]": "classes()"
      }
    }]
  }], () => [], { pBind: [{
    type: i0.Input,
    args: [{
      isSignal: true,
      alias: "pBind",
      required: false
    }]
  }] });
})();
var BindModule = class BindModule2 {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BindModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: BindModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BindModule, [{
    type: NgModule,
    args: [{
      imports: [Bind],
      exports: [Bind]
    }]
  }], null, null);
})();
export {
  Bind,
  BindModule
};
//# sourceMappingURL=primeng_bind.Gxp8-1l7ER-dev.js.map

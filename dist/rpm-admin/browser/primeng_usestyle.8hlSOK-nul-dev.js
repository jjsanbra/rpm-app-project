if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  $,
  ce
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
import { DOCUMENT } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";
var _id = 0;
var UseStyle = class UseStyle2 {
  document = inject(DOCUMENT);
  styleSheets = /* @__PURE__ */ new Map();
  shadowRoots = /* @__PURE__ */ new Set();
  addShadowRoot(shadowRoot) {
    if (!this.isAdoptionSupported() || !(shadowRoot instanceof ShadowRoot)) return () => {
    };
    if (!this.shadowRoots.has(shadowRoot)) {
      this.shadowRoots.add(shadowRoot);
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, ...[...this.styleSheets.values()].filter((styleSheet) => !shadowRoot.adoptedStyleSheets.includes(styleSheet))];
    }
    return () => this.removeShadowRoot(shadowRoot);
  }
  removeShadowRoot(shadowRoot) {
    if (!this.shadowRoots.delete(shadowRoot)) return;
    const styleSheets = new Set(this.styleSheets.values());
    shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((styleSheet) => !styleSheets.has(styleSheet));
  }
  remove(name) {
    const styleSheet = this.styleSheets.get(name);
    this.styleSheets.delete(name);
    this.document?.querySelector(`style[data-primeng-style-id="${name}"]`)?.remove();
    if (!styleSheet) return;
    this.shadowRoots.forEach((shadowRoot) => {
      shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((adopted) => adopted !== styleSheet);
    });
  }
  use(css, options = {}) {
    let cssRef = css;
    let styleRef = null;
    const { name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, first = false, variables = false } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css;
        const HEAD = this.document.head;
        ce(styleRef, "nonce", nonce);
        if (first && HEAD.firstChild) HEAD.insertBefore(styleRef, HEAD.firstChild);
        else HEAD.appendChild(styleRef);
        $(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) styleRef.textContent = cssRef;
    }
    if (!variables) this.adoptStyleSheet(name, cssRef ?? "", first);
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  adoptStyleSheet(name, css, first) {
    if (!this.isAdoptionSupported()) return;
    const styleSheet = this.styleSheets.get(name);
    if (styleSheet) {
      styleSheet.replaceSync(css);
      return;
    }
    const added = new CSSStyleSheet();
    added.replaceSync(css);
    this.styleSheets = first ? new Map([[name, added], ...this.styleSheets]) : this.styleSheets.set(name, added);
    this.shadowRoots.forEach((shadowRoot) => {
      shadowRoot.adoptedStyleSheets = first ? [added, ...shadowRoot.adoptedStyleSheets] : [...shadowRoot.adoptedStyleSheets, added];
    });
  }
  isAdoptionSupported() {
    return typeof ShadowRoot !== "undefined" && typeof CSSStyleSheet !== "undefined" && typeof CSSStyleSheet.prototype.replaceSync === "function";
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UseStyle2)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: UseStyle2,
    factory: UseStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
export {
  UseStyle
};
//# sourceMappingURL=primeng_usestyle.8hlSOK-nul-dev.js.map

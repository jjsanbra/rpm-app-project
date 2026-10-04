if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  N,
  S,
  gs
} from "@nf-internal/chunk-S4Z75XSW";
import "@nf-internal/chunk-Q6Y7ILSX";
import {
  B,
  x
} from "@nf-internal/chunk-72IGR2JC";
import {
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-base.mjs
import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-component {\n        font-family: dt('typography.font.family');\n        font-feature-settings: inherit;\n        line-height: dt('typography.line.height');\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: var(--px-icon-size, dt('icon.size'));\n        height: var(--px-icon-size, dt('icon.size'));\n        flex-shrink: 0;\n    }\n\n    .p-icon-spin {\n        -webkit-animation: p-icon-spin 2s infinite linear;\n        animation: p-icon-spin 2s infinite linear;\n    }\n\n    @-webkit-keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-base.mjs
import { UseStyle } from "primeng/usestyle";
var base_default = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css$1 = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`;
var BaseStyle = class BaseStyle2 {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(gs`${x(style2, { dt: N })}`);
    return computedStyle ? this.useStyle.use(B(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => this.load(this.css, options);
  loadStyle = (options = {}, style2 = "") => this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${gs`${style2}`}`));
  loadBaseCSS = (options = {}) => this.load(css$1, options);
  loadBaseStyle = (options = {}, style$1 = "") => this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${gs`${style$1}`}`));
  getCommonTheme = (params) => S.getCommon(this.name, params);
  getComponentTheme = (params) => S.getComponent(this.name, params);
  getPresetTheme = (preset, selector, params) => S.getCustomPreset(this.name, preset, selector, params);
  getLayerOrderThemeCSS = () => S.getLayerOrderCSS(this.name);
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = x(this.css, { dt: N });
      const _style = B(gs`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => S.getCommonStyleSheet(this.name, params, props);
  getThemeStyleSheet = (params, props = {}) => {
    let css$2 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = gs`${x(this.style, { dt: N })}`;
      const _style = B(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
      css$2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css$2.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BaseStyle2)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: BaseStyle2,
    factory: BaseStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
export {
  base_default as Base,
  BaseStyle
};
//# sourceMappingURL=primeng_base.CYuemEU0Ak-dev.js.map

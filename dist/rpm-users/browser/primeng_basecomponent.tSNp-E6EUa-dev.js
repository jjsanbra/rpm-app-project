if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  c
} from "@nf-internal/chunk-JNJ4QYQU";
import {
  R,
  S
} from "@nf-internal/chunk-L3W6UKHE";
import "@nf-internal/chunk-6MXGYO3F";
import {
  A,
  C,
  K,
  c as c2,
  l,
  m,
  x
} from "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
import { DOCUMENT, isPlatformServer } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectorRef, DestroyRef, Directive, ElementRef, Injectable, InjectionToken, Injector, PLATFORM_ID, Renderer2, computed, effect, inject, input, isSignal, signal } from "@angular/core";

// node_modules/primeng/node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var c3 = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var x2 = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var m2 = (t2, o, e) => o in t2 ? c3(t2, o, { enumerable: true, configurable: true, writable: true, value: e }) : t2[o] = e;
var l2 = (t2, o) => {
  for (var e in o || (o = {})) x2.call(o, e) && m2(t2, e, o[e]);
  if (d) for (var e of d(o)) y.call(o, e) && m2(t2, e, o[e]);
  return t2;
};
function i(...t2) {
  let o = [];
  for (let e = 0; e < t2.length; e++) {
    let n = t2[e];
    if (!n) continue;
    let r = typeof n;
    if (r === "string" || r === "number") o.push(n);
    else if (r === "object") {
      let a = Array.isArray(n) ? [i(...n)] : Object.entries(n).map(([s2, f]) => f ? s2 : void 0);
      o = a.length ? o.concat(a.filter((s2) => !!s2)) : o;
    }
  }
  return o.join(" ").trim();
}
function u(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function p({ skipUndefined: t2 = false }, ...o) {
  return o == null ? void 0 : o.reduce((e, n = {}) => {
    for (let r in n) {
      let a = n[r];
      if (!(t2 && a === void 0)) if (r === "style") e.style = l2(l2({}, e.style), n.style);
      else if (r === "class" || r === "className") e[r] = i(e[r], n[r]);
      else if (u(a)) {
        let s2 = e[r];
        e[r] = s2 ? (...f) => {
          s2(...f), a(...f);
        } : a;
      } else e[r] = a;
    }
    return e;
  }, {});
}
function F(...t2) {
  return p({ skipUndefined: false }, ...t2);
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s(n = "pui_id_") {
  return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
import { Base, BaseStyle } from "primeng/base";
import { PrimeNG } from "primeng/config";
import { showInvalidLicenseBanner } from "primeng/license";
import { UseStyle } from "primeng/usestyle";
var BaseComponentStyle = class BaseComponentStyle2 extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory = void 0;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(BaseComponentStyle2)))(__ngFactoryType__ || BaseComponentStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: BaseComponentStyle2,
    factory: BaseComponentStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class BaseComponent2 {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  $parentInstance = inject(PARENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  parent = this.$params.parent;
  cn = c;
  _themeScopedListener;
  themeChangeListenerMap = /* @__PURE__ */ new Map();
  dt = input(...ngDevMode ? [void 0, { debugName: "dt" }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = input(...ngDevMode ? [void 0, { debugName: "unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  pt = input(...ngDevMode ? [void 0, { debugName: "pt" }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = input(...ngDevMode ? [void 0, { debugName: "ptOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  $attrSelector = s("pc");
  get $name() {
    return this["componentName"] || "UnknownComponent";
  }
  get $hostName() {
    const hostName = this["hostName"];
    return isSignal(hostName) ? hostName() : hostName;
  }
  get $el() {
    return this.el?.nativeElement;
  }
  directivePT = signal(void 0, ...ngDevMode ? [{ debugName: "directivePT" }] : (
    /* istanbul ignore next */
    []
  ));
  directiveUnstyled = signal(void 0, ...ngDevMode ? [{ debugName: "directiveUnstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  $unstyled = computed(() => this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? false, ...ngDevMode ? [{ debugName: "$unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  $pt = computed(() => x(this.pt() || this.directivePT(), this.$params), ...ngDevMode ? [{ debugName: "$pt" }] : (
    /* istanbul ignore next */
    []
  ));
  get $globalPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => x(value, this.$params));
  }
  get $defaultPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || x(value, this.$params));
  }
  _$styleCache;
  get $style() {
    if (!this._$styleCache) this._$styleCache = __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
    return this._$styleCache;
  }
  get $styleOptions() {
    return { nonce: this.config?.csp().nonce };
  }
  _$paramsCache;
  get $params() {
    if (!this._$paramsCache) {
      const parentInstance = this._getHostInstance(this) || this.$parentInstance;
      this._$paramsCache = {
        instance: this,
        parent: { instance: parentInstance }
      };
    }
    return this._$paramsCache;
  }
  onInit() {
  }
  onChanges(_changes) {
  }
  onDoCheck() {
  }
  onAfterContentInit() {
  }
  onAfterContentChecked() {
  }
  onAfterViewInit() {
  }
  onAfterViewChecked() {
  }
  onDestroy() {
  }
  constructor() {
    this._shareStylesWithShadowRoot();
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
        } else this._unloadScopedThemeStyles();
      }
      onCleanup(() => {
        this._offThemeChangeListener("_themeScopedListener");
      });
    });
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        if (!this.$unstyled()) {
          this._loadCoreStyles();
          this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
        }
      }
      onCleanup(() => {
        this._offThemeChangeListener("_loadCoreStyles");
      });
    });
    this._hook("onBeforeInit");
  }
  ngOnInit() {
    this._$paramsCache = void 0;
    this._$styleCache = void 0;
    this._loadCoreStyles();
    this._loadStyles();
    this.onInit();
    this._hook("onInit");
  }
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  ngAfterViewInit() {
    this.$el?.setAttribute(this.$attrSelector, "");
    if (this.config?.verified() === false) showInvalidLicenseBanner();
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  ngOnDestroy() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    this._hook("onDestroy");
  }
  _mergeProps(fn, ...args) {
    return m(fn) ? fn(...args) : F(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    return this[name] || this._getHostInstance(this)?.[name];
  }
  _getOptionValue(options, key = "", params = {}) {
    return K(options, key, params);
  }
  _hook(hookName, ...args) {
    if (this.$hostName) return;
    if (!this.pt() && !this.directivePT() && !this.config?.pt()) return;
    const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
    const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
    selfHook?.(...args);
    defaultHook?.(...args);
  }
  _load() {
    if (!Base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      Base.setLoadedStyleName("base");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener("_load", () => this._load());
  }
  _shareStylesWithShadowRoot() {
    if (isPlatformServer(this.platformId)) return;
    const rootNode = this.$el?.getRootNode?.();
    if (typeof ShadowRoot === "undefined" || !(rootNode instanceof ShadowRoot)) return;
    inject(DestroyRef).onDestroy(inject(UseStyle).addShadowRoot(rootNode));
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    if (l(globalCSS)) this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions));
  }
  _loadCoreStyles() {
    if (!Base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      Base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    if (this.$unstyled() || this.config?.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const { primitive, semantic, global, style } = this.$style?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables",
        variables: true
      }, this.$styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables",
        variables: true
      }, this.$styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables",
        variables: true
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style);
      S.setLoadedStyleName("common");
    }
    if (!S.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      const { css, style } = this.$style?.getComponentTheme?.() || {};
      this.$style?.load(css, __spreadValues({
        name: `${this.$style?.name}-variables`,
        variables: true
      }, this.$styleOptions));
      this.$style?.loadStyle(__spreadValues({
        name: `${this.$style?.name}-style`
      }, this.$styleOptions), style);
      S.setLoadedStyleName(this.$style?.name);
    }
    if (!S.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      S.setLoadedStyleName("layer-order");
    }
  }
  _loadScopedThemeStyles(preset) {
    if (this.config?.theme()?.options?.cssVariables === false && this.$style?.name) {
      if (S.addScopedToken({ [this.$style.name]: preset })) {
        S.deleteLoadedStyleName(this.$style.name);
        this._loadThemeStyles();
      }
    }
    const { css } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
    const scopedStyle = this.$style?.load(css, __spreadValues({
      name: `${this.$attrSelector}-${this.$style?.name}`
    }, this.$styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.baseStyle.useStyle.remove(`${this.$attrSelector}-${this.$style?.name}`);
  }
  _themeChangeListener(id, callback = () => {
  }) {
    this._offThemeChangeListener(id);
    Base.clearLoadedStyleNames();
    const hold = callback.bind(this);
    this.themeChangeListenerMap.set(id, hold);
    R.on("theme:change", hold);
  }
  _removeThemeListeners() {
    this._offThemeChangeListener("_themeScopedListener");
    this._offThemeChangeListener("_loadCoreStyles");
    this._offThemeChangeListener("_load");
  }
  _offThemeChangeListener(id) {
    if (this.themeChangeListenerMap.has(id)) {
      R.off("theme:change", this.themeChangeListenerMap.get(id));
      this.themeChangeListenerMap.delete(id);
    }
  }
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
    const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
    const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), {
      global: global || {}
    }));
    const datasets = this._getPTDatasets(key);
    return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
  }
  _getPTDatasets(key = "") {
    const datasetPrefix = "data-pc-";
    const isExtended = key === "root" && l(this.$pt()?.["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: C(isExtended ? this.$pt()?.["data-pc-section"] : this.$name)
    }, isExtended && { [`${datasetPrefix}extend`]: C(this.$name) }), {
      [`${this.$attrSelector}`]: ""
    })), {
      [`${datasetPrefix}section`]: C(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return c2(value) || A(value) ? { class: value } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = C(key);
      const _cKey = C(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
    };
    return pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    const fn = (value) => callback?.call(this, value, key, params);
    if (pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept")) {
      const { mergeSections = true, mergeProps: useMergeProps = false } = pt["_usept"] || this.config?.["ptOptions"]() || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (c2(value)) return value;
      else if (c2(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
    }
    return fn(pt);
  }
  _useGlobalPT(callback, key, params) {
    return this._usePT(this.$globalPT, callback, key, params);
  }
  _useDefaultPT(callback, key, params) {
    return this._usePT(this.$defaultPT, callback, key, params);
  }
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = F(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? c(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params))), self);
    }
  }
  translate(key, subKey) {
    const value = this.config.getTranslation(key);
    return subKey ? value?.[subKey] : value;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BaseComponent2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: BaseComponent2,
    inputs: {
      dt: [1, "dt"],
      unstyled: [1, "unstyled"],
      pt: [1, "pt"],
      ptOptions: [1, "ptOptions"]
    },
    features: [i0.\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), i0.\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], () => [], {
    dt: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "dt",
        required: false
      }]
    }],
    unstyled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "unstyled",
        required: false
      }]
    }],
    pt: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pt",
        required: false
      }]
    }],
    ptOptions: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "ptOptions",
        required: false
      }]
    }]
  });
})();
export {
  BaseComponent,
  BaseComponentStyle,
  PARENT_INSTANCE
};
//# sourceMappingURL=primeng_basecomponent.tSNp-E6EUa-dev.js.map

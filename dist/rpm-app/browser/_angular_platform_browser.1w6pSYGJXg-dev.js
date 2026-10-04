if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  CSS_VAR_NAMESPACE,
  DomEventsPlugin,
  DomRendererFactory2,
  EVENT_MANAGER_PLUGINS,
  EventManager,
  EventManagerPlugin,
  REMOVE_STYLES_ON_COMPONENT_DESTROY,
  SharedStylesHost,
  provideCssVarNamespacing
} from "@nf-internal/chunk-X74DXJ36";
import {
  __async,
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/@angular/platform-browser/fesm2022/_browser-chunk.mjs
import { \u0275DomAdapter as _DomAdapter, \u0275setRootDomAdapter as _setRootDomAdapter, \u0275parseCookieValue as _parseCookieValue, \u0275getDOM as _getDOM, DOCUMENT, CommonModule, \u0275PLATFORM_BROWSER_ID as _PLATFORM_BROWSER_ID } from "@angular/common";
import * as i0 from "@angular/core";
import { \u0275global as _global, \u0275RuntimeError as _RuntimeError, Inject, Injectable, inject, InjectionToken, ApplicationModule, \u0275INJECTOR_SCOPE as _INJECTOR_SCOPE, ErrorHandler, \u0275SHARED_STYLES_HOST as _SHARED_STYLES_HOST, RendererFactory2, \u0275TESTABILITY_GETTER as _TESTABILITY_GETTER, NgZone, TestabilityRegistry, Testability, \u0275TESTABILITY as _TESTABILITY, \u0275internalCreateApplication as _internalCreateApplication, createPlatformFactory, platformCore, PLATFORM_ID, PLATFORM_INITIALIZER, \u0275USE_PENDING_TASKS as _USE_PENDING_TASKS, \u0275resolveComponentResources as _resolveComponentResources, \u0275setDocument as _setDocument, NgModule } from "@angular/core";
/**
 * @license Angular v22.2.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var BrowserDomAdapter = class _BrowserDomAdapter extends _DomAdapter {
  supportsDOMEvents = true;
  static makeCurrent() {
    _setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener, options) {
    el.addEventListener(evt, listener, options);
    return () => {
      el.removeEventListener(evt, listener, options);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    node.remove();
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return _parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.head.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new _RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if (_getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  addEventListener(element, eventName, handler, options) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return _getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
    });
  }
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result = {};
    result["domEventName"] = domEventName;
    result["fullKey"] = fullKey;
    return result;
  }
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
  static \u0275fac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyEventsPlugin)(i0.\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: _KeyEventsPlugin,
    factory: _KeyEventsPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function bootstrapApplication(rootComponent, options, context) {
  return __async(this, null, function* () {
    const config = __spreadValues({
      rootComponent
    }, createProvidersConfig(options, context));
    if (false) {
      yield resolveJitResources();
    }
    return _internalCreateApplication(config);
  });
}
function createApplication(options, context) {
  return __async(this, null, function* () {
    if (false) {
      yield resolveJitResources();
    }
    return _internalCreateApplication(createProvidersConfig(options, context));
  });
}
function createProvidersConfig(options, context) {
  return {
    platformRef: context?.platformRef,
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function provideProtractorTestingSupport(options = {}) {
  return [...TESTABILITY_PROVIDERS, options?.usePendingTasksForStability !== void 0 ? {
    provide: _USE_PENDING_TASKS,
    useValue: options.usePendingTasksForStability ?? false
  } : []];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  _setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: _PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: _TESTABILITY_GETTER,
  useClass: BrowserGetTestability
}, {
  provide: _TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, _TESTABILITY_GETTER]
}, {
  provide: Testability,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, _TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: _INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true
}, DomRendererFactory2, {
  provide: _SHARED_STYLES_HOST,
  useClass: SharedStylesHost
}, {
  provide: SharedStylesHost,
  useExisting: _SHARED_STYLES_HOST
}, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var BrowserModule = class _BrowserModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const providersAlreadyPresent = inject(BROWSER_MODULE_PROVIDERS_MARKER, {
        optional: true,
        skipSelf: true
      });
      if (providersAlreadyPresent) {
        throw new _RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
      }
    }
  }
  static \u0275fac = function BrowserModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserModule)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: _BrowserModule
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [CommonModule, ApplicationModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [], null);
})();

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
import { DOCUMENT as DOCUMENT2, \u0275getDOM as _getDOM2 } from "@angular/common";
import { \u0275getDOM } from "@angular/common";
import * as i02 from "@angular/core";
import { inject as inject2, \u0275RuntimeError as _RuntimeError2, Service, Inject as Inject2, Injectable as Injectable2, \u0275global as _global2, ApplicationRef, makeEnvironmentProviders, \u0275CACHE_ACTIVE as _CACHE_ACTIVE, APP_BOOTSTRAP_LISTENER, provideStabilityDebugging, \u0275withDomHydration as _withDomHydration, \u0275withIncrementalHydration as _withIncrementalHydration, \u0275withEventReplay as _withEventReplay, \u0275withI18nSupport as _withI18nSupport, ENVIRONMENT_INITIALIZER, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as _IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, \u0275Console as _Console, \u0275formatRuntimeError as _formatRuntimeError, \u0275XSS_SECURITY_URL as _XSS_SECURITY_URL, SecurityContext, \u0275allowSanitizationBypassAndThrow as _allowSanitizationBypassAndThrow, \u0275unwrapSafeValue as _unwrapSafeValue, \u0275_sanitizeUrl as __sanitizeUrl, \u0275_sanitizeHtml as __sanitizeHtml, \u0275bypassSanitizationTrustHtml as _bypassSanitizationTrustHtml, \u0275bypassSanitizationTrustStyle as _bypassSanitizationTrustStyle, \u0275bypassSanitizationTrustScript as _bypassSanitizationTrustScript, \u0275bypassSanitizationTrustUrl as _bypassSanitizationTrustUrl, \u0275bypassSanitizationTrustResourceUrl as _bypassSanitizationTrustResourceUrl, forwardRef, Version } from "@angular/core";
import { \u0275withHttpTransferCache as _withHttpTransferCache } from "@angular/common/http";
/**
 * @license Angular v22.2.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var Meta = class _Meta {
  _doc = inject2(DOCUMENT2);
  _dom = _getDOM2();
  _cachedHead;
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  addTags(tags, forceCreation = false) {
    return tags.filter((tag) => !!tag).map((tag) => this._getOrCreateElement(tag, forceCreation));
  }
  getTag(attrSelector) {
    if (!attrSelector) return null;
    const meta = this._doc.querySelector(buildMetaSelector(attrSelector));
    return isMetaTag(meta) ? meta : null;
  }
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list = this._doc.querySelectorAll(buildMetaSelector(attrSelector));
    return list ? Array.from(list).filter((elem) => isMetaTag(elem)) : [];
  }
  updateTag(tag, selector) {
    validateMetaDefinition(tag);
    selector ??= parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      setMetaElementAttributes(tag, meta);
      return meta;
    }
    return this._getOrCreateElement(tag, true);
  }
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    validateMetaDefinition(meta);
    if (!forceCreation) {
      const selector = parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => containsAttributes(meta, elem2))[0];
      if (elem !== void 0) return elem;
    }
    const element = this._dom.createElement("meta");
    setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  static \u0275fac = function Meta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Meta)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineService({
    token: _Meta,
    factory: _Meta.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(Meta, [{
    type: Service
  }], null, null);
})();
function buildMetaSelector(attrSelector) {
  return `meta[${attrSelector}]`;
}
function setMetaElementAttributes(tag, el) {
  Object.keys(tag).forEach((prop) => el.setAttribute(getMetaKeyMap(prop), tag[prop]));
}
function validateMetaDefinition(tag) {
  for (const prop of Object.keys(tag)) {
    const attributeName = getMetaKeyMap(prop);
    if (attributeName.toLowerCase().startsWith("on")) {
      throw new _RuntimeError2(5203, (typeof ngDevMode === "undefined" || ngDevMode) && `The Meta service does not allow setting event handler attribute '${attributeName}' for security reasons.`);
    }
  }
}
function parseSelector(tag) {
  const attr = tag.name ? "name" : "property";
  return `${attr}=${escapeSelectorValue(String(tag[attr]))}`;
}
function escapeSelectorValue(value) {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function containsAttributes(tag, elem) {
  return Object.keys(tag).every((key) => elem.getAttribute(getMetaKeyMap(key)) === tag[key]);
}
function getMetaKeyMap(prop) {
  return Object.hasOwn(META_KEYS_MAP, prop) ? META_KEYS_MAP[prop] : prop;
}
function isMetaTag(tag) {
  return tag?.nodeName.toLowerCase() === "meta";
}
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var Title = class _Title {
  _doc;
  constructor(_doc) {
    this._doc = _doc;
  }
  getTitle() {
    return this._doc.title;
  }
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
  static \u0275fac = function Title_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Title)(i02.\u0275\u0275inject(DOCUMENT2));
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({
    token: _Title,
    factory: _Title.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(Title, [{
    type: Injectable2,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject2,
      args: [DOCUMENT2]
    }]
  }], null);
})();
function exportNgVar(name, value) {
  if (typeof COMPILED === "undefined" || !COMPILED) {
    const ng = _global2["ng"] = _global2["ng"] || {};
    ng[name] = value;
  }
}
var ChangeDetectionPerfRecord = class {
  msPerTick;
  numTicks;
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
};
var AngularProfiler = class {
  appRef;
  constructor(ref) {
    this.appRef = ref.injector.get(ApplicationRef);
  }
  timeChangeDetection(config) {
    const record = config && config["record"];
    const profileName = "Change Detection";
    if (record && "profile" in console && typeof console.profile === "function") {
      console.profile(profileName);
    }
    const start = performance.now();
    let numTicks = 0;
    while (numTicks < 5 || performance.now() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performance.now();
    if (record && "profileEnd" in console && typeof console.profileEnd === "function") {
      console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    console.log(`ran ${numTicks} change detection cycles`);
    console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
};
var PROFILER_GLOBAL_NAME = "profiler";
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}
var By = class {
  static all() {
    return () => true;
  }
  static css(selector) {
    return (debugElement) => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  static directive(type) {
    return (debugNode) => debugNode.providerTokens.indexOf(type) !== -1;
  }
};
function elementMatches(n, selector) {
  if (_getDOM2().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}
var CssVarNamespacer = class _CssVarNamespacer {
  namespacePrefix = inject2(CSS_VAR_NAMESPACE, {
    optional: true
  }) ?? "";
  namespace(name) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!name.startsWith("--")) {
        throw new Error(`CSS variable names passed to \`CssVarNamespacer\` must start with '--', got: '${name}'`);
      }
    }
    if (!this.namespacePrefix) return name;
    return `--${this.namespacePrefix}${name.substring("--".length)}`;
  }
  static \u0275fac = function CssVarNamespacer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CssVarNamespacer)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineService({
    token: _CssVarNamespacer,
    factory: _CssVarNamespacer.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(CssVarNamespacer, [{
    type: Service
  }], null, null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
  HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
  HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
  HydrationFeatureKind2[HydrationFeatureKind2["NoIncrementalHydration"] = 5] = "NoIncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
function hydrationFeature(\u0275kind, \u0275providers = [], \u0275options = {}) {
  return {
    \u0275kind,
    \u0275providers
  };
}
function withNoHttpTransferCache() {
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
function withHttpTransferCacheOptions(options) {
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, _withHttpTransferCache(options));
}
function withI18nSupport() {
  return hydrationFeature(HydrationFeatureKind.I18nSupport, _withI18nSupport());
}
function withEventReplay() {
  return hydrationFeature(HydrationFeatureKind.EventReplay, _withEventReplay());
}
function withIncrementalHydration() {
  return hydrationFeature(HydrationFeatureKind.IncrementalHydration, _withIncrementalHydration());
}
function withNoIncrementalHydration() {
  return hydrationFeature(HydrationFeatureKind.NoIncrementalHydration);
}
function provideEnabledBlockingInitialNavigationDetector() {
  return [{
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const isEnabledBlockingInitialNavigation = inject2(_IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, {
        optional: true
      });
      if (isEnabledBlockingInitialNavigation) {
        const console2 = inject2(_Console);
        const message = _formatRuntimeError(5001, "Configuration error: found both hydration and enabledBlocking initial navigation in the same application, which is a contradiction.");
        console2.warn(message);
      }
    },
    multi: true
  }];
}
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = /* @__PURE__ */ new Set();
  for (const {
    \u0275providers,
    \u0275kind
  } of features) {
    featuresKind.add(\u0275kind);
    if (\u0275providers.length) {
      providers.push(\u0275providers);
    }
  }
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  if (typeof ngDevMode !== "undefined" && ngDevMode) {
    if (featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
      throw new _RuntimeError2(5001, "Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
    }
    if (featuresKind.has(HydrationFeatureKind.IncrementalHydration) && featuresKind.has(HydrationFeatureKind.NoIncrementalHydration)) {
      throw new _RuntimeError2(5001, "Configuration error: found both withIncrementalHydration() and withNoIncrementalHydration() in the same call to provideClientHydration(), which is a contradiction.");
    }
  }
  return makeEnvironmentProviders([typeof ngDevMode !== "undefined" && ngDevMode ? provideEnabledBlockingInitialNavigationDetector() : [], typeof ngDevMode !== "undefined" && ngDevMode ? provideStabilityDebugging() : [], _withDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : _withHttpTransferCache({}), featuresKind.has(HydrationFeatureKind.NoIncrementalHydration) ? [] : _withIncrementalHydration(), providers, {
    provide: _CACHE_ACTIVE,
    useValue: {
      isActive: true
    }
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: () => {
      const appRef = inject2(ApplicationRef);
      const cacheState = inject2(_CACHE_ACTIVE);
      return () => {
        appRef.whenStable().then(() => {
          cacheState.isActive = false;
        });
      };
    }
  }]);
}
var DomSanitizer = class _DomSanitizer {
  static \u0275fac = function DomSanitizer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizer)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({
    token: _DomSanitizer,
    factory: function DomSanitizer_Factory(__ngFactoryType__) {
      let __ngConditionalFactory__ = null;
      if (__ngFactoryType__) {
        __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
      } else {
        __ngConditionalFactory__ = i02.\u0275\u0275inject(DomSanitizerImpl);
      }
      return __ngConditionalFactory__;
    },
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(DomSanitizer, [{
    type: Injectable2,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  _doc = inject2(DOCUMENT2);
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (_allowSanitizationBypassAndThrow(value, "HTML")) {
          return _unwrapSafeValue(value);
        }
        return __sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (_allowSanitizationBypassAndThrow(value, "Style")) {
          return _unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (_allowSanitizationBypassAndThrow(value, "Script")) {
          return _unwrapSafeValue(value);
        }
        throw new _RuntimeError2(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (_allowSanitizationBypassAndThrow(value, "URL")) {
          return _unwrapSafeValue(value);
        }
        return __sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (_allowSanitizationBypassAndThrow(value, "ResourceURL")) {
          return _unwrapSafeValue(value);
        }
        throw new _RuntimeError2(-5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${_XSS_SECURITY_URL})`);
      default:
        throw new _RuntimeError2(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return _bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return _bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return _bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return _bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return _bypassSanitizationTrustResourceUrl(value);
  }
  static \u0275fac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizerImpl)();
  };
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineService({
    token: _DomSanitizerImpl,
    factory: _DomSanitizerImpl.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(DomSanitizerImpl, [{
    type: Service
  }], null, null);
})();
var VERSION = /* @__PURE__ */ new Version("22.2.1");
export {
  BrowserModule,
  By,
  CssVarNamespacer,
  DomSanitizer,
  EVENT_MANAGER_PLUGINS,
  EventManager,
  EventManagerPlugin,
  HydrationFeatureKind,
  Meta,
  REMOVE_STYLES_ON_COMPONENT_DESTROY,
  Title,
  VERSION,
  bootstrapApplication,
  createApplication,
  disableDebugTools,
  enableDebugTools,
  platformBrowser,
  provideClientHydration,
  provideCssVarNamespacing,
  provideProtractorTestingSupport,
  withEventReplay,
  withHttpTransferCacheOptions,
  withI18nSupport,
  withIncrementalHydration,
  withNoHttpTransferCache,
  withNoIncrementalHydration,
  BrowserDomAdapter as \u0275BrowserDomAdapter,
  BrowserGetTestability as \u0275BrowserGetTestability,
  DomEventsPlugin as \u0275DomEventsPlugin,
  DomRendererFactory2 as \u0275DomRendererFactory2,
  DomSanitizerImpl as \u0275DomSanitizerImpl,
  KeyEventsPlugin as \u0275KeyEventsPlugin,
  SharedStylesHost as \u0275SharedStylesHost,
  \u0275getDOM
};
//# sourceMappingURL=_angular_platform_browser.1w6pSYGJXg-dev.js.map

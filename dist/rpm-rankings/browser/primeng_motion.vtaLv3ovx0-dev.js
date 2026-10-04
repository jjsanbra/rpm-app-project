if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  se
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-motion.mjs
import * as i0 from "@angular/core";
import { Component, Directive, Injectable, InjectionToken, NgModule, afterRenderEffect, computed, effect, inject, input, output, signal, untracked } from "@angular/core";
import { CommonModule } from "@angular/common";

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/object/index.mjs
function se2(e) {
  if (e === "auto") return 0;
  if (typeof e == "number") return e;
  let t = Number(e.replace(",", ".").replace(/[^\d.]/g, ""));
  return Number.isNaN(t) || /ms\s*$/.test(e) ? t : t * 1e3;
}

// node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/dom/index.mjs
function I(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : false;
}
function R(t, e) {
  if (t && e) {
    let o = (n) => {
      I(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function W(t, e) {
  if (t && e) {
    let o = (n) => {
      t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function T(t) {
  let e = { width: 0, height: 0 };
  if (t) {
    let [o, n] = [t.style.visibility, t.style.display], r = t.getBoundingClientRect();
    t.style.visibility = "hidden", t.style.display = "block", e.width = r.width || t.offsetWidth, e.height = r.height || t.offsetHeight, t.style.display = n, t.style.visibility = o;
  }
  return e;
}
function oe() {
  return typeof window == "undefined" || !window.matchMedia ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function me(t, e, o = null, n) {
  e && (t != null && t.style) && t.style.setProperty(e, o, n);
}

// node_modules/@primeuix/motion/dist/index.mjs
var J = Object.defineProperty;
var N = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty;
var Q = Object.prototype.propertyIsEnumerable;
var S = (t, o, e) => o in t ? J(t, o, { enumerable: true, configurable: true, writable: true, value: e }) : t[o] = e;
var x = (t, o) => {
  for (var e in o || (o = {})) K.call(o, e) && S(t, e, o[e]);
  if (N) for (var e of N(o)) Q.call(o, e) && S(t, e, o[e]);
  return t;
};
var k = (t, o, e) => new Promise((i, u) => {
  var a = (s) => {
    try {
      h(e.next(s));
    } catch (f) {
      u(f);
    }
  }, M = (s) => {
    try {
      h(e.throw(s));
    } catch (f) {
      u(f);
    }
  }, h = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(a, M);
  h((e = e.apply(t, o)).next());
});
var p = "animation";
var E = "transition";
var Z = ["data-enter-phase", "data-enter-from", "data-enter-to", "data-enter-active", "data-leave-phase", "data-leave-from", "data-leave-to", "data-leave-active"];
function j(t) {
  return t ? t.disabled || !!(t.safe && oe()) : false;
}
function V(t, o) {
  return t ? x(x({}, t), Object.entries(o).reduce((e, [i, u]) => {
    var a;
    return e[i] = (a = t[i]) != null ? a : u, e;
  }, {})) : x({}, o);
}
function _(t) {
  let { name: o, enterClass: e, leaveClass: i } = t || {};
  return { enter: { from: (e == null ? void 0 : e.from) || `${o}-enter-from`, to: (e == null ? void 0 : e.to) || `${o}-enter-to`, active: (e == null ? void 0 : e.active) || `${o}-enter-active` }, leave: { from: (i == null ? void 0 : i.from) || `${o}-leave-from`, to: (i == null ? void 0 : i.to) || `${o}-leave-to`, active: (i == null ? void 0 : i.active) || `${o}-leave-active` } };
}
function C(t) {
  return { enter: { onBefore: t == null ? void 0 : t.onBeforeEnter, onStart: t == null ? void 0 : t.onEnter, onAfter: t == null ? void 0 : t.onAfterEnter, onCancelled: t == null ? void 0 : t.onEnterCancelled }, leave: { onBefore: t == null ? void 0 : t.onBeforeLeave, onStart: t == null ? void 0 : t.onLeave, onAfter: t == null ? void 0 : t.onAfterLeave, onCancelled: t == null ? void 0 : t.onLeaveCancelled } };
}
function R2(t, o) {
  let e = window.getComputedStyle(t), i = (d) => {
    let l = e[`${d}Duration`].split(", ").map(se2), m = e[`${d}Delay`].split(", ").map(se2);
    return m.length < l.length && m.length > 0 && (m = l.map((v, b) => m[b % m.length])), [m, l];
  }, [u, a] = i(E), [M, h] = i(p), s = Math.max(...a.map((d, l) => d + u[l])), f = Math.max(...h.map((d, l) => d + M[l])), r, n = 0, c = 0;
  return o === E ? s > 0 && (r = E, n = s, c = a.length) : o === p ? f > 0 && (r = p, n = f, c = h.length) : (n = Math.max(s, f), r = n > 0 ? s > f ? E : p : void 0, c = r ? r === E ? a.length : h.length : 0), { type: r, timeout: n, count: c };
}
function q(t, o) {
  return typeof t == "number" ? t : t != null && typeof t == "object" && t[o] != null ? t[o] : null;
}
function W2(t, o) {
  return t ? `--${t}-${o}` : `--${o}`;
}
function g(t, o, e) {
  let { autoHeight: i, autoWidth: u, cssVarPrefix: a } = o, M = typeof e == "object";
  i && me(t, W2(a, "height"), M ? e.height : e), u && me(t, W2(a, "width"), M ? e.width : e);
}
function P(t, o) {
  if (!o.autoHeight && !o.autoWidth) return;
  let e = t.scrollHeight, i = t.scrollWidth;
  if (!e || !i) {
    let u = T(t);
    e || (e = u.height), i || (i = u.width);
  }
  g(t, o, { height: e + "px", width: i + "px" });
}
function z(t, o) {
  t.setAttribute(`data-${o}-phase`, "");
}
function O(t, o, e) {
  t.removeAttribute("data-enter-from"), t.removeAttribute("data-enter-to"), t.removeAttribute("data-leave-from"), t.removeAttribute("data-leave-to"), t.setAttribute(`data-${o}-${e}`, ""), t.setAttribute(`data-${o}-active`, "");
}
function T2(t) {
  t.removeAttribute("data-enter-phase"), t.removeAttribute("data-leave-phase");
}
function B(t) {
  Z.forEach((o) => t.removeAttribute(o));
}
var tt = Object.freeze({ name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: true, cssVarPrefix: "" });
function dt(t, o) {
  if (!t) throw new Error("Element is required.");
  let e = {}, i = false, u = {}, a = null, M = {}, h = (r) => {
    for (let n of Object.keys(e)) delete e[n];
    if (Object.assign(e, V(r, tt)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
    M = C(e), i = j(e), u = _(e), a = null;
  }, s = (r) => k(null, null, function* () {
    a == null || a();
    let n = t, { onBefore: c, onStart: d, onAfter: l, onCancelled: m } = M[r] || {}, v = { element: t };
    if (z(n, r), i) {
      c == null || c(v), d == null || d(v), l == null || l(v), T2(n), g(n, e, r === "enter" ? "auto" : "0px");
      return;
    }
    let { from: b, active: A, to: H } = u[r] || {};
    return c == null || c(v), r === "enter" ? g(n, e, "0px") : r === "leave" && P(n, e), R(n, b), R(n, A), O(n, r, "from"), n.offsetHeight, r === "enter" ? P(n, e) : r === "leave" && g(n, e, "0px"), W(n, b), R(n, H), O(n, r, "to"), d == null || d(v), new Promise((D) => {
      let U = q(e.duration, r), w = () => {
        W(n, [H, A]), a = null, B(n), T2(n);
      }, G = () => {
        w(), l == null || l(v), D(), r === "enter" ? g(n, e, "auto") : r === "leave" && g(n, e, "0px");
      }, L = () => {
      };
      a = () => {
        L(), w(), m == null || m(v), D();
      }, L = ot(n, e.type, U, G);
    });
  });
  h(o), g(t, e, "0px");
  let f = { enter: () => e.enter ? s("enter") : Promise.resolve(), leave: () => e.leave ? s("leave") : Promise.resolve(), cancel: () => {
    a == null || a(), a = null;
  }, update: (r, n) => {
    if (!r) throw new Error("Element is required.");
    t = r, f.cancel(), n && h(n);
  } };
  return e.appear && f.enter(), f;
}
var et = 0;
function ot(t, o, e, i) {
  let u = t._motionEndId = ++et, a = () => {
    u === t._motionEndId && i();
  };
  if (e != null) {
    let m = setTimeout(a, e);
    return () => clearTimeout(m);
  }
  let { type: M, timeout: h, count: s } = R2(t, o);
  if (!M) return i(), () => {
  };
  let f = M + "end", r = 0, n = () => {
    t.removeEventListener(f, d, true), clearTimeout(l);
  }, c = () => {
    n(), a();
  }, d = (m) => {
    m.target === t && ++r >= s && c();
  };
  t.addEventListener(f, d, { capture: true });
  let l = setTimeout(() => {
    r < s && c();
  }, h + 1);
  return n;
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";
import { BaseStyle } from "primeng/base";
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) originalStyles.set(element, {
    display: element.style.display,
    visibility: element.style.visibility,
    maxHeight: element.style.maxHeight
  });
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
  }
}
function resetStyles(element, strategy) {
  if (!element) return;
  const original = originalStyles.get(element) ?? element.style;
  switch (strategy) {
    case "display":
      element.style.display = original?.display || "";
      break;
    case "visibility":
      element.style.visibility = original?.visibility || "";
      element.style.maxHeight = original?.maxHeight || "";
  }
  originalStyles.delete(element);
}
var style = `
    .p-motion {
        display: block;
    }
`;
var classes = { root: "p-motion" };
var MotionStyle = class MotionStyle2 extends BaseStyle {
  name = "motion";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MotionStyle_BaseFactory = void 0;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (\u0275MotionStyle_BaseFactory || (\u0275MotionStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(MotionStyle2)))(__ngFactoryType__ || MotionStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: MotionStyle2,
    factory: MotionStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MotionStyle, [{ type: Injectable }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class Motion2 extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(MotionStyle);
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "visible" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (value) => value ?? false
  }));
  mountOnEnter = input(true, ...ngDevMode ? [{ debugName: "mountOnEnter" }] : (
    /* istanbul ignore next */
    []
  ));
  unmountOnLeave = input(true, ...ngDevMode ? [{ debugName: "unmountOnLeave" }] : (
    /* istanbul ignore next */
    []
  ));
  name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  type = input(void 0, ...ngDevMode ? [{ debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  safe = input(void 0, ...ngDevMode ? [{ debugName: "safe" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  appear = input(false, ...ngDevMode ? [{ debugName: "appear" }] : (
    /* istanbul ignore next */
    []
  ));
  enter = input(true, ...ngDevMode ? [{ debugName: "enter" }] : (
    /* istanbul ignore next */
    []
  ));
  leave = input(true, ...ngDevMode ? [{ debugName: "leave" }] : (
    /* istanbul ignore next */
    []
  ));
  duration = input(void 0, ...ngDevMode ? [{ debugName: "duration" }] : (
    /* istanbul ignore next */
    []
  ));
  hideStrategy = input("display", ...ngDevMode ? [{ debugName: "hideStrategy" }] : (
    /* istanbul ignore next */
    []
  ));
  enterFromClass = input(void 0, ...ngDevMode ? [{ debugName: "enterFromClass" }] : (
    /* istanbul ignore next */
    []
  ));
  enterToClass = input(void 0, ...ngDevMode ? [{ debugName: "enterToClass" }] : (
    /* istanbul ignore next */
    []
  ));
  enterActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "enterActiveClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveFromClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveFromClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveToClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveToClass" }] : (
    /* istanbul ignore next */
    []
  ));
  leaveActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveActiveClass" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (value) => value ?? {}
  }));
  onBeforeEnter = output();
  onEnter = output();
  onAfterEnter = output();
  onEnterCancelled = output();
  onBeforeLeave = output();
  onLeave = output();
  onAfterLeave = output();
  onLeaveCancelled = output();
  motionOptions = computed(() => {
    const options = this.options();
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(false, ...ngDevMode ? [{ debugName: "rendered" }] : (
    /* istanbul ignore next */
    []
  ));
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      const hideStrategy = this.hideStrategy();
      if (this.isInitialMount) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
      } else if (this.visible() && !this.rendered()) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(true);
      }
    });
    effect(() => {
      if (!this.motion) this.motion = dt(this.$el, this.motionOptions());
    });
    afterRenderEffect(() => __async(this, null, function* () {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        yield se();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        yield se();
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(() => __async(this, null, function* () {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              yield se();
              if (!this.cancelled) this.rendered.set(false);
            }
          }
        }));
      }
      this.isInitialMount = false;
    }));
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") el.style.transitionDuration = durationValue;
    else el.style.animationDuration = durationValue;
  }
  onAfterViewChecked() {
    const optionsAttrs = this.options()?.root || {};
    this.bindDirectiveInstance.setAttrs(__spreadValues(__spreadValues({}, this.ptms(["host", "root"])), optionsAttrs));
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function Motion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Motion2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["*"];
    function Motion_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275projection(0);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Motion2,
      selectors: [["p-motion"]],
      hostVars: 2,
      hostBindings: function Motion_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        visible: [1, "visible"],
        mountOnEnter: [1, "mountOnEnter"],
        unmountOnLeave: [1, "unmountOnLeave"],
        name: [1, "name"],
        type: [1, "type"],
        safe: [1, "safe"],
        disabled: [1, "disabled"],
        appear: [1, "appear"],
        enter: [1, "enter"],
        leave: [1, "leave"],
        duration: [1, "duration"],
        hideStrategy: [1, "hideStrategy"],
        enterFromClass: [1, "enterFromClass"],
        enterToClass: [1, "enterToClass"],
        enterActiveClass: [1, "enterActiveClass"],
        leaveFromClass: [1, "leaveFromClass"],
        leaveToClass: [1, "leaveToClass"],
        leaveActiveClass: [1, "leaveActiveClass"],
        options: [1, "options"]
      },
      outputs: {
        onBeforeEnter: "onBeforeEnter",
        onEnter: "onEnter",
        onAfterEnter: "onAfterEnter",
        onEnterCancelled: "onEnterCancelled",
        onBeforeLeave: "onBeforeLeave",
        onLeave: "onLeave",
        onAfterLeave: "onAfterLeave",
        onLeaveCancelled: "onLeaveCancelled"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        MotionStyle,
        {
          provide: MOTION_INSTANCE,
          useExisting: Motion2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Motion2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      template: function Motion_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275conditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
        }
        if (rf & 2) {
          i0.\u0275\u0275conditional(ctx.rendered() ? 0 : -1);
        }
      },
      dependencies: [CommonModule, BindModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Motion, [{
    type: Component,
    args: [{
      selector: "p-motion",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
      providers: [
        MotionStyle,
        {
          provide: MOTION_INSTANCE,
          useExisting: Motion
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Motion
        }
      ],
      host: { "[class]": "cx('root')" },
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    visible: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    mountOnEnter: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "mountOnEnter",
        required: false
      }]
    }],
    unmountOnLeave: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "unmountOnLeave",
        required: false
      }]
    }],
    name: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    type: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    safe: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "safe",
        required: false
      }]
    }],
    disabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    appear: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "appear",
        required: false
      }]
    }],
    enter: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "enter",
        required: false
      }]
    }],
    leave: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "leave",
        required: false
      }]
    }],
    duration: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "enterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "enterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "enterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "leaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "leaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "leaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: i0.Output,
      args: ["onBeforeEnter"]
    }],
    onEnter: [{
      type: i0.Output,
      args: ["onEnter"]
    }],
    onAfterEnter: [{
      type: i0.Output,
      args: ["onAfterEnter"]
    }],
    onEnterCancelled: [{
      type: i0.Output,
      args: ["onEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: i0.Output,
      args: ["onBeforeLeave"]
    }],
    onLeave: [{
      type: i0.Output,
      args: ["onLeave"]
    }],
    onAfterLeave: [{
      type: i0.Output,
      args: ["onAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: i0.Output,
      args: ["onLeaveCancelled"]
    }]
  });
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class MotionDirective2 extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "visible" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotion",
    transform: (value) => value ?? false
  }));
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "name" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionName"
  }));
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "type" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionType"
  }));
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "safe" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionSafe"
  }));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDisabled"
  }));
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "appear" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionAppear"
  }));
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enter" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnter"
  }));
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leave" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeave"
  }));
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "duration" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDuration"
  }));
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideStrategy" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionHideStrategy"
  }));
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterFromClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterFromClass"
  }));
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterToClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterToClass"
  }));
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "enterActiveClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterActiveClass"
  }));
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveFromClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveFromClass"
  }));
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveToClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveToClass"
  }));
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "leaveActiveClass" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveActiveClass"
  }));
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "options" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionOptions",
    transform: (value) => value ?? {}
  }));
  onBeforeEnter = output({ alias: "pMotionOnBeforeEnter" });
  onEnter = output({ alias: "pMotionOnEnter" });
  onAfterEnter = output({ alias: "pMotionOnAfterEnter" });
  onEnterCancelled = output({ alias: "pMotionOnEnterCancelled" });
  onBeforeLeave = output({ alias: "pMotionOnBeforeLeave" });
  onLeave = output({ alias: "pMotionOnLeave" });
  onAfterLeave = output({ alias: "pMotionOnAfterLeave" });
  onLeaveCancelled = output({ alias: "pMotionOnLeaveCancelled" });
  motionOptions = computed(() => {
    const options = this.options() ?? {};
    return {
      name: options.name ?? this.name(),
      type: options.type ?? this.type(),
      safe: options.safe ?? this.safe(),
      disabled: options.disabled ?? this.disabled(),
      appear: false,
      enter: options.enter ?? this.enter(),
      leave: options.leave ?? this.leave(),
      duration: options.duration ?? this.duration(),
      enterClass: {
        from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
        to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
        active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
      },
      leaveClass: {
        from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
        to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
        active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
      },
      onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
      onEnter: options.onEnter ?? this.handleEnter,
      onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
      onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
      onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
      onLeave: options.onLeave ?? this.handleLeave,
      onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
      onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
    };
  }, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    afterRenderEffect(() => {
      if (!this.$el) return;
      this.motion ??= dt(this.$el, untracked(this.motionOptions));
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(() => {
          if (this.$el && !this.cancelled && !this.visible()) applyHiddenStyles(this.$el, hideStrategy);
        });
      } else applyHiddenStyles(this.$el, hideStrategy);
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") el.style.transitionDuration = durationValue;
    else el.style.animationDuration = durationValue;
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static \u0275fac = function MotionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MotionDirective2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: MotionDirective2,
    selectors: [["", "pMotion", ""]],
    inputs: {
      visible: [1, "pMotion", "visible"],
      name: [1, "pMotionName", "name"],
      type: [1, "pMotionType", "type"],
      safe: [1, "pMotionSafe", "safe"],
      disabled: [1, "pMotionDisabled", "disabled"],
      appear: [1, "pMotionAppear", "appear"],
      enter: [1, "pMotionEnter", "enter"],
      leave: [1, "pMotionLeave", "leave"],
      duration: [1, "pMotionDuration", "duration"],
      hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"],
      enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"],
      enterToClass: [1, "pMotionEnterToClass", "enterToClass"],
      enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"],
      leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"],
      leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"],
      leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"],
      options: [1, "pMotionOptions", "options"]
    },
    outputs: {
      onBeforeEnter: "pMotionOnBeforeEnter",
      onEnter: "pMotionOnEnter",
      onAfterEnter: "pMotionOnAfterEnter",
      onEnterCancelled: "pMotionOnEnterCancelled",
      onBeforeLeave: "pMotionOnBeforeLeave",
      onLeave: "pMotionOnLeave",
      onAfterLeave: "pMotionOnAfterLeave",
      onLeaveCancelled: "pMotionOnLeaveCancelled"
    },
    features: [i0.\u0275\u0275ProvidersFeature([
      MotionStyle,
      {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective2
      }
    ]), i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [
        MotionStyle,
        {
          provide: MOTION_DIRECTIVE_INSTANCE,
          useExisting: MotionDirective
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: MotionDirective
        }
      ]
    }]
  }], () => [], {
    visible: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotion",
        required: false
      }]
    }],
    name: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionName",
        required: false
      }]
    }],
    type: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionType",
        required: false
      }]
    }],
    safe: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionSafe",
        required: false
      }]
    }],
    disabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionDisabled",
        required: false
      }]
    }],
    appear: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionAppear",
        required: false
      }]
    }],
    enter: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnter",
        required: false
      }]
    }],
    leave: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeave",
        required: false
      }]
    }],
    duration: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionDuration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionHideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pMotionOptions",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: i0.Output,
      args: ["pMotionOnBeforeEnter"]
    }],
    onEnter: [{
      type: i0.Output,
      args: ["pMotionOnEnter"]
    }],
    onAfterEnter: [{
      type: i0.Output,
      args: ["pMotionOnAfterEnter"]
    }],
    onEnterCancelled: [{
      type: i0.Output,
      args: ["pMotionOnEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: i0.Output,
      args: ["pMotionOnBeforeLeave"]
    }],
    onLeave: [{
      type: i0.Output,
      args: ["pMotionOnLeave"]
    }],
    onAfterLeave: [{
      type: i0.Output,
      args: ["pMotionOnAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: i0.Output,
      args: ["pMotionOnLeaveCancelled"]
    }]
  });
})();
var MotionModule = class MotionModule2 {
  static \u0275fac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MotionModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: MotionModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Motion]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MotionModule, [{
    type: NgModule,
    args: [{
      imports: [Motion, MotionDirective],
      exports: [Motion, MotionDirective]
    }]
  }], null, null);
})();
export {
  Motion,
  MotionDirective,
  MotionModule
};
//# sourceMappingURL=primeng_motion.vtaLv3ovx0-dev.js.map

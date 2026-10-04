if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  G,
  L,
  R,
  St,
  W,
  Y,
  kt,
  re,
  z
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-overlay.mjs
import { NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, computed, contentChild, effect, inject, input, model, output, signal, viewChild } from "@angular/core";
import { OverlayService, SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { ConnectedOverlayScrollHandler } from "primeng/dom";
import * as i2 from "primeng/motion";
import { MotionModule } from "primeng/motion";
import { ZIndexUtils } from "primeng/utils";
import { BaseStyle } from "primeng/base";
var inlineStyles = {
  root: ({ instance }) => {
    return __spreadValues(__spreadValues({
      position: "absolute",
      top: "0"
    }, instance.modal() ? instance.$overlayResponsiveOptions()?.style : instance.$overlayOptions()?.style), instance.style());
  },
  content: ({ instance }) => {
    return __spreadValues(__spreadValues({}, instance.modal() ? instance.$overlayResponsiveOptions()?.contentStyle : instance.$overlayOptions()?.contentStyle), instance.contentStyle());
  }
};
var style = `
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`;
var classes = {
  host: "p-overlay-host",
  root: ({ instance }) => {
    const modal = instance.modal();
    const dir = instance.overlayResponsiveDirection();
    return ["p-overlay p-component", {
      "p-overlay-modal p-overlay-mask p-overlay-mask-enter-active": modal,
      "p-overlay-center": modal && dir === "center",
      "p-overlay-top": modal && dir === "top",
      "p-overlay-top-start": modal && dir === "top-start",
      "p-overlay-top-end": modal && dir === "top-end",
      "p-overlay-bottom": modal && dir === "bottom",
      "p-overlay-bottom-start": modal && dir === "bottom-start",
      "p-overlay-bottom-end": modal && dir === "bottom-end",
      "p-overlay-left": modal && dir === "left",
      "p-overlay-left-start": modal && dir === "left-start",
      "p-overlay-left-end": modal && dir === "left-end",
      "p-overlay-right": modal && dir === "right",
      "p-overlay-right-start": modal && dir === "right-start",
      "p-overlay-right-end": modal && dir === "right-end"
    }];
  },
  content: "p-overlay-content"
};
var OverlayStyle = class OverlayStyle2 extends BaseStyle {
  name = "overlay";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275OverlayStyle_BaseFactory = void 0;
    return function OverlayStyle_Factory(__ngFactoryType__) {
      return (\u0275OverlayStyle_BaseFactory || (\u0275OverlayStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(OverlayStyle2)))(__ngFactoryType__ || OverlayStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: OverlayStyle2,
    factory: OverlayStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(OverlayStyle, [{ type: Injectable }], null, null);
})();
var OVERLAY_INSTANCE = new InjectionToken("OVERLAY_INSTANCE");
var Overlay = class Overlay2 extends BaseComponent {
  componentName = "Overlay";
  $pcOverlay = inject(OVERLAY_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : (
    /* istanbul ignore next */
    []
  ));
  visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  mode = input(...ngDevMode ? [void 0, { debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  style = input(...ngDevMode ? [void 0, { debugName: "style" }] : (
    /* istanbul ignore next */
    []
  ));
  styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  contentStyle = input(...ngDevMode ? [void 0, { debugName: "contentStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  contentStyleClass = input(...ngDevMode ? [void 0, { debugName: "contentStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  target = input(...ngDevMode ? [void 0, { debugName: "target" }] : (
    /* istanbul ignore next */
    []
  ));
  autoZIndex = input(...ngDevMode ? [void 0, { debugName: "autoZIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  baseZIndex = input(...ngDevMode ? [void 0, { debugName: "baseZIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  listener = input(...ngDevMode ? [void 0, { debugName: "listener" }] : (
    /* istanbul ignore next */
    []
  ));
  responsive = input(...ngDevMode ? [void 0, { debugName: "responsive" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input(...ngDevMode ? [void 0, { debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  inline = input(false, ...ngDevMode ? [{ debugName: "inline" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(void 0, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  onBeforeShow = output();
  onShow = output();
  onBeforeHide = output();
  onHide = output();
  onAnimationStart = output();
  onAnimationDone = output();
  onBeforeEnter = output();
  onEnter = output();
  onAfterEnter = output();
  onBeforeLeave = output();
  onLeave = output();
  onAfterLeave = output();
  overlayViewChild = viewChild("overlay", ...ngDevMode ? [{ debugName: "overlayViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  contentViewChild = viewChild("content", ...ngDevMode ? [{ debugName: "contentViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  contentTemplate = contentChild("content", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "contentTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  hostAttrSelector = input(...ngDevMode ? [void 0, { debugName: "hostAttrSelector" }] : (
    /* istanbul ignore next */
    []
  ));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  $overlayOptions = computed(() => __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options()), ...ngDevMode ? [{ debugName: "$overlayOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  $overlayResponsiveOptions = computed(() => __spreadValues(__spreadValues({}, this.$overlayOptions()?.responsive), this.responsive()), ...ngDevMode ? [{ debugName: "$overlayResponsiveOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayResponsiveDirection = computed(() => this.$overlayResponsiveOptions()?.direction || "center", ...ngDevMode ? [{ debugName: "overlayResponsiveDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  $mode = computed(() => this.mode() || this.$overlayOptions()?.mode, ...ngDevMode ? [{ debugName: "$mode" }] : (
    /* istanbul ignore next */
    []
  ));
  mergedStyleClass = computed(() => this.cn(this.styleClass(), this.modal() ? this.$overlayResponsiveOptions()?.styleClass : this.$overlayOptions()?.styleClass), ...ngDevMode ? [{ debugName: "mergedStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  mergedContentStyleClass = computed(() => this.cn(this.contentStyleClass(), this.modal() ? this.$overlayResponsiveOptions()?.contentStyleClass : this.$overlayOptions()?.contentStyleClass), ...ngDevMode ? [{ debugName: "mergedContentStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  $target = computed(() => {
    const value = this.target() || this.$overlayOptions()?.target;
    return value === void 0 ? "@prev" : value;
  }, ...ngDevMode ? [{ debugName: "$target" }] : (
    /* istanbul ignore next */
    []
  ));
  $autoZIndex = computed(() => {
    const value = this.autoZIndex() || this.$overlayOptions()?.autoZIndex;
    return value === void 0 ? true : value;
  }, ...ngDevMode ? [{ debugName: "$autoZIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  $baseZIndex = computed(() => {
    const value = this.baseZIndex() || this.$overlayOptions()?.baseZIndex;
    return value === void 0 ? 0 : value;
  }, ...ngDevMode ? [{ debugName: "$baseZIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  $listener = computed(() => this.listener() || this.$overlayOptions()?.listener, ...ngDevMode ? [{ debugName: "$listener" }] : (
    /* istanbul ignore next */
    []
  ));
  modal = computed(() => {
    if (isPlatformBrowser(this.platformId)) return this.$mode() === "modal" || this.$overlayResponsiveOptions() && this.document.defaultView?.matchMedia(this.$overlayResponsiveOptions().media?.replace("@media", "") || `(max-width: ${this.$overlayResponsiveOptions().breakpoint})`).matches;
  }, ...ngDevMode ? [{ debugName: "modal" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayMode = computed(() => this.$mode() || (this.modal() ? "modal" : "overlay"), ...ngDevMode ? [{ debugName: "overlayMode" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayEl = computed(() => this.overlayViewChild()?.nativeElement, ...ngDevMode ? [{ debugName: "overlayEl" }] : (
    /* istanbul ignore next */
    []
  ));
  contentEl = computed(() => this.contentViewChild()?.nativeElement, ...ngDevMode ? [{ debugName: "contentEl" }] : (
    /* istanbul ignore next */
    []
  ));
  targetEl = computed(() => Y(this.$target(), this.el?.nativeElement), ...ngDevMode ? [{ debugName: "targetEl" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions() || this.$overlayOptions()?.motionOptions), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  modalVisible = signal(false, ...ngDevMode ? [{ debugName: "modalVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  _componentStyle = inject(OverlayStyle);
  bindDirectiveInstance = inject(Bind2, { self: true });
  documentKeyboardListener;
  parentDragSubscription = null;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  overlayService = inject(OverlayService);
  constructor() {
    super();
    effect(() => {
      if (this.visible() && !this.modalVisible()) this.modalVisible.set(true);
    });
  }
  container = signal(void 0, ...ngDevMode ? [{ debugName: "container" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl(),
      target: this.targetEl(),
      mode: this.overlayMode()
    });
    if (isFocus) kt(this.targetEl());
    if (this.modal()) R(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible()) return;
    else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl(),
        target: this.targetEl(),
        mode: this.overlayMode()
      });
      if (isFocus) kt(this.targetEl());
      if (this.modal()) W(this.document?.body, "p-overflow-hidden");
    }
  }
  onVisibleChange(visible) {
    this.visible.set(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl()
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayBeforeEnter(event) {
    this.handleEvents("onBeforeShow", {
      overlay: this.overlayEl(),
      target: this.targetEl(),
      mode: this.overlayMode()
    });
    this.container.set(this.overlayEl() || event.element);
    this.show(this.overlayEl(), true);
    if (this.hostAttrSelector() && this.overlayEl()) this.overlayEl().setAttribute(this.hostAttrSelector(), "");
    this.appendOverlay();
    this.alignOverlay();
    this.bindParentDragListener();
    this.setZIndex();
    this.handleEvents("onBeforeEnter", event);
  }
  onOverlayEnter(event) {
    this.handleEvents("onEnter", event);
  }
  onOverlayAfterEnter(event) {
    this.bindListeners();
    this.handleEvents("onAfterEnter", event);
  }
  onOverlayBeforeLeave(event) {
    this.handleEvents("onBeforeHide", {
      overlay: this.overlayEl(),
      target: this.targetEl(),
      mode: this.overlayMode()
    });
    this.handleEvents("onBeforeLeave", event);
  }
  onOverlayLeave(event) {
    this.handleEvents("onLeave", event);
  }
  onOverlayAfterLeave(event) {
    this.hide(this.overlayEl(), true);
    this.container.set(null);
    this.unbindListeners();
    this.appendOverlay();
    ZIndexUtils.clear(this.overlayEl());
    this.modalVisible.set(false);
    this.cd.markForCheck();
    this.handleEvents("onAfterLeave", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    const opts = this.options();
    if (opts && opts[name]) opts[name](params);
    if (this.config?.overlayOptions && (this.config?.overlayOptions)[name]) (this.config?.overlayOptions)[name](params);
  }
  setZIndex() {
    if (this.$autoZIndex()) ZIndexUtils.set(this.overlayMode(), this.overlayEl(), this.$baseZIndex() + this.config?.zIndex[this.overlayMode()]);
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") St(this.document.body, this.overlayEl());
      else St(this.$appendTo(), this.overlayEl());
    }
  }
  alignOverlay() {
    if (!this.modal()) {
      if (this.overlayEl() && this.targetEl()) {
        this.overlayEl().style.minWidth = L(this.targetEl()) + "px";
        if (this.$appendTo() === "self") G(this.overlayEl(), this.targetEl());
        else z(this.overlayEl(), this.targetEl());
      }
    }
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
    this.unbindParentDragListener();
  }
  bindParentDragListener() {
    if (!this.parentDragSubscription && this.$appendTo() !== "self" && this.targetEl) this.parentDragSubscription = this.overlayService.parentDragObservable.subscribe((container) => {
      if (container.contains(this.targetEl())) this.hide(this.overlayEl(), true);
    });
  }
  unbindParentDragListener() {
    if (this.parentDragSubscription) {
      this.parentDragSubscription.unsubscribe();
      this.parentDragSubscription = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl(), (event) => {
      if (this.$listener() ? this.$listener()(event, {
        type: "scroll",
        mode: this.overlayMode(),
        valid: true
      }) : true) this.hide(event, true);
    });
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
      const isOutsideClicked = !(this.targetEl() && (this.targetEl().isSameNode(event.target) || !this.isOverlayClicked && this.targetEl().contains(event.target))) && !this.isOverlayContentClicked;
      if (this.$listener() ? this.$listener()(event, {
        type: "outside",
        mode: this.overlayMode(),
        valid: event.which !== 3 && isOutsideClicked
      }) : isOutsideClicked) this.hide(event);
      this.isOverlayClicked = this.isOverlayContentClicked = false;
    });
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
      if (this.$listener() ? this.$listener()(event, {
        type: "resize",
        mode: this.overlayMode(),
        valid: !re()
      }) : !re()) this.hide(event, true);
    });
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) return;
    this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
      if (this.$overlayOptions().hideOnEscape === false || event.code !== "Escape") return;
      if (this.$listener() ? this.$listener()(event, {
        type: "keydown",
        mode: this.overlayMode(),
        valid: !re()
      }) : !re()) this.hide(event, true);
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  onDestroy() {
    this.hide(this.overlayEl(), true);
    if (this.overlayEl() && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.overlayEl());
      ZIndexUtils.clear(this.overlayEl());
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static \u0275fac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Overlay2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["content"];
    const _c1 = ["overlay"];
    const _c2 = ["*", "*"];
    const _c3 = () => ({
      mode: null
    });
    const _c4 = (a0) => ({
      $implicit: a0
    });
    const _c5 = (a0) => ({
      mode: a0
    });
    function Overlay_Conditional_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Overlay_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275projection(0);
        i0.\u0275\u0275template(1, Overlay_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 2);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", i0.\u0275\u0275pureFunction1(3, _c4, i0.\u0275\u0275pureFunction0(2, _c3)));
      }
    }
    function Overlay_Conditional_1_Conditional_0_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Overlay_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "div", 4, 0);
        i0.\u0275\u0275listener("click", function Overlay_Conditional_1_Conditional_0_Template_div_click_0_listener() {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayClick());
        });
        i0.\u0275\u0275elementStart(2, "p-motion", 5);
        i0.\u0275\u0275listener("onBeforeEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onBeforeEnter_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayBeforeEnter($event));
        })("onEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onEnter_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayEnter($event));
        })("onAfterEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onAfterEnter_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayAfterEnter($event));
        })("onBeforeLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onBeforeLeave_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayBeforeLeave($event));
        })("onLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onLeave_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayLeave($event));
        })("onAfterLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onAfterLeave_2_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayAfterLeave($event));
        });
        i0.\u0275\u0275elementStart(3, "div", 4, 1);
        i0.\u0275\u0275listener("click", function Overlay_Conditional_1_Conditional_0_Template_div_click_3_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(2);
          return i0.\u0275\u0275resetView(ctx_r0.onOverlayContentClick($event));
        });
        i0.\u0275\u0275projection(5, 1);
        i0.\u0275\u0275template(6, Overlay_Conditional_1_Conditional_0_ng_container_6_Template, 1, 0, "ng-container", 2);
        i0.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275styleMap(ctx_r0.sx("root"));
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("root"), ctx_r0.mergedStyleClass()));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("root"));
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275property("visible", ctx_r0.visible())("appear", true)("options", ctx_r0.computedMotionOptions());
        i0.\u0275\u0275advance();
        i0.\u0275\u0275styleMap(ctx_r0.sx("content"));
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("content"), ctx_r0.mergedContentStyleClass()));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("content"));
        i0.\u0275\u0275advance(3);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", i0.\u0275\u0275pureFunction1(17, _c4, i0.\u0275\u0275pureFunction1(15, _c5, ctx_r0.overlayMode())));
      }
    }
    function Overlay_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Overlay_Conditional_1_Conditional_0_Template, 7, 19, "div", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275conditional(ctx_r0.modalVisible() ? 0 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Overlay2,
      selectors: [["p-overlay"]],
      contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance();
        }
      },
      viewQuery: function Overlay_Query(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275viewQuerySignal(ctx.overlayViewChild, _c1, 5)(ctx.contentViewChild, _c0, 5);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(2);
        }
      },
      inputs: {
        hostName: [1, "hostName"],
        visible: [1, "visible"],
        mode: [1, "mode"],
        style: [1, "style"],
        styleClass: [1, "styleClass"],
        contentStyle: [1, "contentStyle"],
        contentStyleClass: [1, "contentStyleClass"],
        target: [1, "target"],
        autoZIndex: [1, "autoZIndex"],
        baseZIndex: [1, "baseZIndex"],
        listener: [1, "listener"],
        responsive: [1, "responsive"],
        options: [1, "options"],
        appendTo: [1, "appendTo"],
        inline: [1, "inline"],
        motionOptions: [1, "motionOptions"],
        hostAttrSelector: [1, "hostAttrSelector"]
      },
      outputs: {
        visible: "visibleChange",
        onBeforeShow: "onBeforeShow",
        onShow: "onShow",
        onBeforeHide: "onBeforeHide",
        onHide: "onHide",
        onAnimationStart: "onAnimationStart",
        onAnimationDone: "onAnimationDone",
        onBeforeEnter: "onBeforeEnter",
        onEnter: "onEnter",
        onAfterEnter: "onAfterEnter",
        onBeforeLeave: "onBeforeLeave",
        onLeave: "onLeave",
        onAfterLeave: "onAfterLeave"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        OverlayStyle,
        {
          provide: OVERLAY_INSTANCE,
          useExisting: Overlay2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Overlay2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c2,
      decls: 2,
      vars: 1,
      consts: [["overlay", ""], ["content", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "style", "pBind"], [3, "click", "pBind"], ["name", "p-anchored-overlay", 3, "onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave", "visible", "appear", "options"]],
      template: function Overlay_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef(_c2);
          i0.\u0275\u0275conditionalCreate(0, Overlay_Conditional_0_Template, 2, 5)(1, Overlay_Conditional_1_Template, 1, 1);
        }
        if (rf & 2) {
          i0.\u0275\u0275conditional(ctx.inline() ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, SharedModule, Bind2, MotionModule, i2.Motion],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        SharedModule,
        Bind2,
        MotionModule
      ],
      hostDirectives: [Bind2],
      template: `
        @if (inline()) {
            <ng-content />
            <ng-container *ngTemplateOutlet="contentTemplate(); context: { $implicit: { mode: null } }" />
        } @else {
            @if (modalVisible()) {
                <div #overlay [class]="cn(cx('root'), mergedStyleClass())" [style]="sx('root')" [pBind]="ptm('root')" (click)="onOverlayClick()">
                    <p-motion
                        [visible]="visible()"
                        name="p-anchored-overlay"
                        [appear]="true"
                        [options]="computedMotionOptions()"
                        (onBeforeEnter)="onOverlayBeforeEnter($event)"
                        (onEnter)="onOverlayEnter($event)"
                        (onAfterEnter)="onOverlayAfterEnter($event)"
                        (onBeforeLeave)="onOverlayBeforeLeave($event)"
                        (onLeave)="onOverlayLeave($event)"
                        (onAfterLeave)="onOverlayAfterLeave($event)"
                    >
                        <div #content [class]="cn(cx('content'), mergedContentStyleClass())" [style]="sx('content')" [pBind]="ptm('content')" (click)="onOverlayContentClick($event)">
                            <ng-content />
                            <ng-container *ngTemplateOutlet="contentTemplate(); context: { $implicit: { mode: overlayMode() } }" />
                        </div>
                    </p-motion>
                </div>
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        OverlayStyle,
        {
          provide: OVERLAY_INSTANCE,
          useExisting: Overlay
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Overlay
        }
      ]
    }]
  }], () => [], {
    hostName: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hostName",
        required: false
      }]
    }],
    visible: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }, {
      type: i0.Output,
      args: ["visibleChange"]
    }],
    mode: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "mode",
        required: false
      }]
    }],
    style: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "style",
        required: false
      }]
    }],
    styleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "styleClass",
        required: false
      }]
    }],
    contentStyle: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "contentStyle",
        required: false
      }]
    }],
    contentStyleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "contentStyleClass",
        required: false
      }]
    }],
    target: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "target",
        required: false
      }]
    }],
    autoZIndex: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "autoZIndex",
        required: false
      }]
    }],
    baseZIndex: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "baseZIndex",
        required: false
      }]
    }],
    listener: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "listener",
        required: false
      }]
    }],
    responsive: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "responsive",
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
    appendTo: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    inline: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "inline",
        required: false
      }]
    }],
    motionOptions: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onBeforeShow: [{
      type: i0.Output,
      args: ["onBeforeShow"]
    }],
    onShow: [{
      type: i0.Output,
      args: ["onShow"]
    }],
    onBeforeHide: [{
      type: i0.Output,
      args: ["onBeforeHide"]
    }],
    onHide: [{
      type: i0.Output,
      args: ["onHide"]
    }],
    onAnimationStart: [{
      type: i0.Output,
      args: ["onAnimationStart"]
    }],
    onAnimationDone: [{
      type: i0.Output,
      args: ["onAnimationDone"]
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
    overlayViewChild: [{
      type: i0.ViewChild,
      args: ["overlay", { isSignal: true }]
    }],
    contentViewChild: [{
      type: i0.ViewChild,
      args: ["content", { isSignal: true }]
    }],
    contentTemplate: [{
      type: i0.ContentChild,
      args: ["content", {
        descendants: false,
        isSignal: true
      }]
    }],
    hostAttrSelector: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hostAttrSelector",
        required: false
      }]
    }]
  });
})();
var OverlayModule = class OverlayModule2 {
  static \u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OverlayModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: OverlayModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Overlay, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [Overlay, SharedModule],
      exports: [Overlay, SharedModule]
    }]
  }], null, null);
})();
export {
  Overlay,
  OverlayModule,
  OverlayStyle
};
//# sourceMappingURL=primeng_overlay.KnX36d2E-7-dev.js.map

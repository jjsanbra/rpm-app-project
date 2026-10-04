if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  s
} from "@nf-internal/chunk-NR2L6APS";
import {
  Ht,
  I,
  L,
  St,
  V,
  Z,
  et,
  fe,
  h,
  j,
  k
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
import { isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { Directive, Injectable, InjectionToken, NgModule, ViewContainerRef, booleanAttribute, computed, effect, inject, input, numberAttribute, untracked } from "@angular/core";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import { BindModule } from "primeng/bind";
import { ConnectedOverlayScrollHandler } from "primeng/dom";
import { ZIndexUtils } from "primeng/utils";

// node_modules/@primeuix/styles/dist/tooltip/index.mjs
var style = "\n    .p-tooltip {\n        position: absolute;\n        display: none;\n        max-width: dt('tooltip.max.width');\n    }\n\n    .p-tooltip-right,\n    .p-tooltip-left {\n        padding: 0 dt('tooltip.gutter');\n    }\n\n    .p-tooltip-top,\n    .p-tooltip-bottom {\n        padding: dt('tooltip.gutter') 0;\n    }\n\n    .p-tooltip-text {\n        white-space: pre-line;\n        word-break: break-word;\n        background: dt('tooltip.background');\n        color: dt('tooltip.color');\n        padding: dt('tooltip.padding');\n        box-shadow: dt('tooltip.shadow');\n        border-radius: dt('tooltip.border.radius');\n        font-weight: dt('tooltip.font.weight');\n        font-size: dt('tooltip.font.size');\n    }\n\n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n\n    .p-tooltip-right .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;\n        border-right-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-left .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');\n        border-left-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-top .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-bottom .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
import { BaseStyle } from "primeng/base";
var classes = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = class TooltipStyle2 extends BaseStyle {
  name = "tooltip";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TooltipStyle_BaseFactory = void 0;
    return function TooltipStyle_Factory(__ngFactoryType__) {
      return (\u0275TooltipStyle_BaseFactory || (\u0275TooltipStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(TooltipStyle2)))(__ngFactoryType__ || TooltipStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: TooltipStyle2,
    factory: TooltipStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TooltipStyle, [{ type: Injectable }], null, null);
})();
var TooltipClasses;
(function(TooltipClasses2) {
  TooltipClasses2["root"] = "p-tooltip";
  TooltipClasses2["arrow"] = "p-tooltip-arrow";
  TooltipClasses2["text"] = "p-tooltip-text";
})(TooltipClasses || (TooltipClasses = {}));
var TOOLTIP_INSTANCE = new InjectionToken("TOOLTIP_INSTANCE");
var Tooltip = class Tooltip2 extends BaseComponent {
  componentName = "Tooltip";
  $pcTooltip = inject(TOOLTIP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  tooltipPosition = input(...ngDevMode ? [void 0, { debugName: "tooltipPosition" }] : (
    /* istanbul ignore next */
    []
  ));
  tooltipEvent = input("hover", ...ngDevMode ? [{ debugName: "tooltipEvent" }] : (
    /* istanbul ignore next */
    []
  ));
  positionStyle = input(...ngDevMode ? [void 0, { debugName: "positionStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  tooltipStyleClass = input(...ngDevMode ? [void 0, { debugName: "tooltipStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  tooltipZIndex = input(...ngDevMode ? [void 0, { debugName: "tooltipZIndex" }] : (
    /* istanbul ignore next */
    []
  ));
  escape = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "escape" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showDelay = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showDelay" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  hideDelay = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideDelay" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  life = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  positionTop = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "positionTop" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  positionLeft = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "positionLeft" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  autoHide = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autoHide" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  fitContent = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fitContent" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hideOnEscape = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideOnEscape" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showOnEllipsis = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showOnEllipsis" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  content = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "content" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pTooltip"
  }));
  tooltipDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "tooltipDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  tooltipOptions = input(...ngDevMode ? [void 0, { debugName: "tooltipOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  tooltipId = s("pn_id_") + "_tooltip";
  _tooltipOptions = computed(() => __spreadProps(__spreadValues({
    tooltipLabel: this.content(),
    tooltipPosition: this.tooltipPosition() ?? "right",
    tooltipEvent: this.tooltipEvent(),
    appendTo: this.appendTo() ?? "body",
    positionStyle: this.positionStyle(),
    tooltipStyleClass: this.tooltipStyleClass(),
    tooltipZIndex: this.tooltipZIndex() ?? "auto",
    escape: this.escape(),
    showDelay: this.showDelay(),
    hideDelay: this.hideDelay(),
    life: this.life(),
    positionTop: this.positionTop() ?? 0,
    positionLeft: this.positionLeft() ?? 0,
    autoHide: this.autoHide(),
    hideOnEscape: this.hideOnEscape(),
    showOnEllipsis: this.showOnEllipsis(),
    disabled: this.tooltipDisabled()
  }, this.tooltipOptions()), {
    id: this.tooltipId
  }), ...ngDevMode ? [{ debugName: "_tooltipOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  container = null;
  styleClass;
  tooltipText = null;
  rootPTClasses = "";
  showTimeout = null;
  hideTimeout = null;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  clickListener;
  focusListener;
  blurListener;
  touchStartListener;
  touchEndListener;
  containerMouseleaveListener;
  documentTouchListener;
  documentEscapeListener;
  scrollHandler = null;
  resizeListener = null;
  _componentStyle = inject(TooltipStyle);
  pTooltipPT = input(...ngDevMode ? [void 0, { debugName: "pTooltipPT" }] : (
    /* istanbul ignore next */
    []
  ));
  pTooltipUnstyled = input(...ngDevMode ? [void 0, { debugName: "pTooltipUnstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  viewContainer = inject(ViewContainerRef);
  constructor() {
    super();
    effect(() => {
      const pt = this.pTooltipPT();
      if (pt) this.directivePT.set(pt);
    });
    effect(() => {
      if (this.pTooltipUnstyled()) this.directiveUnstyled.set(this.pTooltipUnstyled());
    });
    effect(() => {
      const content = this.content();
      untracked(() => {
        if (this.active) {
          if (content) {
            if (this.container && this.container.offsetParent) {
              this.updateText();
              this.align();
            } else this.show();
          } else this.hide();
        }
      });
    });
    effect(() => {
      const disabled = this.tooltipDisabled();
      untracked(() => {
        if (disabled) this.deactivate();
      });
    });
    effect(() => {
      const options = this.tooltipOptions();
      untracked(() => {
        if (options) {
          this.deactivate();
          if (this.active) {
            if (this.getOption("tooltipLabel")) {
              if (this.container && this.container.offsetParent) {
                this.updateText();
                this.align();
              } else this.show();
            } else this.hide();
          }
        }
      });
    });
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const tooltipEvent = this.getOption("tooltipEvent");
      if (tooltipEvent === "hover" || tooltipEvent === "both") {
        this.mouseEnterListener = this.onMouseEnter.bind(this);
        this.mouseLeaveListener = this.onMouseLeave.bind(this);
        this.clickListener = this.onInputClick.bind(this);
        this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
        this.el.nativeElement.addEventListener("click", this.clickListener);
        this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        this.touchStartListener = this.onTouchStart.bind(this);
        this.touchEndListener = this.onTouchEnd.bind(this);
        this.el.nativeElement.addEventListener("touchstart", this.touchStartListener, { passive: true });
        this.el.nativeElement.addEventListener("touchend", this.touchEndListener, { passive: true });
      }
      if (tooltipEvent === "focus" || tooltipEvent === "both") {
        this.focusListener = this.onFocus.bind(this);
        this.blurListener = this.onBlur.bind(this);
        let target = this.el.nativeElement.querySelector(".p-component");
        if (!target) target = this.getTarget(this.el.nativeElement);
        target.addEventListener("focus", this.focusListener);
        target.addEventListener("blur", this.blurListener);
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) this.activate();
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      if (!(I(e.relatedTarget, "p-tooltip") || I(e.relatedTarget, "p-tooltip-text") || I(e.relatedTarget, "p-tooltip-arrow"))) this.deactivate();
    } else this.deactivate();
  }
  onTouchStart(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
      if (!this.isAutoHide()) this.bindDocumentTouchListener();
    }
  }
  onTouchEnd(e) {
    if (this.isAutoHide()) this.deactivate();
  }
  bindDocumentTouchListener() {
    if (!this.documentTouchListener) this.documentTouchListener = this.renderer.listen("document", "touchstart", (e) => {
      const target = e.target;
      if (this.container && !this.container.contains(target) && !this.el.nativeElement.contains(target)) {
        this.deactivate();
        this.unbindDocumentTouchListener();
      }
    });
  }
  unbindDocumentTouchListener() {
    if (this.documentTouchListener) {
      this.documentTouchListener();
      this.documentTouchListener = null;
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  hasEllipsis() {
    const el = this.el.nativeElement;
    return el.offsetWidth < el.scrollWidth || el.offsetHeight < el.scrollHeight;
  }
  activate() {
    if (this.active) return;
    if (this.getOption("showOnEllipsis") && !this.hasEllipsis()) return;
    this.active = true;
    this.clearHideTimeout();
    const showDelay = this.getOption("showDelay");
    if (showDelay) this.showTimeout = setTimeout(() => {
      this.show();
    }, showDelay);
    else this.show();
    const life = this.getOption("life");
    if (life) {
      const duration = showDelay ? life + showDelay : life;
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
    if (this.getOption("hideOnEscape")) this.documentEscapeListener = this.renderer.listen("document", "keydown.escape", () => {
      this.deactivate();
      this.documentEscapeListener?.();
    });
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    const hideDelay = this.getOption("hideDelay");
    if (hideDelay) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, hideDelay);
    } else this.hide();
    if (this.documentEscapeListener) this.documentEscapeListener();
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    const container = Z("div", {
      class: this.cx("root"),
      "p-bind": this.ptm("root"),
      "data-pc-section": "root"
    });
    const tooltipArrow = Z("div", {
      class: this.cx("arrow"),
      "p-bind": this.ptm("arrow"),
      "data-pc-section": "arrow"
    });
    const tooltipText = Z("div", {
      class: this.cx("text"),
      "p-bind": this.ptm("text"),
      "data-pc-section": "text"
    });
    container.setAttribute("role", "tooltip");
    container.appendChild(tooltipArrow);
    this.container = container;
    this.tooltipText = tooltipText;
    this.updateText();
    if (this.getOption("positionStyle")) container.style.position = this.getOption("positionStyle");
    container.appendChild(tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(container);
    else if (this.getOption("appendTo") === "target") St(container, this.el.nativeElement);
    else St(this.getOption("appendTo"), container);
    container.style.display = "none";
    if (this.fitContent()) container.style.width = "fit-content";
    if (this.isAutoHide()) container.style.pointerEvents = "none";
    else {
      container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener && this.container) this.containerMouseleaveListener = this.renderer.listen(this.container, "mouseleave", () => {
      this.deactivate();
    });
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) return;
    this.create();
    const container = this.container;
    if (this.el.nativeElement.closest("p-dialog")) setTimeout(() => {
      if (this.container) {
        this.container.style.display = "inline-block";
        this.align();
      }
    }, 100);
    else {
      container.style.display = "inline-block";
      this.align();
    }
    Ht(container, 250);
    if (this.getOption("tooltipZIndex") === "auto") ZIndexUtils.set("tooltip", container, this.config.zIndex.tooltip);
    else container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") ZIndexUtils.clear(this.container);
    this.remove();
  }
  updateText() {
    if (!this.tooltipText) return;
    const content = this.getOption("tooltipLabel");
    if (content && typeof content.createEmbeddedView === "function") {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else this.tooltipText.innerHTML = content;
  }
  align() {
    const position = this.getOption("tooltipPosition");
    const alignFns = {
      top: [
        this.alignTop,
        this.alignBottom,
        this.alignRight,
        this.alignLeft
      ],
      bottom: [
        this.alignBottom,
        this.alignTop,
        this.alignRight,
        this.alignLeft
      ],
      left: [
        this.alignLeft,
        this.alignRight,
        this.alignTop,
        this.alignBottom
      ],
      right: [
        this.alignRight,
        this.alignLeft,
        this.alignTop,
        this.alignBottom
      ]
    }[position] || [];
    for (let [index, alignmentFn] of alignFns.entries()) if (index === 0) alignmentFn.call(this);
    else if (this.isOutOfBounds()) alignmentFn.call(this);
    else break;
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      return {
        left: offset.left + V(),
        top: offset.top + j()
      };
    } else return {
      left: 0,
      top: 0
    };
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.startsWith("P-") ? et(this.el.nativeElement, ".p-component") : this.el.nativeElement;
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const offsetLeft = L(el);
    const offsetTop = (k(el) - k(this.container)) / 2;
    this.alignTooltip(offsetLeft, offsetTop);
    let arrowElement = this.getArrowElement();
    if (arrowElement) {
      arrowElement.style.top = "50%";
      arrowElement.style.right = "";
      arrowElement.style.bottom = "";
      arrowElement.style.left = "0";
    }
  }
  alignLeft() {
    this.preAlign("left");
    let arrowElement = this.getArrowElement();
    let offsetLeft = L(this.container);
    let offsetTop = (k(this.el.nativeElement) - k(this.container)) / 2;
    this.alignTooltip(-offsetLeft, offsetTop);
    if (arrowElement) {
      arrowElement.style.top = "50%";
      arrowElement.style.right = "0";
      arrowElement.style.bottom = "";
      arrowElement.style.left = "";
    }
  }
  alignTop() {
    this.preAlign("top");
    let arrowElement = this.getArrowElement();
    let hostOffset = this.getHostOffset();
    let elementWidth = L(this.container);
    let offsetLeft = (L(this.el.nativeElement) - L(this.container)) / 2;
    let offsetTop = k(this.container);
    this.alignTooltip(offsetLeft, -offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    if (arrowElement) {
      arrowElement.style.top = "";
      arrowElement.style.right = "";
      arrowElement.style.bottom = "0";
      arrowElement.style.left = elementRelativeCenter + "px";
    }
  }
  getArrowElement() {
    return et(this.container, '[data-pc-section="arrow"]');
  }
  alignBottom() {
    this.preAlign("bottom");
    let arrowElement = this.getArrowElement();
    let elementWidth = L(this.container);
    let hostOffset = this.getHostOffset();
    let offsetLeft = (L(this.el.nativeElement) - L(this.container)) / 2;
    let offsetTop = k(this.el.nativeElement);
    this.alignTooltip(offsetLeft, offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    if (arrowElement) {
      arrowElement.style.top = "0";
      arrowElement.style.right = "";
      arrowElement.style.bottom = "";
      arrowElement.style.left = elementRelativeCenter + "px";
    }
  }
  alignTooltip(offsetLeft, offsetTop) {
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + offsetLeft;
    let top = hostOffset.top + offsetTop;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  getOption(option) {
    return this._tooltipOptions()[option];
  }
  getTarget(el) {
    return I(el, "p-inputwrapper") ? et(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    this.container.className = this.cn(this.cx("root"), this.ptm("root")?.class, "p-tooltip-" + position, this.getOption("tooltipStyleClass") ?? "") ?? "";
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = L(this.container);
    let height = k(this.container);
    let viewport = h();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    const listener = this.onWindowResize.bind(this);
    this.resizeListener = listener;
    window.addEventListener("resize", listener);
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
      if (this.container) this.hide();
    });
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
  }
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
      this.el.nativeElement.removeEventListener("touchstart", this.touchStartListener);
      this.el.nativeElement.removeEventListener("touchend", this.touchEndListener);
      this.unbindDocumentTouchListener();
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else fe(this.getOption("appendTo"), this.container);
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.unbindDocumentTouchListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  onDestroy() {
    this.unbindEvents();
    if (this.container) ZIndexUtils.clear(this.container);
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.documentEscapeListener) this.documentEscapeListener();
  }
  static \u0275fac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Tooltip2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: Tooltip2,
    selectors: [["", "pTooltip", ""]],
    inputs: {
      tooltipPosition: [1, "tooltipPosition"],
      tooltipEvent: [1, "tooltipEvent"],
      positionStyle: [1, "positionStyle"],
      tooltipStyleClass: [1, "tooltipStyleClass"],
      tooltipZIndex: [1, "tooltipZIndex"],
      escape: [1, "escape"],
      showDelay: [1, "showDelay"],
      hideDelay: [1, "hideDelay"],
      life: [1, "life"],
      positionTop: [1, "positionTop"],
      positionLeft: [1, "positionLeft"],
      autoHide: [1, "autoHide"],
      fitContent: [1, "fitContent"],
      hideOnEscape: [1, "hideOnEscape"],
      showOnEllipsis: [1, "showOnEllipsis"],
      content: [1, "pTooltip", "content"],
      tooltipDisabled: [1, "tooltipDisabled"],
      tooltipOptions: [1, "tooltipOptions"],
      appendTo: [1, "appendTo"],
      pTooltipPT: [1, "pTooltipPT"],
      pTooltipUnstyled: [1, "pTooltipUnstyled"]
    },
    features: [i0.\u0275\u0275ProvidersFeature([
      TooltipStyle,
      {
        provide: TOOLTIP_INSTANCE,
        useExisting: Tooltip2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: Tooltip2
      }
    ]), i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      standalone: true,
      providers: [
        TooltipStyle,
        {
          provide: TOOLTIP_INSTANCE,
          useExisting: Tooltip
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Tooltip
        }
      ]
    }]
  }], () => [], {
    tooltipPosition: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipPosition",
        required: false
      }]
    }],
    tooltipEvent: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipEvent",
        required: false
      }]
    }],
    positionStyle: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "positionStyle",
        required: false
      }]
    }],
    tooltipStyleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipStyleClass",
        required: false
      }]
    }],
    tooltipZIndex: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipZIndex",
        required: false
      }]
    }],
    escape: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "escape",
        required: false
      }]
    }],
    showDelay: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "showDelay",
        required: false
      }]
    }],
    hideDelay: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hideDelay",
        required: false
      }]
    }],
    life: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "life",
        required: false
      }]
    }],
    positionTop: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "positionTop",
        required: false
      }]
    }],
    positionLeft: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "positionLeft",
        required: false
      }]
    }],
    autoHide: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "autoHide",
        required: false
      }]
    }],
    fitContent: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "fitContent",
        required: false
      }]
    }],
    hideOnEscape: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hideOnEscape",
        required: false
      }]
    }],
    showOnEllipsis: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "showOnEllipsis",
        required: false
      }]
    }],
    content: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pTooltip",
        required: false
      }]
    }],
    tooltipDisabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipDisabled",
        required: false
      }]
    }],
    tooltipOptions: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tooltipOptions",
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
    pTooltipPT: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pTooltipPT",
        required: false
      }]
    }],
    pTooltipUnstyled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pTooltipUnstyled",
        required: false
      }]
    }]
  });
})();
var TooltipModule = class TooltipModule2 {
  static \u0275fac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TooltipModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: TooltipModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [BindModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [Tooltip, BindModule],
      exports: [Tooltip, BindModule]
    }]
  }], null, null);
})();
export {
  Tooltip,
  TooltipClasses,
  TooltipModule,
  TooltipStyle
};
//# sourceMappingURL=primeng_tooltip.xHFB5fSCge-dev.js.map

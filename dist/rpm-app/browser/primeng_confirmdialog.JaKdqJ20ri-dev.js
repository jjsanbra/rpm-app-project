if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  s
} from "@nf-internal/chunk-NR2L6APS";
import {
  ce
} from "@nf-internal/chunk-Q6Y7ILSX";
import "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, EventEmitter, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, inject, input, model, numberAttribute, output, signal } from "@angular/core";
import { ConfirmEventType, ConfirmationService, Footer, SharedModule, TranslationKeys } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { ButtonDirective } from "primeng/button";
import { AutoFocus } from "primeng/autofocus";
import { Dialog } from "primeng/dialog";

// node_modules/@primeuix/styles/dist/confirmdialog/index.mjs
var style = "\n    .p-confirmdialog .p-dialog-content {\n        display: flex;\n        align-items: center;\n        gap: dt('confirmdialog.content.gap');\n    }\n\n    .p-confirmdialog-icon {\n        color: dt('confirmdialog.icon.color');\n        font-size: dt('confirmdialog.icon.size');\n        width: dt('confirmdialog.icon.size');\n        height: dt('confirmdialog.icon.size');\n    }\n\n    .p-confirmdialog-message {\n        color: dt('confirmdialog.message.color');\n        font-weight: dt('confirmdialog.message.font.weight');\n        font-size: dt('confirmdialog.message.font.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/confirmdialog";
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = class ConfirmDialogStyle2 extends BaseStyle {
  name = "confirmdialog";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmDialogStyle_BaseFactory = void 0;
    return function ConfirmDialogStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmDialogStyle_BaseFactory || (\u0275ConfirmDialogStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(ConfirmDialogStyle2)))(__ngFactoryType__ || ConfirmDialogStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: ConfirmDialogStyle2,
    factory: ConfirmDialogStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ConfirmDialogStyle, [{ type: Injectable }], null, null);
})();
var ConfirmDialogClasses;
(function(ConfirmDialogClasses2) {
  ConfirmDialogClasses2["root"] = "p-confirmdialog";
  ConfirmDialogClasses2["icon"] = "p-confirmdialog-icon";
  ConfirmDialogClasses2["message"] = "p-confirmdialog-message";
  ConfirmDialogClasses2["pcRejectButton"] = "p-confirmdialog-reject-button";
  ConfirmDialogClasses2["pcAcceptButton"] = "p-confirmdialog-accept-button";
})(ConfirmDialogClasses || (ConfirmDialogClasses = {}));
var CONFIRMDIALOG_INSTANCE = new InjectionToken("CONFIRMDIALOG_INSTANCE");
var ConfirmDialog = class ConfirmDialog2 extends BaseComponent {
  componentName = "ConfirmDialog";
  $pcConfirmDialog = inject(CONFIRMDIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  header = input(...ngDevMode ? [void 0, { debugName: "header" }] : (
    /* istanbul ignore next */
    []
  ));
  icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  message = input(...ngDevMode ? [void 0, { debugName: "message" }] : (
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
  maskStyleClass = input(...ngDevMode ? [void 0, { debugName: "maskStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  acceptIcon = input(...ngDevMode ? [void 0, { debugName: "acceptIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  acceptLabel = input(...ngDevMode ? [void 0, { debugName: "acceptLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  closeAriaLabel = input(...ngDevMode ? [void 0, { debugName: "closeAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  acceptAriaLabel = input(...ngDevMode ? [void 0, { debugName: "acceptAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  acceptVisible = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "acceptVisible" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  rejectIcon = input(...ngDevMode ? [void 0, { debugName: "rejectIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  rejectLabel = input(...ngDevMode ? [void 0, { debugName: "rejectLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  rejectAriaLabel = input(...ngDevMode ? [void 0, { debugName: "rejectAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  rejectVisible = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rejectVisible" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  acceptButtonStyleClass = input(...ngDevMode ? [void 0, { debugName: "acceptButtonStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  rejectButtonStyleClass = input(...ngDevMode ? [void 0, { debugName: "rejectButtonStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  closeOnEscape = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "closeOnEscape" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  dismissableMask = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "dismissableMask" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  blockScroll = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "blockScroll" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  rtl = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rtl" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  closable = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "closable" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  appendTo = input("body", ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  key = input(...ngDevMode ? [void 0, { debugName: "key" }] : (
    /* istanbul ignore next */
    []
  ));
  autoZIndex = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autoZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  baseZIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "baseZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  maskMotionOptions = input(...ngDevMode ? [void 0, { debugName: "maskMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  focusTrap = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "focusTrap" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  defaultFocus = input("accept", ...ngDevMode ? [{ debugName: "defaultFocus" }] : (
    /* istanbul ignore next */
    []
  ));
  breakpoints = input(...ngDevMode ? [void 0, { debugName: "breakpoints" }] : (
    /* istanbul ignore next */
    []
  ));
  modal = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modal" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  position = input("center", ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  draggable = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "draggable" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  onHide = output();
  footer = contentChild(Footer, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footer" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  _componentStyle = inject(ConfirmDialogStyle);
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  footerTemplate = contentChild("footer", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  rejectIconTemplate = contentChild("rejecticon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rejectIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  acceptIconTemplate = contentChild("accepticon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "acceptIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  messageTemplate = contentChild("message", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "messageTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  iconTemplate = contentChild("icon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "iconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headlessTemplate = contentChild("headless", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headlessTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  onAcceptCallback = this.onAccept.bind(this);
  onRejectCallback = this.onReject.bind(this);
  headlessContext = computed(() => ({
    $implicit: this.confirmation(),
    onAccept: this.onAcceptCallback,
    onReject: this.onRejectCallback
  }), ...ngDevMode ? [{ debugName: "headlessContext" }] : (
    /* istanbul ignore next */
    []
  ));
  messageContext = computed(() => ({ $implicit: this.confirmation() }), ...ngDevMode ? [{ debugName: "messageContext" }] : (
    /* istanbul ignore next */
    []
  ));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions()), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMaskMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("maskMotion")), this.maskMotionOptions()), ...ngDevMode ? [{ debugName: "computedMaskMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  get focusTarget() {
    return this.option("defaultFocus") ?? this.defaultFocus();
  }
  get autoFocusAccept() {
    return this.focusTarget === "accept";
  }
  get autoFocusReject() {
    return this.focusTarget === "reject";
  }
  confirmation = signal(null, ...ngDevMode ? [{ debugName: "confirmation" }] : (
    /* istanbul ignore next */
    []
  ));
  maskVisible = signal(false, ...ngDevMode ? [{ debugName: "maskVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  dialog;
  wrapper;
  contentContainer;
  subscription;
  preWidth;
  styleElement = null;
  id = s("pn_id_");
  ariaLabelledBy = this.getAriaLabelledBy();
  translationSubscription;
  confirmationService = inject(ConfirmationService);
  constructor() {
    super();
    effect(() => {
      if (this.visible() && !this.maskVisible()) this.maskVisible.set(true);
    });
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key()) {
        this.confirmation.set(confirmation);
        this.visible.set(true);
        if (confirmation.accept) {
          confirmation.acceptEvent = new EventEmitter();
          confirmation.acceptEvent.subscribe(confirmation.accept);
        }
        if (confirmation.reject) {
          confirmation.rejectEvent = new EventEmitter();
          confirmation.rejectEvent.subscribe(confirmation.reject);
        }
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  onInit() {
    if (this.breakpoints()) this.createStyle();
  }
  getAriaLabelledBy() {
    return this.option("header") ? s("pn_id_") + "_header" : null;
  }
  option(name, k) {
    const confirmation = this.confirmation();
    if (confirmation && Object.prototype.hasOwnProperty.call(confirmation, name)) return k ? confirmation[k] : confirmation[name];
    const source = this;
    if (Object.prototype.hasOwnProperty.call(source, name)) {
      const value = k ? source[k] : source[name];
      return typeof value === "function" ? value() : value;
    }
  }
  getButtonStyleClass(cx, opt) {
    return [this.cx(cx), this.option(opt)].filter(Boolean).join(" ");
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      ce(this.styleElement, "nonce", this.config?.csp()?.nonce);
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      this.styleElement.innerHTML = innerHTML;
      ce(this.styleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  close() {
    this.confirmation()?.rejectEvent?.emit(ConfirmEventType.CANCEL);
    this.hide(ConfirmEventType.CANCEL);
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible.set(false);
    this.unsubscribeConfirmationEvents();
  }
  onDialogHide() {
    this.confirmation.set(null);
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    this.subscription.unsubscribe();
    this.unsubscribeConfirmationEvents();
    if (this.translationSubscription) this.translationSubscription.unsubscribe();
    this.destroyStyle();
  }
  onVisibleChange(value) {
    if (!value) this.close();
    else this.visible.set(value);
  }
  onAccept() {
    this.confirmation()?.acceptEvent?.emit();
    this.hide(ConfirmEventType.ACCEPT);
  }
  onReject() {
    this.confirmation()?.rejectEvent?.emit(ConfirmEventType.REJECT);
    this.hide(ConfirmEventType.REJECT);
  }
  unsubscribeConfirmationEvents() {
    this.confirmation()?.acceptEvent?.unsubscribe();
    this.confirmation()?.rejectEvent?.unsubscribe();
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.getAcceptButtonProps()?.label || this.translate(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.getRejectButtonProps()?.label || this.translate(TranslationKeys.REJECT);
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  static \u0275fac = function ConfirmDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfirmDialog2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["header"];
    const _c1 = ["footer"];
    const _c2 = ["rejecticon"];
    const _c3 = ["accepticon"];
    const _c4 = ["message"];
    const _c5 = ["icon"];
    const _c6 = ["headless"];
    const _c7 = [[["p-footer"]]];
    const _c8 = ["p-footer"];
    function ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_Conditional_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate())("ngTemplateOutletContext", ctx_r0.headlessContext());
      }
    }
    function ConfirmDialog_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_2_ng_template_0_Template, 1, 2, "ng-template", null, 2, i0.\u0275\u0275templateRefExtractor);
      }
    }
    function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate());
      }
    }
    function ConfirmDialog_Conditional_3_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_3_Conditional_0_ng_template_0_Template, 1, 1, "ng-template", null, 4, i0.\u0275\u0275templateRefExtractor);
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate());
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "i", 10);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.option("icon")));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Conditional_0_Template, 1, 3, "i", 9);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275conditional(ctx_r0.option("icon") ? 0 : -1);
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.messageTemplate())("ngTemplateOutletContext", ctx_r0.messageContext());
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "span", 11);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275classMap(ctx_r0.cx("message"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("message"))("innerHTML", ctx_r0.option("message"), i0.\u0275\u0275sanitizeHtml);
      }
    }
    function ConfirmDialog_Conditional_3_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_ng_template_1_Conditional_0_Template, 1, 1, "ng-container")(1, ConfirmDialog_Conditional_3_ng_template_1_Conditional_1_Template, 1, 1);
        i0.\u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_3_ng_template_1_Conditional_2_Template, 1, 2, "ng-container")(3, ConfirmDialog_Conditional_3_ng_template_1_Conditional_3_Template, 1, 4, "span", 8);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275conditional(ctx_r0.iconTemplate() ? 0 : !ctx_r0.iconTemplate() && !ctx_r0.messageTemplate() ? 1 : -1);
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275conditional(ctx_r0.messageTemplate() ? 2 : 3);
      }
    }
    function ConfirmDialog_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ConfirmDialog_Conditional_3_Conditional_0_Template, 2, 0);
        i0.\u0275\u0275template(1, ConfirmDialog_Conditional_3_ng_template_1_Template, 4, 2, "ng-template", null, 3, i0.\u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275conditional(ctx_r0.headerTemplate() ? 0 : -1);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275projection(0);
        i0.\u0275\u0275template(1, ConfirmDialog_ng_template_4_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate());
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "i", 10);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275classMap(ctx_r0.option("rejectIcon"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("pcRejectButton")["icon"]);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.rejectIconTemplate());
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 13);
        i0.\u0275\u0275listener("click", function ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Template_button_click_0_listener() {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext(3);
          return i0.\u0275\u0275resetView(ctx_r0.onReject());
        });
        i0.\u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_1_Template, 1, 3, "i", 9);
        i0.\u0275\u0275conditionalCreate(2, ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Conditional_2_Template, 1, 1, "ng-container");
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275classMap(ctx_r0.getButtonStyleClass("pcRejectButton", "rejectButtonStyleClass"));
        i0.\u0275\u0275property("pButton", ctx_r0.getRejectButtonProps())("pAutoFocus", ctx_r0.autoFocusReject)("pButtonPT", ctx_r0.ptm("pcRejectButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i0.\u0275\u0275attribute("aria-label", ctx_r0.option("rejectButtonProps", "ariaLabel"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.option("rejectIcon") && !ctx_r0.rejectIconTemplate() ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.rejectIconTemplate() ? 2 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", ctx_r0.rejectButtonLabel, " ");
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "i", 10);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275classMap(ctx_r0.option("acceptIcon"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("pcAcceptButton")["icon"]);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.acceptIconTemplate());
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 13);
        i0.\u0275\u0275listener("click", function ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Template_button_click_0_listener() {
          i0.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i0.\u0275\u0275nextContext(3);
          return i0.\u0275\u0275resetView(ctx_r0.onAccept());
        });
        i0.\u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_1_Template, 1, 3, "i", 9);
        i0.\u0275\u0275conditionalCreate(2, ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Conditional_2_Template, 1, 1, "ng-container");
        i0.\u0275\u0275text(3);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275classMap(ctx_r0.getButtonStyleClass("pcAcceptButton", "acceptButtonStyleClass"));
        i0.\u0275\u0275property("pButton", ctx_r0.getAcceptButtonProps())("pAutoFocus", ctx_r0.autoFocusAccept)("pButtonPT", ctx_r0.ptm("pcAcceptButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i0.\u0275\u0275attribute("aria-label", ctx_r0.option("acceptButtonProps", "ariaLabel"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.option("acceptIcon") && !ctx_r0.acceptIconTemplate() ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.acceptIconTemplate() ? 2 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1(" ", ctx_r0.acceptButtonLabel, " ");
      }
    }
    function ConfirmDialog_ng_template_4_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_1_Conditional_0_Template, 4, 10, "button", 12);
        i0.\u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Conditional_1_Template, 4, 10, "button", 12);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275conditional(ctx_r0.option("rejectVisible") ? 0 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.option("acceptVisible") ? 1 : -1);
      }
    }
    function ConfirmDialog_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ConfirmDialog_ng_template_4_Conditional_0_Template, 2, 1);
        i0.\u0275\u0275conditionalCreate(1, ConfirmDialog_ng_template_4_Conditional_1_Template, 2, 2);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275conditional(ctx_r0.footerTemplate() ? 0 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(!ctx_r0.footerTemplate() ? 1 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: ConfirmDialog2,
      selectors: [["p-confirmdialog"], ["p-confirm-dialog"]],
      contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.footer, Footer, 4)(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.footerTemplate, _c1, 4)(dirIndex, ctx.rejectIconTemplate, _c2, 4)(dirIndex, ctx.acceptIconTemplate, _c3, 4)(dirIndex, ctx.messageTemplate, _c4, 4)(dirIndex, ctx.iconTemplate, _c5, 4)(dirIndex, ctx.headlessTemplate, _c6, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(8);
        }
      },
      inputs: {
        header: [1, "header"],
        icon: [1, "icon"],
        message: [1, "message"],
        style: [1, "style"],
        styleClass: [1, "styleClass"],
        maskStyleClass: [1, "maskStyleClass"],
        acceptIcon: [1, "acceptIcon"],
        acceptLabel: [1, "acceptLabel"],
        closeAriaLabel: [1, "closeAriaLabel"],
        acceptAriaLabel: [1, "acceptAriaLabel"],
        acceptVisible: [1, "acceptVisible"],
        rejectIcon: [1, "rejectIcon"],
        rejectLabel: [1, "rejectLabel"],
        rejectAriaLabel: [1, "rejectAriaLabel"],
        rejectVisible: [1, "rejectVisible"],
        acceptButtonStyleClass: [1, "acceptButtonStyleClass"],
        rejectButtonStyleClass: [1, "rejectButtonStyleClass"],
        closeOnEscape: [1, "closeOnEscape"],
        dismissableMask: [1, "dismissableMask"],
        blockScroll: [1, "blockScroll"],
        rtl: [1, "rtl"],
        closable: [1, "closable"],
        appendTo: [1, "appendTo"],
        key: [1, "key"],
        autoZIndex: [1, "autoZIndex"],
        baseZIndex: [1, "baseZIndex"],
        motionOptions: [1, "motionOptions"],
        maskMotionOptions: [1, "maskMotionOptions"],
        focusTrap: [1, "focusTrap"],
        defaultFocus: [1, "defaultFocus"],
        breakpoints: [1, "breakpoints"],
        modal: [1, "modal"],
        visible: [1, "visible"],
        position: [1, "position"],
        draggable: [1, "draggable"]
      },
      outputs: {
        visible: "visibleChange",
        onHide: "onHide"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        ConfirmDialogStyle,
        {
          provide: CONFIRMDIALOG_INSTANCE,
          useExisting: ConfirmDialog2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: ConfirmDialog2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c8,
      decls: 6,
      vars: 22,
      consts: [["dialog", ""], ["footer", ""], ["headless", ""], ["content", ""], ["header", ""], ["role", "alertdialog", 3, "visibleChange", "onHide", "pt", "visible", "closable", "styleClass", "modal", "header", "closeOnEscape", "blockScroll", "appendTo", "position", "dismissableMask", "draggable", "baseZIndex", "autoZIndex", "focusOnShow", "motionOptions", "maskMotionOptions", "maskStyleClass", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "class", "pBind", "innerHTML"], [3, "class", "pBind"], [3, "pBind"], [3, "pBind", "innerHTML"], ["type", "button", 3, "pButton", "class", "pAutoFocus", "pButtonPT", "pButtonUnstyled"], ["type", "button", 3, "click", "pButton", "pAutoFocus", "pButtonPT", "pButtonUnstyled"]],
      template: function ConfirmDialog_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef(_c7);
          i0.\u0275\u0275elementStart(0, "p-dialog", 5, 0);
          i0.\u0275\u0275listener("visibleChange", function ConfirmDialog_Template_p_dialog_visibleChange_0_listener($event) {
            return ctx.onVisibleChange($event);
          })("onHide", function ConfirmDialog_Template_p_dialog_onHide_0_listener() {
            return ctx.onDialogHide();
          });
          i0.\u0275\u0275conditionalCreate(2, ConfirmDialog_Conditional_2_Template, 2, 0)(3, ConfirmDialog_Conditional_3_Template, 3, 1);
          i0.\u0275\u0275template(4, ConfirmDialog_ng_template_4_Template, 2, 2, "ng-template", null, 1, i0.\u0275\u0275templateRefExtractor);
          i0.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i0.\u0275\u0275styleMap(ctx.style());
          i0.\u0275\u0275property("pt", ctx.pt())("visible", ctx.visible())("closable", ctx.option("closable"))("styleClass", ctx.cn(ctx.cx("root"), ctx.styleClass()))("modal", ctx.option("modal"))("header", ctx.option("header"))("closeOnEscape", ctx.option("closeOnEscape"))("blockScroll", ctx.option("blockScroll"))("appendTo", ctx.$appendTo())("position", ctx.position())("dismissableMask", ctx.dismissableMask())("draggable", ctx.draggable())("baseZIndex", ctx.baseZIndex())("autoZIndex", ctx.autoZIndex())("focusOnShow", false)("motionOptions", ctx.computedMotionOptions())("maskMotionOptions", ctx.computedMaskMotionOptions())("maskStyleClass", ctx.cn(ctx.cx("mask"), ctx.maskStyleClass()))("unstyled", ctx.unstyled());
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275conditional(ctx.headlessTemplate() ? 2 : 3);
        }
      },
      dependencies: [NgTemplateOutlet, ButtonDirective, AutoFocus, Dialog, SharedModule, Bind2],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmdialog, p-confirm-dialog",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        ButtonDirective,
        AutoFocus,
        Dialog,
        SharedModule,
        Bind2
      ],
      template: `
        <p-dialog
            [pt]="pt()"
            #dialog
            [visible]="visible()"
            (visibleChange)="onVisibleChange($event)"
            role="alertdialog"
            [closable]="option('closable')"
            [styleClass]="cn(cx('root'), styleClass())"
            [modal]="option('modal')"
            [header]="option('header')"
            [closeOnEscape]="option('closeOnEscape')"
            [blockScroll]="option('blockScroll')"
            [appendTo]="$appendTo()"
            [position]="position()"
            [style]="style()"
            [dismissableMask]="dismissableMask()"
            [draggable]="draggable()"
            [baseZIndex]="baseZIndex()"
            [autoZIndex]="autoZIndex()"
            [focusOnShow]="false"
            [motionOptions]="computedMotionOptions()"
            [maskMotionOptions]="computedMaskMotionOptions()"
            [maskStyleClass]="cn(cx('mask'), maskStyleClass())"
            [unstyled]="unstyled()"
            (onHide)="onDialogHide()"
        >
            @if (headlessTemplate()) {
                <ng-template #headless>
                    <ng-container *ngTemplateOutlet="headlessTemplate(); context: headlessContext()"></ng-container>
                </ng-template>
            } @else {
                @if (headerTemplate()) {
                    <ng-template #header>
                        <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
                    </ng-template>
                }

                <ng-template #content>
                    @if (iconTemplate()) {
                        <ng-container *ngTemplateOutlet="iconTemplate()"></ng-container>
                    } @else if (!iconTemplate() && !messageTemplate()) {
                        @if (option('icon')) {
                            <i [class]="cn(cx('icon'), option('icon'))" [pBind]="ptm('icon')"></i>
                        }
                    }
                    @if (messageTemplate()) {
                        <ng-container *ngTemplateOutlet="messageTemplate(); context: messageContext()"></ng-container>
                    } @else {
                        <span [class]="cx('message')" [pBind]="ptm('message')" [innerHTML]="option('message')"> </span>
                    }
                </ng-template>
            }
            <ng-template #footer>
                @if (footerTemplate()) {
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                }
                @if (!footerTemplate()) {
                    @if (option('rejectVisible')) {
                        <button
                            type="button"
                            [pButton]="getRejectButtonProps()"
                            [class]="getButtonStyleClass('pcRejectButton', 'rejectButtonStyleClass')"
                            [attr.aria-label]="option('rejectButtonProps', 'ariaLabel')"
                            [pAutoFocus]="autoFocusReject"
                            [pButtonPT]="ptm('pcRejectButton')"
                            [pButtonUnstyled]="unstyled()"
                            (click)="onReject()"
                        >
                            @if (option('rejectIcon') && !rejectIconTemplate()) {
                                <i [class]="option('rejectIcon')" [pBind]="ptm('pcRejectButton')['icon']"></i>
                            }
                            @if (rejectIconTemplate()) {
                                <ng-container *ngTemplateOutlet="rejectIconTemplate()"></ng-container>
                            }
                            {{ rejectButtonLabel }}
                        </button>
                    }
                    @if (option('acceptVisible')) {
                        <button
                            type="button"
                            [pButton]="getAcceptButtonProps()"
                            [class]="getButtonStyleClass('pcAcceptButton', 'acceptButtonStyleClass')"
                            [attr.aria-label]="option('acceptButtonProps', 'ariaLabel')"
                            [pAutoFocus]="autoFocusAccept"
                            [pButtonPT]="ptm('pcAcceptButton')"
                            [pButtonUnstyled]="unstyled()"
                            (click)="onAccept()"
                        >
                            @if (option('acceptIcon') && !acceptIconTemplate()) {
                                <i [class]="option('acceptIcon')" [pBind]="ptm('pcAcceptButton')['icon']"></i>
                            }
                            @if (acceptIconTemplate()) {
                                <ng-container *ngTemplateOutlet="acceptIconTemplate()"></ng-container>
                            }
                            {{ acceptButtonLabel }}
                        </button>
                    }
                }
            </ng-template>
        </p-dialog>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        ConfirmDialogStyle,
        {
          provide: CONFIRMDIALOG_INSTANCE,
          useExisting: ConfirmDialog
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: ConfirmDialog
        }
      ],
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    header: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "header",
        required: false
      }]
    }],
    icon: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    message: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "message",
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
    maskStyleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "maskStyleClass",
        required: false
      }]
    }],
    acceptIcon: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "acceptIcon",
        required: false
      }]
    }],
    acceptLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "acceptLabel",
        required: false
      }]
    }],
    closeAriaLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "closeAriaLabel",
        required: false
      }]
    }],
    acceptAriaLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "acceptAriaLabel",
        required: false
      }]
    }],
    acceptVisible: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "acceptVisible",
        required: false
      }]
    }],
    rejectIcon: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rejectIcon",
        required: false
      }]
    }],
    rejectLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rejectLabel",
        required: false
      }]
    }],
    rejectAriaLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rejectAriaLabel",
        required: false
      }]
    }],
    rejectVisible: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rejectVisible",
        required: false
      }]
    }],
    acceptButtonStyleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "acceptButtonStyleClass",
        required: false
      }]
    }],
    rejectButtonStyleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rejectButtonStyleClass",
        required: false
      }]
    }],
    closeOnEscape: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "closeOnEscape",
        required: false
      }]
    }],
    dismissableMask: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "dismissableMask",
        required: false
      }]
    }],
    blockScroll: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "blockScroll",
        required: false
      }]
    }],
    rtl: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rtl",
        required: false
      }]
    }],
    closable: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "closable",
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
    key: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "key",
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
    motionOptions: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    maskMotionOptions: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "maskMotionOptions",
        required: false
      }]
    }],
    focusTrap: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "focusTrap",
        required: false
      }]
    }],
    defaultFocus: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "defaultFocus",
        required: false
      }]
    }],
    breakpoints: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "breakpoints",
        required: false
      }]
    }],
    modal: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "modal",
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
    position: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    draggable: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "draggable",
        required: false
      }]
    }],
    onHide: [{
      type: i0.Output,
      args: ["onHide"]
    }],
    footer: [{
      type: i0.ContentChild,
      args: [i0.forwardRef(() => Footer), {
        descendants: false,
        isSignal: true
      }]
    }],
    headerTemplate: [{
      type: i0.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i0.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }],
    rejectIconTemplate: [{
      type: i0.ContentChild,
      args: ["rejecticon", {
        descendants: false,
        isSignal: true
      }]
    }],
    acceptIconTemplate: [{
      type: i0.ContentChild,
      args: ["accepticon", {
        descendants: false,
        isSignal: true
      }]
    }],
    messageTemplate: [{
      type: i0.ContentChild,
      args: ["message", {
        descendants: false,
        isSignal: true
      }]
    }],
    iconTemplate: [{
      type: i0.ContentChild,
      args: ["icon", {
        descendants: false,
        isSignal: true
      }]
    }],
    headlessTemplate: [{
      type: i0.ContentChild,
      args: ["headless", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var ConfirmDialogModule = class ConfirmDialogModule2 {
  static \u0275fac = function ConfirmDialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfirmDialogModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: ConfirmDialogModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [ConfirmDialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmDialog, SharedModule],
      exports: [ConfirmDialog, SharedModule]
    }]
  }], null, null);
})();
export {
  ConfirmDialog,
  ConfirmDialogClasses,
  ConfirmDialogModule,
  ConfirmDialogStyle
};
//# sourceMappingURL=primeng_confirmdialog.JaKdqJ20ri-dev.js.map

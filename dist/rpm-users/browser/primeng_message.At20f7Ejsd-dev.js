if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Times
} from "@nf-internal/chunk-TS3TQKAB";
import "@nf-internal/chunk-4VP7SACV";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-message.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, inject, input, numberAttribute, output, signal } from "@angular/core";
import { SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { MotionModule } from "primeng/motion";
import { Ripple } from "primeng/ripple";

// node_modules/@primeuix/styles/dist/message/index.mjs
var style = "\n    .p-message {\n        display: grid;\n        grid-template-rows: 1fr;\n        border-radius: dt('message.border.radius');\n        outline-width: dt('message.border.width');\n        outline-style: solid;\n    }\n\n    .p-message-content-wrapper {\n        min-height: 0;\n    }\n\n    .p-message-content {\n        display: flex;\n        align-items: center;\n        padding: dt('message.content.padding');\n        gap: dt('message.content.gap');\n    }\n\n    .p-message-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        margin-inline-start: auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('message.close.button.width');\n        height: dt('message.close.button.height');\n        border-radius: dt('message.close.button.border.radius');\n        background: transparent;\n        transition:\n            background dt('message.transition.duration'),\n            color dt('message.transition.duration'),\n            outline-color dt('message.transition.duration'),\n            box-shadow dt('message.transition.duration'),\n            opacity 0.3s;\n        outline-color: transparent;\n        color: inherit;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-message-close-button svg,\n    .p-message-close-button i {\n        font-size: dt('message.close.icon.size');\n        width: dt('message.close.icon.size');\n        height: dt('message.close.icon.size');\n    }\n\n    .p-message-close-button:focus-visible {\n        outline-width: dt('message.close.button.focus.ring.width');\n        outline-style: dt('message.close.button.focus.ring.style');\n        outline-offset: dt('message.close.button.focus.ring.offset');\n    }\n\n    .p-message-info {\n        background: dt('message.info.background');\n        outline-color: dt('message.info.border.color');\n        color: dt('message.info.color');\n        box-shadow: dt('message.info.shadow');\n    }\n\n    .p-message-info .p-message-close-button:focus-visible {\n        outline-color: dt('message.info.close.button.focus.ring.color');\n        box-shadow: dt('message.info.close.button.focus.ring.shadow');\n    }\n\n    .p-message-info .p-message-close-button:hover {\n        background: dt('message.info.close.button.hover.background');\n    }\n\n    .p-message-info.p-message-outlined {\n        color: dt('message.info.outlined.color');\n        outline-color: dt('message.info.outlined.border.color');\n    }\n\n    .p-message-info.p-message-simple {\n        color: dt('message.info.simple.color');\n    }\n\n    .p-message-success {\n        background: dt('message.success.background');\n        outline-color: dt('message.success.border.color');\n        color: dt('message.success.color');\n        box-shadow: dt('message.success.shadow');\n    }\n\n    .p-message-success .p-message-close-button:focus-visible {\n        outline-color: dt('message.success.close.button.focus.ring.color');\n        box-shadow: dt('message.success.close.button.focus.ring.shadow');\n    }\n\n    .p-message-success .p-message-close-button:hover {\n        background: dt('message.success.close.button.hover.background');\n    }\n\n    .p-message-success.p-message-outlined {\n        color: dt('message.success.outlined.color');\n        outline-color: dt('message.success.outlined.border.color');\n    }\n\n    .p-message-success.p-message-simple {\n        color: dt('message.success.simple.color');\n    }\n\n    .p-message-warn {\n        background: dt('message.warn.background');\n        outline-color: dt('message.warn.border.color');\n        color: dt('message.warn.color');\n        box-shadow: dt('message.warn.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:focus-visible {\n        outline-color: dt('message.warn.close.button.focus.ring.color');\n        box-shadow: dt('message.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:hover {\n        background: dt('message.warn.close.button.hover.background');\n    }\n\n    .p-message-warn.p-message-outlined {\n        color: dt('message.warn.outlined.color');\n        outline-color: dt('message.warn.outlined.border.color');\n    }\n\n    .p-message-warn.p-message-simple {\n        color: dt('message.warn.simple.color');\n    }\n\n    .p-message-error {\n        background: dt('message.error.background');\n        outline-color: dt('message.error.border.color');\n        color: dt('message.error.color');\n        box-shadow: dt('message.error.shadow');\n    }\n\n    .p-message-error .p-message-close-button:focus-visible {\n        outline-color: dt('message.error.close.button.focus.ring.color');\n        box-shadow: dt('message.error.close.button.focus.ring.shadow');\n    }\n\n    .p-message-error .p-message-close-button:hover {\n        background: dt('message.error.close.button.hover.background');\n    }\n\n    .p-message-error.p-message-outlined {\n        color: dt('message.error.outlined.color');\n        outline-color: dt('message.error.outlined.border.color');\n    }\n\n    .p-message-error.p-message-simple {\n        color: dt('message.error.simple.color');\n    }\n\n    .p-message-secondary {\n        background: dt('message.secondary.background');\n        outline-color: dt('message.secondary.border.color');\n        color: dt('message.secondary.color');\n        box-shadow: dt('message.secondary.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:focus-visible {\n        outline-color: dt('message.secondary.close.button.focus.ring.color');\n        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:hover {\n        background: dt('message.secondary.close.button.hover.background');\n    }\n\n    .p-message-secondary.p-message-outlined {\n        color: dt('message.secondary.outlined.color');\n        outline-color: dt('message.secondary.outlined.border.color');\n    }\n\n    .p-message-secondary.p-message-simple {\n        color: dt('message.secondary.simple.color');\n    }\n\n    .p-message-contrast {\n        background: dt('message.contrast.background');\n        outline-color: dt('message.contrast.border.color');\n        color: dt('message.contrast.color');\n        box-shadow: dt('message.contrast.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:focus-visible {\n        outline-color: dt('message.contrast.close.button.focus.ring.color');\n        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:hover {\n        background: dt('message.contrast.close.button.hover.background');\n    }\n\n    .p-message-contrast.p-message-outlined {\n        color: dt('message.contrast.outlined.color');\n        outline-color: dt('message.contrast.outlined.border.color');\n    }\n\n    .p-message-contrast.p-message-simple {\n        color: dt('message.contrast.simple.color');\n    }\n\n    .p-message-text {\n        font-size: dt('message.text.font.size');\n        font-weight: dt('message.text.font.weight');\n    }\n\n    .p-message-icon {\n        display: inline-flex;\n    }\n\n    .p-message-icon,\n    .p-message-icon svg,\n    .p-message-icon i {\n        flex-shrink: 0;\n        font-size: dt('message.icon.size');\n        width: dt('message.icon.size');\n        height: dt('message.icon.size');\n    }\n\n    .p-message-sm .p-message-content {\n        padding: dt('message.content.sm.padding');\n    }\n\n    .p-message-sm .p-message-text {\n        font-size: dt('message.text.sm.font.size');\n    }\n\n    .p-message-sm .p-message-icon,\n    .p-message-sm .p-message-icon svg,\n    .p-message-sm .p-message-icon i {\n        font-size: dt('message.icon.sm.size');\n        width: dt('message.icon.sm.size');\n        height: dt('message.icon.sm.size');\n    }\n\n    .p-message-sm .p-message-close-button svg,\n    .p-message-sm .p-message-close-button i {\n        width: dt('message.close.icon.sm.size');\n        height: dt('message.close.icon.sm.size');\n    }\n\n    .p-message-lg .p-message-content {\n        padding: dt('message.content.lg.padding');\n    }\n\n    .p-message-lg .p-message-text {\n        font-size: dt('message.text.lg.font.size');\n    }\n\n    .p-message-lg .p-message-icon,\n    .p-message-lg .p-message-icon svg,\n    .p-message-lg .p-message-icon i {\n        font-size: dt('message.icon.lg.size');\n        width: dt('message.icon.lg.size');\n        height: dt('message.icon.lg.size');\n    }\n\n    .p-message-lg .p-message-close-button svg,\n    .p-message-lg .p-message-close-button i {\n        font-size: dt('message.close.icon.lg.size');\n        width: dt('message.close.icon.lg.size');\n        height: dt('message.close.icon.lg.size');\n    }\n\n    .p-message-outlined {\n        background: transparent;\n        outline-width: dt('message.outlined.border.width');\n    }\n\n    .p-message-simple {\n        background: transparent;\n        outline-color: transparent;\n        box-shadow: none;\n    }\n\n    .p-message-simple .p-message-content {\n        padding: dt('message.simple.content.padding');\n    }\n\n    .p-message-outlined .p-message-close-button:hover,\n    .p-message-simple .p-message-close-button:hover {\n        background: transparent;\n    }\n\n    .p-message-enter-active {\n        animation: p-animate-message-enter 0.3s ease-out forwards;\n        overflow: hidden;\n    }\n\n    .p-message-leave-active {\n        animation: p-animate-message-leave 0.15s ease-in forwards;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-message-enter {\n        from {\n            opacity: 0;\n            grid-template-rows: 0fr;\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-message-leave {\n        from {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n        to {\n            opacity: 0;\n            margin: 0;\n            grid-template-rows: 0fr;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-message.mjs
import { BaseStyle } from "primeng/base";
var classes = {
  root: ({ instance }) => {
    const severity = instance.severity();
    const variant = instance.variant();
    const size = instance.size();
    return [
      "p-message p-component p-message-" + severity,
      variant && "p-message-" + variant,
      {
        "p-message-sm": size === "small",
        "p-message-lg": size === "large"
      }
    ];
  },
  contentWrapper: "p-message-content-wrapper",
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = class MessageStyle2 extends BaseStyle {
  name = "message";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MessageStyle_BaseFactory = void 0;
    return function MessageStyle_Factory(__ngFactoryType__) {
      return (\u0275MessageStyle_BaseFactory || (\u0275MessageStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(MessageStyle2)))(__ngFactoryType__ || MessageStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: MessageStyle2,
    factory: MessageStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MessageStyle, [{ type: Injectable }], null, null);
})();
var MessageClasses;
(function(MessageClasses2) {
  MessageClasses2["root"] = "p-message";
  MessageClasses2["content"] = "p-message-content";
  MessageClasses2["icon"] = "p-message-icon";
  MessageClasses2["text"] = "p-message-text";
  MessageClasses2["closeButton"] = "p-message-close-button";
  MessageClasses2["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));
var MESSAGE_INSTANCE = new InjectionToken("MESSAGE_INSTANCE");
var Message = class Message2 extends BaseComponent {
  componentName = "Message";
  _componentStyle = inject(MessageStyle);
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcMessage = inject(MESSAGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  severity = input("info", ...ngDevMode ? [{ debugName: "severity" }] : (
    /* istanbul ignore next */
    []
  ));
  closable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "closable" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  closeIcon = input(...ngDevMode ? [void 0, { debugName: "closeIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  life = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  size = input(...ngDevMode ? [void 0, { debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions()), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  onClose = output();
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  containerTemplate = contentChild("container", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "containerTemplate" } : (
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
  closeIconTemplate = contentChild("closeicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "closeIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  containerContext = { closeCallback: (event) => this.closeCallback(event) };
  dataP = computed(() => this.cn({
    outlined: this.variant() === "outlined",
    simple: this.variant() === "simple",
    [this.severity()]: this.severity(),
    [this.size()]: this.size()
  }), ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  closeCallback = (event) => {
    this.close(event);
  };
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    const lifeValue = this.life();
    if (lifeValue) setTimeout(() => {
      this.close(new Event("close"));
    }, lifeValue);
  }
  close(event) {
    this.visible.set(false);
    this.onClose.emit({ originalEvent: event });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Message_BaseFactory = void 0;
    return function Message_Factory(__ngFactoryType__) {
      return (\u0275Message_BaseFactory || (\u0275Message_BaseFactory = i0.\u0275\u0275getInheritedFactory(Message2)))(__ngFactoryType__ || Message2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["container"];
    const _c1 = ["icon"];
    const _c2 = ["closeicon"];
    const _c3 = ["*"];
    function Message_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Message_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Message_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate());
      }
    }
    function Message_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "i", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon()));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
        i0.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Message_Conditional_4_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Message_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Message_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 4);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.containerTemplate())("ngTemplateOutletContext", ctx_r0.containerContext);
      }
    }
    function Message_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "span", 0);
        i0.\u0275\u0275projection(1);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("text"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("text"));
        i0.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Message_Conditional_6_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "i", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.closeIcon()));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
        i0.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Message_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Message_Conditional_6_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Message_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.closeIconTemplate());
      }
    }
    function Message_Conditional_6_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275element(0, "svg", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275classMap(ctx_r0.cx("closeIcon"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
        i0.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Message_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "button", 5);
        i0.\u0275\u0275listener("click", function Message_Conditional_6_Template_button_click_0_listener($event) {
          i0.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i0.\u0275\u0275nextContext();
          return i0.\u0275\u0275resetView(ctx_r0.close($event));
        });
        i0.\u0275\u0275conditionalCreate(1, Message_Conditional_6_Conditional_1_Template, 1, 4, "i", 1)(2, Message_Conditional_6_Conditional_2_Template, 1, 1, "ng-container")(3, Message_Conditional_6_Conditional_3_Template, 1, 4, ":svg:svg", 6);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("closeButton"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
        i0.\u0275\u0275attribute("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP());
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.closeIcon() ? 1 : ctx_r0.closeIconTemplate() ? 2 : 3);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Message2,
      selectors: [["p-message"]],
      contentQueries: function Message_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.containerTemplate, _c0, 4)(dirIndex, ctx.iconTemplate, _c1, 4)(dirIndex, ctx.closeIconTemplate, _c2, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(3);
        }
      },
      hostAttrs: ["role", "alert", "aria-live", "polite"],
      hostVars: 5,
      hostBindings: function Message_HostBindings(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275animateEnter(function Message_HostBindings_animateenter_cb() {
            return "p-message-enter-active";
          });
          i0.\u0275\u0275animateLeave(function Message_HostBindings_animateleave_cb() {
            return "p-message-leave-active";
          });
        }
        if (rf & 2) {
          i0.\u0275\u0275attribute("data-p", ctx.dataP());
          i0.\u0275\u0275classMap(ctx.cx("root"));
          i0.\u0275\u0275classProp("p-message-leave-active", !ctx.visible());
        }
      },
      inputs: {
        severity: [1, "severity"],
        closable: [1, "closable"],
        icon: [1, "icon"],
        closeIcon: [1, "closeIcon"],
        life: [1, "life"],
        size: [1, "size"],
        variant: [1, "variant"],
        motionOptions: [1, "motionOptions"]
      },
      outputs: {
        onClose: "onClose"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        MessageStyle,
        {
          provide: MESSAGE_INSTANCE,
          useExisting: Message2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Message2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c3,
      decls: 7,
      vars: 12,
      consts: [[3, "pBind"], [3, "pBind", "class"], ["pRipple", "", "type", "button", 3, "pBind", "class"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pRipple", "", "type", "button", 3, "click", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], ["data-p-icon", "times", 3, "pBind"]],
      template: function Message_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275elementStart(0, "div", 0)(1, "div", 0);
          i0.\u0275\u0275conditionalCreate(2, Message_Conditional_2_Template, 1, 1, "ng-container");
          i0.\u0275\u0275conditionalCreate(3, Message_Conditional_3_Template, 1, 4, "i", 1);
          i0.\u0275\u0275conditionalCreate(4, Message_Conditional_4_Template, 1, 2, "ng-container")(5, Message_Conditional_5_Template, 2, 4, "span", 1);
          i0.\u0275\u0275conditionalCreate(6, Message_Conditional_6_Template, 4, 6, "button", 2);
          i0.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("contentWrapper"));
          i0.\u0275\u0275property("pBind", ctx.ptm("contentWrapper"));
          i0.\u0275\u0275attribute("data-p", ctx.dataP());
          i0.\u0275\u0275advance();
          i0.\u0275\u0275classMap(ctx.cx("content"));
          i0.\u0275\u0275property("pBind", ctx.ptm("content"));
          i0.\u0275\u0275attribute("data-p", ctx.dataP());
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.iconTemplate() ? 2 : -1);
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.icon() ? 3 : -1);
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.containerTemplate() ? 4 : 5);
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275conditional(ctx.closable() ? 6 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, Times, Ripple, SharedModule, Bind2, MotionModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Message, [{
    type: Component,
    args: [{
      selector: "p-message",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        Times,
        Ripple,
        SharedModule,
        Bind2,
        MotionModule
      ],
      template: `
        <div [pBind]="ptm('contentWrapper')" [class]="cx('contentWrapper')" [attr.data-p]="dataP()">
            <div [pBind]="ptm('content')" [class]="cx('content')" [attr.data-p]="dataP()">
                @if (iconTemplate()) {
                    <ng-container *ngTemplateOutlet="iconTemplate()"></ng-container>
                }
                @if (icon()) {
                    <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon())" [attr.data-p]="dataP()"></i>
                }

                @if (containerTemplate()) {
                    <ng-container *ngTemplateOutlet="containerTemplate(); context: containerContext"></ng-container>
                } @else {
                    <span [pBind]="ptm('text')" [class]="cx('text')" [attr.data-p]="dataP()">
                        <ng-content />
                    </span>
                }
                @if (closable()) {
                    <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel" [attr.data-p]="dataP()">
                        @if (closeIcon()) {
                            <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon())" [attr.data-p]="dataP()"></i>
                        } @else if (closeIconTemplate()) {
                            <ng-container *ngTemplateOutlet="closeIconTemplate()"></ng-container>
                        } @else {
                            <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.data-p]="dataP()" />
                        }
                    </button>
                }
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        MessageStyle,
        {
          provide: MESSAGE_INSTANCE,
          useExisting: Message
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Message
        }
      ],
      hostDirectives: [Bind2],
      host: {
        "[attr.data-p]": "dataP()",
        role: "alert",
        "aria-live": "polite",
        "[class]": "cx('root')",
        "[animate.enter]": '"p-message-enter-active"',
        "[animate.leave]": '"p-message-leave-active"',
        "[class.p-message-leave-active]": "!visible()"
      }
    }]
  }], null, {
    severity: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "severity",
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
    icon: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    closeIcon: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "closeIcon",
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
    size: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    variant: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "variant",
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
    onClose: [{
      type: i0.Output,
      args: ["onClose"]
    }],
    containerTemplate: [{
      type: i0.ContentChild,
      args: ["container", {
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
    closeIconTemplate: [{
      type: i0.ContentChild,
      args: ["closeicon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var MessageModule = class MessageModule2 {
  static \u0275fac = function MessageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MessageModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: MessageModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Message, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [Message, SharedModule],
      exports: [Message, SharedModule]
    }]
  }], null, null);
})();
export {
  Message,
  MessageClasses,
  MessageModule,
  MessageStyle
};
//# sourceMappingURL=primeng_message.At20f7Ejsd-dev.js.map

if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
import * as i0 from "@angular/core";
import { Directive, Injectable, InjectionToken, NgModule, booleanAttribute, computed, effect, inject, input } from "@angular/core";
import { NgControl } from "@angular/forms";
import { PARENT_INSTANCE } from "primeng/basecomponent";
import { BaseModelHolder } from "primeng/basemodelholder";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { Fluid } from "primeng/fluid";

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style = "\n    .p-inputtext {\n        font-weight: dt('inputtext.font.weight');\n        font-size: dt('inputtext.font.size');\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
import { BaseStyle } from "primeng/base";
var classes = { root: ({ instance }) => ["p-inputtext p-component", {
  "p-filled": instance.$filled(),
  "p-inputtext-sm": instance.pSize() === "small",
  "p-inputtext-lg": instance.pSize() === "large",
  "p-invalid": instance.invalid(),
  "p-variant-filled": instance.$variant() === "filled",
  "p-inputtext-fluid": instance.hasFluid
}] };
var InputTextStyle = class InputTextStyle2 extends BaseStyle {
  name = "inputtext";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory = void 0;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(InputTextStyle2)))(__ngFactoryType__ || InputTextStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: InputTextStyle2,
    factory: InputTextStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputTextStyle, [{ type: Injectable }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var INPUTTEXT_INSTANCE = new InjectionToken("INPUTTEXT_INSTANCE");
var InputText = class InputText2 extends BaseModelHolder {
  componentName = "InputText";
  hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : (
    /* istanbul ignore next */
    []
  ));
  pInputTextPT = input(...ngDevMode ? [void 0, { debugName: "pInputTextPT" }] : (
    /* istanbul ignore next */
    []
  ));
  pInputTextUnstyled = input(...ngDevMode ? [void 0, { debugName: "pInputTextUnstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcInputText = inject(INPUTTEXT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  pSize = input(...ngDevMode ? [void 0, { debugName: "pSize" }] : (
    /* istanbul ignore next */
    []
  ));
  variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fluid" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  invalid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "invalid" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  $variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(InputTextStyle);
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  dataP = computed(() => this.cn({
    invalid: this.invalid(),
    fluid: this.hasFluid,
    filled: this.$variant() === "filled",
    [this.pSize()]: this.pSize()
  }), ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      const pt = this.pInputTextPT();
      if (pt) this.directivePT.set(pt);
    });
    effect(() => {
      if (this.pInputTextUnstyled()) this.directiveUnstyled.set(this.pInputTextUnstyled());
    });
  }
  onAfterViewInit() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  onDoCheck() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  static \u0275fac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputText2)();
  };
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: InputText2,
    selectors: [["", "pInputText", ""]],
    hostVars: 3,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275listener("input", function InputText_input_HostBindingHandler() {
          return ctx.onInput();
        });
      }
      if (rf & 2) {
        i0.\u0275\u0275attribute("data-p", ctx.dataP());
        i0.\u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      hostName: [1, "hostName"],
      pInputTextPT: [1, "pInputTextPT"],
      pInputTextUnstyled: [1, "pInputTextUnstyled"],
      pSize: [1, "pSize"],
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    features: [i0.\u0275\u0275ProvidersFeature([
      InputTextStyle,
      {
        provide: INPUTTEXT_INSTANCE,
        useExisting: InputText2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: InputText2
      }
    ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP()",
        "(input)": "onInput()"
      },
      providers: [
        InputTextStyle,
        {
          provide: INPUTTEXT_INSTANCE,
          useExisting: InputText
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: InputText
        }
      ],
      hostDirectives: [Bind2]
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
    pInputTextPT: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pInputTextPT",
        required: false
      }]
    }],
    pInputTextUnstyled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pInputTextUnstyled",
        required: false
      }]
    }],
    pSize: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pSize",
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
    fluid: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    invalid: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }]
  });
})();
var InputTextModule = class InputTextModule2 {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputTextModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: InputTextModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();
export {
  InputText,
  InputTextClasses,
  InputTextModule,
  InputTextStyle
};
//# sourceMappingURL=primeng_inputtext.qcUOFrrxgX-dev.js.map

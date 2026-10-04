if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, Injector, NgModule, ViewEncapsulation, booleanAttribute, computed, forwardRef, inject, input, output, signal, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { SharedModule } from "primeng/api";
import { AutoFocus } from "primeng/autofocus";
import { PARENT_INSTANCE } from "primeng/basecomponent";
import { BaseEditableHolder } from "primeng/baseeditableholder";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";

// node_modules/@primeuix/styles/dist/radiobutton/index.mjs
var style = "\n    .p-radiobutton {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n    }\n\n    .p-radiobutton-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: 50%;\n    }\n\n    .p-radiobutton-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        border: 1px solid dt('radiobutton.border.color');\n        background: dt('radiobutton.background');\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n        transition:\n            background dt('radiobutton.transition.duration'),\n            color dt('radiobutton.transition.duration'),\n            border-color dt('radiobutton.transition.duration'),\n            box-shadow dt('radiobutton.transition.duration'),\n            outline-color dt('radiobutton.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('radiobutton.shadow');\n    }\n\n    .p-radiobutton-icon {\n        transition-duration: dt('radiobutton.transition.duration');\n        background: transparent;\n        font-size: dt('radiobutton.icon.size');\n        width: dt('radiobutton.icon.size');\n        height: dt('radiobutton.icon.size');\n        border-radius: 50%;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(0.1);\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.hover.border.color');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.border.color');\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.color');\n        transform: translateZ(0) scale(1, 1);\n        visibility: visible;\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.hover.border.color');\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.hover.color');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.focus.border.color');\n        box-shadow: dt('radiobutton.focus.ring.shadow');\n        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');\n        outline-offset: dt('radiobutton.focus.ring.offset');\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.focus.border.color');\n    }\n\n    .p-radiobutton.p-invalid > .p-radiobutton-box {\n        border-color: dt('radiobutton.invalid.border.color');\n    }\n\n    .p-radiobutton.p-variant-filled .p-radiobutton-box {\n        background: dt('radiobutton.filled.background');\n    }\n\n    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton.p-disabled {\n        opacity: 1;\n    }\n\n    .p-radiobutton.p-disabled .p-radiobutton-box {\n        background: dt('radiobutton.disabled.background');\n        border-color: dt('radiobutton.checked.disabled.border.color');\n    }\n\n    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.disabled.color');\n    }\n\n    .p-radiobutton-sm,\n    .p-radiobutton-sm .p-radiobutton-box {\n        width: dt('radiobutton.sm.width');\n        height: dt('radiobutton.sm.height');\n    }\n\n    .p-radiobutton-sm .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.sm.size');\n        width: dt('radiobutton.icon.sm.size');\n        height: dt('radiobutton.icon.sm.size');\n    }\n\n    .p-radiobutton-lg,\n    .p-radiobutton-lg .p-radiobutton-box {\n        width: dt('radiobutton.lg.width');\n        height: dt('radiobutton.lg.height');\n    }\n\n    .p-radiobutton-lg .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.lg.size');\n        width: dt('radiobutton.icon.lg.size');\n        height: dt('radiobutton.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/radiobutton";
var classes = {
  root: ({ instance }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-radiobutton-sm p-inputfield-sm": instance.size() === "small",
    "p-radiobutton-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class RadioButtonStyle2 extends BaseStyle {
  name = "radiobutton";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButtonStyle_BaseFactory = void 0;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275RadioButtonStyle_BaseFactory || (\u0275RadioButtonStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(RadioButtonStyle2)))(__ngFactoryType__ || RadioButtonStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: RadioButtonStyle2,
    factory: RadioButtonStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RadioButtonStyle, [{ type: Injectable }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var RADIOBUTTON_INSTANCE = new InjectionToken("RADIOBUTTON_INSTANCE");
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class RadioControlRegistry2 {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => c[1] !== accessor);
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) c[1].writeValue(accessor.value());
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name() === accessor.name();
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RadioControlRegistry2)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: RadioControlRegistry2,
    factory: RadioControlRegistry2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var RadioButton = class RadioButton2 extends BaseEditableHolder {
  componentName = "RadioButton";
  $pcRadioButton = inject(RADIOBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  tabindex = input(...ngDevMode ? [void 0, { debugName: "tabindex" }] : (
    /* istanbul ignore next */
    []
  ));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  autofocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autofocus" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  binary = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "binary" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(...ngDevMode ? [void 0, { debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  onClick = output();
  onFocus = output();
  onBlur = output();
  inputViewChild = viewChild.required("input", ...ngDevMode ? [{ debugName: "inputViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  $variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : (
    /* istanbul ignore next */
    []
  ));
  attrRequired = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "attrRequired" }] : (
    /* istanbul ignore next */
    []
  ));
  attrDisabled = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "attrDisabled" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => this.cn({
    invalid: this.invalid(),
    checked: this.checked(),
    disabled: this.$disabled(),
    filled: this.$variant() === "filled",
    [this.size()]: this.size()
  }), ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  checked = signal(null, ...ngDevMode ? [{ debugName: "checked" }] : (
    /* istanbul ignore next */
    []
  ));
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    this.control = this.injector.get(NgControl);
    this.registry.add(this.control, this);
  }
  onChange(event) {
    if (!this.$disabled()) this.select(event);
  }
  select(event) {
    if (!this.$disabled()) {
      this.checked.set(true);
      this.writeModelValue(this.checked());
      this.onModelChange(this.value());
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value()
      });
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  focus() {
    this.inputViewChild().nativeElement.focus();
  }
  writeControlValue(value, setModelValue) {
    this.checked.set(!this.binary() ? value == this.value() : !!value);
    setModelValue(this.checked());
  }
  onDestroy() {
    this.registry.remove(this);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RadioButton_BaseFactory = void 0;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (\u0275RadioButton_BaseFactory || (\u0275RadioButton_BaseFactory = i0.\u0275\u0275getInheritedFactory(RadioButton2)))(__ngFactoryType__ || RadioButton2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["input"];
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: RadioButton2,
      selectors: [["p-radiobutton"], ["p-radio-button"]],
      viewQuery: function RadioButton_Query(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275viewQuerySignal(ctx.inputViewChild, _c0, 5);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance();
        }
      },
      hostVars: 5,
      hostBindings: function RadioButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275attribute("data-p-disabled", ctx.$disabled())("data-p-checked", ctx.checked())("data-p", ctx.dataP());
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        value: [1, "value"],
        tabindex: [1, "tabindex"],
        inputId: [1, "inputId"],
        ariaLabelledBy: [1, "ariaLabelledBy"],
        ariaLabel: [1, "ariaLabel"],
        autofocus: [1, "autofocus"],
        binary: [1, "binary"],
        variant: [1, "variant"],
        size: [1, "size"]
      },
      outputs: {
        onClick: "onClick",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        RADIO_VALUE_ACCESSOR,
        RadioButtonStyle,
        {
          provide: RADIOBUTTON_INSTANCE,
          useExisting: RadioButton2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: RadioButton2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      decls: 4,
      vars: 20,
      consts: [["input", ""], ["type", "radio", 3, "focus", "blur", "change", "checked", "pAutoFocus", "pBind"], [3, "pBind"]],
      template: function RadioButton_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275elementStart(0, "input", 1, 0);
          i0.\u0275\u0275listener("focus", function RadioButton_Template_input_focus_0_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function RadioButton_Template_input_blur_0_listener($event) {
            return ctx.onInputBlur($event);
          })("change", function RadioButton_Template_input_change_0_listener($event) {
            return ctx.onChange($event);
          });
          i0.\u0275\u0275elementEnd();
          i0.\u0275\u0275elementStart(2, "div", 2);
          i0.\u0275\u0275element(3, "div", 2);
          i0.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("input"));
          i0.\u0275\u0275property("checked", ctx.checked())("pAutoFocus", ctx.autofocus())("pBind", ctx.ptm("input"));
          i0.\u0275\u0275attribute("id", ctx.inputId())("name", ctx.name())("required", ctx.attrRequired())("disabled", ctx.attrDisabled())("value", ctx.modelValue())("aria-labelledby", ctx.ariaLabelledBy())("aria-label", ctx.ariaLabel())("aria-checked", ctx.checked())("tabindex", ctx.tabindex());
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275classMap(ctx.cx("box"));
          i0.\u0275\u0275property("pBind", ctx.ptm("box"));
          i0.\u0275\u0275advance();
          i0.\u0275\u0275classMap(ctx.cx("icon"));
          i0.\u0275\u0275property("pBind", ctx.ptm("icon"));
        }
      },
      dependencies: [AutoFocus, SharedModule, BindModule, i1.Bind],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radiobutton, p-radio-button",
      standalone: true,
      imports: [
        AutoFocus,
        SharedModule,
        BindModule
      ],
      template: `
        <input
            #input
            [attr.id]="inputId()"
            type="radio"
            [class]="cx('input')"
            [attr.name]="name()"
            [attr.required]="attrRequired()"
            [attr.disabled]="attrDisabled()"
            [checked]="checked()"
            [attr.value]="modelValue()"
            [attr.aria-labelledby]="ariaLabelledBy()"
            [attr.aria-label]="ariaLabel()"
            [attr.aria-checked]="checked()"
            [attr.tabindex]="tabindex()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="onChange($event)"
            [pAutoFocus]="autofocus()"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <div [class]="cx('icon')" [pBind]="ptm('icon')"></div>
        </div>
    `,
      providers: [
        RADIO_VALUE_ACCESSOR,
        RadioButtonStyle,
        {
          provide: RADIOBUTTON_INSTANCE,
          useExisting: RadioButton
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: RadioButton
        }
      ],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p-checked]": "checked()",
        "[attr.data-p]": "dataP()"
      },
      hostDirectives: [Bind2]
    }]
  }], null, {
    value: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    tabindex: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    inputId: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabelledBy",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    autofocus: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "autofocus",
        required: false
      }]
    }],
    binary: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "binary",
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
    size: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    onClick: [{
      type: i0.Output,
      args: ["onClick"]
    }],
    onFocus: [{
      type: i0.Output,
      args: ["onFocus"]
    }],
    onBlur: [{
      type: i0.Output,
      args: ["onBlur"]
    }],
    inputViewChild: [{
      type: i0.ViewChild,
      args: ["input", { isSignal: true }]
    }]
  });
})();
var RadioButtonModule = class RadioButtonModule2 {
  static \u0275fac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RadioButtonModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: RadioButtonModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();
export {
  RADIO_VALUE_ACCESSOR,
  RadioButton,
  RadioButtonClasses,
  RadioButtonModule,
  RadioButtonStyle,
  RadioControlRegistry
};
//# sourceMappingURL=primeng_radiobutton.ZfzWYOuLvj-dev.js.map

if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Check
} from "@nf-internal/chunk-UXNDZG6M";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "@nf-internal/chunk-4VP7SACV";
import {
  _,
  b
} from "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i02 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component2, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, forwardRef, inject, input, output, signal, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { SharedModule } from "primeng/api";
import { PARENT_INSTANCE } from "primeng/basecomponent";
import { BaseEditableHolder } from "primeng/baseeditableholder";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-minus.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/minus.mjs
var e = { name: "minus", meta: { tags: ["minus", "remove", "subtract", "decrease", "less"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M17 9.25C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H17Z", fill: "currentColor", key: "iu8x2q" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-minus.mjs
var Minus = class _Minus extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function Minus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Minus)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Minus_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Minus_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Minus_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Minus_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Minus_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Minus_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Minus_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Minus_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Minus_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _Minus,
      selectors: [["svg", "data-p-icon", "minus"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Minus_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, Minus_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i0.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Minus, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="minus"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeuix/styles/dist/checkbox/index.mjs
var style = "\n    .p-checkbox {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n    }\n\n    .p-checkbox-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: dt('checkbox.border.radius');\n    }\n\n    .p-checkbox-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: dt('checkbox.border.radius');\n        border: 1px solid dt('checkbox.border.color');\n        background: dt('checkbox.background');\n        color: dt('checkbox.icon.color');\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n        transition:\n            background dt('checkbox.transition.duration'),\n            border-color dt('checkbox.transition.duration'),\n            box-shadow dt('checkbox.transition.duration'),\n            outline-color dt('checkbox.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('checkbox.shadow');\n    }\n\n    .p-checkbox-indicator {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .p-checkbox-icon,\n    .p-checkbox-indicator svg,\n    .p-checkbox-indicator i {\n        width: dt('checkbox.icon.size');\n        height: dt('checkbox.icon.size');\n        font-size: dt('checkbox.icon.size');\n        transition-duration: dt('checkbox.transition.duration');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        border-color: dt('checkbox.hover.border.color');\n    }\n\n    .p-checkbox-checked .p-checkbox-box {\n        border-color: dt('checkbox.checked.border.color');\n        background: dt('checkbox.checked.background');\n        color: dt('checkbox.icon.checked.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n        border-color: dt('checkbox.checked.hover.border.color');\n        color: dt('checkbox.icon.checked.hover.color');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.focus.border.color');\n        box-shadow: dt('checkbox.focus.ring.shadow');\n        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');\n        outline-offset: dt('checkbox.focus.ring.offset');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.checked.focus.border.color');\n    }\n\n    .p-checkbox.p-invalid > .p-checkbox-box {\n        border-color: dt('checkbox.invalid.border.color');\n    }\n\n    .p-checkbox.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.filled.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n    }\n\n    .p-checkbox.p-disabled {\n        opacity: 1;\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box {\n        background: dt('checkbox.disabled.background');\n        border-color: dt('checkbox.checked.disabled.border.color');\n        color: dt('checkbox.icon.disabled.color');\n    }\n\n    .p-checkbox-sm,\n    .p-checkbox-sm .p-checkbox-box {\n        width: dt('checkbox.sm.width');\n        height: dt('checkbox.sm.height');\n    }\n\n    .p-checkbox-sm .p-checkbox-icon,\n    .p-checkbox-sm .p-checkbox-indicator svg,\n    .p-checkbox-sm .p-checkbox-indicator i {\n        font-size: dt('checkbox.icon.sm.size');\n        width: dt('checkbox.icon.sm.size');\n        height: dt('checkbox.icon.sm.size');\n    }\n\n    .p-checkbox-lg,\n    .p-checkbox-lg .p-checkbox-box {\n        width: dt('checkbox.lg.width');\n        height: dt('checkbox.lg.height');\n    }\n\n    .p-checkbox-lg .p-checkbox-icon,\n    .p-checkbox-lg .p-checkbox-indicator svg,\n    .p-checkbox-lg .p-checkbox-indicator i {\n        font-size: dt('checkbox.icon.lg.size');\n        width: dt('checkbox.icon.lg.size');\n        height: dt('checkbox.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/checkbox";
var classes = {
  root: ({ instance }) => ["p-checkbox p-component", {
    "p-checkbox-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-checkbox-sm p-inputfield-sm": instance.size() === "small",
    "p-checkbox-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  indicator: "p-checkbox-indicator",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = class CheckboxStyle2 extends BaseStyle {
  name = "checkbox";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxStyle_BaseFactory = void 0;
    return function CheckboxStyle_Factory(__ngFactoryType__) {
      return (\u0275CheckboxStyle_BaseFactory || (\u0275CheckboxStyle_BaseFactory = i02.\u0275\u0275getInheritedFactory(CheckboxStyle2)))(__ngFactoryType__ || CheckboxStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({
    token: CheckboxStyle2,
    factory: CheckboxStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(CheckboxStyle, [{ type: Injectable }], null, null);
})();
var CheckboxClasses;
(function(CheckboxClasses2) {
  CheckboxClasses2["root"] = "p-checkbox";
  CheckboxClasses2["box"] = "p-checkbox-box";
  CheckboxClasses2["input"] = "p-checkbox-input";
  CheckboxClasses2["indicator"] = "p-checkbox-indicator";
  CheckboxClasses2["icon"] = "p-checkbox-icon";
})(CheckboxClasses || (CheckboxClasses = {}));
var CHECKBOX_INSTANCE = new InjectionToken("CHECKBOX_INSTANCE");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class Checkbox2 extends BaseEditableHolder {
  componentName = "Checkbox";
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  binary = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "binary" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
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
  inputStyle = input(...ngDevMode ? [void 0, { debugName: "inputStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  inputClass = input(...ngDevMode ? [void 0, { debugName: "inputClass" }] : (
    /* istanbul ignore next */
    []
  ));
  indeterminate = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "indeterminate" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  formControl = input(...ngDevMode ? [void 0, { debugName: "formControl" }] : (
    /* istanbul ignore next */
    []
  ));
  checkboxIcon = input(...ngDevMode ? [void 0, { debugName: "checkboxIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  readonly = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "readonly" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  autofocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autofocus" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  trueValue = input(true, ...ngDevMode ? [{ debugName: "trueValue" }] : (
    /* istanbul ignore next */
    []
  ));
  falseValue = input(false, ...ngDevMode ? [{ debugName: "falseValue" }] : (
    /* istanbul ignore next */
    []
  ));
  variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(...ngDevMode ? [void 0, { debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  onChange = output();
  onFocus = output();
  onBlur = output();
  inputViewChild = viewChild("input", ...ngDevMode ? [{ debugName: "inputViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  iconTemplate = contentChild("icon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "iconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  _indeterminate = signal(false, ...ngDevMode ? [{ debugName: "_indeterminate" }] : (
    /* istanbul ignore next */
    []
  ));
  focused = signal(false, ...ngDevMode ? [{ debugName: "focused" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(CheckboxStyle);
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcCheckbox = inject(CHECKBOX_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : (
    /* istanbul ignore next */
    []
  ));
  requiredAttr = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "requiredAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  readonlyAttr = computed(() => this.readonly() ? "" : void 0, ...ngDevMode ? [{ debugName: "readonlyAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  disabledAttr = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "disabledAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  checked = computed(() => {
    if (this._indeterminate()) return false;
    return this.binary() ? this.modelValue() === this.trueValue() : _(this.value(), this.modelValue());
  }, ...ngDevMode ? [{ debugName: "checked" }] : (
    /* istanbul ignore next */
    []
  ));
  iconTemplateContext = computed(() => ({
    checked: this.checked(),
    class: this.cx("icon"),
    dataP: this.dataP()
  }), ...ngDevMode ? [{ debugName: "iconTemplateContext" }] : (
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
  constructor() {
    super();
    effect(() => {
      const indeterminate = this.indeterminate();
      this._indeterminate.set(indeterminate);
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl() ? selfControl.value : this.modelValue();
    if (!this.binary()) {
      if (this.checked() || this._indeterminate()) newModelValue = currentModelValue.filter((val) => !b(val, this.value()));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value()] : [this.value()];
      this.onModelChange(newModelValue);
      this.writeModelValue(newModelValue);
      const formControl = this.formControl();
      if (formControl) formControl.setValue(newModelValue);
    } else {
      newModelValue = this._indeterminate() ? this.trueValue() : this.checked() ? this.falseValue() : this.trueValue();
      this.writeModelValue(newModelValue);
      this.onModelChange(newModelValue);
    }
    if (this._indeterminate()) this._indeterminate.set(false);
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly()) this.updateModel(event);
  }
  onInputFocus(event) {
    this.focused.set(true);
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused.set(false);
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild()?.nativeElement.focus();
  }
  writeControlValue(value, setModelValue) {
    setModelValue(value);
  }
  static \u0275fac = function Checkbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Checkbox2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["icon"];
    const _c1 = ["input"];
    function Checkbox_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275element(0, "span", 2);
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext(3);
        i02.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checkboxIcon()));
        i02.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
        i02.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Checkbox_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275element(0, "svg", 5);
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext(3);
        i02.\u0275\u0275classMap(ctx_r0.cx("icon"));
        i02.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
        i02.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Checkbox_Conditional_3_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementStart(0, "span", 2);
        i02.\u0275\u0275conditionalCreate(1, Checkbox_Conditional_3_Conditional_0_Conditional_1_Template, 1, 4, "span", 3)(2, Checkbox_Conditional_3_Conditional_0_Conditional_2_Template, 1, 4, ":svg:svg", 4);
        i02.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext(2);
        i02.\u0275\u0275classMap(ctx_r0.cx("indicator"));
        i02.\u0275\u0275property("pBind", ctx_r0.ptm("indicator"));
        i02.\u0275\u0275advance();
        i02.\u0275\u0275conditional(ctx_r0.checkboxIcon() ? 1 : 2);
      }
    }
    function Checkbox_Conditional_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementStart(0, "span", 2);
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275element(1, "svg", 6);
        i02.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext(2);
        i02.\u0275\u0275classMap(ctx_r0.cx("indicator"));
        i02.\u0275\u0275property("pBind", ctx_r0.ptm("indicator"));
        i02.\u0275\u0275advance();
        i02.\u0275\u0275classMap(ctx_r0.cx("icon"));
        i02.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
        i02.\u0275\u0275attribute("data-p", ctx_r0.dataP());
      }
    }
    function Checkbox_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, Checkbox_Conditional_3_Conditional_0_Template, 3, 4, "span", 3);
        i02.\u0275\u0275conditionalCreate(1, Checkbox_Conditional_3_Conditional_1_Template, 2, 7, "span", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext();
        i02.\u0275\u0275conditional(ctx_r0.checked() ? 0 : -1);
        i02.\u0275\u0275advance();
        i02.\u0275\u0275conditional(ctx_r0._indeterminate() ? 1 : -1);
      }
    }
    function Checkbox_Conditional_4_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275elementContainer(0);
      }
    }
    function Checkbox_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275template(0, Checkbox_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i02.\u0275\u0275nextContext();
        i02.\u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate())("ngTemplateOutletContext", ctx_r0.iconTemplateContext());
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: Checkbox2,
      selectors: [["p-checkbox"], ["p-check-box"]],
      contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i02.\u0275\u0275contentQuerySignal(dirIndex, ctx.iconTemplate, _c0, 4);
        }
        if (rf & 2) {
          i02.\u0275\u0275queryAdvance();
        }
      },
      viewQuery: function Checkbox_Query(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275viewQuerySignal(ctx.inputViewChild, _c1, 5);
        }
        if (rf & 2) {
          i02.\u0275\u0275queryAdvance();
        }
      },
      hostVars: 6,
      hostBindings: function Checkbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          i02.\u0275\u0275attribute("data-p-highlight", ctx.checked())("data-p-checked", ctx.checked())("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP());
          i02.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        value: [1, "value"],
        binary: [1, "binary"],
        ariaLabelledBy: [1, "ariaLabelledBy"],
        ariaLabel: [1, "ariaLabel"],
        tabindex: [1, "tabindex"],
        inputId: [1, "inputId"],
        inputStyle: [1, "inputStyle"],
        inputClass: [1, "inputClass"],
        indeterminate: [1, "indeterminate"],
        formControl: [1, "formControl"],
        checkboxIcon: [1, "checkboxIcon"],
        readonly: [1, "readonly"],
        autofocus: [1, "autofocus"],
        trueValue: [1, "trueValue"],
        falseValue: [1, "falseValue"],
        variant: [1, "variant"],
        size: [1, "size"]
      },
      outputs: {
        onChange: "onChange",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [i02.\u0275\u0275ProvidersFeature([
        CHECKBOX_VALUE_ACCESSOR,
        CheckboxStyle,
        {
          provide: CHECKBOX_INSTANCE,
          useExisting: Checkbox2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Checkbox2
        }
      ]), i02.\u0275\u0275HostDirectivesFeature([i1.Bind]), i02.\u0275\u0275InheritDefinitionFeature],
      decls: 5,
      vars: 20,
      consts: [["input", ""], ["type", "checkbox", 3, "focus", "blur", "change", "checked", "pBind"], [3, "pBind"], [3, "class", "pBind"], ["data-p-icon", "check", 3, "class", "pBind"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "minus", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function Checkbox_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275elementStart(0, "input", 1, 0);
          i02.\u0275\u0275listener("focus", function Checkbox_Template_input_focus_0_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function Checkbox_Template_input_blur_0_listener($event) {
            return ctx.onInputBlur($event);
          })("change", function Checkbox_Template_input_change_0_listener($event) {
            return ctx.handleChange($event);
          });
          i02.\u0275\u0275elementEnd();
          i02.\u0275\u0275elementStart(2, "div", 2);
          i02.\u0275\u0275conditionalCreate(3, Checkbox_Conditional_3_Template, 2, 2)(4, Checkbox_Conditional_4_Template, 1, 2, "ng-container");
          i02.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i02.\u0275\u0275styleMap(ctx.inputStyle());
          i02.\u0275\u0275classMap(ctx.cn(ctx.cx("input"), ctx.inputClass()));
          i02.\u0275\u0275property("checked", ctx.checked())("pBind", ctx.ptm("input"));
          i02.\u0275\u0275attribute("id", ctx.inputId())("value", ctx.value())("name", ctx.name())("tabindex", ctx.tabindex())("required", ctx.requiredAttr())("readonly", ctx.readonlyAttr())("disabled", ctx.disabledAttr())("aria-labelledby", ctx.ariaLabelledBy())("aria-label", ctx.ariaLabel());
          i02.\u0275\u0275advance(2);
          i02.\u0275\u0275classMap(ctx.cx("box"));
          i02.\u0275\u0275property("pBind", ctx.ptm("box"));
          i02.\u0275\u0275attribute("data-p", ctx.dataP());
          i02.\u0275\u0275advance();
          i02.\u0275\u0275conditional(!ctx.iconTemplate() ? 3 : 4);
        }
      },
      dependencies: [NgTemplateOutlet, SharedModule, Check, Minus, BindModule, i1.Bind],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(Checkbox, [{
    type: Component2,
    args: [{
      selector: "p-checkbox, p-check-box",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        SharedModule,
        Check,
        Minus,
        BindModule
      ],
      template: `
        <input
            #input
            [attr.id]="inputId()"
            type="checkbox"
            [attr.value]="value()"
            [attr.name]="name()"
            [checked]="checked()"
            [attr.tabindex]="tabindex()"
            [attr.required]="requiredAttr()"
            [attr.readonly]="readonlyAttr()"
            [attr.disabled]="disabledAttr()"
            [attr.aria-labelledby]="ariaLabelledBy()"
            [attr.aria-label]="ariaLabel()"
            [style]="inputStyle()"
            [class]="cn(cx('input'), inputClass())"
            [pBind]="ptm('input')"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="handleChange($event)"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')" [attr.data-p]="dataP()">
            @if (!iconTemplate()) {
                @if (checked()) {
                    <span [class]="cx('indicator')" [pBind]="ptm('indicator')">
                        @if (checkboxIcon()) {
                            <span [class]="cn(cx('icon'), checkboxIcon())" [pBind]="ptm('icon')" [attr.data-p]="dataP()"></span>
                        } @else {
                            <svg data-p-icon="check" [class]="cx('icon')" [pBind]="ptm('icon')" [attr.data-p]="dataP()" />
                        }
                    </span>
                }
                @if (_indeterminate()) {
                    <span [class]="cx('indicator')" [pBind]="ptm('indicator')">
                        <svg data-p-icon="minus" [class]="cx('icon')" [pBind]="ptm('icon')" [attr.data-p]="dataP()" />
                    </span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate(); context: iconTemplateContext()"></ng-container>
            }
        </div>
    `,
      providers: [
        CHECKBOX_VALUE_ACCESSOR,
        CheckboxStyle,
        {
          provide: CHECKBOX_INSTANCE,
          useExisting: Checkbox
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Checkbox
        }
      ],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p-highlight]": "checked()",
        "[attr.data-p-checked]": "checked()",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP()"
      },
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    value: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    binary: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "binary",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabelledBy",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    tabindex: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    inputId: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    inputStyle: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "inputStyle",
        required: false
      }]
    }],
    inputClass: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "inputClass",
        required: false
      }]
    }],
    indeterminate: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "indeterminate",
        required: false
      }]
    }],
    formControl: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "formControl",
        required: false
      }]
    }],
    checkboxIcon: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "checkboxIcon",
        required: false
      }]
    }],
    readonly: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "readonly",
        required: false
      }]
    }],
    autofocus: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "autofocus",
        required: false
      }]
    }],
    trueValue: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "trueValue",
        required: false
      }]
    }],
    falseValue: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "falseValue",
        required: false
      }]
    }],
    variant: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    size: [{
      type: i02.Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    onChange: [{
      type: i02.Output,
      args: ["onChange"]
    }],
    onFocus: [{
      type: i02.Output,
      args: ["onFocus"]
    }],
    onBlur: [{
      type: i02.Output,
      args: ["onBlur"]
    }],
    inputViewChild: [{
      type: i02.ViewChild,
      args: ["input", { isSignal: true }]
    }],
    iconTemplate: [{
      type: i02.ContentChild,
      args: ["icon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var CheckboxModule = class CheckboxModule2 {
  static \u0275fac = function CheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CheckboxModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i02.\u0275\u0275defineNgModule({
    type: CheckboxModule2
  });
  static \u0275inj = /* @__PURE__ */ i02.\u0275\u0275defineInjector({
    imports: [Checkbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [Checkbox, SharedModule],
      exports: [Checkbox, SharedModule]
    }]
  }], null, null);
})();
export {
  CHECKBOX_VALUE_ACCESSOR,
  Checkbox,
  CheckboxClasses,
  CheckboxModule,
  CheckboxStyle
};
//# sourceMappingURL=primeng_checkbox.334Rvh7LOD-dev.js.map

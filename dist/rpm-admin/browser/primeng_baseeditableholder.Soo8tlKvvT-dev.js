if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
import * as i0 from "@angular/core";
import { Directive, booleanAttribute, computed, input, signal } from "@angular/core";
import { BaseModelHolder } from "primeng/basemodelholder";
var BaseEditableHolder = class BaseEditableHolder2 extends BaseModelHolder {
  required = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "required" } : (
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
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  name = input(...ngDevMode ? [void 0, { debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{ debugName: "$disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory = void 0;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = i0.\u0275\u0275getInheritedFactory(BaseEditableHolder2)))(__ngFactoryType__ || BaseEditableHolder2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: BaseEditableHolder2,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{ standalone: true }]
  }], null, {
    required: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "required",
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
    }],
    disabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
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
    }]
  });
})();
export {
  BaseEditableHolder
};
//# sourceMappingURL=primeng_baseeditableholder.Soo8tlKvvT-dev.js.map

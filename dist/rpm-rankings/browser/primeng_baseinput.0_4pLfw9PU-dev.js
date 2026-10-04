if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
import * as i0 from "@angular/core";
import { Directive, booleanAttribute, computed, inject, input } from "@angular/core";
import { BaseEditableHolder } from "primeng/baseeditableholder";
import { Fluid } from "primeng/fluid";
var BaseInput = class BaseInput2 extends BaseEditableHolder {
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fluid" } : (
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
  inputSize = input(...ngDevMode ? [void 0, { debugName: "inputSize" }] : (
    /* istanbul ignore next */
    []
  ));
  pattern = input(...ngDevMode ? [void 0, { debugName: "pattern" }] : (
    /* istanbul ignore next */
    []
  ));
  min = input(...ngDevMode ? [void 0, { debugName: "min" }] : (
    /* istanbul ignore next */
    []
  ));
  max = input(...ngDevMode ? [void 0, { debugName: "max" }] : (
    /* istanbul ignore next */
    []
  ));
  step = input(...ngDevMode ? [void 0, { debugName: "step" }] : (
    /* istanbul ignore next */
    []
  ));
  minlength = input(...ngDevMode ? [void 0, { debugName: "minlength" }] : (
    /* istanbul ignore next */
    []
  ));
  maxlength = input(...ngDevMode ? [void 0, { debugName: "maxlength" }] : (
    /* istanbul ignore next */
    []
  ));
  $variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : (
    /* istanbul ignore next */
    []
  ));
  $pattern = computed(() => {
    const v = this.pattern();
    return typeof v === "string" && v.length > 0 ? v : void 0;
  }, ...ngDevMode ? [{ debugName: "$pattern" }] : (
    /* istanbul ignore next */
    []
  ));
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseInput_BaseFactory = void 0;
    return function BaseInput_Factory(__ngFactoryType__) {
      return (\u0275BaseInput_BaseFactory || (\u0275BaseInput_BaseFactory = i0.\u0275\u0275getInheritedFactory(BaseInput2)))(__ngFactoryType__ || BaseInput2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: BaseInput2,
    inputs: {
      fluid: [1, "fluid"],
      variant: [1, "variant"],
      size: [1, "size"],
      inputSize: [1, "inputSize"],
      pattern: [1, "pattern"],
      min: [1, "min"],
      max: [1, "max"],
      step: [1, "step"],
      minlength: [1, "minlength"],
      maxlength: [1, "maxlength"]
    },
    features: [i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseInput, [{
    type: Directive,
    args: [{ standalone: true }]
  }], null, {
    fluid: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "fluid",
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
    inputSize: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "inputSize",
        required: false
      }]
    }],
    pattern: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "pattern",
        required: false
      }]
    }],
    min: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "min",
        required: false
      }]
    }],
    max: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "max",
        required: false
      }]
    }],
    step: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "step",
        required: false
      }]
    }],
    minlength: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "minlength",
        required: false
      }]
    }],
    maxlength: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "maxlength",
        required: false
      }]
    }]
  });
})();
export {
  BaseInput
};
//# sourceMappingURL=primeng_baseinput.0_4pLfw9PU-dev.js.map

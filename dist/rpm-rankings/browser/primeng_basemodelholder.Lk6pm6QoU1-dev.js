if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  l
} from "@nf-internal/chunk-U52GCPZ3";
import "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
import * as i0 from "@angular/core";
import { Directive, computed, signal } from "@angular/core";
import { BaseComponent } from "primeng/basecomponent";
var BaseModelHolder = class BaseModelHolder2 extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{ debugName: "modelValue" }] : (
    /* istanbul ignore next */
    []
  ));
  $filled = computed(() => l(this.modelValue()), ...ngDevMode ? [{ debugName: "$filled" }] : (
    /* istanbul ignore next */
    []
  ));
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory = void 0;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = i0.\u0275\u0275getInheritedFactory(BaseModelHolder2)))(__ngFactoryType__ || BaseModelHolder2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i0.\u0275\u0275defineDirective({
    type: BaseModelHolder2,
    features: [i0.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{ standalone: true }]
  }], null, null);
})();
export {
  BaseModelHolder
};
//# sourceMappingURL=primeng_basemodelholder.Lk6pm6QoU1-dev.js.map

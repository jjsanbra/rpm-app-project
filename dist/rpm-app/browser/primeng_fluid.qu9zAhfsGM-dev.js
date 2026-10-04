if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-fluid.mjs
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, inject } from "@angular/core";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { BaseStyle } from "primeng/base";
export * from "primeng/types/fluid";
var classes = { root: "p-fluid" };
var FluidStyle = class FluidStyle2 extends BaseStyle {
  name = "fluid";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FluidStyle_BaseFactory = void 0;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (\u0275FluidStyle_BaseFactory || (\u0275FluidStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(FluidStyle2)))(__ngFactoryType__ || FluidStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: FluidStyle2,
    factory: FluidStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FluidStyle, [{ type: Injectable }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class Fluid2 extends BaseComponent {
  componentName = "Fluid";
  $pcFluid = inject(FLUID_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(FluidStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fluid_BaseFactory = void 0;
    return function Fluid_Factory(__ngFactoryType__) {
      return (\u0275Fluid_BaseFactory || (\u0275Fluid_BaseFactory = i0.\u0275\u0275getInheritedFactory(Fluid2)))(__ngFactoryType__ || Fluid2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["*"];
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Fluid2,
      selectors: [["p-fluid"]],
      hostVars: 2,
      hostBindings: function Fluid_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        FluidStyle,
        {
          provide: FLUID_INSTANCE,
          useExisting: Fluid2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Fluid2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function Fluid_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275projection(0);
        }
      },
      dependencies: [CommonModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        FluidStyle,
        {
          provide: FLUID_INSTANCE,
          useExisting: Fluid
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Fluid
        }
      ],
      host: { "[class]": "cx('root')" },
      hostDirectives: [Bind2]
    }]
  }], null, null);
})();
var FluidModule = class FluidModule2 {
  static \u0275fac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FluidModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: FluidModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();
export {
  Fluid,
  FluidClasses,
  FluidModule,
  FluidStyle
};
//# sourceMappingURL=primeng_fluid.qu9zAhfsGM-dev.js.map

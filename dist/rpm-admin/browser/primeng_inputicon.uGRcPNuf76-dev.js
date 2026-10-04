if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, inject, input } from "@angular/core";
import { SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { BaseStyle } from "primeng/base";
var classes = { root: "p-inputicon" };
var InputIconStyle = class InputIconStyle2 extends BaseStyle {
  name = "inputicon";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputIconStyle_BaseFactory = void 0;
    return function InputIconStyle_Factory(__ngFactoryType__) {
      return (\u0275InputIconStyle_BaseFactory || (\u0275InputIconStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(InputIconStyle2)))(__ngFactoryType__ || InputIconStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: InputIconStyle2,
    factory: InputIconStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputIconStyle, [{ type: Injectable }], null, null);
})();
var INPUTICON_INSTANCE = new InjectionToken("INPUTICON_INSTANCE");
var InputIcon = class InputIcon2 extends BaseComponent {
  componentName = "InputIcon";
  hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(InputIconStyle);
  $pcInputIcon = inject(INPUTICON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputIcon_BaseFactory = void 0;
    return function InputIcon_Factory(__ngFactoryType__) {
      return (\u0275InputIcon_BaseFactory || (\u0275InputIcon_BaseFactory = i0.\u0275\u0275getInheritedFactory(InputIcon2)))(__ngFactoryType__ || InputIcon2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["*"];
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: InputIcon2,
      selectors: [["p-inputicon"]],
      hostVars: 2,
      hostBindings: function InputIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        hostName: [1, "hostName"]
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        InputIconStyle,
        {
          provide: INPUTICON_INSTANCE,
          useExisting: InputIcon2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: InputIcon2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function InputIcon_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275projection(0);
        }
      },
      dependencies: [SharedModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputicon",
      standalone: true,
      imports: [SharedModule],
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        InputIconStyle,
        {
          provide: INPUTICON_INSTANCE,
          useExisting: InputIcon
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: InputIcon
        }
      ],
      hostDirectives: [Bind2],
      host: { "[class]": "cx('root')" }
    }]
  }], null, { hostName: [{
    type: i0.Input,
    args: [{
      isSignal: true,
      alias: "hostName",
      required: false
    }]
  }] });
})();
var InputIconModule = class InputIconModule2 {
  static \u0275fac = function InputIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InputIconModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: InputIconModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [InputIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [InputIcon, SharedModule],
      exports: [InputIcon, SharedModule]
    }]
  }], null, null);
})();
export {
  InputIcon,
  InputIconModule,
  InputIconStyle
};
//# sourceMappingURL=primeng_inputicon.uGRcPNuf76-dev.js.map

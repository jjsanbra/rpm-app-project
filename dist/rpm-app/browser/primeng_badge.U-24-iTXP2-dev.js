if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  l,
  p
} from "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-badge.mjs
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, inject, input } from "@angular/core";
import { SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";

// node_modules/primeng/fesm2022/primeng-badge.mjs
import { BaseStyle } from "primeng/base";
var style$1 = `
    ${style}
`;
var classes = { root: ({ instance }) => {
  const value = instance.value();
  const size = instance.size();
  const badgeSize = instance.badgeSize();
  const severity = instance.severity();
  return ["p-badge p-component", {
    "p-badge-circle": l(value) && String(value).length === 1,
    "p-badge-dot": p(value),
    "p-badge-sm": size === "small" || badgeSize === "small",
    "p-badge-lg": size === "large" || badgeSize === "large",
    "p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
    "p-badge-info": severity === "info",
    "p-badge-success": severity === "success",
    "p-badge-warn": severity === "warn",
    "p-badge-danger": severity === "danger",
    "p-badge-secondary": severity === "secondary",
    "p-badge-contrast": severity === "contrast"
  }];
} };
var BadgeStyle = class BadgeStyle2 extends BaseStyle {
  name = "badge";
  style = style$1;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BadgeStyle_BaseFactory = void 0;
    return function BadgeStyle_Factory(__ngFactoryType__) {
      return (\u0275BadgeStyle_BaseFactory || (\u0275BadgeStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(BadgeStyle2)))(__ngFactoryType__ || BadgeStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: BadgeStyle2,
    factory: BadgeStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BadgeStyle, [{ type: Injectable }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses2) {
  BadgeClasses2["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
var Badge = class Badge2 extends BaseComponent {
  componentName = "Badge";
  $pcBadge = inject(BADGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(...ngDevMode ? [void 0, { debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : (
    /* istanbul ignore next */
    []
  ));
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  badgeDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "badgeDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  _componentStyle = inject(BadgeStyle);
  displayStyle = computed(() => this.badgeDisabled() ? "none" : null, ...ngDevMode ? [{ debugName: "displayStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => {
    const value = this.value();
    const severity = this.severity();
    const size = this.size();
    return this.cn({
      circle: value != null && String(value).length === 1,
      empty: value == null,
      disabled: this.badgeDisabled(),
      [severity]: severity,
      [size]: size
    });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Badge_BaseFactory = void 0;
    return function Badge_Factory(__ngFactoryType__) {
      return (\u0275Badge_BaseFactory || (\u0275Badge_BaseFactory = i0.\u0275\u0275getInheritedFactory(Badge2)))(__ngFactoryType__ || Badge2);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
    type: Badge2,
    selectors: [["p-badge"]],
    hostVars: 5,
    hostBindings: function Badge_HostBindings(rf, ctx) {
      if (rf & 2) {
        i0.\u0275\u0275attribute("data-p", ctx.dataP());
        i0.\u0275\u0275classMap(ctx.cx("root"));
        i0.\u0275\u0275styleProp("display", ctx.displayStyle());
      }
    },
    inputs: {
      badgeSize: [1, "badgeSize"],
      size: [1, "size"],
      severity: [1, "severity"],
      value: [1, "value"],
      badgeDisabled: [1, "badgeDisabled"]
    },
    features: [i0.\u0275\u0275ProvidersFeature([
      BadgeStyle,
      {
        provide: BADGE_INSTANCE,
        useExisting: Badge2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: Badge2
      }
    ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275text(0);
      }
      if (rf & 2) {
        i0.\u0275\u0275textInterpolate(ctx.value());
      }
    },
    dependencies: [SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: `{{ value() }}`,
      standalone: true,
      imports: [SharedModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        BadgeStyle,
        {
          provide: BADGE_INSTANCE,
          useExisting: Badge
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Badge
        }
      ],
      host: {
        "[class]": "cx('root')",
        "[style.display]": "displayStyle()",
        "[attr.data-p]": "dataP()"
      },
      hostDirectives: [Bind2]
    }]
  }], null, {
    badgeSize: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "badgeSize",
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
    severity: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "severity",
        required: false
      }]
    }],
    value: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    badgeDisabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "badgeDisabled",
        required: false
      }]
    }]
  });
})();
var BadgeModule = class BadgeModule2 {
  static \u0275fac = function BadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BadgeModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: BadgeModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Badge, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [Badge, SharedModule],
      exports: [Badge, SharedModule]
    }]
  }], null, null);
})();
export {
  Badge,
  BadgeClasses,
  BadgeModule,
  BadgeStyle
};
//# sourceMappingURL=primeng_badge.U-24-iTXP2-dev.js.map

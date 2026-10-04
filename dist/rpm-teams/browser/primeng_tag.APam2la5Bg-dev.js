if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-tag.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, inject, input } from "@angular/core";
import { SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/tag";
var classes = {
  root: ({ instance }) => {
    const severity = instance.severity();
    const rounded = instance.rounded();
    return ["p-tag p-component", {
      "p-tag-info": severity === "info",
      "p-tag-success": severity === "success",
      "p-tag-warn": severity === "warn",
      "p-tag-danger": severity === "danger",
      "p-tag-secondary": severity === "secondary",
      "p-tag-contrast": severity === "contrast",
      "p-tag-rounded": rounded
    }];
  },
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class TagStyle2 extends BaseStyle {
  name = "tag";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory = void 0;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(TagStyle2)))(__ngFactoryType__ || TagStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: TagStyle2,
    factory: TagStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TagStyle, [{ type: Injectable }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var TAG_INSTANCE = new InjectionToken("TAG_INSTANCE");
var Tag = class Tag2 extends BaseComponent {
  componentName = "Tag";
  $pcTag = inject(TAG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : (
    /* istanbul ignore next */
    []
  ));
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  rounded = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rounded" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  iconTemplate = contentChild("icon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "iconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  _componentStyle = inject(TagStyle);
  dataP = computed(() => {
    const severity = this.severity();
    const rounded = this.rounded();
    return this.cn({
      rounded,
      [severity]: severity
    });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory = void 0;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = i0.\u0275\u0275getInheritedFactory(Tag2)))(__ngFactoryType__ || Tag2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["icon"];
    const _c1 = ["*"];
    function Tag_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "span", 1);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon()));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
      }
    }
    function Tag_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Tag_Conditional_1_Conditional_0_Template, 1, 3, "span", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275conditional(ctx_r0.icon() ? 0 : -1);
      }
    }
    function Tag_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "span", 1);
        i0.\u0275\u0275elementContainer(1, 2);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("icon"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("icon"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate());
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Tag2,
      selectors: [["p-tag"]],
      contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.iconTemplate, _c0, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance();
        }
      },
      hostVars: 3,
      hostBindings: function Tag_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275attribute("data-p", ctx.dataP());
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        severity: [1, "severity"],
        value: [1, "value"],
        icon: [1, "icon"],
        rounded: [1, "rounded"]
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        TagStyle,
        {
          provide: TAG_INSTANCE,
          useExisting: Tag2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Tag2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 5,
      consts: [[3, "class", "pBind"], [3, "pBind"], [3, "ngTemplateOutlet"]],
      template: function Tag_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275projection(0);
          i0.\u0275\u0275conditionalCreate(1, Tag_Conditional_1_Template, 1, 1)(2, Tag_Conditional_2_Template, 2, 4, "span", 0);
          i0.\u0275\u0275elementStart(3, "span", 1);
          i0.\u0275\u0275text(4);
          i0.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(!ctx.iconTemplate() ? 1 : 2);
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275classMap(ctx.cx("label"));
          i0.\u0275\u0275property("pBind", ctx.ptm("label"));
          i0.\u0275\u0275advance();
          i0.\u0275\u0275textInterpolate(ctx.value());
        }
      },
      dependencies: [NgTemplateOutlet, SharedModule, Bind2],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        SharedModule,
        Bind2
      ],
      template: `
        <ng-content></ng-content>
        @if (!iconTemplate()) {
            @if (icon()) {
                <span [class]="cn(cx('icon'), icon())" [pBind]="ptm('icon')"></span>
            }
        } @else {
            <span [class]="cx('icon')" [pBind]="ptm('icon')">
                <ng-container [ngTemplateOutlet]="iconTemplate()!"></ng-container>
            </span>
        }
        <span [class]="cx('label')" [pBind]="ptm('label')">{{ value() }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        TagStyle,
        {
          provide: TAG_INSTANCE,
          useExisting: Tag
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Tag
        }
      ],
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP()"
      },
      hostDirectives: [Bind2]
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
    value: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "value",
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
    rounded: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "rounded",
        required: false
      }]
    }],
    iconTemplate: [{
      type: i0.ContentChild,
      args: ["icon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var TagModule = class TagModule2 {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TagModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: TagModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();
export {
  Tag,
  TagClasses,
  TagModule,
  TagStyle
};
//# sourceMappingURL=primeng_tag.APam2la5Bg-dev.js.map

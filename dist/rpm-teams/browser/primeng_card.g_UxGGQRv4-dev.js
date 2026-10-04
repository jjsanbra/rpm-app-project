if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-card.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, computed, contentChild, inject, input } from "@angular/core";
import { Footer, Header, SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";

// node_modules/@primeuix/styles/dist/card/index.mjs
var style = "\n    .p-card {\n        display: block;\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n        font-size: dt('card.subtitle.font.size');\n        font-weight: dt('card.subtitle.font.weight');\n    }\n";

// node_modules/primeng/fesm2022/primeng-card.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/card";
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = class CardStyle2 extends BaseStyle {
  name = "card";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CardStyle_BaseFactory = void 0;
    return function CardStyle_Factory(__ngFactoryType__) {
      return (\u0275CardStyle_BaseFactory || (\u0275CardStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(CardStyle2)))(__ngFactoryType__ || CardStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: CardStyle2,
    factory: CardStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(CardStyle, [{ type: Injectable }], null, null);
})();
var CardClasses;
(function(CardClasses2) {
  CardClasses2["root"] = "p-card";
  CardClasses2["header"] = "p-card-header";
  CardClasses2["body"] = "p-card-body";
  CardClasses2["caption"] = "p-card-caption";
  CardClasses2["title"] = "p-card-title";
  CardClasses2["subtitle"] = "p-card-subtitle";
  CardClasses2["content"] = "p-card-content";
  CardClasses2["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var CARD_INSTANCE = new InjectionToken("CARD_INSTANCE");
var Card = class Card2 extends BaseComponent {
  componentName = "Card";
  $pcCard = inject(CARD_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(CardStyle);
  header = input(...ngDevMode ? [void 0, { debugName: "header" }] : (
    /* istanbul ignore next */
    []
  ));
  subheader = input(...ngDevMode ? [void 0, { debugName: "subheader" }] : (
    /* istanbul ignore next */
    []
  ));
  headerFacet = contentChild(Header, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerFacet" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  footerFacet = contentChild(Footer, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footerFacet" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  titleTemplate = contentChild("title", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "titleTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  subtitleTemplate = contentChild("subtitle", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "subtitleTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  contentTemplate = contentChild("content", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "contentTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  footerTemplate = contentChild("footer", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  hasHeader = computed(() => !!(this.headerFacet() || this.headerTemplate()), ...ngDevMode ? [{ debugName: "hasHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  hasTitle = computed(() => !!(this.header() || this.titleTemplate()), ...ngDevMode ? [{ debugName: "hasTitle" }] : (
    /* istanbul ignore next */
    []
  ));
  hasSubtitle = computed(() => !!(this.subheader() || this.subtitleTemplate()), ...ngDevMode ? [{ debugName: "hasSubtitle" }] : (
    /* istanbul ignore next */
    []
  ));
  hasFooter = computed(() => !!(this.footerFacet() || this.footerTemplate()), ...ngDevMode ? [{ debugName: "hasFooter" }] : (
    /* istanbul ignore next */
    []
  ));
  showHeaderText = computed(() => this.header() && !this.titleTemplate(), ...ngDevMode ? [{ debugName: "showHeaderText" }] : (
    /* istanbul ignore next */
    []
  ));
  showSubheaderText = computed(() => this.subheader() && !this.subtitleTemplate(), ...ngDevMode ? [{ debugName: "showSubheaderText" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getBlockableElement() {
    return this.el.nativeElement;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Card_BaseFactory = void 0;
    return function Card_Factory(__ngFactoryType__) {
      return (\u0275Card_BaseFactory || (\u0275Card_BaseFactory = i0.\u0275\u0275getInheritedFactory(Card2)))(__ngFactoryType__ || Card2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["header"];
    const _c1 = ["title"];
    const _c2 = ["subtitle"];
    const _c3 = ["content"];
    const _c4 = ["footer"];
    const _c5 = ["*", [["p-header"]], [["p-footer"]]];
    const _c6 = ["*", "p-header", "p-footer"];
    function Card_Conditional_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Card_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275projection(1, 1);
        i0.\u0275\u0275template(2, Card_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("header"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("header"));
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate());
      }
    }
    function Card_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275text(0);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275textInterpolate1(" ", ctx_r0.header(), " ");
      }
    }
    function Card_Conditional_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Card_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275conditionalCreate(1, Card_Conditional_2_Conditional_1_Template, 1, 1);
        i0.\u0275\u0275template(2, Card_Conditional_2_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("title"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("title"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.showHeaderText() ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate());
      }
    }
    function Card_Conditional_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275text(0);
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275textInterpolate1(" ", ctx_r0.subheader(), " ");
      }
    }
    function Card_Conditional_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Card_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275conditionalCreate(1, Card_Conditional_3_Conditional_1_Template, 1, 1);
        i0.\u0275\u0275template(2, Card_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("subtitle"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("subtitle"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r0.showSubheaderText() ? 1 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate());
      }
    }
    function Card_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Card_Conditional_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Card_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 1);
        i0.\u0275\u0275projection(1, 2);
        i0.\u0275\u0275template(2, Card_Conditional_7_ng_container_2_Template, 1, 0, "ng-container", 2);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275classMap(ctx_r0.cx("footer"));
        i0.\u0275\u0275property("pBind", ctx_r0.ptm("footer"));
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate());
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Card2,
      selectors: [["p-card"]],
      contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.headerFacet, Header, 4)(dirIndex, ctx.footerFacet, Footer, 4)(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.titleTemplate, _c1, 4)(dirIndex, ctx.subtitleTemplate, _c2, 4)(dirIndex, ctx.contentTemplate, _c3, 4)(dirIndex, ctx.footerTemplate, _c4, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(7);
        }
      },
      hostVars: 2,
      hostBindings: function Card_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        header: [1, "header"],
        subheader: [1, "subheader"]
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        CardStyle,
        {
          provide: CARD_INSTANCE,
          useExisting: Card2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Card2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c6,
      decls: 8,
      vars: 11,
      consts: [[3, "pBind", "class"], [3, "pBind"], [4, "ngTemplateOutlet"]],
      template: function Card_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef(_c5);
          i0.\u0275\u0275conditionalCreate(0, Card_Conditional_0_Template, 3, 4, "div", 0);
          i0.\u0275\u0275elementStart(1, "div", 1);
          i0.\u0275\u0275conditionalCreate(2, Card_Conditional_2_Template, 3, 5, "div", 0);
          i0.\u0275\u0275conditionalCreate(3, Card_Conditional_3_Template, 3, 5, "div", 0);
          i0.\u0275\u0275elementStart(4, "div", 1);
          i0.\u0275\u0275projection(5);
          i0.\u0275\u0275template(6, Card_ng_container_6_Template, 1, 0, "ng-container", 2);
          i0.\u0275\u0275elementEnd();
          i0.\u0275\u0275conditionalCreate(7, Card_Conditional_7_Template, 3, 4, "div", 0);
          i0.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i0.\u0275\u0275conditional(ctx.hasHeader() ? 0 : -1);
          i0.\u0275\u0275advance();
          i0.\u0275\u0275classMap(ctx.cx("body"));
          i0.\u0275\u0275property("pBind", ctx.ptm("body"));
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.hasTitle() ? 2 : -1);
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.hasSubtitle() ? 3 : -1);
          i0.\u0275\u0275advance();
          i0.\u0275\u0275classMap(ctx.cx("content"));
          i0.\u0275\u0275property("pBind", ctx.ptm("content"));
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate());
          i0.\u0275\u0275advance();
          i0.\u0275\u0275conditional(ctx.hasFooter() ? 7 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, SharedModule, BindModule, i1.Bind],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        SharedModule,
        BindModule
      ],
      template: `
        @if (hasHeader()) {
            <div [pBind]="ptm('header')" [class]="cx('header')">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
            </div>
        }
        <div [pBind]="ptm('body')" [class]="cx('body')">
            @if (hasTitle()) {
                <div [pBind]="ptm('title')" [class]="cx('title')">
                    @if (showHeaderText()) {
                        {{ header() }}
                    }
                    <ng-container *ngTemplateOutlet="titleTemplate()"></ng-container>
                </div>
            }
            @if (hasSubtitle()) {
                <div [pBind]="ptm('subtitle')" [class]="cx('subtitle')">
                    @if (showSubheaderText()) {
                        {{ subheader() }}
                    }
                    <ng-container *ngTemplateOutlet="subtitleTemplate()"></ng-container>
                </div>
            }
            <div [pBind]="ptm('content')" [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate()"></ng-container>
            </div>
            @if (hasFooter()) {
                <div [pBind]="ptm('footer')" [class]="cx('footer')">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                </div>
            }
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        CardStyle,
        {
          provide: CARD_INSTANCE,
          useExisting: Card
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Card
        }
      ],
      host: { "[class]": "cx('root')" },
      hostDirectives: [Bind2]
    }]
  }], null, {
    header: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "header",
        required: false
      }]
    }],
    subheader: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "subheader",
        required: false
      }]
    }],
    headerFacet: [{
      type: i0.ContentChild,
      args: [i0.forwardRef(() => Header), {
        descendants: false,
        isSignal: true
      }]
    }],
    footerFacet: [{
      type: i0.ContentChild,
      args: [i0.forwardRef(() => Footer), {
        descendants: false,
        isSignal: true
      }]
    }],
    headerTemplate: [{
      type: i0.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    titleTemplate: [{
      type: i0.ContentChild,
      args: ["title", {
        descendants: false,
        isSignal: true
      }]
    }],
    subtitleTemplate: [{
      type: i0.ContentChild,
      args: ["subtitle", {
        descendants: false,
        isSignal: true
      }]
    }],
    contentTemplate: [{
      type: i0.ContentChild,
      args: ["content", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i0.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var CardModule = class CardModule2 {
  static \u0275fac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CardModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: CardModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Card, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [
        Card,
        SharedModule,
        BindModule
      ],
      exports: [
        Card,
        SharedModule,
        BindModule
      ]
    }]
  }], null, null);
})();
export {
  Card,
  CardClasses,
  CardModule,
  CardStyle
};
//# sourceMappingURL=primeng_card.g_UxGGQRv4-dev.js.map

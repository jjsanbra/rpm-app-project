if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  CoreIcon,
  ICON_TEMPLATE
} from "@nf-internal/chunk-4VP7SACV";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-paginator.mjs
import { NgTemplateOutlet } from "@angular/common";
import * as i05 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component5, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, inject, input, model, numberAttribute, output, untracked } from "@angular/core";
import * as i2 from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-left.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/angle-double-left.mjs
var e = { name: "angle-double-left", meta: { tags: ["angle-double-left", "fast-return", "left", "back", "previous"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M8.46974 5.96973C8.76263 5.67684 9.2374 5.67684 9.53029 5.96973C9.82313 6.26263 9.82317 6.73741 9.53029 7.03028L6.56056 10L9.53029 12.9698C9.82313 13.2627 9.82317 13.7374 9.53029 14.0303C9.23742 14.3232 8.76264 14.3231 8.46974 14.0303L4.96973 10.5303C4.67684 10.2374 4.67684 9.76264 4.96973 9.46974L8.46974 5.96973ZM13.9698 5.96973C14.2626 5.67684 14.7374 5.67684 15.0303 5.96973C15.3231 6.26263 15.3232 6.73741 15.0303 7.03028L12.0606 10L15.0303 12.9698C15.3231 13.2627 15.3232 13.7374 15.0303 14.0303C14.7374 14.3232 14.2627 14.3231 13.9698 14.0303L10.4697 10.5303C10.1769 10.2374 10.1769 9.76264 10.4697 9.46974L13.9698 5.96973Z", fill: "currentColor", key: "yswbnk" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-left.mjs
var AngleDoubleLeft = class _AngleDoubleLeft extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function AngleDoubleLeft_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngleDoubleLeft)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function AngleDoubleLeft_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleLeft_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, AngleDoubleLeft_For_1_Case_0_Template, 1, 9, ":svg:path")(1, AngleDoubleLeft_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, AngleDoubleLeft_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, AngleDoubleLeft_For_1_Case_3_Template, 1, 7, ":svg:line")(4, AngleDoubleLeft_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, AngleDoubleLeft_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, AngleDoubleLeft_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _AngleDoubleLeft,
      selectors: [["svg", "data-p-icon", "angle-double-left"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function AngleDoubleLeft_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, AngleDoubleLeft_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AngleDoubleLeft, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="angle-double-left"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-right.mjs
import * as i02 from "@angular/core";
import { Component as Component2 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/angle-double-right.mjs
var e2 = { name: "angle-double-right", meta: { tags: ["angle-double-right", "fast-proceed", "right", "next", "forward"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M4.96972 5.96973C5.26262 5.67683 5.73738 5.67683 6.03027 5.96973L9.53028 9.46974C9.82312 9.76264 9.82316 10.2374 9.53028 10.5303L6.03027 14.0303C5.7374 14.3232 5.26262 14.3231 4.96972 14.0303C4.67683 13.7374 4.67683 13.2626 4.96972 12.9698L7.93946 10L4.96972 7.03028C4.67683 6.73738 4.67683 6.26262 4.96972 5.96973ZM10.4697 5.96973C10.7626 5.67683 11.2374 5.67683 11.5303 5.96973L15.0303 9.46974C15.3231 9.76264 15.3232 10.2374 15.0303 10.5303L11.5303 14.0303C11.2374 14.3232 10.7626 14.3231 10.4697 14.0303C10.1768 13.7374 10.1768 13.2626 10.4697 12.9698L13.4395 10L10.4697 7.03028C10.1768 6.73738 10.1768 6.26262 10.4697 5.96973Z", fill: "currentColor", key: "r8emu" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-right.mjs
var AngleDoubleRight = class _AngleDoubleRight extends CoreIcon {
  constructor() {
    super();
    this._icon = e2;
  }
  static \u0275fac = function AngleDoubleRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngleDoubleRight)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function AngleDoubleRight_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleDoubleRight_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, AngleDoubleRight_For_1_Case_0_Template, 1, 9, ":svg:path")(1, AngleDoubleRight_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, AngleDoubleRight_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, AngleDoubleRight_For_1_Case_3_Template, 1, 7, ":svg:line")(4, AngleDoubleRight_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, AngleDoubleRight_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, AngleDoubleRight_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i02.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: _AngleDoubleRight,
      selectors: [["svg", "data-p-icon", "angle-double-right"]],
      features: [i02.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function AngleDoubleRight_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275repeaterCreate(0, AngleDoubleRight_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i02.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AngleDoubleRight, [{
    type: Component2,
    args: [{
      selector: 'svg[data-p-icon="angle-double-right"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-left.mjs
import * as i03 from "@angular/core";
import { Component as Component3 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/angle-left.mjs
var e3 = { name: "angle-left", meta: { tags: ["angle-left", "back", "return", "left", "previous"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M11.2197 5.96973C11.5126 5.67683 11.9874 5.67683 12.2803 5.96973C12.5732 6.26262 12.5732 6.73738 12.2803 7.03027L9.31054 10L12.2803 12.9697C12.5732 13.2626 12.5732 13.7374 12.2803 14.0303C11.9874 14.3232 11.5126 14.3232 11.2197 14.0303L7.71972 10.5303C7.42683 10.2374 7.42683 9.76262 7.71972 9.46973L11.2197 5.96973Z", fill: "currentColor", key: "6ofr4b" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-left.mjs
var AngleLeft = class _AngleLeft extends CoreIcon {
  constructor() {
    super();
    this._icon = e3;
  }
  static \u0275fac = function AngleLeft_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngleLeft)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function AngleLeft_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleLeft_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, AngleLeft_For_1_Case_0_Template, 1, 9, ":svg:path")(1, AngleLeft_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, AngleLeft_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, AngleLeft_For_1_Case_3_Template, 1, 7, ":svg:line")(4, AngleLeft_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, AngleLeft_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, AngleLeft_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i03.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i03.\u0275\u0275defineComponent({
      type: _AngleLeft,
      selectors: [["svg", "data-p-icon", "angle-left"]],
      features: [i03.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function AngleLeft_Template(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275repeaterCreate(0, AngleLeft_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i03.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(AngleLeft, [{
    type: Component3,
    args: [{
      selector: 'svg[data-p-icon="angle-left"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-right.mjs
import * as i04 from "@angular/core";
import { Component as Component4 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/angle-right.mjs
var t = { name: "angle-right", meta: { tags: ["angle-right", "next", "proceed", "right", "forward"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M7.71972 5.96973C8.01262 5.67684 8.48738 5.67684 8.78027 5.96973L12.2803 9.46973C12.5732 9.76262 12.5732 10.2374 12.2803 10.5303L8.78027 14.0303C8.48738 14.3232 8.01262 14.3232 7.71972 14.0303C7.42683 13.7374 7.42683 13.2626 7.71972 12.9697L10.6894 10L7.71972 7.03028C7.42683 6.73738 7.42683 6.26262 7.71972 5.96973Z", fill: "currentColor", key: "gqatxy" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-right.mjs
var AngleRight = class _AngleRight extends CoreIcon {
  constructor() {
    super();
    this._icon = t;
  }
  static \u0275fac = function AngleRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngleRight)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function AngleRight_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function AngleRight_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275conditionalCreate(0, AngleRight_For_1_Case_0_Template, 1, 9, ":svg:path")(1, AngleRight_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, AngleRight_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, AngleRight_For_1_Case_3_Template, 1, 7, ":svg:line")(4, AngleRight_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, AngleRight_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, AngleRight_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i04.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i04.\u0275\u0275defineComponent({
      type: _AngleRight,
      selectors: [["svg", "data-p-icon", "angle-right"]],
      features: [i04.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function AngleRight_Template(rf, ctx) {
        if (rf & 1) {
          i04.\u0275\u0275repeaterCreate(0, AngleRight_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i04.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(AngleRight, [{
    type: Component4,
    args: [{
      selector: 'svg[data-p-icon="angle-right"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-paginator.mjs
import { InputNumber } from "primeng/inputnumber";
import { Ripple } from "primeng/ripple";
import { Select } from "primeng/select";

// node_modules/@primeuix/styles/dist/paginator/index.mjs
var style = "\n    .p-paginator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        background: dt('paginator.background');\n        color: dt('paginator.color');\n        padding: dt('paginator.padding');\n        border-radius: dt('paginator.border.radius');\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content-start {\n        margin-inline-end: auto;\n    }\n\n    .p-paginator-content-end {\n        margin-inline-start: auto;\n    }\n\n    .p-paginator-page,\n    .p-paginator-next,\n    .p-paginator-last,\n    .p-paginator-first,\n    .p-paginator-prev {\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        background: dt('paginator.nav.button.background');\n        border: 0 none;\n        color: dt('paginator.nav.button.color');\n        min-width: dt('paginator.nav.button.width');\n        height: dt('paginator.nav.button.height');\n        font-weight: dt('paginator.nav.button.font.weight');\n        font-size: dt('paginator.nav.button.font.size');\n        transition:\n            background dt('paginator.transition.duration'),\n            color dt('paginator.transition.duration'),\n            outline-color dt('paginator.transition.duration'),\n            box-shadow dt('paginator.transition.duration');\n        border-radius: dt('paginator.nav.button.border.radius');\n        padding: 0;\n        margin: 0;\n    }\n\n    .p-paginator-page:focus-visible,\n    .p-paginator-next:focus-visible,\n    .p-paginator-last:focus-visible,\n    .p-paginator-first:focus-visible,\n    .p-paginator-prev:focus-visible {\n        box-shadow: dt('paginator.nav.button.focus.ring.shadow');\n        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');\n        outline-offset: dt('paginator.nav.button.focus.ring.offset');\n    }\n\n    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,\n    .p-paginator-first:not(.p-disabled):hover,\n    .p-paginator-prev:not(.p-disabled):hover,\n    .p-paginator-next:not(.p-disabled):hover,\n    .p-paginator-last:not(.p-disabled):hover {\n        background: dt('paginator.nav.button.hover.background');\n        color: dt('paginator.nav.button.hover.color');\n    }\n\n    .p-paginator-page.p-paginator-page-selected {\n        background: dt('paginator.nav.button.selected.background');\n        color: dt('paginator.nav.button.selected.color');\n    }\n\n    .p-paginator-current {\n        color: dt('paginator.current.page.report.color');\n        font-weight: dt('paginator.current.page.report.font.weight');\n        font-size: dt('paginator.current.page.report.font.size');\n    }\n\n    .p-paginator-pages {\n        display: flex;\n        align-items: center;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-jtp-input .p-inputtext {\n        max-width: dt('paginator.jump.to.page.input.max.width');\n    }\n\n    .p-paginator-first:dir(rtl),\n    .p-paginator-prev:dir(rtl),\n    .p-paginator-next:dir(rtl),\n    .p-paginator-last:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-paginator.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/paginator";
var classes = {
  paginator: () => ["p-paginator p-component"],
  content: "p-paginator-content",
  contentStart: "p-paginator-content-start",
  contentEnd: "p-paginator-content-end",
  first: ({ instance }) => ["p-paginator-first", { "p-disabled": instance.isFirstPage() || instance.empty() }],
  firstIcon: "p-paginator-first-icon",
  prev: ({ instance }) => ["p-paginator-prev", { "p-disabled": instance.isFirstPage() || instance.empty() }],
  prevIcon: "p-paginator-prev-icon",
  next: ({ instance }) => ["p-paginator-next", { "p-disabled": instance.isLastPage() || instance.empty() }],
  nextIcon: "p-paginator-next-icon",
  last: ({ instance }) => ["p-paginator-last", { "p-disabled": instance.isLastPage() || instance.empty() }],
  lastIcon: "p-paginator-last-icon",
  pages: "p-paginator-pages",
  page: ({ instance, pageLink }) => ["p-paginator-page", { "p-paginator-page-selected": pageLink - 1 == instance.getPage() }],
  current: "p-paginator-current",
  pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
  pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
  pcJumpToPageInput: "p-paginator-jtp-input"
};
var PaginatorStyle = class PaginatorStyle2 extends BaseStyle {
  name = "paginator";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PaginatorStyle_BaseFactory = void 0;
    return function PaginatorStyle_Factory(__ngFactoryType__) {
      return (\u0275PaginatorStyle_BaseFactory || (\u0275PaginatorStyle_BaseFactory = i05.\u0275\u0275getInheritedFactory(PaginatorStyle2)))(__ngFactoryType__ || PaginatorStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i05.\u0275\u0275defineInjectable({
    token: PaginatorStyle2,
    factory: PaginatorStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(PaginatorStyle, [{ type: Injectable }], null, null);
})();
var PaginatorClasses;
(function(PaginatorClasses2) {
  PaginatorClasses2["paginator"] = "p-paginator";
  PaginatorClasses2["contentStart"] = "p-paginator-content-start";
  PaginatorClasses2["contentEnd"] = "p-paginator-content-end";
  PaginatorClasses2["first"] = "p-paginator-first";
  PaginatorClasses2["firstIcon"] = "p-paginator-first-icon";
  PaginatorClasses2["prev"] = "p-paginator-prev";
  PaginatorClasses2["prevIcon"] = "p-paginator-prev-icon";
  PaginatorClasses2["next"] = "p-paginator-next";
  PaginatorClasses2["nextIcon"] = "p-paginator-next-icon";
  PaginatorClasses2["last"] = "p-paginator-last";
  PaginatorClasses2["lastIcon"] = "p-paginator-last-icon";
  PaginatorClasses2["pages"] = "p-paginator-pages";
  PaginatorClasses2["page"] = "p-paginator-page";
  PaginatorClasses2["current"] = "p-paginator-current";
  PaginatorClasses2["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
  PaginatorClasses2["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
  PaginatorClasses2["pcJumpToPageInput"] = "p-paginator-jtp-input";
})(PaginatorClasses || (PaginatorClasses = {}));
var PAGINATOR_INSTANCE = new InjectionToken("PAGINATOR_INSTANCE");
var Paginator = class Paginator2 extends BaseComponent {
  componentName = "Paginator";
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcPaginator = inject(PAGINATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  pageLinkSize = input(5, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pageLinkSize" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  alwaysShow = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "alwaysShow" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  templateLeft = input(...ngDevMode ? [void 0, { debugName: "templateLeft" }] : (
    /* istanbul ignore next */
    []
  ));
  templateRight = input(...ngDevMode ? [void 0, { debugName: "templateRight" }] : (
    /* istanbul ignore next */
    []
  ));
  dropdownScrollHeight = input("200px", ...ngDevMode ? [{ debugName: "dropdownScrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPageReportTemplate = input("{currentPage} of {totalPages}", ...ngDevMode ? [{ debugName: "currentPageReportTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  showCurrentPageReport = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showCurrentPageReport" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showFirstLastIcon = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showFirstLastIcon" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  totalRecords = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "totalRecords" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  rows = model(0, ...ngDevMode ? [{ debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  first = model(0, ...ngDevMode ? [{ debugName: "first" }] : (
    /* istanbul ignore next */
    []
  ));
  rowsPerPageOptions = input(...ngDevMode ? [void 0, { debugName: "rowsPerPageOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  showJumpToPageDropdown = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showJumpToPageDropdown" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showJumpToPageInput = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showJumpToPageInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  jumpToPageItemTemplate = input(...ngDevMode ? [void 0, { debugName: "jumpToPageItemTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  showPageLinks = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showPageLinks" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  locale = input(...ngDevMode ? [void 0, { debugName: "locale" }] : (
    /* istanbul ignore next */
    []
  ));
  dropdownItemTemplate = input(...ngDevMode ? [void 0, { debugName: "dropdownItemTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  onPageChange = output();
  dropdownIconTemplate = contentChild("dropdownicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "dropdownIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  firstPageLinkIconTemplate = contentChild("firstpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "firstPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  previousPageLinkIconTemplate = contentChild("previouspagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "previousPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  lastPageLinkIconTemplate = contentChild("lastpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "lastPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  nextPageLinkIconTemplate = contentChild("nextpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "nextPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  _componentStyle = inject(PaginatorStyle);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  pageLinks = computed(() => {
    const numberOfPages = this.getPageCount();
    const visiblePages = Math.min(this.pageLinkSize(), numberOfPages);
    const page = this.getPage();
    let start = Math.max(0, Math.ceil(page - visiblePages / 2));
    const end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    const delta = this.pageLinkSize() - (end - start + 1);
    start = Math.max(0, start - delta);
    const links = [];
    for (let i = start; i <= end; i++) links.push(i + 1);
    return links;
  }, ...ngDevMode ? [{ debugName: "pageLinks" }] : (
    /* istanbul ignore next */
    []
  ));
  pageItems = computed(() => {
    if (!this.showJumpToPageDropdown()) return [];
    const items = [];
    for (let i = 0; i < this.getPageCount(); i++) items.push({
      label: String(i + 1),
      value: i
    });
    return items;
  }, ...ngDevMode ? [{ debugName: "pageItems" }] : (
    /* istanbul ignore next */
    []
  ));
  rowsPerPageItems = computed(() => {
    const options = this.rowsPerPageOptions();
    if (!options) return [];
    const items = [];
    let showAllItem = null;
    for (const opt of options) if (typeof opt === "object" && opt["showAll"]) showAllItem = {
      label: opt["showAll"],
      value: this.totalRecords()
    };
    else items.push({
      label: String(this.getLocalization(opt)),
      value: opt
    });
    if (showAllItem) items.push(showAllItem);
    return items;
  }, ...ngDevMode ? [{ debugName: "rowsPerPageItems" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatorState = computed(() => ({
    page: this.getPage(),
    pageCount: this.getPageCount(),
    rows: this.rows(),
    first: this.first(),
    totalRecords: this.totalRecords()
  }), ...ngDevMode ? [{ debugName: "paginatorState" }] : (
    /* istanbul ignore next */
    []
  ));
  hostDisplay = computed(() => this.alwaysShow() || this.pageLinks().length > 1 ? null : "none", ...ngDevMode ? [{ debugName: "hostDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      const totalRecords = this.totalRecords();
      untracked(() => {
        const page = this.getPage();
        if (page > 0 && totalRecords && this.first() >= totalRecords) Promise.resolve(null).then(() => this.changePage(page - 1));
      });
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel?.replace(/{page}/g, `${value}`) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale(), { useGrouping: false }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) return String(digit).split("").map((number) => index.get(Number(number))).join("");
    else return index.get(digit);
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords() / this.rows());
  }
  getPage() {
    return Math.floor(this.first() / this.rows());
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate().replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords() > 0 ? this.first() + 1 : 0)).replace("{last}", String(Math.min(this.first() + this.rows(), this.totalRecords()))).replace("{rows}", String(this.rows())).replace("{totalRecords}", String(this.totalRecords()));
  }
  changePage(p) {
    const pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this.first.set(this.rows() * p);
      this.onPageChange.emit({
        page: p,
        first: this.first(),
        rows: this.rows(),
        pageCount: pc
      });
    }
  }
  changePageToFirst(event) {
    if (!this.isFirstPage()) this.changePage(0);
    event.preventDefault();
  }
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }
  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }
  changePageToLast(event) {
    if (!this.isLastPage()) this.changePage(this.getPageCount() - 1);
    event.preventDefault();
  }
  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }
  onRppChange(_event) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event) {
    this.changePage(event.value);
  }
  empty() {
    return this.getPageCount() === 0;
  }
  static \u0275fac = function Paginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Paginator2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["dropdownicon"];
    const _c1 = ["firstpagelinkicon"];
    const _c2 = ["previouspagelinkicon"];
    const _c3 = ["lastpagelinkicon"];
    const _c4 = ["nextpagelinkicon"];
    const _c5 = (a0) => ({
      $implicit: a0
    });
    const _c6 = (a0) => ({
      pageLink: a0
    });
    function Paginator_Conditional_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 13);
        i05.\u0275\u0275template(1, Paginator_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 14);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("contentStart"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("contentStart"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.templateLeft())("ngTemplateOutletContext", i05.\u0275\u0275pureFunction1(5, _c5, ctx_r0.paginatorState()));
      }
    }
    function Paginator_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span", 13);
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("current"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("current"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r0.currentPageReport);
      }
    }
    function Paginator_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 17);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("firstIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("firstIcon"));
      }
    }
    function Paginator_Conditional_2_Conditional_2_1_ng_template_0_Template(rf, ctx) {
    }
    function Paginator_Conditional_2_Conditional_2_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_2_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Paginator_Conditional_2_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span");
        i05.\u0275\u0275template(1, Paginator_Conditional_2_Conditional_2_1_Template, 1, 0, null, 18);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("firstIcon"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.firstPageLinkIconTemplate());
      }
    }
    function Paginator_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 15);
        i05.\u0275\u0275listener("click", function Paginator_Conditional_2_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.changePageToFirst($event));
        });
        i05.\u0275\u0275conditionalCreate(1, Paginator_Conditional_2_Conditional_1_Template, 1, 3, ":svg:svg", 16)(2, Paginator_Conditional_2_Conditional_2_Template, 2, 3, "span", 7);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("first"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("first"));
        i05.\u0275\u0275attribute("aria-label", ctx_r0.getAriaLabel("firstPageLabel"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r0.firstPageLinkIconTemplate() ? 1 : 2);
      }
    }
    function Paginator_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 19);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("prevIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("prevIcon"));
      }
    }
    function Paginator_Conditional_5_1_ng_template_0_Template(rf, ctx) {
    }
    function Paginator_Conditional_5_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_5_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Paginator_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span");
        i05.\u0275\u0275template(1, Paginator_Conditional_5_1_Template, 1, 0, null, 18);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("prevIcon"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.previousPageLinkIconTemplate());
      }
    }
    function Paginator_Conditional_6_For_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 15);
        i05.\u0275\u0275listener("click", function Paginator_Conditional_6_For_2_Template_button_click_0_listener($event) {
          const pageLink_r4 = i05.\u0275\u0275restoreView(_r3).$implicit;
          const ctx_r0 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r0.onPageLinkClick($event, pageLink_r4 - 1));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const pageLink_r4 = ctx.$implicit;
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("page", i05.\u0275\u0275pureFunction1(6, _c6, pageLink_r4)));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("page"));
        i05.\u0275\u0275attribute("aria-label", ctx_r0.getPageAriaLabel(pageLink_r4))("aria-current", pageLink_r4 - 1 === ctx_r0.getPage() ? "page" : void 0);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r0.getLocalization(pageLink_r4), " ");
      }
    }
    function Paginator_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span", 13);
        i05.\u0275\u0275repeaterCreate(1, Paginator_Conditional_6_For_2_Template, 2, 8, "button", 4, i05.\u0275\u0275repeaterTrackByIndex);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("pages"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("pages"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r0.pageLinks());
      }
    }
    function Paginator_Conditional_7_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275text(0);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275textInterpolate(ctx_r0.currentPageReport);
      }
    }
    function Paginator_Conditional_7_Conditional_3_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_7_Conditional_3_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_7_Conditional_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 14);
      }
      if (rf & 2) {
        const item_r6 = ctx.$implicit;
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.jumpToPageItemTemplate())("ngTemplateOutletContext", i05.\u0275\u0275pureFunction1(2, _c5, item_r6));
      }
    }
    function Paginator_Conditional_7_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_7_Conditional_3_ng_template_0_Template, 1, 4, "ng-template", null, 1, i05.\u0275\u0275templateRefExtractor);
      }
    }
    function Paginator_Conditional_7_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_7_Conditional_4_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_7_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 18);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.dropdownIconTemplate());
      }
    }
    function Paginator_Conditional_7_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_7_Conditional_4_ng_template_0_Template, 1, 1, "ng-template", null, 2, i05.\u0275\u0275templateRefExtractor);
      }
    }
    function Paginator_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "p-select", 20);
        i05.\u0275\u0275controlCreate();
        i05.\u0275\u0275listener("onChange", function Paginator_Conditional_7_Template_p_select_onChange_0_listener($event) {
          i05.\u0275\u0275restoreView(_r5);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.onPageDropdownChange($event));
        });
        i05.\u0275\u0275template(1, Paginator_Conditional_7_ng_template_1_Template, 1, 1, "ng-template", null, 0, i05.\u0275\u0275templateRefExtractor);
        i05.\u0275\u0275conditionalCreate(3, Paginator_Conditional_7_Conditional_3_Template, 2, 0);
        i05.\u0275\u0275conditionalCreate(4, Paginator_Conditional_7_Conditional_4_Template, 2, 0);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("pcJumpToPageDropdown"));
        i05.\u0275\u0275property("options", ctx_r0.pageItems())("ngModel", ctx_r0.getPage())("disabled", ctx_r0.empty())("appendTo", ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight())("pt", ctx_r0.ptm("pcJumpToPageDropdown"))("unstyled", ctx_r0.unstyled());
        i05.\u0275\u0275attribute("aria-label", ctx_r0.getAriaLabel("jumpToPageDropdownLabel"));
        i05.\u0275\u0275control();
        i05.\u0275\u0275advance(3);
        i05.\u0275\u0275conditional(ctx_r0.jumpToPageItemTemplate() ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.dropdownIconTemplate() ? 4 : -1);
      }
    }
    function Paginator_Conditional_9_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 21);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("nextIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("nextIcon"));
      }
    }
    function Paginator_Conditional_10_1_ng_template_0_Template(rf, ctx) {
    }
    function Paginator_Conditional_10_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_10_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Paginator_Conditional_10_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span");
        i05.\u0275\u0275template(1, Paginator_Conditional_10_1_Template, 1, 0, null, 18);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("nextIcon"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.nextPageLinkIconTemplate());
      }
    }
    function Paginator_Conditional_11_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 23);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("lastIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("lastIcon"));
      }
    }
    function Paginator_Conditional_11_Conditional_2_1_ng_template_0_Template(rf, ctx) {
    }
    function Paginator_Conditional_11_Conditional_2_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_11_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Paginator_Conditional_11_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span");
        i05.\u0275\u0275template(1, Paginator_Conditional_11_Conditional_2_1_Template, 1, 0, null, 18);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("lastIcon"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.lastPageLinkIconTemplate());
      }
    }
    function Paginator_Conditional_11_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 5);
        i05.\u0275\u0275listener("click", function Paginator_Conditional_11_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r7);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.changePageToLast($event));
        });
        i05.\u0275\u0275conditionalCreate(1, Paginator_Conditional_11_Conditional_1_Template, 1, 3, ":svg:svg", 22)(2, Paginator_Conditional_11_Conditional_2_Template, 2, 3, "span", 7);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("last"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("last"))("disabled", ctx_r0.isLastPage() || ctx_r0.empty());
        i05.\u0275\u0275attribute("aria-label", ctx_r0.getAriaLabel("lastPageLabel"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r0.lastPageLinkIconTemplate() ? 1 : 2);
      }
    }
    function Paginator_Conditional_12_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "p-inputnumber", 24);
        i05.\u0275\u0275controlCreate();
        i05.\u0275\u0275listener("ngModelChange", function Paginator_Conditional_12_Template_p_inputnumber_ngModelChange_0_listener($event) {
          i05.\u0275\u0275restoreView(_r8);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.changePage($event - 1));
        });
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("pcJumpToPageInput"));
        i05.\u0275\u0275property("pt", ctx_r0.ptm("pcJumpToPageInput"))("ngModel", ctx_r0.currentPage())("disabled", ctx_r0.empty())("unstyled", ctx_r0.unstyled());
        i05.\u0275\u0275control();
      }
    }
    function Paginator_Conditional_13_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_13_Conditional_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_13_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 14);
      }
      if (rf & 2) {
        const item_r10 = ctx.$implicit;
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.dropdownItemTemplate())("ngTemplateOutletContext", i05.\u0275\u0275pureFunction1(2, _c5, item_r10));
      }
    }
    function Paginator_Conditional_13_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_13_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", null, 1, i05.\u0275\u0275templateRefExtractor);
      }
    }
    function Paginator_Conditional_13_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_13_Conditional_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_13_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 18);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.dropdownIconTemplate());
      }
    }
    function Paginator_Conditional_13_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, Paginator_Conditional_13_Conditional_2_ng_template_0_Template, 1, 1, "ng-template", null, 2, i05.\u0275\u0275templateRefExtractor);
      }
    }
    function Paginator_Conditional_13_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "p-select", 25);
        i05.\u0275\u0275controlCreate();
        i05.\u0275\u0275listener("ngModelChange", function Paginator_Conditional_13_Template_p_select_ngModelChange_0_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.rows.set($event));
        })("onChange", function Paginator_Conditional_13_Template_p_select_onChange_0_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r0 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r0.onRppChange($event));
        });
        i05.\u0275\u0275conditionalCreate(1, Paginator_Conditional_13_Conditional_1_Template, 2, 0);
        i05.\u0275\u0275conditionalCreate(2, Paginator_Conditional_13_Conditional_2_Template, 2, 0);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("pcRowPerPageDropdown"));
        i05.\u0275\u0275property("options", ctx_r0.rowsPerPageItems())("ngModel", ctx_r0.rows())("disabled", ctx_r0.empty())("appendTo", ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight())("ariaLabel", ctx_r0.getAriaLabel("rowsPerPageLabel"))("pt", ctx_r0.ptm("pcRowPerPageDropdown"))("unstyled", ctx_r0.unstyled());
        i05.\u0275\u0275control();
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.dropdownItemTemplate() ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.dropdownIconTemplate() ? 2 : -1);
      }
    }
    function Paginator_Conditional_14_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function Paginator_Conditional_14_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 13);
        i05.\u0275\u0275template(1, Paginator_Conditional_14_ng_container_1_Template, 1, 0, "ng-container", 14);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cx("contentEnd"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("contentEnd"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.templateRight())("ngTemplateOutletContext", i05.\u0275\u0275pureFunction1(5, _c5, ctx_r0.paginatorState()));
      }
    }
    return /* @__PURE__ */ i05.\u0275\u0275defineComponent({
      type: Paginator2,
      selectors: [["p-paginator"]],
      contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i05.\u0275\u0275contentQuerySignal(dirIndex, ctx.dropdownIconTemplate, _c0, 4)(dirIndex, ctx.firstPageLinkIconTemplate, _c1, 4)(dirIndex, ctx.previousPageLinkIconTemplate, _c2, 4)(dirIndex, ctx.lastPageLinkIconTemplate, _c3, 4)(dirIndex, ctx.nextPageLinkIconTemplate, _c4, 4);
        }
        if (rf & 2) {
          i05.\u0275\u0275queryAdvance(5);
        }
      },
      hostVars: 4,
      hostBindings: function Paginator_HostBindings(rf, ctx) {
        if (rf & 2) {
          i05.\u0275\u0275classMap(ctx.cx("paginator"));
          i05.\u0275\u0275styleProp("display", ctx.hostDisplay());
        }
      },
      inputs: {
        pageLinkSize: [1, "pageLinkSize"],
        alwaysShow: [1, "alwaysShow"],
        templateLeft: [1, "templateLeft"],
        templateRight: [1, "templateRight"],
        dropdownScrollHeight: [1, "dropdownScrollHeight"],
        currentPageReportTemplate: [1, "currentPageReportTemplate"],
        showCurrentPageReport: [1, "showCurrentPageReport"],
        showFirstLastIcon: [1, "showFirstLastIcon"],
        totalRecords: [1, "totalRecords"],
        rows: [1, "rows"],
        first: [1, "first"],
        rowsPerPageOptions: [1, "rowsPerPageOptions"],
        showJumpToPageDropdown: [1, "showJumpToPageDropdown"],
        showJumpToPageInput: [1, "showJumpToPageInput"],
        jumpToPageItemTemplate: [1, "jumpToPageItemTemplate"],
        showPageLinks: [1, "showPageLinks"],
        locale: [1, "locale"],
        dropdownItemTemplate: [1, "dropdownItemTemplate"],
        appendTo: [1, "appendTo"]
      },
      outputs: {
        rows: "rowsChange",
        first: "firstChange",
        onPageChange: "onPageChange"
      },
      features: [i05.\u0275\u0275ProvidersFeature([
        PaginatorStyle,
        {
          provide: PAGINATOR_INSTANCE,
          useExisting: Paginator2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Paginator2
        }
      ]), i05.\u0275\u0275HostDirectivesFeature([i1.Bind]), i05.\u0275\u0275InheritDefinitionFeature],
      decls: 15,
      vars: 21,
      consts: [["selectedItem", ""], ["item", ""], ["dropdownicon", ""], [3, "pBind", "class"], ["type", "button", "pRipple", "", 3, "pBind", "class"], ["type", "button", "pRipple", "", 3, "click", "pBind", "disabled"], ["data-p-icon", "angle-left", 3, "pBind", "class"], [3, "class"], [3, "options", "ngModel", "disabled", "class", "appendTo", "scrollHeight", "pt", "unstyled"], ["data-p-icon", "angle-right", 3, "pBind", "class"], ["type", "button", "pRipple", "", 3, "pBind", "disabled", "class"], [3, "pt", "ngModel", "class", "disabled", "unstyled"], [3, "options", "ngModel", "class", "disabled", "appendTo", "scrollHeight", "ariaLabel", "pt", "unstyled"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "pRipple", "", 3, "click", "pBind"], ["data-p-icon", "angle-double-left", 3, "pBind", "class"], ["data-p-icon", "angle-double-left", 3, "pBind"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-left", 3, "pBind"], [3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "pt", "unstyled"], ["data-p-icon", "angle-right", 3, "pBind"], ["data-p-icon", "angle-double-right", 3, "pBind", "class"], ["data-p-icon", "angle-double-right", 3, "pBind"], [3, "ngModelChange", "pt", "ngModel", "disabled", "unstyled"], [3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "pt", "unstyled"]],
      template: function Paginator_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275conditionalCreate(0, Paginator_Conditional_0_Template, 2, 7, "div", 3);
          i05.\u0275\u0275conditionalCreate(1, Paginator_Conditional_1_Template, 2, 4, "span", 3);
          i05.\u0275\u0275conditionalCreate(2, Paginator_Conditional_2_Template, 3, 5, "button", 4);
          i05.\u0275\u0275elementStart(3, "button", 5);
          i05.\u0275\u0275listener("click", function Paginator_Template_button_click_3_listener($event) {
            return ctx.changePageToPrev($event);
          });
          i05.\u0275\u0275conditionalCreate(4, Paginator_Conditional_4_Template, 1, 3, ":svg:svg", 6)(5, Paginator_Conditional_5_Template, 2, 3, "span", 7);
          i05.\u0275\u0275elementEnd();
          i05.\u0275\u0275conditionalCreate(6, Paginator_Conditional_6_Template, 3, 3, "span", 3);
          i05.\u0275\u0275conditionalCreate(7, Paginator_Conditional_7_Template, 5, 12, "p-select", 8);
          i05.\u0275\u0275elementStart(8, "button", 5);
          i05.\u0275\u0275listener("click", function Paginator_Template_button_click_8_listener($event) {
            return ctx.changePageToNext($event);
          });
          i05.\u0275\u0275conditionalCreate(9, Paginator_Conditional_9_Template, 1, 3, ":svg:svg", 9)(10, Paginator_Conditional_10_Template, 2, 3, "span", 7);
          i05.\u0275\u0275elementEnd();
          i05.\u0275\u0275conditionalCreate(11, Paginator_Conditional_11_Template, 3, 6, "button", 10);
          i05.\u0275\u0275conditionalCreate(12, Paginator_Conditional_12_Template, 1, 6, "p-inputnumber", 11);
          i05.\u0275\u0275conditionalCreate(13, Paginator_Conditional_13_Template, 3, 12, "p-select", 12);
          i05.\u0275\u0275conditionalCreate(14, Paginator_Conditional_14_Template, 2, 7, "div", 3);
        }
        if (rf & 2) {
          i05.\u0275\u0275conditional(ctx.templateLeft() ? 0 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.showCurrentPageReport() ? 1 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.showFirstLastIcon() ? 2 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275classMap(ctx.cx("prev"));
          i05.\u0275\u0275property("pBind", ctx.ptm("prev"))("disabled", ctx.isFirstPage() || ctx.empty());
          i05.\u0275\u0275attribute("aria-label", ctx.getAriaLabel("prevPageLabel"));
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(!ctx.previousPageLinkIconTemplate() ? 4 : 5);
          i05.\u0275\u0275advance(2);
          i05.\u0275\u0275conditional(ctx.showPageLinks() ? 6 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.showJumpToPageDropdown() ? 7 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275classMap(ctx.cx("next"));
          i05.\u0275\u0275property("pBind", ctx.ptm("next"))("disabled", ctx.isLastPage() || ctx.empty());
          i05.\u0275\u0275attribute("aria-label", ctx.getAriaLabel("nextPageLabel"));
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(!ctx.nextPageLinkIconTemplate() ? 9 : 10);
          i05.\u0275\u0275advance(2);
          i05.\u0275\u0275conditional(ctx.showFirstLastIcon() ? 11 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.showJumpToPageInput() ? 12 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.rowsPerPageOptions() ? 13 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.templateRight() ? 14 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, Select, InputNumber, FormsModule, i2.NgControlStatus, i2.NgModel, Ripple, AngleDoubleLeft, AngleDoubleRight, AngleLeft, AngleRight, Bind2],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(Paginator, [{
    type: Component5,
    args: [{
      selector: "p-paginator",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        Select,
        InputNumber,
        FormsModule,
        Ripple,
        AngleDoubleLeft,
        AngleDoubleRight,
        AngleLeft,
        AngleRight,
        Bind2
      ],
      template: `
        @if (templateLeft()) {
            <div [pBind]="ptm('contentStart')" [class]="cx('contentStart')">
                <ng-container *ngTemplateOutlet="templateLeft()!; context: { $implicit: paginatorState() }"></ng-container>
            </div>
        }
        @if (showCurrentPageReport()) {
            <span [pBind]="ptm('current')" [class]="cx('current')">{{ currentPageReport }}</span>
        }
        @if (showFirstLastIcon()) {
            <button [pBind]="ptm('first')" type="button" (click)="changePageToFirst($event)" pRipple [class]="cx('first')" [attr.aria-label]="getAriaLabel('firstPageLabel')">
                @if (!firstPageLinkIconTemplate()) {
                    <svg [pBind]="ptm('firstIcon')" data-p-icon="angle-double-left" [class]="cx('firstIcon')" />
                } @else {
                    <span [class]="cx('firstIcon')">
                        <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate()!"></ng-template>
                    </span>
                }
            </button>
        }
        <button [pBind]="ptm('prev')" type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple [class]="cx('prev')" [attr.aria-label]="getAriaLabel('prevPageLabel')">
            @if (!previousPageLinkIconTemplate()) {
                <svg [pBind]="ptm('prevIcon')" data-p-icon="angle-left" [class]="cx('prevIcon')" />
            } @else {
                <span [class]="cx('prevIcon')">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate()!"></ng-template>
                </span>
            }
        </button>
        @if (showPageLinks()) {
            <span [pBind]="ptm('pages')" [class]="cx('pages')">
                @for (pageLink of pageLinks(); track $index) {
                    <button
                        [pBind]="ptm('page')"
                        type="button"
                        [class]="cx('page', { pageLink })"
                        [attr.aria-label]="getPageAriaLabel(pageLink)"
                        [attr.aria-current]="pageLink - 1 === getPage() ? 'page' : undefined"
                        (click)="onPageLinkClick($event, pageLink - 1)"
                        pRipple
                    >
                        {{ getLocalization(pageLink) }}
                    </button>
                }
            </span>
        }
        @if (showJumpToPageDropdown()) {
            <p-select
                [options]="pageItems()"
                [ngModel]="getPage()"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                [class]="cx('pcJumpToPageDropdown')"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="$appendTo()"
                [scrollHeight]="dropdownScrollHeight()"
                [pt]="ptm('pcJumpToPageDropdown')"
                [unstyled]="unstyled()"
            >
                <ng-template #selectedItem>{{ currentPageReport }}</ng-template>
                @if (jumpToPageItemTemplate()) {
                    <ng-template #item let-item>
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate()!; context: { $implicit: item }"></ng-container>
                    </ng-template>
                }
                @if (dropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="dropdownIconTemplate()!"></ng-container>
                    </ng-template>
                }
            </p-select>
        }
        <button [pBind]="ptm('next')" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple [class]="cx('next')" [attr.aria-label]="getAriaLabel('nextPageLabel')">
            @if (!nextPageLinkIconTemplate()) {
                <svg [pBind]="ptm('nextIcon')" data-p-icon="angle-right" [class]="cx('nextIcon')" />
            } @else {
                <span [class]="cx('nextIcon')">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate()!"></ng-template>
                </span>
            }
        </button>
        @if (showFirstLastIcon()) {
            <button [pBind]="ptm('last')" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToLast($event)" pRipple [class]="cx('last')" [attr.aria-label]="getAriaLabel('lastPageLabel')">
                @if (!lastPageLinkIconTemplate()) {
                    <svg [pBind]="ptm('lastIcon')" data-p-icon="angle-double-right" [class]="cx('lastIcon')" />
                } @else {
                    <span [class]="cx('lastIcon')">
                        <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate()!"></ng-template>
                    </span>
                }
            </button>
        }
        @if (showJumpToPageInput()) {
            <p-inputnumber [pt]="ptm('pcJumpToPageInput')" [ngModel]="currentPage()" [class]="cx('pcJumpToPageInput')" [disabled]="empty()" (ngModelChange)="changePage($event - 1)" [unstyled]="unstyled()" />
        }
        @if (rowsPerPageOptions()) {
            <p-select
                [options]="rowsPerPageItems()"
                [ngModel]="rows()"
                (ngModelChange)="rows.set($event)"
                [class]="cx('pcRowPerPageDropdown')"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="$appendTo()"
                [scrollHeight]="dropdownScrollHeight()"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
                [pt]="ptm('pcRowPerPageDropdown')"
                [unstyled]="unstyled()"
            >
                @if (dropdownItemTemplate()) {
                    <ng-template #item let-item>
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate()!; context: { $implicit: item }"></ng-container>
                    </ng-template>
                }
                @if (dropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="dropdownIconTemplate()!"></ng-container>
                    </ng-template>
                }
            </p-select>
        }
        @if (templateRight()) {
            <div [pBind]="ptm('contentEnd')" [class]="cx('contentEnd')">
                <ng-container *ngTemplateOutlet="templateRight()!; context: { $implicit: paginatorState() }"></ng-container>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        PaginatorStyle,
        {
          provide: PAGINATOR_INSTANCE,
          useExisting: Paginator
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Paginator
        }
      ],
      host: {
        "[class]": "cx('paginator')",
        "[style.display]": "hostDisplay()"
      },
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    pageLinkSize: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "pageLinkSize",
        required: false
      }]
    }],
    alwaysShow: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "alwaysShow",
        required: false
      }]
    }],
    templateLeft: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "templateLeft",
        required: false
      }]
    }],
    templateRight: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "templateRight",
        required: false
      }]
    }],
    dropdownScrollHeight: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "dropdownScrollHeight",
        required: false
      }]
    }],
    currentPageReportTemplate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "currentPageReportTemplate",
        required: false
      }]
    }],
    showCurrentPageReport: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showCurrentPageReport",
        required: false
      }]
    }],
    showFirstLastIcon: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showFirstLastIcon",
        required: false
      }]
    }],
    totalRecords: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "totalRecords",
        required: false
      }]
    }],
    rows: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "rows",
        required: false
      }]
    }, {
      type: i05.Output,
      args: ["rowsChange"]
    }],
    first: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "first",
        required: false
      }]
    }, {
      type: i05.Output,
      args: ["firstChange"]
    }],
    rowsPerPageOptions: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "rowsPerPageOptions",
        required: false
      }]
    }],
    showJumpToPageDropdown: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showJumpToPageDropdown",
        required: false
      }]
    }],
    showJumpToPageInput: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showJumpToPageInput",
        required: false
      }]
    }],
    jumpToPageItemTemplate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "jumpToPageItemTemplate",
        required: false
      }]
    }],
    showPageLinks: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showPageLinks",
        required: false
      }]
    }],
    locale: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "locale",
        required: false
      }]
    }],
    dropdownItemTemplate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "dropdownItemTemplate",
        required: false
      }]
    }],
    appendTo: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    onPageChange: [{
      type: i05.Output,
      args: ["onPageChange"]
    }],
    dropdownIconTemplate: [{
      type: i05.ContentChild,
      args: ["dropdownicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    firstPageLinkIconTemplate: [{
      type: i05.ContentChild,
      args: ["firstpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    previousPageLinkIconTemplate: [{
      type: i05.ContentChild,
      args: ["previouspagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    lastPageLinkIconTemplate: [{
      type: i05.ContentChild,
      args: ["lastpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    nextPageLinkIconTemplate: [{
      type: i05.ContentChild,
      args: ["nextpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var PaginatorModule = class PaginatorModule2 {
  static \u0275fac = function PaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaginatorModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i05.\u0275\u0275defineNgModule({
    type: PaginatorModule2
  });
  static \u0275inj = /* @__PURE__ */ i05.\u0275\u0275defineInjector({
    imports: [Paginator]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [Paginator],
      exports: [Paginator]
    }]
  }], null, null);
})();
export {
  Paginator,
  PaginatorClasses,
  PaginatorModule,
  PaginatorStyle
};
//# sourceMappingURL=primeng_paginator.dvkrwHepsl-dev.js.map

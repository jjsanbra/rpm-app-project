if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  ChevronDown
} from "@nf-internal/chunk-PFGEKU6Q";
import {
  Times
} from "@nf-internal/chunk-TS3TQKAB";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "@nf-internal/chunk-4VP7SACV";
import {
  s
} from "@nf-internal/chunk-NR2L6APS";
import {
  $t,
  C,
  G,
  I as I2,
  L,
  R,
  St,
  ce,
  et,
  re,
  tt,
  x,
  z
} from "@nf-internal/chunk-SU6R4COE";
import {
  I,
  l
} from "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
import { NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
import * as i05 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component5, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, forwardRef, inject, input, numberAttribute, output, signal, untracked, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-calendar.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/calendar.mjs
var e = { name: "calendar", meta: { tags: ["calendar", "date", "event", "schedule", "day"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V2.25H15C16.5188 2.25 17.75 3.48122 17.75 5V16C17.75 17.5188 16.5188 18.75 15 18.75H5C3.48122 18.75 2.25 17.5188 2.25 16V5C2.25 3.48122 3.48122 2.25 5 2.25H6.25V1C6.25 0.585786 6.58579 0.25 7 0.25C7.41421 0.25 7.75 0.585786 7.75 1V2.25H12.25V1C12.25 0.585786 12.5858 0.25 13 0.25ZM3.75 16C3.75 16.6904 4.30964 17.25 5 17.25H15C15.6904 17.25 16.25 16.6904 16.25 16V9.25H3.75V16ZM5 3.75C4.30964 3.75 3.75 4.30964 3.75 5V7.75H16.25V5C16.25 4.30964 15.6904 3.75 15 3.75H13.75V5C13.75 5.41421 13.4142 5.75 13 5.75C12.5858 5.75 12.25 5.41421 12.25 5V3.75H7.75V5C7.75 5.41421 7.41421 5.75 7 5.75C6.58579 5.75 6.25 5.41421 6.25 5V3.75H5Z", fill: "currentColor", key: "q4dzz" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-calendar.mjs
var Calendar = class _Calendar extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function Calendar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Calendar)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Calendar_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Calendar_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Calendar_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Calendar_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Calendar_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Calendar_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Calendar_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Calendar_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Calendar_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _Calendar,
      selectors: [["svg", "data-p-icon", "calendar"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Calendar_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, Calendar_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Calendar, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="calendar"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-left.mjs
import * as i02 from "@angular/core";
import { Component as Component2 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/chevron-left.mjs
var e2 = { name: "chevron-left", meta: { tags: ["chevron-left", "backward", "previous", "return", "left"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M11.9697 4.46973C12.2626 4.17684 12.7374 4.17684 13.0303 4.46973C13.3232 4.76262 13.3232 5.23738 13.0303 5.53028L8.56055 10L13.0303 14.4697C13.3232 14.7626 13.3232 15.2374 13.0303 15.5303C12.7374 15.8232 12.2626 15.8232 11.9697 15.5303L6.96973 10.5303C6.67684 10.2374 6.67684 9.76262 6.96973 9.46973L11.9697 4.46973Z", fill: "currentColor", key: "es7c15" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-left.mjs
var ChevronLeft = class _ChevronLeft extends CoreIcon {
  constructor() {
    super();
    this._icon = e2;
  }
  static \u0275fac = function ChevronLeft_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChevronLeft)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ChevronLeft_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronLeft_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, ChevronLeft_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ChevronLeft_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ChevronLeft_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ChevronLeft_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ChevronLeft_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ChevronLeft_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ChevronLeft_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i02.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: _ChevronLeft,
      selectors: [["svg", "data-p-icon", "chevron-left"]],
      features: [i02.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ChevronLeft_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275repeaterCreate(0, ChevronLeft_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(ChevronLeft, [{
    type: Component2,
    args: [{
      selector: 'svg[data-p-icon="chevron-left"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-right.mjs
import * as i03 from "@angular/core";
import { Component as Component3 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/chevron-right.mjs
var t = { name: "chevron-right", meta: { tags: ["chevron-right", "forward", "next", "right", "proceed"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6.96973 4.46972C7.26262 4.17683 7.73738 4.17683 8.03028 4.46972L13.0303 9.46972C13.3232 9.76262 13.3232 10.2374 13.0303 10.5303L8.03028 15.5303C7.73738 15.8232 7.26262 15.8232 6.96973 15.5303C6.67684 15.2374 6.67684 14.7626 6.96973 14.4697L11.4395 10L6.96973 5.53027C6.67684 5.23738 6.67684 4.76262 6.96973 4.46972Z", fill: "currentColor", key: "cn504p" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-right.mjs
var ChevronRight = class _ChevronRight extends CoreIcon {
  constructor() {
    super();
    this._icon = t;
  }
  static \u0275fac = function ChevronRight_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChevronRight)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ChevronRight_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronRight_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, ChevronRight_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ChevronRight_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ChevronRight_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ChevronRight_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ChevronRight_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ChevronRight_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ChevronRight_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i03.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i03.\u0275\u0275defineComponent({
      type: _ChevronRight,
      selectors: [["svg", "data-p-icon", "chevron-right"]],
      features: [i03.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ChevronRight_Template(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275repeaterCreate(0, ChevronRight_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(ChevronRight, [{
    type: Component3,
    args: [{
      selector: 'svg[data-p-icon="chevron-right"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-up.mjs
import * as i04 from "@angular/core";
import { Component as Component4 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/chevron-up.mjs
var e3 = { name: "chevron-up", meta: { tags: ["chevron-up", "up", "increase", "rise", "elevate"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M9.52637 6.91797C9.82095 6.67766 10.2557 6.69513 10.5303 6.96973L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L10 8.56055L5.53028 13.0303C5.23738 13.3232 4.76262 13.3232 4.46973 13.0303C4.17684 12.7374 4.17684 12.2626 4.46973 11.9697L9.46973 6.96973L9.52637 6.91797Z", fill: "currentColor", key: "ygb8i5" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-up.mjs
var ChevronUp = class _ChevronUp extends CoreIcon {
  constructor() {
    super();
    this._icon = e3;
  }
  static \u0275fac = function ChevronUp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChevronUp)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ChevronUp_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ChevronUp_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275conditionalCreate(0, ChevronUp_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ChevronUp_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ChevronUp_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ChevronUp_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ChevronUp_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ChevronUp_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ChevronUp_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i04.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i04.\u0275\u0275defineComponent({
      type: _ChevronUp,
      selectors: [["svg", "data-p-icon", "chevron-up"]],
      features: [i04.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ChevronUp_Template(rf, ctx) {
        if (rf & 1) {
          i04.\u0275\u0275repeaterCreate(0, ChevronUp_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(ChevronUp, [{
    type: Component4,
    args: [{
      selector: 'svg[data-p-icon="chevron-up"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
import { OverlayService, SharedModule, TranslationKeys } from "primeng/api";
import { AutoFocus } from "primeng/autofocus";
import { PARENT_INSTANCE } from "primeng/basecomponent";
import { BaseInput } from "primeng/baseinput";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";
import { ButtonDirective } from "primeng/button";
import { ConnectedOverlayScrollHandler, blockBodyScroll, unblockBodyScroll } from "primeng/dom";
import { InputText } from "primeng/inputtext";
import * as i2 from "primeng/motion";
import { MotionModule } from "primeng/motion";
import { Ripple } from "primeng/ripple";
import { ZIndexUtils } from "primeng/utils";

// node_modules/@primeuix/styles/dist/datepicker/index.mjs
var style = "\n    .p-datepicker {\n        display: inline-flex;\n        max-width: 100%;\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-datepicker-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datepicker-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.dropdown.width');\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n        background: dt('datepicker.dropdown.background');\n        border: 1px solid dt('datepicker.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('datepicker.dropdown.color');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-datepicker-dropdown:not(:disabled):hover {\n        background: dt('datepicker.dropdown.hover.background');\n        border-color: dt('datepicker.dropdown.hover.border.color');\n        color: dt('datepicker.dropdown.hover.color');\n    }\n\n    .p-datepicker-dropdown:not(:disabled):active {\n        background: dt('datepicker.dropdown.active.background');\n        border-color: dt('datepicker.dropdown.active.border.color');\n        color: dt('datepicker.dropdown.active.color');\n    }\n\n    .p-datepicker-dropdown:focus-visible {\n        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');\n        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');\n        outline-offset: dt('datepicker.dropdown.focus.ring.offset');\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) {\n        position: relative;\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker-input-icon-container {\n        cursor: pointer;\n        position: absolute;\n        top: 50%;\n        inset-inline-end: dt('form.field.padding.x');\n        margin-block-start: calc(-1 * (dt('icon.size') / 2));\n        color: dt('datepicker.input.icon.color');\n        line-height: 1;\n        z-index: 1;\n    }\n\n    .p-datepicker:has(.p-datepicker-input:disabled) .p-datepicker-input-icon-container {\n        cursor: default;\n    }\n\n    .p-datepicker-fluid {\n        display: flex;\n    }\n\n    .p-datepicker .p-datepicker-panel {\n        min-width: 100%;\n    }\n\n    .p-datepicker-panel {\n        width: auto;\n        padding: dt('datepicker.panel.padding');\n        background: dt('datepicker.panel.background');\n        color: dt('datepicker.panel.color');\n        border: 1px solid dt('datepicker.panel.border.color');\n        border-radius: dt('datepicker.panel.border.radius');\n        box-shadow: dt('datepicker.panel.shadow');\n    }\n\n    .p-datepicker-panel-inline {\n        display: inline-block;\n        overflow-x: auto;\n        box-shadow: none;\n    }\n\n    .p-datepicker-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('datepicker.header.padding');\n        background: dt('datepicker.header.background');\n        color: dt('datepicker.header.color');\n        border-block-end: 1px solid dt('datepicker.header.border.color');\n    }\n\n    .p-datepicker-next-button:dir(rtl) {\n        order: -1;\n    }\n\n    .p-datepicker-prev-button:dir(rtl) {\n        order: 1;\n    }\n\n    .p-datepicker-title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: dt('datepicker.title.gap');\n        font-weight: dt('datepicker.title.font.weight');\n        font-size: dt('datepicker.title.font.size');\n    }\n\n    .p-datepicker-select-year,\n    .p-datepicker-select-month {\n        border: none;\n        background: transparent;\n        margin: 0;\n        cursor: pointer;\n        font-weight: inherit;\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration');\n    }\n\n    .p-datepicker-select-month {\n        padding: dt('datepicker.select.month.padding');\n        color: dt('datepicker.select.month.color');\n        border-radius: dt('datepicker.select.month.border.radius');\n        font-weight: dt('datepicker.select.month.font.weight');\n        font-size: dt('datepicker.select.month.font.size');\n    }\n\n    .p-datepicker-select-year {\n        padding: dt('datepicker.select.year.padding');\n        color: dt('datepicker.select.year.color');\n        border-radius: dt('datepicker.select.year.border.radius');\n        font-weight: dt('datepicker.select.year.font.weight');\n        font-size: dt('datepicker.select.year.font.size');\n    }\n\n    .p-datepicker-select-month:enabled:hover {\n        background: dt('datepicker.select.month.hover.background');\n        color: dt('datepicker.select.month.hover.color');\n    }\n\n    .p-datepicker-select-year:enabled:hover {\n        background: dt('datepicker.select.year.hover.background');\n        color: dt('datepicker.select.year.hover.color');\n    }\n\n    .p-datepicker-select-month:focus-visible,\n    .p-datepicker-select-year:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-calendar-container {\n        display: flex;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar {\n        flex: 1 1 auto;\n        border-inline-start: 1px solid dt('datepicker.group.border.color');\n        padding-inline-end: dt('datepicker.group.gap');\n        padding-inline-start: dt('datepicker.group.gap');\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {\n        padding-inline-start: 0;\n        border-inline-start: 0 none;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {\n        padding-inline-end: 0;\n    }\n\n    .p-datepicker-day-view {\n        width: 100%;\n        border-collapse: collapse;\n        font-size: 1rem;\n        margin: dt('datepicker.day.view.margin');\n    }\n\n    .p-datepicker-weekday-cell {\n        padding: dt('datepicker.week.day.padding');\n    }\n\n    .p-datepicker-weekday {\n        font-weight: dt('datepicker.week.day.font.weight');\n        font-size: dt('datepicker.week.day.font.size');\n        color: dt('datepicker.week.day.color');\n    }\n\n    .p-datepicker-day-cell {\n        padding: dt('datepicker.date.padding');\n    }\n\n    .p-datepicker-day {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        margin: 0 auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.date.width');\n        height: dt('datepicker.date.height');\n        border-radius: dt('datepicker.date.border.radius');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border: 1px solid transparent;\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n        font-weight: dt('datepicker.date.font.weight');\n        font-size: dt('datepicker.date.font.size');\n    }\n\n    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {\n        background: dt('datepicker.date.hover.background');\n        color: dt('datepicker.date.hover.color');\n    }\n\n    .p-datepicker-day:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day {\n        background: dt('datepicker.today.background');\n        color: dt('datepicker.today.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-weeknumber {\n        text-align: center;\n    }\n\n    .p-datepicker-month-view {\n        margin: dt('datepicker.month.view.margin');\n    }\n\n    .p-datepicker-month {\n        width: 33.3%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.month.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.month.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n        font-weight: dt('datepicker.date.font.weight');\n        font-size: dt('datepicker.date.font.size');\n    }\n\n    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-month-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-month:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-year-view {\n        margin: dt('datepicker.year.view.margin');\n    }\n\n    .p-datepicker-year {\n        width: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.year.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.year.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n        font-weight: dt('datepicker.date.font.weight');\n        font-size: dt('datepicker.date.font.size');\n    }\n\n    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-year-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-year:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-buttonbar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('datepicker.buttonbar.padding');\n        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');\n    }\n\n    .p-datepicker-buttonbar .p-button {\n        width: auto;\n    }\n\n    .p-datepicker-time-picker {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-block-start: 1px solid dt('datepicker.time.picker.border.color');\n        padding: 0;\n        gap: dt('datepicker.time.picker.gap');\n    }\n\n    .p-datepicker-calendar-container + .p-datepicker-time-picker {\n        padding: dt('datepicker.time.picker.padding');\n        margin-block-start: dt('datepicker.time.picker.gap');\n    }\n\n    .p-datepicker-time-picker > div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        gap: dt('datepicker.time.picker.button.gap');\n    }\n\n    .p-datepicker-time-picker span {\n        color: dt('datepicker.time.picker.color');\n        font-weight: dt('datepicker.time.picker.font.weight');\n        font-size: dt('datepicker.time.picker.font.size');\n    }\n\n    .p-datepicker-timeonly .p-datepicker-time-picker {\n        border-block-start: 0 none;\n    }\n\n    .p-datepicker-time-picker:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.sm.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.lg.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-datepicker-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * dt('icon.size') / 2);\n        cursor: pointer;\n        color: dt('form.field.icon.color');\n        inset-inline-end: dt('form.field.padding.x');\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon {\n        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {\n        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container):has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));\n    }\n\n    .p-inputgroup .p-datepicker-dropdown {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child:has(.p-datepicker-dropdown) > .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child .p-datepicker-dropdown {\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/datepicker";
var inlineStyles = { root: () => ({ position: "relative" }) };
var classes = {
  root: ({ instance }) => ["p-datepicker p-component p-inputwrapper", {
    "p-invalid": instance.invalid(),
    "p-inputwrapper-filled": instance.$filled(),
    "p-inputwrapper-focus": instance.focus() || instance.overlayVisible(),
    "p-focus": instance.focus() || instance.overlayVisible(),
    "p-datepicker-fluid": instance.hasFluid
  }],
  pcInputText: "p-datepicker-input",
  clearIcon: "p-datepicker-clear-icon",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: ({ instance }) => ["p-datepicker-panel p-component", {
    "p-datepicker-panel p-component": true,
    "p-datepicker-panel-inline": instance.inline(),
    "p-disabled": instance.$disabled(),
    "p-datepicker-timeonly": instance.timeOnly()
  }],
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: ({ date }) => ["p-datepicker-day-cell", {
    "p-datepicker-other-month": date.otherMonth,
    "p-datepicker-today": date.today
  }],
  day: ({ instance, date }) => {
    let selectedDayClass = "";
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      const startDate = instance.value[0];
      const endDate = instance.value[1];
      const isStart = startDate && date.year === startDate.getFullYear() && date.month === startDate.getMonth() && date.day === startDate.getDate();
      const isEnd = endDate && date.year === endDate.getFullYear() && date.month === endDate.getMonth() && date.day === endDate.getDate();
      selectedDayClass = isStart || isEnd ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
    }
    return {
      "p-datepicker-day": true,
      "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      "p-disabled": instance.$disabled() || !date.selectable,
      [selectedDayClass]: true
    };
  },
  monthView: "p-datepicker-month-view",
  month: ({ instance, index }) => ["p-datepicker-month", {
    "p-datepicker-month-selected": instance.isMonthSelected(index),
    "p-disabled": instance.isMonthDisabled(index)
  }],
  yearView: "p-datepicker-year-view",
  year: ({ instance, year }) => ["p-datepicker-year", {
    "p-datepicker-year-selected": instance.isYearSelected(year),
    "p-disabled": instance.isYearDisabled(year)
  }],
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button"
};
var DatePickerStyle = class DatePickerStyle2 extends BaseStyle {
  name = "datepicker";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DatePickerStyle_BaseFactory = void 0;
    return function DatePickerStyle_Factory(__ngFactoryType__) {
      return (\u0275DatePickerStyle_BaseFactory || (\u0275DatePickerStyle_BaseFactory = i05.\u0275\u0275getInheritedFactory(DatePickerStyle2)))(__ngFactoryType__ || DatePickerStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i05.\u0275\u0275defineInjectable({
    token: DatePickerStyle2,
    factory: DatePickerStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(DatePickerStyle, [{ type: Injectable }], null, null);
})();
var DatePickerClasses;
(function(DatePickerClasses2) {
  DatePickerClasses2["root"] = "p-datepicker";
  DatePickerClasses2["pcInputText"] = "p-datepicker-input";
  DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
  DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
  DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
  DatePickerClasses2["panel"] = "p-datepicker-panel";
  DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
  DatePickerClasses2["calendar"] = "p-datepicker-calendar";
  DatePickerClasses2["header"] = "p-datepicker-header";
  DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
  DatePickerClasses2["title"] = "p-datepicker-title";
  DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
  DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
  DatePickerClasses2["decade"] = "p-datepicker-decade";
  DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
  DatePickerClasses2["dayView"] = "p-datepicker-day-view";
  DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
  DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
  DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
  DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
  DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
  DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
  DatePickerClasses2["day"] = "p-datepicker-day";
  DatePickerClasses2["monthView"] = "p-datepicker-month-view";
  DatePickerClasses2["month"] = "p-datepicker-month";
  DatePickerClasses2["yearView"] = "p-datepicker-year-view";
  DatePickerClasses2["year"] = "p-datepicker-year";
  DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
  DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
  DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
  DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
  DatePickerClasses2["separator"] = "p-datepicker-separator";
  DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
  DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
  DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
  DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
  DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
  DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
  DatePickerClasses2["clearIcon"] = "p-datepicker-clear-icon";
})(DatePickerClasses || (DatePickerClasses = {}));
var DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker),
  multi: true
};
var DATEPICKER_INSTANCE = new InjectionToken("DATEPICKER_INSTANCE");
var DatePicker = class DatePicker2 extends BaseInput {
  componentName = "DatePicker";
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcDatePicker = inject(DATEPICKER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  iconDisplay = input("button", ...ngDevMode ? [{ debugName: "iconDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  inputStyle = input(...ngDevMode ? [void 0, { debugName: "inputStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  inputStyleClass = input(...ngDevMode ? [void 0, { debugName: "inputStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  iconAriaLabel = input(...ngDevMode ? [void 0, { debugName: "iconAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  dateFormat = input(...ngDevMode ? [void 0, { debugName: "dateFormat" }] : (
    /* istanbul ignore next */
    []
  ));
  multipleSeparator = input(",", ...ngDevMode ? [{ debugName: "multipleSeparator" }] : (
    /* istanbul ignore next */
    []
  ));
  rangeSeparator = input("-", ...ngDevMode ? [{ debugName: "rangeSeparator" }] : (
    /* istanbul ignore next */
    []
  ));
  inline = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "inline" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showOtherMonths = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showOtherMonths" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  selectOtherMonths = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selectOtherMonths" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showIcon = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showIcon" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  readonlyInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "readonlyInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  shortYearCutoff = input("+10", ...ngDevMode ? [{ debugName: "shortYearCutoff" }] : (
    /* istanbul ignore next */
    []
  ));
  hourFormat = input("24", ...ngDevMode ? [{ debugName: "hourFormat" }] : (
    /* istanbul ignore next */
    []
  ));
  timeOnly = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "timeOnly" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  stepHour = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepHour" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stepMinute = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepMinute" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stepSecond = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stepSecond" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  showSeconds = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showSeconds" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showOnFocus = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showOnFocus" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showWeek = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showWeek" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  startWeekFromFirstDayOfYear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "startWeekFromFirstDayOfYear" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showClear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showClear" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  dataType = input("date", ...ngDevMode ? [{ debugName: "dataType" }] : (
    /* istanbul ignore next */
    []
  ));
  selectionMode = input("single", ...ngDevMode ? [{ debugName: "selectionMode" }] : (
    /* istanbul ignore next */
    []
  ));
  maxDateCount = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "maxDateCount" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  showButtonBar = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showButtonBar" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  todayButtonStyleClass = input(...ngDevMode ? [void 0, { debugName: "todayButtonStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  clearButtonStyleClass = input(...ngDevMode ? [void 0, { debugName: "clearButtonStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  autofocus = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autofocus" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  autoZIndex = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autoZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  baseZIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "baseZIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  panelStyleClass = input(...ngDevMode ? [void 0, { debugName: "panelStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  panelStyle = input(...ngDevMode ? [void 0, { debugName: "panelStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  keepInvalid = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "keepInvalid" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hideOnDateTimeSelect = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideOnDateTimeSelect" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  touchUI = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "touchUI" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  timeSeparator = input(":", ...ngDevMode ? [{ debugName: "timeSeparator" }] : (
    /* istanbul ignore next */
    []
  ));
  focusTrap = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "focusTrap" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  tabindex = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "tabindex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  minDate = input(...ngDevMode ? [void 0, { debugName: "minDate" }] : (
    /* istanbul ignore next */
    []
  ));
  maxDate = input(...ngDevMode ? [void 0, { debugName: "maxDate" }] : (
    /* istanbul ignore next */
    []
  ));
  disabledDates = input(...ngDevMode ? [void 0, { debugName: "disabledDates" }] : (
    /* istanbul ignore next */
    []
  ));
  disabledDays = input(...ngDevMode ? [void 0, { debugName: "disabledDays" }] : (
    /* istanbul ignore next */
    []
  ));
  showTime = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showTime" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  responsiveOptions = input(...ngDevMode ? [void 0, { debugName: "responsiveOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  numberOfMonths = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "numberOfMonths" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  firstDayOfWeek = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "firstDayOfWeek" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  view = input("date", ...ngDevMode ? [{ debugName: "view" }] : (
    /* istanbul ignore next */
    []
  ));
  defaultDate = input(...ngDevMode ? [void 0, { debugName: "defaultDate" }] : (
    /* istanbul ignore next */
    []
  ));
  appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(void 0, ...ngDevMode ? [{ debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions()), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  onFocus = output();
  onBlur = output();
  onClose = output();
  onSelect = output();
  onClear = output();
  onInput = output();
  onTodayClick = output();
  onClearClick = output();
  onMonthChange = output();
  onYearChange = output();
  onClickOutside = output();
  onShow = output();
  inputfieldViewChild = viewChild("inputfield", ...ngDevMode ? [{ debugName: "inputfieldViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  contentWrapperViewChild = viewChild("contentWrapper", ...ngDevMode ? [{ debugName: "contentWrapperViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(DatePickerStyle);
  contentViewChild = computed(() => this.contentWrapperViewChild(), ...ngDevMode ? [{ debugName: "contentViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  value;
  dates;
  months = signal([], ...ngDevMode ? [{ debugName: "months" }] : (
    /* istanbul ignore next */
    []
  ));
  weekDays = signal([], ...ngDevMode ? [{ debugName: "weekDays" }] : (
    /* istanbul ignore next */
    []
  ));
  currentMonth;
  currentYear;
  currentHour = signal(null, ...ngDevMode ? [{ debugName: "currentHour" }] : (
    /* istanbul ignore next */
    []
  ));
  currentMinute = signal(null, ...ngDevMode ? [{ debugName: "currentMinute" }] : (
    /* istanbul ignore next */
    []
  ));
  currentSecond = signal(null, ...ngDevMode ? [{ debugName: "currentSecond" }] : (
    /* istanbul ignore next */
    []
  ));
  formattedHour = computed(() => String(this.currentHour() ?? 0).padStart(2, "0"), ...ngDevMode ? [{ debugName: "formattedHour" }] : (
    /* istanbul ignore next */
    []
  ));
  formattedMinute = computed(() => String(this.currentMinute() ?? 0).padStart(2, "0"), ...ngDevMode ? [{ debugName: "formattedMinute" }] : (
    /* istanbul ignore next */
    []
  ));
  formattedSecond = computed(() => String(this.currentSecond() ?? 0).padStart(2, "0"), ...ngDevMode ? [{ debugName: "formattedSecond" }] : (
    /* istanbul ignore next */
    []
  ));
  onButtonClickCallback = this.onButtonClick.bind(this);
  onTodayButtonClickCallback = this.onTodayButtonClick.bind(this);
  onClearButtonClickCallback = this.onClearButtonClick.bind(this);
  inputIconTemplateContext = computed(() => ({ clickCallBack: this.onButtonClickCallback }), ...ngDevMode ? [{ debugName: "inputIconTemplateContext" }] : (
    /* istanbul ignore next */
    []
  ));
  decadeTemplateContext = computed(() => ({ $implicit: this.yearPickerValues }), ...ngDevMode ? [{ debugName: "decadeTemplateContext" }] : (
    /* istanbul ignore next */
    []
  ));
  buttonBarTemplateContext = computed(() => ({
    todayCallback: this.onTodayButtonClickCallback,
    clearCallback: this.onClearButtonClickCallback
  }), ...ngDevMode ? [{ debugName: "buttonBarTemplateContext" }] : (
    /* istanbul ignore next */
    []
  ));
  pm = signal(null, ...ngDevMode ? [{ debugName: "pm" }] : (
    /* istanbul ignore next */
    []
  ));
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible = signal(false, ...ngDevMode ? [{ debugName: "overlayVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayRendered = signal(false, ...ngDevMode ? [{ debugName: "overlayRendered" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayMinWidth;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus = signal(false, ...ngDevMode ? [{ debugName: "focus" }] : (
    /* istanbul ignore next */
    []
  ));
  isKeydown;
  preventDocumentListener;
  requiredAttr = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "requiredAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  readonlyAttr = computed(() => this.readonlyInput() ? "" : void 0, ...ngDevMode ? [{ debugName: "readonlyAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  disabledAttr = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "disabledAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  switchViewButtonDisabledAttr = computed(() => this.switchViewButtonDisabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "switchViewButtonDisabledAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  inputModeAttr = computed(() => this.touchUI() ? "off" : null, ...ngDevMode ? [{ debugName: "inputModeAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  clearIconEnabled = computed(() => this.showClear() && !this.$disabled(), ...ngDevMode ? [{ debugName: "clearIconEnabled" }] : (
    /* istanbul ignore next */
    []
  ));
  showClearIcon = computed(() => this.showClear() && !this.$disabled() && !!this.inputFieldValue(), ...ngDevMode ? [{ debugName: "showClearIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  showIconButton = computed(() => this.showIcon() && this.iconDisplay() === "button", ...ngDevMode ? [{ debugName: "showIconButton" }] : (
    /* istanbul ignore next */
    []
  ));
  showInputIcon = computed(() => this.iconDisplay() === "input" && this.showIcon(), ...ngDevMode ? [{ debugName: "showInputIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  showTimePicker = computed(() => (this.showTime() || this.timeOnly()) && this.currentView() === "date", ...ngDevMode ? [{ debugName: "showTimePicker" }] : (
    /* istanbul ignore next */
    []
  ));
  isHourFormat12 = computed(() => this.hourFormat() == "12", ...ngDevMode ? [{ debugName: "isHourFormat12" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaControlsAttr = computed(() => this.overlayVisible() ? this.panelId : null, ...ngDevMode ? [{ debugName: "ariaControlsAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  isOverlayVisible = computed(() => this.inline() || this.overlayVisible(), ...ngDevMode ? [{ debugName: "isOverlayVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  roleAttr = computed(() => this.inline() ? null : "dialog", ...ngDevMode ? [{ debugName: "roleAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaModalAttr = computed(() => this.inline() ? null : "true", ...ngDevMode ? [{ debugName: "ariaModalAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  ampmLabel = computed(() => this.pm() ? "PM" : "AM", ...ngDevMode ? [{ debugName: "ampmLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  dateTemplate = contentChild("date", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "dateTemplate" } : (
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
  footerTemplate = contentChild("footer", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  disabledDateTemplate = contentChild("disabledDate", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabledDateTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  decadeTemplate = contentChild("decade", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "decadeTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  previousIconTemplate = contentChild("previousicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "previousIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  nextIconTemplate = contentChild("nexticon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "nextIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  triggerIconTemplate = contentChild("triggericon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "triggerIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  clearIconTemplate = contentChild("clearicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "clearIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  decrementIconTemplate = contentChild("decrementicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "decrementIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  incrementIconTemplate = contentChild("incrementicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "incrementIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  inputIconTemplate = contentChild("inputicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "inputIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  buttonBarTemplate = contentChild("buttonbar", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "buttonBarTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  currentView = signal(null, ...ngDevMode ? [{ debugName: "currentView" }] : (
    /* istanbul ignore next */
    []
  ));
  attributeSelector;
  panelId;
  preventFocus;
  _focusKey = null;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel() ? this.iconAriaLabel() : this.translate("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView() === "year" ? this.translate("prevDecade") : this.currentView() === "month" ? this.translate("prevYear") : this.translate("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView() === "year" ? this.translate("nextDecade") : this.currentView() === "month" ? this.translate("nextYear") : this.translate("nextMonth");
  }
  overlayService = inject(OverlayService);
  constructor() {
    super();
    this.window = this.document.defaultView;
    effect(() => {
      this.dateFormat();
      if (this.initialized) this.updateInputfield();
    });
    effect(() => {
      this.hourFormat();
      if (this.initialized) this.updateInputfield();
    });
    effect(() => {
      this.minDate();
      this.maxDate();
      this.disabledDates();
      this.disabledDays();
      if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) this.createMonths(this.currentMonth, this.currentYear);
    });
    effect(() => {
      if (this.showTime()) {
        if (untracked(() => this.currentHour()) === null) this.initTime(this.value || /* @__PURE__ */ new Date());
        this.updateInputfield();
      }
    });
    effect(() => {
      this.responsiveOptions();
      this.numberOfMonths();
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    });
    effect(() => {
      this.firstDayOfWeek();
      if (this.initialized) this.createWeekDays();
    });
    effect(() => {
      const view = this.view();
      this.currentView.set(view);
    });
    effect(() => {
      const defaultDate = this.defaultDate();
      if (this.initialized && defaultDate !== void 0) {
        const date = defaultDate || /* @__PURE__ */ new Date();
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
        this.initTime(date);
        this.createMonths(this.currentMonth, this.currentYear);
      }
    });
    effect(() => {
      if (this.contentWrapperViewChild() && this.overlay) {
        if (this.isMonthNavigate) {
          Promise.resolve(null).then(() => this.updateFocus());
          this.isMonthNavigate = false;
        } else if (!untracked(() => this.focus()) && !untracked(() => this.inline())) this.initFocusableCell();
      }
    });
  }
  inputFieldValue = signal(null, ...ngDevMode ? [{ debugName: "inputFieldValue" }] : (
    /* istanbul ignore next */
    []
  ));
  getDateTemplateContext(date) {
    return {
      $implicit: date,
      selected: !!this.isSelected(date)
    };
  }
  dayClass(date) {
    return this._componentStyle.classes.day({
      instance: this,
      date
    });
  }
  getPrevButtonStyle(index) {
    return { visibility: index === 0 ? "visible" : "hidden" };
  }
  getNextButtonStyle(index) {
    return { visibility: index === this.months().length - 1 ? "visible" : "hidden" };
  }
  onInit() {
    this.attributeSelector = s("pn_id_");
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate() || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView.set(this.view());
    if (this.view() === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
    });
    this.initialized = true;
  }
  onAfterViewInit() {
    if (this.inline()) {
      if (this.contentViewChild()) this.contentViewChild().nativeElement.setAttribute(this.attributeSelector, "");
    } else if (!this.$disabled() && this.overlay) {
      this.initFocusableCell();
      if (this.numberOfMonths() === 1) {
        if (this.contentViewChild() && this.contentViewChild().nativeElement) this.contentViewChild().nativeElement.style.width = L(this.el?.nativeElement) + "px";
      }
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) this.yearOptions.push(i);
  }
  createWeekDays() {
    const days = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.translate(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      days.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
    this.weekDays.set(days);
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) monthPickerValues.push(this.translate("monthNamesShort")[i]);
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) yearPickerValues.push(base + i);
    return yearPickerValues;
  }
  createMonths(month, year) {
    const newMonths = [];
    for (let i = 0; i < this.numberOfMonths(); i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 12;
        y = year + Math.floor((month + i) / 12);
      }
      newMonths.push(this.createMonth(m, y));
    }
    this.months.set(newMonths);
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    if (this.startWeekFromFirstDayOfYear()) {
      let firstDayOfWeek = +this.getFirstDateOfWeek();
      checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
    } else checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else for (let j = 0; j < 7; j++) {
        if (dayNo > daysLength) {
          let next = this.getNextMonthAndYear(month, year);
          week.push({
            day: dayNo - daysLength,
            month: next.month,
            year: next.year,
            otherMonth: true,
            today: this.isToday(today, dayNo - daysLength, next.month, next.year),
            selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
          });
        } else week.push({
          day: dayNo,
          month,
          year,
          today: this.isToday(today, dayNo, month, year),
          selectable: this.isSelectable(dayNo, month, year, false)
        });
        dayNo++;
      }
      weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm.set(date.getHours() > 11);
    if (this.showTime()) {
      this.currentMinute.set(date.getMinutes());
      this.currentSecond.set(this.showSeconds() ? date.getSeconds() : 0);
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly()) {
      this.currentMinute.set(0);
      this.currentHour.set(0);
      this.currentSecond.set(0);
    }
  }
  navBackward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView() === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    } else if (this.currentView() === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else this.currentMonth--;
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView() === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    } else if (this.currentView() === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else this.currentMonth++;
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.$disabled() || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date) => !this.isDateEquals(date, dateMeta));
      if (this.value.length === 0) this.value = null;
      this.updateModel(this.value);
    } else if (this.shouldSelectDate(dateMeta)) this.selectDate(dateMeta);
    if (this.hideOnDateTimeSelect() && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) setTimeout(() => {
      event2.preventDefault();
      this.hideOverlay();
      if (this.mask) this.disableModality();
    }, 150);
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount() != null ? this.maxDateCount() > (this.value ? this.value.length : 0) : true;
    else return true;
  }
  onMonthSelect(event2, index) {
    if (this.view() === "month") this.onDateSelect(event2, {
      year: this.currentYear,
      month: index,
      day: 1,
      selectable: true
    });
    else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view() === "year") this.onDateSelect(event2, {
      year,
      month: 0,
      day: 1,
      selectable: true
    });
    else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) formattedValue = this.formatDateTime(this.value);
      else if (this.isMultipleSelection()) for (let i = 0; i < this.value.length; i++) {
        let dateAsString = this.formatDateTime(this.value[i]);
        formattedValue += dateAsString;
        if (i !== this.value.length - 1) formattedValue += this.multipleSeparator() + " ";
      }
      else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) formattedValue += " " + this.rangeSeparator() + " " + this.formatDateTime(endDate);
        }
      }
    }
    this.writeModelValue(formattedValue);
    this.inputFieldValue.set(formattedValue);
    const inputfield = this.inputfieldViewChild();
    if (inputfield?.nativeElement) inputfield.nativeElement.value = this.inputFieldValue();
  }
  formatDateTime(date) {
    let formattedValue = this.keepInvalid() ? date : null;
    if (this.isValidDate(date)) {
      if (this.timeOnly()) formattedValue = this.formatTime(date);
      else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime()) formattedValue += " " + this.formatTime(date);
      }
    } else if (this.dataType() === "string") formattedValue = date;
    return formattedValue;
  }
  formatDateMetaToDate(dateMeta) {
    return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
  }
  formatDateKey(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat() == "12") {
      this.pm.set(hours > 11);
      if (hours >= 12) this.currentHour.set(hours == 12 ? 12 : hours - 12);
      else this.currentHour.set(hours == 0 ? 12 : hours);
    } else this.currentHour.set(hours);
  }
  setCurrentView(currentView) {
    this.currentView.set(currentView);
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = this.formatDateMetaToDate(dateMeta);
    if (this.showTime()) {
      if (this.hourFormat() == "12") {
        if (this.currentHour() === 12) date.setHours(this.pm() ? 12 : 0);
        else date.setHours(this.pm() ? this.currentHour() + 12 : this.currentHour());
      } else date.setHours(this.currentHour());
      date.setMinutes(this.currentMinute());
      date.setSeconds(this.currentSecond());
    }
    if (this.minDate() && this.minDate() > date) {
      date = this.minDate();
      this.setCurrentHourPM(date.getHours());
      this.currentMinute.set(date.getMinutes());
      this.currentSecond.set(date.getSeconds());
    }
    if (this.maxDate() && this.maxDate() < date) {
      date = this.maxDate();
      this.setCurrentHourPM(date.getHours());
      this.currentMinute.set(date.getMinutes());
      this.currentSecond.set(date.getSeconds());
    }
    if (this.isSingleSelection()) this.updateModel(date);
    else if (this.isMultipleSelection()) this.updateModel(this.value ? [...this.value, date] : [date]);
    else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) endDate = date;
        else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else this.updateModel([date, null]);
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType() == "date") {
      this.writeModelValue(this.value);
      this.onModelChange(this.value);
    } else if (this.dataType() == "string") {
      if (this.isSingleSelection()) this.onModelChange(this.formatDateTime(this.value));
      else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) stringArrValue = this.value.map((date) => this.formatDateTime(date));
        this.writeModelValue(stringArrValue);
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) return this.isDateEquals(this.value, dateMeta);
      else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) break;
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else return false;
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (!this.isComparable()) return false;
    if (this.isMultipleSelection()) return this.value.some((currentValue) => currentValue?.getMonth() === month && currentValue?.getFullYear() === this.currentYear);
    else if (this.isRangeSelection()) {
      if (!this.value[1]) return this.value[0]?.getFullYear() === this.currentYear && this.value[0]?.getMonth() === month;
      else if (this.value[0]) {
        const currentDate = new Date(this.currentYear, month, 1);
        const startDate = new Date(this.value[0].getFullYear(), this.value[0].getMonth(), 1);
        const endDate = new Date(this.value[1].getFullYear(), this.value[1].getMonth(), 1);
        return currentDate >= startDate && currentDate <= endDate;
      } else return false;
    } else return this.value?.getMonth() === month && this.value?.getFullYear() === this.currentYear;
  }
  isMonthDisabled(month, year) {
    const yearToCheck = year ?? this.currentYear;
    for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) if (this.isSelectable(day, month, yearToCheck, false)) return false;
    return true;
  }
  isYearDisabled(year) {
    return Array(12).fill(0).every((v, month) => this.isMonthDisabled(month, year));
  }
  isYearSelected(year) {
    if (!this.isComparable()) return false;
    if (this.isMultipleSelection()) return false;
    let value = this.isRangeSelection() ? this.value[0] : this.value;
    return value ? value.getFullYear() === year : false;
  }
  isDateEquals(value, dateMeta) {
    if (value && I(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (I(start) && I(end)) {
      let date = this.formatDateMetaToDate(dateMeta);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode() === "single";
  }
  isRangeSelection() {
    return this.selectionMode() === "range";
  }
  isMultipleSelection() {
    return this.selectionMode() === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths()) return false;
    const minDate = this.minDate();
    if (minDate) {
      if (minDate.getFullYear() > year) validMin = false;
      else if (minDate.getFullYear() === year && this.currentView() != "year") {
        if (minDate.getMonth() > month) validMin = false;
        else if (minDate.getMonth() === month) {
          if (minDate.getDate() > day) validMin = false;
        }
      }
    }
    const maxDate = this.maxDate();
    if (maxDate) {
      if (maxDate.getFullYear() < year) validMax = false;
      else if (maxDate.getFullYear() === year) {
        if (maxDate.getMonth() < month) validMax = false;
        else if (maxDate.getMonth() === month) {
          if (maxDate.getDate() < day) validMax = false;
        }
      }
    }
    if (this.disabledDates()) validDate = !this.isDateDisabled(day, month, year);
    if (this.disabledDays()) validDay = !this.isDayDisabled(day, month, year);
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    const disabledDates = this.disabledDates();
    if (disabledDates) {
      for (let disabledDate of disabledDates) if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) return true;
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    const disabledDays = this.disabledDays();
    if (disabledDays) {
      let weekdayNumber = new Date(year, month, day).getDay();
      return disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus.set(true);
    if (this.showOnFocus()) this.showOverlay();
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus() && !this.overlayVisible()) this.showOverlay();
  }
  onInputBlur(event2) {
    this.focus.set(false);
    this.onBlur.emit(event2);
    if (!this.keepInvalid()) this.updateInputfield();
    if (!this.overlayVisible()) this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild()?.nativeElement) {
    if (this.$disabled()) return;
    if (!this.overlayVisible()) {
      inputfield.focus();
      this.showOverlay();
    } else this.hideOverlay();
  }
  clear() {
    this.value = null;
    this.inputFieldValue.set(null);
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.updateInputfield();
    this.onClear.emit(null);
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.translate("monthNames")[index];
  }
  getMonthWeeks(month) {
    return month.dates ?? [];
  }
  get inputIconDataP() {
    return this.cn({ [this.size()]: this.size() });
  }
  getYear(month) {
    return this.currentView() === "month" ? this.currentYear : month.year;
  }
  getDateCellAriaLabel(dateMeta) {
    const date = this.formatDateMetaToDate(dateMeta);
    return `${this.translate("dayNames")?.[date.getDay()]}, ${this.getMonthName(dateMeta.month)} ${dateMeta.day}, ${dateMeta.year}`;
  }
  getMonthSelectAriaLabel(month) {
    return `${this.getMonthName(month.month)}`;
  }
  getYearSelectAriaLabel(month) {
    return `${this.getYear(month)}`;
  }
  focusAdjacentRowDayCell(cell, backward, groupIndex) {
    const targetRow = backward ? cell.parentElement.previousElementSibling : cell.parentElement.nextElementSibling;
    const targetCell = targetRow ? backward ? this.getLastDayCellOfRow(targetRow) : this.getFirstDayCellOfRow(targetRow) : null;
    if (targetCell && !I2(targetCell, "p-disabled")) {
      targetCell.tabIndex = "0";
      targetCell.focus();
    } else this.navigateToMonth(backward, groupIndex);
  }
  getFirstDayCellOfRow(row) {
    const cells = row.children;
    for (let i = 0; i < cells.length; i++) if (!I2(cells[i], "p-datepicker-weeknumber")) return cells[i].children[0];
    return null;
  }
  getLastDayCellOfRow(row) {
    return row.children[row.children.length - 1]?.children[0] ?? null;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths() > 1 || this.$disabled();
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      case 9:
        if (!this.inline()) this.trapFocus(event2);
        if (this.inline()) {
          const headerElements = et(this.el?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (this.timeOnly()) return;
          else if (element == headerElements?.children[(headerElements?.children?.length ?? 0) - 1]) this.initFocusableCell();
        }
        break;
      case 27:
        this.inputfieldViewChild()?.nativeElement.focus();
        this.overlayVisible.set(false);
        event2.preventDefault();
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild()) this.trapFocus(event2);
    else if (event2.keyCode === 27) {
      if (this.overlayVisible()) {
        this.inputfieldViewChild()?.nativeElement.focus();
        this.overlayVisible.set(false);
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible()) {
        this.overlayVisible.set(false);
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild()) {
      x(this.contentViewChild().nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible()) this.overlayVisible.set(false);
    }
  }
  onDateCellKeydown(event2, dateMeta, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    const currentDate = this.formatDateMetaToDate(dateMeta);
    switch (event2.which) {
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = $t(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (I2(focusCell, "p-disabled")) {
            this.navigationState = { backward: false };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = { backward: false };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = $t(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (I2(focusCell, "p-disabled")) {
            this.navigationState = { backward: true };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = { backward: true };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell && !I2(prevCell, "p-datepicker-weeknumber")) {
          let focusCell = prevCell.children[0];
          if (I2(focusCell, "p-disabled")) this.navigateToMonth(true, groupIndex);
          else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else this.focusAdjacentRowDayCell(cell, true, groupIndex);
        event2.preventDefault();
        break;
      }
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (I2(focusCell, "p-disabled")) this.navigateToMonth(false, groupIndex);
          else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else this.focusAdjacentRowDayCell(cell, false, groupIndex);
        event2.preventDefault();
        break;
      }
      case 13:
      case 32:
        this.onDateSelect(event2, dateMeta);
        event2.preventDefault();
        break;
      case 27:
        this.inputfieldViewChild()?.nativeElement.focus();
        this.overlayVisible.set(false);
        event2.preventDefault();
        break;
      case 9:
        if (!this.inline()) this.trapFocus(event2);
        break;
      case 33: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      case 34: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      case 36: {
        cellContent.tabIndex = "-1";
        const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const firstDayDateKey = this.formatDateKey(firstDayDate);
        const firstDayCell = et(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (firstDayCell) {
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        }
        event2.preventDefault();
        break;
      }
      case 35: {
        cellContent.tabIndex = "-1";
        const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayDateKey = this.formatDateKey(lastDayDate);
        const lastDayCell = et(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (lastDayDate) {
          lastDayCell.tabIndex = "0";
          lastDayCell.focus();
        }
        event2.preventDefault();
        break;
      }
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        let cells = cell.parentElement.children;
        let cellIndex = $t(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = { backward: true };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = { backward: false };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 13:
      case 32:
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      case 27:
        this.inputfieldViewChild()?.nativeElement.focus();
        this.overlayVisible.set(false);
        event2.preventDefault();
        break;
      case 9:
        if (!this.inline()) this.trapFocus(event2);
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        let cells = cell.parentElement.children;
        let cellIndex = $t(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = { backward: true };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = { backward: false };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      case 13:
      case 32:
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      case 27:
        this.inputfieldViewChild()?.nativeElement.focus();
        this.overlayVisible.set(false);
        event2.preventDefault();
        break;
      case 9:
        this.trapFocus(event2);
    }
  }
  navigateToMonth(prev, groupIndex, focusKey) {
    if (prev) {
      if (this.numberOfMonths() === 1 || groupIndex === 0) {
        this.navigationState = { backward: true };
        this._focusKey = focusKey;
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild().nativeElement.children[groupIndex - 1];
        if (focusKey) {
          const firstDayCell = et(prevMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let cells = tt(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          let focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    } else if (this.numberOfMonths() === 1 || groupIndex === this.numberOfMonths() - 1) {
      this.navigationState = { backward: false };
      this._focusKey = focusKey;
      this.navForward(event);
    } else {
      let nextMonthContainer = this.contentViewChild().nativeElement.children[groupIndex + 1];
      if (focusKey) {
        const firstDayCell = et(nextMonthContainer, focusKey);
        firstDayCell.tabIndex = "0";
        firstDayCell.focus();
      } else {
        let focusCell = et(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
        focusCell.tabIndex = "0";
        focusCell.focus();
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) et(this.contentViewChild().nativeElement, ".p-datepicker-prev-button").focus();
        else et(this.contentViewChild().nativeElement, ".p-datepicker-next-button").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView() === "month") cells = tt(this.contentViewChild().nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          else if (this.currentView() === "year") cells = tt(this.contentViewChild().nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          else cells = tt(this.contentViewChild().nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          if (cells && cells.length > 0) cell = cells[cells.length - 1];
        } else if (this.currentView() === "month") cell = et(this.contentViewChild().nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
        else if (this.currentView() === "year") cell = et(this.contentViewChild().nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
        else cell = et(this.contentViewChild().nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
      this._focusKey = null;
    } else this.initFocusableCell();
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild()?.nativeElement;
    let cell;
    if (this.currentView() === "month") {
      let cells = tt(contentEl, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
      let selectedCell = et(contentEl, ".p-datepicker-month-view .p-datepicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) tt(contentEl, '.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]').forEach((cell2) => cell2.tabIndex = -1);
    } else if (this.currentView() === "year") {
      let cells = tt(contentEl, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
      let selectedCell = et(contentEl, ".p-datepicker-year-view .p-datepicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) tt(contentEl, '.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]').forEach((cell2) => cell2.tabIndex = -1);
    } else {
      cell = et(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = et(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell) cell = todayCell;
        else cell = et(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) setTimeout(() => {
        if (!this.$disabled()) cell.focus();
      }, 1);
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = x(this.contentViewChild().nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) focusableElements[0].focus();
      else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap()) focusableElements[focusableElements.length - 1].focus();
            else if (focusedIndex === -1) return this.hideOverlay();
            else if (focusedIndex === 0) return;
          } else focusableElements[focusedIndex - 1].focus();
        } else if (focusedIndex == -1) {
          if (this.timeOnly()) focusableElements[0].focus();
          else {
            let spanIndex = 0;
            for (let i = 0; i < focusableElements.length; i++) if (focusableElements[i].tagName === "SPAN") spanIndex = i;
            focusableElements[spanIndex].focus();
          }
        } else if (focusedIndex === focusableElements.length - 1) {
          if (!this.focusTrap() && focusedIndex != -1) return this.hideOverlay();
          focusableElements[0].focus();
        } else focusableElements[focusedIndex + 1].focus();
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour(hours, pm) {
    if (this.hourFormat() == "12") {
      if (hours === 12) return pm ? 12 : 0;
      else return pm ? hours + 12 : hours;
    }
    return hours;
  }
  constrainTime(hour, minute, second, pm) {
    let returnTimeTriple = [
      hour,
      minute,
      second
    ];
    let minHoursExceeds12 = false;
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection();
    if (isRange || isMultiple) {
      if (!this.value) this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
      if (isRange) value = this.value[1] || this.value[0];
      if (isMultiple) value = this.value[this.value.length - 1];
    }
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate() && valueDateString && this.minDate().toDateString() === valueDateString;
    let isMaxDate = this.maxDate() && valueDateString && this.maxDate().toDateString() === valueDateString;
    if (isMinDate) minHoursExceeds12 = this.minDate().getHours() >= 12;
    if (isMinDate && minHoursExceeds12 && this.minDate().getHours() === 12 && this.minDate().getHours() > convertedHour) {
      returnTimeTriple[0] = 11;
      returnTimeTriple[1] = this.minDate().getMinutes();
      returnTimeTriple[2] = this.minDate().getSeconds();
    } else if (isMinDate && this.minDate().getHours() === convertedHour && this.minDate().getMinutes() > minute) {
      returnTimeTriple[1] = this.minDate().getMinutes();
      returnTimeTriple[2] = this.minDate().getSeconds();
    } else if (isMinDate && this.minDate().getHours() === convertedHour && this.minDate().getMinutes() === minute && this.minDate().getSeconds() > second) returnTimeTriple[2] = this.minDate().getSeconds();
    else if (isMinDate && !minHoursExceeds12 && this.minDate().getHours() - 1 === convertedHour && this.minDate().getHours() > convertedHour) {
      returnTimeTriple[0] = this.minDate().getHours();
      returnTimeTriple[1] = this.minDate().getMinutes();
      returnTimeTriple[2] = this.minDate().getSeconds();
    } else if (isMinDate && minHoursExceeds12 && this.minDate().getHours() > convertedHour && convertedHour !== 12) {
      this.setCurrentHourPM(this.minDate().getHours());
      returnTimeTriple[0] = this.currentHour() || 0;
      returnTimeTriple[1] = this.minDate().getMinutes();
      returnTimeTriple[2] = this.minDate().getSeconds();
    } else if (isMinDate && this.minDate().getHours() > convertedHour) {
      returnTimeTriple[0] = this.minDate().getHours();
      returnTimeTriple[1] = this.minDate().getMinutes();
      returnTimeTriple[2] = this.minDate().getSeconds();
    } else if (isMaxDate && this.maxDate().getHours() < convertedHour) {
      returnTimeTriple[0] = this.maxDate().getHours();
      returnTimeTriple[1] = this.maxDate().getMinutes();
      returnTimeTriple[2] = this.maxDate().getSeconds();
    } else if (isMaxDate && this.maxDate().getHours() === convertedHour && this.maxDate().getMinutes() < minute) {
      returnTimeTriple[1] = this.maxDate().getMinutes();
      returnTimeTriple[2] = this.maxDate().getSeconds();
    } else if (isMaxDate && this.maxDate().getHours() === convertedHour && this.maxDate().getMinutes() === minute && this.maxDate().getSeconds() < second) returnTimeTriple[2] = this.maxDate().getSeconds();
    return returnTimeTriple;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour() ?? 0;
    let newHour = (this.currentHour() ?? 0) + this.stepHour();
    let newPM = this.pm();
    if (this.hourFormat() == "24") newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat() == "12") {
      if (prevHour < 12 && newHour > 11) newPM = !this.pm();
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    const [hour, minute, second] = this.constrainTime(newHour, this.currentMinute(), this.currentSecond(), newPM);
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  toggleAMPMIfNotMinDate(newPM) {
    let value = this.value;
    const valueDateString = value ? value.toDateString() : null;
    if (this.minDate() && valueDateString && this.minDate().toDateString() === valueDateString && this.minDate().getHours() >= 12) this.pm.set(true);
    else this.pm.set(newPM);
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.$disabled()) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.$disabled()) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.$disabled() && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event2);
        else this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event2);
        else this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event2);
        else this.decrementSecond(event2);
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    const cur24 = this.convertTo24Hour(this.currentHour() ?? 0, this.pm());
    let value = this.value;
    if (this.isRangeSelection()) value = this.value?.[1] || this.value?.[0];
    else if (this.isMultipleSelection()) value = this.value?.[this.value.length - 1];
    const dayString = value ? value.toDateString() : null;
    const onMinDay = this.minDate() && dayString && this.minDate().toDateString() === dayString;
    const onMaxDay = this.maxDate() && dayString && this.maxDate().toDateString() === dayString;
    const minHour = onMinDay ? this.minDate().getHours() : 0;
    const maxHour = onMaxDay ? this.maxDate().getHours() : 23;
    let next24 = cur24 - this.stepHour();
    if (next24 < minHour) next24 = maxHour;
    let newHour = next24;
    let newPM = this.pm();
    if (this.hourFormat() == "12") {
      newPM = next24 >= 12;
      newHour = next24 % 12;
      if (newHour === 0) newHour = 12;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    const [hour, minute, second] = this.constrainTime(newHour, this.currentMinute(), this.currentSecond(), newPM);
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = (this.currentMinute() ?? 0) + this.stepMinute();
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    const [hour, minute, second] = this.constrainTime(this.currentHour() || 0, newMinute, this.currentSecond(), this.pm());
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = (this.currentMinute() ?? 0) - this.stepMinute();
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    const [hour, minute, second] = this.constrainTime(this.currentHour() || 0, newMinute, this.currentSecond() || 0, this.pm());
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond() + this.stepSecond();
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    const [hour, minute, second] = this.constrainTime(this.currentHour() || 0, this.currentMinute() || 0, newSecond, this.pm());
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond() - this.stepSecond();
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    const [hour, minute, second] = this.constrainTime(this.currentHour() || 0, this.currentMinute() || 0, newSecond, this.pm());
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) value = this.value[1] || this.value[0];
    if (this.isMultipleSelection()) value = this.value[this.value.length - 1];
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat() == "12") {
      if (this.currentHour() === 12) value.setHours(this.pm() ? 12 : 0);
      else value.setHours(this.pm() ? this.currentHour() + 12 : this.currentHour());
    } else value.setHours(this.currentHour());
    value.setMinutes(this.currentMinute());
    value.setSeconds(this.currentSecond());
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];
      else value = [value, null];
    }
    if (this.isMultipleSelection()) value = [...this.value.slice(0, -1), value];
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm();
    this.pm.set(newPM);
    const [hour, minute, second] = this.constrainTime(this.currentHour() || 0, this.currentMinute() || 0, this.currentSecond() || 0, newPM);
    this.currentHour.set(hour);
    this.currentMinute.set(minute);
    this.currentSecond.set(second);
    this.updateTime();
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) return;
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid()) this.updateModel(value);
    } catch (e4) {
      let value = this.keepInvalid() ? val : null;
      this.updateModel(value);
    }
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    if (this.isSingleSelection()) return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
    let isValid = value.every((v) => this.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false));
    if (isValid && this.isRangeSelection()) isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) return null;
    let value;
    if (this.isSingleSelection()) value = this.parseDateTime(text);
    else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator());
      value = [];
      for (let token of tokens) value.push(this.parseDateTime(token.trim()));
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator() + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) value[i] = this.parseDateTime(tokens[i].trim());
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly()) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime()) {
        let ampm = this.hourFormat() == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else date = this.parseDate(text, dateFormat);
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat() == "12" && !ampm) throw "Invalid Time";
    this.pm.set(ampm === "PM" || ampm === "pm");
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return I(date) && l(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) propValue = propValue.length === 2 ? propValue[1] : propValue[0];
    let val = this.defaultDate() && this.isValidDate(this.defaultDate()) && !this.value ? this.defaultDate() : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime() || this.timeOnly()) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute.set(val.getMinutes());
      this.currentSecond.set(this.showSeconds() ? val.getSeconds() : 0);
    }
  }
  showOverlay() {
    if (!this.overlayVisible()) {
      this.updateUI();
      if (!this.touchUI()) this.preventFocus = true;
      this.overlayMinWidth = this.el.nativeElement.offsetWidth;
      this.overlayRendered.set(true);
      this.overlayVisible.set(true);
    }
  }
  hideOverlay() {
    this.inputfieldViewChild()?.nativeElement.focus();
    this.overlayVisible.set(false);
    this.clearTimePickerTimer();
    if (this.touchUI()) this.disableModality();
  }
  toggle() {
    if (!this.inline()) {
      if (!this.overlayVisible()) {
        this.showOverlay();
        this.inputfieldViewChild()?.nativeElement.focus();
      } else this.hideOverlay();
    }
  }
  onOverlayBeforeEnter(event2) {
    this.overlay = event2.element;
    if (this.$attrSelector) this.overlay.setAttribute(this.$attrSelector, "");
    const styles = !this.inline() ? {
      position: "absolute",
      top: "0",
      minWidth: `${this.overlayMinWidth}px`
    } : void 0;
    C(this.overlay, styles || {});
    this.appendOverlay();
    this.alignOverlay();
    this.setZIndex();
    this.updateFocus();
    this.bindListeners();
    this.onShow.emit(event2.element);
  }
  onOverlayAfterLeave(event2) {
    if (this.autoZIndex()) ZIndexUtils.clear(event2.element);
    this.restoreOverlayAppend();
    this.onOverlayHide();
    this.overlayRendered.set(false);
    this.onModelTouched();
    this.onClose.emit(event2.element);
  }
  appendOverlay() {
    if (isPlatformBrowser(this.platformId) && this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") this.document.body.appendChild(this.overlay);
      else St(this.$appendTo(), this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (isPlatformBrowser(this.platformId) && this.overlay && this.$appendTo() !== "self") this.el.nativeElement.appendChild(this.overlay);
  }
  alignOverlay() {
    if (this.touchUI()) this.enableModality(this.overlay);
    else if (this.overlay) {
      if (this.$appendTo() && this.$appendTo() !== "self") z(this.overlay, this.inputfieldViewChild()?.nativeElement);
      else G(this.overlay, this.inputfieldViewChild()?.nativeElement);
    }
  }
  bindListeners() {
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  setZIndex() {
    if (this.autoZIndex()) {
      if (this.touchUI()) ZIndexUtils.set("modal", this.overlay, this.baseZIndex() || this.config.zIndex.modal);
      else ZIndexUtils.set("overlay", this.overlay, this.baseZIndex() || this.config.zIndex.overlay);
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI()) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      R(this.mask, "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter-active");
      this.maskClickListener = this.renderer.listen(this.mask, "click", () => {
        this.disableModality();
        this.overlayVisible.set(false);
      });
      this.renderer.appendChild(this.document.body, this.mask);
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      R(this.mask, "p-overlay-mask-leave");
      if (!this.animationEndListener) this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
    }
  }
  destroyMask() {
    if (!this.mask) return;
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (I2(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) unblockBodyScroll();
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  getDateFormat() {
    return this.dateFormat() || this.translate("dateFormat");
  }
  getFirstDateOfWeek() {
    return this.firstDayOfWeek() ?? this.translate(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  formatDate(date, format) {
    if (!date) return "";
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) iFormat++;
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) while (num.length < len) num = "0" + num;
      return num;
    }, formatName = (match, value, shortNames, longNames) => lookAhead(match) ? longNames[value] : shortNames[value];
    let output2 = "";
    let literal = false;
    if (date) for (iFormat = 0; iFormat < format.length; iFormat++) if (literal) {
      if (format.charAt(iFormat) === "'" && !lookAhead("'")) literal = false;
      else output2 += format.charAt(iFormat);
    } else switch (format.charAt(iFormat)) {
      case "d":
        output2 += formatNumber("d", date.getDate(), 2);
        break;
      case "D":
        output2 += formatName("D", date.getDay(), this.translate(TranslationKeys.DAY_NAMES_SHORT), this.translate(TranslationKeys.DAY_NAMES));
        break;
      case "o":
        output2 += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
        break;
      case "m":
        output2 += formatNumber("m", date.getMonth() + 1, 2);
        break;
      case "M":
        output2 += formatName("M", date.getMonth(), this.translate(TranslationKeys.MONTH_NAMES_SHORT), this.translate(TranslationKeys.MONTH_NAMES));
        break;
      case "y":
        output2 += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
        break;
      case "@":
        output2 += date.getTime();
        break;
      case "!":
        output2 += date.getTime() * 1e4 + this.ticksTo1970;
        break;
      case "'":
        if (lookAhead("'")) output2 += "'";
        else literal = true;
        break;
      default:
        output2 += format.charAt(iFormat);
    }
    return output2;
  }
  formatTime(date) {
    if (!date) return "";
    let output2 = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat() == "12" && hours > 11 && hours != 12) hours -= 12;
    if (this.hourFormat() == "12") output2 += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    else output2 += hours < 10 ? "0" + hours : hours;
    output2 += ":";
    output2 += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds()) {
      output2 += ":";
      output2 += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat() == "12") output2 += date.getHours() > 11 ? " PM" : " AM";
    return output2;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds() ? 3 : 2;
    if (tokens.length !== validTokenLength) throw "Invalid time";
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s2 = this.showSeconds() ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat() == "12" && h > 12 || this.showSeconds() && (isNaN(s2) || s2 > 59)) throw "Invalid time";
    else {
      if (this.hourFormat() == "12") {
        if (h !== 12 && this.pm()) h += 12;
        else if (!this.pm() && h === 12) h -= 12;
      }
      return {
        hour: h,
        minute: m,
        second: s2
      };
    }
  }
  parseDate(value, format) {
    if (format == null || value == null) throw "Invalid arguments";
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") return null;
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff() !== "string" ? this.shortYearCutoff() : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff(), 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) iFormat++;
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, digits = new RegExp("^\\d{" + (match === "y" ? size : 1) + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) throw "Missing number at position " + iValue;
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) names.push([i, arr[i]]);
      names.sort((a, b) => -(a[1].length - b[1].length));
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) return index + 1;
      else throw "Unknown name at position " + iValue;
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) throw "Unexpected literal at position " + iValue;
      iValue++;
    };
    if (this.view() === "month") day = 1;
    for (iFormat = 0; iFormat < format.length; iFormat++) if (literal) {
      if (format.charAt(iFormat) === "'" && !lookAhead("'")) literal = false;
      else checkLiteral();
    } else switch (format.charAt(iFormat)) {
      case "d":
        day = getNumber("d");
        break;
      case "D":
        getName("D", this.translate(TranslationKeys.DAY_NAMES_SHORT), this.translate(TranslationKeys.DAY_NAMES));
        break;
      case "o":
        doy = getNumber("o");
        break;
      case "m":
        month = getNumber("m");
        break;
      case "M":
        month = getName("M", this.translate(TranslationKeys.MONTH_NAMES_SHORT), this.translate(TranslationKeys.MONTH_NAMES));
        break;
      case "y":
        year = getNumber("y");
        break;
      case "@":
        date = new Date(getNumber("@"));
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        break;
      case "!":
        date = /* @__PURE__ */ new Date((getNumber("!") - this.ticksTo1970) / 1e4);
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        break;
      case "'":
        if (lookAhead("'")) checkLiteral();
        else literal = true;
        break;
      default:
        checkLiteral();
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) throw "Extra/unparsed characters found in date: " + extra;
    }
    if (year === -1) year = (/* @__PURE__ */ new Date()).getFullYear();
    else if (year < 100) year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    if (doy > -1) {
      month = 1;
      day = doy;
      for (; ; ) {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) break;
        month++;
        day -= dim;
      }
    }
    if (this.view() === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) throw "Invalid date";
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) return null;
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  isValidDateForTimeConstraints(selectedDate) {
    if (this.keepInvalid()) return true;
    return (!this.minDate() || selectedDate >= this.minDate()) && (!this.maxDate() || selectedDate <= this.maxDate());
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(date);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (isPlatformBrowser(this.platformId) && this.numberOfMonths() > 1 && this.responsiveOptions()) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        ce(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions()) {
        let responsiveOptions = [...this.responsiveOptions() || []].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, { numeric: true }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let { breakpoint, numMonths } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths(); j++) styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
      ce(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
        if (this.isOutsideClicked(event2) && this.overlayVisible()) {
          this.hideOverlay();
          this.onClickOutside.emit(event2);
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && !this.touchUI()) this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
      if (this.overlayVisible()) this.hideOverlay();
    });
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
  }
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return I2(event2.target, "p-datepicker-prev-button") || I2(event2.target, "p-datepicker-prev-icon") || I2(event2.target, "p-datepicker-next-button") || I2(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible() && !re()) this.hideOverlay();
  }
  onOverlayHide() {
    this.currentView.set(this.view());
    if (this.mask) this.destroyMask();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  writeControlValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") try {
      this.value = this.parseValueFromString(this.value);
    } catch (e4) {
      if (this.keepInvalid()) this.value = value;
    }
    this.updateInputfield();
    this.updateUI();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) this.translationSubscription.unsubscribe();
    if (this.overlay && this.autoZIndex()) ZIndexUtils.clear(this.overlay);
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static \u0275fac = function DatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DatePicker2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["date"];
    const _c1 = ["header"];
    const _c2 = ["footer"];
    const _c3 = ["disabledDate"];
    const _c4 = ["decade"];
    const _c5 = ["previousicon"];
    const _c6 = ["nexticon"];
    const _c7 = ["triggericon"];
    const _c8 = ["clearicon"];
    const _c9 = ["decrementicon"];
    const _c10 = ["incrementicon"];
    const _c11 = ["inputicon"];
    const _c12 = ["buttonbar"];
    const _c13 = ["inputfield"];
    const _c14 = ["contentWrapper"];
    const _c15 = [[["p-header"]], [["p-footer"]]];
    const _c16 = ["p-header", "p-footer"];
    const _c17 = (a0) => ({
      date: a0
    });
    const _c18 = (a0, a1) => ({
      month: a0,
      index: a1
    });
    const _c19 = (a0) => ({
      year: a0
    });
    const _forTrack0 = ($index, $item) => $item.day;
    function DatePicker_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275elementStart(0, "svg", 8);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_0_Conditional_2_Conditional_0_Template_svg_click_0_listener() {
          i05.\u0275\u0275restoreView(_r3);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.clear());
        });
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("clearIcon"));
        i05.\u0275\u0275styleProp("visibility", ctx_r1.showClearIcon() ? null : "hidden");
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("inputIcon"));
      }
    }
    function DatePicker_Conditional_0_Conditional_2_Conditional_1_1_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_0_Conditional_2_Conditional_1_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_0_Conditional_2_Conditional_1_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "span", 9);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_0_Conditional_2_Conditional_1_Template_span_click_0_listener() {
          i05.\u0275\u0275restoreView(_r4);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.clear());
        });
        i05.\u0275\u0275template(1, DatePicker_Conditional_0_Conditional_2_Conditional_1_1_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("clearIcon"));
        i05.\u0275\u0275styleProp("visibility", ctx_r1.showClearIcon() ? null : "hidden");
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("inputIcon"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.clearIconTemplate());
      }
    }
    function DatePicker_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275conditionalCreate(0, DatePicker_Conditional_0_Conditional_2_Conditional_0_Template, 1, 5, ":svg:svg", 6)(1, DatePicker_Conditional_0_Conditional_2_Conditional_1_Template, 2, 6, "span", 7);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275conditional(!ctx_r1.clearIconTemplate() ? 0 : 1);
      }
    }
    function DatePicker_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275element(0, "span", 12);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.icon());
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
      }
    }
    function DatePicker_Conditional_0_Conditional_3_Conditional_2_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 13);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("dropdownIcon"));
      }
    }
    function DatePicker_Conditional_0_Conditional_3_Conditional_2_1_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_0_Conditional_3_Conditional_2_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_0_Conditional_3_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275conditionalCreate(0, DatePicker_Conditional_0_Conditional_3_Conditional_2_Conditional_0_Template, 1, 1, ":svg:svg", 13);
        i05.\u0275\u0275template(1, DatePicker_Conditional_0_Conditional_3_Conditional_2_1_Template, 1, 0, null, 10);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275conditional(!ctx_r1.triggerIconTemplate() ? 0 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.triggerIconTemplate());
      }
    }
    function DatePicker_Conditional_0_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 11);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_0_Conditional_3_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r5);
          i05.\u0275\u0275nextContext();
          const inputfield_r6 = i05.\u0275\u0275reference(1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onButtonClick($event, inputfield_r6));
        });
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_0_Conditional_3_Conditional_1_Template, 1, 3, "span", 5)(2, DatePicker_Conditional_0_Conditional_3_Conditional_2_Template, 2, 2);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("dropdown"));
        i05.\u0275\u0275property("disabled", ctx_r1.$disabled())("pBind", ctx_r1.ptm("dropdown"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", ctx_r1.overlayVisible())("aria-controls", ctx_r1.ariaControlsAttr());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.icon() ? 1 : 2);
      }
    }
    function DatePicker_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275elementStart(0, "svg", 16);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_0_Conditional_4_Conditional_1_Template_svg_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r7);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onButtonClick($event));
        });
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("inputIcon"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("inputIcon"));
      }
    }
    function DatePicker_Conditional_0_Conditional_4_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_0_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span", 12);
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_0_Conditional_4_Conditional_1_Template, 1, 3, ":svg:svg", 14);
        i05.\u0275\u0275template(2, DatePicker_Conditional_0_Conditional_4_ng_container_2_Template, 1, 0, "ng-container", 15);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("inputIconContainer"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("inputIconContainer"));
        i05.\u0275\u0275attribute("data-p", ctx_r1.inputIconDataP);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.inputIconTemplate() ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.inputIconTemplate())("ngTemplateOutletContext", ctx_r1.inputIconTemplateContext());
      }
    }
    function DatePicker_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "input", 3, 0);
        i05.\u0275\u0275listener("focus", function DatePicker_Conditional_0_Template_input_focus_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onInputFocus($event));
        })("keydown", function DatePicker_Conditional_0_Template_input_keydown_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onInputKeydown($event));
        })("click", function DatePicker_Conditional_0_Template_input_click_0_listener() {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onInputClick());
        })("blur", function DatePicker_Conditional_0_Template_input_blur_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onInputBlur($event));
        })("input", function DatePicker_Conditional_0_Template_input_input_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onUserInput($event));
        });
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_0_Conditional_2_Template, 2, 1);
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_0_Conditional_3_Template, 3, 8, "button", 4);
        i05.\u0275\u0275conditionalCreate(4, DatePicker_Conditional_0_Conditional_4_Template, 3, 7, "span", 5);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275styleMap(ctx_r1.inputStyle());
        i05.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("pcInputText"), ctx_r1.inputStyleClass()));
        i05.\u0275\u0275property("pSize", ctx_r1.size())("value", ctx_r1.inputFieldValue())("pAutoFocus", ctx_r1.autofocus())("variant", ctx_r1.$variant())("fluid", ctx_r1.hasFluid)("invalid", ctx_r1.invalid())("pt", ctx_r1.ptm("pcInputText"))("unstyled", ctx_r1.unstyled());
        i05.\u0275\u0275attribute("size", ctx_r1.inputSize())("id", ctx_r1.inputId())("name", ctx_r1.name())("aria-required", ctx_r1.required())("aria-expanded", ctx_r1.overlayVisible())("aria-controls", ctx_r1.ariaControlsAttr())("aria-labelledby", ctx_r1.ariaLabelledBy())("aria-label", ctx_r1.ariaLabel())("required", ctx_r1.requiredAttr())("readonly", ctx_r1.readonlyAttr())("disabled", ctx_r1.disabledAttr())("placeholder", ctx_r1.placeholder())("tabindex", ctx_r1.tabindex())("inputmode", ctx_r1.inputModeAttr());
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275conditional(ctx_r1.clearIconEnabled() ? 2 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showIconButton() ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showInputIcon() ? 4 : -1);
      }
    }
    function DatePicker_Conditional_1_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 19);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_1_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span");
        i05.\u0275\u0275template(1, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_1_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.previousIconTemplate());
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        const _r10 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 23);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_6_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r10);
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.switchToMonthView($event));
        })("keydown", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_6_Template_button_keydown_0_listener($event) {
          i05.\u0275\u0275restoreView(_r10);
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const month_r11 = i05.\u0275\u0275nextContext().$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("selectMonth"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("selectMonth"));
        i05.\u0275\u0275attribute("disabled", ctx_r1.switchViewButtonDisabledAttr())("aria-label", ctx_r1.getMonthSelectAriaLabel(month_r11))("data-pc-group-section", "navigator");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r1.getMonthName(month_r11.month), " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        const _r12 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 23);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_7_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r12);
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.switchToYearView($event));
        })("keydown", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_7_Template_button_keydown_0_listener($event) {
          i05.\u0275\u0275restoreView(_r12);
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const month_r11 = i05.\u0275\u0275nextContext().$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("selectYear"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("selectYear"));
        i05.\u0275\u0275attribute("disabled", ctx_r1.switchViewButtonDisabledAttr())("aria-label", ctx_r1.getYearSelectAriaLabel(month_r11))("data-pc-group-section", "navigator");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r1.getYear(month_r11), " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275text(0);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(5);
        i05.\u0275\u0275textInterpolate2(" ", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1], " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "span", 12);
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_Conditional_1_Template, 1, 2);
        i05.\u0275\u0275template(2, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_ng_container_2_Template, 1, 0, "ng-container", 15);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r1.cx("decade"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("decade"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.decadeTemplate() ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.decadeTemplate())("ngTemplateOutletContext", ctx_r1.decadeTemplateContext());
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_10_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 21);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_0_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_0_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_0_Template, 1, 0, null, 10);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.nextIconTemplate());
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "th", 12)(1, "span", 12);
        i05.\u0275\u0275text(2);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(5);
        i05.\u0275\u0275classMap(ctx_r1.cx("weekHeader"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekHeader"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekHeaderLabel"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.translate("weekHeader"));
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_5_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "th", 26)(1, "span", 12);
        i05.\u0275\u0275text(2);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const weekDay_r13 = ctx.$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(5);
        i05.\u0275\u0275classMap(ctx_r1.cx("weekDayCell"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekDayCell"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("weekDay"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekDay"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(weekDay_r13);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "td", 12)(1, "span", 12);
        i05.\u0275\u0275text(2);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const \u0275$index_117_r14 = i05.\u0275\u0275nextContext().$index;
        const month_r11 = i05.\u0275\u0275nextContext(2).$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("weekNumber"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekNumber"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("weekLabelContainer"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("weekLabelContainer"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", month_r11.weekNumbers[\u0275$index_117_r14], " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275text(0);
      }
      if (rf & 2) {
        const date_r16 = i05.\u0275\u0275nextContext(2).$implicit;
        i05.\u0275\u0275textInterpolate1(" ", date_r16.day, " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 15);
      }
      if (rf & 2) {
        const date_r16 = i05.\u0275\u0275nextContext(2).$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(6);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.dateTemplate())("ngTemplateOutletContext", ctx_r1.getDateTemplateContext(date_r16));
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_3_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 15);
      }
      if (rf & 2) {
        const date_r16 = i05.\u0275\u0275nextContext(2).$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(6);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.disabledDateTemplate())("ngTemplateOutletContext", ctx_r1.getDateTemplateContext(date_r16));
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 28);
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_r16 = i05.\u0275\u0275nextContext(2).$implicit;
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", date_r16.day, " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r15 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "span", 27);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Template_span_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r15);
          const date_r16 = i05.\u0275\u0275nextContext().$implicit;
          const ctx_r1 = i05.\u0275\u0275nextContext(6);
          return i05.\u0275\u0275resetView(ctx_r1.onDateSelect($event, date_r16));
        })("keydown", function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Template_span_keydown_0_listener($event) {
          i05.\u0275\u0275restoreView(_r15);
          const date_r16 = i05.\u0275\u0275nextContext().$implicit;
          const \u0275$index_50_r17 = i05.\u0275\u0275nextContext(3).$index;
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onDateCellKeydown($event, date_r16, \u0275$index_50_r17));
        });
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_1_Template, 1, 1);
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_2_Template, 1, 2, "ng-container");
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_3_Template, 1, 2, "ng-container");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275conditionalCreate(4, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Conditional_4_Template, 2, 1, "div", 28);
      }
      if (rf & 2) {
        const date_r16 = i05.\u0275\u0275nextContext().$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(6);
        i05.\u0275\u0275classMap(ctx_r1.dayClass(date_r16));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("day"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.getDateCellAriaLabel(date_r16))("aria-selected", ctx_r1.isSelected(date_r16) ? "true" : null)("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r16)));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.dateTemplate() && (date_r16.selectable || !ctx_r1.disabledDateTemplate()) ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(date_r16.selectable || !ctx_r1.disabledDateTemplate() ? 2 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!date_r16.selectable ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.isSelected(date_r16) ? 4 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "td", 12);
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Conditional_1_Template, 5, 10);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const date_r16 = ctx.$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(6);
        i05.\u0275\u0275classMap(ctx_r1.cx("dayCell", i05.\u0275\u0275pureFunction1(6, _c17, date_r16)));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("dayCell"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.getDateCellAriaLabel(date_r16))("aria-selected", ctx_r1.isSelected(date_r16) ? "true" : null);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional((date_r16.otherMonth ? ctx_r1.showOtherMonths() : true) ? 1 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "tr", 12);
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_Conditional_1_Template, 3, 7, "td", 5);
        i05.\u0275\u0275repeaterCreate(2, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_For_3_Template, 2, 8, "td", 5, _forTrack0);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const week_r18 = ctx.$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(5);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("tableBodyRow"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showWeek() ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(week_r18);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "table", 24)(1, "thead", 12)(2, "tr", 12);
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_Conditional_3_Template, 3, 5, "th", 5);
        i05.\u0275\u0275repeaterCreate(4, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_5_Template, 3, 7, "th", 25, i05.\u0275\u0275repeaterTrackByIdentity);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275elementStart(6, "tbody", 12);
        i05.\u0275\u0275repeaterCreate(7, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_For_8_Template, 4, 2, "tr", 12, i05.\u0275\u0275repeaterTrackByIndex);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const month_r11 = i05.\u0275\u0275nextContext().$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("dayView"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("table"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("tableHeader"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("tableHeaderRow"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showWeek() ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r1.weekDays());
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("tableBody"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r1.getMonthWeeks(month_r11));
      }
    }
    function DatePicker_Conditional_1_Conditional_4_For_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "div", 12)(2, "button", 18);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_4_For_2_Template_button_keydown_2_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_4_For_2_Template_button_click_2_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onPrevButtonClick($event));
        });
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_3_Template, 1, 0, ":svg:svg", 19)(4, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_4_Template, 2, 1, "span");
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(5, "div", 12);
        i05.\u0275\u0275conditionalCreate(6, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_6_Template, 2, 7, "button", 20);
        i05.\u0275\u0275conditionalCreate(7, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_7_Template, 2, 7, "button", 20);
        i05.\u0275\u0275conditionalCreate(8, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_8_Template, 3, 6, "span", 5);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(9, "button", 18);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_4_For_2_Template_button_keydown_9_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_4_For_2_Template_button_click_9_listener($event) {
          i05.\u0275\u0275restoreView(_r9);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onNextButtonClick($event));
        });
        i05.\u0275\u0275conditionalCreate(10, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_10_Template, 1, 0, ":svg:svg", 21)(11, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_11_Template, 1, 1);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275conditionalCreate(12, DatePicker_Conditional_1_Conditional_4_For_2_Conditional_12_Template, 9, 7, "table", 22);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const \u0275$index_50_r17 = ctx.$index;
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("calendar"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("calendar"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("header"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("header"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275styleMap(ctx_r1.getPrevButtonStyle(\u0275$index_50_r17));
        i05.\u0275\u0275classMap(ctx_r1.cx("pcPrevButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcPrevButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.prevIconAriaLabel)("data-pc-group-section", "navigator");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.previousIconTemplate() ? 3 : 4);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("title"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("title"));
        i05.\u0275\u0275attribute("aria-live", "polite")("aria-atomic", "true");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.currentView() === "date" ? 6 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.currentView() !== "year" ? 7 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.currentView() === "year" ? 8 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275styleMap(ctx_r1.getNextButtonStyle(\u0275$index_50_r17));
        i05.\u0275\u0275classMap(ctx_r1.cx("pcNextButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcNextButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.nextIconAriaLabel)("data-pc-group-section", "navigator");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.nextIconTemplate() ? 10 : 11);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275conditional(ctx_r1.currentView() === "date" ? 12 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 28);
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const m_r21 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", m_r21, " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r19 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "span", 30);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Template_span_click_0_listener($event) {
          const \u0275$index_151_r20 = i05.\u0275\u0275restoreView(_r19).$index;
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onMonthSelect($event, \u0275$index_151_r20));
        })("keydown", function DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Template_span_keydown_0_listener($event) {
          const \u0275$index_151_r20 = i05.\u0275\u0275restoreView(_r19).$index;
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onMonthCellKeydown($event, \u0275$index_151_r20));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Conditional_2_Template, 2, 1, "div", 28);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const m_r21 = ctx.$implicit;
        const \u0275$index_151_r20 = ctx.$index;
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r1.cx("month", i05.\u0275\u0275pureFunction2(5, _c18, m_r21, \u0275$index_151_r20)));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("month"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", m_r21, " ");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.isMonthSelected(\u0275$index_151_r20) ? 2 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12);
        i05.\u0275\u0275repeaterCreate(1, DatePicker_Conditional_1_Conditional_4_Conditional_3_For_2_Template, 3, 8, "span", 29, i05.\u0275\u0275repeaterTrackByIdentity);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("monthView"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("monthView"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r1.monthPickerValues());
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 28);
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const y_r23 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", y_r23, " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r22 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "span", 30);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Template_span_click_0_listener($event) {
          const y_r23 = i05.\u0275\u0275restoreView(_r22).$implicit;
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onYearSelect($event, y_r23));
        })("keydown", function DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Template_span_keydown_0_listener($event) {
          const y_r23 = i05.\u0275\u0275restoreView(_r22).$implicit;
          const ctx_r1 = i05.\u0275\u0275nextContext(4);
          return i05.\u0275\u0275resetView(ctx_r1.onYearCellKeydown($event, y_r23));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Conditional_2_Template, 2, 1, "div", 28);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const y_r23 = ctx.$implicit;
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r1.cx("year", i05.\u0275\u0275pureFunction1(5, _c19, y_r23)));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("year"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", y_r23, " ");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.isYearSelected(y_r23) ? 2 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12);
        i05.\u0275\u0275repeaterCreate(1, DatePicker_Conditional_1_Conditional_4_Conditional_4_For_2_Template, 3, 7, "span", 29, i05.\u0275\u0275repeaterTrackByIndex);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("yearView"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("yearView"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r1.yearPickerValues());
      }
    }
    function DatePicker_Conditional_1_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12);
        i05.\u0275\u0275repeaterCreate(1, DatePicker_Conditional_1_Conditional_4_For_2_Template, 13, 31, "div", 5, i05.\u0275\u0275repeaterTrackByIndex);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_1_Conditional_4_Conditional_3_Template, 3, 3, "div", 5);
        i05.\u0275\u0275conditionalCreate(4, DatePicker_Conditional_1_Conditional_4_Conditional_4_Template, 3, 3, "div", 5);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("calendarContainer"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("calendarContainer"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275repeater(ctx_r1.months());
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275conditional(ctx_r1.currentView() === "month" ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.currentView() === "year" ? 4 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 32);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_4_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_4_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 33);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_9_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_9_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_9_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_15_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 32);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_16_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_16_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_16_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_20_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 33);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_21_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_21_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_21_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_22_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "span", 12);
        i05.\u0275\u0275text(2);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("separator"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separatorContainer"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separator"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.timeSeparator());
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 32);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_3_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_Conditional_23_3_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 33);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_8_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_Conditional_23_8_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template(rf, ctx) {
      if (rf & 1) {
        const _r25 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_enter_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.incrementSecond($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_space_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.incrementSecond($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mousedown_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mouseup_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keyup_enter_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keyup_space_1_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mouseleave_1_listener() {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_1_Conditional_5_Conditional_23_Conditional_2_Template, 1, 1, ":svg:svg", 32);
        i05.\u0275\u0275template(3, DatePicker_Conditional_1_Conditional_5_Conditional_23_3_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(4, "span", 12);
        i05.\u0275\u0275text(5);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(6, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_enter_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.decrementSecond($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keydown_space_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.decrementSecond($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mousedown_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mouseup_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keyup_enter_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_keyup_space_6_listener($event) {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Conditional_23_Template_button_mouseleave_6_listener() {
          i05.\u0275\u0275restoreView(_r25);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(7, DatePicker_Conditional_1_Conditional_5_Conditional_23_Conditional_7_Template, 1, 1, ":svg:svg", 33);
        i05.\u0275\u0275template(8, DatePicker_Conditional_1_Conditional_5_Conditional_23_8_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("secondPicker"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("secondPicker"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcIncrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcIncrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("nextSecond"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.incrementIconTemplate() ? 2 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("second"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.formattedSecond());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcDecrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcDecrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("prevSecond"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.decrementIconTemplate() ? 7 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate());
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_24_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "span", 12);
        i05.\u0275\u0275text(2);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("separator"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separatorContainer"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separator"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.timeSeparator());
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 32);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_3_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_Conditional_25_3_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 33);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_8_ng_template_0_Template(rf, ctx) {
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_5_Conditional_25_8_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template(rf, ctx) {
      if (rf & 1) {
        const _r26 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "button", 35);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_keydown_1_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_click_1_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.toggleAMPM($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_keydown_enter_1_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.toggleAMPM($event));
        });
        i05.\u0275\u0275conditionalCreate(2, DatePicker_Conditional_1_Conditional_5_Conditional_25_Conditional_2_Template, 1, 1, ":svg:svg", 32);
        i05.\u0275\u0275template(3, DatePicker_Conditional_1_Conditional_5_Conditional_25_3_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(4, "span", 12);
        i05.\u0275\u0275text(5);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(6, "button", 35);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_keydown_6_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_click_6_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.toggleAMPM($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Conditional_25_Template_button_keydown_enter_6_listener($event) {
          i05.\u0275\u0275restoreView(_r26);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.toggleAMPM($event));
        });
        i05.\u0275\u0275conditionalCreate(7, DatePicker_Conditional_1_Conditional_5_Conditional_25_Conditional_7_Template, 1, 1, ":svg:svg", 33);
        i05.\u0275\u0275template(8, DatePicker_Conditional_1_Conditional_5_Conditional_25_8_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cx("ampmPicker"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("ampmPicker"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcIncrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcIncrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("am"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.incrementIconTemplate() ? 2 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("ampm"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.ampmLabel());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcDecrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcDecrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("pm"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.decrementIconTemplate() ? 7 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate());
      }
    }
    function DatePicker_Conditional_1_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        const _r24 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div", 12)(1, "div", 12)(2, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_enter_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.incrementHour($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_space_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.incrementHour($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Template_button_mousedown_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseup_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_enter_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_space_2_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseleave_2_listener() {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(3, DatePicker_Conditional_1_Conditional_5_Conditional_3_Template, 1, 1, ":svg:svg", 32);
        i05.\u0275\u0275template(4, DatePicker_Conditional_1_Conditional_5_4_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(5, "span", 12);
        i05.\u0275\u0275text(6);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(7, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_enter_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.decrementHour($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_space_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.decrementHour($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Template_button_mousedown_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseup_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_enter_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_space_7_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseleave_7_listener() {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(8, DatePicker_Conditional_1_Conditional_5_Conditional_8_Template, 1, 1, ":svg:svg", 33);
        i05.\u0275\u0275template(9, DatePicker_Conditional_1_Conditional_5_9_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275elementStart(10, "div", 34)(11, "span", 12);
        i05.\u0275\u0275text(12);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275elementStart(13, "div", 12)(14, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_enter_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.incrementMinute($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_space_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.incrementMinute($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Template_button_mousedown_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseup_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_enter_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_space_14_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseleave_14_listener() {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(15, DatePicker_Conditional_1_Conditional_5_Conditional_15_Template, 1, 1, ":svg:svg", 32);
        i05.\u0275\u0275template(16, DatePicker_Conditional_1_Conditional_5_16_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(17, "span", 12);
        i05.\u0275\u0275text(18);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(19, "button", 31);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("keydown.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_enter_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.decrementMinute($event));
        })("keydown.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keydown_space_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.decrementMinute($event));
        })("mousedown", function DatePicker_Conditional_1_Conditional_5_Template_button_mousedown_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
        })("mouseup", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseup_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.enter", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_enter_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("keyup.space", function DatePicker_Conditional_1_Conditional_5_Template_button_keyup_space_19_listener($event) {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseUp($event));
        })("mouseleave", function DatePicker_Conditional_1_Conditional_5_Template_button_mouseleave_19_listener() {
          i05.\u0275\u0275restoreView(_r24);
          const ctx_r1 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r1.onTimePickerElementMouseLeave());
        });
        i05.\u0275\u0275conditionalCreate(20, DatePicker_Conditional_1_Conditional_5_Conditional_20_Template, 1, 1, ":svg:svg", 33);
        i05.\u0275\u0275template(21, DatePicker_Conditional_1_Conditional_5_21_Template, 1, 0, null, 10);
        i05.\u0275\u0275elementEnd()();
        i05.\u0275\u0275conditionalCreate(22, DatePicker_Conditional_1_Conditional_5_Conditional_22_Template, 3, 5, "div", 5);
        i05.\u0275\u0275conditionalCreate(23, DatePicker_Conditional_1_Conditional_5_Conditional_23_Template, 9, 19, "div", 5);
        i05.\u0275\u0275conditionalCreate(24, DatePicker_Conditional_1_Conditional_5_Conditional_24_Template, 3, 5, "div", 5);
        i05.\u0275\u0275conditionalCreate(25, DatePicker_Conditional_1_Conditional_5_Conditional_25_Template, 9, 19, "div", 5);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("timePicker"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("timePicker"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("hourPicker"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("hourPicker"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcIncrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcIncrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("nextHour"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.incrementIconTemplate() ? 3 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("hour"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.formattedHour());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcDecrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcDecrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("prevHour"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.decrementIconTemplate() ? 8 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separatorContainer"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("separator"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.timeSeparator());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("minutePicker"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("minutePicker"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcIncrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcIncrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("nextMinute"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.incrementIconTemplate() ? 15 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.incrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("minute"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r1.formattedMinute());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cx("pcDecrementButton"));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcDecrementButton"));
        i05.\u0275\u0275attribute("aria-label", ctx_r1.translate("prevMinute"))("data-pc-group-section", "timepickerbutton");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.decrementIconTemplate() ? 20 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.decrementIconTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showSeconds() ? 22 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showSeconds() ? 23 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.isHourFormat12() ? 24 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.isHourFormat12() ? 25 : -1);
      }
    }
    function DatePicker_Conditional_1_Conditional_6_Conditional_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Conditional_6_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, DatePicker_Conditional_1_Conditional_6_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 15);
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.buttonBarTemplate())("ngTemplateOutletContext", ctx_r1.buttonBarTemplateContext());
      }
    }
    function DatePicker_Conditional_1_Conditional_6_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r27 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "button", 36);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_6_Conditional_2_Template_button_keydown_0_listener($event) {
          i05.\u0275\u0275restoreView(_r27);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_6_Conditional_2_Template_button_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r27);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onTodayButtonClick($event));
        });
        i05.\u0275\u0275text(1);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(2, "button", 36);
        i05.\u0275\u0275listener("keydown", function DatePicker_Conditional_1_Conditional_6_Conditional_2_Template_button_keydown_2_listener($event) {
          i05.\u0275\u0275restoreView(_r27);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onContainerButtonKeydown($event));
        })("click", function DatePicker_Conditional_1_Conditional_6_Conditional_2_Template_button_click_2_listener($event) {
          i05.\u0275\u0275restoreView(_r27);
          const ctx_r1 = i05.\u0275\u0275nextContext(3);
          return i05.\u0275\u0275resetView(ctx_r1.onClearButtonClick($event));
        });
        i05.\u0275\u0275text(3);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("pcTodayButton"), ctx_r1.todayButtonStyleClass()));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcTodayButton"));
        i05.\u0275\u0275attribute("data-pc-group-section", "button");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r1.translate("today"), " ");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("pcClearButton"), ctx_r1.clearButtonStyleClass()));
        i05.\u0275\u0275property("pButtonPT", ctx_r1.ptm("pcClearButton"));
        i05.\u0275\u0275attribute("data-pc-group-section", "button");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r1.translate("clear"), " ");
      }
    }
    function DatePicker_Conditional_1_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 12);
        i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Conditional_6_Conditional_1_Template, 1, 2, "ng-container")(2, DatePicker_Conditional_1_Conditional_6_Conditional_2_Template, 4, 10);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275classMap(ctx_r1.cx("buttonbar"));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("buttonbar"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.buttonBarTemplate() ? 1 : 2);
      }
    }
    function DatePicker_Conditional_1_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function DatePicker_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div", 17, 1);
        i05.\u0275\u0275listener("click", function DatePicker_Conditional_1_Template_div_click_0_listener($event) {
          i05.\u0275\u0275restoreView(_r8);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onOverlayClick($event));
        })("pMotionOnBeforeEnter", function DatePicker_Conditional_1_Template_div_pMotionOnBeforeEnter_0_listener($event) {
          i05.\u0275\u0275restoreView(_r8);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onOverlayBeforeEnter($event));
        })("pMotionOnAfterLeave", function DatePicker_Conditional_1_Template_div_pMotionOnAfterLeave_0_listener($event) {
          i05.\u0275\u0275restoreView(_r8);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onOverlayAfterLeave($event));
        });
        i05.\u0275\u0275projection(2);
        i05.\u0275\u0275template(3, DatePicker_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 10);
        i05.\u0275\u0275conditionalCreate(4, DatePicker_Conditional_1_Conditional_4_Template, 5, 5);
        i05.\u0275\u0275conditionalCreate(5, DatePicker_Conditional_1_Conditional_5_Template, 26, 48, "div", 5);
        i05.\u0275\u0275conditionalCreate(6, DatePicker_Conditional_1_Conditional_6_Template, 3, 4, "div", 5);
        i05.\u0275\u0275projection(7, 1);
        i05.\u0275\u0275template(8, DatePicker_Conditional_1_ng_container_8_Template, 1, 0, "ng-container", 10);
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275styleMap(ctx_r1.panelStyle());
        i05.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("panel"), ctx_r1.panelStyleClass()));
        i05.\u0275\u0275property("pBind", ctx_r1.ptm("panel"))("pMotion", ctx_r1.isOverlayVisible())("pMotionName", "p-anchored-overlay")("pMotionAppear", !ctx_r1.inline())("pMotionOptions", ctx_r1.computedMotionOptions());
        i05.\u0275\u0275attribute("id", ctx_r1.panelId)("aria-label", ctx_r1.translate("chooseDate"))("role", ctx_r1.roleAttr())("aria-modal", ctx_r1.ariaModalAttr());
        i05.\u0275\u0275advance(3);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r1.timeOnly() ? 4 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showTimePicker() ? 5 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r1.showButtonBar() ? 6 : -1);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r1.footerTemplate());
      }
    }
    return /* @__PURE__ */ i05.\u0275\u0275defineComponent({
      type: DatePicker2,
      selectors: [["p-datepicker"], ["p-date-picker"]],
      contentQueries: function DatePicker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i05.\u0275\u0275contentQuerySignal(dirIndex, ctx.dateTemplate, _c0, 4)(dirIndex, ctx.headerTemplate, _c1, 4)(dirIndex, ctx.footerTemplate, _c2, 4)(dirIndex, ctx.disabledDateTemplate, _c3, 4)(dirIndex, ctx.decadeTemplate, _c4, 4)(dirIndex, ctx.previousIconTemplate, _c5, 4)(dirIndex, ctx.nextIconTemplate, _c6, 4)(dirIndex, ctx.triggerIconTemplate, _c7, 4)(dirIndex, ctx.clearIconTemplate, _c8, 4)(dirIndex, ctx.decrementIconTemplate, _c9, 4)(dirIndex, ctx.incrementIconTemplate, _c10, 4)(dirIndex, ctx.inputIconTemplate, _c11, 4)(dirIndex, ctx.buttonBarTemplate, _c12, 4);
        }
        if (rf & 2) {
          i05.\u0275\u0275queryAdvance(13);
        }
      },
      viewQuery: function DatePicker_Query(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275viewQuerySignal(ctx.inputfieldViewChild, _c13, 5)(ctx.contentWrapperViewChild, _c14, 5);
        }
        if (rf & 2) {
          i05.\u0275\u0275queryAdvance(2);
        }
      },
      hostVars: 4,
      hostBindings: function DatePicker_HostBindings(rf, ctx) {
        if (rf & 2) {
          i05.\u0275\u0275styleMap(ctx.sx("root"));
          i05.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        iconDisplay: [1, "iconDisplay"],
        inputStyle: [1, "inputStyle"],
        inputId: [1, "inputId"],
        inputStyleClass: [1, "inputStyleClass"],
        placeholder: [1, "placeholder"],
        ariaLabelledBy: [1, "ariaLabelledBy"],
        ariaLabel: [1, "ariaLabel"],
        iconAriaLabel: [1, "iconAriaLabel"],
        dateFormat: [1, "dateFormat"],
        multipleSeparator: [1, "multipleSeparator"],
        rangeSeparator: [1, "rangeSeparator"],
        inline: [1, "inline"],
        showOtherMonths: [1, "showOtherMonths"],
        selectOtherMonths: [1, "selectOtherMonths"],
        showIcon: [1, "showIcon"],
        icon: [1, "icon"],
        readonlyInput: [1, "readonlyInput"],
        shortYearCutoff: [1, "shortYearCutoff"],
        hourFormat: [1, "hourFormat"],
        timeOnly: [1, "timeOnly"],
        stepHour: [1, "stepHour"],
        stepMinute: [1, "stepMinute"],
        stepSecond: [1, "stepSecond"],
        showSeconds: [1, "showSeconds"],
        showOnFocus: [1, "showOnFocus"],
        showWeek: [1, "showWeek"],
        startWeekFromFirstDayOfYear: [1, "startWeekFromFirstDayOfYear"],
        showClear: [1, "showClear"],
        dataType: [1, "dataType"],
        selectionMode: [1, "selectionMode"],
        maxDateCount: [1, "maxDateCount"],
        showButtonBar: [1, "showButtonBar"],
        todayButtonStyleClass: [1, "todayButtonStyleClass"],
        clearButtonStyleClass: [1, "clearButtonStyleClass"],
        autofocus: [1, "autofocus"],
        autoZIndex: [1, "autoZIndex"],
        baseZIndex: [1, "baseZIndex"],
        panelStyleClass: [1, "panelStyleClass"],
        panelStyle: [1, "panelStyle"],
        keepInvalid: [1, "keepInvalid"],
        hideOnDateTimeSelect: [1, "hideOnDateTimeSelect"],
        touchUI: [1, "touchUI"],
        timeSeparator: [1, "timeSeparator"],
        focusTrap: [1, "focusTrap"],
        tabindex: [1, "tabindex"],
        minDate: [1, "minDate"],
        maxDate: [1, "maxDate"],
        disabledDates: [1, "disabledDates"],
        disabledDays: [1, "disabledDays"],
        showTime: [1, "showTime"],
        responsiveOptions: [1, "responsiveOptions"],
        numberOfMonths: [1, "numberOfMonths"],
        firstDayOfWeek: [1, "firstDayOfWeek"],
        view: [1, "view"],
        defaultDate: [1, "defaultDate"],
        appendTo: [1, "appendTo"],
        motionOptions: [1, "motionOptions"]
      },
      outputs: {
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClose: "onClose",
        onSelect: "onSelect",
        onClear: "onClear",
        onInput: "onInput",
        onTodayClick: "onTodayClick",
        onClearClick: "onClearClick",
        onMonthChange: "onMonthChange",
        onYearChange: "onYearChange",
        onClickOutside: "onClickOutside",
        onShow: "onShow"
      },
      features: [i05.\u0275\u0275ProvidersFeature([
        DATEPICKER_VALUE_ACCESSOR,
        DatePickerStyle,
        {
          provide: DATEPICKER_INSTANCE,
          useExisting: DatePicker2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: DatePicker2
        }
      ]), i05.\u0275\u0275HostDirectivesFeature([i1.Bind]), i05.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c16,
      decls: 2,
      vars: 2,
      consts: [["inputfield", ""], ["contentWrapper", ""], [3, "style", "class", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionOptions"], ["pInputText", "", "data-p-maskable", "", "type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "focus", "keydown", "click", "blur", "input", "pSize", "value", "pAutoFocus", "variant", "fluid", "invalid", "pt", "unstyled"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "class", "disabled", "pBind"], [3, "class", "pBind"], ["data-p-icon", "times", 3, "class", "visibility", "pBind"], [3, "class", "visibility", "pBind"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "click", "disabled", "pBind"], [3, "pBind"], ["data-p-icon", "calendar", 3, "pBind"], ["data-p-icon", "calendar", 3, "class", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "calendar", 3, "click", "pBind"], [3, "click", "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "pBind", "pMotion", "pMotionName", "pMotionAppear", "pMotionOptions"], ["type", "button", "pButton", "", "iconOnly", "", "rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "click", "pButtonPT"], ["data-p-icon", "chevron-left"], ["type", "button", "pRipple", "", 3, "class", "pBind"], ["data-p-icon", "chevron-right"], ["role", "grid", 3, "class", "pBind"], ["type", "button", "pRipple", "", 3, "click", "keydown", "pBind"], ["role", "grid", 3, "pBind"], ["scope", "col", 3, "class", "pBind"], ["scope", "col", 3, "pBind"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "pBind"], ["aria-live", "polite", 1, "p-hidden-accessible"], ["pRipple", "", 3, "class", "pBind"], ["pRipple", "", 3, "click", "keydown", "pBind"], ["type", "button", "pButton", "", "iconOnly", "", "rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave", "pButtonPT"], ["data-p-icon", "chevron-up", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"], [1, "p-datepicker-separator", 3, "pBind"], ["type", "button", "pButton", "", "iconOnly", "", "text", "", "rounded", "", "severity", "secondary", 3, "keydown", "click", "keydown.enter", "pButtonPT"], ["type", "button", "pButton", "", "severity", "secondary", "variant", "text", "size", "small", 3, "keydown", "click", "pButtonPT"]],
      template: function DatePicker_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275projectionDef(_c15);
          i05.\u0275\u0275conditionalCreate(0, DatePicker_Conditional_0_Template, 5, 29);
          i05.\u0275\u0275conditionalCreate(1, DatePicker_Conditional_1_Template, 9, 18, "div", 2);
        }
        if (rf & 2) {
          i05.\u0275\u0275conditional(!ctx.inline() ? 0 : -1);
          i05.\u0275\u0275advance();
          i05.\u0275\u0275conditional(ctx.inline() || ctx.overlayRendered() ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, ButtonDirective, Ripple, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Times, Calendar, AutoFocus, InputText, SharedModule, BindModule, i1.Bind, MotionModule, i2.MotionDirective],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(DatePicker, [{
    type: Component5,
    args: [{
      selector: "p-datepicker, p-date-picker",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        ButtonDirective,
        Ripple,
        ChevronLeft,
        ChevronRight,
        ChevronUp,
        ChevronDown,
        Times,
        Calendar,
        AutoFocus,
        InputText,
        SharedModule,
        BindModule,
        MotionModule
      ],
      hostDirectives: [Bind2],
      template: `
        @if (!inline()) {
            <input
                #inputfield
                pInputText
                data-p-maskable
                [pSize]="size()"
                [attr.size]="inputSize()"
                type="text"
                role="combobox"
                [attr.id]="inputId()"
                [attr.name]="name()"
                [attr.aria-required]="required()"
                aria-autocomplete="none"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible()"
                [attr.aria-controls]="ariaControlsAttr()"
                [attr.aria-labelledby]="ariaLabelledBy()"
                [attr.aria-label]="ariaLabel()"
                [value]="inputFieldValue()"
                (focus)="onInputFocus($event)"
                (keydown)="onInputKeydown($event)"
                (click)="onInputClick()"
                (blur)="onInputBlur($event)"
                [attr.required]="requiredAttr()"
                [attr.readonly]="readonlyAttr()"
                [attr.disabled]="disabledAttr()"
                (input)="onUserInput($event)"
                [style]="inputStyle()"
                [class]="cn(cx('pcInputText'), inputStyleClass())"
                [attr.placeholder]="placeholder()"
                [attr.tabindex]="tabindex()"
                [attr.inputmode]="inputModeAttr()"
                autocomplete="off"
                [pAutoFocus]="autofocus()"
                [variant]="$variant()"
                [fluid]="hasFluid"
                [invalid]="invalid()"
                [pt]="ptm('pcInputText')"
                [unstyled]="unstyled()"
            />
            @if (clearIconEnabled()) {
                @if (!clearIconTemplate()) {
                    <svg data-p-icon="times" [class]="cx('clearIcon')" [style.visibility]="showClearIcon() ? null : 'hidden'" [pBind]="ptm('inputIcon')" (click)="clear()" />
                } @else {
                    <span [class]="cx('clearIcon')" [style.visibility]="showClearIcon() ? null : 'hidden'" [pBind]="ptm('inputIcon')" (click)="clear()">
                        <ng-template *ngTemplateOutlet="clearIconTemplate()"></ng-template>
                    </span>
                }
            }
            @if (showIconButton()) {
                <button
                    type="button"
                    [attr.aria-label]="iconButtonAriaLabel"
                    aria-haspopup="dialog"
                    [attr.aria-expanded]="overlayVisible()"
                    [attr.aria-controls]="ariaControlsAttr()"
                    (click)="onButtonClick($event, inputfield)"
                    [class]="cx('dropdown')"
                    [disabled]="$disabled()"
                    tabindex="0"
                    [pBind]="ptm('dropdown')"
                >
                    @if (icon()) {
                        <span [class]="icon()" [pBind]="ptm('dropdownIcon')"></span>
                    } @else {
                        @if (!triggerIconTemplate()) {
                            <svg data-p-icon="calendar" [pBind]="ptm('dropdownIcon')" />
                        }
                        <ng-template *ngTemplateOutlet="triggerIconTemplate()"></ng-template>
                    }
                </button>
            }
            @if (showInputIcon()) {
                <span [class]="cx('inputIconContainer')" [pBind]="ptm('inputIconContainer')" [attr.data-p]="inputIconDataP">
                    @if (!inputIconTemplate()) {
                        <svg data-p-icon="calendar" (click)="onButtonClick($event)" [class]="cx('inputIcon')" [pBind]="ptm('inputIcon')" />
                    }
                    <ng-container *ngTemplateOutlet="inputIconTemplate(); context: inputIconTemplateContext()"></ng-container>
                </span>
            }
        }
        @if (inline() || overlayRendered()) {
            <div
                #contentWrapper
                [attr.id]="panelId"
                [style]="panelStyle()"
                [class]="cn(cx('panel'), panelStyleClass())"
                [attr.aria-label]="translate('chooseDate')"
                [attr.role]="roleAttr()"
                [attr.aria-modal]="ariaModalAttr()"
                (click)="onOverlayClick($event)"
                [pBind]="ptm('panel')"
                [pMotion]="isOverlayVisible()"
                [pMotionName]="'p-anchored-overlay'"
                [pMotionAppear]="!inline()"
                [pMotionOptions]="computedMotionOptions()"
                (pMotionOnBeforeEnter)="onOverlayBeforeEnter($event)"
                (pMotionOnAfterLeave)="onOverlayAfterLeave($event)"
            >
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
                @if (!timeOnly()) {
                    <div [class]="cx('calendarContainer')" [pBind]="ptm('calendarContainer')">
                        @for (month of months(); track $index; let i = $index) {
                            <div [class]="cx('calendar')" [pBind]="ptm('calendar')">
                                <div [class]="cx('header')" [pBind]="ptm('header')">
                                    <button
                                        type="button"
                                        pButton
                                        iconOnly
                                        rounded
                                        variant="text"
                                        severity="secondary"
                                        [class]="cx('pcPrevButton')"
                                        [style]="getPrevButtonStyle(i)"
                                        [attr.aria-label]="prevIconAriaLabel"
                                        [pButtonPT]="ptm('pcPrevButton')"
                                        [attr.data-pc-group-section]="'navigator'"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        (click)="onPrevButtonClick($event)"
                                    >
                                        @if (!previousIconTemplate()) {
                                            <svg data-p-icon="chevron-left" />
                                        } @else {
                                            <span>
                                                <ng-template *ngTemplateOutlet="previousIconTemplate()"></ng-template>
                                            </span>
                                        }
                                    </button>
                                    <div [class]="cx('title')" [pBind]="ptm('title')" [attr.aria-live]="'polite'" [attr.aria-atomic]="'true'">
                                        @if (currentView() === 'date') {
                                            <button
                                                type="button"
                                                (click)="switchToMonthView($event)"
                                                (keydown)="onContainerButtonKeydown($event)"
                                                [class]="cx('selectMonth')"
                                                [attr.disabled]="switchViewButtonDisabledAttr()"
                                                [attr.aria-label]="getMonthSelectAriaLabel(month)"
                                                pRipple
                                                [pBind]="ptm('selectMonth')"
                                                [attr.data-pc-group-section]="'navigator'"
                                            >
                                                {{ getMonthName(month.month!) }}
                                            </button>
                                        }
                                        @if (currentView() !== 'year') {
                                            <button
                                                type="button"
                                                (click)="switchToYearView($event)"
                                                (keydown)="onContainerButtonKeydown($event)"
                                                [class]="cx('selectYear')"
                                                [attr.disabled]="switchViewButtonDisabledAttr()"
                                                [attr.aria-label]="getYearSelectAriaLabel(month)"
                                                pRipple
                                                [pBind]="ptm('selectYear')"
                                                [attr.data-pc-group-section]="'navigator'"
                                            >
                                                {{ getYear(month) }}
                                            </button>
                                        }
                                        @if (currentView() === 'year') {
                                            <span [class]="cx('decade')" [pBind]="ptm('decade')">
                                                @if (!decadeTemplate()) {
                                                    {{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}
                                                }
                                                <ng-container *ngTemplateOutlet="decadeTemplate(); context: decadeTemplateContext()"></ng-container>
                                            </span>
                                        }
                                    </div>
                                    <button
                                        type="button"
                                        pButton
                                        iconOnly
                                        rounded
                                        variant="text"
                                        severity="secondary"
                                        [class]="cx('pcNextButton')"
                                        [style]="getNextButtonStyle(i)"
                                        [attr.aria-label]="nextIconAriaLabel"
                                        [pButtonPT]="ptm('pcNextButton')"
                                        [attr.data-pc-group-section]="'navigator'"
                                        (keydown)="onContainerButtonKeydown($event)"
                                        (click)="onNextButtonClick($event)"
                                    >
                                        @if (!nextIconTemplate()) {
                                            <svg data-p-icon="chevron-right" />
                                        } @else {
                                            <ng-template *ngTemplateOutlet="nextIconTemplate()"></ng-template>
                                        }
                                    </button>
                                </div>
                                @if (currentView() === 'date') {
                                    <table [class]="cx('dayView')" role="grid" [pBind]="ptm('table')">
                                        <thead [pBind]="ptm('tableHeader')">
                                            <tr [pBind]="ptm('tableHeaderRow')">
                                                @if (showWeek()) {
                                                    <th [class]="cx('weekHeader')" [pBind]="ptm('weekHeader')">
                                                        <span [pBind]="ptm('weekHeaderLabel')">{{ translate('weekHeader') }}</span>
                                                    </th>
                                                }
                                                @for (weekDay of weekDays(); track weekDay; let begin = $first; let end = $last) {
                                                    <th [class]="cx('weekDayCell')" scope="col" [pBind]="ptm('weekDayCell')">
                                                        <span [class]="cx('weekDay')" [pBind]="ptm('weekDay')">{{ weekDay }}</span>
                                                    </th>
                                                }
                                            </tr>
                                        </thead>
                                        <tbody [pBind]="ptm('tableBody')">
                                            @for (week of getMonthWeeks(month); track $index; let j = $index) {
                                                <tr [pBind]="ptm('tableBodyRow')">
                                                    @if (showWeek()) {
                                                        <td [class]="cx('weekNumber')" [pBind]="ptm('weekNumber')">
                                                            <span [class]="cx('weekLabelContainer')" [pBind]="ptm('weekLabelContainer')">
                                                                {{ month.weekNumbers![j] }}
                                                            </span>
                                                        </td>
                                                    }
                                                    @for (date of week; track date.day) {
                                                        <td [attr.aria-label]="getDateCellAriaLabel(date)" [attr.aria-selected]="isSelected(date) ? 'true' : null" [class]="cx('dayCell', { date })" [pBind]="ptm('dayCell')">
                                                            @if (date.otherMonth ? showOtherMonths() : true) {
                                                                <span
                                                                    [class]="dayClass(date)"
                                                                    (click)="onDateSelect($event, date)"
                                                                    draggable="false"
                                                                    [attr.aria-label]="getDateCellAriaLabel(date)"
                                                                    [attr.aria-selected]="isSelected(date) ? 'true' : null"
                                                                    [attr.data-date]="formatDateKey(formatDateMetaToDate(date))"
                                                                    (keydown)="onDateCellKeydown($event, date, i)"
                                                                    pRipple
                                                                    [pBind]="ptm('day')"
                                                                >
                                                                    @if (!dateTemplate() && (date.selectable || !disabledDateTemplate())) {
                                                                        {{ date.day }}
                                                                    }
                                                                    @if (date.selectable || !disabledDateTemplate()) {
                                                                        <ng-container *ngTemplateOutlet="dateTemplate(); context: getDateTemplateContext(date)"></ng-container>
                                                                    }
                                                                    @if (!date.selectable) {
                                                                        <ng-container *ngTemplateOutlet="disabledDateTemplate(); context: getDateTemplateContext(date)"></ng-container>
                                                                    }
                                                                </span>
                                                                @if (isSelected(date)) {
                                                                    <div class="p-hidden-accessible" aria-live="polite">
                                                                        {{ date.day }}
                                                                    </div>
                                                                }
                                                            }
                                                        </td>
                                                    }
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                }
                            </div>
                        }
                    </div>
                    @if (currentView() === 'month') {
                        <div [class]="cx('monthView')" [pBind]="ptm('monthView')">
                            @for (m of monthPickerValues(); track m; let i = $index) {
                                <span (click)="onMonthSelect($event, i)" (keydown)="onMonthCellKeydown($event, i)" [class]="cx('month', { month: m, index: i })" pRipple [pBind]="ptm('month')">
                                    {{ m }}
                                    @if (isMonthSelected(i)) {
                                        <div class="p-hidden-accessible" aria-live="polite">
                                            {{ m }}
                                        </div>
                                    }
                                </span>
                            }
                        </div>
                    }
                    @if (currentView() === 'year') {
                        <div [class]="cx('yearView')" [pBind]="ptm('yearView')">
                            @for (y of yearPickerValues(); track $index) {
                                <span (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" [class]="cx('year', { year: y })" pRipple [pBind]="ptm('year')">
                                    {{ y }}
                                    @if (isYearSelected(y)) {
                                        <div class="p-hidden-accessible" aria-live="polite">
                                            {{ y }}
                                        </div>
                                    }
                                </span>
                            }
                        </div>
                    }
                }
                @if (showTimePicker()) {
                    <div [class]="cx('timePicker')" [pBind]="ptm('timePicker')">
                        <div [class]="cx('hourPicker')" [pBind]="ptm('hourPicker')">
                            <button
                                type="button"
                                pButton
                                iconOnly
                                rounded
                                variant="text"
                                severity="secondary"
                                [class]="cx('pcIncrementButton')"
                                [attr.aria-label]="translate('nextHour')"
                                [pButtonPT]="ptm('pcIncrementButton')"
                                [attr.data-pc-group-section]="'timepickerbutton'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (keydown.enter)="incrementHour($event)"
                                (keydown.space)="incrementHour($event)"
                                (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                                (mouseup)="onTimePickerElementMouseUp($event)"
                                (keyup.enter)="onTimePickerElementMouseUp($event)"
                                (keyup.space)="onTimePickerElementMouseUp($event)"
                                (mouseleave)="onTimePickerElementMouseLeave()"
                            >
                                @if (!incrementIconTemplate()) {
                                    <svg data-p-icon="chevron-up" [pBind]="ptm('pcIncrementButton')['icon']" />
                                }
                                <ng-template *ngTemplateOutlet="incrementIconTemplate()"></ng-template>
                            </button>
                            <span [pBind]="ptm('hour')">{{ formattedHour() }}</span>
                            <button
                                type="button"
                                pButton
                                iconOnly
                                rounded
                                variant="text"
                                severity="secondary"
                                [class]="cx('pcDecrementButton')"
                                [attr.aria-label]="translate('prevHour')"
                                [pButtonPT]="ptm('pcDecrementButton')"
                                [attr.data-pc-group-section]="'timepickerbutton'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (keydown.enter)="decrementHour($event)"
                                (keydown.space)="decrementHour($event)"
                                (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                                (mouseup)="onTimePickerElementMouseUp($event)"
                                (keyup.enter)="onTimePickerElementMouseUp($event)"
                                (keyup.space)="onTimePickerElementMouseUp($event)"
                                (mouseleave)="onTimePickerElementMouseLeave()"
                            >
                                @if (!decrementIconTemplate()) {
                                    <svg data-p-icon="chevron-down" [pBind]="ptm('pcDecrementButton')['icon']" />
                                }
                                <ng-template *ngTemplateOutlet="decrementIconTemplate()"></ng-template>
                            </button>
                        </div>
                        <div class="p-datepicker-separator" [pBind]="ptm('separatorContainer')">
                            <span [pBind]="ptm('separator')">{{ timeSeparator() }}</span>
                        </div>
                        <div [class]="cx('minutePicker')" [pBind]="ptm('minutePicker')">
                            <button
                                type="button"
                                pButton
                                iconOnly
                                rounded
                                variant="text"
                                severity="secondary"
                                [class]="cx('pcIncrementButton')"
                                [attr.aria-label]="translate('nextMinute')"
                                [pButtonPT]="ptm('pcIncrementButton')"
                                [attr.data-pc-group-section]="'timepickerbutton'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (keydown.enter)="incrementMinute($event)"
                                (keydown.space)="incrementMinute($event)"
                                (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                                (mouseup)="onTimePickerElementMouseUp($event)"
                                (keyup.enter)="onTimePickerElementMouseUp($event)"
                                (keyup.space)="onTimePickerElementMouseUp($event)"
                                (mouseleave)="onTimePickerElementMouseLeave()"
                            >
                                @if (!incrementIconTemplate()) {
                                    <svg data-p-icon="chevron-up" [pBind]="ptm('pcIncrementButton')['icon']" />
                                }
                                <ng-template *ngTemplateOutlet="incrementIconTemplate()"></ng-template>
                            </button>
                            <span [pBind]="ptm('minute')">{{ formattedMinute() }}</span>
                            <button
                                type="button"
                                pButton
                                iconOnly
                                rounded
                                variant="text"
                                severity="secondary"
                                [class]="cx('pcDecrementButton')"
                                [attr.aria-label]="translate('prevMinute')"
                                [pButtonPT]="ptm('pcDecrementButton')"
                                [attr.data-pc-group-section]="'timepickerbutton'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (keydown.enter)="decrementMinute($event)"
                                (keydown.space)="decrementMinute($event)"
                                (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                                (mouseup)="onTimePickerElementMouseUp($event)"
                                (keyup.enter)="onTimePickerElementMouseUp($event)"
                                (keyup.space)="onTimePickerElementMouseUp($event)"
                                (mouseleave)="onTimePickerElementMouseLeave()"
                            >
                                @if (!decrementIconTemplate()) {
                                    <svg data-p-icon="chevron-down" [pBind]="ptm('pcDecrementButton')['icon']" />
                                }
                                <ng-template *ngTemplateOutlet="decrementIconTemplate()"></ng-template>
                            </button>
                        </div>
                        @if (showSeconds()) {
                            <div [class]="cx('separator')" [pBind]="ptm('separatorContainer')">
                                <span [pBind]="ptm('separator')">{{ timeSeparator() }}</span>
                            </div>
                        }
                        @if (showSeconds()) {
                            <div [class]="cx('secondPicker')" [pBind]="ptm('secondPicker')">
                                <button
                                    type="button"
                                    pButton
                                    iconOnly
                                    rounded
                                    variant="text"
                                    severity="secondary"
                                    [class]="cx('pcIncrementButton')"
                                    [attr.aria-label]="translate('nextSecond')"
                                    [pButtonPT]="ptm('pcIncrementButton')"
                                    [attr.data-pc-group-section]="'timepickerbutton'"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    (keydown.enter)="incrementSecond($event)"
                                    (keydown.space)="incrementSecond($event)"
                                    (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                                    (mouseup)="onTimePickerElementMouseUp($event)"
                                    (keyup.enter)="onTimePickerElementMouseUp($event)"
                                    (keyup.space)="onTimePickerElementMouseUp($event)"
                                    (mouseleave)="onTimePickerElementMouseLeave()"
                                >
                                    @if (!incrementIconTemplate()) {
                                        <svg data-p-icon="chevron-up" [pBind]="ptm('pcIncrementButton')['icon']" />
                                    }
                                    <ng-template *ngTemplateOutlet="incrementIconTemplate()"></ng-template>
                                </button>
                                <span [pBind]="ptm('second')">{{ formattedSecond() }}</span>
                                <button
                                    type="button"
                                    pButton
                                    iconOnly
                                    rounded
                                    variant="text"
                                    severity="secondary"
                                    [class]="cx('pcDecrementButton')"
                                    [attr.aria-label]="translate('prevSecond')"
                                    [pButtonPT]="ptm('pcDecrementButton')"
                                    [attr.data-pc-group-section]="'timepickerbutton'"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    (keydown.enter)="decrementSecond($event)"
                                    (keydown.space)="decrementSecond($event)"
                                    (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                                    (mouseup)="onTimePickerElementMouseUp($event)"
                                    (keyup.enter)="onTimePickerElementMouseUp($event)"
                                    (keyup.space)="onTimePickerElementMouseUp($event)"
                                    (mouseleave)="onTimePickerElementMouseLeave()"
                                >
                                    @if (!decrementIconTemplate()) {
                                        <svg data-p-icon="chevron-down" [pBind]="ptm('pcDecrementButton')['icon']" />
                                    }
                                    <ng-template *ngTemplateOutlet="decrementIconTemplate()"></ng-template>
                                </button>
                            </div>
                        }
                        @if (isHourFormat12()) {
                            <div [class]="cx('separator')" [pBind]="ptm('separatorContainer')">
                                <span [pBind]="ptm('separator')">{{ timeSeparator() }}</span>
                            </div>
                        }
                        @if (isHourFormat12()) {
                            <div [class]="cx('ampmPicker')" [pBind]="ptm('ampmPicker')">
                                <button
                                    type="button"
                                    pButton
                                    iconOnly
                                    text
                                    rounded
                                    severity="secondary"
                                    [class]="cx('pcIncrementButton')"
                                    [attr.aria-label]="translate('am')"
                                    [pButtonPT]="ptm('pcIncrementButton')"
                                    [attr.data-pc-group-section]="'timepickerbutton'"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    (click)="toggleAMPM($event)"
                                    (keydown.enter)="toggleAMPM($event)"
                                >
                                    @if (!incrementIconTemplate()) {
                                        <svg data-p-icon="chevron-up" [pBind]="ptm('pcIncrementButton')['icon']" />
                                    }
                                    <ng-template *ngTemplateOutlet="incrementIconTemplate()"></ng-template>
                                </button>
                                <span [pBind]="ptm('ampm')">{{ ampmLabel() }}</span>
                                <button
                                    type="button"
                                    pButton
                                    iconOnly
                                    text
                                    rounded
                                    severity="secondary"
                                    [class]="cx('pcDecrementButton')"
                                    [attr.aria-label]="translate('pm')"
                                    [pButtonPT]="ptm('pcDecrementButton')"
                                    [attr.data-pc-group-section]="'timepickerbutton'"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    (click)="toggleAMPM($event)"
                                    (keydown.enter)="toggleAMPM($event)"
                                >
                                    @if (!decrementIconTemplate()) {
                                        <svg data-p-icon="chevron-down" [pBind]="ptm('pcDecrementButton')['icon']" />
                                    }
                                    <ng-template *ngTemplateOutlet="decrementIconTemplate()"></ng-template>
                                </button>
                            </div>
                        }
                    </div>
                }
                @if (showButtonBar()) {
                    <div [class]="cx('buttonbar')" [pBind]="ptm('buttonbar')">
                        @if (buttonBarTemplate()) {
                            <ng-container *ngTemplateOutlet="buttonBarTemplate(); context: buttonBarTemplateContext()"></ng-container>
                        } @else {
                            <button
                                type="button"
                                pButton
                                severity="secondary"
                                variant="text"
                                size="small"
                                [class]="cn(cx('pcTodayButton'), todayButtonStyleClass())"
                                [pButtonPT]="ptm('pcTodayButton')"
                                [attr.data-pc-group-section]="'button'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (click)="onTodayButtonClick($event)"
                            >
                                {{ translate('today') }}
                            </button>
                            <button
                                type="button"
                                pButton
                                severity="secondary"
                                variant="text"
                                size="small"
                                [class]="cn(cx('pcClearButton'), clearButtonStyleClass())"
                                [pButtonPT]="ptm('pcClearButton')"
                                [attr.data-pc-group-section]="'button'"
                                (keydown)="onContainerButtonKeydown($event)"
                                (click)="onClearButtonClick($event)"
                            >
                                {{ translate('clear') }}
                            </button>
                        }
                    </div>
                }
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
            </div>
        }
    `,
      providers: [
        DATEPICKER_VALUE_ACCESSOR,
        DatePickerStyle,
        {
          provide: DATEPICKER_INSTANCE,
          useExisting: DatePicker
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: DatePicker
        }
      ],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[style]": "sx('root')"
      }
    }]
  }], () => [], {
    iconDisplay: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "iconDisplay",
        required: false
      }]
    }],
    inputStyle: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "inputStyle",
        required: false
      }]
    }],
    inputId: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    inputStyleClass: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "inputStyleClass",
        required: false
      }]
    }],
    placeholder: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabelledBy",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    iconAriaLabel: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "iconAriaLabel",
        required: false
      }]
    }],
    dateFormat: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "dateFormat",
        required: false
      }]
    }],
    multipleSeparator: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "multipleSeparator",
        required: false
      }]
    }],
    rangeSeparator: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "rangeSeparator",
        required: false
      }]
    }],
    inline: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "inline",
        required: false
      }]
    }],
    showOtherMonths: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showOtherMonths",
        required: false
      }]
    }],
    selectOtherMonths: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "selectOtherMonths",
        required: false
      }]
    }],
    showIcon: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showIcon",
        required: false
      }]
    }],
    icon: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "icon",
        required: false
      }]
    }],
    readonlyInput: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "readonlyInput",
        required: false
      }]
    }],
    shortYearCutoff: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "shortYearCutoff",
        required: false
      }]
    }],
    hourFormat: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "hourFormat",
        required: false
      }]
    }],
    timeOnly: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "timeOnly",
        required: false
      }]
    }],
    stepHour: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stepHour",
        required: false
      }]
    }],
    stepMinute: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stepMinute",
        required: false
      }]
    }],
    stepSecond: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stepSecond",
        required: false
      }]
    }],
    showSeconds: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showSeconds",
        required: false
      }]
    }],
    showOnFocus: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showOnFocus",
        required: false
      }]
    }],
    showWeek: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showWeek",
        required: false
      }]
    }],
    startWeekFromFirstDayOfYear: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "startWeekFromFirstDayOfYear",
        required: false
      }]
    }],
    showClear: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showClear",
        required: false
      }]
    }],
    dataType: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "dataType",
        required: false
      }]
    }],
    selectionMode: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "selectionMode",
        required: false
      }]
    }],
    maxDateCount: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "maxDateCount",
        required: false
      }]
    }],
    showButtonBar: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showButtonBar",
        required: false
      }]
    }],
    todayButtonStyleClass: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "todayButtonStyleClass",
        required: false
      }]
    }],
    clearButtonStyleClass: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "clearButtonStyleClass",
        required: false
      }]
    }],
    autofocus: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "autofocus",
        required: false
      }]
    }],
    autoZIndex: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "autoZIndex",
        required: false
      }]
    }],
    baseZIndex: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "baseZIndex",
        required: false
      }]
    }],
    panelStyleClass: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "panelStyleClass",
        required: false
      }]
    }],
    panelStyle: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "panelStyle",
        required: false
      }]
    }],
    keepInvalid: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "keepInvalid",
        required: false
      }]
    }],
    hideOnDateTimeSelect: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "hideOnDateTimeSelect",
        required: false
      }]
    }],
    touchUI: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "touchUI",
        required: false
      }]
    }],
    timeSeparator: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "timeSeparator",
        required: false
      }]
    }],
    focusTrap: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "focusTrap",
        required: false
      }]
    }],
    tabindex: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    minDate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "minDate",
        required: false
      }]
    }],
    maxDate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "maxDate",
        required: false
      }]
    }],
    disabledDates: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "disabledDates",
        required: false
      }]
    }],
    disabledDays: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "disabledDays",
        required: false
      }]
    }],
    showTime: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "showTime",
        required: false
      }]
    }],
    responsiveOptions: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "responsiveOptions",
        required: false
      }]
    }],
    numberOfMonths: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "numberOfMonths",
        required: false
      }]
    }],
    firstDayOfWeek: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "firstDayOfWeek",
        required: false
      }]
    }],
    view: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "view",
        required: false
      }]
    }],
    defaultDate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "defaultDate",
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
    motionOptions: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onFocus: [{
      type: i05.Output,
      args: ["onFocus"]
    }],
    onBlur: [{
      type: i05.Output,
      args: ["onBlur"]
    }],
    onClose: [{
      type: i05.Output,
      args: ["onClose"]
    }],
    onSelect: [{
      type: i05.Output,
      args: ["onSelect"]
    }],
    onClear: [{
      type: i05.Output,
      args: ["onClear"]
    }],
    onInput: [{
      type: i05.Output,
      args: ["onInput"]
    }],
    onTodayClick: [{
      type: i05.Output,
      args: ["onTodayClick"]
    }],
    onClearClick: [{
      type: i05.Output,
      args: ["onClearClick"]
    }],
    onMonthChange: [{
      type: i05.Output,
      args: ["onMonthChange"]
    }],
    onYearChange: [{
      type: i05.Output,
      args: ["onYearChange"]
    }],
    onClickOutside: [{
      type: i05.Output,
      args: ["onClickOutside"]
    }],
    onShow: [{
      type: i05.Output,
      args: ["onShow"]
    }],
    inputfieldViewChild: [{
      type: i05.ViewChild,
      args: ["inputfield", { isSignal: true }]
    }],
    contentWrapperViewChild: [{
      type: i05.ViewChild,
      args: ["contentWrapper", { isSignal: true }]
    }],
    dateTemplate: [{
      type: i05.ContentChild,
      args: ["date", {
        descendants: false,
        isSignal: true
      }]
    }],
    headerTemplate: [{
      type: i05.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i05.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }],
    disabledDateTemplate: [{
      type: i05.ContentChild,
      args: ["disabledDate", {
        descendants: false,
        isSignal: true
      }]
    }],
    decadeTemplate: [{
      type: i05.ContentChild,
      args: ["decade", {
        descendants: false,
        isSignal: true
      }]
    }],
    previousIconTemplate: [{
      type: i05.ContentChild,
      args: ["previousicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    nextIconTemplate: [{
      type: i05.ContentChild,
      args: ["nexticon", {
        descendants: false,
        isSignal: true
      }]
    }],
    triggerIconTemplate: [{
      type: i05.ContentChild,
      args: ["triggericon", {
        descendants: false,
        isSignal: true
      }]
    }],
    clearIconTemplate: [{
      type: i05.ContentChild,
      args: ["clearicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    decrementIconTemplate: [{
      type: i05.ContentChild,
      args: ["decrementicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    incrementIconTemplate: [{
      type: i05.ContentChild,
      args: ["incrementicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    inputIconTemplate: [{
      type: i05.ContentChild,
      args: ["inputicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    buttonBarTemplate: [{
      type: i05.ContentChild,
      args: ["buttonbar", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var DatePickerModule = class DatePickerModule2 {
  static \u0275fac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DatePickerModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i05.\u0275\u0275defineNgModule({
    type: DatePickerModule2
  });
  static \u0275inj = /* @__PURE__ */ i05.\u0275\u0275defineInjector({
    imports: [DatePicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [DatePicker, SharedModule],
      exports: [DatePicker, SharedModule]
    }]
  }], null, null);
})();
export {
  DATEPICKER_VALUE_ACCESSOR,
  DatePicker,
  DatePickerClasses,
  DatePickerModule,
  DatePickerStyle
};
//# sourceMappingURL=primeng_datepicker.6PoS9Yxqzy-dev.js.map

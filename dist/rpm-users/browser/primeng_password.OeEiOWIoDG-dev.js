if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Times
} from "@nf-internal/chunk-TS3TQKAB";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "@nf-internal/chunk-4VP7SACV";
import {
  I,
  R,
  W,
  re,
  z
} from "@nf-internal/chunk-6MXGYO3F";
import "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-password.mjs
import { NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
import * as i03 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component3, Directive, HostListener, Injectable, InjectionToken, NgModule, Pipe, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, forwardRef, inject, input, numberAttribute, output, signal, viewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-eye.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/eye.mjs
var C = { name: "eye", meta: { tags: ["eye", "view", "see", "look", "watch"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 3.25C13.0062 3.25008 15.1939 4.92099 16.5908 6.50391C17.2931 7.2997 17.8141 8.09259 18.1592 8.68555C18.3321 8.98266 18.462 9.2321 18.5498 9.40918C18.5937 9.49765 18.6274 9.56828 18.6504 9.61816C18.6619 9.64298 18.6714 9.66258 18.6778 9.67676C18.6809 9.68379 18.6827 9.69008 18.6846 9.69434C18.6855 9.69632 18.6869 9.69786 18.6875 9.69922L18.6885 9.70117V9.70215C18.6885 9.7025 18.6793 9.70678 18 10C18.6793 10.2932 18.6885 10.2975 18.6885 10.2979V10.2988L18.6875 10.3008C18.6869 10.3021 18.6855 10.3037 18.6846 10.3057C18.6827 10.3099 18.6809 10.3162 18.6778 10.3232C18.6714 10.3374 18.6619 10.357 18.6504 10.3818C18.6274 10.4317 18.5937 10.5024 18.5498 10.5908C18.462 10.7679 18.3321 11.0173 18.1592 11.3145C17.8141 11.9074 17.2931 12.7003 16.5908 13.4961C15.1939 15.079 13.0062 16.7499 10 16.75C6.99381 16.75 4.80615 15.079 3.40917 13.4961C2.70689 12.7003 2.18589 11.9074 1.84081 11.3145C1.66792 11.0173 1.53804 10.7679 1.45019 10.5908C1.40631 10.5024 1.37264 10.4317 1.3496 10.3818C1.33814 10.357 1.32859 10.3374 1.32226 10.3232C1.31912 10.3162 1.31728 10.3099 1.31542 10.3057C1.31455 10.3037 1.31311 10.3021 1.31249 10.3008L1.31151 10.2988V10.2979C1.31398 10.2965 1.35491 10.2785 1.99999 10C1.35491 9.72154 1.31398 9.70354 1.31151 9.70215V9.70117L1.31249 9.69922C1.31311 9.69786 1.31455 9.69632 1.31542 9.69434C1.31728 9.69007 1.31912 9.68378 1.32226 9.67676C1.32859 9.66257 1.33814 9.64297 1.3496 9.61816C1.37264 9.56827 1.40631 9.49764 1.45019 9.40918C1.53804 9.23209 1.66792 8.98265 1.84081 8.68555C2.18589 8.09258 2.70689 7.2997 3.40917 6.50391C4.80615 4.92098 6.99381 3.25 10 3.25ZM10 4.75C7.59635 4.75 5.78373 6.0791 4.5332 7.49609C3.91198 8.20004 3.44728 8.90751 3.13769 9.43945C3.00747 9.66322 2.90566 9.85501 2.83202 10C2.90566 10.145 3.00747 10.3368 3.13769 10.5605C3.44728 11.0925 3.91198 11.8 4.5332 12.5039C5.78373 13.9209 7.59635 15.25 10 15.25C12.4036 15.2499 14.2163 13.9209 15.4668 12.5039C16.088 11.7999 16.5527 11.0925 16.8623 10.5605C16.9924 10.337 17.0934 10.1449 17.167 10C17.0934 9.85507 16.9924 9.66302 16.8623 9.43945C16.5527 8.90752 16.088 8.20005 15.4668 7.49609C14.2163 6.0791 12.4036 4.75008 10 4.75ZM10 6.75C11.7948 6.75012 13.25 8.20515 13.25 10C13.25 11.7949 11.7948 13.2499 10 13.25C8.20508 13.25 6.75 11.7949 6.75 10C6.75 8.20507 8.20508 6.75 10 6.75ZM10 8.25C9.03351 8.25 8.25 9.0335 8.25 10C8.25 10.9665 9.03351 11.75 10 11.75C10.9664 11.7499 11.75 10.9664 11.75 10C11.75 9.03358 10.9664 8.25012 10 8.25ZM1.99999 10L1.31151 10.2969C1.22978 10.1073 1.22978 9.89267 1.31151 9.70312L1.99999 10ZM18.6885 9.70312C18.7702 9.89262 18.7702 10.1074 18.6885 10.2969L18 10L18.6885 9.70312Z", fill: "currentColor", key: "buowgx" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-eye.mjs
var Eye = class _Eye extends CoreIcon {
  constructor() {
    super();
    this._icon = C;
  }
  static \u0275fac = function Eye_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Eye)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Eye_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Eye_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Eye_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Eye_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Eye_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Eye_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Eye_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Eye_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Eye_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _Eye,
      selectors: [["svg", "data-p-icon", "eye"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Eye_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, Eye_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Eye, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="eye"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-eye-slash.mjs
import * as i02 from "@angular/core";
import { Component as Component2 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/eye-slash.mjs
var C2 = { name: "eye-slash", meta: { tags: ["eye-slash", "hide", "private", "unseen", "invisible"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M3.46999 3.46973C3.76289 3.17696 4.23769 3.17688 4.53054 3.46973L16.5306 15.4697C16.8233 15.7626 16.8233 16.2374 16.5306 16.5303C16.2377 16.8231 15.7629 16.823 15.47 16.5303L14.4124 15.4727C13.1972 16.2508 11.7234 16.7499 10.0003 16.75C6.99409 16.75 4.80642 15.079 3.40944 13.4961C2.70716 12.7003 2.18616 11.9074 1.84108 11.3145C1.66819 11.0174 1.5383 10.7679 1.45045 10.5908C1.40658 10.5024 1.37291 10.4317 1.34987 10.3818C1.33842 10.357 1.32886 10.3374 1.32252 10.3232C1.31939 10.3162 1.31755 10.3099 1.31569 10.3057C1.31482 10.3037 1.31338 10.3021 1.31276 10.3008L1.31178 10.2988V10.2979C1.31454 10.2963 1.35767 10.2774 2.00026 10L1.31178 10.2969C1.23111 10.1098 1.23009 9.89788 1.30885 9.70996V9.70801C1.30923 9.70724 1.31035 9.70614 1.3108 9.70508C1.31174 9.70289 1.31329 9.69961 1.31471 9.69629C1.3177 9.68931 1.32131 9.67964 1.32643 9.66797C1.33705 9.64374 1.35256 9.60942 1.37233 9.56641C1.4119 9.48031 1.47048 9.35783 1.54713 9.20703C1.70032 8.90569 1.92898 8.48733 2.23463 8.01172C2.73213 7.23767 3.44493 6.29106 4.38601 5.44629L3.46999 4.53027C3.1771 4.23738 3.1771 3.76262 3.46999 3.46973ZM5.45046 6.51074C4.61173 7.25038 3.95951 8.10258 3.49636 8.82324C3.22238 9.24956 3.01835 9.62252 2.88405 9.88672C2.86458 9.92502 2.84684 9.96165 2.83034 9.99512C2.90415 10.1407 3.00634 10.3344 3.13796 10.5605C3.44755 11.0925 3.91225 11.8 4.53347 12.5039C5.784 13.9209 7.59663 15.25 10.0003 15.25C11.2833 15.25 12.3869 14.9161 13.3206 14.3809L11.7083 12.7686C10.4536 13.5457 8.7907 13.3904 7.70047 12.3008C6.61016 11.2105 6.45322 9.5459 7.23074 8.29102L5.45046 6.51074ZM10.0003 3.25C13.0064 3.2501 15.1942 4.921 16.5911 6.50391C17.2934 7.2997 17.8144 8.0926 18.1595 8.68555C18.3324 8.98265 18.4623 9.23211 18.5501 9.40918C18.594 9.49764 18.6277 9.56829 18.6507 9.61816C18.6621 9.64297 18.6717 9.66258 18.678 9.67676C18.6812 9.68379 18.683 9.69008 18.6849 9.69434C18.6858 9.69631 18.6872 9.69786 18.6878 9.69922L18.6888 9.70117V9.70215C18.6888 9.7025 18.6795 9.7068 18.0003 10L18.6888 10.2969L18.6858 10.3027C18.6844 10.3061 18.6824 10.3109 18.68 10.3164C18.675 10.3276 18.6683 10.3439 18.6595 10.3633C18.6417 10.4022 18.6158 10.4575 18.5823 10.5264C18.5151 10.6647 18.4162 10.8603 18.2845 11.0967C18.0212 11.569 17.6251 12.2106 17.0911 12.8926C16.8359 13.2186 16.3645 13.2755 16.0384 13.0205C15.7123 12.7652 15.6543 12.2939 15.9095 11.9678C16.3854 11.36 16.7397 10.7863 16.9739 10.3662C17.0526 10.225 17.1162 10.1008 17.1673 10C17.0937 9.85507 16.9927 9.66301 16.8626 9.43945C16.553 8.90753 16.0883 8.20004 15.4671 7.49609C14.2166 6.07911 12.4039 4.7501 10.0003 4.75C9.52755 4.75 9.07986 4.80351 8.65652 4.89355C8.25151 4.97973 7.85325 4.72132 7.76687 4.31641C7.68069 3.91134 7.93901 3.51306 8.34402 3.42676C8.86049 3.31689 9.41325 3.25 10.0003 3.25ZM8.34891 9.40918C8.12692 10.0272 8.26402 10.7432 8.76102 11.2402C9.25783 11.7366 9.9724 11.8719 10.5901 11.6504L8.34891 9.40918ZM18.6888 9.70312C18.7703 9.89221 18.7709 10.1067 18.6898 10.2959L18.0003 10L18.6888 9.70312Z", fill: "currentColor", key: "4j9v21" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-eye-slash.mjs
var EyeSlash = class _EyeSlash extends CoreIcon {
  constructor() {
    super();
    this._icon = C2;
  }
  static \u0275fac = function EyeSlash_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EyeSlash)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function EyeSlash_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function EyeSlash_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, EyeSlash_For_1_Case_0_Template, 1, 9, ":svg:path")(1, EyeSlash_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, EyeSlash_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, EyeSlash_For_1_Case_3_Template, 1, 7, ":svg:line")(4, EyeSlash_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, EyeSlash_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, EyeSlash_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i02.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: _EyeSlash,
      selectors: [["svg", "data-p-icon", "eye-slash"]],
      features: [i02.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function EyeSlash_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275repeaterCreate(0, EyeSlash_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(EyeSlash, [{
    type: Component2,
    args: [{
      selector: 'svg[data-p-icon="eye-slash"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-password.mjs
import { OverlayService, SharedModule, TranslationKeys } from "primeng/api";
import { AutoFocus } from "primeng/autofocus";
import { PARENT_INSTANCE } from "primeng/basecomponent";
import { BaseEditableHolder } from "primeng/baseeditableholder";
import { BaseInput } from "primeng/baseinput";
import * as i1 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";
import { ConnectedOverlayScrollHandler, DomHandler } from "primeng/dom";
import { Fluid } from "primeng/fluid";
import { InputText } from "primeng/inputtext";
import { Overlay } from "primeng/overlay";

// node_modules/@primeuix/styles/dist/password/index.mjs
var style = "\n    .p-password {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-password .p-password-overlay {\n        min-width: 100%;\n    }\n\n    .p-password-meter {\n        height: dt('password.meter.height');\n        background: dt('password.meter.background');\n        border-radius: dt('password.meter.border.radius');\n    }\n\n    .p-password-meter-label {\n        height: 100%;\n        width: 0;\n        transition: width 1s ease-in-out;\n        border-radius: dt('password.meter.border.radius');\n    }\n\n    .p-password-meter-weak {\n        background: dt('password.strength.weak.background');\n    }\n\n    .p-password-meter-medium {\n        background: dt('password.strength.medium.background');\n    }\n\n    .p-password-meter-strong {\n        background: dt('password.strength.strong.background');\n    }\n\n    .p-password-meter-text {\n        font-weight: dt('password.meter.text.font.weight');\n        font-size: dt('password.meter.text.font.size');\n    }\n\n    .p-password-fluid {\n        display: flex;\n    }\n\n    .p-password-fluid .p-password-input {\n        width: 100%;\n    }\n\n    .p-password-input::-ms-reveal,\n    .p-password-input::-ms-clear {\n        display: none;\n    }\n\n    .p-password-overlay {\n        padding: dt('password.overlay.padding');\n        background: dt('password.overlay.background');\n        color: dt('password.overlay.color');\n        border: 1px solid dt('password.overlay.border.color');\n        box-shadow: dt('password.overlay.shadow');\n        border-radius: dt('password.overlay.border.radius');\n    }\n\n    .p-password-content {\n        display: flex;\n        flex-direction: column;\n        gap: dt('password.content.gap');\n    }\n\n    .p-password-toggle-mask-icon {\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('password.icon.color');\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * calc(dt('icon.size') / 2));\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-password-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * dt('icon.size') / 2);\n        cursor: pointer;\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('form.field.icon.color');\n    }\n\n    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {\n        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-password:has(.p-password-clear-icon) .p-password-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-password:has(.p-password-clear-icon):has(.p-password-toggle-mask-icon)  .p-password-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));\n    }\n\n";

// node_modules/primeng/fesm2022/primeng-password.mjs
import { BaseStyle } from "primeng/base";
export * from "primeng/types/password";
var style$1 = `
${style}

/* For PrimeNG */
.p-password-overlay {
    min-width: 100%;
}

p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: dt('inputtext.invalid.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: dt('inputtext.focus.border.color');
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: dt('inputtext.invalid.placeholder.color');
}

.p-password-fluid-directive {
    width: 100%;
}

/* Animations */
.p-password-enter {
    animation: p-animate-password-enter 300ms cubic-bezier(.19,1,.22,1);
}

.p-password-leave {
    animation: p-animate-password-leave 300ms cubic-bezier(.19,1,.22,1);
}

@keyframes p-animate-password-enter {
    from {
        opacity: 0;
        transform: scale(0.93);
    }
}

@keyframes p-animate-password-leave {
    to {
        opacity: 0;
        transform: scale(0.93);
    }
}
`;
var inlineStyles = {
  root: ({ instance }) => ({ position: instance.$appendTo() === "self" ? "relative" : void 0 }),
  overlay: { position: "absolute" }
};
var classes = {
  root: ({ instance }) => ["p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": instance.$filled(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputwrapper-focus": instance.focused,
    "p-password-fluid": instance.hasFluid
  }],
  rootDirective: ({ instance }) => ["p-password p-inputtext p-component p-inputwrapper", {
    "p-inputwrapper-filled": instance.$filled(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-password-fluid-directive": instance.hasFluid
  }],
  pcInputText: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: ({ instance }) => `p-password-meter-label ${instance.meter ? "p-password-meter-" + instance.meter.strength : ""}`,
  meterText: "p-password-meter-text",
  clearIcon: "p-password-clear-icon"
};
var PasswordStyle = class PasswordStyle2 extends BaseStyle {
  name = "password";
  style = style$1;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PasswordStyle_BaseFactory = void 0;
    return function PasswordStyle_Factory(__ngFactoryType__) {
      return (\u0275PasswordStyle_BaseFactory || (\u0275PasswordStyle_BaseFactory = i03.\u0275\u0275getInheritedFactory(PasswordStyle2)))(__ngFactoryType__ || PasswordStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({
    token: PasswordStyle2,
    factory: PasswordStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(PasswordStyle, [{ type: Injectable }], null, null);
})();
var PasswordClasses;
(function(PasswordClasses2) {
  PasswordClasses2["root"] = "p-password";
  PasswordClasses2["pcInputText"] = "p-password-input";
  PasswordClasses2["maskIcon"] = "p-password-mask-icon";
  PasswordClasses2["unmaskIcon"] = "p-password-unmask-icon";
  PasswordClasses2["overlay"] = "p-password-overlay";
  PasswordClasses2["meter"] = "p-password-meter";
  PasswordClasses2["meterLabel"] = "p-password-meter-label";
  PasswordClasses2["meterText"] = "p-password-meter-text";
  PasswordClasses2["clearIcon"] = "p-password-clear-icon";
})(PasswordClasses || (PasswordClasses = {}));
var PASSWORD_DIRECTIVE_INSTANCE = new InjectionToken("PASSWORD_DIRECTIVE_INSTANCE");
var PASSWORD_INSTANCE = new InjectionToken("PASSWORD_INSTANCE");
var PasswordDirective = class PasswordDirective2 extends BaseEditableHolder {
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcPasswordDirective = inject(PASSWORD_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  pPasswordPT = input(...ngDevMode ? [void 0, { debugName: "pPasswordPT" }] : (
    /* istanbul ignore next */
    []
  ));
  pPasswordUnstyled = input(...ngDevMode ? [void 0, { debugName: "pPasswordUnstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  promptLabel = input("Enter a password", ...ngDevMode ? [{ debugName: "promptLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  weakLabel = input("Weak", ...ngDevMode ? [{ debugName: "weakLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  mediumLabel = input("Medium", ...ngDevMode ? [{ debugName: "mediumLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  strongLabel = input("Strong", ...ngDevMode ? [{ debugName: "strongLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  feedback = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "feedback" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showPassword = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showPassword" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : (
    /* istanbul ignore next */
    []
  ));
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fluid" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  size = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "size" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSize"
  }));
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  $variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : (
    /* istanbul ignore next */
    []
  ));
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  panel;
  meter;
  info;
  filled;
  content;
  label;
  scrollHandler;
  documentResizeListener;
  _componentStyle = inject(PasswordStyle);
  constructor() {
    super();
    effect(() => {
      const pt = this.pPasswordPT();
      if (pt) this.directivePT.set(pt);
    });
    effect(() => {
      if (this.pPasswordUnstyled()) this.directiveUnstyled.set(this.pPasswordUnstyled());
    });
    effect(() => {
      const show = this.showPassword();
      this.el.nativeElement.type = show ? "text" : "password";
    });
  }
  labelSignal = signal("", ...ngDevMode ? [{ debugName: "labelSignal" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInput(e) {
    this.writeModelValue(this.el.nativeElement.value);
  }
  createPanel() {
    if (isPlatformBrowser(this.platformId)) {
      this.panel = this.renderer.createElement("div");
      this.renderer.addClass(this.panel, "p-password-overlay");
      this.renderer.addClass(this.panel, "p-component");
      this.content = this.renderer.createElement("div");
      this.renderer.addClass(this.content, "p-password-content");
      this.renderer.appendChild(this.panel, this.content);
      this.meter = this.renderer.createElement("div");
      this.renderer.addClass(this.meter, "p-password-meter");
      this.renderer.appendChild(this.content, this.meter);
      this.label = this.renderer.createElement("div");
      this.renderer.addClass(this.label, "p-password-meter-label");
      this.renderer.appendChild(this.meter, this.label);
      this.info = this.renderer.createElement("div");
      this.renderer.addClass(this.info, "p-password-meter-text");
      this.renderer.setProperty(this.info, "textContent", this.promptLabel());
      this.renderer.appendChild(this.content, this.info);
      this.renderer.setStyle(this.panel, "minWidth", `${this.el.nativeElement.offsetWidth}px`);
      this.renderer.appendChild(document.body, this.panel);
      this.updateMeter();
    }
  }
  showOverlay() {
    if (this.feedback()) {
      if (!this.panel) this.createPanel();
      this.renderer.setStyle(this.panel, "zIndex", String(++DomHandler.zindex));
      this.renderer.setStyle(this.panel, "display", "block");
      setTimeout(() => {
        R(this.panel, "p-connected-overlay-visible");
        this.bindScrollListener();
        this.bindDocumentResizeListener();
      }, 1);
      z(this.panel, this.el.nativeElement);
    }
  }
  hideOverlay() {
    if (this.feedback() && this.panel) {
      R(this.panel, "p-connected-overlay-hidden");
      W(this.panel, "p-connected-overlay-visible");
      this.unbindScrollListener();
      this.unbindDocumentResizeListener();
      setTimeout(() => {
        this.onDestroy();
      }, 150);
    }
  }
  onFocus() {
    this.showOverlay();
  }
  onBlur() {
    this.hideOverlay();
  }
  onKeyup(e) {
    if (this.feedback()) {
      let value = e.target.value, label = null, meterPos = null;
      if (value.length === 0) {
        label = this.promptLabel();
        meterPos = "0px 0px";
      } else {
        let score = this.testStrength(value);
        if (score < 30) {
          label = this.weakLabel();
          meterPos = "0px -10px";
        } else if (score >= 30 && score < 80) {
          label = this.mediumLabel();
          meterPos = "0px -20px";
        } else if (score >= 80) {
          label = this.strongLabel();
          meterPos = "0px -30px";
        }
        this.labelSignal.set(label);
        this.updateMeter();
      }
      if (!this.panel || !I(this.panel, "p-connected-overlay-visible")) this.showOverlay();
      if (this.meter) this.renderer.setStyle(this.meter, "backgroundPosition", meterPos);
      if (this.info) this.info.textContent = label;
    }
  }
  updateMeter() {
    if (this.labelSignal() && this.meter && this.info) {
      const label = this.labelSignal();
      const strengthClass = this.strengthClass(label.toLowerCase());
      const width = this.getWidth(label.toLowerCase());
      this.renderer.addClass(this.meter, strengthClass);
      this.renderer.setStyle(this.meter, "width", width);
      this.info.textContent = label;
    }
  }
  getWidth(label) {
    return label === "weak" ? "33.33%" : label === "medium" ? "66.66%" : label === "strong" ? "100%" : "";
  }
  strengthClass(label) {
    return `p-password-meter${label ? `-${label}` : ""}`;
  }
  testStrength(str) {
    let grade = 0;
    let val;
    val = str.match("[0-9]");
    grade += this.normalize(val ? val.length : 1 / 4, 1) * 25;
    val = str.match("[a-zA-Z]");
    grade += this.normalize(val ? val.length : 1 / 2, 3) * 10;
    val = str.match("[!@#$%^&*?_~.,;=]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 35;
    val = str.match("[A-Z]");
    grade += this.normalize(val ? val.length : 1 / 6, 1) * 30;
    grade *= str.length / 8;
    return grade > 100 ? 100 : grade;
  }
  normalize(x, y) {
    if (x - y <= 0) return x / y;
    else return 1 + 0.5 * (x / (x + y / 4));
  }
  bindScrollListener() {
    if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
      if (I(this.panel, "p-connected-overlay-visible")) this.hideOverlay();
    });
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  onWindowResize() {
    if (!re()) this.hideOverlay();
  }
  onDestroy() {
    if (this.panel) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      this.unbindDocumentResizeListener();
      this.renderer.removeChild(this.document.body, this.panel);
      this.panel = null;
      this.meter = null;
      this.info = null;
    }
  }
  static \u0275fac = function PasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordDirective2)();
  };
  static \u0275dir = /* @__PURE__ */ i03.\u0275\u0275defineDirective({
    type: PasswordDirective2,
    selectors: [["", "pPassword", ""]],
    hostVars: 2,
    hostBindings: function PasswordDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275listener("input", function PasswordDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        })("focus", function PasswordDirective_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function PasswordDirective_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("keyup", function PasswordDirective_keyup_HostBindingHandler($event) {
          return ctx.onKeyup($event);
        });
      }
      if (rf & 2) {
        i03.\u0275\u0275classMap(ctx.cx("rootDirective"));
      }
    },
    inputs: {
      pPasswordPT: [1, "pPasswordPT"],
      pPasswordUnstyled: [1, "pPasswordUnstyled"],
      promptLabel: [1, "promptLabel"],
      weakLabel: [1, "weakLabel"],
      mediumLabel: [1, "mediumLabel"],
      strongLabel: [1, "strongLabel"],
      feedback: [1, "feedback"],
      showPassword: [1, "showPassword"],
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      size: [1, "pSize", "size"]
    },
    features: [i03.\u0275\u0275ProvidersFeature([
      PasswordStyle,
      {
        provide: PASSWORD_DIRECTIVE_INSTANCE,
        useExisting: PasswordDirective2
      },
      {
        provide: PARENT_INSTANCE,
        useExisting: PasswordDirective2
      }
    ]), i03.\u0275\u0275HostDirectivesFeature([i1.Bind]), i03.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(PasswordDirective, [{
    type: Directive,
    args: [{
      selector: "[pPassword]",
      standalone: true,
      host: { "[class]": "cx('rootDirective')" },
      providers: [
        PasswordStyle,
        {
          provide: PASSWORD_DIRECTIVE_INSTANCE,
          useExisting: PasswordDirective
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: PasswordDirective
        }
      ],
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    pPasswordPT: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "pPasswordPT",
        required: false
      }]
    }],
    pPasswordUnstyled: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "pPasswordUnstyled",
        required: false
      }]
    }],
    promptLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "promptLabel",
        required: false
      }]
    }],
    weakLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "weakLabel",
        required: false
      }]
    }],
    mediumLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "mediumLabel",
        required: false
      }]
    }],
    strongLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "strongLabel",
        required: false
      }]
    }],
    feedback: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "feedback",
        required: false
      }]
    }],
    showPassword: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "showPassword",
        required: false
      }]
    }],
    variant: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    fluid: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    size: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "pSize",
        required: false
      }]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    onKeyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var MapperPipe = class MapperPipe2 {
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static \u0275fac = function MapperPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapperPipe2)();
  };
  static \u0275pipe = /* @__PURE__ */ i03.\u0275\u0275definePipe({
    name: "mapper",
    type: MapperPipe2,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(MapperPipe, [{
    type: Pipe,
    args: [{
      name: "mapper",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var Password_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Password),
  multi: true
};
var Password = class Password2 extends BaseInput {
  componentName = "Password";
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcPassword = inject(PASSWORD_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : (
    /* istanbul ignore next */
    []
  ));
  label = input(...ngDevMode ? [void 0, { debugName: "label" }] : (
    /* istanbul ignore next */
    []
  ));
  promptLabel = input(...ngDevMode ? [void 0, { debugName: "promptLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  mediumRegex = input("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})", ...ngDevMode ? [{ debugName: "mediumRegex" }] : (
    /* istanbul ignore next */
    []
  ));
  strongRegex = input("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})", ...ngDevMode ? [{ debugName: "strongRegex" }] : (
    /* istanbul ignore next */
    []
  ));
  weakLabel = input(...ngDevMode ? [void 0, { debugName: "weakLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  mediumLabel = input(...ngDevMode ? [void 0, { debugName: "mediumLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  strongLabel = input(...ngDevMode ? [void 0, { debugName: "strongLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  feedback = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "feedback" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  toggleMask = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "toggleMask" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  inputStyleClass = input(...ngDevMode ? [void 0, { debugName: "inputStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  inputStyle = input(...ngDevMode ? [void 0, { debugName: "inputStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  autocomplete = input(...ngDevMode ? [void 0, { debugName: "autocomplete" }] : (
    /* istanbul ignore next */
    []
  ));
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  showClear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showClear" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  autofocus = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "autofocus" } : (
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
  appendTo = input("self", ...ngDevMode ? [{ debugName: "appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = input(...ngDevMode ? [void 0, { debugName: "overlayOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  onFocus = output();
  onBlur = output();
  onClear = output();
  overlayViewChild = viewChild("overlay", ...ngDevMode ? [{ debugName: "overlayViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  inputViewChild = viewChild("input", ...ngDevMode ? [{ debugName: "inputViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
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
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerTemplate" } : (
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
  hideIconTemplate = contentChild("hideicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  showIconTemplate = contentChild("showicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayVisible = signal(false, ...ngDevMode ? [{ debugName: "overlayVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  meter;
  infoText;
  focused = false;
  unmasked = signal(false, ...ngDevMode ? [{ debugName: "unmasked" }] : (
    /* istanbul ignore next */
    []
  ));
  requiredAttr = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "requiredAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  disabledAttr = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "disabledAttr" }] : (
    /* istanbul ignore next */
    []
  ));
  inputType = computed(() => this.unmasked() ? "text" : "password", ...ngDevMode ? [{ debugName: "inputType" }] : (
    /* istanbul ignore next */
    []
  ));
  get showClearIcon() {
    return this.showClear() && this.value != null;
  }
  get maskIconContext() {
    return { class: this.cx("maskIcon") ?? "" };
  }
  get unmaskIconContext() {
    return { class: this.cx("unmaskIcon") ?? "" };
  }
  mediumCheckRegExp;
  strongCheckRegExp;
  resizeListener;
  scrollHandler;
  value = null;
  translationSubscription;
  _componentStyle = inject(PasswordStyle);
  overlayService = inject(OverlayService);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    this.infoText = this.promptText();
    this.mediumCheckRegExp = new RegExp(this.mediumRegex());
    this.strongCheckRegExp = new RegExp(this.strongRegex());
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.updateUI(this.value || "");
    });
  }
  onInput(event) {
    this.value = event.target.value;
    this.onModelChange(this.value);
  }
  onInputFocus(event) {
    this.focused = true;
    if (this.feedback()) this.overlayVisible.set(true);
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    if (this.feedback()) this.overlayVisible.set(false);
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  onKeyUp(event) {
    if (this.feedback()) {
      let value = event.target.value;
      this.updateUI(value);
      if (event.code === "Escape") {
        if (this.overlayVisible()) this.overlayVisible.set(false);
        return;
      }
      if (!this.overlayVisible()) this.overlayVisible.set(true);
    }
  }
  updateUI(value) {
    let label = null;
    let meter = null;
    switch (this.testStrength(value)) {
      case 1:
        label = this.weakText();
        meter = {
          strength: "weak",
          width: "33.33%"
        };
        break;
      case 2:
        label = this.mediumText();
        meter = {
          strength: "medium",
          width: "66.66%"
        };
        break;
      case 3:
        label = this.strongText();
        meter = {
          strength: "strong",
          width: "100%"
        };
        break;
      default:
        label = this.promptText();
        meter = null;
    }
    this.meter = meter;
    this.infoText = label;
  }
  onMaskToggle() {
    this.unmasked.update((v) => !v);
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  testStrength(str) {
    let level = 0;
    if (this.strongCheckRegExp?.test(str)) level = 3;
    else if (this.mediumCheckRegExp?.test(str)) level = 2;
    else if (str.length) level = 1;
    return level;
  }
  promptText() {
    return this.promptLabel() || this.translate(TranslationKeys.PASSWORD_PROMPT);
  }
  weakText() {
    return this.weakLabel() || this.translate(TranslationKeys.WEAK);
  }
  mediumText() {
    return this.mediumLabel() || this.translate(TranslationKeys.MEDIUM);
  }
  strongText() {
    return this.strongLabel() || this.translate(TranslationKeys.STRONG);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.writeValue(this.value);
    this.onClear.emit();
  }
  writeControlValue(value, setModelValue) {
    if (value === void 0) this.value = null;
    else this.value = value;
    if (this.feedback()) this.updateUI(this.value || "");
    setModelValue(this.value);
  }
  onDestroy() {
    if (this.translationSubscription) this.translationSubscription.unsubscribe();
  }
  get containerDataP() {
    return this.cn({ fluid: this.hasFluid });
  }
  get meterDataP() {
    return this.cn({ [this.meter?.strength]: this.meter?.strength });
  }
  get overlayDataP() {
    return this.cn({ ["overlay-" + this.$appendTo()]: "overlay-" + this.$appendTo() });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Password_BaseFactory = void 0;
    return function Password_Factory(__ngFactoryType__) {
      return (\u0275Password_BaseFactory || (\u0275Password_BaseFactory = i03.\u0275\u0275getInheritedFactory(Password2)))(__ngFactoryType__ || Password2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["content"];
    const _c1 = ["footer"];
    const _c2 = ["header"];
    const _c3 = ["clearicon"];
    const _c4 = ["hideicon"];
    const _c5 = ["showicon"];
    const _c6 = ["overlay"];
    const _c7 = ["input"];
    function Password_Conditional_2_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275elementStart(0, "svg", 8);
        i03.\u0275\u0275listener("click", function Password_Conditional_2_Conditional_0_Template_svg_click_0_listener() {
          i03.\u0275\u0275restoreView(_r2);
          const ctx_r2 = i03.\u0275\u0275nextContext(2);
          return i03.\u0275\u0275resetView(ctx_r2.clear());
        });
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(2);
        i03.\u0275\u0275classMap(ctx_r2.cx("clearIcon"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
      }
    }
    function Password_Conditional_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275conditionalCreate(0, Password_Conditional_2_Conditional_0_Template, 1, 3, ":svg:svg", 5);
        i03.\u0275\u0275elementStart(1, "span", 6);
        i03.\u0275\u0275listener("click", function Password_Conditional_2_Template_span_click_1_listener() {
          i03.\u0275\u0275restoreView(_r1);
          const ctx_r2 = i03.\u0275\u0275nextContext();
          return i03.\u0275\u0275resetView(ctx_r2.clear());
        });
        i03.\u0275\u0275template(2, Password_Conditional_2_ng_container_2_Template, 1, 0, "ng-container", 7);
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext();
        i03.\u0275\u0275conditional(!ctx_r2.clearIconTemplate() ? 0 : -1);
        i03.\u0275\u0275advance();
        i03.\u0275\u0275classMap(ctx_r2.cx("clearIcon"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("clearIcon"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.clearIconTemplate());
      }
    }
    function Password_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275elementStart(0, "svg", 11);
        i03.\u0275\u0275listener("click", function Password_Conditional_3_Conditional_0_Conditional_0_Template_svg_click_0_listener() {
          i03.\u0275\u0275restoreView(_r4);
          const ctx_r2 = i03.\u0275\u0275nextContext(3);
          return i03.\u0275\u0275resetView(ctx_r2.onMaskToggle());
        });
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(3);
        i03.\u0275\u0275classMap(ctx_r2.cx("maskIcon"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("maskIcon"));
      }
    }
    function Password_Conditional_3_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275elementStart(0, "span", 6);
        i03.\u0275\u0275listener("click", function Password_Conditional_3_Conditional_0_Conditional_1_Template_span_click_0_listener() {
          i03.\u0275\u0275restoreView(_r5);
          const ctx_r2 = i03.\u0275\u0275nextContext(3);
          return i03.\u0275\u0275resetView(ctx_r2.onMaskToggle());
        });
        i03.\u0275\u0275template(1, Password_Conditional_3_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 12);
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(3);
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("maskIcon"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.hideIconTemplate())("ngTemplateOutletContext", ctx_r2.maskIconContext);
      }
    }
    function Password_Conditional_3_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, Password_Conditional_3_Conditional_0_Conditional_0_Template, 1, 3, ":svg:svg", 9)(1, Password_Conditional_3_Conditional_0_Conditional_1_Template, 2, 3, "span", 10);
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(2);
        i03.\u0275\u0275conditional(!ctx_r2.hideIconTemplate() ? 0 : 1);
      }
    }
    function Password_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275elementStart(0, "svg", 14);
        i03.\u0275\u0275listener("click", function Password_Conditional_3_Conditional_1_Conditional_0_Template_svg_click_0_listener() {
          i03.\u0275\u0275restoreView(_r6);
          const ctx_r2 = i03.\u0275\u0275nextContext(3);
          return i03.\u0275\u0275resetView(ctx_r2.onMaskToggle());
        });
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(3);
        i03.\u0275\u0275classMap(ctx_r2.cx("unmaskIcon"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("unmaskIcon"));
      }
    }
    function Password_Conditional_3_Conditional_1_Conditional_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275elementStart(0, "span", 6);
        i03.\u0275\u0275listener("click", function Password_Conditional_3_Conditional_1_Conditional_1_Template_span_click_0_listener() {
          i03.\u0275\u0275restoreView(_r7);
          const ctx_r2 = i03.\u0275\u0275nextContext(3);
          return i03.\u0275\u0275resetView(ctx_r2.onMaskToggle());
        });
        i03.\u0275\u0275template(1, Password_Conditional_3_Conditional_1_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 12);
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(3);
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("unmaskIcon"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.showIconTemplate())("ngTemplateOutletContext", ctx_r2.unmaskIconContext);
      }
    }
    function Password_Conditional_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, Password_Conditional_3_Conditional_1_Conditional_0_Template, 1, 3, ":svg:svg", 13)(1, Password_Conditional_3_Conditional_1_Conditional_1_Template, 2, 3, "span", 10);
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(2);
        i03.\u0275\u0275conditional(!ctx_r2.showIconTemplate() ? 0 : 1);
      }
    }
    function Password_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, Password_Conditional_3_Conditional_0_Template, 2, 1)(1, Password_Conditional_3_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext();
        i03.\u0275\u0275conditional(ctx_r2.unmasked() ? 0 : 1);
      }
    }
    function Password_ng_template_6_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_ng_template_6_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_ng_template_6_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275template(0, Password_ng_template_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(2);
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.contentTemplate());
      }
    }
    function Password_ng_template_6_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementStart(0, "div", 10)(1, "div", 10);
        i03.\u0275\u0275element(2, "div", 10);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(3, "div", 10);
        i03.\u0275\u0275text(4);
        i03.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext(2);
        i03.\u0275\u0275classMap(ctx_r2.cx("content"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("content"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275classMap(ctx_r2.cx("meter"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("meter"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275classMap(ctx_r2.cx("meterLabel"));
        i03.\u0275\u0275styleProp("width", ctx_r2.meter ? ctx_r2.meter.width : "");
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("meterLabel"));
        i03.\u0275\u0275attribute("data-p", ctx_r2.meterDataP);
        i03.\u0275\u0275advance();
        i03.\u0275\u0275classMap(ctx_r2.cx("meterText"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("meterText"));
        i03.\u0275\u0275advance();
        i03.\u0275\u0275textInterpolate(ctx_r2.infoText);
      }
    }
    function Password_ng_template_6_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275elementContainer(0);
      }
    }
    function Password_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = i03.\u0275\u0275getCurrentView();
        i03.\u0275\u0275elementStart(0, "div", 6);
        i03.\u0275\u0275listener("click", function Password_ng_template_6_Template_div_click_0_listener($event) {
          i03.\u0275\u0275restoreView(_r8);
          const ctx_r2 = i03.\u0275\u0275nextContext();
          return i03.\u0275\u0275resetView(ctx_r2.onOverlayClick($event));
        });
        i03.\u0275\u0275template(1, Password_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 7);
        i03.\u0275\u0275conditionalCreate(2, Password_ng_template_6_Conditional_2_Template, 1, 1, "ng-container")(3, Password_ng_template_6_Conditional_3_Template, 5, 16, "div", 15);
        i03.\u0275\u0275template(4, Password_ng_template_6_ng_container_4_Template, 1, 0, "ng-container", 7);
        i03.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r2 = i03.\u0275\u0275nextContext();
        i03.\u0275\u0275styleMap(ctx_r2.sx("overlay"));
        i03.\u0275\u0275classMap(ctx_r2.cx("overlay"));
        i03.\u0275\u0275property("pBind", ctx_r2.ptm("overlay"));
        i03.\u0275\u0275attribute("data-p", ctx_r2.overlayDataP);
        i03.\u0275\u0275advance();
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate());
        i03.\u0275\u0275advance();
        i03.\u0275\u0275conditional(ctx_r2.contentTemplate() ? 2 : 3);
        i03.\u0275\u0275advance(2);
        i03.\u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate());
      }
    }
    return /* @__PURE__ */ i03.\u0275\u0275defineComponent({
      type: Password2,
      selectors: [["p-password"]],
      contentQueries: function Password_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i03.\u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4)(dirIndex, ctx.footerTemplate, _c1, 4)(dirIndex, ctx.headerTemplate, _c2, 4)(dirIndex, ctx.clearIconTemplate, _c3, 4)(dirIndex, ctx.hideIconTemplate, _c4, 4)(dirIndex, ctx.showIconTemplate, _c5, 4);
        }
        if (rf & 2) {
          i03.\u0275\u0275queryAdvance(6);
        }
      },
      viewQuery: function Password_Query(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275viewQuerySignal(ctx.overlayViewChild, _c6, 5)(ctx.inputViewChild, _c7, 5);
        }
        if (rf & 2) {
          i03.\u0275\u0275queryAdvance(2);
        }
      },
      hostVars: 5,
      hostBindings: function Password_HostBindings(rf, ctx) {
        if (rf & 2) {
          i03.\u0275\u0275attribute("data-p", ctx.containerDataP);
          i03.\u0275\u0275styleMap(ctx.sx("root"));
          i03.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        ariaLabel: [1, "ariaLabel"],
        ariaLabelledBy: [1, "ariaLabelledBy"],
        label: [1, "label"],
        promptLabel: [1, "promptLabel"],
        mediumRegex: [1, "mediumRegex"],
        strongRegex: [1, "strongRegex"],
        weakLabel: [1, "weakLabel"],
        mediumLabel: [1, "mediumLabel"],
        strongLabel: [1, "strongLabel"],
        inputId: [1, "inputId"],
        feedback: [1, "feedback"],
        toggleMask: [1, "toggleMask"],
        inputStyleClass: [1, "inputStyleClass"],
        inputStyle: [1, "inputStyle"],
        autocomplete: [1, "autocomplete"],
        placeholder: [1, "placeholder"],
        showClear: [1, "showClear"],
        autofocus: [1, "autofocus"],
        tabindex: [1, "tabindex"],
        appendTo: [1, "appendTo"],
        motionOptions: [1, "motionOptions"],
        overlayOptions: [1, "overlayOptions"]
      },
      outputs: {
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClear: "onClear"
      },
      features: [i03.\u0275\u0275ProvidersFeature([
        Password_VALUE_ACCESSOR,
        PasswordStyle,
        {
          provide: PASSWORD_INSTANCE,
          useExisting: Password2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Password2
        }
      ]), i03.\u0275\u0275HostDirectivesFeature([i1.Bind]), i03.\u0275\u0275InheritDefinitionFeature],
      decls: 8,
      vars: 34,
      consts: [["input", ""], ["overlay", ""], ["content", ""], ["pInputText", "", 3, "input", "focus", "blur", "keyup", "pSize", "value", "variant", "invalid", "pAutoFocus", "pt", "unstyled"], [3, "visibleChange", "hostAttrSelector", "visible", "options", "target", "appendTo", "unstyled", "pt", "motionOptions"], ["data-p-icon", "times", 3, "class", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], ["data-p-icon", "times", 3, "click", "pBind"], ["data-p-icon", "eye-slash", 3, "class", "pBind"], [3, "pBind"], ["data-p-icon", "eye-slash", 3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "eye", 3, "class", "pBind"], ["data-p-icon", "eye", 3, "click", "pBind"], [3, "class", "pBind"]],
      template: function Password_Template(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275elementStart(0, "input", 3, 0);
          i03.\u0275\u0275listener("input", function Password_Template_input_input_0_listener($event) {
            return ctx.onInput($event);
          })("focus", function Password_Template_input_focus_0_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function Password_Template_input_blur_0_listener($event) {
            return ctx.onInputBlur($event);
          })("keyup", function Password_Template_input_keyup_0_listener($event) {
            return ctx.onKeyUp($event);
          });
          i03.\u0275\u0275elementEnd();
          i03.\u0275\u0275conditionalCreate(2, Password_Conditional_2_Template, 3, 5);
          i03.\u0275\u0275conditionalCreate(3, Password_Conditional_3_Template, 2, 1);
          i03.\u0275\u0275elementStart(4, "p-overlay", 4, 1);
          i03.\u0275\u0275listener("visibleChange", function Password_Template_p_overlay_visibleChange_4_listener($event) {
            return ctx.overlayVisible.set($event);
          });
          i03.\u0275\u0275template(6, Password_ng_template_6_Template, 5, 9, "ng-template", null, 2, i03.\u0275\u0275templateRefExtractor);
          i03.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i03.\u0275\u0275styleMap(ctx.inputStyle());
          i03.\u0275\u0275classMap(ctx.cn(ctx.cx("pcInputText"), ctx.inputStyleClass()));
          i03.\u0275\u0275property("pSize", ctx.size())("value", ctx.value)("variant", ctx.$variant())("invalid", ctx.invalid())("pAutoFocus", ctx.autofocus())("pt", ctx.ptm("pcInputText"))("unstyled", ctx.unstyled());
          i03.\u0275\u0275attribute("label", ctx.label())("aria-label", ctx.ariaLabel())("aria-labelledBy", ctx.ariaLabelledBy())("id", ctx.inputId())("tabindex", ctx.tabindex())("type", ctx.inputType())("placeholder", ctx.placeholder())("autocomplete", ctx.autocomplete())("name", ctx.name())("maxlength", ctx.maxlength())("minlength", ctx.minlength())("required", ctx.requiredAttr())("disabled", ctx.disabledAttr());
          i03.\u0275\u0275advance(2);
          i03.\u0275\u0275conditional(ctx.showClearIcon ? 2 : -1);
          i03.\u0275\u0275advance();
          i03.\u0275\u0275conditional(ctx.toggleMask() ? 3 : -1);
          i03.\u0275\u0275advance();
          i03.\u0275\u0275property("hostAttrSelector", ctx.$attrSelector)("visible", ctx.overlayVisible())("options", ctx.overlayOptions())("target", "@parent")("appendTo", ctx.$appendTo())("unstyled", ctx.unstyled())("pt", ctx.ptm("pcOverlay"))("motionOptions", ctx.motionOptions());
        }
      },
      dependencies: [NgTemplateOutlet, InputText, AutoFocus, Times, EyeSlash, Eye, Overlay, SharedModule, BindModule, i1.Bind],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(Password, [{
    type: Component3,
    args: [{
      selector: "p-password",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        InputText,
        AutoFocus,
        Times,
        EyeSlash,
        Eye,
        Overlay,
        SharedModule,
        BindModule
      ],
      template: `
        <input
            #input
            [attr.label]="label()"
            [attr.aria-label]="ariaLabel()"
            [attr.aria-labelledBy]="ariaLabelledBy()"
            [attr.id]="inputId()"
            [attr.tabindex]="tabindex()"
            pInputText
            [pSize]="size()"
            [style]="inputStyle()"
            [class]="cn(cx('pcInputText'), inputStyleClass())"
            [attr.type]="inputType()"
            [attr.placeholder]="placeholder()"
            [attr.autocomplete]="autocomplete()"
            [value]="value"
            [variant]="$variant()"
            [attr.name]="name()"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.required]="requiredAttr()"
            [attr.disabled]="disabledAttr()"
            [invalid]="invalid()"
            (input)="onInput($event)"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keyup)="onKeyUp($event)"
            [pAutoFocus]="autofocus()"
            [pt]="ptm('pcInputText')"
            [unstyled]="unstyled()"
        />
        @if (showClearIcon) {
            @if (!clearIconTemplate()) {
                <svg data-p-icon="times" [class]="cx('clearIcon')" (click)="clear()" [pBind]="ptm('clearIcon')" />
            }
            <span (click)="clear()" [class]="cx('clearIcon')" [pBind]="ptm('clearIcon')">
                <ng-container *ngTemplateOutlet="clearIconTemplate()"></ng-container>
            </span>
        }

        @if (toggleMask()) {
            @if (unmasked()) {
                @if (!hideIconTemplate()) {
                    <svg data-p-icon="eye-slash" [class]="cx('maskIcon')" [pBind]="ptm('maskIcon')" (click)="onMaskToggle()" />
                } @else {
                    <span (click)="onMaskToggle()" [pBind]="ptm('maskIcon')">
                        <ng-container *ngTemplateOutlet="hideIconTemplate(); context: maskIconContext"></ng-container>
                    </span>
                }
            } @else {
                @if (!showIconTemplate()) {
                    <svg data-p-icon="eye" [class]="cx('unmaskIcon')" [pBind]="ptm('unmaskIcon')" (click)="onMaskToggle()" />
                } @else {
                    <span (click)="onMaskToggle()" [pBind]="ptm('unmaskIcon')">
                        <ng-container *ngTemplateOutlet="showIconTemplate(); context: unmaskIconContext"></ng-container>
                    </span>
                }
            }
        }

        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [visible]="overlayVisible()"
            (visibleChange)="overlayVisible.set($event)"
            [options]="overlayOptions()"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            [unstyled]="unstyled()"
            [pt]="ptm('pcOverlay')"
            [motionOptions]="motionOptions()"
        >
            <ng-template #content>
                <div [class]="cx('overlay')" [style]="sx('overlay')" (click)="onOverlayClick($event)" [pBind]="ptm('overlay')" [attr.data-p]="overlayDataP">
                    <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
                    @if (contentTemplate()) {
                        <ng-container *ngTemplateOutlet="contentTemplate()"></ng-container>
                    } @else {
                        <div [class]="cx('content')" [pBind]="ptm('content')">
                            <div [class]="cx('meter')" [pBind]="ptm('meter')">
                                <div [class]="cx('meterLabel')" [style.width]="meter ? meter.width : ''" [pBind]="ptm('meterLabel')" [attr.data-p]="meterDataP"></div>
                            </div>
                            <div [class]="cx('meterText')" [pBind]="ptm('meterText')">{{ infoText }}</div>
                        </div>
                    }
                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                </div>
            </ng-template>
        </p-overlay>
    `,
      providers: [
        Password_VALUE_ACCESSOR,
        PasswordStyle,
        {
          provide: PASSWORD_INSTANCE,
          useExisting: Password
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Password
        }
      ],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[style]": "sx('root')",
        "[attr.data-p]": "containerDataP"
      },
      hostDirectives: [Bind2]
    }]
  }], null, {
    ariaLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabelledBy",
        required: false
      }]
    }],
    label: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "label",
        required: false
      }]
    }],
    promptLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "promptLabel",
        required: false
      }]
    }],
    mediumRegex: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "mediumRegex",
        required: false
      }]
    }],
    strongRegex: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "strongRegex",
        required: false
      }]
    }],
    weakLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "weakLabel",
        required: false
      }]
    }],
    mediumLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "mediumLabel",
        required: false
      }]
    }],
    strongLabel: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "strongLabel",
        required: false
      }]
    }],
    inputId: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    feedback: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "feedback",
        required: false
      }]
    }],
    toggleMask: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "toggleMask",
        required: false
      }]
    }],
    inputStyleClass: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "inputStyleClass",
        required: false
      }]
    }],
    inputStyle: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "inputStyle",
        required: false
      }]
    }],
    autocomplete: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "autocomplete",
        required: false
      }]
    }],
    placeholder: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    showClear: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "showClear",
        required: false
      }]
    }],
    autofocus: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "autofocus",
        required: false
      }]
    }],
    tabindex: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    appendTo: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    motionOptions: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    overlayOptions: [{
      type: i03.Input,
      args: [{
        isSignal: true,
        alias: "overlayOptions",
        required: false
      }]
    }],
    onFocus: [{
      type: i03.Output,
      args: ["onFocus"]
    }],
    onBlur: [{
      type: i03.Output,
      args: ["onBlur"]
    }],
    onClear: [{
      type: i03.Output,
      args: ["onClear"]
    }],
    overlayViewChild: [{
      type: i03.ViewChild,
      args: ["overlay", { isSignal: true }]
    }],
    inputViewChild: [{
      type: i03.ViewChild,
      args: ["input", { isSignal: true }]
    }],
    contentTemplate: [{
      type: i03.ContentChild,
      args: ["content", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i03.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }],
    headerTemplate: [{
      type: i03.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    clearIconTemplate: [{
      type: i03.ContentChild,
      args: ["clearicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    hideIconTemplate: [{
      type: i03.ContentChild,
      args: ["hideicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    showIconTemplate: [{
      type: i03.ContentChild,
      args: ["showicon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var PasswordModule = class PasswordModule2 {
  static \u0275fac = function PasswordModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PasswordModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i03.\u0275\u0275defineNgModule({
    type: PasswordModule2
  });
  static \u0275inj = /* @__PURE__ */ i03.\u0275\u0275defineInjector({
    imports: [Password, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(PasswordModule, [{
    type: NgModule,
    args: [{
      imports: [
        Password,
        PasswordDirective,
        SharedModule,
        BindModule
      ],
      exports: [
        PasswordDirective,
        Password,
        SharedModule,
        BindModule
      ]
    }]
  }], null, null);
})();
export {
  MapperPipe,
  Password,
  PasswordClasses,
  PasswordDirective,
  PasswordModule,
  PasswordStyle,
  Password_VALUE_ACCESSOR
};
//# sourceMappingURL=primeng_password.OeEiOWIoDG-dev.js.map

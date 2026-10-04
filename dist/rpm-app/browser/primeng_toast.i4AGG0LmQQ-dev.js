if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
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
  ce
} from "@nf-internal/chunk-Q6Y7ILSX";
import {
  p
} from "@nf-internal/chunk-72IGR2JC";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/primeng/fesm2022/primeng-toast.mjs
import * as i05 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component5, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, inject, input, numberAttribute, output, signal } from "@angular/core";
import { MessageService, SharedModule } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { ZIndexUtils } from "primeng/utils";

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style = `
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        --px-offset-y: calc(var(--px-swipe-amount-y) + (var(--px-toast-offset) + var(--px-toast-index) * var(--px-gap)) * var(--px-raise-factor));
        --px-offset-x: var(--px-swipe-amount-x);
        width: 100%;
        outline: none;
        position: absolute;
        touch-action: none;
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(100% * var(--px-raise-factor) * -1));
        z-index: var(--px-toast-z-index);
        transition: transform dt('toast.transition.duration'), opacity dt('toast.transition.duration'), height dt('toast.transition.duration');
    }

    .p-toast-message:focus-visible {
        box-shadow: dt('toast.focus.ring.shadow');
        outline: dt('toast.focus.ring.width') dt('toast.focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('toast.focus.ring.offset');
    }

    .p-toast-message[data-mounted] {
        opacity: 1;
        transform: translateY(0);
    }

    .p-toast-message:not([data-expanded]):not([data-front]) {
        overflow: hidden;
        height: var(--px-front-toast-height);
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * var(--px-toast-index) * var(--px-gap))) scale(calc(var(--px-toast-index) * -0.05 + 1));
    }

    .p-toast-message[data-mounted][data-expanded] {
        height: var(--px-initial-height);
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y));
    }

    .p-toast-message[data-expanded]::after {
        content: "";
        position: absolute;
        left: 0;
        height: calc(var(--px-gap) + 1px);
        width: 100%;
        bottom: 100%;
    }

    .p-toast-message:not([data-visible]) {
        opacity: 0;
        pointer-events: none;
        user-select: none;
    }

    .p-toast-message[data-removed][data-front]:not([data-swipe-out]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * -100%));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out])[data-expanded] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc((var(--px-offset-y)) + (var(--px-raise-factor) * -100%)));
    }

    .p-toast-message[data-removed]:not([data-front]):not([data-swipe-out]):not([data-expanded]) {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-raise-factor) * 40% * -1));
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message[data-swiping] {
        transition: none;
        transform: translateX(var(--px-offset-x)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swiped] {
        -webkit-user-select: none;
        user-select: none;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="up"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) - 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="down"] {
        opacity: 0;
        transform: translateX(var(--px-offset-x)) translateY(calc(var(--px-offset-y) + 100%)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="left"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) - 100%)) translateY(var(--px-offset-y)) !important;
    }

    .p-toast-message[data-swipe-out][data-swipe-direction="right"] {
        opacity: 0;
        transform: translateX(calc(var(--px-offset-x) + 100%)) translateY(var(--px-offset-y)) !important;
        transition:
            transform 500ms,
            opacity 200ms;
    }

    .p-toast-message-icon,
    .p-toast-message-icon svg,
    .p-toast-message-icon i {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
        margin: dt('toast.icon.margin');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: 0;
        top: 0.25rem;
        right: 0.25rem;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        left: 0.25rem;
        right: auto;
    }

    .p-toast-message-normal,
    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon,
    .p-toast-close-icon svg,
    .p-toast-close-icon i {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-normal {
        background: dt('toast.normal.background');
        border-color: dt('toast.normal.border.color');
        color: dt('toast.normal.color');
        box-shadow: dt('toast.normal.shadow');
    }

    .p-toast-message-normal .p-toast-detail {
        color: dt('toast.normal.detail.color');
    }

    .p-toast-message-normal .p-toast-close-button:focus-visible {
        outline-color: dt('toast.normal.close.button.focus.ring.color');
        box-shadow: dt('toast.normal.close.button.focus.ring.shadow');
    }

    .p-toast-message-normal .p-toast-close-button:hover {
        background: dt('toast.normal.close.button.hover.background');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast {
        position: fixed;
        width: 18.75rem;
        z-index: 2000;
    }

    .p-toast-center {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
    }

    .p-toast-bottom-right {
        right: 2rem;
        bottom: 2rem;
    }

    .p-toast-bottom-center {
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .p-toast-bottom-left {
        left: 2rem;
        bottom: 2rem;
    }

    .p-toast-top-right {
        right: 2rem;
        top: 2rem;
    }

    .p-toast-top-center {
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
    }

    .p-toast-top-left {
        left: 2rem;
        top: 2rem;
    }

    .p-toast-bottom-right .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        right: 0;
    }

    .p-toast-bottom-center .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
    }

    .p-toast[data-position="bottom-left"] .p-toast-message{
        --px-raise-factor: -1;
        bottom: 0;
        left: 0;
    }

    .p-toast[data-position="top-right"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        right: 0;
    }

    .p-toast[data-position="top-center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }

    .p-toast[data-position="top-left"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
        left: 0;
    }

    .p-toast[data-position="center"] .p-toast-message{
        --px-raise-factor: 1;
        top: 0;
    }
`;

// node_modules/primeng/fesm2022/primeng-toast.mjs
import { BaseStyle } from "primeng/base";
import { NgTemplateOutlet } from "@angular/common";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-check.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/check.mjs
var e = { name: "check", meta: { tags: ["check", "done", "complete", "ok", "approve"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M17.4697 3.96973C17.7626 3.67684 18.2373 3.67684 18.5302 3.96973C18.8231 4.26262 18.8231 4.73738 18.5302 5.03028L7.53022 16.0303C7.23732 16.3232 6.76256 16.3232 6.46967 16.0303L1.46967 11.0303C1.17678 10.7374 1.17678 10.2626 1.46967 9.96973C1.76256 9.67684 2.23732 9.67684 2.53022 9.96973L6.99994 14.4395L17.4697 3.96973Z", fill: "currentColor", key: "9v7b3r" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-check.mjs
var Check = class _Check extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function Check_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Check)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Check_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Check_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Check_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Check_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Check_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Check_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Check_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Check_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Check_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _Check,
      selectors: [["svg", "data-p-icon", "check"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Check_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, Check_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Check, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="check"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-info-circle.mjs
import * as i02 from "@angular/core";
import { Component as Component2 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/info-circle.mjs
var o = { name: "info-circle", meta: { tags: ["info-circle", "information", "help", "details"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM10 8.25C10.4142 8.25 10.75 8.58579 10.75 9V14C10.75 14.4142 10.4142 14.75 10 14.75C9.58579 14.75 9.25 14.4142 9.25 14V9C9.25 8.58579 9.58579 8.25 10 8.25ZM10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V6.5C10.75 6.91421 10.4142 7.25 10 7.25C9.58579 7.25 9.25 6.91421 9.25 6.5V6C9.25 5.58579 9.58579 5.25 10 5.25Z", fill: "currentColor", key: "l9ro38" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-info-circle.mjs
var InfoCircle = class _InfoCircle extends CoreIcon {
  constructor() {
    super();
    this._icon = o;
  }
  static \u0275fac = function InfoCircle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoCircle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function InfoCircle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function InfoCircle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, InfoCircle_For_1_Case_0_Template, 1, 9, ":svg:path")(1, InfoCircle_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, InfoCircle_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, InfoCircle_For_1_Case_3_Template, 1, 7, ":svg:line")(4, InfoCircle_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, InfoCircle_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, InfoCircle_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i02.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: _InfoCircle,
      selectors: [["svg", "data-p-icon", "info-circle"]],
      features: [i02.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function InfoCircle_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275repeaterCreate(0, InfoCircle_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(InfoCircle, [{
    type: Component2,
    args: [{
      selector: 'svg[data-p-icon="info-circle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times-circle.mjs
import * as i03 from "@angular/core";
import { Component as Component3 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/times-circle.mjs
var e2 = { name: "times-circle", meta: { tags: ["times-circle", "close", "cancel", "delete", "times"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM12.4697 6.46973C12.7626 6.17683 13.2374 6.17683 13.5303 6.46973C13.8232 6.76262 13.8232 7.23738 13.5303 7.53027L11.0605 10L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L10 11.0605L7.53027 13.5303C7.23738 13.8232 6.76262 13.8232 6.46973 13.5303C6.17683 13.2374 6.17683 12.7626 6.46973 12.4697L8.93945 10L6.46973 7.53027C6.17683 7.23738 6.17683 6.76262 6.46973 6.46973C6.76262 6.17683 7.23738 6.17683 7.53027 6.46973L10 8.93945L12.4697 6.46973Z", fill: "currentColor", key: "8rdmue" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times-circle.mjs
var TimesCircle = class _TimesCircle extends CoreIcon {
  constructor() {
    super();
    this._icon = e2;
  }
  static \u0275fac = function TimesCircle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimesCircle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function TimesCircle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function TimesCircle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, TimesCircle_For_1_Case_0_Template, 1, 9, ":svg:path")(1, TimesCircle_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, TimesCircle_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, TimesCircle_For_1_Case_3_Template, 1, 7, ":svg:line")(4, TimesCircle_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, TimesCircle_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, TimesCircle_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i03.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i03.\u0275\u0275defineComponent({
      type: _TimesCircle,
      selectors: [["svg", "data-p-icon", "times-circle"]],
      features: [i03.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function TimesCircle_Template(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275repeaterCreate(0, TimesCircle_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(TimesCircle, [{
    type: Component3,
    args: [{
      selector: 'svg[data-p-icon="times-circle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-exclamation-triangle.mjs
import * as i04 from "@angular/core";
import { Component as Component4 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/exclamation-triangle.mjs
var t = { name: "exclamation-triangle", meta: { tags: ["exclamation-triangle", "warning", "alert", "danger", "caution"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 2.25C10.2691 2.25005 10.5179 2.39429 10.6514 2.62793L18.6514 16.6279C18.7839 16.8599 18.7825 17.1448 18.6485 17.376C18.5143 17.6072 18.2673 17.75 18 17.75H2C1.73266 17.75 1.48576 17.6072 1.35156 17.376C1.21753 17.1448 1.21609 16.86 1.34863 16.6279L9.34864 2.62793C9.48218 2.39428 9.73089 2.25 10 2.25ZM3.29297 16.25H16.7071L10 4.51172L3.29297 16.25ZM10 13.25C10.4142 13.2501 10.75 13.5858 10.75 14V14.5C10.75 14.9142 10.4142 15.2499 10 15.25C9.5858 15.25 9.25001 14.9142 9.25001 14.5V14C9.25001 13.5858 9.5858 13.25 10 13.25ZM10 7.25C10.4142 7.25007 10.75 7.58583 10.75 8V11.5C10.75 11.9142 10.4142 12.2499 10 12.25C9.5858 12.25 9.25001 11.9142 9.25001 11.5V8C9.25001 7.58579 9.5858 7.25 10 7.25Z", fill: "currentColor", key: "dk1648" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-exclamation-triangle.mjs
var ExclamationTriangle = class _ExclamationTriangle extends CoreIcon {
  constructor() {
    super();
    this._icon = t;
  }
  static \u0275fac = function ExclamationTriangle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExclamationTriangle)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ExclamationTriangle_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ExclamationTriangle_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275conditionalCreate(0, ExclamationTriangle_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ExclamationTriangle_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ExclamationTriangle_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ExclamationTriangle_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ExclamationTriangle_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ExclamationTriangle_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ExclamationTriangle_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i04.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i04.\u0275\u0275defineComponent({
      type: _ExclamationTriangle,
      selectors: [["svg", "data-p-icon", "exclamation-triangle"]],
      features: [i04.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ExclamationTriangle_Template(rf, ctx) {
        if (rf & 1) {
          i04.\u0275\u0275repeaterCreate(0, ExclamationTriangle_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(ExclamationTriangle, [{
    type: Component4,
    args: [{
      selector: 'svg[data-p-icon="exclamation-triangle"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-toast.mjs
import * as i1$1 from "primeng/motion";
import { MotionModule } from "primeng/motion";
export * from "primeng/types/toast";
var inlineStyles = { root: ({ instance }) => {
  const position = instance.position();
  return {
    position: "fixed",
    top: position === "top-right" || position === "top-left" || position === "top-center" ? "20px" : position === "center" ? "50%" : null,
    right: position === "top-right" || position === "bottom-right" ? "20px" : null,
    bottom: position === "bottom-left" || position === "bottom-right" || position === "bottom-center" ? "20px" : null,
    left: position === "top-left" || position === "bottom-left" ? "20px" : position === "center" || position === "top-center" || position === "bottom-center" ? "50%" : null
  };
} };
var classes = {
  root: ({ instance }) => ["p-toast p-component", `p-toast-${instance.position()}`],
  message: ({ instance }) => ({
    "p-toast-message": true,
    "p-toast-message-normal": instance.message().severity === "normal" || instance.message().severity === void 0,
    "p-toast-message-info": instance.message().severity === "info",
    "p-toast-message-warn": instance.message().severity === "warn",
    "p-toast-message-error": instance.message().severity === "error",
    "p-toast-message-success": instance.message().severity === "success",
    "p-toast-message-secondary": instance.message().severity === "secondary",
    "p-toast-message-contrast": instance.message().severity === "contrast"
  }),
  messageContent: "p-toast-message-content",
  messageIcon: ({ instance }) => ({
    "p-toast-message-icon": true,
    [`pi ${instance.message().icon}`]: !!instance.message().icon
  }),
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: ({ instance }) => ({
    "p-toast-close-icon": true,
    [`pi ${instance.message().closeIcon}`]: !!instance.message().closeIcon
  })
};
var ToastStyle = class ToastStyle2 extends BaseStyle {
  name = "toast";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToastStyle_BaseFactory = void 0;
    return function ToastStyle_Factory(__ngFactoryType__) {
      return (\u0275ToastStyle_BaseFactory || (\u0275ToastStyle_BaseFactory = i05.\u0275\u0275getInheritedFactory(ToastStyle2)))(__ngFactoryType__ || ToastStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i05.\u0275\u0275defineInjectable({
    token: ToastStyle2,
    factory: ToastStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(ToastStyle, [{ type: Injectable }], null, null);
})();
var ToastClasses;
(function(ToastClasses2) {
  ToastClasses2["root"] = "p-toast";
  ToastClasses2["message"] = "p-toast-message";
  ToastClasses2["messageContent"] = "p-toast-message-content";
  ToastClasses2["messageIcon"] = "p-toast-message-icon";
  ToastClasses2["messageText"] = "p-toast-message-text";
  ToastClasses2["summary"] = "p-toast-summary";
  ToastClasses2["detail"] = "p-toast-detail";
  ToastClasses2["closeButton"] = "p-toast-close-button";
  ToastClasses2["closeIcon"] = "p-toast-close-icon";
})(ToastClasses || (ToastClasses = {}));
var SWIPE_THRESHOLD = 50;
var VELOCITY_THRESHOLD = 0.11;
var SWIPE_OUT_DURATION = 500;
var ToastItem = class ToastItem2 extends BaseComponent {
  static severityIcons = {
    success: "check",
    info: "info-circle",
    error: "times-circle",
    warn: "exclamation-triangle",
    secondary: "info-circle",
    contrast: "info-circle"
  };
  message = input(...ngDevMode ? [void 0, { debugName: "message" }] : (
    /* istanbul ignore next */
    []
  ));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  life = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  template = input(...ngDevMode ? [void 0, { debugName: "template" }] : (
    /* istanbul ignore next */
    []
  ));
  headlessTemplate = input(...ngDevMode ? [void 0, { debugName: "headlessTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  clearAll = input(null, ...ngDevMode ? [{ debugName: "clearAll" }] : (
    /* istanbul ignore next */
    []
  ));
  stackExpanded = input(false, ...ngDevMode ? [{ debugName: "stackExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIsHovered = input(false, ...ngDevMode ? [{ debugName: "stackIsHovered" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackTotal = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackTotal" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackOffset = input(0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackOffset" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackIsVisible = input(false, ...ngDevMode ? [{ debugName: "stackIsVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  stackIsInteracting = input(false, ...ngDevMode ? [{ debugName: "stackIsInteracting" }] : (
    /* istanbul ignore next */
    []
  ));
  position = input("top-right", ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  onAnimationStart = output();
  onAnimationEnd = output();
  onClose = output();
  onHeightChange = output();
  _componentStyle = inject(ToastStyle);
  timeout = null;
  visible = signal(void 0, ...ngDevMode ? [{ debugName: "visible" }] : (
    /* istanbul ignore next */
    []
  ));
  showCloseButton = computed(() => this.message()?.closable !== false, ...ngDevMode ? [{ debugName: "showCloseButton" }] : (
    /* istanbul ignore next */
    []
  ));
  severityIcon = computed(() => ToastItem2.severityIcons[this.message()?.severity] ?? null, ...ngDevMode ? [{ debugName: "severityIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  isDestroyed = false;
  mounted = signal(false, ...ngDevMode ? [{ debugName: "mounted" }] : (
    /* istanbul ignore next */
    []
  ));
  measuredHeight = signal(0, ...ngDevMode ? [{ debugName: "measuredHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  removed = signal(false, ...ngDevMode ? [{ debugName: "removed" }] : (
    /* istanbul ignore next */
    []
  ));
  offsetBeforeRemove = signal(0, ...ngDevMode ? [{ debugName: "offsetBeforeRemove" }] : (
    /* istanbul ignore next */
    []
  ));
  swiping = signal(false, ...ngDevMode ? [{ debugName: "swiping" }] : (
    /* istanbul ignore next */
    []
  ));
  isSwiped = signal(false, ...ngDevMode ? [{ debugName: "isSwiped" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeOut = signal(false, ...ngDevMode ? [{ debugName: "swipeOut" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeDirection = signal(null, ...ngDevMode ? [{ debugName: "swipeDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeOutDirection = signal(null, ...ngDevMode ? [{ debugName: "swipeOutDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeAmountX = signal(0, ...ngDevMode ? [{ debugName: "swipeAmountX" }] : (
    /* istanbul ignore next */
    []
  ));
  swipeAmountY = signal(0, ...ngDevMode ? [{ debugName: "swipeAmountY" }] : (
    /* istanbul ignore next */
    []
  ));
  pointerStartPosition = null;
  swipeStartTime = 0;
  dataMounted = computed(() => this.mounted() ? "" : null, ...ngDevMode ? [{ debugName: "dataMounted" }] : (
    /* istanbul ignore next */
    []
  ));
  dataFront = computed(() => this.stackIndex() === 0 ? "" : null, ...ngDevMode ? [{ debugName: "dataFront" }] : (
    /* istanbul ignore next */
    []
  ));
  dataExpanded = computed(() => this.stackExpanded() ? "" : null, ...ngDevMode ? [{ debugName: "dataExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  dataVisible = computed(() => this.stackIsVisible() ? "" : null, ...ngDevMode ? [{ debugName: "dataVisible" }] : (
    /* istanbul ignore next */
    []
  ));
  dataRemoved = computed(() => this.removed() ? "" : null, ...ngDevMode ? [{ debugName: "dataRemoved" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwiping = computed(() => this.swiping() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwiping" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwiped = computed(() => this.isSwiped() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwiped" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwipeOut = computed(() => this.swipeOut() ? "" : null, ...ngDevMode ? [{ debugName: "dataSwipeOut" }] : (
    /* istanbul ignore next */
    []
  ));
  dataSwipeDirection = computed(() => this.swipeOutDirection() ? this.swipeOutDirection() : null, ...ngDevMode ? [{ debugName: "dataSwipeDirection" }] : (
    /* istanbul ignore next */
    []
  ));
  dataDismissible = computed(() => String(this.message()?.closable !== false), ...ngDevMode ? [{ debugName: "dataDismissible" }] : (
    /* istanbul ignore next */
    []
  ));
  stackStyles = computed(() => {
    const idx = this.stackIndex();
    const total = this.stackTotal();
    return {
      "--px-toast-index": this.removed() ? this.stackIndex() : idx,
      "--px-toast-z-index": total - idx,
      "--px-initial-height": this.measuredHeight() + "px",
      "--px-toast-offset": (this.removed() ? this.offsetBeforeRemove() : this.stackOffset()) + "px",
      "--px-swipe-amount-x": this.swipeAmountX() + "px",
      "--px-swipe-amount-y": this.swipeAmountY() + "px",
      "z-index": total - idx
    };
  }, ...ngDevMode ? [{ debugName: "stackStyles" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      if (this.clearAll()) this.visible.set(false);
    });
    effect(() => {
      const hovered = this.stackIsHovered();
      const interacting = this.stackIsInteracting();
      const swiping = this.swiping();
      if (hovered || interacting || swiping) this.pauseStackTimer();
      else this.startStackTimer();
    });
  }
  remainingTime = 0;
  timerStartTime = 0;
  headlessContext = computed(() => ({
    $implicit: this.message(),
    closeFn: this.onCloseIconClick
  }), ...ngDevMode ? [{ debugName: "headlessContext" }] : (
    /* istanbul ignore next */
    []
  ));
  messageContext = computed(() => ({
    $implicit: this.message(),
    closeFn: this.onCloseIconClick
  }), ...ngDevMode ? [{ debugName: "messageContext" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => {
    const msg = this.message();
    return this.cn({ [msg?.severity]: msg?.severity });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onCloseIconClick = (event) => {
    this.clearTimeout();
    this.handleFocusOnRemove();
    this.closeStack();
    event?.preventDefault();
  };
  closeStack() {
    this.markRemoved();
    this.visible.set(false);
  }
  isDismissible() {
    return this.message()?.closable !== false;
  }
  markRemoved() {
    if (this.isDestroyed) return;
    this.offsetBeforeRemove.set(this.stackOffset());
    this.removed.set(true);
    this.onHeightChange.emit({
      index: this.index(),
      height: 0,
      removed: true
    });
  }
  onPointerDown = (event) => {
    if (event.button !== 0) return;
    if (!this.isDismissible()) return;
    this.swipeStartTime = Date.now();
    this.offsetBeforeRemove.set(this.stackOffset());
    try {
      event.target.setPointerCapture(event.pointerId);
    } catch (e3) {
    }
    this.swiping.set(true);
    this.pointerStartPosition = {
      x: event.clientX,
      y: event.clientY
    };
  };
  onPointerMove = (event) => {
    if (!this.pointerStartPosition || !this.isDismissible()) return;
    if ((window.getSelection()?.toString().length ?? 0) > 0) return;
    const yDelta = event.clientY - this.pointerStartPosition.y;
    const xDelta = event.clientX - this.pointerStartPosition.x;
    const isRealSwipe = Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1;
    const positionParts = (this.position() ?? "top-right").split("-");
    const side = positionParts[0];
    const align = positionParts[1];
    if (!this.swipeDirection() && isRealSwipe) this.swipeDirection.set(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
    let nextX = 0;
    let nextY = 0;
    if (this.swipeDirection() === "x") nextX = align === "left" && xDelta < 0 || align === "right" && xDelta > 0 ? xDelta : this.applyDampening(xDelta);
    else if (this.swipeDirection() === "y") nextY = side === "top" && yDelta < 0 || side === "bottom" && yDelta > 0 ? yDelta : this.applyDampening(yDelta);
    if (Math.abs(nextX) > 0 || Math.abs(nextY) > 0) this.isSwiped.set(true);
    this.swipeAmountX.set(nextX);
    this.swipeAmountY.set(nextY);
  };
  onPointerUp = () => {
    if (this.swipeOut() || !this.isDismissible()) return;
    this.swiping.set(false);
    this.pointerStartPosition = null;
    const swipeAmount = this.swipeDirection() === "x" ? this.swipeAmountX() : this.swipeAmountY();
    const elapsed = Date.now() - (this.swipeStartTime || Date.now());
    const velocity = elapsed > 0 ? Math.abs(swipeAmount) / elapsed : 0;
    if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
      this.offsetBeforeRemove.set(this.stackOffset());
      if (this.swipeDirection() === "x") this.swipeOutDirection.set(this.swipeAmountX() > 0 ? "right" : "left");
      else this.swipeOutDirection.set(this.swipeAmountY() > 0 ? "down" : "up");
      this.swipeOut.set(true);
      this.markRemoved();
      this.scheduleSwipeOutClose();
      return;
    }
    this.swipeAmountX.set(0);
    this.swipeAmountY.set(0);
    this.isSwiped.set(false);
    this.swipeDirection.set(null);
  };
  onDragEnd = () => {
    this.swiping.set(false);
    this.swipeDirection.set(null);
    this.pointerStartPosition = null;
  };
  applyDampening(delta) {
    const dampenedDelta = delta * (1 / (1.5 + Math.abs(delta) / 20));
    return Math.abs(dampenedDelta) < Math.abs(delta) ? dampenedDelta : delta;
  }
  scheduleSwipeOutClose() {
    this.clearTimeout();
    this.timeout = setTimeout(() => {
      this.visible.set(false);
    }, SWIPE_OUT_DURATION);
  }
  handleFocusOnRemove() {
    const el = this.el.nativeElement;
    const activeEl = this.document.activeElement;
    if (!el?.contains(activeEl)) return;
    const next = el.nextElementSibling?.querySelector('[data-pc-section="closebutton"]');
    const prev = el.previousElementSibling?.querySelector('[data-pc-section="closebutton"]');
    requestAnimationFrame(() => {
      if (next) next.focus({ preventScroll: true });
      else if (prev) prev.focus({ preventScroll: true });
    });
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  onBeforeEnter(event) {
    this.onAnimationStart.emit(event.element);
  }
  onAfterEnter() {
    this.measureStackHeight();
  }
  onAfterLeave(event) {
    if (!this.visible() && !this.isDestroyed) {
      this.onClose.emit({
        index: this.index(),
        message: this.message()
      });
      if (!this.isDestroyed) this.onAnimationEnd.emit(event.element);
    }
  }
  onAfterViewInit() {
    this.visible.set(true);
    this.measureStackHeight();
  }
  measureStackHeight() {
    if (this.mounted()) return;
    const el = this.el.nativeElement.querySelector("[data-stack]");
    if (!el) return;
    const orig = el.style.height;
    el.style.height = "auto";
    const height = el.getBoundingClientRect().height;
    el.style.height = orig;
    this.measuredHeight.set(height);
    this.onHeightChange.emit({
      index: this.index(),
      height
    });
    this.mounted.set(true);
  }
  startStackTimer() {
    const msg = this.message();
    if (msg?.sticky) return;
    this.clearTimeout();
    if (this.remainingTime <= 0) this.remainingTime = msg?.life || this.life() || 3e3;
    this.timerStartTime = Date.now();
    this.timeout = setTimeout(() => {
      this.handleFocusOnRemove();
      this.closeStack();
    }, this.remainingTime);
  }
  pauseStackTimer() {
    if (this.timerStartTime > 0 && this.timeout) {
      const elapsed = Date.now() - this.timerStartTime;
      this.remainingTime = Math.max(0, this.remainingTime - elapsed);
    }
    this.clearTimeout();
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onDestroy() {
    this.isDestroyed = true;
    this.clearTimeout();
    this.visible.set(false);
  }
  static \u0275fac = function ToastItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastItem2)();
  };
  static \u0275cmp = (function() {
    function ToastItem_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function ToastItem_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, ToastItem_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headlessTemplate())("ngTemplateOutletContext", ctx_r0.headlessContext());
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275element(0, "span", 4);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageIcon"), ctx_r0.message()?.icon));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 9);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        i05.\u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 10);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        i05.\u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 11);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        i05.\u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 12);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(4);
        i05.\u0275\u0275classMap(ctx_r0.cx("messageIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageIcon"));
        i05.\u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_0_Template, 1, 4, ":svg:svg", 5)(1, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_1_Template, 1, 4, ":svg:svg", 6)(2, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_2_Template, 1, 4, ":svg:svg", 7)(3, ToastItem_Conditional_3_Conditional_1_Conditional_1_Case_3_Template, 1, 4, ":svg:svg", 8);
      }
      if (rf & 2) {
        let tmp_4_0 = void 0;
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275conditional((tmp_4_0 = ctx_r0.severityIcon()) === "check" ? 0 : tmp_4_0 === "times-circle" ? 1 : tmp_4_0 === "exclamation-triangle" ? 2 : tmp_4_0 === "info-circle" ? 3 : -1);
      }
    }
    function ToastItem_Conditional_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275conditionalCreate(0, ToastItem_Conditional_3_Conditional_1_Conditional_0_Template, 1, 3, "span", 2)(1, ToastItem_Conditional_3_Conditional_1_Conditional_1_Template, 4, 1);
        i05.\u0275\u0275elementStart(2, "div", 4)(3, "div", 4);
        i05.\u0275\u0275text(4);
        i05.\u0275\u0275elementEnd();
        i05.\u0275\u0275elementStart(5, "div", 4);
        i05.\u0275\u0275text(6);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275conditional(ctx_r0.message()?.icon ? 0 : ctx_r0.severityIcon() ? 1 : -1);
        i05.\u0275\u0275advance(2);
        i05.\u0275\u0275classMap(ctx_r0.cx("messageText"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageText"));
        i05.\u0275\u0275attribute("data-p", ctx_r0.dataP());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r0.cx("summary"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("summary"));
        i05.\u0275\u0275attribute("data-p", ctx_r0.dataP());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate1(" ", ctx_r0.message()?.summary, " ");
        i05.\u0275\u0275advance();
        i05.\u0275\u0275classMap(ctx_r0.cx("detail"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("detail"));
        i05.\u0275\u0275attribute("data-p", ctx_r0.dataP());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275textInterpolate(ctx_r0.message()?.detail);
      }
    }
    function ToastItem_Conditional_3_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementContainer(0);
      }
    }
    function ToastItem_Conditional_3_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275template(0, ToastItem_Conditional_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275property("ngTemplateOutlet", ctx_r0.template())("ngTemplateOutletContext", ctx_r0.messageContext());
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275element(0, "span", 4);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.message()?.closeIcon));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275element(0, "svg", 15);
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(3);
        i05.\u0275\u0275classMap(ctx_r0.cx("closeIcon"));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
        i05.\u0275\u0275attribute("aria-hidden", true);
      }
    }
    function ToastItem_Conditional_3_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "div")(1, "button", 13);
        i05.\u0275\u0275listener("click", function ToastItem_Conditional_3_Conditional_3_Template_button_click_1_listener($event) {
          i05.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
        })("keydown.enter", function ToastItem_Conditional_3_Conditional_3_Template_button_keydown_enter_1_listener($event) {
          i05.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i05.\u0275\u0275nextContext(2);
          return i05.\u0275\u0275resetView(ctx_r0.onCloseIconClick($event));
        });
        i05.\u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_3_Conditional_2_Template, 1, 3, "span", 2)(3, ToastItem_Conditional_3_Conditional_3_Conditional_3_Template, 1, 4, ":svg:svg", 14);
        i05.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext(2);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
        i05.\u0275\u0275attribute("class", ctx_r0.cx("closeButton"))("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP());
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.message()?.closeIcon ? 2 : 3);
      }
    }
    function ToastItem_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275elementStart(0, "div", 4);
        i05.\u0275\u0275conditionalCreate(1, ToastItem_Conditional_3_Conditional_1_Template, 7, 15);
        i05.\u0275\u0275conditionalCreate(2, ToastItem_Conditional_3_Conditional_2_Template, 1, 2, "ng-container");
        i05.\u0275\u0275conditionalCreate(3, ToastItem_Conditional_3_Conditional_3_Template, 4, 5, "div");
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("messageContent"), ctx_r0.message()?.contentStyleClass));
        i05.\u0275\u0275property("pBind", ctx_r0.ptm("messageContent"));
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(!ctx_r0.template() ? 1 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.template() ? 2 : -1);
        i05.\u0275\u0275advance();
        i05.\u0275\u0275conditional(ctx_r0.showCloseButton() ? 3 : -1);
      }
    }
    return /* @__PURE__ */ i05.\u0275\u0275defineComponent({
      type: ToastItem2,
      selectors: [["p-toast-item"]],
      inputs: {
        message: [1, "message"],
        index: [1, "index"],
        life: [1, "life"],
        template: [1, "template"],
        headlessTemplate: [1, "headlessTemplate"],
        motionOptions: [1, "motionOptions"],
        clearAll: [1, "clearAll"],
        stackExpanded: [1, "stackExpanded"],
        stackIsHovered: [1, "stackIsHovered"],
        stackIndex: [1, "stackIndex"],
        stackTotal: [1, "stackTotal"],
        stackOffset: [1, "stackOffset"],
        stackIsVisible: [1, "stackIsVisible"],
        stackIsInteracting: [1, "stackIsInteracting"],
        position: [1, "position"]
      },
      outputs: {
        onAnimationStart: "onAnimationStart",
        onAnimationEnd: "onAnimationEnd",
        onClose: "onClose",
        onHeightChange: "onHeightChange"
      },
      features: [i05.\u0275\u0275ProvidersFeature([ToastStyle]), i05.\u0275\u0275InheritDefinitionFeature],
      decls: 4,
      vars: 21,
      consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", "data-stack", "", 3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnAfterLeave", "pointerdown", "pointermove", "pointerup", "dragend", "pMotion", "pMotionAppear", "pMotionOptions", "pBind"], [3, "pBind", "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], ["data-p-icon", "check", 3, "pBind", "class"], ["data-p-icon", "times-circle", 3, "pBind", "class"], ["data-p-icon", "exclamation-triangle", 3, "pBind", "class"], ["data-p-icon", "info-circle", 3, "pBind", "class"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "times-circle", 3, "pBind"], ["data-p-icon", "exclamation-triangle", 3, "pBind"], ["data-p-icon", "info-circle", 3, "pBind"], ["type", "button", "autofocus", "", 3, "click", "keydown.enter", "pBind"], ["data-p-icon", "times", 3, "pBind", "class"], ["data-p-icon", "times", 3, "pBind"]],
      template: function ToastItem_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275elementStart(0, "div", 1, 0);
          i05.\u0275\u0275listener("pMotionOnBeforeEnter", function ToastItem_Template_div_pMotionOnBeforeEnter_0_listener($event) {
            return ctx.onBeforeEnter($event);
          })("pMotionOnAfterEnter", function ToastItem_Template_div_pMotionOnAfterEnter_0_listener() {
            return ctx.onAfterEnter();
          })("pMotionOnAfterLeave", function ToastItem_Template_div_pMotionOnAfterLeave_0_listener($event) {
            return ctx.onAfterLeave($event);
          })("pointerdown", function ToastItem_Template_div_pointerdown_0_listener($event) {
            return ctx.onPointerDown($event);
          })("pointermove", function ToastItem_Template_div_pointermove_0_listener($event) {
            return ctx.onPointerMove($event);
          })("pointerup", function ToastItem_Template_div_pointerup_0_listener() {
            return ctx.onPointerUp();
          })("dragend", function ToastItem_Template_div_dragend_0_listener() {
            return ctx.onDragEnd();
          });
          i05.\u0275\u0275conditionalCreate(2, ToastItem_Conditional_2_Template, 1, 2, "ng-container")(3, ToastItem_Conditional_3_Template, 4, 6, "div", 2);
          i05.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i05.\u0275\u0275styleMap(ctx.stackStyles());
          i05.\u0275\u0275classMap(ctx.cn(ctx.cx("message"), ctx.message()?.styleClass));
          i05.\u0275\u0275property("pMotion", ctx.visible())("pMotionAppear", true)("pMotionOptions", ctx.motionOptions())("pBind", ctx.ptm("message"));
          i05.\u0275\u0275attribute("id", ctx.message()?.id)("data-p", ctx.dataP())("data-mounted", ctx.dataMounted())("data-removed", ctx.dataRemoved())("data-front", ctx.dataFront())("data-expanded", ctx.dataExpanded())("data-visible", ctx.dataVisible())("data-swiping", ctx.dataSwiping())("data-swiped", ctx.dataSwiped())("data-swipe-out", ctx.dataSwipeOut())("data-swipe-direction", ctx.dataSwipeDirection())("data-dismissible", ctx.dataDismissible());
          i05.\u0275\u0275advance(2);
          i05.\u0275\u0275conditional(ctx.headlessTemplate() ? 2 : 3);
        }
      },
      dependencies: [NgTemplateOutlet, Check, InfoCircle, TimesCircle, ExclamationTriangle, Times, SharedModule, Bind2, MotionModule, i1$1.MotionDirective],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(ToastItem, [{
    type: Component5,
    args: [{
      selector: "p-toast-item",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        Check,
        InfoCircle,
        TimesCircle,
        ExclamationTriangle,
        Times,
        SharedModule,
        Bind2,
        MotionModule
      ],
      template: `
        <div
            #container
            [pMotion]="visible()"
            [pMotionAppear]="true"
            [pMotionOptions]="motionOptions()"
            (pMotionOnBeforeEnter)="onBeforeEnter($event)"
            (pMotionOnAfterEnter)="onAfterEnter()"
            (pMotionOnAfterLeave)="onAfterLeave($event)"
            [attr.id]="message()?.id"
            [pBind]="ptm('message')"
            [class]="cn(cx('message'), message()?.styleClass)"
            [style]="stackStyles()"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp()"
            (dragend)="onDragEnd()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-p]="dataP()"
            data-stack=""
            [attr.data-mounted]="dataMounted()"
            [attr.data-removed]="dataRemoved()"
            [attr.data-front]="dataFront()"
            [attr.data-expanded]="dataExpanded()"
            [attr.data-visible]="dataVisible()"
            [attr.data-swiping]="dataSwiping()"
            [attr.data-swiped]="dataSwiped()"
            [attr.data-swipe-out]="dataSwipeOut()"
            [attr.data-swipe-direction]="dataSwipeDirection()"
            [attr.data-dismissible]="dataDismissible()"
        >
            @if (headlessTemplate()) {
                <ng-container *ngTemplateOutlet="headlessTemplate(); context: headlessContext()"></ng-container>
            } @else {
                <div [pBind]="ptm('messageContent')" [class]="cn(cx('messageContent'), message()?.contentStyleClass)">
                    @if (!template()) {
                        @if (message()?.icon) {
                            <span [pBind]="ptm('messageIcon')" [class]="cn(cx('messageIcon'), message()?.icon)"></span>
                        } @else if (severityIcon()) {
                            @switch (severityIcon()) {
                                @case ('check') {
                                    <svg data-p-icon="check" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('times-circle') {
                                    <svg data-p-icon="times-circle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('exclamation-triangle') {
                                    <svg data-p-icon="exclamation-triangle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                                @case ('info-circle') {
                                    <svg data-p-icon="info-circle" [pBind]="ptm('messageIcon')" [class]="cx('messageIcon')" [attr.aria-hidden]="true" />
                                }
                            }
                        }
                        <div [pBind]="ptm('messageText')" [class]="cx('messageText')" [attr.data-p]="dataP()">
                            <div [pBind]="ptm('summary')" [class]="cx('summary')" [attr.data-p]="dataP()">
                                {{ message()?.summary }}
                            </div>
                            <div [pBind]="ptm('detail')" [class]="cx('detail')" [attr.data-p]="dataP()">{{ message()?.detail }}</div>
                        </div>
                    }
                    @if (template()) {
                        <ng-container *ngTemplateOutlet="template(); context: messageContext()"></ng-container>
                    }
                    @if (showCloseButton()) {
                        <div>
                            <button
                                [pBind]="ptm('closeButton')"
                                type="button"
                                [attr.class]="cx('closeButton')"
                                (click)="onCloseIconClick($event)"
                                (keydown.enter)="onCloseIconClick($event)"
                                [attr.aria-label]="closeAriaLabel"
                                autofocus
                                [attr.data-p]="dataP()"
                            >
                                @if (message()?.closeIcon) {
                                    <span [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), message()?.closeIcon)"></span>
                                } @else {
                                    <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ToastStyle]
    }]
  }], () => [], {
    message: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "message",
        required: false
      }]
    }],
    index: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    life: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "life",
        required: false
      }]
    }],
    template: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "template",
        required: false
      }]
    }],
    headlessTemplate: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "headlessTemplate",
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
    clearAll: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "clearAll",
        required: false
      }]
    }],
    stackExpanded: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackExpanded",
        required: false
      }]
    }],
    stackIsHovered: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackIsHovered",
        required: false
      }]
    }],
    stackIndex: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackIndex",
        required: false
      }]
    }],
    stackTotal: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackTotal",
        required: false
      }]
    }],
    stackOffset: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackOffset",
        required: false
      }]
    }],
    stackIsVisible: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackIsVisible",
        required: false
      }]
    }],
    stackIsInteracting: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackIsInteracting",
        required: false
      }]
    }],
    position: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    onAnimationStart: [{
      type: i05.Output,
      args: ["onAnimationStart"]
    }],
    onAnimationEnd: [{
      type: i05.Output,
      args: ["onAnimationEnd"]
    }],
    onClose: [{
      type: i05.Output,
      args: ["onClose"]
    }],
    onHeightChange: [{
      type: i05.Output,
      args: ["onHeightChange"]
    }]
  });
})();
var TOAST_INSTANCE = new InjectionToken("TOAST_INSTANCE");
var Toast = class Toast2 extends BaseComponent {
  componentName = "Toast";
  $pcToast = inject(TOAST_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind2, { self: true });
  key = input(...ngDevMode ? [void 0, { debugName: "key" }] : (
    /* istanbul ignore next */
    []
  ));
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
  life = input(3e3, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "life" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  position = input("top-right", ...ngDevMode ? [{ debugName: "position" }] : (
    /* istanbul ignore next */
    []
  ));
  mode = input("stacked", ...ngDevMode ? [{ debugName: "mode" }] : (
    /* istanbul ignore next */
    []
  ));
  stackGap = input(8, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackGap" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  stackVisibleLimit = input(3, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stackVisibleLimit" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  preventOpenDuplicates = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "preventOpenDuplicates" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  preventDuplicates = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "preventDuplicates" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  computedMotionOptions = computed(() => __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions()), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  breakpoints = input(...ngDevMode ? [void 0, { debugName: "breakpoints" }] : (
    /* istanbul ignore next */
    []
  ));
  onClose = output();
  messageTemplate = contentChild("message", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "messageTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headlessTemplate = contentChild("headless", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headlessTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  messageSubscription;
  clearSubscription;
  messages;
  messageArchive;
  messageService = inject(MessageService);
  _componentStyle = inject(ToastStyle);
  styleElement = null;
  id = s("pn_id_");
  clearAllTrigger = signal(null, ...ngDevMode ? [{ debugName: "clearAllTrigger" }] : (
    /* istanbul ignore next */
    []
  ));
  hovered = signal(false, ...ngDevMode ? [{ debugName: "hovered" }] : (
    /* istanbul ignore next */
    []
  ));
  isInteracting = signal(false, ...ngDevMode ? [{ debugName: "isInteracting" }] : (
    /* istanbul ignore next */
    []
  ));
  heights = signal([], ...ngDevMode ? [{ debugName: "heights" }] : (
    /* istanbul ignore next */
    []
  ));
  sortedHeights = computed(() => [...this.heights()].sort((a, b) => b.index - a.index), ...ngDevMode ? [{ debugName: "sortedHeights" }] : (
    /* istanbul ignore next */
    []
  ));
  frontToastHeight = computed(() => this.sortedHeights()[0]?.height ?? 0, ...ngDevMode ? [{ debugName: "frontToastHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  stackOffsets = computed(() => {
    const sorted = this.sortedHeights();
    const offsets = [0];
    for (let i = 1; i < sorted.length; i++) offsets[i] = offsets[i - 1] + sorted[i - 1].height;
    return offsets;
  }, ...ngDevMode ? [{ debugName: "stackOffsets" }] : (
    /* istanbul ignore next */
    []
  ));
  visualStackIndices = computed(() => {
    const map = /* @__PURE__ */ new Map();
    this.sortedHeights().forEach((entry, idx) => map.set(entry.index, idx));
    return map;
  }, ...ngDevMode ? [{ debugName: "visualStackIndices" }] : (
    /* istanbul ignore next */
    []
  ));
  visibleIndices = computed(() => new Set(this.sortedHeights().slice(0, this.stackVisibleLimit()).map((x) => x.index)), ...ngDevMode ? [{ debugName: "visibleIndices" }] : (
    /* istanbul ignore next */
    []
  ));
  raiseFactor = computed(() => {
    return this.position().startsWith("bottom") ? -1 : 1;
  }, ...ngDevMode ? [{ debugName: "raiseFactor" }] : (
    /* istanbul ignore next */
    []
  ));
  isExpanded = computed(() => this.mode() === "expanded" || this.hovered(), ...ngDevMode ? [{ debugName: "isExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  hostDataExpanded = computed(() => this.isExpanded() ? "" : null, ...ngDevMode ? [{ debugName: "hostDataExpanded" }] : (
    /* istanbul ignore next */
    []
  ));
  stackTotal = computed(() => this.messages?.length ?? 0, ...ngDevMode ? [{ debugName: "stackTotal" }] : (
    /* istanbul ignore next */
    []
  ));
  dataP = computed(() => {
    const pos = this.position();
    return this.cn({ [pos]: pos });
  }, ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getStackIndex(domIndex) {
    return this.visualStackIndices().get(domIndex) ?? (this.messages?.length ?? 0) - 1 - domIndex;
  }
  getStackOffset(domIndex) {
    const visualIdx = this.visualStackIndices().get(domIndex) ?? 0;
    return this.stackOffsets()[visualIdx] ?? 0;
  }
  isStackVisible(domIndex) {
    return this.visibleIndices().has(domIndex);
  }
  onInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) this.add([messages]);
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key() === key) this.clearAll();
      } else this.clearAll();
      this.cd.markForCheck();
    });
  }
  clearAll() {
    this.clearAllTrigger.set({});
    this.heights.set([]);
    this.hovered.set(false);
    this.isInteracting.set(false);
    this.messageArchive = void 0;
  }
  onAfterViewInit() {
    if (this.breakpoints()) this.createStyle();
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates()) this.messageArchive = this.messageArchive ? [...this.messageArchive, ...messages] : [...messages];
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key() === message.key;
    if (allow && this.preventOpenDuplicates()) allow = !this.containsMessage(this.messages ?? [], message);
    if (allow && this.preventDuplicates()) allow = !this.containsMessage(this.messageArchive ?? [], message);
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) return false;
    return collection.find((m) => m.summary === message.summary && m.detail == message.detail && m.severity === message.severity) != null;
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.heights.update((h) => h.filter((x) => x.index !== event.index).map((x) => x.index > event.index ? __spreadProps(__spreadValues({}, x), {
      index: x.index - 1
    }) : x));
    if ((this.messages?.length ?? 0) <= 1) this.hovered.set(false);
    this.onClose.emit({ message: event.message });
    this.onAnimationEnd();
    this.cd.detectChanges();
  }
  onAnimationStart() {
    this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
    if (this.autoZIndex() && this.el?.nativeElement.style.zIndex === "") ZIndexUtils.set("modal", this.el?.nativeElement, this.baseZIndex() || this.config.zIndex.modal);
  }
  onAnimationEnd() {
    if (this.autoZIndex() && p(this.messages)) ZIndexUtils.clear(this.el?.nativeElement);
  }
  onContainerMouseEnter() {
    this.hovered.set(true);
  }
  onContainerMouseLeave(event) {
    if (this.isInteracting()) return;
    const container = this.el?.nativeElement;
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && container?.contains(relatedTarget)) return;
    this.hovered.set(false);
  }
  onContainerPointerDown(event) {
    const target = event.target;
    if (target && target.closest('[data-dismissible="false"]')) return;
    this.isInteracting.set(true);
  }
  onContainerPointerUp() {
    this.isInteracting.set(false);
  }
  onItemHeightChange(event) {
    if (event.removed) {
      this.heights.update((h) => h.filter((x) => x.index !== event.index));
      return;
    }
    this.heights.update((h) => {
      const existing = h.findIndex((x) => x.index === event.index);
      if (existing >= 0) {
        const copy = [...h];
        copy[existing] = event;
        return copy;
      }
      return [...h, event].sort((a, b) => a.index - b.index);
    });
  }
  createStyle() {
    const bp = this.breakpoints();
    if (!this.styleElement) {
      const styleEl = this.renderer.createElement("style");
      ce(styleEl, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, styleEl);
      let innerHTML = "";
      for (let breakpoint in bp) {
        let breakpointStyle = "";
        for (let styleProp in bp[breakpoint]) breakpointStyle += styleProp + ":" + bp[breakpoint][styleProp] + " !important;";
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(styleEl, "innerHTML", innerHTML);
      ce(styleEl, "nonce", this.config?.csp()?.nonce);
      this.styleElement = styleEl;
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if (this.el && this.autoZIndex()) ZIndexUtils.clear(this.el.nativeElement);
    if (this.clearSubscription) this.clearSubscription.unsubscribe();
    this.destroyStyle();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Toast_BaseFactory = void 0;
    return function Toast_Factory(__ngFactoryType__) {
      return (\u0275Toast_BaseFactory || (\u0275Toast_BaseFactory = i05.\u0275\u0275getInheritedFactory(Toast2)))(__ngFactoryType__ || Toast2);
    };
  })();
  static \u0275cmp = (function() {
    const _c0 = ["message"];
    const _c1 = ["headless"];
    function Toast_For_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i05.\u0275\u0275getCurrentView();
        i05.\u0275\u0275elementStart(0, "p-toast-item", 1);
        i05.\u0275\u0275listener("onClose", function Toast_For_1_Template_p_toast_item_onClose_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onMessageClose($event));
        })("onAnimationEnd", function Toast_For_1_Template_p_toast_item_onAnimationEnd_0_listener() {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onAnimationEnd());
        })("onAnimationStart", function Toast_For_1_Template_p_toast_item_onAnimationStart_0_listener() {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onAnimationStart());
        })("onHeightChange", function Toast_For_1_Template_p_toast_item_onHeightChange_0_listener($event) {
          i05.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i05.\u0275\u0275nextContext();
          return i05.\u0275\u0275resetView(ctx_r1.onItemHeightChange($event));
        });
        i05.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const msg_r3 = ctx.$implicit;
        const \u0275$index_1_r4 = ctx.$index;
        const ctx_r1 = i05.\u0275\u0275nextContext();
        i05.\u0275\u0275property("message", msg_r3)("index", \u0275$index_1_r4)("life", ctx_r1.life())("clearAll", ctx_r1.clearAllTrigger())("template", ctx_r1.messageTemplate())("headlessTemplate", ctx_r1.headlessTemplate())("pt", ctx_r1.pt())("unstyled", ctx_r1.unstyled())("motionOptions", ctx_r1.computedMotionOptions())("stackExpanded", ctx_r1.isExpanded())("stackIsHovered", ctx_r1.hovered())("stackIsInteracting", ctx_r1.isInteracting())("stackIndex", ctx_r1.getStackIndex(\u0275$index_1_r4))("stackTotal", ctx_r1.stackTotal())("stackOffset", ctx_r1.getStackOffset(\u0275$index_1_r4))("stackIsVisible", ctx_r1.isStackVisible(\u0275$index_1_r4))("position", ctx_r1.position());
      }
    }
    return /* @__PURE__ */ i05.\u0275\u0275defineComponent({
      type: Toast2,
      selectors: [["p-toast"]],
      contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i05.\u0275\u0275contentQuerySignal(dirIndex, ctx.messageTemplate, _c0, 4)(dirIndex, ctx.headlessTemplate, _c1, 4);
        }
        if (rf & 2) {
          i05.\u0275\u0275queryAdvance(2);
        }
      },
      hostVars: 13,
      hostBindings: function Toast_HostBindings(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275listener("mouseenter", function Toast_mouseenter_HostBindingHandler() {
            return ctx.onContainerMouseEnter();
          })("mouseleave", function Toast_mouseleave_HostBindingHandler($event) {
            return ctx.onContainerMouseLeave($event);
          })("pointerdown", function Toast_pointerdown_HostBindingHandler($event) {
            return ctx.onContainerPointerDown($event);
          })("pointerup", function Toast_pointerup_HostBindingHandler() {
            return ctx.onContainerPointerUp();
          });
        }
        if (rf & 2) {
          i05.\u0275\u0275attribute("data-p", ctx.dataP())("data-position", ctx.position())("data-expanded", ctx.hostDataExpanded());
          i05.\u0275\u0275styleMap(ctx.sx("root"));
          i05.\u0275\u0275classMap(ctx.cx("root"));
          i05.\u0275\u0275styleProp("--%NS%px-gap", ctx.stackGap(), "px")("--%NS%px-front-toast-height", ctx.frontToastHeight(), "px")("--%NS%px-raise-factor", ctx.raiseFactor());
        }
      },
      inputs: {
        key: [1, "key"],
        autoZIndex: [1, "autoZIndex"],
        baseZIndex: [1, "baseZIndex"],
        life: [1, "life"],
        position: [1, "position"],
        mode: [1, "mode"],
        stackGap: [1, "stackGap"],
        stackVisibleLimit: [1, "stackVisibleLimit"],
        preventOpenDuplicates: [1, "preventOpenDuplicates"],
        preventDuplicates: [1, "preventDuplicates"],
        motionOptions: [1, "motionOptions"],
        breakpoints: [1, "breakpoints"]
      },
      outputs: {
        onClose: "onClose"
      },
      features: [i05.\u0275\u0275ProvidersFeature([
        ToastStyle,
        {
          provide: TOAST_INSTANCE,
          useExisting: Toast2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Toast2
        }
      ]), i05.\u0275\u0275HostDirectivesFeature([i1.Bind]), i05.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      consts: [[3, "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "stackExpanded", "stackIsHovered", "stackIsInteracting", "stackIndex", "stackTotal", "stackOffset", "stackIsVisible", "position"], [3, "onClose", "onAnimationEnd", "onAnimationStart", "onHeightChange", "message", "index", "life", "clearAll", "template", "headlessTemplate", "pt", "unstyled", "motionOptions", "stackExpanded", "stackIsHovered", "stackIsInteracting", "stackIndex", "stackTotal", "stackOffset", "stackIsVisible", "position"]],
      template: function Toast_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275repeaterCreate(0, Toast_For_1_Template, 1, 17, "p-toast-item", 0, i05.\u0275\u0275repeaterTrackByIdentity);
        }
        if (rf & 2) {
          i05.\u0275\u0275repeater(ctx.messages);
        }
      },
      dependencies: [ToastItem, SharedModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(Toast, [{
    type: Component5,
    args: [{
      selector: "p-toast",
      standalone: true,
      imports: [ToastItem, SharedModule],
      template: `
        @for (msg of messages; track msg; let i = $index) {
            <p-toast-item
                [message]="msg"
                [index]="i"
                [life]="life()"
                [clearAll]="clearAllTrigger()"
                (onClose)="onMessageClose($event)"
                (onAnimationEnd)="onAnimationEnd()"
                (onAnimationStart)="onAnimationStart()"
                [template]="messageTemplate()"
                [headlessTemplate]="headlessTemplate()"
                [pt]="pt()"
                [unstyled]="unstyled()"
                [motionOptions]="computedMotionOptions()"
                [stackExpanded]="isExpanded()"
                [stackIsHovered]="hovered()"
                [stackIsInteracting]="isInteracting()"
                [stackIndex]="getStackIndex(i)"
                [stackTotal]="stackTotal()"
                [stackOffset]="getStackOffset(i)"
                [stackIsVisible]="isStackVisible(i)"
                [position]="position()"
                (onHeightChange)="onItemHeightChange($event)"
            ></p-toast-item>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [
        ToastStyle,
        {
          provide: TOAST_INSTANCE,
          useExisting: Toast
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Toast
        }
      ],
      host: {
        "[class]": "cx('root')",
        "[style]": "sx('root')",
        "[attr.data-p]": "dataP()",
        "[attr.data-position]": "position()",
        "[attr.data-expanded]": "hostDataExpanded()",
        "[style.--px-gap.px]": "stackGap()",
        "[style.--px-front-toast-height.px]": "frontToastHeight()",
        "[style.--px-raise-factor]": "raiseFactor()",
        "(mouseenter)": "onContainerMouseEnter()",
        "(mouseleave)": "onContainerMouseLeave($event)",
        "(pointerdown)": "onContainerPointerDown($event)",
        "(pointerup)": "onContainerPointerUp()"
      },
      hostDirectives: [Bind2]
    }]
  }], null, {
    key: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "key",
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
    life: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "life",
        required: false
      }]
    }],
    position: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    mode: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "mode",
        required: false
      }]
    }],
    stackGap: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackGap",
        required: false
      }]
    }],
    stackVisibleLimit: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "stackVisibleLimit",
        required: false
      }]
    }],
    preventOpenDuplicates: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "preventOpenDuplicates",
        required: false
      }]
    }],
    preventDuplicates: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "preventDuplicates",
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
    breakpoints: [{
      type: i05.Input,
      args: [{
        isSignal: true,
        alias: "breakpoints",
        required: false
      }]
    }],
    onClose: [{
      type: i05.Output,
      args: ["onClose"]
    }],
    messageTemplate: [{
      type: i05.ContentChild,
      args: ["message", {
        descendants: false,
        isSignal: true
      }]
    }],
    headlessTemplate: [{
      type: i05.ContentChild,
      args: ["headless", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var ToastModule = class ToastModule2 {
  static \u0275fac = function ToastModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i05.\u0275\u0275defineNgModule({
    type: ToastModule2
  });
  static \u0275inj = /* @__PURE__ */ i05.\u0275\u0275defineInjector({
    imports: [Toast, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [Toast, SharedModule],
      exports: [Toast, SharedModule]
    }]
  }], null, null);
})();
export {
  Toast,
  ToastClasses,
  ToastModule,
  ToastStyle
};
//# sourceMappingURL=primeng_toast.i4AGG0LmQQ-dev.js.map

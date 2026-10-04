if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Spinner
} from "@nf-internal/chunk-EYWABEEY";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "@nf-internal/chunk-4VP7SACV";
import {
  C,
  Qt,
  St,
  ce,
  et,
  ot,
  tt,
  z
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-table.mjs
import * as i010 from "@angular/core";
import { ChangeDetectionStrategy, Component as Component10, Directive, ElementRef, HostListener, Injectable, InjectionToken, NgModule, ViewEncapsulation, booleanAttribute, computed, contentChild, effect, inject, input, model, numberAttribute, output, signal, untracked, viewChild } from "@angular/core";

// node_modules/@primeuix/styles/dist/datatable/index.mjs
var style = "\n    .p-datatable {\n        position: relative;\n        display: block;\n    }\n\n    .p-datatable-table {\n        border-spacing: 0;\n        border-collapse: separate;\n        width: 100%;\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container {\n        position: relative;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-thead {\n        inset-block-start: 0;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {\n        position: sticky;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-tfoot {\n        inset-block-end: 0;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable .p-datatable-frozen-column {\n        position: sticky;\n    }\n\n    .p-datatable-scrollable th.p-datatable-frozen-column {\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable td.p-datatable-frozen-column {\n        background: inherit;\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,\n    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {\n        background: dt('datatable.header.cell.background');\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,\n    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {\n        background: dt('datatable.footer.cell.background');\n    }\n\n    .p-datatable-flex-scrollable {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-datatable-flex-scrollable > .p-datatable-table-container {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        height: 100%;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {\n        position: sticky;\n        z-index: 1;\n    }\n\n    .p-datatable-resizable-table > .p-datatable-thead > tr > th,\n    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,\n    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {\n        background-clip: padding-box;\n        position: relative;\n    }\n\n    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {\n        display: none;\n    }\n\n    .p-datatable-column-resizer {\n        display: block;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-end: 0;\n        margin: 0;\n        width: dt('datatable.column.resizer.width');\n        height: 100%;\n        padding: 0;\n        cursor: col-resize;\n        border: 1px solid transparent;\n    }\n\n    .p-datatable-column-header-content {\n        display: flex;\n        align-items: center;\n        gap: dt('datatable.header.cell.gap');\n    }\n\n    .p-datatable-column-resize-indicator {\n        width: dt('datatable.resize.indicator.width');\n        position: absolute;\n        z-index: 10;\n        display: none;\n        background: dt('datatable.resize.indicator.color');\n    }\n\n    .p-datatable-row-reorder-indicator-up,\n    .p-datatable-row-reorder-indicator-down {\n        position: absolute;\n        display: none;\n    }\n\n    .p-datatable-reorderable-column,\n    .p-datatable-reorderable-row-handle {\n        cursor: move;\n    }\n\n    .p-datatable-mask {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n    }\n\n    .p-datatable-inline-filter {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        gap: dt('datatable.filter.inline.gap');\n    }\n\n    .p-datatable-inline-filter .p-datatable-filter-element-container {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datatable-filter-overlay {\n        background: dt('datatable.filter.overlay.select.background');\n        color: dt('datatable.filter.overlay.select.color');\n        border: 1px solid dt('datatable.filter.overlay.select.border.color');\n        border-radius: dt('datatable.filter.overlay.select.border.radius');\n        box-shadow: dt('datatable.filter.overlay.select.shadow');\n        min-width: 12.5rem;\n    }\n\n    .p-datatable-filter-constraint-list {\n        margin: 0;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        padding: dt('datatable.filter.constraint.list.padding');\n        gap: dt('datatable.filter.constraint.list.gap');\n    }\n\n    .p-datatable-filter-constraint {\n        padding: dt('datatable.filter.constraint.padding');\n        color: dt('datatable.filter.constraint.color');\n        border-radius: dt('datatable.filter.constraint.border.radius');\n        cursor: pointer;\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-filter-constraint-selected {\n        background: dt('datatable.filter.constraint.selected.background');\n        color: dt('datatable.filter.constraint.selected.color');\n    }\n\n    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {\n        background: dt('datatable.filter.constraint.focus.background');\n        color: dt('datatable.filter.constraint.focus.color');\n    }\n\n    .p-datatable-filter-constraint:focus-visible {\n        outline: 0 none;\n        background: dt('datatable.filter.constraint.focus.background');\n        color: dt('datatable.filter.constraint.focus.color');\n    }\n\n    .p-datatable-filter-constraint-selected:focus-visible {\n        outline: 0 none;\n        background: dt('datatable.filter.constraint.selected.focus.background');\n        color: dt('datatable.filter.constraint.selected.focus.color');\n    }\n\n    .p-datatable-filter-constraint-separator {\n        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');\n    }\n\n    .p-datatable-popover-filter {\n        display: inline-flex;\n        margin-inline-start: auto;\n    }\n\n    .p-datatable-filter-overlay-popover {\n        background: dt('datatable.filter.overlay.popover.background');\n        color: dt('datatable.filter.overlay.popover.color');\n        border: 1px solid dt('datatable.filter.overlay.popover.border.color');\n        border-radius: dt('datatable.filter.overlay.popover.border.radius');\n        box-shadow: dt('datatable.filter.overlay.popover.shadow');\n        min-width: 12.5rem;\n        padding: dt('datatable.filter.overlay.popover.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-operator-dropdown {\n        width: 100%;\n    }\n\n    .p-datatable-filter-rule-list,\n    .p-datatable-filter-rule {\n        display: flex;\n        flex-direction: column;\n        gap: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-rule {\n        border-block-end: 1px solid dt('datatable.filter.rule.border.color');\n        padding-bottom: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-rule:last-child {\n        border-block-end: 0 none;\n        padding-bottom: 0;\n    }\n\n    .p-datatable-filter-add-rule-button {\n        width: 100%;\n    }\n\n    .p-datatable-filter-remove-rule-button {\n        width: 100%;\n    }\n\n    .p-datatable-filter-buttonbar {\n        padding: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable-virtualscroller-spacer {\n        display: flex;\n    }\n\n    .p-datatable .p-virtualscroller .p-virtualscroller-loading {\n        transform: none !important;\n        min-height: 0;\n        position: sticky;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n    }\n\n    .p-datatable-paginator-top {\n        border-color: dt('datatable.paginator.top.border.color');\n        border-style: solid;\n        border-width: dt('datatable.paginator.top.border.width');\n    }\n\n    .p-datatable-paginator-bottom {\n        border-color: dt('datatable.paginator.bottom.border.color');\n        border-style: solid;\n        border-width: dt('datatable.paginator.bottom.border.width');\n    }\n\n    .p-datatable-header {\n        background: dt('datatable.header.background');\n        color: dt('datatable.header.color');\n        border-color: dt('datatable.header.border.color');\n        border-style: solid;\n        border-width: dt('datatable.header.border.width');\n        padding: dt('datatable.header.padding');\n    }\n\n    .p-datatable-footer {\n        background: dt('datatable.footer.background');\n        color: dt('datatable.footer.color');\n        border-color: dt('datatable.footer.border.color');\n        border-style: solid;\n        border-width: dt('datatable.footer.border.width');\n        padding: dt('datatable.footer.padding');\n    }\n\n    .p-datatable-header-cell {\n        padding: dt('datatable.header.cell.padding');\n        background: dt('datatable.header.cell.background');\n        border-color: dt('datatable.header.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        color: dt('datatable.header.cell.color');\n        font-weight: normal;\n        text-align: start;\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-column-title {\n        font-weight: dt('datatable.column.title.font.weight');\n        font-size: dt('datatable.column.title.font.size');\n    }\n\n    .p-datatable-tbody > tr {\n        outline-color: transparent;\n        background: dt('datatable.row.background');\n        color: dt('datatable.row.color');\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-tbody > tr > td {\n        text-align: start;\n        border-color: dt('datatable.body.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        padding: dt('datatable.body.cell.padding');\n        font-weight: dt('datatable.body.cell.font.weight');\n        font-size: dt('datatable.body.cell.font.size');\n    }\n\n    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n        background: dt('datatable.row.hover.background');\n        color: dt('datatable.row.hover.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected {\n        background: dt('datatable.row.selected.background');\n        color: dt('datatable.row.selected.color');\n    }\n\n    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {\n        border-block-end-color: dt('datatable.body.cell.selected.border.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected > td {\n        border-block-end-color: dt('datatable.body.cell.selected.border.color');\n    }\n\n    .p-datatable-tbody > tr:focus-visible,\n    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {\n        box-shadow: dt('datatable.row.focus.ring.shadow');\n        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');\n        outline-offset: dt('datatable.row.focus.ring.offset');\n    }\n\n    .p-datatable-tfoot > tr > td {\n        text-align: start;\n        padding: dt('datatable.footer.cell.padding');\n        border-color: dt('datatable.footer.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        color: dt('datatable.footer.cell.color');\n        background: dt('datatable.footer.cell.background');\n    }\n\n    .p-datatable-column-footer {\n        font-weight: dt('datatable.column.footer.font.weight');\n        font-size: dt('datatable.column.footer.font.size');\n    }\n\n    .p-datatable-sortable-column {\n        cursor: pointer;\n        user-select: none;\n        outline-color: transparent;\n    }\n\n    .p-datatable-column-title,\n    .p-datatable-sort-icon,\n    .p-datatable-sort-badge {\n        vertical-align: middle;\n    }\n\n    .p-datatable-sort-icon {\n        color: dt('datatable.sort.icon.color');\n        font-size: dt('datatable.sort.icon.size');\n        width: dt('datatable.sort.icon.size');\n        height: dt('datatable.sort.icon.size');\n        transition: color dt('datatable.transition.duration');\n    }\n\n    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {\n        background: dt('datatable.header.cell.hover.background');\n        color: dt('datatable.header.cell.hover.color');\n    }\n\n    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {\n        color: dt('datatable.sort.icon.hover.color');\n    }\n\n    .p-datatable-column-sorted {\n        background: dt('datatable.header.cell.selected.background');\n        color: dt('datatable.header.cell.selected.color');\n    }\n\n    .p-datatable-column-sorted .p-datatable-sort-icon {\n        color: dt('datatable.header.cell.selected.color');\n    }\n\n    .p-datatable-sortable-column:focus-visible {\n        box-shadow: dt('datatable.header.cell.focus.ring.shadow');\n        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');\n        outline-offset: dt('datatable.header.cell.focus.ring.offset');\n    }\n\n    .p-datatable-hoverable .p-datatable-selectable-row {\n        cursor: pointer;\n    }\n\n    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');\n    }\n\n    .p-datatable-loading-icon {\n        font-size: dt('datatable.loading.icon.size');\n        width: dt('datatable.loading.icon.size');\n        height: dt('datatable.loading.icon.size');\n    }\n\n    .p-datatable-gridlines .p-datatable-header {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-footer {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-paginator-top {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-paginator-bottom {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-thead > tr > th {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {\n        border-width: 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-thead > tr:not(:first-child) > th {\n        border-block-start-width: 0;\n    }\n\n    .p-datatable-gridlines .p-datatable-tfoot > tr:not(:first-child) > td {\n        border-block-start-width: 0;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr > td {\n        border-width: 1px 0 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {\n        border-width: 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tfoot > tr > td {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {\n        border-width: 1px 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {\n        border-width: 0 0 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {\n        border-width: 0 0 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {\n        border-width: 0 0 0 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {\n        border-width: 0 1px 0 1px;\n    }\n\n    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {\n        background: dt('datatable.row.striped.background');\n    }\n\n    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {\n        background: dt('datatable.row.selected.background');\n        color: dt('datatable.row.selected.color');\n    }\n\n    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n        background: dt('datatable.row.hover.background');\n        color: dt('datatable.row.hover.color');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-header {\n        padding: dt('datatable.header.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n        padding: dt('datatable.header.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n        padding: dt('datatable.body.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n        padding: dt('datatable.footer.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-footer {\n        padding: dt('datatable.footer.sm.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-header {\n        padding: dt('datatable.header.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n        padding: dt('datatable.header.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {\n        padding: dt('datatable.body.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {\n        padding: dt('datatable.footer.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-footer {\n        padding: dt('datatable.footer.lg.padding');\n    }\n\n    .p-datatable-row-toggle-button {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datatable.row.toggle.button.size');\n        height: dt('datatable.row.toggle.button.size');\n        color: dt('datatable.row.toggle.button.color');\n        border: 0 none;\n        background: transparent;\n        cursor: pointer;\n        border-radius: dt('datatable.row.toggle.button.border.radius');\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n        outline-color: transparent;\n        user-select: none;\n    }\n\n    .p-datatable-row-toggle-button:enabled:hover {\n        color: dt('datatable.row.toggle.button.hover.color');\n        background: dt('datatable.row.toggle.button.hover.background');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {\n        background: dt('datatable.row.toggle.button.selected.hover.background');\n        color: dt('datatable.row.toggle.button.selected.hover.color');\n    }\n\n    .p-datatable-row-toggle-button:focus-visible {\n        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');\n        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');\n        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');\n    }\n\n    .p-datatable-row-toggle-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-table.mjs
import { BaseStyle } from "primeng/base";
import { Subject } from "rxjs";
import { NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
import * as i2 from "@angular/forms";
import { FormsModule } from "@angular/forms";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-arrow-down.mjs
import * as i0 from "@angular/core";
import { Component } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/arrow-down.mjs
var o = { name: "arrow-down", meta: { tags: ["arrow-down", "download", "decrease", "down", "lower"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 2.25C10.4142 2.25003 10.75 2.58581 10.75 3V15.1895L15.4698 10.4697C15.7627 10.1769 16.2374 10.1769 16.5303 10.4697C16.8232 10.7626 16.8232 11.2374 16.5303 11.5303L10.5303 17.5303C10.2374 17.8232 9.76264 17.8232 9.46974 17.5303L3.46973 11.5303C3.17684 11.2374 3.17684 10.7626 3.46973 10.4697C3.76263 10.1769 4.2374 10.1769 4.53028 10.4697L9.25002 15.1895V3C9.25002 2.58579 9.5858 2.25 10 2.25Z", fill: "currentColor", key: "1tm2qt" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-arrow-down.mjs
var ArrowDown = class _ArrowDown extends CoreIcon {
  constructor() {
    super();
    this._icon = o;
  }
  static \u0275fac = function ArrowDown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArrowDown)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ArrowDown_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i0.\u0275\u0275nextContext().$implicit;
        i0.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowDown_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, ArrowDown_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ArrowDown_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ArrowDown_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ArrowDown_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ArrowDown_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ArrowDown_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ArrowDown_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i0.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _ArrowDown,
      selectors: [["svg", "data-p-icon", "arrow-down"]],
      features: [i0.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ArrowDown_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275repeaterCreate(0, ArrowDown_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ArrowDown, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="arrow-down"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-arrow-up.mjs
import * as i02 from "@angular/core";
import { Component as Component2 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/arrow-up.mjs
var e = { name: "arrow-up", meta: { tags: ["arrow-up", "upload", "increase", "up", "elevate"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M9.52638 2.41791C9.82095 2.17769 10.2557 2.19512 10.5303 2.46967L16.5303 8.46969C16.8232 8.76256 16.8231 9.23734 16.5303 9.53024C16.2374 9.82314 15.7627 9.82314 15.4698 9.53024L10.75 4.8105V17C10.75 17.4142 10.4142 17.75 10 17.75C9.5858 17.75 9.25002 17.4142 9.25002 17V4.8105L4.53027 9.53024C4.23737 9.82314 3.76261 9.82314 3.46972 9.53024C3.17685 9.23735 3.17683 8.76258 3.46972 8.46969L9.46974 2.46967L9.52638 2.41791Z", fill: "currentColor", key: "s4tw6r" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-arrow-up.mjs
var ArrowUp = class _ArrowUp extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static \u0275fac = function ArrowUp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ArrowUp)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function ArrowUp_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275namespaceSVG();
        i02.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i02.\u0275\u0275nextContext().$implicit;
        i02.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function ArrowUp_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275conditionalCreate(0, ArrowUp_For_1_Case_0_Template, 1, 9, ":svg:path")(1, ArrowUp_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, ArrowUp_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, ArrowUp_For_1_Case_3_Template, 1, 7, ":svg:line")(4, ArrowUp_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, ArrowUp_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, ArrowUp_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i02.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i02.\u0275\u0275defineComponent({
      type: _ArrowUp,
      selectors: [["svg", "data-p-icon", "arrow-up"]],
      features: [i02.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function ArrowUp_Template(rf, ctx) {
        if (rf & 1) {
          i02.\u0275\u0275repeaterCreate(0, ArrowUp_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(ArrowUp, [{
    type: Component2,
    args: [{
      selector: 'svg[data-p-icon="arrow-up"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
import { FilterMatchMode, FilterOperator, FilterService, OverlayService, SharedModule, TranslationKeys } from "primeng/api";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1$3 from "primeng/bind";
import { Bind as Bind2, BindModule } from "primeng/bind";
import { ConnectedOverlayScrollHandler, DomHandler } from "primeng/dom";
import * as i2$1 from "primeng/paginator";
import { PaginatorModule } from "primeng/paginator";
import * as i3$2 from "primeng/scroller";
import { ScrollerModule } from "primeng/scroller";
import { ObjectUtils, UniqueComponentId, ZIndexUtils } from "primeng/utils";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import * as i1$2 from "primeng/badge";
import { BadgeModule } from "primeng/badge";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-alt.mjs
import * as i03 from "@angular/core";
import { Component as Component3 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/sort-alt.mjs
var C2 = { name: "sort-alt", meta: { tags: ["sort-alt"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6.0254 2.25098C6.03225 2.25121 6.03907 2.25153 6.04591 2.25195C6.08456 2.25429 6.12233 2.2596 6.15919 2.26758C6.19247 2.2748 6.22461 2.28607 6.25685 2.29785C6.26933 2.30242 6.28277 2.30437 6.29493 2.30957C6.31402 2.31772 6.33113 2.33004 6.34962 2.33984C6.37342 2.35248 6.39774 2.36387 6.41993 2.37891C6.45876 2.40523 6.49589 2.43533 6.53028 2.46973L9.03029 4.96973C9.32314 5.26261 9.32314 5.73739 9.03029 6.03027C8.7374 6.32316 8.26264 6.32314 7.96974 6.03027L6.75001 4.81055V17C6.75001 17.4142 6.4142 17.75 6.00001 17.75C5.5858 17.75 5.25001 17.4142 5.25001 17V4.81055L4.03028 6.03027C3.7374 6.32316 3.26263 6.32314 2.96973 6.03027C2.67684 5.73738 2.67684 5.26262 2.96973 4.96973L5.46974 2.46973L5.52638 2.41797C5.53657 2.40965 5.54808 2.40321 5.5586 2.39551C5.57414 2.38414 5.59004 2.37345 5.60645 2.36328C5.63035 2.34849 5.65462 2.3351 5.6797 2.32324C5.69787 2.31463 5.71642 2.30697 5.73536 2.2998C5.76294 2.28942 5.79095 2.28144 5.81935 2.27441C5.83941 2.26944 5.85923 2.26309 5.87989 2.25977C5.89095 2.25799 5.90199 2.25616 5.9131 2.25488C5.94159 2.2516 5.97064 2.25 6.00001 2.25C6.00851 2.25 6.01697 2.2507 6.0254 2.25098ZM14 2.25C14.4142 2.25003 14.75 2.58581 14.75 3V15.1895L15.9698 13.9697C16.2627 13.6769 16.7374 13.6768 17.0303 13.9697C17.3232 14.2626 17.3232 14.7374 17.0303 15.0303L14.5303 17.5303C14.4984 17.5622 14.4635 17.5893 14.4278 17.6143C14.3836 17.6451 14.3365 17.6715 14.2862 17.6924C14.2541 17.7056 14.2208 17.7141 14.1875 17.7227C14.1744 17.7261 14.1619 17.7317 14.1485 17.7344C14.1426 17.7356 14.1367 17.7363 14.1309 17.7373C14.0883 17.7448 14.0447 17.75 14 17.75L13.9229 17.7461C13.904 17.7442 13.8856 17.7406 13.8672 17.7373C13.8617 17.7363 13.8561 17.7355 13.8506 17.7344C13.8372 17.7317 13.8247 17.7261 13.8115 17.7227C13.7783 17.714 13.745 17.7057 13.7129 17.6924C13.6838 17.6803 13.6571 17.664 13.6299 17.6484C13.5732 17.616 13.5181 17.5787 13.4698 17.5303L10.9697 15.0303C10.6769 14.7374 10.6769 14.2626 10.9697 13.9697C11.2626 13.6769 11.7374 13.6768 12.0303 13.9697L13.25 15.1895V3C13.25 2.58579 13.5858 2.25 14 2.25Z", fill: "currentColor", key: "eomyyr" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-alt.mjs
var SortAlt = class _SortAlt extends CoreIcon {
  constructor() {
    super();
    this._icon = C2;
  }
  static \u0275fac = function SortAlt_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortAlt)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function SortAlt_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275namespaceSVG();
        i03.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i03.\u0275\u0275nextContext().$implicit;
        i03.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAlt_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275conditionalCreate(0, SortAlt_For_1_Case_0_Template, 1, 9, ":svg:path")(1, SortAlt_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, SortAlt_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, SortAlt_For_1_Case_3_Template, 1, 7, ":svg:line")(4, SortAlt_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, SortAlt_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, SortAlt_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i03.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i03.\u0275\u0275defineComponent({
      type: _SortAlt,
      selectors: [["svg", "data-p-icon", "sort-alt"]],
      features: [i03.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function SortAlt_Template(rf, ctx) {
        if (rf & 1) {
          i03.\u0275\u0275repeaterCreate(0, SortAlt_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(SortAlt, [{
    type: Component3,
    args: [{
      selector: 'svg[data-p-icon="sort-alt"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-amount-down.mjs
import * as i04 from "@angular/core";
import { Component as Component4 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/sort-amount-down.mjs
var C3 = { name: "sort-amount-down", meta: { tags: ["sort-amount-down"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6 2.25C6.41419 2.25003 6.75 2.58581 6.75 3V15.1895L7.96973 13.9697C8.26263 13.6769 8.73739 13.6768 9.03028 13.9697C9.32313 14.2626 9.32313 14.7374 9.03028 15.0303L6.53028 17.5303C6.4984 17.5622 6.46345 17.5893 6.42774 17.6143C6.38361 17.6451 6.3365 17.6715 6.28614 17.6924C6.25408 17.7056 6.22077 17.7141 6.1875 17.7227C6.17438 17.7261 6.16183 17.7317 6.14844 17.7344C6.14261 17.7356 6.13672 17.7363 6.13086 17.7373C6.0883 17.7448 6.04472 17.75 6 17.75L5.92286 17.7461C5.90403 17.7442 5.88558 17.7406 5.86719 17.7373C5.86166 17.7363 5.8561 17.7355 5.85059 17.7344C5.8372 17.7317 5.82465 17.7261 5.81153 17.7227C5.77828 17.714 5.74493 17.7057 5.71289 17.6924C5.68375 17.6803 5.65704 17.664 5.62989 17.6484C5.5732 17.616 5.51813 17.5787 5.46973 17.5303L2.96973 15.0303C2.67684 14.7374 2.67684 14.2626 2.96973 13.9697C3.26263 13.6769 3.73739 13.6768 4.03028 13.9697L5.25 15.1895V3C5.25 2.58579 5.58579 2.25 6 2.25ZM11 11.25C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75H10.5C10.0858 12.75 9.75 12.4142 9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25H11ZM13 8.25C13.4142 8.25003 13.75 8.58581 13.75 9C13.75 9.4142 13.4142 9.74997 13 9.75H10.5C10.0858 9.75 9.75 9.41421 9.75 9C9.75 8.58579 10.0858 8.25 10.5 8.25H13ZM15 5.25C15.4142 5.25003 15.75 5.58581 15.75 6C15.75 6.4142 15.4142 6.74997 15 6.75H10.5C10.0858 6.75 9.75 6.41421 9.75 6C9.75 5.58579 10.0858 5.25 10.5 5.25H15ZM17 2.25C17.4142 2.25003 17.75 2.58581 17.75 3C17.75 3.41419 17.4142 3.74997 17 3.75H10.5C10.0858 3.75 9.75 3.41421 9.75 3C9.75 2.58579 10.0858 2.25 10.5 2.25H17Z", fill: "currentColor", key: "sij9t" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-amount-down.mjs
var SortAmountDown = class _SortAmountDown extends CoreIcon {
  constructor() {
    super();
    this._icon = C3;
  }
  static \u0275fac = function SortAmountDown_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortAmountDown)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function SortAmountDown_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275namespaceSVG();
        i04.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i04.\u0275\u0275nextContext().$implicit;
        i04.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountDown_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i04.\u0275\u0275conditionalCreate(0, SortAmountDown_For_1_Case_0_Template, 1, 9, ":svg:path")(1, SortAmountDown_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, SortAmountDown_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, SortAmountDown_For_1_Case_3_Template, 1, 7, ":svg:line")(4, SortAmountDown_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, SortAmountDown_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, SortAmountDown_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i04.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i04.\u0275\u0275defineComponent({
      type: _SortAmountDown,
      selectors: [["svg", "data-p-icon", "sort-amount-down"]],
      features: [i04.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function SortAmountDown_Template(rf, ctx) {
        if (rf & 1) {
          i04.\u0275\u0275repeaterCreate(0, SortAmountDown_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(SortAmountDown, [{
    type: Component4,
    args: [{
      selector: 'svg[data-p-icon="sort-amount-down"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-amount-up-alt.mjs
import * as i05 from "@angular/core";
import { Component as Component5 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/sort-amount-up-alt.mjs
var C4 = { name: "sort-amount-up-alt", meta: { tags: ["sort-amount-up-alt"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6.02539 2.25098C6.03224 2.25121 6.03906 2.25153 6.0459 2.25195C6.08456 2.25429 6.12233 2.2596 6.15918 2.26758C6.19246 2.2748 6.22461 2.28607 6.25684 2.29785C6.26932 2.30242 6.28276 2.30437 6.29493 2.30957C6.31401 2.31772 6.33112 2.33004 6.34961 2.33984C6.37341 2.35248 6.39773 2.36387 6.41993 2.37891C6.45875 2.40523 6.49589 2.43533 6.53028 2.46973L9.03028 4.96973C9.32313 5.26261 9.32313 5.73739 9.03028 6.03027C8.73739 6.32316 8.26263 6.32314 7.96973 6.03027L6.75 4.81055V17C6.75 17.4142 6.41419 17.75 6 17.75C5.58579 17.75 5.25 17.4142 5.25 17V4.81055L4.03028 6.03027C3.73739 6.32316 3.26263 6.32314 2.96973 6.03027C2.67684 5.73738 2.67684 5.26262 2.96973 4.96973L5.46973 2.46973L5.52637 2.41797C5.53657 2.40965 5.54808 2.40321 5.5586 2.39551C5.57414 2.38414 5.59004 2.37345 5.60645 2.36328C5.63035 2.34849 5.65462 2.3351 5.67969 2.32324C5.69787 2.31463 5.71641 2.30697 5.73536 2.2998C5.76293 2.28942 5.79094 2.28144 5.81934 2.27441C5.8394 2.26944 5.85922 2.26309 5.87989 2.25977C5.89094 2.25799 5.90198 2.25616 5.91309 2.25488C5.94158 2.2516 5.97063 2.25 6 2.25C6.00851 2.25 6.01696 2.2507 6.02539 2.25098ZM17 16.25C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H10.5C10.0858 17.75 9.75 17.4142 9.75 17C9.75 16.5858 10.0858 16.25 10.5 16.25H17ZM15 13.25C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H10.5C10.0858 14.75 9.75 14.4142 9.75 14C9.75 13.5858 10.0858 13.25 10.5 13.25H15ZM13 10.25C13.4142 10.25 13.75 10.5858 13.75 11C13.75 11.4142 13.4142 11.75 13 11.75H10.5C10.0858 11.75 9.75 11.4142 9.75 11C9.75 10.5858 10.0858 10.25 10.5 10.25H13ZM11 7.25C11.4142 7.25003 11.75 7.58581 11.75 8C11.75 8.4142 11.4142 8.74997 11 8.75H10.5C10.0858 8.75 9.75 8.41421 9.75 8C9.75 7.58579 10.0858 7.25 10.5 7.25H11Z", fill: "currentColor", key: "5lgl16" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-sort-amount-up-alt.mjs
var SortAmountUpAlt = class _SortAmountUpAlt extends CoreIcon {
  constructor() {
    super();
    this._icon = C4;
  }
  static \u0275fac = function SortAmountUpAlt_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortAmountUpAlt)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function SortAmountUpAlt_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275namespaceSVG();
        i05.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i05.\u0275\u0275nextContext().$implicit;
        i05.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function SortAmountUpAlt_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i05.\u0275\u0275conditionalCreate(0, SortAmountUpAlt_For_1_Case_0_Template, 1, 9, ":svg:path")(1, SortAmountUpAlt_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, SortAmountUpAlt_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, SortAmountUpAlt_For_1_Case_3_Template, 1, 7, ":svg:line")(4, SortAmountUpAlt_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, SortAmountUpAlt_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, SortAmountUpAlt_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i05.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i05.\u0275\u0275defineComponent({
      type: _SortAmountUpAlt,
      selectors: [["svg", "data-p-icon", "sort-amount-up-alt"]],
      features: [i05.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function SortAmountUpAlt_Template(rf, ctx) {
        if (rf & 1) {
          i05.\u0275\u0275repeaterCreate(0, SortAmountUpAlt_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i05.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(SortAmountUpAlt, [{
    type: Component5,
    args: [{
      selector: 'svg[data-p-icon="sort-amount-up-alt"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
import * as i1$1 from "primeng/radiobutton";
import { RadioButtonModule } from "primeng/radiobutton";
import * as i1 from "primeng/checkbox";
import { CheckboxModule } from "primeng/checkbox";

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-filter.mjs
import * as i06 from "@angular/core";
import { Component as Component6 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/filter.mjs
var e2 = { name: "filter", meta: { tags: ["filter", "refine", "criteria", "sort", "selection"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M17.5 1.75C17.7826 1.75 18.0412 1.90903 18.1689 2.16113C18.2966 2.41322 18.2716 2.71547 18.1045 2.94336L12.75 10.2441V18C12.75 18.4142 12.4142 18.75 12 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18V10.2441L1.89551 2.94336C1.72839 2.71547 1.70335 2.41322 1.83105 2.16113C1.95881 1.90903 2.21737 1.75 2.5 1.75H17.5ZM8.60449 9.55664C8.69883 9.68528 8.75 9.84048 8.75 10V17.25H11.25V10C11.25 9.84048 11.3012 9.68528 11.3955 9.55664L16.0205 3.25H3.97949L8.60449 9.55664Z", fill: "currentColor", key: "6kqlg6" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-filter.mjs
var Filter = class _Filter extends CoreIcon {
  constructor() {
    super();
    this._icon = e2;
  }
  static \u0275fac = function Filter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Filter)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Filter_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275namespaceSVG();
        i06.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i06.\u0275\u0275nextContext().$implicit;
        i06.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Filter_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i06.\u0275\u0275conditionalCreate(0, Filter_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Filter_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Filter_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Filter_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Filter_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Filter_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Filter_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i06.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i06.\u0275\u0275defineComponent({
      type: _Filter,
      selectors: [["svg", "data-p-icon", "filter"]],
      features: [i06.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Filter_Template(rf, ctx) {
        if (rf & 1) {
          i06.\u0275\u0275repeaterCreate(0, Filter_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i06.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(Filter, [{
    type: Component6,
    args: [{
      selector: 'svg[data-p-icon="filter"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-filter-fill.mjs
import * as i07 from "@angular/core";
import { Component as Component7 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/filter-fill.mjs
var e3 = { name: "filter-fill", meta: { tags: ["filter-fill", "selection", "full-filter", "complete-criteria"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M17.5002 1.5C17.7827 1.50007 18.0414 1.65908 18.1691 1.91113C18.2968 2.16317 18.2717 2.46551 18.1047 2.69336L12.7502 9.99414V17.75C12.7502 18.1642 12.4143 18.4999 12.0002 18.5H8.00018C7.58597 18.5 7.25018 18.1642 7.25018 17.75V9.99414L1.89569 2.69336C1.72858 2.46547 1.70354 2.16322 1.83124 1.91113C1.959 1.65907 2.21758 1.5 2.50018 1.5H17.5002Z", fill: "currentColor", key: "ckg1lv" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-filter-fill.mjs
var FilterFill = class _FilterFill extends CoreIcon {
  constructor() {
    super();
    this._icon = e3;
  }
  static \u0275fac = function FilterFill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterFill)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function FilterFill_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275namespaceSVG();
        i07.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i07.\u0275\u0275nextContext().$implicit;
        i07.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function FilterFill_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275conditionalCreate(0, FilterFill_For_1_Case_0_Template, 1, 9, ":svg:path")(1, FilterFill_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, FilterFill_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, FilterFill_For_1_Case_3_Template, 1, 7, ":svg:line")(4, FilterFill_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, FilterFill_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, FilterFill_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i07.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i07.\u0275\u0275defineComponent({
      type: _FilterFill,
      selectors: [["svg", "data-p-icon", "filter-fill"]],
      features: [i07.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function FilterFill_Template(rf, ctx) {
        if (rf & 1) {
          i07.\u0275\u0275repeaterCreate(0, FilterFill_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i07.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(FilterFill, [{
    type: Component7,
    args: [{
      selector: 'svg[data-p-icon="filter-fill"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-plus.mjs
import * as i08 from "@angular/core";
import { Component as Component8 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/plus.mjs
var e4 = { name: "plus", meta: { tags: ["plus", "add", "increase", "more", "extra"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z", fill: "currentColor", key: "uygcm6" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-plus.mjs
var Plus = class _Plus extends CoreIcon {
  constructor() {
    super();
    this._icon = e4;
  }
  static \u0275fac = function Plus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Plus)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Plus_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275namespaceSVG();
        i08.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i08.\u0275\u0275nextContext().$implicit;
        i08.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Plus_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275conditionalCreate(0, Plus_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Plus_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Plus_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Plus_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Plus_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Plus_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Plus_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i08.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i08.\u0275\u0275defineComponent({
      type: _Plus,
      selectors: [["svg", "data-p-icon", "plus"]],
      features: [i08.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Plus_Template(rf, ctx) {
        if (rf & 1) {
          i08.\u0275\u0275repeaterCreate(0, Plus_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i08.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(Plus, [{
    type: Component8,
    args: [{
      selector: 'svg[data-p-icon="plus"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-trash.mjs
import * as i09 from "@angular/core";
import { Component as Component9 } from "@angular/core";

// node_modules/@primeicons/core/dist/esm/icons/trash.mjs
var C5 = { name: "trash", meta: { tags: ["trash", "delete", "remove", "garbage", "waste"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M12.7803 1.24023C14.0509 1.24046 15.3104 2.13265 15.3105 3.5V5.01074C15.3105 5.07641 15.2991 5.13949 15.2832 5.2002H18C18.4142 5.2002 18.75 5.53598 18.75 5.9502C18.7499 6.3643 18.4141 6.7002 18 6.7002H16.9707V16.4902C16.9706 17.8447 15.7145 18.7498 14.4404 18.75H5.55078C4.28003 18.75 3.02066 17.8578 3.02051 16.4902V6.7002H2C1.58587 6.7002 1.25013 6.3643 1.25 5.9502C1.25 5.53598 1.58579 5.2002 2 5.2002H4.7168C4.70088 5.13949 4.69049 5.07641 4.69043 5.01074V3.5C4.69058 2.14539 5.94651 1.24023 7.2207 1.24023H12.7803ZM4.52051 16.4902C4.52069 16.8026 4.86179 17.25 5.55078 17.25H14.4404C15.1256 17.2498 15.4705 16.7954 15.4707 16.4902V6.7002H4.52051V16.4902ZM8.21973 8.96973C8.63386 8.96973 8.96959 9.30563 8.96973 9.71973V14.2393C8.96973 14.6535 8.63394 14.9893 8.21973 14.9893C7.80564 14.9891 7.46973 14.6534 7.46973 14.2393V9.71973C7.46986 9.30572 7.80572 8.96987 8.21973 8.96973ZM11.7803 8.96973C12.1943 8.96987 12.5301 9.30572 12.5303 9.71973V14.2393C12.5303 14.6534 12.1944 14.9891 11.7803 14.9893C11.3661 14.9893 11.0303 14.6535 11.0303 14.2393V9.71973C11.0304 9.30563 11.3661 8.96973 11.7803 8.96973ZM7.2207 2.74023C6.53516 2.74023 6.19061 3.19475 6.19043 3.5V5.01074C6.19037 5.07641 6.179 5.13949 6.16309 5.2002H13.8369C13.821 5.13949 13.8106 5.07641 13.8105 5.01074V3.5C13.8104 3.18775 13.4689 2.74045 12.7803 2.74023H7.2207Z", fill: "currentColor", key: "sq6mcj" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-trash.mjs
var Trash = class _Trash extends CoreIcon {
  constructor() {
    super();
    this._icon = C5;
  }
  static \u0275fac = function Trash_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Trash)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
    function Trash_For_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "path");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "circle");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "rect");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "line");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_4_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "polyline");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_5_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "polygon");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Case_6_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275namespaceSVG();
        i09.\u0275\u0275domElement(0, "ellipse");
      }
      if (rf & 2) {
        const node_r1 = i09.\u0275\u0275nextContext().$implicit;
        i09.\u0275\u0275attribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
      }
    }
    function Trash_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i09.\u0275\u0275conditionalCreate(0, Trash_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Trash_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Trash_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Trash_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Trash_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Trash_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Trash_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
      }
      if (rf & 2) {
        let tmp_10_0 = void 0;
        const node_r1 = ctx.$implicit;
        i09.\u0275\u0275conditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
      }
    }
    return /* @__PURE__ */ i09.\u0275\u0275defineComponent({
      type: _Trash,
      selectors: [["svg", "data-p-icon", "trash"]],
      features: [i09.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 0,
      template: function Trash_Template(rf, ctx) {
        if (rf & 1) {
          i09.\u0275\u0275repeaterCreate(0, Trash_For_1_Template, 7, 1, null, null, _forTrack0);
        }
        if (rf & 2) {
          i09.\u0275\u0275repeater(ctx.iconNodes());
        }
      },
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(Trash, [{
    type: Component9,
    args: [{
      selector: 'svg[data-p-icon="trash"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
import * as i3 from "primeng/button";
import { ButtonModule } from "primeng/button";
import * as i6 from "primeng/datepicker";
import { DatePickerModule } from "primeng/datepicker";
import * as i4$1 from "primeng/inputnumber";
import { InputNumberModule } from "primeng/inputnumber";
import * as i3$1 from "primeng/inputtext";
import { InputTextModule } from "primeng/inputtext";
import * as i5 from "primeng/motion";
import { MotionModule } from "primeng/motion";
import * as i4 from "primeng/select";
import { SelectModule } from "primeng/select";
export * from "primeng/types/table";
var style$1 = `
${style}

/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 2;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 2;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody + .p-datatable-frozen-tbody {
    z-index: 1;
}

.p-datatable-frozen-column {
    z-index: 1;
}

.p-datatable-mask.p-overlay-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.p-datatable-filter-overlay {
    position: absolute;
    background: dt('datatable.filter.overlay.select.background');
    color: dt('datatable.filter.overlay.select.color');
    border: 1px solid dt('datatable.filter.overlay.select.border.color');
    border-radius: dt('datatable.filter.overlay.select.border.radius');
    box-shadow: dt('datatable.filter.overlay.select.shadow');
    min-width: 12.5rem;
}

.p-datatable-filter-rule {
    border-bottom: 1px solid dt('datatable.filter.rule.border.color');
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-add-rule-button,
.p-datatable-filter-remove-rule-button {
    width: 100%;
}

.p-datatable-filter-remove-button {
    width: 100%;
}

.p-datatable-thead > tr > th {
    padding: dt('datatable.header.cell.padding');
    background: dt('datatable.header.cell.background');
    border-color: dt('datatable.header.cell.border.color');
    border-style: solid;
    border-width: 0 0 1px 0;
    color: dt('datatable.header.cell.color');
    font-weight: dt('datatable.column.title.font.weight');
    text-align: start;
    transition:
        background dt('datatable.transition.duration'),
        color dt('datatable.transition.duration'),
        border-color dt('datatable.transition.duration'),
        outline-color dt('datatable.transition.duration'),
        box-shadow dt('datatable.transition.duration');
}

.p-datatable-thead > tr > th p-column-filter,
.p-datatable-thead > tr > th p-columnfilter {
    font-weight: normal;
}

.p-datatable-thead > tr > th,
.p-datatable-sort-icon,
.p-datatable-sort-badge {
    vertical-align: middle;
}

.p-datatable-thead > tr > th.p-datatable-column-sorted {
    background: dt('datatable.header.cell.selected.background');
    color: dt('datatable.header.cell.selected.color');
}

.p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
    color: dt('datatable.header.cell.selected.color');
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
    background: dt('datatable.row.striped.background');
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
    background: dt('datatable.row.selected.background');
    color: dt('datatable.row.selected.color');
}

p-sort-icon, p-sorticon {
    display: inline-flex;
    align-items: center;
    gap: dt('datatable.header.cell.gap');
}

.p-datatable .p-editable-column.p-cell-editing {
    padding: 0;
}

.p-datatable .p-editable-column.p-cell-editing p-cell-editor,
.p-datatable .p-editable-column.p-cell-editing p-celleditor {
    display: block;
    width: 100%;
}
`;
var classes = {
  root: ({ instance }) => ["p-datatable p-component", {
    "p-datatable-hoverable": instance.rowHover() || instance.selectionMode(),
    "p-datatable-resizable": instance.resizableColumns(),
    "p-datatable-resizable-fit": instance.resizableColumns() && instance.columnResizeMode() === "fit",
    "p-datatable-scrollable": instance.scrollable(),
    "p-datatable-flex-scrollable": instance.scrollable() && instance.scrollHeight() === "flex",
    "p-datatable-striped": instance.stripedRows(),
    "p-datatable-gridlines": instance.showGridlines(),
    "p-datatable-sm": instance.size() === "small",
    "p-datatable-lg": instance.size() === "large"
  }],
  mask: "p-datatable-mask p-overlay-mask",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  pcPaginator: ({ instance }) => "p-datatable-paginator-" + instance.paginatorPosition(),
  tableContainer: "p-datatable-table-container",
  table: ({ instance }) => ["p-datatable-table", {
    "p-datatable-scrollable-table": instance.scrollable(),
    "p-datatable-resizable-table": instance.resizableColumns(),
    "p-datatable-resizable-table-fit": instance.resizableColumns() && instance.columnResizeMode() === "fit"
  }],
  thead: "p-datatable-thead",
  columnResizer: "p-datatable-column-resizer",
  columnHeaderContent: "p-datatable-column-header-content",
  columnTitle: "p-datatable-column-title",
  columnFooter: "p-datatable-column-footer",
  sortIcon: "p-datatable-sort-icon",
  pcSortBadge: "p-datatable-sort-badge",
  filter: ({ instance }) => ({
    "p-datatable-filter": true,
    "p-datatable-inline-filter": instance.display() === "row",
    "p-datatable-popover-filter": instance.display() === "menu"
  }),
  filterElementContainer: "p-datatable-filter-element-container",
  pcColumnFilterButton: "p-datatable-column-filter-button",
  pcColumnFilterClearButton: "p-datatable-column-filter-clear-button",
  filterOverlay: ({ instance }) => ({
    "p-datatable-filter-overlay p-component": true,
    "p-datatable-filter-overlay-popover": instance.display() === "menu"
  }),
  filterConstraintList: "p-datatable-filter-constraint-list",
  filterConstraint: ({ selected }) => ({
    "p-datatable-filter-constraint": true,
    "p-datatable-filter-constraint-selected": selected
  }),
  filterConstraintSeparator: "p-datatable-filter-constraint-separator",
  filterOperator: "p-datatable-filter-operator",
  pcFilterOperatorDropdown: "p-datatable-filter-operator-dropdown",
  filterRuleList: "p-datatable-filter-rule-list",
  filterRule: "p-datatable-filter-rule",
  pcFilterConstraintDropdown: "p-datatable-filter-constraint-dropdown",
  pcFilterRemoveRuleButton: "p-datatable-filter-remove-rule-button",
  pcFilterAddRuleButton: "p-datatable-filter-add-rule-button",
  filterButtonbar: "p-datatable-filter-buttonbar",
  pcFilterClearButton: "p-datatable-filter-clear-button",
  pcFilterApplyButton: "p-datatable-filter-apply-button",
  tbody: ({ instance }) => ({
    "p-datatable-tbody": true,
    "p-datatable-frozen-tbody": instance.frozenValue() || instance.frozenBodyTemplate(),
    "p-virtualscroller-content": instance.virtualScroll()
  }),
  rowGroupHeader: "p-datatable-row-group-header",
  rowToggleButton: "p-datatable-row-toggle-button",
  rowToggleIcon: "p-datatable-row-toggle-icon",
  rowExpansion: "p-datatable-row-expansion",
  rowGroupFooter: "p-datatable-row-group-footer",
  emptyMessage: "p-datatable-empty-message",
  bodyCell: ({ instance }) => ({ "p-datatable-frozen-column": instance.columnProp("frozen") }),
  reorderableRowHandle: "p-datatable-reorderable-row-handle",
  pcRowEditorInit: "p-datatable-row-editor-init",
  pcRowEditorSave: "p-datatable-row-editor-save",
  pcRowEditorCancel: "p-datatable-row-editor-cancel",
  tfoot: "p-datatable-tfoot",
  footerCell: ({ instance }) => ({ "p-datatable-frozen-column": instance.columnProp("frozen") }),
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-tfoot",
  columnResizeIndicator: "p-datatable-column-resize-indicator",
  rowReorderIndicatorUp: "p-datatable-row-reorder-indicator-up",
  rowReorderIndicatorDown: "p-datatable-row-reorder-indicator-down",
  sortableColumn: ({ instance }) => ({
    "p-datatable-sortable-column": instance.isEnabled(),
    " p-datatable-column-sorted": instance.sorted()
  }),
  sortableColumnIcon: "p-datatable-sort-icon",
  sortableColumnBadge: "p-sortable-column-badge",
  selectableRow: ({ instance }) => ({
    "p-datatable-selectable-row": instance.isEnabled(),
    "p-datatable-row-selected": instance.selected
  }),
  resizableColumn: "p-datatable-resizable-column",
  reorderableColumn: "p-datatable-reorderable-column",
  rowEditorCancel: "p-datatable-row-editor-cancel",
  frozenColumn: ({ instance }) => ({
    "p-datatable-frozen-column": instance.frozen(),
    "p-datatable-frozen-column-left": instance.alignFrozen() === "left"
  }),
  contextMenuRowSelected: ({ instance }) => ({ "p-datatable-contextmenu-row-selected": instance.selected })
};
var inlineStyles = {
  tableContainer: ({ instance }) => ({
    "max-height": instance.virtualScroll() ? "" : instance.scrollHeight(),
    overflow: "auto"
  }),
  thead: { position: "sticky" },
  tfoot: { position: "sticky" },
  rowGroupHeader: ({ instance }) => ({ top: instance.getFrozenRowGroupHeaderStickyPosition })
};
var TableStyle = class TableStyle2 extends BaseStyle {
  name = "datatable";
  style = style$1;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TableStyle_BaseFactory = void 0;
    return function TableStyle_Factory(__ngFactoryType__) {
      return (\u0275TableStyle_BaseFactory || (\u0275TableStyle_BaseFactory = i010.\u0275\u0275getInheritedFactory(TableStyle2)))(__ngFactoryType__ || TableStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i010.\u0275\u0275defineInjectable({
    token: TableStyle2,
    factory: TableStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableStyle, [{ type: Injectable }], null, null);
})();
var TableClasses;
(function(TableClasses2) {
  TableClasses2["root"] = "p-datatable";
  TableClasses2["mask"] = "p-datatable-mask";
  TableClasses2["loadingIcon"] = "p-datatable-loading-icon";
  TableClasses2["header"] = "p-datatable-header";
  TableClasses2["pcPaginator"] = "p-datatable-paginator-[position]";
  TableClasses2["tableContainer"] = "p-datatable-table-container";
  TableClasses2["table"] = "p-datatable-table";
  TableClasses2["thead"] = "p-datatable-thead";
  TableClasses2["columnResizer"] = "p-datatable-column-resizer";
  TableClasses2["columnHeaderContent"] = "p-datatable-column-header-content";
  TableClasses2["columnTitle"] = "p-datatable-column-title";
  TableClasses2["sortIcon"] = "p-datatable-sort-icon";
  TableClasses2["pcSortBadge"] = "p-datatable-sort-badge";
  TableClasses2["filter"] = "p-datatable-filter";
  TableClasses2["filterElementContainer"] = "p-datatable-filter-element-container";
  TableClasses2["pcColumnFilterButton"] = "p-datatable-column-filter-button";
  TableClasses2["pcColumnFilterClearButton"] = "p-datatable-column-filter-clear-button";
  TableClasses2["filterOverlay"] = "p-datatable-filter-overlay";
  TableClasses2["filterConstraintList"] = "p-datatable-filter-constraint-list";
  TableClasses2["filterConstraint"] = "p-datatable-filter-constraint";
  TableClasses2["filterConstraintSeparator"] = "p-datatable-filter-constraint-separator";
  TableClasses2["filterOperator"] = "p-datatable-filter-operator";
  TableClasses2["pcFilterOperatorDropdown"] = "p-datatable-filter-operator-dropdown";
  TableClasses2["filterRuleList"] = "p-datatable-filter-rule-list";
  TableClasses2["filterRule"] = "p-datatable-filter-rule";
  TableClasses2["pcFilterConstraintDropdown"] = "p-datatable-filter-constraint-dropdown";
  TableClasses2["pcFilterRemoveRuleButton"] = "p-datatable-filter-remove-rule-button";
  TableClasses2["pcFilterAddRuleButton"] = "p-datatable-filter-add-rule-button";
  TableClasses2["filterButtonbar"] = "p-datatable-filter-buttonbar";
  TableClasses2["pcFilterClearButton"] = "p-datatable-filter-clear-button";
  TableClasses2["pcFilterApplyButton"] = "p-datatable-filter-apply-button";
  TableClasses2["tbody"] = "p-datatable-tbody";
  TableClasses2["rowGroupHeader"] = "p-datatable-row-group-header";
  TableClasses2["rowToggleButton"] = "p-datatable-row-toggle-button";
  TableClasses2["rowToggleIcon"] = "p-datatable-row-toggle-icon";
  TableClasses2["rowExpansion"] = "p-datatable-row-expansion";
  TableClasses2["rowGroupFooter"] = "p-datatable-row-group-footer";
  TableClasses2["emptyMessage"] = "p-datatable-empty-message";
  TableClasses2["reorderableRowHandle"] = "p-datatable-reorderable-row-handle";
  TableClasses2["pcRowEditorInit"] = "p-datatable-row-editor-init";
  TableClasses2["pcRowEditorSave"] = "p-datatable-row-editor-save";
  TableClasses2["pcRowEditorCancel"] = "p-datatable-row-editor-cancel";
  TableClasses2["tfoot"] = "p-datatable-tfoot";
  TableClasses2["virtualScrollerSpacer"] = "p-datatable-virtualscroller-spacer";
  TableClasses2["footer"] = "p-datatable-footer";
  TableClasses2["columnResizeIndicator"] = "p-datatable-column-resize-indicator";
  TableClasses2["rowReorderIndicatorUp"] = "p-datatable-row-reorder-indicator-up";
  TableClasses2["rowReorderIndicatorDown"] = "p-datatable-row-reorder-indicator-down";
  TableClasses2["sortableColumn"] = "p-datatable-sortable-column";
  TableClasses2["sortableColumnIcon"] = "p-sortable-column-icon";
  TableClasses2["sortableColumnBadge"] = "p-sortable-column-badge";
  TableClasses2["selectableRow"] = "p-datatable-selectable-row";
  TableClasses2["resizableColumn"] = "p-datatable-resizable-column";
  TableClasses2["rowEditorCancel"] = "p-datatable-row-editor-cancel";
  TableClasses2["frozenColumn"] = "p-datatable-frozen-column";
  TableClasses2["contextMenuRowSelected"] = "p-datatable-contextmenu-row-selected";
})(TableClasses || (TableClasses = {}));
var TABLE_INSTANCE = new InjectionToken("TABLE_INSTANCE");
var COLUMN_FILTER_INSTANCE = new InjectionToken("COLUMN_FILTER_INSTANCE");
var TableService = class TableService2 {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  valueSource = new Subject();
  columnsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  valueSource$ = this.valueSource.asObservable();
  columnsSource$ = this.columnsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
  static \u0275fac = function TableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableService2)();
  };
  static \u0275prov = /* @__PURE__ */ i010.\u0275\u0275defineInjectable({
    token: TableService2,
    factory: TableService2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableService, [{ type: Injectable }], null, null);
})();
var TableBody = class TableBody2 extends BaseComponent {
  hostName = "Table";
  columns = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "columns" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pTableBody"
  }));
  template = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "template" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pTableBodyTemplate"
  }));
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  frozen = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozen" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  frozenRows = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenRows" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  scrollerOptions = input(...ngDevMode ? [void 0, { debugName: "scrollerOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  dataTable = inject(TABLE_INSTANCE);
  bodyContext = computed(() => ({
    $implicit: this.columns(),
    frozen: this.frozen()
  }), ...ngDevMode ? [{ debugName: "bodyContext" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    effect(() => {
      if (this.value() !== void 0) {
        if (this.frozenRows()) this.updateFrozenRowStickyPosition();
        if (this.dataTable.scrollable() && this.dataTable.rowGroupMode() === "subheader") this.updateFrozenRowGroupHeaderStickyPosition();
      }
    });
  }
  dataP = computed(() => this.cn({
    hoverable: this.dataTable.rowHover() || this.dataTable.selectionMode(),
    frozen: this.frozen()
  }), ...ngDevMode ? [{ debugName: "dataP" }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterViewInit() {
    if (this.frozenRows()) this.updateFrozenRowStickyPosition();
    if (this.dataTable.scrollable() && this.dataTable.rowGroupMode() === "subheader") this.updateFrozenRowGroupHeaderStickyPosition();
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy() || "");
    let prevRowData = value[i - (this.dataTable?.first() || 0) - 1];
    if (prevRowData) return currentRowFieldData !== ObjectUtils.resolveFieldData(prevRowData, this.dataTable?.groupRowsBy() || "");
    else return true;
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy() || "");
    let nextRowData = value[i - (this.dataTable?.first() || 0) + 1];
    if (nextRowData) return currentRowFieldData !== ObjectUtils.resolveFieldData(nextRowData, this.dataTable?.groupRowsBy() || "");
    else return true;
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy());
    let prevRowData = value[i - 1];
    if (prevRowData) return currentRowFieldData !== ObjectUtils.resolveFieldData(prevRowData, this.dataTable?.groupRowsBy() || "");
    else return true;
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy());
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dataTable?.groupRowsBy() || "");
      else break;
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + "px";
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dataTable.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    }
  }
  getScrollerOption(option, options) {
    if (this.dataTable.virtualScroll()) {
      options = options || this.scrollerOptions();
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dataTable.paginator() ? this.dataTable.first() + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(index).index : index;
  }
  static \u0275fac = function TableBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableBody2)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _c0 = (a0, a1, a2, a3, a4) => ({
      $implicit: a0,
      rowIndex: a1,
      columns: a2,
      editing: a3,
      frozen: a4
    });
    const _c1 = (a0, a1, a2, a3, a4, a5, a6) => ({
      $implicit: a0,
      rowIndex: a1,
      columns: a2,
      editing: a3,
      frozen: a4,
      rowgroup: a5,
      rowspan: a6
    });
    const _c2 = (a0, a1, a2, a3, a4, a5) => ({
      $implicit: a0,
      rowIndex: a1,
      columns: a2,
      expanded: a3,
      editing: a4,
      frozen: a5
    });
    const _c3 = (a0, a1, a2, a3) => ({
      $implicit: a0,
      rowIndex: a1,
      columns: a2,
      frozen: a3
    });
    function _forTrack0($index, $item) {
      return this.dataTable.rowTrackBy()($index, $item);
    }
    function TableBody_Conditional_0_For_1_Conditional_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainerStart(0, 0);
        i010.\u0275\u0275template(1, TableBody_Conditional_0_For_1_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        const rowData_r2 = ctx_r0.$implicit;
        const \u0275$index_2_r3 = ctx_r0.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.groupHeaderTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction5(2, _c0, rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3), ctx_r3.columns(), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_0_For_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        const rowData_r2 = ctx_r0.$implicit;
        const \u0275$index_2_r3 = ctx_r0.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", rowData_r2 ? ctx_r3.template() : ctx_r3.dataTable.loadingBodyTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction5(2, _c0, rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3), ctx_r3.columns(), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_0_For_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        const rowData_r2 = ctx_r0.$implicit;
        const \u0275$index_2_r3 = ctx_r0.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", rowData_r2 ? ctx_r3.template() : ctx_r3.dataTable.loadingBodyTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction7(2, _c1, rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3), ctx_r3.columns(), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen(), ctx_r3.shouldRenderRowspan(ctx_r3.value(), rowData_r2, \u0275$index_2_r3), ctx_r3.calculateRowGroupSize(ctx_r3.value(), rowData_r2, \u0275$index_2_r3)));
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_0_For_1_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainerStart(0, 0);
        i010.\u0275\u0275template(1, TableBody_Conditional_0_For_1_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        const rowData_r2 = ctx_r0.$implicit;
        const \u0275$index_2_r3 = ctx_r0.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.groupFooterTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction5(2, _c0, rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3), ctx_r3.columns(), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_0_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, TableBody_Conditional_0_For_1_Conditional_0_Template, 2, 8, "ng-container", 0);
        i010.\u0275\u0275conditionalCreate(1, TableBody_Conditional_0_For_1_Conditional_1_Template, 1, 8, "ng-container");
        i010.\u0275\u0275conditionalCreate(2, TableBody_Conditional_0_For_1_Conditional_2_Template, 1, 10, "ng-container");
        i010.\u0275\u0275conditionalCreate(3, TableBody_Conditional_0_For_1_Conditional_3_Template, 2, 8, "ng-container", 0);
      }
      if (rf & 2) {
        const rowData_r2 = ctx.$implicit;
        const \u0275$index_2_r3 = ctx.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275conditional(ctx_r3.dataTable.groupHeaderTemplate() && !ctx_r3.dataTable.virtualScroll() && ctx_r3.dataTable.rowGroupMode() === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value(), rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3)) ? 0 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.rowGroupMode() !== "rowspan" ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.rowGroupMode() === "rowspan" ? 2 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.groupFooterTemplate() && !ctx_r3.dataTable.virtualScroll() && ctx_r3.dataTable.rowGroupMode() === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value(), rowData_r2, ctx_r3.getRowIndex(\u0275$index_2_r3)) ? 3 : -1);
      }
    }
    function TableBody_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275repeaterCreate(0, TableBody_Conditional_0_For_1_Template, 4, 4, null, null, _forTrack0, true);
      }
      if (rf & 2) {
        const ctx_r3 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275repeater(ctx_r3.value());
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_1_For_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r4 = i010.\u0275\u0275nextContext();
        const rowData_r6 = ctx_r4.$implicit;
        const \u0275$index_28_r7 = ctx_r4.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.template())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction6(2, _c2, rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7), ctx_r3.columns(), ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainerStart(0, 0);
        i010.\u0275\u0275template(1, TableBody_Conditional_1_For_1_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const ctx_r4 = i010.\u0275\u0275nextContext();
        const rowData_r6 = ctx_r4.$implicit;
        const \u0275$index_28_r7 = ctx_r4.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.groupHeaderTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction6(2, _c2, rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7), ctx_r3.columns(), ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainerStart(0, 0);
        i010.\u0275\u0275template(1, TableBody_Conditional_1_For_1_Conditional_2_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275elementContainerEnd();
      }
      if (rf & 2) {
        const ctx_r4 = i010.\u0275\u0275nextContext(2);
        const rowData_r6 = ctx_r4.$implicit;
        const \u0275$index_28_r7 = ctx_r4.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.groupFooterTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction6(2, _c2, rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7), ctx_r3.columns(), ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_1_For_1_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_1_For_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275conditionalCreate(1, TableBody_Conditional_1_For_1_Conditional_2_Conditional_1_Template, 2, 9, "ng-container", 0);
      }
      if (rf & 2) {
        const ctx_r4 = i010.\u0275\u0275nextContext();
        const rowData_r6 = ctx_r4.$implicit;
        const \u0275$index_28_r7 = ctx_r4.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.expandedRowTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction4(3, _c3, rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7), ctx_r3.columns(), ctx_r3.frozen()));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.groupFooterTemplate() && ctx_r3.dataTable.rowGroupMode() === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value(), rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7)) ? 1 : -1);
      }
    }
    function TableBody_Conditional_1_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, TableBody_Conditional_1_For_1_Conditional_0_Template, 1, 9, "ng-container");
        i010.\u0275\u0275conditionalCreate(1, TableBody_Conditional_1_For_1_Conditional_1_Template, 2, 9, "ng-container", 0);
        i010.\u0275\u0275conditionalCreate(2, TableBody_Conditional_1_For_1_Conditional_2_Template, 2, 8);
      }
      if (rf & 2) {
        const rowData_r6 = ctx.$implicit;
        const \u0275$index_28_r7 = ctx.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275conditional(!ctx_r3.dataTable.groupHeaderTemplate() ? 0 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.groupHeaderTemplate() && ctx_r3.dataTable.rowGroupMode() === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value(), rowData_r6, ctx_r3.getRowIndex(\u0275$index_28_r7)) ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.isRowExpanded(rowData_r6) ? 2 : -1);
      }
    }
    function TableBody_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275repeaterCreate(0, TableBody_Conditional_1_For_1_Template, 3, 3, null, null, _forTrack0, true);
      }
      if (rf & 2) {
        const ctx_r3 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275repeater(ctx_r3.value());
      }
    }
    function TableBody_Conditional_2_For_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_2_For_1_Conditional_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_2_For_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_2_For_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r7 = i010.\u0275\u0275nextContext();
        const rowData_r9 = ctx_r7.$implicit;
        const \u0275$index_54_r10 = ctx_r7.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.frozenExpandedRowTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction4(2, _c3, rowData_r9, ctx_r3.getRowIndex(\u0275$index_54_r10), ctx_r3.columns(), ctx_r3.frozen()));
      }
    }
    function TableBody_Conditional_2_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_2_For_1_ng_container_0_Template, 1, 0, "ng-container", 1);
        i010.\u0275\u0275conditionalCreate(1, TableBody_Conditional_2_For_1_Conditional_1_Template, 1, 7, "ng-container");
      }
      if (rf & 2) {
        const rowData_r9 = ctx.$implicit;
        const \u0275$index_54_r10 = ctx.$index;
        const ctx_r3 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.template())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction6(3, _c2, rowData_r9, ctx_r3.getRowIndex(\u0275$index_54_r10), ctx_r3.columns(), ctx_r3.dataTable.isRowExpanded(rowData_r9), ctx_r3.dataTable.editMode() === "row" && ctx_r3.dataTable.isRowEditing(rowData_r9), ctx_r3.frozen()));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r3.dataTable.isRowExpanded(rowData_r9) ? 1 : -1);
      }
    }
    function TableBody_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275repeaterCreate(0, TableBody_Conditional_2_For_1_Template, 2, 10, null, null, _forTrack0, true);
      }
      if (rf & 2) {
        const ctx_r3 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275repeater(ctx_r3.value());
      }
    }
    function TableBody_Conditional_3_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r3 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.loadingBodyTemplate())("ngTemplateOutletContext", ctx_r3.bodyContext());
      }
    }
    function TableBody_Conditional_4_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function TableBody_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableBody_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 1);
      }
      if (rf & 2) {
        const ctx_r3 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r3.dataTable.emptyMessageTemplate())("ngTemplateOutletContext", ctx_r3.bodyContext());
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: TableBody2,
      selectors: [["", "pTableBody", ""]],
      hostVars: 1,
      hostBindings: function TableBody_HostBindings(rf, ctx) {
        if (rf & 2) {
          i010.\u0275\u0275attribute("data-p", ctx.dataP());
        }
      },
      inputs: {
        columns: [1, "pTableBody", "columns"],
        template: [1, "pTableBodyTemplate", "template"],
        value: [1, "value"],
        frozen: [1, "frozen"],
        frozenRows: [1, "frozenRows"],
        scrollerOptions: [1, "scrollerOptions"]
      },
      features: [i010.\u0275\u0275InheritDefinitionFeature],
      decls: 5,
      vars: 5,
      consts: [["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableBody_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275conditionalCreate(0, TableBody_Conditional_0_Template, 2, 0);
          i010.\u0275\u0275conditionalCreate(1, TableBody_Conditional_1_Template, 2, 0);
          i010.\u0275\u0275conditionalCreate(2, TableBody_Conditional_2_Template, 2, 0);
          i010.\u0275\u0275conditionalCreate(3, TableBody_Conditional_3_Template, 1, 2, "ng-container");
          i010.\u0275\u0275conditionalCreate(4, TableBody_Conditional_4_Template, 1, 2, "ng-container");
        }
        if (rf & 2) {
          i010.\u0275\u0275conditional(!ctx.dataTable.expandedRowTemplate() ? 0 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.dataTable.expandedRowTemplate() && !(ctx.frozen() && ctx.dataTable.frozenExpandedRowTemplate()) ? 1 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.dataTable.frozenExpandedRowTemplate() && ctx.frozen() ? 2 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.dataTable.loading() ? 3 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.dataTable.isEmpty() && !ctx.dataTable.loading() ? 4 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableBody, [{
    type: Component10,
    args: [{
      selector: "[pTableBody]",
      standalone: true,
      imports: [NgTemplateOutlet],
      template: `
        @if (!dataTable.expandedRowTemplate()) {
            @for (rowData of value(); track dataTable.rowTrackBy()($index, rowData); let rowIndex = $index) {
                @if (dataTable.groupHeaderTemplate() && !dataTable.virtualScroll() && dataTable.rowGroupMode() === 'subheader' && shouldRenderRowGroupHeader(value(), rowData, getRowIndex(rowIndex))) {
                    <ng-container role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dataTable.groupHeaderTemplate();
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns(),
                                    editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                    frozen: frozen()
                                }
                            "
                        ></ng-container>
                    </ng-container>
                }
                @if (dataTable.rowGroupMode() !== 'rowspan') {
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template() : dataTable.loadingBodyTemplate();
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns(),
                                editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen()
                            }
                        "
                    ></ng-container>
                }
                @if (dataTable.rowGroupMode() === 'rowspan') {
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template() : dataTable.loadingBodyTemplate();
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns(),
                                editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen(),
                                rowgroup: shouldRenderRowspan(value(), rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value(), rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                }
                @if (dataTable.groupFooterTemplate() && !dataTable.virtualScroll() && dataTable.rowGroupMode() === 'subheader' && shouldRenderRowGroupFooter(value(), rowData, getRowIndex(rowIndex))) {
                    <ng-container role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dataTable.groupFooterTemplate();
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns(),
                                    editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                    frozen: frozen()
                                }
                            "
                        ></ng-container>
                    </ng-container>
                }
            }
        }
        @if (dataTable.expandedRowTemplate() && !(frozen() && dataTable.frozenExpandedRowTemplate())) {
            @for (rowData of value(); track dataTable.rowTrackBy()($index, rowData); let rowIndex = $index) {
                @if (!dataTable.groupHeaderTemplate()) {
                    <ng-container
                        *ngTemplateOutlet="
                            template();
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns(),
                                expanded: dataTable.isRowExpanded(rowData),
                                editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen()
                            }
                        "
                    ></ng-container>
                }
                @if (dataTable.groupHeaderTemplate() && dataTable.rowGroupMode() === 'subheader' && shouldRenderRowGroupHeader(value(), rowData, getRowIndex(rowIndex))) {
                    <ng-container role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dataTable.groupHeaderTemplate();
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns(),
                                    expanded: dataTable.isRowExpanded(rowData),
                                    editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                    frozen: frozen()
                                }
                            "
                        ></ng-container>
                    </ng-container>
                }
                @if (dataTable.isRowExpanded(rowData)) {
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.expandedRowTemplate();
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns(),
                                frozen: frozen()
                            }
                        "
                    ></ng-container>
                    @if (dataTable.groupFooterTemplate() && dataTable.rowGroupMode() === 'subheader' && shouldRenderRowGroupFooter(value(), rowData, getRowIndex(rowIndex))) {
                        <ng-container role="row">
                            <ng-container
                                *ngTemplateOutlet="
                                    dataTable.groupFooterTemplate();
                                    context: {
                                        $implicit: rowData,
                                        rowIndex: getRowIndex(rowIndex),
                                        columns: columns(),
                                        expanded: dataTable.isRowExpanded(rowData),
                                        editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                                        frozen: frozen()
                                    }
                                "
                            ></ng-container>
                        </ng-container>
                    }
                }
            }
        }
        @if (dataTable.frozenExpandedRowTemplate() && frozen()) {
            @for (rowData of value(); track dataTable.rowTrackBy()($index, rowData); let rowIndex = $index) {
                <ng-container
                    *ngTemplateOutlet="
                        template();
                        context: {
                            $implicit: rowData,
                            rowIndex: getRowIndex(rowIndex),
                            columns: columns(),
                            expanded: dataTable.isRowExpanded(rowData),
                            editing: dataTable.editMode() === 'row' && dataTable.isRowEditing(rowData),
                            frozen: frozen()
                        }
                    "
                ></ng-container>
                @if (dataTable.isRowExpanded(rowData)) {
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.frozenExpandedRowTemplate();
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns(),
                                frozen: frozen()
                            }
                        "
                    ></ng-container>
                }
            }
        }
        @if (dataTable.loading()) {
            <ng-container *ngTemplateOutlet="dataTable.loadingBodyTemplate(); context: bodyContext()"></ng-container>
        }
        @if (dataTable.isEmpty() && !dataTable.loading()) {
            <ng-container *ngTemplateOutlet="dataTable.emptyMessageTemplate(); context: bodyContext()"></ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: { "[attr.data-p]": "dataP()" }
    }]
  }], () => [], {
    columns: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pTableBody",
        required: false
      }]
    }],
    template: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pTableBodyTemplate",
        required: false
      }]
    }],
    value: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    frozen: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozen",
        required: false
      }]
    }],
    frozenRows: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozenRows",
        required: false
      }]
    }],
    scrollerOptions: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "scrollerOptions",
        required: false
      }]
    }]
  });
})();
var Table = class Table2 extends BaseComponent {
  componentName = "Table";
  frozenColumns = input(...ngDevMode ? [void 0, { debugName: "frozenColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  frozenValue = input(...ngDevMode ? [void 0, { debugName: "frozenValue" }] : (
    /* istanbul ignore next */
    []
  ));
  tableStyle = input(...ngDevMode ? [void 0, { debugName: "tableStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  tableStyleClass = input(...ngDevMode ? [void 0, { debugName: "tableStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  paginator = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginator" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  pageLinks = input(5, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pageLinks" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  rowsPerPageOptions = input(...ngDevMode ? [void 0, { debugName: "rowsPerPageOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  alwaysShowPaginator = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "alwaysShowPaginator" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  paginatorPosition = input("bottom", ...ngDevMode ? [{ debugName: "paginatorPosition" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatorStyleClass = input(...ngDevMode ? [void 0, { debugName: "paginatorStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatorDropdownAppendTo = input(...ngDevMode ? [void 0, { debugName: "paginatorDropdownAppendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  paginatorDropdownScrollHeight = input("200px", ...ngDevMode ? [{ debugName: "paginatorDropdownScrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  currentPageReportTemplate = input("{currentPage} of {totalPages}", ...ngDevMode ? [{ debugName: "currentPageReportTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  showCurrentPageReport = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showCurrentPageReport" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showJumpToPageDropdown = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showJumpToPageDropdown" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showJumpToPageInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showJumpToPageInput" } : (
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
  showPageLinks = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showPageLinks" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  defaultSortOrder = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "defaultSortOrder" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  sortMode = input("single", ...ngDevMode ? [{ debugName: "sortMode" }] : (
    /* istanbul ignore next */
    []
  ));
  resetPageOnSort = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "resetPageOnSort" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  selectionMode = input(...ngDevMode ? [void 0, { debugName: "selectionMode" }] : (
    /* istanbul ignore next */
    []
  ));
  selectionPageOnly = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selectionPageOnly" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  contextMenuSelectionInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "contextMenuSelectionInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "contextMenuSelection"
  }));
  contextMenuSelection;
  contextMenuSelectionChange = output();
  dataKey = input(...ngDevMode ? [void 0, { debugName: "dataKey" }] : (
    /* istanbul ignore next */
    []
  ));
  metaKeySelection = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "metaKeySelection" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  rowSelectable = input(...ngDevMode ? [void 0, { debugName: "rowSelectable" }] : (
    /* istanbul ignore next */
    []
  ));
  rowTrackBy = input((index, item) => item ?? index, ...ngDevMode ? [{ debugName: "rowTrackBy" }] : (
    /* istanbul ignore next */
    []
  ));
  lazy = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "lazy" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  lazyLoadOnInit = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "lazyLoadOnInit" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  compareSelectionBy = input("deepEquals", ...ngDevMode ? [{ debugName: "compareSelectionBy" }] : (
    /* istanbul ignore next */
    []
  ));
  csvSeparator = input(",", ...ngDevMode ? [{ debugName: "csvSeparator" }] : (
    /* istanbul ignore next */
    []
  ));
  exportFilename = input("download", ...ngDevMode ? [{ debugName: "exportFilename" }] : (
    /* istanbul ignore next */
    []
  ));
  filtersInput = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "filtersInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "filters"
  }));
  filters = {};
  globalFilterFields = input(...ngDevMode ? [void 0, { debugName: "globalFilterFields" }] : (
    /* istanbul ignore next */
    []
  ));
  filterDelay = input(300, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "filterDelay" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  filterLocale = input(...ngDevMode ? [void 0, { debugName: "filterLocale" }] : (
    /* istanbul ignore next */
    []
  ));
  expandedRowKeysInput = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "expandedRowKeysInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "expandedRowKeys"
  }));
  expandedRowKeys = {};
  editingRowKeysInput = input({}, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "editingRowKeysInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "editingRowKeys"
  }));
  _editingRowKeys = signal({}, ...ngDevMode ? [{ debugName: "_editingRowKeys" }] : (
    /* istanbul ignore next */
    []
  ));
  get editingRowKeys() {
    return this._editingRowKeys();
  }
  set editingRowKeys(value) {
    this._editingRowKeys.set(value);
  }
  rowExpandMode = input("multiple", ...ngDevMode ? [{ debugName: "rowExpandMode" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollable = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "scrollable" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  rowGroupMode = input(...ngDevMode ? [void 0, { debugName: "rowGroupMode" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollHeight = input(...ngDevMode ? [void 0, { debugName: "scrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  virtualScroll = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "virtualScroll" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  virtualScrollItemSize = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "virtualScrollItemSize" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => numberAttribute(v, void 0)
  }));
  virtualScrollOptions = input(...ngDevMode ? [void 0, { debugName: "virtualScrollOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  virtualScrollDelay = input(250, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "virtualScrollDelay" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  frozenWidth = input(...ngDevMode ? [void 0, { debugName: "frozenWidth" }] : (
    /* istanbul ignore next */
    []
  ));
  contextMenu = input(...ngDevMode ? [void 0, { debugName: "contextMenu" }] : (
    /* istanbul ignore next */
    []
  ));
  resizableColumns = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "resizableColumns" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  columnResizeMode = input("fit", ...ngDevMode ? [{ debugName: "columnResizeMode" }] : (
    /* istanbul ignore next */
    []
  ));
  reorderableColumns = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "reorderableColumns" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  loading = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loading" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  loadingIcon = input(...ngDevMode ? [void 0, { debugName: "loadingIcon" }] : (
    /* istanbul ignore next */
    []
  ));
  showLoader = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showLoader" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  rowHover = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rowHover" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  customSort = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "customSort" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showInitialSortBadge = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showInitialSortBadge" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  exportFunction = input(...ngDevMode ? [void 0, { debugName: "exportFunction" }] : (
    /* istanbul ignore next */
    []
  ));
  exportHeader = input(...ngDevMode ? [void 0, { debugName: "exportHeader" }] : (
    /* istanbul ignore next */
    []
  ));
  stateKey = input(...ngDevMode ? [void 0, { debugName: "stateKey" }] : (
    /* istanbul ignore next */
    []
  ));
  stateStorage = input("session", ...ngDevMode ? [{ debugName: "stateStorage" }] : (
    /* istanbul ignore next */
    []
  ));
  editMode = input("cell", ...ngDevMode ? [{ debugName: "editMode" }] : (
    /* istanbul ignore next */
    []
  ));
  groupRowsBy = input(...ngDevMode ? [void 0, { debugName: "groupRowsBy" }] : (
    /* istanbul ignore next */
    []
  ));
  size = input(...ngDevMode ? [void 0, { debugName: "size" }] : (
    /* istanbul ignore next */
    []
  ));
  showGridlines = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showGridlines" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  stripedRows = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "stripedRows" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  groupRowsByOrder = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "groupRowsByOrder" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  paginatorLocale = input(...ngDevMode ? [void 0, { debugName: "paginatorLocale" }] : (
    /* istanbul ignore next */
    []
  ));
  valueInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "valueInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "value"
  }));
  columnsInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "columnsInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "columns"
  }));
  first = model(0, ...ngDevMode ? [{ debugName: "first" }] : (
    /* istanbul ignore next */
    []
  ));
  rows = model(...ngDevMode ? [void 0, { debugName: "rows" }] : (
    /* istanbul ignore next */
    []
  ));
  totalRecords = model(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : (
    /* istanbul ignore next */
    []
  ));
  sortFieldInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "sortFieldInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "sortField"
  }));
  sortOrderInput = input(1, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "sortOrderInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "sortOrder"
  }));
  multiSortMetaInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "multiSortMetaInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "multiSortMeta"
  }));
  selection = model(...ngDevMode ? [void 0, { debugName: "selection" }] : (
    /* istanbul ignore next */
    []
  ));
  selectAllInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "selectAllInput" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "selectAll"
  }));
  selectAllChange = output();
  onRowSelect = output();
  onRowUnselect = output();
  onPage = output();
  onSort = output();
  onFilter = output();
  onLazyLoad = output();
  onRowExpand = output();
  onRowCollapse = output();
  onContextMenuSelect = output();
  onColResize = output();
  onColReorder = output();
  onRowReorder = output();
  onEditInit = output();
  onEditComplete = output();
  onEditCancel = output();
  onHeaderCheckboxToggle = output();
  sortFunction = output();
  onStateSave = output();
  onStateRestore = output();
  resizeHelperViewChild = viewChild("resizeHelper", ...ngDevMode ? [{ debugName: "resizeHelperViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  reorderIndicatorUpViewChild = viewChild("reorderIndicatorUp", ...ngDevMode ? [{ debugName: "reorderIndicatorUpViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  reorderIndicatorDownViewChild = viewChild("reorderIndicatorDown", ...ngDevMode ? [{ debugName: "reorderIndicatorDownViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  wrapperViewChild = viewChild("wrapper", ...ngDevMode ? [{ debugName: "wrapperViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  tableViewChild = viewChild("table", ...ngDevMode ? [{ debugName: "tableViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  tableHeaderViewChild = viewChild("thead", ...ngDevMode ? [{ debugName: "tableHeaderViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  tableFooterViewChild = viewChild("tfoot", ...ngDevMode ? [{ debugName: "tableFooterViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  scroller = viewChild("scroller", ...ngDevMode ? [{ debugName: "scroller" }] : (
    /* istanbul ignore next */
    []
  ));
  value = [];
  columns;
  filteredValue;
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headerGroupedTemplate = contentChild("headergrouped", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerGroupedTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  bodyTemplate = contentChild("body", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "bodyTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  loadingBodyTemplate = contentChild("loadingbody", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loadingBodyTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  captionTemplate = contentChild("caption", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "captionTemplate" } : (
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
  footerGroupedTemplate = contentChild("footergrouped", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "footerGroupedTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  summaryTemplate = contentChild("summary", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "summaryTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  colGroupTemplate = contentChild("colgroup", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "colGroupTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  expandedRowTemplate = contentChild("expandedrow", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "expandedRowTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  groupHeaderTemplate = contentChild("groupheader", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "groupHeaderTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  groupFooterTemplate = contentChild("groupfooter", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "groupFooterTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  frozenExpandedRowTemplate = contentChild("frozenexpandedrow", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenExpandedRowTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  frozenHeaderTemplate = contentChild("frozenheader", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenHeaderTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  frozenBodyTemplate = contentChild("frozenbody", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenBodyTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  frozenFooterTemplate = contentChild("frozenfooter", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenFooterTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  frozenColGroupTemplate = contentChild("frozencolgroup", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "frozenColGroupTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  emptyMessageTemplate = contentChild("emptymessage", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "emptyMessageTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorLeftTemplate = contentChild("paginatorleft", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorLeftTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorRightTemplate = contentChild("paginatorright", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorRightTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorDropdownItemTemplate = contentChild("paginatordropdownitem", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorDropdownItemTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  loadingIconTemplate = contentChild("loadingicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loadingIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  reorderIndicatorUpIconTemplate = contentChild("reorderindicatorupicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "reorderIndicatorUpIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  reorderIndicatorDownIconTemplate = contentChild("reorderindicatordownicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "reorderIndicatorDownIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  sortIconTemplate = contentChild("sorticon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "sortIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  checkboxIconTemplate = contentChild("checkboxicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "checkboxIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  headerCheckboxIconTemplate = contentChild("headercheckboxicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerCheckboxIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorDropdownIconTemplate = contentChild("paginatordropdownicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorDropdownIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorFirstPageLinkIconTemplate = contentChild("paginatorfirstpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorFirstPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorLastPageLinkIconTemplate = contentChild("paginatorlastpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorLastPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorPreviousPageLinkIconTemplate = contentChild("paginatorpreviouspagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorPreviousPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  paginatorNextPageLinkIconTemplate = contentChild("paginatornextpagelinkicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "paginatorNextPageLinkIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  showLoadingMask = computed(() => this.loading() && this.showLoader(), ...ngDevMode ? [{ debugName: "showLoadingMask" }] : (
    /* istanbul ignore next */
    []
  ));
  showTopPaginator = computed(() => this.paginator() && (this.paginatorPosition() === "top" || this.paginatorPosition() === "both"), ...ngDevMode ? [{ debugName: "showTopPaginator" }] : (
    /* istanbul ignore next */
    []
  ));
  showBottomPaginator = computed(() => this.paginator() && (this.paginatorPosition() === "bottom" || this.paginatorPosition() === "both"), ...ngDevMode ? [{ debugName: "showBottomPaginator" }] : (
    /* istanbul ignore next */
    []
  ));
  showFrozenBody = computed(() => !!(this.frozenValue() || this.frozenBodyTemplate()), ...ngDevMode ? [{ debugName: "showFrozenBody" }] : (
    /* istanbul ignore next */
    []
  ));
  showFooter = computed(() => !!(this.footerGroupedTemplate() || this.footerTemplate()), ...ngDevMode ? [{ debugName: "showFooter" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollerStyle = computed(() => ({ height: this.scrollHeight() !== "flex" ? this.scrollHeight() : void 0 }), ...ngDevMode ? [{ debugName: "scrollerStyle" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollerScrollHeight = computed(() => this.scrollHeight() !== "flex" ? void 0 : "100%", ...ngDevMode ? [{ debugName: "scrollerScrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollerDelay = computed(() => this.lazy() ? this.virtualScrollDelay() : 0, ...ngDevMode ? [{ debugName: "scrollerDelay" }] : (
    /* istanbul ignore next */
    []
  ));
  selectionKeys = {};
  disabledSelectionKeys = /* @__PURE__ */ new Set();
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  draggedRowIndex;
  droppedRowIndex;
  rowDragging;
  dropPosition;
  _editingCell = signal(null, ...ngDevMode ? [{ debugName: "_editingCell" }] : (
    /* istanbul ignore next */
    []
  ));
  get editingCell() {
    return this._editingCell();
  }
  set editingCell(value) {
    this._editingCell.set(value);
  }
  editingCellData;
  editingCellField;
  editingCellRowIndex;
  selfClick;
  documentEditListener;
  multiSortMeta;
  sortField;
  sortOrder = 1;
  preventSelectionSetterPropagation;
  _selectAll = null;
  anchorRowIndex;
  rangeRowIndex;
  filterTimeout;
  initialized;
  rowTouched;
  restoringSort;
  restoringFilter;
  stateRestored;
  columnOrderStateRestored;
  columnWidthsState;
  tableWidthState;
  overlaySubscription;
  resizeColumnElement;
  columnResizing = false;
  rowGroupHeaderStyleObject = {};
  id = UniqueComponentId();
  styleElement;
  overlayService = inject(OverlayService);
  filterService = inject(FilterService);
  tableService = inject(TableService);
  _componentStyle = inject(TableStyle);
  bindDirectiveInstance = inject(Bind2, { self: true });
  constructor() {
    super();
    effect(() => {
      const initialRows = this.rows();
      untracked(() => {
        if (this._defaultRows === void 0 && initialRows !== void 0) this._defaultRows = initialRows;
      });
    });
    effect(() => {
      const val = this.valueInput();
      untracked(() => {
        if (val !== void 0) {
          if (this.isStateful() && !this.stateRestored && isPlatformBrowser(this.platformId)) this.restoreState();
          this.value = val;
          if (!this.lazy()) {
            this.totalRecords.set(this.value ? this.value.length : 0);
            if (this.sortMode() == "single" && (this.sortField || this.groupRowsBy())) this.sortSingle();
            else if (this.sortMode() == "multiple" && (this.multiSortMeta || this.groupRowsBy())) this.sortMultiple();
            else if (this.hasFilter()) this._filter();
          }
          this.tableService.onValueChange(val);
        }
      });
    });
    effect(() => {
      const cols = this.columnsInput();
      untracked(() => {
        if (cols !== void 0) {
          this.columns = cols;
          if (this.isStateful() && this.reorderableColumns() && !this.columnOrderStateRestored) this.restoreColumnOrder();
          this.tableService.onColumnsChange(this.columns);
        }
      });
    });
    effect(() => {
      const val = this.sortFieldInput();
      untracked(() => {
        if (val !== void 0) {
          this.sortField = val;
          if (!this.lazy() || this.initialized) {
            if (this.sortMode() === "single") this.sortSingle();
          }
        }
      });
    });
    effect(() => {
      this.groupRowsBy();
      untracked(() => {
        if (!this.lazy() || this.initialized) {
          if (this.sortMode() === "single") this.sortSingle();
        }
      });
    });
    effect(() => {
      const val = this.sortOrderInput();
      untracked(() => {
        this.sortOrder = val;
        if (!this.lazy() || this.initialized) {
          if (this.sortMode() === "single") this.sortSingle();
        }
      });
    });
    effect(() => {
      this.groupRowsByOrder();
      untracked(() => {
        if (!this.lazy() || this.initialized) {
          if (this.sortMode() === "single") this.sortSingle();
        }
      });
    });
    effect(() => {
      const val = this.multiSortMetaInput();
      untracked(() => {
        if (val !== void 0) {
          this.multiSortMeta = val;
          if (this.sortMode() === "multiple" && (this.initialized || !this.lazy() && !this.virtualScroll())) this.sortMultiple();
        }
      });
    });
    effect(() => {
      const val = this.selection();
      untracked(() => {
        if (val !== void 0) {
          if (!this.preventSelectionSetterPropagation) {
            this.updateSelectionKeys();
            this.tableService.onSelectionChange();
          }
          this.preventSelectionSetterPropagation = false;
        }
      });
    });
    effect(() => {
      const val = this.selectAllInput();
      untracked(() => {
        if (val !== null) {
          this._selectAll = val;
          if (!this.preventSelectionSetterPropagation) {
            this.updateSelectionKeys();
            this.tableService.onSelectionChange();
            if (this.isStateful()) this.saveState();
          }
          this.preventSelectionSetterPropagation = false;
        }
      });
    });
    effect(() => {
      const val = this.contextMenuSelectionInput();
      if (val !== void 0) this.contextMenuSelection = val;
    });
    effect(() => {
      const val = this.filtersInput();
      this.filters = val ?? {};
    });
    effect(() => {
      const val = this.expandedRowKeysInput();
      this.expandedRowKeys = val ?? {};
    });
    effect(() => {
      const val = this.editingRowKeysInput();
      this.editingRowKeys = val ?? {};
    });
  }
  _initialColWidths;
  _defaultRows;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    if (this.lazy() && this.lazyLoadOnInit()) {
      if (!this.virtualScroll()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
      if (this.restoringFilter) this.restoringFilter = false;
    }
    this.initialized = true;
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isStateful() && this.resizableColumns()) this.restoreColumnWidths();
    }
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator()) {
      const first = this.lazy() ? 0 : this.first();
      return _data.slice(first, first + this.rows());
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey() && this.selection()) {
      this.selectionKeys = {};
      if (Array.isArray(this.selection())) for (let data of this.selection()) this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey()))] = 1;
      else this.selectionKeys[String(ObjectUtils.resolveFieldData(this.selection(), this.dataKey()))] = 1;
    }
  }
  onPageChange(event) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.onPage.emit({
      first: this.first(),
      rows: this.rows()
    });
    if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) this.saveState();
    this.anchorRowIndex = null;
    if (this.scrollable()) this.resetScrollTop();
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode() === "single") {
      this.sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder();
      this.sortField = event.field;
      if (this.resetPageOnSort()) {
        this.first.set(0);
        if (this.scrollable()) this.resetScrollTop();
      }
      this.sortSingle();
    }
    if (this.sortMode() === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this.multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort()) {
            this.first.set(0);
            if (this.scrollable()) this.resetScrollTop();
          }
        } else sortMeta.order = sortMeta.order * -1;
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this.multiSortMeta = [];
          if (this.resetPageOnSort()) this.first.set(0);
        }
        this.multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder()
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) this.saveState();
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy();
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder();
    if (this.groupRowsBy() && this.sortField && this.groupRowsBy() !== this.sortField) {
      this.multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) this.restoringSort = false;
      if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
      else if (this.value) {
        if (this.customSort()) this.sortFunction.emit({
          data: this.value,
          mode: this.sortMode(),
          field,
          order
        });
        else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, field);
            let value2 = ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * (result || 0);
          });
          this.value = [...this.value];
        }
        if (this.hasFilter()) this._filter();
      }
      let sortMeta = {
        field,
        order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy()) {
      if (!this.multiSortMeta) this.multiSortMeta = [this.getGroupRowsMeta()];
      else if (this.multiSortMeta[0].field !== this.groupRowsBy()) this.multiSortMeta = [this.getGroupRowsMeta(), ...this.multiSortMeta];
    }
    if (this.multiSortMeta && this.multiSortMeta.length > 0) {
      if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
      else if (this.value) {
        if (this.customSort()) this.sortFunction.emit({
          data: this.value,
          mode: this.sortMode(),
          multiSortMeta: this.multiSortMeta
        });
        else {
          this.value.sort((data1, data2) => this.multisortField(data1, data2, this.multiSortMeta, 0));
          this.value = [...this.value];
        }
        if (this.hasFilter()) this._filter();
      }
      this.onSort.emit({ multisortmeta: this.multiSortMeta });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (ObjectUtils.compare(value1, value2, this.filterLocale()) === 0) return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return ObjectUtils.sort(value1, value2, order, this.filterLocale(), this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) if (this.multiSortMeta[i].field === field) return this.multiSortMeta[i];
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode() === "single") return this.sortField && this.sortField === field;
    else if (this.sortMode() === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) if (this.multiSortMeta[i].field == field) {
          sorted = true;
          break;
        }
      }
      return sorted;
    }
  }
  handleRowClick(event) {
    let target = event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || Qt(event.originalEvent.target)) return;
    if (this.selectionMode()) {
      let rowData = event.rowData;
      let rowIndex = event.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) this.clearSelectionRange(event.originalEvent);
        this.rangeRowIndex = rowIndex;
        this.selectRange(event.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) return;
        let metaSelection = this.rowTouched ? false : this.metaKeySelection();
        let dataKeyValue = this.dataKey() ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey())) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this.selection.set(null);
              this.selectionKeys = {};
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this.selection.set(this.selection().filter((val, i) => i != selectionIndex));
              if (dataKeyValue) delete this.selectionKeys[dataKeyValue];
            }
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row"
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this.selection.set(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) this.selection.set(this.selection() || []);
              else {
                this.selection.set([]);
                this.selectionKeys = {};
              }
              this.selection.set([...this.selection(), rowData]);
              if (dataKeyValue) this.selectionKeys[dataKeyValue] = 1;
            }
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          }
        } else if (this.selectionMode() === "single") {
          if (selected) {
            this.selection.set(null);
            this.selectionKeys = {};
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          } else {
            this.selection.set(rowData);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        } else if (this.selectionMode() === "multiple") {
          if (selected) {
            let selectionIndex = this.findIndexInSelection(rowData);
            this.selection.set(this.selection().filter((val, i) => i != selectionIndex));
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
            if (dataKeyValue) delete this.selectionKeys[dataKeyValue];
          } else {
            this.selection.set(this.selection() ? [...this.selection(), rowData] : [rowData]);
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
            if (dataKeyValue) this.selectionKeys[dataKeyValue] = 1;
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) this.saveState();
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu()) {
      const rowData = event.rowData;
      const showContextMenu = () => {
        this.contextMenu().show(event.originalEvent);
        this.contextMenu().hideCallback = () => {
          this.contextMenuSelection = null;
          this.contextMenuSelectionChange.emit(null);
          this.tableService.onContextMenu(null);
        };
      };
      this.contextMenuSelection = rowData;
      this.contextMenuSelectionChange.emit(rowData);
      this.tableService.onContextMenu(rowData);
      showContextMenu();
      this.onContextMenuSelect.emit({
        originalEvent: event.originalEvent,
        data: rowData,
        index: event.rowIndex
      });
    }
  }
  selectRange(event, rowIndex, isMetaKeySelection) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy() && this.paginator()) {
      rangeStart -= this.first();
      rangeEnd -= this.first();
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData) && !isMetaKeySelection) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) continue;
        rangeRowsData.push(rangeRowData);
        let dataKeyValue = this.dataKey() ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey())) : null;
        if (dataKeyValue) this.selectionKeys[dataKeyValue] = 1;
      }
    }
    if (rangeRowsData.length > 0) this.selection.set([...this.selection(), ...rangeRowsData]);
    this.onRowSelect.emit({
      originalEvent: event,
      data: rangeRowsData,
      type: "row"
    });
  }
  clearSelectionRange(event) {
    let rangeStart, rangeEnd;
    let rangeRowIndex = this.rangeRowIndex;
    let anchorRowIndex = this.anchorRowIndex;
    if (rangeRowIndex > anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (rangeRowIndex < anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    const indicesToRemove = /* @__PURE__ */ new Set();
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      if (selectionIndex !== -1) indicesToRemove.add(selectionIndex);
      let dataKeyValue = this.dataKey() ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey())) : null;
      if (dataKeyValue) delete this.selectionKeys[dataKeyValue];
      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: "row"
      });
    }
    this.selection.set(this.selection().filter((_, i) => !indicesToRemove.has(i)));
  }
  isSelected(rowData) {
    if (rowData && this.selection()) {
      if (this.dataKey()) return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey())] !== void 0;
      else if (Array.isArray(this.selection())) return this.findIndexInSelection(rowData) > -1;
      else return this.equals(rowData, this.selection());
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    const sel = this.selection();
    if (sel && sel.length) {
      for (let i = 0; i < sel.length; i++) if (this.equals(rowData, sel[i])) {
        index = i;
        break;
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable() && !this.rowSelectable()({
      data,
      index
    })) return false;
    return true;
  }
  toggleRowWithRadio(event, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection() != rowData) {
      if (!this.isRowSelectable(rowData, event.rowIndex)) return;
      this.selection.set(rowData);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
      if (this.dataKey()) {
        this.selectionKeys = {};
        this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey()))] = 1;
      }
    } else {
      this.selection.set(null);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) this.saveState();
  }
  toggleRowWithCheckbox(event, rowData) {
    if (!this.selection()) this.selection.set([]);
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey() ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey())) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this.selection.set(this.selection().filter((val, i) => i != selectionIndex));
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) delete this.selectionKeys[dataKeyValue];
    } else {
      if (!this.isRowSelectable(rowData, event.rowIndex)) return;
      this.selection.set(this.selection() ? [...this.selection(), rowData] : [rowData]);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) this.selectionKeys[dataKeyValue] = 1;
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) this.saveState();
  }
  toggleRowsWithCheckbox({ originalEvent }, check) {
    if (this._selectAll !== null) this.selectAllChange.emit({
      originalEvent,
      checked: check
    });
    else {
      const data = this.selectionPageOnly() ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly() && this.selection() ? this.selection().filter((s) => !data.some((d) => this.equals(s, d))) : [];
      const isSelectable = (rowData, index) => (!this.rowSelectable() || this.rowSelectable()({
        data: rowData,
        index
      })) && !this.isRowCheckboxDisabled(rowData);
      if (check) {
        selection = this.frozenValue() ? [
          ...selection,
          ...this.frozenValue(),
          ...data
        ] : [...selection, ...data];
        selection = selection.filter((rowData, index) => isSelectable(rowData, index));
      }
      const previousSelection = this.selection() || [];
      const selectedKeys = new Set(previousSelection.map((s) => this.getSelectionKey(s)));
      const alreadyIncluded = new Set(selection.map((s) => this.getSelectionKey(s)));
      (this.frozenValue() ? [...this.frozenValue(), ...data] : data).forEach((d, index) => {
        const key = this.getSelectionKey(d);
        if (!isSelectable(d, index) && selectedKeys.has(key) && !alreadyIncluded.has(key)) {
          selection.push(d);
          alreadyIncluded.add(key);
        }
      });
      this.preventSelectionSetterPropagation = true;
      this.selection.set(selection);
      this.updateSelectionKeys();
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent,
        checked: check
      });
      if (this.isStateful()) this.saveState();
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy() === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey());
  }
  getSelectionKey(data) {
    return this.dataKey() && this.compareSelectionBy() !== "equals" ? String(ObjectUtils.resolveFieldData(data, this.dataKey())) : data;
  }
  setRowCheckboxDisabled(rowData, disabled) {
    const key = this.getSelectionKey(rowData);
    if (disabled) this.disabledSelectionKeys.add(key);
    else this.disabledSelectionKeys.delete(key);
  }
  isRowCheckboxDisabled(rowData) {
    return this.disabledSelectionKeys.has(this.getSelectionKey(rowData));
  }
  filter(value, field, matchMode) {
    if (this.filterTimeout) clearTimeout(this.filterTimeout);
    if (!this.isFilterBlank(value)) this.filters[field] = {
      value,
      matchMode,
      applyFilter: true
    };
    else if (this.filters[field]) delete this.filters[field];
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay());
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) this.first.set(0);
    if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
    else {
      if (!this.value) return;
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator()) this.totalRecords.set(this.value ? this.value.length : 0);
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields()) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields() || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) if (Object.prototype.hasOwnProperty.call(this.filters, prop) && prop !== "global") {
            localFiltered = true;
            let filterField = prop;
            let filterMeta = this.filters[filterField];
            if (Array.isArray(filterMeta)) for (let meta of filterMeta) {
              localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
              if (meta.operator === FilterOperator.OR && localMatch || meta.operator === FilterOperator.AND && !localMatch) break;
            }
            else localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
            if (!localMatch) break;
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) for (let j = 0; j < globalFilterFieldsArray.length; j++) {
            let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
            globalMatch = this.filterService.filters[this.filters["global"].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters["global"].value, this.filterLocale());
            if (globalMatch) break;
          }
          let matches;
          if (this.filters["global"]) matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          else matches = localFiltered && localMatch;
          if (matches) this.filteredValue.push(this.value[i]);
        }
        if (this.filteredValue.length === this.value.length) this.filteredValue = null;
        if (this.paginator()) this.totalRecords.set(this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0);
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) this.saveState();
    if (this.restoringFilter) this.restoringFilter = false;
    this.cd.markForCheck();
    if (this.scrollable()) this.resetScrollTop();
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale());
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) if (Object.prototype.hasOwnProperty.call(this.filters, prop)) {
      empty = false;
      break;
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first(),
      rows: this.rows(),
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this.sortField = null;
    this.sortOrder = this.defaultSortOrder();
    this.multiSortMeta = null;
    this.tableService.onSort(null);
    this.clearFilterValues();
    this.filteredValue = null;
    this.first.set(0);
    if (this._defaultRows !== void 0 && this.rows() !== this._defaultRows) this.rows.set(this._defaultRows);
    if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
    else this.totalRecords.set(this.value ? this.value.length : 0);
    this.tableService.onValueChange(this.value);
  }
  clearFilterValues() {
    for (const [, filterMetadata] of Object.entries(this.filters)) if (Array.isArray(filterMetadata)) for (let filter of filterMetadata) filter.value = null;
    else if (filterMetadata) filterMetadata.value = null;
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader()] || column.header || column.field;
  }
  exportCSV(options) {
    let data;
    let csv = "";
    let columns = this.columns;
    if (options && options.selectionOnly) data = this.selection() || [];
    else if (options && options.allValues) data = this.value || [];
    else {
      data = this.filteredValue || this.value;
      if (this.frozenValue()) data = data ? [...this.frozenValue(), ...data] : this.frozenValue();
    }
    const exportableColumns = columns.filter((column) => column.exportable !== false && column.field);
    csv += exportableColumns.map((column) => '"' + this.getExportHeader(column) + '"').join(this.csvSeparator());
    const body = data.map((record) => exportableColumns.map((column) => {
      let cellData = ObjectUtils.resolveFieldData(record, column.field);
      if (cellData != null) {
        if (this.exportFunction()) cellData = this.exportFunction()({
          data: cellData,
          field: column.field
        });
        else cellData = String(cellData).replace(/"/g, '""');
      } else cellData = "";
      return '"' + cellData + '"';
    }).join(this.csvSeparator())).join("\n");
    if (body.length) csv += "\n" + body;
    let blob = new Blob([new Uint8Array([
      239,
      187,
      191
    ]), csv], { type: "text/csv;charset=utf-8;" });
    let link = this.renderer.createElement("a");
    link.style.display = "none";
    this.renderer.appendChild(this.document.body, link);
    if (link.download !== void 0) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", this.exportFilename() + ".csv");
      link.click();
    } else {
      csv = "data:text/csv;charset=utf-8," + csv;
      this.document.defaultView?.open(encodeURI(csv));
    }
    this.renderer.removeChild(this.document.body, link);
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event), {
      rows: event.last - event.first
    }));
  }
  resetScrollTop() {
    if (this.virtualScroll()) this.scrollToVirtualIndex(0);
    else this.scrollTo({ top: 0 });
  }
  scrollToVirtualIndex(index) {
    this.scroller()?.scrollToIndex(index);
  }
  scrollTo(options) {
    if (this.virtualScroll()) this.scroller()?.scrollTo(options);
    else if (this.wrapperViewChild()?.nativeElement) {
      if (this.wrapperViewChild().nativeElement.scrollTo) this.wrapperViewChild().nativeElement.scrollTo(options);
      else {
        this.wrapperViewChild().nativeElement.scrollLeft = options.left;
        this.wrapperViewChild().nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) this.documentEditListener = this.renderer.listen(this.document, "click", (event) => {
      if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
        if (!this.$unstyled()) DomHandler.removeClass(this.editingCell, "p-cell-editing");
        ce(this.editingCell, "data-p-cell-editing", "false");
        this.editingCell = null;
        this.onEditComplete.emit({
          field: this.editingCellField,
          data: this.editingCellData,
          originalEvent: event,
          index: this.editingCellRowIndex
        });
        this.editingCellField = null;
        this.editingCellData = null;
        this.editingCellRowIndex = null;
        this.unbindDocumentEditListener();
        this.cd.markForCheck();
        if (this.overlaySubscription) this.overlaySubscription.unsubscribe();
      }
      this.selfClick = false;
    });
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey()));
    this.editingRowKeys = __spreadProps(__spreadValues({}, this.editingRowKeys), {
      [dataKeyValue]: true
    });
  }
  saveRowEdit(rowData, rowElement) {
    if (DomHandler.find(rowElement, ".ng-invalid.ng-dirty").length === 0) {
      let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey()));
      const rest = __spreadValues({}, this.editingRowKeys);
      delete rest[dataKeyValue];
      this.editingRowKeys = rest;
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey()));
    const rest = __spreadValues({}, this.editingRowKeys);
    delete rest[dataKeyValue];
    this.editingRowKeys = rest;
  }
  toggleRow(rowData, event) {
    if (!this.dataKey() && !this.groupRowsBy()) throw new Error("dataKey or groupRowsBy must be defined to use row expansion");
    let dataKeyValue = this.groupRowsBy() ? String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy())) : String(ObjectUtils.resolveFieldData(rowData, this.dataKey()));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event,
        data: rowData
      });
    } else {
      if (this.rowExpandMode() === "single") this.expandedRowKeys = {};
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event,
        data: rowData
      });
    }
    if (event) event.preventDefault();
    if (this.isStateful()) this.saveState();
  }
  isRowExpanded(rowData) {
    return this.groupRowsBy() ? this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy()))] === true : this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey()))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey()))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode() === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode() === "multiple";
  }
  onColumnResizeBegin(event) {
    let containerLeft = DomHandler.getOffset(this.el?.nativeElement).left;
    this.resizeColumnElement = event.target.closest("th");
    this.columnResizing = true;
    if (event.type == "touchstart") this.lastResizerHelperX = event.changedTouches[0].clientX - containerLeft + this.el?.nativeElement.scrollLeft;
    else this.lastResizerHelperX = event.pageX - containerLeft + this.el?.nativeElement.scrollLeft;
    this.onColumnResize(event);
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = DomHandler.getOffset(this.el?.nativeElement).left;
    if (!this.$unstyled()) DomHandler.addClass(this.el?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild().nativeElement.style.height = this.el?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild().nativeElement.style.top = "0px";
    if (event.type == "touchmove") this.resizeHelperViewChild().nativeElement.style.left = event.changedTouches[0].clientX - containerLeft + this.el?.nativeElement.scrollLeft + "px";
    else this.resizeHelperViewChild().nativeElement.style.left = event.pageX - containerLeft + this.el?.nativeElement.scrollLeft + "px";
    this.resizeHelperViewChild().nativeElement.style.display = "block";
  }
  onColumnResizeEnd() {
    const isRTL = getComputedStyle(this.el?.nativeElement ?? document.documentElement).direction === "rtl";
    const rawDelta = this.resizeHelperViewChild()?.nativeElement.offsetLeft - this.lastResizerHelperX;
    const delta = isRTL ? -rawDelta : rawDelta;
    const newColumnWidth = this.resizeColumnElement.offsetWidth + delta;
    const elementMinWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, "");
    if (newColumnWidth >= (elementMinWidth ? parseFloat(elementMinWidth) : 15)) {
      if (this.columnResizeMode() === "fit") {
        const nextColumnWidth = this.resizeColumnElement.nextElementSibling.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) this.resizeTableCells(newColumnWidth, nextColumnWidth);
      } else if (this.columnResizeMode() === "expand") {
        this._initialColWidths = this._totalTableWidth();
        const tableWidth = this.tableViewChild()?.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + "px");
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta
      });
      if (this.isStateful()) this.saveState();
    }
    this.resizeHelperViewChild().nativeElement.style.display = "none";
    DomHandler.removeClass(this.el?.nativeElement, "p-unselectable-text");
  }
  _totalTableWidth() {
    let widths = [];
    const tableHead = DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="thead"]');
    DomHandler.find(tableHead, "tr > th").forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    return widths;
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild()?.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild()?.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns() && this.draggedColumn && dropHeader) event.preventDefault();
  }
  onColumnDragOver(event, dropHeader) {
    if (this.reorderableColumns() && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = DomHandler.getOffset(this.el?.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild().nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild().nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild().nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild().nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild().nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild().nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild().nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild().nativeElement.style.display = "block";
      } else event.dataTransfer.dropEffect = "none";
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns() && this.draggedColumn) {
      event.preventDefault();
      this.reorderIndicatorUpViewChild().nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild().nativeElement.style.display = "none";
    }
  }
  onColumnDragEnd(event) {
    if (this.reorderableColumns() && this.draggedColumn) {
      this.reorderIndicatorUpViewChild().nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild().nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "preorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) allowDrop = false;
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) dropIndex = dropIndex + 1;
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) dropIndex = dropIndex - 1;
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) setTimeout(() => {
          this.saveState();
        });
      }
      if (this.resizableColumns() && this.resizeColumnElement) {
        let width = this.columnResizeMode() === "expand" ? this._initialColWidths : this._totalTableWidth();
        ObjectUtils.reorderArray(width, dragIndex + 1, dropIndex + 1);
        this.updateStyleElement(width, dragIndex, 0, 0);
      }
      this.reorderIndicatorUpViewChild().nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild().nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = DomHandler.index(this.resizeColumnElement);
    let width = this.columnResizeMode() === "expand" ? this._initialColWidths : this._totalTableWidth();
    this.updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth);
  }
  updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth) {
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = "";
    width.forEach((width2, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width2;
      let style2 = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style2}
                }
            `;
    });
    this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
  }
  onRowDragStart(event, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event.dataTransfer.setData("text", "b");
  }
  onRowDragOver(event, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = DomHandler.getOffset(rowElement).top;
      let pageY = event.pageY;
      let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
        this.droppedRowIndex = index;
        if (prevRowElement && !this.$unstyled()) DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else if (!this.$unstyled()) DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
      } else {
        if (prevRowElement && !this.$unstyled()) DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else if (!this.$unstyled()) DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        this.droppedRowIndex = index + 1;
        if (!this.$unstyled()) DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
      }
    }
  }
  onRowDragLeave(event, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      if (!this.$unstyled()) DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
    }
    if (!this.$unstyled()) DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
    if (!this.$unstyled()) DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
  }
  onRowDragEnd(event) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll()) this.value = [...this.value];
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex
      });
    }
    this.onRowDragLeave(event, rowElement);
    this.onRowDragEnd(event);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getVirtualScrollerSpacerStyle(scrollerOptions) {
    return `height: calc(${scrollerOptions.spacerStyle.height} - ${scrollerOptions.rows.length * scrollerOptions.itemSize}px)`;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) switch (this.stateStorage()) {
      case "local":
        return window.localStorage;
      case "session":
        return window.sessionStorage;
      default:
        throw new Error(this.stateStorage() + ' is not a valid value for the state storage, supported values are "local" and "session".');
    }
    else throw new Error("Browser storage is not available in the server side.");
  }
  isStateful() {
    return this.stateKey() != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state = {};
    if (this.paginator()) {
      state.first = this.first();
      state.rows = this.rows();
    }
    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) state.multiSortMeta = this.multiSortMeta;
    if (this.hasFilter()) state.filters = this.filters;
    if (this.resizableColumns()) this.saveColumnWidths(state);
    if (this.reorderableColumns()) this.saveColumnOrder(state);
    if (this.selection()) state.selection = this.selection();
    if (Object.keys(this.expandedRowKeys).length) state.expandedRowKeys = this.expandedRowKeys;
    storage.setItem(this.stateKey(), JSON.stringify(state));
    this.onStateSave.emit(state);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey()) storage.removeItem(this.stateKey());
  }
  restoreState() {
    const stateString = this.getStorage().getItem(this.stateKey());
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function(key, value) {
      if (typeof value === "string" && dateFormat.test(value)) return new Date(value);
      return value;
    };
    if (stateString) {
      let state = JSON.parse(stateString, reviver);
      if (this.paginator()) {
        if (this.first() !== void 0) this.first.set(state.first);
        if (this.rows() !== void 0) this.rows.set(state.rows);
      }
      if (state.sortField) {
        this.restoringSort = true;
        this.sortField = state.sortField;
        this.sortOrder = state.sortOrder;
      }
      if (state.multiSortMeta) {
        this.restoringSort = true;
        this.multiSortMeta = state.multiSortMeta;
      }
      if (state.filters) {
        this.restoringFilter = true;
        for (const key in state.filters) if (Object.prototype.hasOwnProperty.call(state.filters, key) && (state.filters[key]["value"] || state.filters[key][0]["value"])) {
          if (Array.isArray(state.filters[key])) state.filters[key][0]["applyFilter"] = true;
          else state.filters[key]["applyFilter"] = true;
        }
        this.filters = state.filters;
      }
      if (this.resizableColumns()) {
        this.columnWidthsState = state.columnWidths;
        this.tableWidthState = state.tableWidth;
      }
      if (state.expandedRowKeys) this.expandedRowKeys = state.expandedRowKeys;
      if (state.selection) Promise.resolve(null).then(() => this.selection.set(state.selection));
      this.stateRestored = true;
      this.onStateRestore.emit(state);
    }
  }
  saveColumnWidths(state) {
    let widths = [];
    let headers = [];
    const container = this.el?.nativeElement;
    if (container) headers = DomHandler.find(container, '[data-pc-section="thead"] > tr > th');
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(",");
    if (this.columnResizeMode() === "expand" && this.tableViewChild()) state.tableWidth = DomHandler.getOuterWidth(this.tableViewChild().nativeElement);
  }
  setResizeTableWidth(width) {
    this.tableViewChild().nativeElement.style.width = width;
    this.tableViewChild().nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(",");
      if (this.columnResizeMode() === "expand" && this.tableWidthState) this.setResizeTableWidth(this.tableWidthState + "px");
      if (ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = "";
        widths.forEach((width, index) => {
          let style2 = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style2}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map((column) => {
        columnOrder.push(column.field || column.key);
      });
      state.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const stateString = this.getStorage().getItem(this.stateKey());
    if (stateString) {
      let columnOrder = JSON.parse(stateString).columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map((key) => {
          let col = this.findColumnByKey(key);
          if (col) reorderedColumns.push(col);
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) for (let col of this.columns) if (col.key === key || col.field === key) return col;
    else continue;
    else return null;
  }
  createStyleElement() {
    this.styleElement = this.renderer.createElement("style");
    this.styleElement.type = "text/css";
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    this.renderer.appendChild(this.document.head, this.styleElement);
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy(),
      order: this.groupRowsByOrder()
    };
  }
  destroyStyleElement() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
  }
  get dataP() {
    return this.cn({
      scrollable: this.scrollable(),
      "flex-scrollable": this.scrollable() && this.scrollHeight() === "flex",
      [this.size()]: this.size(),
      loading: this.loading(),
      empty: this.isEmpty()
    });
  }
  static \u0275fac = function Table_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Table2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["header"];
    const _c1 = ["headergrouped"];
    const _c2 = ["body"];
    const _c3 = ["loadingbody"];
    const _c4 = ["caption"];
    const _c5 = ["footer"];
    const _c6 = ["footergrouped"];
    const _c7 = ["summary"];
    const _c8 = ["colgroup"];
    const _c9 = ["expandedrow"];
    const _c10 = ["groupheader"];
    const _c11 = ["groupfooter"];
    const _c12 = ["frozenexpandedrow"];
    const _c13 = ["frozenheader"];
    const _c14 = ["frozenbody"];
    const _c15 = ["frozenfooter"];
    const _c16 = ["frozencolgroup"];
    const _c17 = ["emptymessage"];
    const _c18 = ["paginatorleft"];
    const _c19 = ["paginatorright"];
    const _c20 = ["paginatordropdownitem"];
    const _c21 = ["loadingicon"];
    const _c22 = ["reorderindicatorupicon"];
    const _c23 = ["reorderindicatordownicon"];
    const _c24 = ["sorticon"];
    const _c25 = ["checkboxicon"];
    const _c26 = ["headercheckboxicon"];
    const _c27 = ["paginatordropdownicon"];
    const _c28 = ["paginatorfirstpagelinkicon"];
    const _c29 = ["paginatorlastpagelinkicon"];
    const _c30 = ["paginatorpreviouspagelinkicon"];
    const _c31 = ["paginatornextpagelinkicon"];
    const _c32 = ["resizeHelper"];
    const _c33 = ["reorderIndicatorUp"];
    const _c34 = ["reorderIndicatorDown"];
    const _c35 = ["wrapper"];
    const _c36 = ["table"];
    const _c37 = ["thead"];
    const _c38 = ["tfoot"];
    const _c39 = ["scroller"];
    const _c40 = (a0, a1) => ({
      $implicit: a0,
      options: a1
    });
    const _c41 = (a0) => ({
      columns: a0
    });
    const _c42 = (a0) => ({
      $implicit: a0
    });
    function Table_Conditional_0_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "i", 17);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.loadingIcon()));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
      }
    }
    function Table_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 21);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
        i010.\u0275\u0275property("spin", true)("pBind", ctx_r0.ptm("loadingIcon"));
      }
    }
    function Table_Conditional_0_Conditional_2_Conditional_1_1_ng_template_0_Template(rf, ctx) {
    }
    function Table_Conditional_0_Conditional_2_Conditional_1_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_0_Conditional_2_Conditional_1_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Table_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "span", 17);
        i010.\u0275\u0275template(1, Table_Conditional_0_Conditional_2_Conditional_1_1_Template, 1, 0, null, 22);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("loadingIcon"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("loadingIcon"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingIconTemplate());
      }
    }
    function Table_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, Table_Conditional_0_Conditional_2_Conditional_0_Template, 1, 4, ":svg:svg", 20);
        i010.\u0275\u0275conditionalCreate(1, Table_Conditional_0_Conditional_2_Conditional_1_Template, 2, 4, "span", 15);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275conditional(!ctx_r0.loadingIconTemplate() ? 0 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.loadingIconTemplate() ? 1 : -1);
      }
    }
    function Table_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "div", 17);
        i010.\u0275\u0275animateLeave("p-overlay-mask-leave-active");
        i010.\u0275\u0275animateEnter("p-overlay-mask-enter-active");
        i010.\u0275\u0275conditionalCreate(1, Table_Conditional_0_Conditional_1_Template, 1, 3, "i", 15);
        i010.\u0275\u0275conditionalCreate(2, Table_Conditional_0_Conditional_2_Template, 2, 2);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("mask"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("mask"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.loadingIcon() ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(!ctx_r0.loadingIcon() ? 2 : -1);
      }
    }
    function Table_Conditional_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "div", 17);
        i010.\u0275\u0275template(1, Table_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 22);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("header"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("header"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.captionTemplate());
      }
    }
    function Table_Conditional_2_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_2_Conditional_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate());
      }
    }
    function Table_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_1_ng_template_0_Template, 1, 1, "ng-template", null, 2, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_2_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_2_Conditional_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate());
      }
    }
    function Table_Conditional_2_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_2_ng_template_0_Template, 1, 1, "ng-template", null, 3, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_2_Conditional_3_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_2_Conditional_3_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate());
      }
    }
    function Table_Conditional_2_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_3_ng_template_0_Template, 1, 1, "ng-template", null, 4, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_2_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_2_Conditional_4_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate());
      }
    }
    function Table_Conditional_2_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_4_ng_template_0_Template, 1, 1, "ng-template", null, 5, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_2_Conditional_5_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_2_Conditional_5_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate());
      }
    }
    function Table_Conditional_2_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_2_Conditional_5_ng_template_0_Template, 1, 1, "ng-template", null, 6, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-paginator", 23);
        i010.\u0275\u0275listener("onPageChange", function Table_Conditional_2_Template_p_paginator_onPageChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onPageChange($event));
        });
        i010.\u0275\u0275conditionalCreate(1, Table_Conditional_2_Conditional_1_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(2, Table_Conditional_2_Conditional_2_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(3, Table_Conditional_2_Conditional_3_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(4, Table_Conditional_2_Conditional_4_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(5, Table_Conditional_2_Conditional_5_Template, 2, 0);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("pcPaginator"), ctx_r0.paginatorStyleClass()));
        i010.\u0275\u0275property("rows", ctx_r0.rows())("first", ctx_r0.first())("totalRecords", ctx_r0.totalRecords())("pageLinkSize", ctx_r0.pageLinks())("alwaysShow", ctx_r0.alwaysShowPaginator())("rowsPerPageOptions", ctx_r0.rowsPerPageOptions())("templateLeft", ctx_r0.paginatorLeftTemplate())("templateRight", ctx_r0.paginatorRightTemplate())("appendTo", ctx_r0.paginatorDropdownAppendTo())("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight())("currentPageReportTemplate", ctx_r0.currentPageReportTemplate())("showFirstLastIcon", ctx_r0.showFirstLastIcon())("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate())("showCurrentPageReport", ctx_r0.showCurrentPageReport())("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown())("showJumpToPageInput", ctx_r0.showJumpToPageInput())("showPageLinks", ctx_r0.showPageLinks())("locale", ctx_r0.paginatorLocale())("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorDropdownIconTemplate() ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorFirstPageLinkIconTemplate() ? 2 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorPreviousPageLinkIconTemplate() ? 3 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorLastPageLinkIconTemplate() ? 4 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorNextPageLinkIconTemplate() ? 5 : -1);
      }
    }
    function Table_Conditional_5_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_5_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 25);
      }
      if (rf & 2) {
        const items_r4 = ctx.$implicit;
        const scrollerOptions_r5 = ctx.options;
        i010.\u0275\u0275nextContext(2);
        const buildInTable_r6 = i010.\u0275\u0275reference(8);
        i010.\u0275\u0275property("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", i010.\u0275\u0275pureFunction2(2, _c40, items_r4, scrollerOptions_r5));
      }
    }
    function Table_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-scroller", 24, 7);
        i010.\u0275\u0275listener("onLazyLoad", function Table_Conditional_5_Template_p_scroller_onLazyLoad_0_listener($event) {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onLazyItemLoad($event));
        });
        i010.\u0275\u0275template(2, Table_Conditional_5_ng_template_2_Template, 1, 5, "ng-template", null, 8, i010.\u0275\u0275templateRefExtractor);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275styleMap(ctx_r0.scrollerStyle());
        i010.\u0275\u0275property("items", ctx_r0.processedData)("columns", ctx_r0.columns)("scrollHeight", ctx_r0.scrollerScrollHeight())("itemSize", ctx_r0.virtualScrollItemSize())("step", ctx_r0.rows())("delay", ctx_r0.scrollerDelay())("inline", true)("autoSize", true)("lazy", ctx_r0.lazy())("loaderDisabled", true)("showSpacer", false)("showLoader", !!ctx_r0.loadingBodyTemplate())("options", ctx_r0.virtualScrollOptions())("pt", ctx_r0.ptm("virtualScroller"));
      }
    }
    function Table_Conditional_6_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_6_ng_container_0_Template, 1, 0, "ng-container", 25);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        const buildInTable_r6 = i010.\u0275\u0275reference(8);
        i010.\u0275\u0275property("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", i010.\u0275\u0275pureFunction2(4, _c40, ctx_r0.processedData, i010.\u0275\u0275pureFunction1(2, _c41, ctx_r0.columns)));
      }
    }
    function Table_ng_template_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_ng_template_7_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_ng_template_7_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "tbody", 32);
      }
      if (rf & 2) {
        const scrollerOptions_r7 = i010.\u0275\u0275nextContext().options;
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("tbody"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("tbody"))("value", ctx_r0.frozenValue())("frozenRows", true)("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.frozenBodyTemplate())("unstyled", ctx_r0.unstyled())("frozen", true);
        i010.\u0275\u0275attribute("data-p-virtualscroll", ctx_r0.virtualScroll());
      }
    }
    function Table_ng_template_7_Conditional_8_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "tbody", 27);
      }
      if (rf & 2) {
        const scrollerOptions_r7 = i010.\u0275\u0275nextContext().options;
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275styleMap(ctx_r0.getVirtualScrollerSpacerStyle(scrollerOptions_r7));
        i010.\u0275\u0275classMap(ctx_r0.cx("virtualScrollerSpacer"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("virtualScrollerSpacer"));
      }
    }
    function Table_ng_template_7_Conditional_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_ng_template_7_Conditional_9_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "tfoot", 27, 11);
        i010.\u0275\u0275template(2, Table_ng_template_7_Conditional_9_ng_container_2_Template, 1, 0, "ng-container", 25);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const scrollerOptions_r7 = i010.\u0275\u0275nextContext().options;
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275styleMap(ctx_r0.sx("tfoot"));
        i010.\u0275\u0275classMap(ctx_r0.cx("footer"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("tfoot"));
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.footerGroupedTemplate() || ctx_r0.footerTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(7, _c42, scrollerOptions_r7.columns));
      }
    }
    function Table_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "table", 26, 9);
        i010.\u0275\u0275template(2, Table_ng_template_7_ng_container_2_Template, 1, 0, "ng-container", 25);
        i010.\u0275\u0275elementStart(3, "thead", 27, 10);
        i010.\u0275\u0275template(5, Table_ng_template_7_ng_container_5_Template, 1, 0, "ng-container", 25);
        i010.\u0275\u0275elementEnd();
        i010.\u0275\u0275conditionalCreate(6, Table_ng_template_7_Conditional_6_Template, 1, 10, "tbody", 28);
        i010.\u0275\u0275element(7, "tbody", 29);
        i010.\u0275\u0275conditionalCreate(8, Table_ng_template_7_Conditional_8_Template, 1, 5, "tbody", 30);
        i010.\u0275\u0275conditionalCreate(9, Table_ng_template_7_Conditional_9_Template, 3, 9, "tfoot", 31);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const scrollerOptions_r7 = ctx.options;
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275styleMap(ctx_r0.tableStyle());
        i010.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("table"), ctx_r0.tableStyleClass()));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("table"));
        i010.\u0275\u0275attribute("id", ctx_r0.id + "-table");
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.colGroupTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(29, _c42, scrollerOptions_r7.columns));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275styleMap(ctx_r0.sx("thead"));
        i010.\u0275\u0275classMap(ctx_r0.cx("thead"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("thead"));
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headerGroupedTemplate() || ctx_r0.headerTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(31, _c42, scrollerOptions_r7.columns));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.showFrozenBody() ? 6 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275styleMap(scrollerOptions_r7.contentStyle);
        i010.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("tbody"), scrollerOptions_r7.contentStyleClass));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("tbody"))("value", ctx_r0.dataToRender(scrollerOptions_r7.rows))("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.bodyTemplate())("scrollerOptions", scrollerOptions_r7)("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("data-p-virtualscroll", ctx_r0.virtualScroll());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(scrollerOptions_r7.spacerStyle ? 8 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.showFooter() ? 9 : -1);
      }
    }
    function Table_Conditional_9_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_9_Conditional_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate());
      }
    }
    function Table_Conditional_9_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_1_ng_template_0_Template, 1, 1, "ng-template", null, 2, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_9_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_9_Conditional_2_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate());
      }
    }
    function Table_Conditional_9_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_2_ng_template_0_Template, 1, 1, "ng-template", null, 3, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_9_Conditional_3_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_9_Conditional_3_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate());
      }
    }
    function Table_Conditional_9_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_3_ng_template_0_Template, 1, 1, "ng-template", null, 4, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_9_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_9_Conditional_4_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate());
      }
    }
    function Table_Conditional_9_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_4_ng_template_0_Template, 1, 1, "ng-template", null, 5, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_9_Conditional_5_ng_template_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_9_Conditional_5_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 22);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate());
      }
    }
    function Table_Conditional_9_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_9_Conditional_5_ng_template_0_Template, 1, 1, "ng-template", null, 6, i010.\u0275\u0275templateRefExtractor);
      }
    }
    function Table_Conditional_9_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-paginator", 23);
        i010.\u0275\u0275listener("onPageChange", function Table_Conditional_9_Template_p_paginator_onPageChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r8);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onPageChange($event));
        });
        i010.\u0275\u0275conditionalCreate(1, Table_Conditional_9_Conditional_1_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(2, Table_Conditional_9_Conditional_2_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(3, Table_Conditional_9_Conditional_3_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(4, Table_Conditional_9_Conditional_4_Template, 2, 0);
        i010.\u0275\u0275conditionalCreate(5, Table_Conditional_9_Conditional_5_Template, 2, 0);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("pcPaginator"), ctx_r0.paginatorStyleClass()));
        i010.\u0275\u0275property("rows", ctx_r0.rows())("first", ctx_r0.first())("totalRecords", ctx_r0.totalRecords())("pageLinkSize", ctx_r0.pageLinks())("alwaysShow", ctx_r0.alwaysShowPaginator())("rowsPerPageOptions", ctx_r0.rowsPerPageOptions())("templateLeft", ctx_r0.paginatorLeftTemplate())("templateRight", ctx_r0.paginatorRightTemplate())("appendTo", ctx_r0.paginatorDropdownAppendTo())("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight())("currentPageReportTemplate", ctx_r0.currentPageReportTemplate())("showFirstLastIcon", ctx_r0.showFirstLastIcon())("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate())("showCurrentPageReport", ctx_r0.showCurrentPageReport())("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown())("showJumpToPageInput", ctx_r0.showJumpToPageInput())("showPageLinks", ctx_r0.showPageLinks())("locale", ctx_r0.paginatorLocale())("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorDropdownIconTemplate() ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorFirstPageLinkIconTemplate() ? 2 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorPreviousPageLinkIconTemplate() ? 3 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorLastPageLinkIconTemplate() ? 4 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.paginatorNextPageLinkIconTemplate() ? 5 : -1);
      }
    }
    function Table_Conditional_10_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function Table_Conditional_10_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "div", 17);
        i010.\u0275\u0275template(1, Table_Conditional_10_ng_container_1_Template, 1, 0, "ng-container", 22);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("footer"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("footer"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.summaryTemplate());
      }
    }
    function Table_Conditional_11_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "div", 17, 12);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("columnResizeIndicator"));
        i010.\u0275\u0275styleProp("display", "none");
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("columnResizeIndicator"));
      }
    }
    function Table_Conditional_12_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 33);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("rowReorderIndicatorUp")["icon"]);
      }
    }
    function Table_Conditional_12_3_ng_template_0_Template(rf, ctx) {
    }
    function Table_Conditional_12_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_12_3_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Table_Conditional_12_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 34);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("rowReorderIndicatorDown")["icon"]);
      }
    }
    function Table_Conditional_12_7_ng_template_0_Template(rf, ctx) {
    }
    function Table_Conditional_12_7_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, Table_Conditional_12_7_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function Table_Conditional_12_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "span", 17, 13);
        i010.\u0275\u0275conditionalCreate(2, Table_Conditional_12_Conditional_2_Template, 1, 1, ":svg:svg", 33);
        i010.\u0275\u0275template(3, Table_Conditional_12_3_Template, 1, 0, null, 22);
        i010.\u0275\u0275elementEnd();
        i010.\u0275\u0275elementStart(4, "span", 17, 14);
        i010.\u0275\u0275conditionalCreate(6, Table_Conditional_12_Conditional_6_Template, 1, 1, ":svg:svg", 34);
        i010.\u0275\u0275template(7, Table_Conditional_12_7_Template, 1, 0, null, 22);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("rowReorderIndicatorUp"));
        i010.\u0275\u0275styleProp("display", "none");
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("rowReorderIndicatorUp"));
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275conditional(!ctx_r0.reorderIndicatorUpIconTemplate() ? 2 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275classMap(ctx_r0.cx("rowReorderIndicatorDown"));
        i010.\u0275\u0275styleProp("display", "none");
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("rowReorderIndicatorDown"));
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275conditional(!ctx_r0.reorderIndicatorDownIconTemplate() ? 6 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate());
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: Table2,
      selectors: [["p-table"]],
      contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i010.\u0275\u0275contentQuerySignal(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.headerGroupedTemplate, _c1, 4)(dirIndex, ctx.bodyTemplate, _c2, 4)(dirIndex, ctx.loadingBodyTemplate, _c3, 4)(dirIndex, ctx.captionTemplate, _c4, 4)(dirIndex, ctx.footerTemplate, _c5, 4)(dirIndex, ctx.footerGroupedTemplate, _c6, 4)(dirIndex, ctx.summaryTemplate, _c7, 4)(dirIndex, ctx.colGroupTemplate, _c8, 4)(dirIndex, ctx.expandedRowTemplate, _c9, 4)(dirIndex, ctx.groupHeaderTemplate, _c10, 4)(dirIndex, ctx.groupFooterTemplate, _c11, 4)(dirIndex, ctx.frozenExpandedRowTemplate, _c12, 4)(dirIndex, ctx.frozenHeaderTemplate, _c13, 4)(dirIndex, ctx.frozenBodyTemplate, _c14, 4)(dirIndex, ctx.frozenFooterTemplate, _c15, 4)(dirIndex, ctx.frozenColGroupTemplate, _c16, 4)(dirIndex, ctx.emptyMessageTemplate, _c17, 4)(dirIndex, ctx.paginatorLeftTemplate, _c18, 4)(dirIndex, ctx.paginatorRightTemplate, _c19, 4)(dirIndex, ctx.paginatorDropdownItemTemplate, _c20, 4)(dirIndex, ctx.loadingIconTemplate, _c21, 4)(dirIndex, ctx.reorderIndicatorUpIconTemplate, _c22, 4)(dirIndex, ctx.reorderIndicatorDownIconTemplate, _c23, 4)(dirIndex, ctx.sortIconTemplate, _c24, 4)(dirIndex, ctx.checkboxIconTemplate, _c25, 4)(dirIndex, ctx.headerCheckboxIconTemplate, _c26, 4)(dirIndex, ctx.paginatorDropdownIconTemplate, _c27, 4)(dirIndex, ctx.paginatorFirstPageLinkIconTemplate, _c28, 4)(dirIndex, ctx.paginatorLastPageLinkIconTemplate, _c29, 4)(dirIndex, ctx.paginatorPreviousPageLinkIconTemplate, _c30, 4)(dirIndex, ctx.paginatorNextPageLinkIconTemplate, _c31, 4);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance(32);
        }
      },
      viewQuery: function Table_Query(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275viewQuerySignal(ctx.resizeHelperViewChild, _c32, 5)(ctx.reorderIndicatorUpViewChild, _c33, 5)(ctx.reorderIndicatorDownViewChild, _c34, 5)(ctx.wrapperViewChild, _c35, 5)(ctx.tableViewChild, _c36, 5)(ctx.tableHeaderViewChild, _c37, 5)(ctx.tableFooterViewChild, _c38, 5)(ctx.scroller, _c39, 5);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance(8);
        }
      },
      hostVars: 3,
      hostBindings: function Table_HostBindings(rf, ctx) {
        if (rf & 2) {
          i010.\u0275\u0275attribute("data-p", ctx.dataP);
          i010.\u0275\u0275classMap(ctx.cx("root"));
        }
      },
      inputs: {
        frozenColumns: [1, "frozenColumns"],
        frozenValue: [1, "frozenValue"],
        tableStyle: [1, "tableStyle"],
        tableStyleClass: [1, "tableStyleClass"],
        paginator: [1, "paginator"],
        pageLinks: [1, "pageLinks"],
        rowsPerPageOptions: [1, "rowsPerPageOptions"],
        alwaysShowPaginator: [1, "alwaysShowPaginator"],
        paginatorPosition: [1, "paginatorPosition"],
        paginatorStyleClass: [1, "paginatorStyleClass"],
        paginatorDropdownAppendTo: [1, "paginatorDropdownAppendTo"],
        paginatorDropdownScrollHeight: [1, "paginatorDropdownScrollHeight"],
        currentPageReportTemplate: [1, "currentPageReportTemplate"],
        showCurrentPageReport: [1, "showCurrentPageReport"],
        showJumpToPageDropdown: [1, "showJumpToPageDropdown"],
        showJumpToPageInput: [1, "showJumpToPageInput"],
        showFirstLastIcon: [1, "showFirstLastIcon"],
        showPageLinks: [1, "showPageLinks"],
        defaultSortOrder: [1, "defaultSortOrder"],
        sortMode: [1, "sortMode"],
        resetPageOnSort: [1, "resetPageOnSort"],
        selectionMode: [1, "selectionMode"],
        selectionPageOnly: [1, "selectionPageOnly"],
        contextMenuSelectionInput: [1, "contextMenuSelection", "contextMenuSelectionInput"],
        dataKey: [1, "dataKey"],
        metaKeySelection: [1, "metaKeySelection"],
        rowSelectable: [1, "rowSelectable"],
        rowTrackBy: [1, "rowTrackBy"],
        lazy: [1, "lazy"],
        lazyLoadOnInit: [1, "lazyLoadOnInit"],
        compareSelectionBy: [1, "compareSelectionBy"],
        csvSeparator: [1, "csvSeparator"],
        exportFilename: [1, "exportFilename"],
        filtersInput: [1, "filters", "filtersInput"],
        globalFilterFields: [1, "globalFilterFields"],
        filterDelay: [1, "filterDelay"],
        filterLocale: [1, "filterLocale"],
        expandedRowKeysInput: [1, "expandedRowKeys", "expandedRowKeysInput"],
        editingRowKeysInput: [1, "editingRowKeys", "editingRowKeysInput"],
        rowExpandMode: [1, "rowExpandMode"],
        scrollable: [1, "scrollable"],
        rowGroupMode: [1, "rowGroupMode"],
        scrollHeight: [1, "scrollHeight"],
        virtualScroll: [1, "virtualScroll"],
        virtualScrollItemSize: [1, "virtualScrollItemSize"],
        virtualScrollOptions: [1, "virtualScrollOptions"],
        virtualScrollDelay: [1, "virtualScrollDelay"],
        frozenWidth: [1, "frozenWidth"],
        contextMenu: [1, "contextMenu"],
        resizableColumns: [1, "resizableColumns"],
        columnResizeMode: [1, "columnResizeMode"],
        reorderableColumns: [1, "reorderableColumns"],
        loading: [1, "loading"],
        loadingIcon: [1, "loadingIcon"],
        showLoader: [1, "showLoader"],
        rowHover: [1, "rowHover"],
        customSort: [1, "customSort"],
        showInitialSortBadge: [1, "showInitialSortBadge"],
        exportFunction: [1, "exportFunction"],
        exportHeader: [1, "exportHeader"],
        stateKey: [1, "stateKey"],
        stateStorage: [1, "stateStorage"],
        editMode: [1, "editMode"],
        groupRowsBy: [1, "groupRowsBy"],
        size: [1, "size"],
        showGridlines: [1, "showGridlines"],
        stripedRows: [1, "stripedRows"],
        groupRowsByOrder: [1, "groupRowsByOrder"],
        paginatorLocale: [1, "paginatorLocale"],
        valueInput: [1, "value", "valueInput"],
        columnsInput: [1, "columns", "columnsInput"],
        first: [1, "first"],
        rows: [1, "rows"],
        totalRecords: [1, "totalRecords"],
        sortFieldInput: [1, "sortField", "sortFieldInput"],
        sortOrderInput: [1, "sortOrder", "sortOrderInput"],
        multiSortMetaInput: [1, "multiSortMeta", "multiSortMetaInput"],
        selection: [1, "selection"],
        selectAllInput: [1, "selectAll", "selectAllInput"]
      },
      outputs: {
        contextMenuSelectionChange: "contextMenuSelectionChange",
        first: "firstChange",
        rows: "rowsChange",
        totalRecords: "totalRecordsChange",
        selection: "selectionChange",
        selectAllChange: "selectAllChange",
        onRowSelect: "onRowSelect",
        onRowUnselect: "onRowUnselect",
        onPage: "onPage",
        onSort: "onSort",
        onFilter: "onFilter",
        onLazyLoad: "onLazyLoad",
        onRowExpand: "onRowExpand",
        onRowCollapse: "onRowCollapse",
        onContextMenuSelect: "onContextMenuSelect",
        onColResize: "onColResize",
        onColReorder: "onColReorder",
        onRowReorder: "onRowReorder",
        onEditInit: "onEditInit",
        onEditComplete: "onEditComplete",
        onEditCancel: "onEditCancel",
        onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
        sortFunction: "sortFunction",
        onStateSave: "onStateSave",
        onStateRestore: "onStateRestore"
      },
      features: [i010.\u0275\u0275ProvidersFeature([
        TableService,
        TableStyle,
        {
          provide: TABLE_INSTANCE,
          useExisting: Table2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Table2
        }
      ]), i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature],
      decls: 13,
      vars: 15,
      consts: [["wrapper", ""], ["buildInTable", ""], ["dropdownicon", ""], ["firstpagelinkicon", ""], ["previouspagelinkicon", ""], ["lastpagelinkicon", ""], ["nextpagelinkicon", ""], ["scroller", ""], ["content", ""], ["table", ""], ["thead", ""], ["tfoot", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "class", "pBind"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "class", "locale", "pt", "unstyled"], [3, "pBind"], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "autoSize", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "pt"], [3, "class", "pBind", "display"], ["data-p-icon", "spinner", 3, "class", "spin", "pBind"], ["data-p-icon", "spinner", 3, "spin", "pBind"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "locale", "pt", "unstyled"], [3, "onLazyLoad", "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "autoSize", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "pBind"], ["role", "rowgroup", 3, "pBind"], ["role", "rowgroup", 3, "class", "pBind", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "unstyled", "frozen"], ["role", "rowgroup", 3, "pBind", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions", "unstyled"], ["role", "rowgroup", 3, "style", "class", "pBind"], ["role", "rowgroup", 3, "class", "style", "pBind"], ["role", "rowgroup", 3, "pBind", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "unstyled", "frozen"], ["data-p-icon", "arrow-down", 3, "pBind"], ["data-p-icon", "arrow-up", 3, "pBind"]],
      template: function Table_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275conditionalCreate(0, Table_Conditional_0_Template, 3, 5, "div", 15);
          i010.\u0275\u0275conditionalCreate(1, Table_Conditional_1_Template, 2, 4, "div", 15);
          i010.\u0275\u0275conditionalCreate(2, Table_Conditional_2_Template, 6, 27, "p-paginator", 16);
          i010.\u0275\u0275elementStart(3, "div", 17, 0);
          i010.\u0275\u0275conditionalCreate(5, Table_Conditional_5_Template, 4, 16, "p-scroller", 18);
          i010.\u0275\u0275conditionalCreate(6, Table_Conditional_6_Template, 1, 7, "ng-container");
          i010.\u0275\u0275template(7, Table_ng_template_7_Template, 10, 33, "ng-template", null, 1, i010.\u0275\u0275templateRefExtractor);
          i010.\u0275\u0275elementEnd();
          i010.\u0275\u0275conditionalCreate(9, Table_Conditional_9_Template, 6, 27, "p-paginator", 16);
          i010.\u0275\u0275conditionalCreate(10, Table_Conditional_10_Template, 2, 4, "div", 15);
          i010.\u0275\u0275conditionalCreate(11, Table_Conditional_11_Template, 2, 5, "div", 19);
          i010.\u0275\u0275conditionalCreate(12, Table_Conditional_12_Template, 8, 14);
        }
        if (rf & 2) {
          i010.\u0275\u0275conditional(ctx.showLoadingMask() ? 0 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.captionTemplate() ? 1 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.showTopPaginator() ? 2 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275styleMap(ctx.sx("tableContainer"));
          i010.\u0275\u0275classMap(ctx.cx("tableContainer"));
          i010.\u0275\u0275property("pBind", ctx.ptm("tableContainer"));
          i010.\u0275\u0275attribute("data-p", ctx.dataP);
          i010.\u0275\u0275advance(2);
          i010.\u0275\u0275conditional(ctx.virtualScroll() ? 5 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(!ctx.virtualScroll() ? 6 : -1);
          i010.\u0275\u0275advance(3);
          i010.\u0275\u0275conditional(ctx.showBottomPaginator() ? 9 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.summaryTemplate() ? 10 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.resizableColumns() ? 11 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.reorderableColumns() ? 12 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, PaginatorModule, i2$1.Paginator, ScrollerModule, i3$2.Scroller, FormsModule, BindModule, i1$3.Bind, Spinner, ArrowDown, ArrowUp, TableBody],
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(Table, [{
    type: Component10,
    args: [{
      selector: "p-table",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        PaginatorModule,
        ScrollerModule,
        FormsModule,
        BindModule,
        Spinner,
        ArrowDown,
        ArrowUp,
        TableBody
      ],
      template: `
        @if (showLoadingMask()) {
            <div [class]="cx('mask')" [pBind]="ptm('mask')" animate.enter="p-overlay-mask-enter-active" animate.leave="p-overlay-mask-leave-active">
                @if (loadingIcon()) {
                    <i [class]="cn(cx('loadingIcon'), loadingIcon())" [pBind]="ptm('loadingIcon')"></i>
                }
                @if (!loadingIcon()) {
                    @if (!loadingIconTemplate()) {
                        <svg data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" [pBind]="ptm('loadingIcon')" />
                    }
                    @if (loadingIconTemplate()) {
                        <span [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')">
                            <ng-template *ngTemplateOutlet="loadingIconTemplate()"></ng-template>
                        </span>
                    }
                }
            </div>
        }
        @if (captionTemplate()) {
            <div [class]="cx('header')" [pBind]="ptm('header')">
                <ng-container *ngTemplateOutlet="captionTemplate()"></ng-container>
            </div>
        }
        @if (showTopPaginator()) {
            <p-paginator
                [rows]="rows()!"
                [first]="first()!"
                [totalRecords]="totalRecords()"
                [pageLinkSize]="pageLinks()"
                [alwaysShow]="alwaysShowPaginator()"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions()"
                [templateLeft]="paginatorLeftTemplate()"
                [templateRight]="paginatorRightTemplate()"
                [appendTo]="paginatorDropdownAppendTo()"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight()"
                [currentPageReportTemplate]="currentPageReportTemplate()"
                [showFirstLastIcon]="showFirstLastIcon()"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate()"
                [showCurrentPageReport]="showCurrentPageReport()"
                [showJumpToPageDropdown]="showJumpToPageDropdown()"
                [showJumpToPageInput]="showJumpToPageInput()"
                [showPageLinks]="showPageLinks()"
                [class]="cn(cx('pcPaginator'), paginatorStyleClass())"
                [locale]="paginatorLocale()"
                [pt]="ptm('pcPaginator')"
                [unstyled]="unstyled()"
            >
                @if (paginatorDropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorFirstPageLinkIconTemplate()) {
                    <ng-template #firstpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorPreviousPageLinkIconTemplate()) {
                    <ng-template #previouspagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorLastPageLinkIconTemplate()) {
                    <ng-template #lastpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorNextPageLinkIconTemplate()) {
                    <ng-template #nextpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }
            </p-paginator>
        }

        <div #wrapper [class]="cx('tableContainer')" [style]="sx('tableContainer')" [pBind]="ptm('tableContainer')" [attr.data-p]="dataP">
            @if (virtualScroll()) {
                <p-scroller
                    #scroller
                    [items]="processedData"
                    [columns]="columns"
                    [style]="scrollerStyle()"
                    [scrollHeight]="scrollerScrollHeight()"
                    [itemSize]="virtualScrollItemSize()!"
                    [step]="rows()!"
                    [delay]="scrollerDelay()"
                    [inline]="true"
                    [autoSize]="true"
                    [lazy]="lazy()"
                    (onLazyLoad)="onLazyItemLoad($event)"
                    [loaderDisabled]="true"
                    [showSpacer]="false"
                    [showLoader]="!!loadingBodyTemplate()"
                    [options]="virtualScrollOptions()"
                    [pt]="ptm('virtualScroller')"
                >
                    <ng-template #content let-items let-scrollerOptions="options">
                        <ng-container
                            *ngTemplateOutlet="
                                buildInTable;
                                context: {
                                    $implicit: items,
                                    options: scrollerOptions
                                }
                            "
                        ></ng-container>
                    </ng-template>
                </p-scroller>
            }
            @if (!virtualScroll()) {
                <ng-container
                    *ngTemplateOutlet="
                        buildInTable;
                        context: {
                            $implicit: processedData,
                            options: { columns }
                        }
                    "
                ></ng-container>
            }

            <ng-template #buildInTable let-items let-scrollerOptions="options">
                <table #table role="table" [class]="cn(cx('table'), tableStyleClass())" [pBind]="ptm('table')" [style]="tableStyle()" [attr.id]="id + '-table'">
                    <ng-container *ngTemplateOutlet="colGroupTemplate(); context: { $implicit: scrollerOptions.columns }"></ng-container>
                    <thead role="rowgroup" #thead [class]="cx('thead')" [style]="sx('thead')" [pBind]="ptm('thead')">
                        <ng-container
                            *ngTemplateOutlet="
                                headerGroupedTemplate() || headerTemplate();
                                context: {
                                    $implicit: scrollerOptions.columns
                                }
                            "
                        ></ng-container>
                    </thead>
                    @if (showFrozenBody()) {
                        <tbody
                            role="rowgroup"
                            [class]="cx('tbody')"
                            [pBind]="ptm('tbody')"
                            [value]="frozenValue()"
                            [frozenRows]="true"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="frozenBodyTemplate()"
                            [unstyled]="unstyled()"
                            [frozen]="true"
                            [attr.data-p-virtualscroll]="virtualScroll()"
                        ></tbody>
                    }
                    <tbody
                        role="rowgroup"
                        [class]="cn(cx('tbody'), scrollerOptions.contentStyleClass)"
                        [pBind]="ptm('tbody')"
                        [style]="scrollerOptions.contentStyle"
                        [value]="dataToRender(scrollerOptions.rows)"
                        [pTableBody]="scrollerOptions.columns"
                        [pTableBodyTemplate]="bodyTemplate()"
                        [scrollerOptions]="scrollerOptions"
                        [unstyled]="unstyled()"
                        [attr.data-p-virtualscroll]="virtualScroll()"
                    ></tbody>
                    @if (scrollerOptions.spacerStyle) {
                        <tbody role="rowgroup" [style]="getVirtualScrollerSpacerStyle(scrollerOptions)" [class]="cx('virtualScrollerSpacer')" [pBind]="ptm('virtualScrollerSpacer')"></tbody>
                    }
                    @if (showFooter()) {
                        <tfoot role="rowgroup" #tfoot [class]="cx('footer')" [style]="sx('tfoot')" [pBind]="ptm('tfoot')">
                            <ng-container
                                *ngTemplateOutlet="
                                    footerGroupedTemplate() || footerTemplate();
                                    context: {
                                        $implicit: scrollerOptions.columns
                                    }
                                "
                            ></ng-container>
                        </tfoot>
                    }
                </table>
            </ng-template>
        </div>

        @if (showBottomPaginator()) {
            <p-paginator
                [rows]="rows()!"
                [first]="first()!"
                [totalRecords]="totalRecords()"
                [pageLinkSize]="pageLinks()"
                [alwaysShow]="alwaysShowPaginator()"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions()"
                [templateLeft]="paginatorLeftTemplate()"
                [templateRight]="paginatorRightTemplate()"
                [appendTo]="paginatorDropdownAppendTo()"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight()"
                [currentPageReportTemplate]="currentPageReportTemplate()"
                [showFirstLastIcon]="showFirstLastIcon()"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate()"
                [showCurrentPageReport]="showCurrentPageReport()"
                [showJumpToPageDropdown]="showJumpToPageDropdown()"
                [showJumpToPageInput]="showJumpToPageInput()"
                [showPageLinks]="showPageLinks()"
                [class]="cn(cx('pcPaginator'), paginatorStyleClass())"
                [locale]="paginatorLocale()"
                [pt]="ptm('pcPaginator')"
                [unstyled]="unstyled()"
            >
                @if (paginatorDropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorFirstPageLinkIconTemplate()) {
                    <ng-template #firstpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorPreviousPageLinkIconTemplate()) {
                    <ng-template #previouspagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorLastPageLinkIconTemplate()) {
                    <ng-template #lastpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }

                @if (paginatorNextPageLinkIconTemplate()) {
                    <ng-template #nextpagelinkicon>
                        <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate()"></ng-container>
                    </ng-template>
                }
            </p-paginator>
        }

        @if (summaryTemplate()) {
            <div [class]="cx('footer')" [pBind]="ptm('footer')">
                <ng-container *ngTemplateOutlet="summaryTemplate()"></ng-container>
            </div>
        }

        @if (resizableColumns()) {
            <div #resizeHelper [class]="cx('columnResizeIndicator')" [pBind]="ptm('columnResizeIndicator')" [style.display]="'none'"></div>
        }
        @if (reorderableColumns()) {
            <span #reorderIndicatorUp [class]="cx('rowReorderIndicatorUp')" [pBind]="ptm('rowReorderIndicatorUp')" [style.display]="'none'">
                @if (!reorderIndicatorUpIconTemplate()) {
                    <svg data-p-icon="arrow-down" [pBind]="ptm('rowReorderIndicatorUp')['icon']" />
                }
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate()"></ng-template>
            </span>
            <span #reorderIndicatorDown [class]="cx('rowReorderIndicatorDown')" [pBind]="ptm('rowReorderIndicatorDown')" [style.display]="'none'">
                @if (!reorderIndicatorDownIconTemplate()) {
                    <svg data-p-icon="arrow-up" [pBind]="ptm('rowReorderIndicatorDown')['icon']" />
                }
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate()"></ng-template>
            </span>
        }
    `,
      providers: [
        TableService,
        TableStyle,
        {
          provide: TABLE_INSTANCE,
          useExisting: Table
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Table
        }
      ],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    frozenColumns: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozenColumns",
        required: false
      }]
    }],
    frozenValue: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozenValue",
        required: false
      }]
    }],
    tableStyle: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "tableStyle",
        required: false
      }]
    }],
    tableStyleClass: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "tableStyleClass",
        required: false
      }]
    }],
    paginator: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginator",
        required: false
      }]
    }],
    pageLinks: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pageLinks",
        required: false
      }]
    }],
    rowsPerPageOptions: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowsPerPageOptions",
        required: false
      }]
    }],
    alwaysShowPaginator: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "alwaysShowPaginator",
        required: false
      }]
    }],
    paginatorPosition: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginatorPosition",
        required: false
      }]
    }],
    paginatorStyleClass: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginatorStyleClass",
        required: false
      }]
    }],
    paginatorDropdownAppendTo: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginatorDropdownAppendTo",
        required: false
      }]
    }],
    paginatorDropdownScrollHeight: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginatorDropdownScrollHeight",
        required: false
      }]
    }],
    currentPageReportTemplate: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "currentPageReportTemplate",
        required: false
      }]
    }],
    showCurrentPageReport: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showCurrentPageReport",
        required: false
      }]
    }],
    showJumpToPageDropdown: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showJumpToPageDropdown",
        required: false
      }]
    }],
    showJumpToPageInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showJumpToPageInput",
        required: false
      }]
    }],
    showFirstLastIcon: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showFirstLastIcon",
        required: false
      }]
    }],
    showPageLinks: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showPageLinks",
        required: false
      }]
    }],
    defaultSortOrder: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "defaultSortOrder",
        required: false
      }]
    }],
    sortMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "sortMode",
        required: false
      }]
    }],
    resetPageOnSort: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "resetPageOnSort",
        required: false
      }]
    }],
    selectionMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "selectionMode",
        required: false
      }]
    }],
    selectionPageOnly: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "selectionPageOnly",
        required: false
      }]
    }],
    contextMenuSelectionInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "contextMenuSelection",
        required: false
      }]
    }],
    contextMenuSelectionChange: [{
      type: i010.Output,
      args: ["contextMenuSelectionChange"]
    }],
    dataKey: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "dataKey",
        required: false
      }]
    }],
    metaKeySelection: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "metaKeySelection",
        required: false
      }]
    }],
    rowSelectable: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowSelectable",
        required: false
      }]
    }],
    rowTrackBy: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowTrackBy",
        required: false
      }]
    }],
    lazy: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "lazy",
        required: false
      }]
    }],
    lazyLoadOnInit: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "lazyLoadOnInit",
        required: false
      }]
    }],
    compareSelectionBy: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "compareSelectionBy",
        required: false
      }]
    }],
    csvSeparator: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "csvSeparator",
        required: false
      }]
    }],
    exportFilename: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "exportFilename",
        required: false
      }]
    }],
    filtersInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filters",
        required: false
      }]
    }],
    globalFilterFields: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "globalFilterFields",
        required: false
      }]
    }],
    filterDelay: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterDelay",
        required: false
      }]
    }],
    filterLocale: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterLocale",
        required: false
      }]
    }],
    expandedRowKeysInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "expandedRowKeys",
        required: false
      }]
    }],
    editingRowKeysInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "editingRowKeys",
        required: false
      }]
    }],
    rowExpandMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowExpandMode",
        required: false
      }]
    }],
    scrollable: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "scrollable",
        required: false
      }]
    }],
    rowGroupMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowGroupMode",
        required: false
      }]
    }],
    scrollHeight: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "scrollHeight",
        required: false
      }]
    }],
    virtualScroll: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "virtualScroll",
        required: false
      }]
    }],
    virtualScrollItemSize: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "virtualScrollItemSize",
        required: false
      }]
    }],
    virtualScrollOptions: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "virtualScrollOptions",
        required: false
      }]
    }],
    virtualScrollDelay: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "virtualScrollDelay",
        required: false
      }]
    }],
    frozenWidth: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozenWidth",
        required: false
      }]
    }],
    contextMenu: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "contextMenu",
        required: false
      }]
    }],
    resizableColumns: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "resizableColumns",
        required: false
      }]
    }],
    columnResizeMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "columnResizeMode",
        required: false
      }]
    }],
    reorderableColumns: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "reorderableColumns",
        required: false
      }]
    }],
    loading: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "loading",
        required: false
      }]
    }],
    loadingIcon: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "loadingIcon",
        required: false
      }]
    }],
    showLoader: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showLoader",
        required: false
      }]
    }],
    rowHover: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rowHover",
        required: false
      }]
    }],
    customSort: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "customSort",
        required: false
      }]
    }],
    showInitialSortBadge: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showInitialSortBadge",
        required: false
      }]
    }],
    exportFunction: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "exportFunction",
        required: false
      }]
    }],
    exportHeader: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "exportHeader",
        required: false
      }]
    }],
    stateKey: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "stateKey",
        required: false
      }]
    }],
    stateStorage: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "stateStorage",
        required: false
      }]
    }],
    editMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "editMode",
        required: false
      }]
    }],
    groupRowsBy: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "groupRowsBy",
        required: false
      }]
    }],
    size: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    showGridlines: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showGridlines",
        required: false
      }]
    }],
    stripedRows: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "stripedRows",
        required: false
      }]
    }],
    groupRowsByOrder: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "groupRowsByOrder",
        required: false
      }]
    }],
    paginatorLocale: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "paginatorLocale",
        required: false
      }]
    }],
    valueInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    columnsInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "columns",
        required: false
      }]
    }],
    first: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "first",
        required: false
      }]
    }, {
      type: i010.Output,
      args: ["firstChange"]
    }],
    rows: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "rows",
        required: false
      }]
    }, {
      type: i010.Output,
      args: ["rowsChange"]
    }],
    totalRecords: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "totalRecords",
        required: false
      }]
    }, {
      type: i010.Output,
      args: ["totalRecordsChange"]
    }],
    sortFieldInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "sortField",
        required: false
      }]
    }],
    sortOrderInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "sortOrder",
        required: false
      }]
    }],
    multiSortMetaInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "multiSortMeta",
        required: false
      }]
    }],
    selection: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "selection",
        required: false
      }]
    }, {
      type: i010.Output,
      args: ["selectionChange"]
    }],
    selectAllInput: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "selectAll",
        required: false
      }]
    }],
    selectAllChange: [{
      type: i010.Output,
      args: ["selectAllChange"]
    }],
    onRowSelect: [{
      type: i010.Output,
      args: ["onRowSelect"]
    }],
    onRowUnselect: [{
      type: i010.Output,
      args: ["onRowUnselect"]
    }],
    onPage: [{
      type: i010.Output,
      args: ["onPage"]
    }],
    onSort: [{
      type: i010.Output,
      args: ["onSort"]
    }],
    onFilter: [{
      type: i010.Output,
      args: ["onFilter"]
    }],
    onLazyLoad: [{
      type: i010.Output,
      args: ["onLazyLoad"]
    }],
    onRowExpand: [{
      type: i010.Output,
      args: ["onRowExpand"]
    }],
    onRowCollapse: [{
      type: i010.Output,
      args: ["onRowCollapse"]
    }],
    onContextMenuSelect: [{
      type: i010.Output,
      args: ["onContextMenuSelect"]
    }],
    onColResize: [{
      type: i010.Output,
      args: ["onColResize"]
    }],
    onColReorder: [{
      type: i010.Output,
      args: ["onColReorder"]
    }],
    onRowReorder: [{
      type: i010.Output,
      args: ["onRowReorder"]
    }],
    onEditInit: [{
      type: i010.Output,
      args: ["onEditInit"]
    }],
    onEditComplete: [{
      type: i010.Output,
      args: ["onEditComplete"]
    }],
    onEditCancel: [{
      type: i010.Output,
      args: ["onEditCancel"]
    }],
    onHeaderCheckboxToggle: [{
      type: i010.Output,
      args: ["onHeaderCheckboxToggle"]
    }],
    sortFunction: [{
      type: i010.Output,
      args: ["sortFunction"]
    }],
    onStateSave: [{
      type: i010.Output,
      args: ["onStateSave"]
    }],
    onStateRestore: [{
      type: i010.Output,
      args: ["onStateRestore"]
    }],
    resizeHelperViewChild: [{
      type: i010.ViewChild,
      args: ["resizeHelper", { isSignal: true }]
    }],
    reorderIndicatorUpViewChild: [{
      type: i010.ViewChild,
      args: ["reorderIndicatorUp", { isSignal: true }]
    }],
    reorderIndicatorDownViewChild: [{
      type: i010.ViewChild,
      args: ["reorderIndicatorDown", { isSignal: true }]
    }],
    wrapperViewChild: [{
      type: i010.ViewChild,
      args: ["wrapper", { isSignal: true }]
    }],
    tableViewChild: [{
      type: i010.ViewChild,
      args: ["table", { isSignal: true }]
    }],
    tableHeaderViewChild: [{
      type: i010.ViewChild,
      args: ["thead", { isSignal: true }]
    }],
    tableFooterViewChild: [{
      type: i010.ViewChild,
      args: ["tfoot", { isSignal: true }]
    }],
    scroller: [{
      type: i010.ViewChild,
      args: ["scroller", { isSignal: true }]
    }],
    headerTemplate: [{
      type: i010.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    headerGroupedTemplate: [{
      type: i010.ContentChild,
      args: ["headergrouped", {
        descendants: false,
        isSignal: true
      }]
    }],
    bodyTemplate: [{
      type: i010.ContentChild,
      args: ["body", {
        descendants: false,
        isSignal: true
      }]
    }],
    loadingBodyTemplate: [{
      type: i010.ContentChild,
      args: ["loadingbody", {
        descendants: false,
        isSignal: true
      }]
    }],
    captionTemplate: [{
      type: i010.ContentChild,
      args: ["caption", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i010.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerGroupedTemplate: [{
      type: i010.ContentChild,
      args: ["footergrouped", {
        descendants: false,
        isSignal: true
      }]
    }],
    summaryTemplate: [{
      type: i010.ContentChild,
      args: ["summary", {
        descendants: false,
        isSignal: true
      }]
    }],
    colGroupTemplate: [{
      type: i010.ContentChild,
      args: ["colgroup", {
        descendants: false,
        isSignal: true
      }]
    }],
    expandedRowTemplate: [{
      type: i010.ContentChild,
      args: ["expandedrow", {
        descendants: false,
        isSignal: true
      }]
    }],
    groupHeaderTemplate: [{
      type: i010.ContentChild,
      args: ["groupheader", {
        descendants: false,
        isSignal: true
      }]
    }],
    groupFooterTemplate: [{
      type: i010.ContentChild,
      args: ["groupfooter", {
        descendants: false,
        isSignal: true
      }]
    }],
    frozenExpandedRowTemplate: [{
      type: i010.ContentChild,
      args: ["frozenexpandedrow", {
        descendants: false,
        isSignal: true
      }]
    }],
    frozenHeaderTemplate: [{
      type: i010.ContentChild,
      args: ["frozenheader", {
        descendants: false,
        isSignal: true
      }]
    }],
    frozenBodyTemplate: [{
      type: i010.ContentChild,
      args: ["frozenbody", {
        descendants: false,
        isSignal: true
      }]
    }],
    frozenFooterTemplate: [{
      type: i010.ContentChild,
      args: ["frozenfooter", {
        descendants: false,
        isSignal: true
      }]
    }],
    frozenColGroupTemplate: [{
      type: i010.ContentChild,
      args: ["frozencolgroup", {
        descendants: false,
        isSignal: true
      }]
    }],
    emptyMessageTemplate: [{
      type: i010.ContentChild,
      args: ["emptymessage", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorLeftTemplate: [{
      type: i010.ContentChild,
      args: ["paginatorleft", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorRightTemplate: [{
      type: i010.ContentChild,
      args: ["paginatorright", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorDropdownItemTemplate: [{
      type: i010.ContentChild,
      args: ["paginatordropdownitem", {
        descendants: false,
        isSignal: true
      }]
    }],
    loadingIconTemplate: [{
      type: i010.ContentChild,
      args: ["loadingicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    reorderIndicatorUpIconTemplate: [{
      type: i010.ContentChild,
      args: ["reorderindicatorupicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    reorderIndicatorDownIconTemplate: [{
      type: i010.ContentChild,
      args: ["reorderindicatordownicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    sortIconTemplate: [{
      type: i010.ContentChild,
      args: ["sorticon", {
        descendants: false,
        isSignal: true
      }]
    }],
    checkboxIconTemplate: [{
      type: i010.ContentChild,
      args: ["checkboxicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    headerCheckboxIconTemplate: [{
      type: i010.ContentChild,
      args: ["headercheckboxicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorDropdownIconTemplate: [{
      type: i010.ContentChild,
      args: ["paginatordropdownicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorFirstPageLinkIconTemplate: [{
      type: i010.ContentChild,
      args: ["paginatorfirstpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorLastPageLinkIconTemplate: [{
      type: i010.ContentChild,
      args: ["paginatorlastpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorPreviousPageLinkIconTemplate: [{
      type: i010.ContentChild,
      args: ["paginatorpreviouspagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    paginatorNextPageLinkIconTemplate: [{
      type: i010.ContentChild,
      args: ["paginatornextpagelinkicon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var FrozenColumn = class FrozenColumn2 extends BaseComponent {
  frozen = input(true, ...ngDevMode ? [{ debugName: "frozen" }] : (
    /* istanbul ignore next */
    []
  ));
  alignFrozen = input("left", ...ngDevMode ? [{ debugName: "alignFrozen" }] : (
    /* istanbul ignore next */
    []
  ));
  resizeListener;
  resizeObserver;
  _componentStyle = inject(TableStyle);
  constructor() {
    super();
    effect(() => {
      if (this.frozen() !== void 0) Promise.resolve(null).then(() => this.updateStickyPosition());
    });
  }
  onAfterViewInit() {
    this.bindResizeListener();
    this.observeChanges();
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", () => {
        this.recalculateColumns();
      });
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  observeChanges() {
    if (isPlatformBrowser(this.platformId)) {
      const resizeObserver = new ResizeObserver(() => {
        this.recalculateColumns();
      });
      resizeObserver.observe(this.el.nativeElement);
      this.resizeObserver = resizeObserver;
    }
  }
  recalculateColumns() {
    const siblings = DomHandler.siblings(this.el.nativeElement);
    const index = DomHandler.index(this.el.nativeElement);
    const time = (siblings.length - index + 1) * 50;
    setTimeout(() => {
      this.updateStickyPosition();
    }, time);
  }
  updateStickyPosition() {
    if (!this.frozen()) return;
    const cell = this.el.nativeElement;
    if (this.alignFrozen() === "right") {
      let right = 0;
      let sibling = cell.nextElementSibling;
      while (sibling) {
        right += DomHandler.getOuterWidth(sibling);
        sibling = sibling.nextElementSibling;
      }
      cell.style.right = right + "px";
    } else {
      let left = 0;
      let sibling = cell.previousElementSibling;
      while (sibling) {
        left += DomHandler.getOuterWidth(sibling);
        sibling = sibling.previousElementSibling;
      }
      cell.style.left = left + "px";
    }
  }
  onDestroy() {
    this.unbindResizeListener();
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }
  static \u0275fac = function FrozenColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FrozenColumn2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: FrozenColumn2,
    selectors: [["", "pFrozenColumn", ""]],
    hostVars: 2,
    hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("frozenColumn"));
      }
    },
    inputs: {
      frozen: [1, "frozen"],
      alignFrozen: [1, "alignFrozen"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(FrozenColumn, [{
    type: Directive,
    args: [{
      selector: "[pFrozenColumn]",
      standalone: true,
      host: { "[class]": 'cx("frozenColumn")' },
      providers: [TableStyle]
    }]
  }], () => [], {
    frozen: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "frozen",
        required: false
      }]
    }],
    alignFrozen: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "alignFrozen",
        required: false
      }]
    }]
  });
})();
var EditableRow = class EditableRow2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pEditableRow"
  }));
  pEditableRowDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pEditableRowDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  isEnabled() {
    return this.pEditableRowDisabled() !== true;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EditableRow_BaseFactory = void 0;
    return function EditableRow_Factory(__ngFactoryType__) {
      return (\u0275EditableRow_BaseFactory || (\u0275EditableRow_BaseFactory = i010.\u0275\u0275getInheritedFactory(EditableRow2)))(__ngFactoryType__ || EditableRow2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: EditableRow2,
    selectors: [["", "pEditableRow", ""]],
    inputs: {
      data: [1, "pEditableRow", "data"],
      pEditableRowDisabled: [1, "pEditableRowDisabled"]
    },
    features: [i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(EditableRow, [{
    type: Directive,
    args: [{
      selector: "[pEditableRow]",
      standalone: true
    }]
  }], null, {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableRow",
        required: false
      }]
    }],
    pEditableRowDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableRowDisabled",
        required: false
      }]
    }]
  });
})();
var ReorderableRowHandle = class ReorderableRowHandle2 extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(TableStyle);
  el = inject(ElementRef);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("reorderableRowHandle"));
  }
  onAfterViewInit() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ReorderableRowHandle_BaseFactory = void 0;
    return function ReorderableRowHandle_Factory(__ngFactoryType__) {
      return (\u0275ReorderableRowHandle_BaseFactory || (\u0275ReorderableRowHandle_BaseFactory = i010.\u0275\u0275getInheritedFactory(ReorderableRowHandle2)))(__ngFactoryType__ || ReorderableRowHandle2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: ReorderableRowHandle2,
    selectors: [["", "pReorderableRowHandle", ""]],
    hostVars: 2,
    hostBindings: function ReorderableRowHandle_HostBindings(rf, ctx) {
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("reorderableRowHandle"));
      }
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ReorderableRowHandle, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRowHandle]",
      standalone: true,
      host: { "[class]": "cx('reorderableRowHandle')" },
      providers: [TableStyle],
      hostDirectives: [Bind2]
    }]
  }], null, null);
})();
var RowGroupHeader = class RowGroupHeader2 extends BaseComponent {
  dataTable = inject(TABLE_INSTANCE);
  _componentStyle = inject(TableStyle);
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dataTable.rowGroupHeaderStyleObject ? this.dataTable.rowGroupHeaderStyleObject.top : "";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RowGroupHeader_BaseFactory = void 0;
    return function RowGroupHeader_Factory(__ngFactoryType__) {
      return (\u0275RowGroupHeader_BaseFactory || (\u0275RowGroupHeader_BaseFactory = i010.\u0275\u0275getInheritedFactory(RowGroupHeader2)))(__ngFactoryType__ || RowGroupHeader2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: RowGroupHeader2,
    selectors: [["", "pRowGroupHeader", ""]],
    hostVars: 4,
    hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        i010.\u0275\u0275styleMap(ctx.sx("rowGroupHeader"));
        i010.\u0275\u0275classMap(ctx.cx("rowGroupHeader"));
      }
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(RowGroupHeader, [{
    type: Directive,
    args: [{
      selector: "[pRowGroupHeader]",
      standalone: true,
      host: {
        "[class]": 'cx("rowGroupHeader")',
        "[style]": 'sx("rowGroupHeader")'
      },
      providers: [TableStyle]
    }]
  }], null, null);
})();
var RowToggler = class RowToggler2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pRowToggler"
  }));
  pRowTogglerDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pRowTogglerDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  dataTable = inject(TABLE_INSTANCE);
  onClick(event) {
    if (this.isEnabled()) {
      this.dataTable.toggleRow(this.data(), event);
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled() !== true;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RowToggler_BaseFactory = void 0;
    return function RowToggler_Factory(__ngFactoryType__) {
      return (\u0275RowToggler_BaseFactory || (\u0275RowToggler_BaseFactory = i010.\u0275\u0275getInheritedFactory(RowToggler2)))(__ngFactoryType__ || RowToggler2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: RowToggler2,
    selectors: [["", "pRowToggler", ""]],
    hostBindings: function RowToggler_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function RowToggler_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      data: [1, "pRowToggler", "data"],
      pRowTogglerDisabled: [1, "pRowTogglerDisabled"]
    },
    features: [i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(RowToggler, [{
    type: Directive,
    args: [{
      selector: "[pRowToggler]",
      standalone: true
    }]
  }], null, {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pRowToggler",
        required: false
      }]
    }],
    pRowTogglerDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pRowTogglerDisabled",
        required: false
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SortableColumn = class SortableColumn2 extends BaseComponent {
  field = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "field" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSortableColumn"
  }));
  pSortableColumnDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pSortableColumnDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  role = this.el.nativeElement?.tagName !== "TH" ? "columnheader" : null;
  sorted = signal(false, ...ngDevMode ? [{ debugName: "sorted" }] : (
    /* istanbul ignore next */
    []
  ));
  sortOrder = signal(0, ...ngDevMode ? [{ debugName: "sortOrder" }] : (
    /* istanbul ignore next */
    []
  ));
  $tabindex = computed(() => this.isEnabled() ? "0" : null, ...ngDevMode ? [{ debugName: "$tabindex" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaSort = computed(() => {
    const sorted = this.sorted();
    const order = this.sortOrder();
    return sorted ? order === 1 ? "ascending" : "descending" : "none";
  }, ...ngDevMode ? [{ debugName: "ariaSort" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  constructor() {
    super();
    if (this.isEnabled()) this.dataTable.tableService.sortSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.updateSortState();
    });
  }
  onInit() {
    if (this.isEnabled()) this.updateSortState();
  }
  updateSortState() {
    let sorted = false;
    let sortOrder = 0;
    if (this.dataTable.sortMode() === "single") {
      sorted = this.dataTable.isSorted(this.field());
      sortOrder = this.dataTable.sortOrder;
    } else if (this.dataTable.sortMode() === "multiple") {
      const sortMeta = this.dataTable.getSortMeta(this.field());
      sorted = !!sortMeta;
      sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.sorted.set(sorted);
    this.sortOrder.set(sortOrder);
  }
  onClick(event) {
    if (this.isEnabled() && !this.isFilterElement(event.target)) {
      this.updateSortState();
      this.dataTable.sort({
        originalEvent: event,
        field: this.field()
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
    event.preventDefault();
  }
  isEnabled() {
    return this.pSortableColumnDisabled() !== true;
  }
  isFilterElement(element) {
    return this.isFilterElementIconOrButton(element) || this.isFilterElementIconOrButton(element?.parentElement?.parentElement);
  }
  isFilterElementIconOrButton(element) {
    if (!element) return false;
    return ot(element, '[data-pc-name="pccolumnfilterbutton"]') || ot(element, '[data-pc-section="columnfilterbuttonicon"]');
  }
  static \u0275fac = function SortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SortableColumn2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: SortableColumn2,
    selectors: [["", "pSortableColumn", ""]],
    hostAttrs: ["role", "columnheader"],
    hostVars: 4,
    hostBindings: function SortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function SortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.space", function SortableColumn_keydown_space_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275domProperty("tabIndex", ctx.$tabindex());
        i010.\u0275\u0275attribute("aria-sort", ctx.ariaSort());
        i010.\u0275\u0275classMap(ctx.cx("sortableColumn"));
      }
    },
    inputs: {
      field: [1, "pSortableColumn", "field"],
      pSortableColumnDisabled: [1, "pSortableColumnDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(SortableColumn, [{
    type: Directive,
    args: [{
      selector: "[pSortableColumn]",
      standalone: true,
      host: {
        "[class]": "cx('sortableColumn')",
        "[tabindex]": "$tabindex()",
        role: "columnheader",
        "[attr.aria-sort]": "ariaSort()"
      },
      providers: [TableStyle]
    }]
  }], () => [], {
    field: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSortableColumn",
        required: false
      }]
    }],
    pSortableColumnDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSortableColumnDisabled",
        required: false
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.space", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var SelectableRow = class SelectableRow2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSelectableRow"
  }));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSelectableRowIndex"
  }));
  pSelectableRowDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pSelectableRowDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  selected;
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  tableService = inject(TableService);
  constructor() {
    super();
    if (this.isEnabled()) this.dataTable.tableService.selectionSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.selected = this.dataTable.isSelected(this.data());
    });
  }
  setRowTabIndex() {
    if (this.dataTable.selectionMode() === "single" || this.dataTable.selectionMode() === "multiple") {
      const anchorIndex = this.dataTable.anchorRowIndex;
      return anchorIndex != null ? anchorIndex === this.index() ? 0 : -1 : 0;
    }
  }
  onInit() {
    if (this.isEnabled()) this.selected = this.dataTable.isSelected(this.data());
  }
  onClick(event) {
    if (this.isEnabled()) this.dataTable.handleRowClick({
      originalEvent: event,
      rowData: this.data(),
      rowIndex: this.index()
    });
  }
  onTouchEnd(event) {
    if (this.isEnabled()) this.dataTable.handleRowTouchEnd(event);
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      default:
        if (event.code === "KeyA" && (event.metaKey || event.ctrlKey) && this.dataTable.selectionMode() === "multiple") {
          const data = this.dataTable.dataToRender(this.dataTable.processedData);
          this.dataTable.selection.set([...data]);
          this.dataTable.selectRange(event, data.length - 1, true);
          event.preventDefault();
        }
    }
  }
  onArrowDownKey(event) {
    if (!this.isEnabled()) return;
    const row = event.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) nextRow.focus();
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (!this.isEnabled()) return;
    const row = event.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) prevRow.focus();
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.isEnabled()) return;
    this.dataTable.handleRowClick({
      originalEvent: event,
      rowData: this.data(),
      rowIndex: this.index()
    });
  }
  onEndKey(event) {
    const lastRow = this.findLastSelectableRow();
    if (lastRow) this.focusRowChange(this.el.nativeElement, lastRow);
    if (event.ctrlKey && event.shiftKey) {
      const data = this.dataTable.dataToRender(this.dataTable.rows());
      const lastSelectableRowIndex = DomHandler.getAttribute(lastRow, "index");
      this.dataTable.anchorRowIndex = lastSelectableRowIndex;
      this.dataTable.selection.set(data.slice(this.index() || 0, data.length));
      this.dataTable.selectRange(event, this.index() || 0);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstRow = this.findFirstSelectableRow();
    if (firstRow) this.focusRowChange(this.el.nativeElement, firstRow);
    if (event.ctrlKey && event.shiftKey) {
      const data = this.dataTable.dataToRender(this.dataTable.rows());
      const firstSelectableRowIndex = DomHandler.getAttribute(firstRow, "index");
      this.dataTable.anchorRowIndex = this.dataTable.anchorRowIndex || firstSelectableRowIndex || 0;
      this.dataTable.selection.set(data.slice(0, (this.index() || 0) + 1));
      this.dataTable.selectRange(event, this.index() || 0);
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement) return;
    else {
      this.onEnterKey(event);
      if (event.shiftKey && this.dataTable.selection() !== null) {
        const data = this.dataTable.dataToRender(this.dataTable.rows());
        let index;
        const sel = this.dataTable.selection();
        if (ObjectUtils.isNotEmpty(sel) && sel.length > 0) {
          let firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = ObjectUtils.findIndexInList(sel[0], data);
          lastSelectedRowIndex = ObjectUtils.findIndexInList(sel[sel.length - 1], data);
          index = (this.index() || 0) <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else index = ObjectUtils.findIndexInList(sel, data);
        this.dataTable.anchorRowIndex = index || 0;
        this.dataTable.selection.set(index !== this.index() ? data.slice(Math.min(index || 0, this.index() || 0), Math.max(index || 0, this.index() || 0) + 1) : [this.data()]);
        this.dataTable.selectRange(event, this.index() || 0);
      }
      event.preventDefault();
    }
  }
  focusRowChange(firstFocusableRow, currentFocusedRow) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    DomHandler.focus(currentFocusedRow);
  }
  findLastSelectableRow() {
    const rows = DomHandler.find(this.dataTable.el.nativeElement, '[data-p-selectable-row="true"]');
    return rows ? rows[rows.length - 1] : null;
  }
  findFirstSelectableRow() {
    return DomHandler.findSingle(this.dataTable.el.nativeElement, '[data-p-selectable-row="true"]');
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (tt(nextRow, '[data-p-selectable-row="true"]')) return nextRow;
      else return this.findNextSelectableRow(nextRow);
    } else return null;
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (tt(prevRow, '[data-p-selectable-row="true"]')) return prevRow;
      else return this.findPrevSelectableRow(prevRow);
    } else return null;
  }
  isEnabled() {
    return this.pSelectableRowDisabled() !== true;
  }
  static \u0275fac = function SelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SelectableRow2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: SelectableRow2,
    selectors: [["", "pSelectableRow", ""]],
    hostVars: 4,
    hostBindings: function SelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function SelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("keydown", function SelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275domProperty("tabIndex", ctx.setRowTabIndex());
        i010.\u0275\u0275attribute("data-p-selectable-row", true);
        i010.\u0275\u0275classMap(ctx.cx("selectableRow"));
      }
    },
    inputs: {
      data: [1, "pSelectableRow", "data"],
      index: [1, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [1, "pSelectableRowDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(SelectableRow, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRow]",
      standalone: true,
      host: {
        "[class]": "cx('selectableRow')",
        "[tabindex]": "setRowTabIndex()",
        "[attr.data-p-selectable-row]": "true"
      },
      providers: [TableStyle]
    }]
  }], () => [], {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRow",
        required: false
      }]
    }],
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRowIndex",
        required: false
      }]
    }],
    pSelectableRowDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRowDisabled",
        required: false
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var SelectableRowDblClick = class SelectableRowDblClick2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSelectableRowDblClick"
  }));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pSelectableRowIndex"
  }));
  pSelectableRowDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pSelectableRowDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  selected;
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  tableService = inject(TableService);
  constructor() {
    super();
    if (this.isEnabled()) this.dataTable.tableService.selectionSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.selected = this.dataTable.isSelected(this.data());
    });
  }
  onInit() {
    if (this.isEnabled()) this.selected = this.dataTable.isSelected(this.data());
  }
  onClick(event) {
    if (this.isEnabled()) this.dataTable.handleRowClick({
      originalEvent: event,
      rowData: this.data(),
      rowIndex: this.index()
    });
  }
  isEnabled() {
    return this.pSelectableRowDisabled() !== true;
  }
  static \u0275fac = function SelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SelectableRowDblClick2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: SelectableRowDblClick2,
    selectors: [["", "pSelectableRowDblClick", ""]],
    hostVars: 2,
    hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("selectableRow"));
      }
    },
    inputs: {
      data: [1, "pSelectableRowDblClick", "data"],
      index: [1, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [1, "pSelectableRowDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(SelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRowDblClick]",
      standalone: true,
      host: { "[class]": 'cx("selectableRow")' },
      providers: [TableStyle]
    }]
  }], () => [], {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRowDblClick",
        required: false
      }]
    }],
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRowIndex",
        required: false
      }]
    }],
    pSelectableRowDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pSelectableRowDisabled",
        required: false
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var ContextMenuRow = class ContextMenuRow2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pContextMenuRow"
  }));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pContextMenuRowIndex"
  }));
  pContextMenuRowDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pContextMenuRowDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  selected;
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  tableService = inject(TableService);
  constructor() {
    super();
    if (this.isEnabled()) this.dataTable.tableService.contextMenuSource$.pipe(takeUntilDestroyed()).subscribe((data) => {
      this.selected = data ? this.dataTable.equals(this.data(), data) : false;
    });
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.dataTable.handleRowRightClick({
        originalEvent: event,
        rowData: this.data(),
        rowIndex: this.index()
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled() !== true;
  }
  static \u0275fac = function ContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ContextMenuRow2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: ContextMenuRow2,
    selectors: [["", "pContextMenuRow", ""]],
    hostVars: 3,
    hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275attribute("tabindex", ctx.isEnabled() ? 0 : void 0);
        i010.\u0275\u0275classMap(ctx.cx("contextMenuRowSelected"));
      }
    },
    inputs: {
      data: [1, "pContextMenuRow", "data"],
      index: [1, "pContextMenuRowIndex", "index"],
      pContextMenuRowDisabled: [1, "pContextMenuRowDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[pContextMenuRow]",
      standalone: true,
      host: {
        "[class]": 'cx("contextMenuRowSelected")',
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      },
      providers: [TableStyle]
    }]
  }], () => [], {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pContextMenuRow",
        required: false
      }]
    }],
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pContextMenuRowIndex",
        required: false
      }]
    }],
    pContextMenuRowDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pContextMenuRowDisabled",
        required: false
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var ResizableColumn = class ResizableColumn2 extends BaseComponent {
  pResizableColumnDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pResizableColumnDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  resizer;
  resizerMouseDownListener;
  resizerTouchStartListener;
  resizerTouchMoveListener;
  resizerTouchEndListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        this.resizer = this.renderer.createElement("span");
        ce(this.resizer, "data-pc-column-resizer", "true");
        if (!this.$unstyled()) this.renderer.addClass(this.resizer, "p-datatable-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
        this.resizerTouchStartListener = this.renderer.listen(this.resizer, "touchstart", this.onTouchStart.bind(this));
      }
    }
  }
  bindDocumentEvents() {
    this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
    this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
    this.resizerTouchMoveListener = this.renderer.listen(this.resizer, "touchmove", this.onTouchMove.bind(this));
    this.resizerTouchEndListener = this.renderer.listen(this.resizer, "touchend", this.onTouchEnd.bind(this));
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
    if (this.resizerTouchMoveListener) {
      this.resizerTouchMoveListener();
      this.resizerTouchMoveListener = null;
    }
    if (this.resizerTouchEndListener) {
      this.resizerTouchEndListener();
      this.resizerTouchEndListener = null;
    }
  }
  onMouseDown(event) {
    this.dataTable.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onTouchStart(event) {
    this.dataTable.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onTouchMove(event) {
    this.dataTable.onColumnResize(event);
  }
  onDocumentMouseMove(event) {
    this.dataTable.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.dataTable.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  onTouchEnd(event) {
    this.dataTable.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled() !== true;
  }
  onDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ResizableColumn_BaseFactory = void 0;
    return function ResizableColumn_Factory(__ngFactoryType__) {
      return (\u0275ResizableColumn_BaseFactory || (\u0275ResizableColumn_BaseFactory = i010.\u0275\u0275getInheritedFactory(ResizableColumn2)))(__ngFactoryType__ || ResizableColumn2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: ResizableColumn2,
    selectors: [["", "pResizableColumn", ""]],
    hostVars: 2,
    hostBindings: function ResizableColumn_HostBindings(rf, ctx) {
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("resizableColumn"));
      }
    },
    inputs: {
      pResizableColumnDisabled: [1, "pResizableColumnDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[pResizableColumn]",
      standalone: true,
      host: { "[class]": "cx('resizableColumn')" },
      providers: [TableStyle]
    }]
  }], null, { pResizableColumnDisabled: [{
    type: i010.Input,
    args: [{
      isSignal: true,
      alias: "pResizableColumnDisabled",
      required: false
    }]
  }] });
})();
var ReorderableColumn = class ReorderableColumn2 extends BaseComponent {
  pReorderableColumnDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pReorderableColumnDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  dragEndListener;
  mouseDownListener;
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  onAfterViewInit() {
    if (this.isEnabled()) this.bindEvents();
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
      this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
      this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
      this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
    }
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragEnterListener) {
      this.dragEnterListener();
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || et(event.target, '[data-pc-column-resizer="true"]')) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.dataTable.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    this.dataTable.onColumnDragOver(event, this.el.nativeElement);
  }
  onDragEnter(event) {
    this.dataTable.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.dataTable.onColumnDragLeave(event);
  }
  onDragEnd(event) {
    this.dataTable.onColumnDragEnd(event);
  }
  onDrop(event) {
    if (this.isEnabled()) this.dataTable.onColumnDrop(event, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableColumnDisabled() !== true;
  }
  onDestroy() {
    this.unbindEvents();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ReorderableColumn_BaseFactory = void 0;
    return function ReorderableColumn_Factory(__ngFactoryType__) {
      return (\u0275ReorderableColumn_BaseFactory || (\u0275ReorderableColumn_BaseFactory = i010.\u0275\u0275getInheritedFactory(ReorderableColumn2)))(__ngFactoryType__ || ReorderableColumn2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: ReorderableColumn2,
    selectors: [["", "pReorderableColumn", ""]],
    hostVars: 2,
    hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("reorderableColumn"));
      }
    },
    inputs: {
      pReorderableColumnDisabled: [1, "pReorderableColumnDisabled"]
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[pReorderableColumn]",
      standalone: true,
      host: { "[class]": "cx('reorderableColumn')" },
      providers: [TableStyle]
    }]
  }], null, {
    pReorderableColumnDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pReorderableColumnDisabled",
        required: false
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var EditableColumn = class EditableColumn2 extends BaseComponent {
  data = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "data" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pEditableColumn"
  }));
  field = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "field" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pEditableColumnField"
  }));
  rowIndex = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "rowIndex" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pEditableColumnRowIndex"
  }));
  pEditableColumnDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pEditableColumnDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  pFocusCellSelector = input(...ngDevMode ? [void 0, { debugName: "pFocusCellSelector" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayEventListener;
  dataTable = inject(TABLE_INSTANCE);
  initialized = false;
  originalCellValue;
  constructor() {
    super();
    effect(() => {
      const data = this.data();
      untracked(() => {
        if (this.el.nativeElement && this.initialized && this.dataTable.editingCell === this.el.nativeElement) this.dataTable.updateEditingCell(this.el.nativeElement, data, this.field(), this.rowIndex());
        this.initialized = true;
      });
    });
  }
  onAfterViewInit() {
    if (this.isEnabled()) {
      if (!this.$unstyled()) DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dataTable.selfClick = true;
      if (this.dataTable.editingCell) {
        if (this.dataTable.editingCell !== this.el.nativeElement) {
          if (!this.dataTable.isEditingCellValid()) return;
          this.closeEditingCell(true, event);
          this.openCell();
        }
      } else this.openCell();
    }
  }
  openCell() {
    const editingRow = this.resolveEditingRow();
    const field = this.field();
    this.originalCellValue = editingRow && field != null ? editingRow[field] : this.data();
    this.dataTable.updateEditingCell(this.el.nativeElement, this.data(), this.field(), this.rowIndex());
    if (!this.$unstyled()) DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    ce(this.el.nativeElement, "data-p-cell-editing", "true");
    this.dataTable.onEditInit.emit({
      field: this.field(),
      data: this.data(),
      index: this.rowIndex()
    });
    setTimeout(() => {
      let focusCellSelector = this.pFocusCellSelector() || 'input, textarea, select, [tabindex]:not([tabindex="-1"])';
      let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
      if (focusableElement) focusableElement.focus();
    }, 50);
    this.overlayEventListener = (e5) => {
      if (this.el && this.el.nativeElement.contains(e5.target)) this.dataTable.selfClick = true;
    };
    this.dataTable.overlaySubscription = this.dataTable.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event) {
    const eventData = {
      field: this.dataTable.editingCellField,
      data: this.dataTable.editingCellData,
      originalEvent: event,
      index: this.dataTable.editingCellRowIndex
    };
    if (completed) this.dataTable.onEditComplete.emit(eventData);
    else {
      this.dataTable.onEditCancel.emit(eventData);
      const editingField = this.dataTable.editingCellField;
      const editingRow = this.resolveEditingRow();
      if (editingRow && editingField != null) editingRow[editingField] = this.originalCellValue;
    }
    this.originalCellValue = void 0;
    if (!this.$unstyled()) DomHandler.removeClass(this.dataTable.editingCell, "p-cell-editing");
    ce(this.el.nativeElement, "data-p-cell-editing", "false");
    this.dataTable.editingCell = null;
    this.dataTable.editingCellData = null;
    this.dataTable.editingCellField = null;
    this.dataTable.unbindDocumentEditListener();
    if (this.dataTable.overlaySubscription) this.dataTable.overlaySubscription.unsubscribe();
  }
  resolveEditingRow() {
    const rows = this.dataTable.value;
    const data = this.data();
    if (data && typeof data === "object") return data;
    const rowIndex = this.rowIndex();
    if (typeof rowIndex === "number" && rows?.[rowIndex]) return rows[rowIndex];
    const field = this.field();
    if (field != null) return rows?.find((element) => element[field] === data);
  }
  onEnterKeyDown(event) {
    const keyboardEvent = event;
    if (this.isEnabled() && !keyboardEvent.shiftKey) {
      if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
      event.preventDefault();
    }
  }
  onTabKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
      event.preventDefault();
    }
  }
  onEscapeKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dataTable.isEditingCellValid()) this.closeEditingCell(false, event);
      event.preventDefault();
    }
  }
  onShiftKeyDown(event) {
    if (this.isEnabled()) {
      if (event.shiftKey) this.moveToPreviousCell(event);
      else this.moveToNextCell(event);
    }
  }
  onArrowDown(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowUp(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowLeft(event) {
    if (this.isEnabled()) this.moveToPreviousCell(event);
  }
  onArrowRight(event) {
    if (this.isEnabled()) this.moveToNextCell(event);
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !et(cell, '[data-p-cell-editing="true"]')) cell = cell.parentElement;
      return cell;
    } else return null;
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      }
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      } else if (this.dataTable.isEditingCellValid()) this.closeEditingCell(true, event);
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement?.previousElementSibling;
      if (previousRow) prevCell = previousRow.lastElementChild;
    }
    if (prevCell) {
      if (et(prevCell, '[data-p-editable-column="true"]')) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else return null;
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement?.nextElementSibling;
      if (nextRow) nextCell = nextRow.firstElementChild;
    }
    if (nextCell) {
      if (et(nextCell, '[data-p-editable-column="true"]')) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else return null;
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement?.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && et(nextCell, '[data-p-editable-column="true"]')) return nextCell;
      return null;
    } else return null;
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement?.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && et(prevCell, '[data-p-editable-column="true"]')) return prevCell;
      return null;
    } else return null;
  }
  isEnabled() {
    return this.pEditableColumnDisabled() !== true;
  }
  onDestroy() {
    if (this.dataTable.overlaySubscription) this.dataTable.overlaySubscription.unsubscribe();
  }
  static \u0275fac = function EditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EditableColumn2)();
  };
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: EditableColumn2,
    selectors: [["", "pEditableColumn", ""]],
    hostVars: 1,
    hostBindings: function EditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function EditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKeyDown($event);
        })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeyDown($event);
        })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
          return ctx.onArrowDown($event);
        })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
          return ctx.onArrowUp($event);
        })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
          return ctx.onArrowLeft($event);
        })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
          return ctx.onArrowRight($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275attribute("data-p-editable-column", true);
      }
    },
    inputs: {
      data: [1, "pEditableColumn", "data"],
      field: [1, "pEditableColumnField", "field"],
      rowIndex: [1, "pEditableColumnRowIndex", "rowIndex"],
      pEditableColumnDisabled: [1, "pEditableColumnDisabled"],
      pFocusCellSelector: [1, "pFocusCellSelector"]
    },
    features: [i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(EditableColumn, [{
    type: Directive,
    args: [{
      selector: "[pEditableColumn]",
      standalone: true,
      host: { "[attr.data-p-editable-column]": "true" }
    }]
  }], () => [], {
    data: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableColumn",
        required: false
      }]
    }],
    field: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableColumnField",
        required: false
      }]
    }],
    rowIndex: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableColumnRowIndex",
        required: false
      }]
    }],
    pEditableColumnDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pEditableColumnDisabled",
        required: false
      }]
    }],
    pFocusCellSelector: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pFocusCellSelector",
        required: false
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    onTabKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }],
    onEscapeKeyDown: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    onShiftKeyDown: [
      {
        type: HostListener,
        args: ["keydown.tab", ["$event"]]
      },
      {
        type: HostListener,
        args: ["keydown.shift.tab", ["$event"]]
      },
      {
        type: HostListener,
        args: ["keydown.meta.tab", ["$event"]]
      }
    ],
    onArrowDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUp: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onArrowLeft: [{
      type: HostListener,
      args: ["keydown.arrowleft", ["$event"]]
    }],
    onArrowRight: [{
      type: HostListener,
      args: ["keydown.arrowright", ["$event"]]
    }]
  });
})();
var ReorderableRow = class ReorderableRow2 extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind2, { self: true });
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pReorderableRow"
  }));
  pReorderableRowDisabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "pReorderableRowDisabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  mouseDownListener;
  dragStartListener;
  dragEndListener;
  dragOverListener;
  dragLeaveListener;
  dropListener;
  dataTable = inject(TABLE_INSTANCE);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("reorderableRow"));
  }
  onAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
    this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
    this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
    this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
    this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    const targetElement = event.target;
    const isHandleClicked = this.isHandleElement(targetElement);
    this.el.nativeElement.draggable = isHandleClicked;
  }
  isHandleElement(element) {
    if (element?.classList.contains("p-datatable-reorderable-row-handle")) return true;
    if (element?.parentElement && !["TD", "TR"].includes(element?.parentElement?.tagName)) return this.isHandleElement(element?.parentElement);
    return false;
  }
  onDragStart(event) {
    this.dataTable.onRowDragStart(event, this.index());
  }
  onDragEnd(event) {
    this.dataTable.onRowDragEnd(event);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event) {
    this.dataTable.onRowDragOver(event, this.index(), this.el.nativeElement);
    event.preventDefault();
  }
  onDragLeave(event) {
    this.dataTable.onRowDragLeave(event, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled() !== true;
  }
  onDrop(event) {
    if (this.isEnabled() && this.dataTable.rowDragging) this.dataTable.onRowDrop(event, this.el.nativeElement);
    event.preventDefault();
  }
  onDestroy() {
    this.unbindEvents();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ReorderableRow_BaseFactory = void 0;
    return function ReorderableRow_Factory(__ngFactoryType__) {
      return (\u0275ReorderableRow_BaseFactory || (\u0275ReorderableRow_BaseFactory = i010.\u0275\u0275getInheritedFactory(ReorderableRow2)))(__ngFactoryType__ || ReorderableRow2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: ReorderableRow2,
    selectors: [["", "pReorderableRow", ""]],
    hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("drop", function ReorderableRow_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      index: [1, "pReorderableRow", "index"],
      pReorderableRowDisabled: [1, "pReorderableRowDisabled"]
    },
    features: [i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ReorderableRow, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRow]",
      standalone: true,
      hostDirectives: [Bind2]
    }]
  }], null, {
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pReorderableRow",
        required: false
      }]
    }],
    pReorderableRowDisabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "pReorderableRowDisabled",
        required: false
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var InitEditableRow = class InitEditableRow2 extends BaseComponent {
  dataTable = inject(TABLE_INSTANCE);
  editableRow = inject(EditableRow);
  onClick(event) {
    this.dataTable.initRowEdit(this.editableRow.data());
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InitEditableRow_BaseFactory = void 0;
    return function InitEditableRow_Factory(__ngFactoryType__) {
      return (\u0275InitEditableRow_BaseFactory || (\u0275InitEditableRow_BaseFactory = i010.\u0275\u0275getInheritedFactory(InitEditableRow2)))(__ngFactoryType__ || InitEditableRow2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: InitEditableRow2,
    selectors: [["", "pInitEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-init"],
    hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function InitEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    features: [i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(InitEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pInitEditableRow]",
      standalone: true,
      host: { class: "p-datatable-row-editor-init" }
    }]
  }], null, { onClick: [{
    type: HostListener,
    args: ["click", ["$event"]]
  }] });
})();
var SaveEditableRow = class SaveEditableRow2 extends BaseComponent {
  hostName = "Table";
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  editableRow = inject(EditableRow);
  onClick(event) {
    this.dataTable.saveRowEdit(this.editableRow.data(), this.editableRow.el.nativeElement);
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SaveEditableRow_BaseFactory = void 0;
    return function SaveEditableRow_Factory(__ngFactoryType__) {
      return (\u0275SaveEditableRow_BaseFactory || (\u0275SaveEditableRow_BaseFactory = i010.\u0275\u0275getInheritedFactory(SaveEditableRow2)))(__ngFactoryType__ || SaveEditableRow2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: SaveEditableRow2,
    selectors: [["", "pSaveEditableRow", ""]],
    hostVars: 2,
    hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function SaveEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("pcRowEditorSave"));
      }
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(SaveEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pSaveEditableRow]",
      standalone: true,
      providers: [TableStyle],
      host: { "[class]": 'cx("pcRowEditorSave")' }
    }]
  }], null, { onClick: [{
    type: HostListener,
    args: ["click", ["$event"]]
  }] });
})();
var CancelEditableRow = class CancelEditableRow2 extends BaseComponent {
  dataTable = inject(TABLE_INSTANCE);
  editableRow = inject(EditableRow);
  _componentStyle = inject(TableStyle);
  onClick(event) {
    this.dataTable.cancelRowEdit(this.editableRow.data());
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CancelEditableRow_BaseFactory = void 0;
    return function CancelEditableRow_Factory(__ngFactoryType__) {
      return (\u0275CancelEditableRow_BaseFactory || (\u0275CancelEditableRow_BaseFactory = i010.\u0275\u0275getInheritedFactory(CancelEditableRow2)))(__ngFactoryType__ || CancelEditableRow2);
    };
  })();
  static \u0275dir = /* @__PURE__ */ i010.\u0275\u0275defineDirective({
    type: CancelEditableRow2,
    selectors: [["", "pCancelEditableRow", ""]],
    hostVars: 2,
    hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275listener("click", function CancelEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        i010.\u0275\u0275classMap(ctx.cx("rowEditorCancel"));
      }
    },
    features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(CancelEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pCancelEditableRow]",
      standalone: true,
      host: { "[class]": "cx('rowEditorCancel')" },
      providers: [TableStyle]
    }]
  }], null, { onClick: [{
    type: HostListener,
    args: ["click", ["$event"]]
  }] });
})();
var SortIcon = class SortIcon2 extends BaseComponent {
  field = input(...ngDevMode ? [void 0, { debugName: "field" }] : (
    /* istanbul ignore next */
    []
  ));
  sortOrder = signal(0, ...ngDevMode ? [{ debugName: "sortOrder" }] : (
    /* istanbul ignore next */
    []
  ));
  _componentStyle = inject(TableStyle);
  dataTable = inject(TABLE_INSTANCE);
  constructor() {
    super();
    this.dataTable.tableService.sortSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.updateSortState();
    });
  }
  onInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.dataTable.sortMode() === "single") this.sortOrder.set(this.dataTable.isSorted(this.field()) ? this.dataTable.sortOrder : 0);
    else if (this.dataTable.sortMode() === "multiple") {
      let sortMeta = this.dataTable.getSortMeta(this.field());
      this.sortOrder.set(sortMeta ? sortMeta.order : 0);
    }
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dataTable.multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dataTable.sortMode() === "multiple" && this.dataTable.showInitialSortBadge() && multiSortMeta.length > 1) for (let i = 0; i < multiSortMeta.length; i++) {
      let meta = multiSortMeta[i];
      if (meta.field === this.field() || meta.field === this.field()) {
        index = i;
        break;
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return (this.dataTable?.groupRowsBy() || "") && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dataTable.sortMode() === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  static \u0275fac = function SortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SortIcon2)();
  };
  static \u0275cmp = (function() {
    const _c0 = (a0) => ({
      $implicit: a0
    });
    function SortIcon_Conditional_0_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 5);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
      }
    }
    function SortIcon_Conditional_0_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 6);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
      }
    }
    function SortIcon_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 7);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
      }
    }
    function SortIcon_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, SortIcon_Conditional_0_Conditional_0_Template, 1, 2, ":svg:svg", 2);
        i010.\u0275\u0275conditionalCreate(1, SortIcon_Conditional_0_Conditional_1_Template, 1, 2, ":svg:svg", 3);
        i010.\u0275\u0275conditionalCreate(2, SortIcon_Conditional_0_Conditional_2_Template, 1, 2, ":svg:svg", 4);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275conditional(ctx_r0.sortOrder() === 0 ? 0 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.sortOrder() === 1 ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.sortOrder() === -1 ? 2 : -1);
      }
    }
    function SortIcon_Conditional_1_1_ng_template_0_Template(rf, ctx) {
    }
    function SortIcon_Conditional_1_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, SortIcon_Conditional_1_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function SortIcon_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "span");
        i010.\u0275\u0275template(1, SortIcon_Conditional_1_1_Template, 1, 0, null, 8);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("sortableColumnIcon"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.dataTable.sortIconTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(4, _c0, ctx_r0.sortOrder()));
      }
    }
    function SortIcon_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "p-badge", 9);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("sortableColumnBadge"));
        i010.\u0275\u0275property("value", ctx_r0.getBadgeValue());
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: SortIcon2,
      selectors: [["p-sort-icon"], ["p-sorticon"]],
      inputs: {
        field: [1, "field"]
      },
      features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275InheritDefinitionFeature],
      decls: 3,
      vars: 3,
      consts: [[3, "class"], ["size", "small", 3, "class", "value"], ["data-p-icon", "sort-alt", 3, "class"], ["data-p-icon", "sort-amount-up-alt", 3, "class"], ["data-p-icon", "sort-amount-down", 3, "class"], ["data-p-icon", "sort-alt"], ["data-p-icon", "sort-amount-up-alt"], ["data-p-icon", "sort-amount-down"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "small", 3, "value"]],
      template: function SortIcon_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275conditionalCreate(0, SortIcon_Conditional_0_Template, 3, 3);
          i010.\u0275\u0275conditionalCreate(1, SortIcon_Conditional_1_Template, 2, 6, "span", 0);
          i010.\u0275\u0275conditionalCreate(2, SortIcon_Conditional_2_Template, 1, 3, "p-badge", 1);
        }
        if (rf & 2) {
          i010.\u0275\u0275conditional(!ctx.dataTable.sortIconTemplate() ? 0 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.dataTable.sortIconTemplate() ? 1 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.isMultiSorted() ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, BadgeModule, i1$2.Badge, SortAlt, SortAmountUpAlt, SortAmountDown],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(SortIcon, [{
    type: Component10,
    args: [{
      selector: "p-sort-icon, p-sorticon",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        BadgeModule,
        SortAlt,
        SortAmountUpAlt,
        SortAmountDown
      ],
      template: `
        @if (!dataTable.sortIconTemplate()) {
            @if (sortOrder() === 0) {
                <svg data-p-icon="sort-alt" [class]="cx('sortableColumnIcon')" />
            }
            @if (sortOrder() === 1) {
                <svg data-p-icon="sort-amount-up-alt" [class]="cx('sortableColumnIcon')" />
            }
            @if (sortOrder() === -1) {
                <svg data-p-icon="sort-amount-down" [class]="cx('sortableColumnIcon')" />
            }
        }
        @if (dataTable.sortIconTemplate()) {
            <span [class]="cx('sortableColumnIcon')">
                <ng-template *ngTemplateOutlet="dataTable.sortIconTemplate(); context: { $implicit: sortOrder() }"></ng-template>
            </span>
        }
        @if (isMultiSorted()) {
            <p-badge [class]="cx('sortableColumnBadge')" [value]="getBadgeValue()" size="small" />
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TableStyle]
    }]
  }], () => [], { field: [{
    type: i010.Input,
    args: [{
      isSignal: true,
      alias: "field",
      required: false
    }]
  }] });
})();
var CellEditor = class CellEditor2 extends BaseComponent {
  _inputTemplate = contentChild("input", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_inputTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  _outputTemplate = contentChild("output", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_outputTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  dataTable = inject(TABLE_INSTANCE);
  editableColumn = inject(EditableColumn, { optional: true });
  editableRow = inject(EditableRow, { optional: true });
  get editing() {
    return !!(this.dataTable.editingCell && this.editableColumn && this.dataTable.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dataTable.editMode() === "row" && this.dataTable.isRowEditing(this.editableRow.data()));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CellEditor_BaseFactory = void 0;
    return function CellEditor_Factory(__ngFactoryType__) {
      return (\u0275CellEditor_BaseFactory || (\u0275CellEditor_BaseFactory = i010.\u0275\u0275getInheritedFactory(CellEditor2)))(__ngFactoryType__ || CellEditor2);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _c0 = ["input"];
    const _c1 = ["output"];
    function CellEditor_Conditional_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function CellEditor_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, CellEditor_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0._inputTemplate());
      }
    }
    function CellEditor_Conditional_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function CellEditor_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, CellEditor_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0._outputTemplate());
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: CellEditor2,
      selectors: [["p-cell-editor"], ["p-celleditor"]],
      contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i010.\u0275\u0275contentQuerySignal(dirIndex, ctx._inputTemplate, _c0, 4)(dirIndex, ctx._outputTemplate, _c1, 4);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance(2);
        }
      },
      features: [i010.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 2,
      consts: [[4, "ngTemplateOutlet"]],
      template: function CellEditor_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275conditionalCreate(0, CellEditor_Conditional_0_Template, 1, 1, "ng-container");
          i010.\u0275\u0275conditionalCreate(1, CellEditor_Conditional_1_Template, 1, 1, "ng-container");
        }
        if (rf & 2) {
          i010.\u0275\u0275conditional(ctx.editing ? 0 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(!ctx.editing ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(CellEditor, [{
    type: Component10,
    args: [{
      selector: "p-cell-editor, p-celleditor",
      standalone: true,
      imports: [NgTemplateOutlet],
      template: `
        @if (editing) {
            <ng-container *ngTemplateOutlet="_inputTemplate()"></ng-container>
        }
        @if (!editing) {
            <ng-container *ngTemplateOutlet="_outputTemplate()"></ng-container>
        }
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    _inputTemplate: [{
      type: i010.ContentChild,
      args: ["input", {
        descendants: false,
        isSignal: true
      }]
    }],
    _outputTemplate: [{
      type: i010.ContentChild,
      args: ["output", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var TableRadioButton = class TableRadioButton2 extends BaseComponent {
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  name = input(...ngDevMode ? [void 0, { debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  inputViewChild = viewChild("rb", ...ngDevMode ? [{ debugName: "inputViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  checked = signal(false, ...ngDevMode ? [{ debugName: "checked" }] : (
    /* istanbul ignore next */
    []
  ));
  dataTable = inject(TABLE_INSTANCE);
  get aria() {
    return this.dataTable.config.translation.aria;
  }
  resolvedAriaLabel = computed(() => {
    const checked = this.checked();
    return this.ariaLabel() || (this.aria ? checked ? this.aria.selectRow : this.aria.unselectRow : void 0);
  }, ...ngDevMode ? [{ debugName: "resolvedAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    super();
    this.dataTable.tableService.selectionSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.checked.set(this.dataTable.isSelected(this.value()));
    });
  }
  onInit() {
    this.checked.set(this.dataTable.isSelected(this.value()));
  }
  onClick(event) {
    if (!this.disabled()) {
      this.dataTable.toggleRowWithRadio({
        originalEvent: event.originalEvent,
        rowIndex: this.index()
      }, this.value());
      this.inputViewChild()?.inputViewChild().nativeElement?.focus();
    }
    DomHandler.clearSelection();
  }
  static \u0275fac = function TableRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableRadioButton2)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _c0 = ["rb"];
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: TableRadioButton2,
      selectors: [["p-table-radio-button"], ["p-tableradiobutton"]],
      viewQuery: function TableRadioButton_Query(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275viewQuerySignal(ctx.inputViewChild, _c0, 5);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance();
        }
      },
      inputs: {
        value: [1, "value"],
        disabled: [1, "disabled"],
        index: [1, "index"],
        inputId: [1, "inputId"],
        name: [1, "name"],
        ariaLabel: [1, "ariaLabel"]
      },
      features: [i010.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 8,
      consts: [["rb", ""], [3, "ngModelChange", "onClick", "ngModel", "disabled", "inputId", "name", "ariaLabel", "binary", "value", "unstyled"]],
      template: function TableRadioButton_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275elementStart(0, "p-radiobutton", 1, 0);
          i010.\u0275\u0275controlCreate();
          i010.\u0275\u0275listener("ngModelChange", function TableRadioButton_Template_p_radiobutton_ngModelChange_0_listener($event) {
            return ctx.checked.set($event);
          })("onClick", function TableRadioButton_Template_p_radiobutton_onClick_0_listener($event) {
            return ctx.onClick($event);
          });
          i010.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i010.\u0275\u0275property("ngModel", ctx.checked())("disabled", ctx.disabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.resolvedAriaLabel())("binary", true)("value", ctx.value())("unstyled", ctx.unstyled());
          i010.\u0275\u0275control();
        }
      },
      dependencies: [RadioButtonModule, i1$1.RadioButton, FormsModule, i2.NgControlStatus, i2.NgModel],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableRadioButton, [{
    type: Component10,
    args: [{
      selector: "p-table-radio-button, p-tableradiobutton",
      standalone: true,
      imports: [RadioButtonModule, FormsModule],
      template: `<p-radiobutton
        #rb
        [ngModel]="checked()"
        (ngModelChange)="checked.set($event)"
        [disabled]="disabled()"
        [inputId]="inputId()"
        [name]="name()!"
        [ariaLabel]="resolvedAriaLabel()"
        [binary]="true"
        [value]="value()"
        (onClick)="onClick($event)"
        [unstyled]="unstyled()"
    /> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    value: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    disabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    inputId: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    name: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    inputViewChild: [{
      type: i010.ViewChild,
      args: ["rb", { isSignal: true }]
    }]
  });
})();
var TableCheckbox = class TableCheckbox2 extends BaseComponent {
  value = input(...ngDevMode ? [void 0, { debugName: "value" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  required = input(false, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "required" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  index = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "index" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  name = input(...ngDevMode ? [void 0, { debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  checked = signal(false, ...ngDevMode ? [{ debugName: "checked" }] : (
    /* istanbul ignore next */
    []
  ));
  dataTable = inject(TABLE_INSTANCE);
  get aria() {
    return this.dataTable.config.translation.aria;
  }
  resolvedAriaLabel = computed(() => {
    const checked = this.checked();
    return this.ariaLabel() || (this.aria ? checked ? this.aria.selectRow : this.aria.unselectRow : void 0);
  }, ...ngDevMode ? [{ debugName: "resolvedAriaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  tableService = inject(TableService);
  constructor() {
    super();
    this.dataTable.tableService.selectionSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.checked.set(this.dataTable.isSelected(this.value()));
    });
    effect((onCleanup) => {
      const value = this.value();
      this.dataTable.setRowCheckboxDisabled(value, !!this.disabled());
      onCleanup(() => this.dataTable.setRowCheckboxDisabled(value, false));
    });
  }
  onInit() {
    this.checked.set(this.dataTable.isSelected(this.value()));
  }
  onClick({ originalEvent }) {
    if (!this.disabled()) this.dataTable.toggleRowWithCheckbox({
      originalEvent,
      rowIndex: this.index() || 0
    }, this.value());
    DomHandler.clearSelection();
  }
  static \u0275fac = function TableCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableCheckbox2)();
  };
  static \u0275cmp = /* @__PURE__ */ (function() {
    const _c0 = (a0) => ({
      $implicit: a0
    });
    function TableCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template(rf, ctx) {
    }
    function TableCheckbox_Conditional_1_ng_template_0_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function TableCheckbox_Conditional_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableCheckbox_Conditional_1_ng_template_0_0_Template, 1, 0, null, 2);
      }
      if (rf & 2) {
        const template_r1 = i010.\u0275\u0275nextContext();
        const ctx_r1 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", template_r1)("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(2, _c0, ctx_r1.checked()));
      }
    }
    function TableCheckbox_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableCheckbox_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", null, 0, i010.\u0275\u0275templateRefExtractor);
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: TableCheckbox2,
      selectors: [["p-table-checkbox"], ["p-tablecheckbox"]],
      inputs: {
        value: [1, "value"],
        disabled: [1, "disabled"],
        required: [1, "required"],
        index: [1, "index"],
        inputId: [1, "inputId"],
        name: [1, "name"],
        ariaLabel: [1, "ariaLabel"]
      },
      features: [i010.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 9,
      consts: [["icon", ""], [3, "ngModelChange", "onChange", "ngModel", "binary", "required", "disabled", "inputId", "name", "ariaLabel", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275elementStart(0, "p-checkbox", 1);
          i010.\u0275\u0275controlCreate();
          i010.\u0275\u0275listener("ngModelChange", function TableCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
            return ctx.checked.set($event);
          })("onChange", function TableCheckbox_Template_p_checkbox_onChange_0_listener($event) {
            return ctx.onClick($event);
          });
          i010.\u0275\u0275conditionalCreate(1, TableCheckbox_Conditional_1_Template, 2, 0);
          i010.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_9_0 = void 0;
          i010.\u0275\u0275property("ngModel", ctx.checked())("binary", true)("required", ctx.required())("disabled", ctx.disabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.resolvedAriaLabel())("unstyled", ctx.unstyled());
          i010.\u0275\u0275control();
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional((tmp_9_0 = ctx.dataTable.checkboxIconTemplate()) ? 1 : -1, tmp_9_0);
        }
      },
      dependencies: [NgTemplateOutlet, CheckboxModule, i1.Checkbox, FormsModule, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableCheckbox, [{
    type: Component10,
    args: [{
      selector: "p-table-checkbox, p-tablecheckbox",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        CheckboxModule,
        FormsModule
      ],
      template: `
        <p-checkbox
            [ngModel]="checked()"
            (ngModelChange)="checked.set($event)"
            [binary]="true"
            (onChange)="onClick($event)"
            [required]="required()"
            [disabled]="disabled()"
            [inputId]="inputId()"
            [name]="name()!"
            [ariaLabel]="resolvedAriaLabel()"
            [unstyled]="unstyled()"
        >
            @if (dataTable.checkboxIconTemplate(); as template) {
                <ng-template #icon>
                    <ng-template *ngTemplateOutlet="template; context: { $implicit: checked() }" />
                </ng-template>
            }
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    value: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }],
    disabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    required: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    index: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    inputId: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    name: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }]
  });
})();
var TableHeaderCheckbox = class TableHeaderCheckbox2 extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind2, { self: true });
  disabled = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "disabled" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : (
    /* istanbul ignore next */
    []
  ));
  name = input(...ngDevMode ? [void 0, { debugName: "name" }] : (
    /* istanbul ignore next */
    []
  ));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  checked;
  resolvedAriaLabel;
  dataTable = inject(TABLE_INSTANCE);
  tableService = inject(TableService);
  get aria() {
    return this.dataTable.config.translation.aria;
  }
  constructor() {
    super();
    this.dataTable.tableService.valueSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.checked = this.updateCheckedState();
      this.resolvedAriaLabel = this.ariaLabel() || (this.aria ? this.checked ? this.aria.selectAll : this.aria.unselectAll : void 0);
    });
    this.dataTable.tableService.selectionSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("headerCheckbox"));
  }
  onInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event) {
    if (!this.disabled()) {
      if (this.dataTable.value && this.dataTable.value.length > 0) this.dataTable.toggleRowsWithCheckbox(event, this.checked || false);
    }
    DomHandler.clearSelection();
  }
  isDisabled() {
    return this.disabled() || !this.dataTable.value || !this.dataTable.value.length;
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dataTable._selectAll !== null) return this.dataTable._selectAll;
    else {
      const data = this.dataTable.selectionPageOnly() ? this.dataTable.dataToRender(this.dataTable.processedData) : this.dataTable.processedData;
      const selectableVal = (this.dataTable.frozenValue() ? [...this.dataTable.frozenValue(), ...data] : data).filter((data2, index) => (!this.dataTable.rowSelectable() || this.dataTable.rowSelectable()({
        data: data2,
        index
      })) && !this.dataTable.isRowCheckboxDisabled(data2));
      const isRowSelected = this.dataTable.compareSelectionBy() === "equals" ? (v) => this.dataTable.selection().some((s) => this.dataTable.equals(v, s)) : (v) => this.dataTable.isSelected(v);
      return ObjectUtils.isNotEmpty(selectableVal) && ObjectUtils.isNotEmpty(this.dataTable.selection()) && selectableVal.every(isRowSelected);
    }
  }
  static \u0275fac = function TableHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableHeaderCheckbox2)();
  };
  static \u0275cmp = (function() {
    const _c0 = (a0) => ({
      $implicit: a0
    });
    function TableHeaderCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template(rf, ctx) {
    }
    function TableHeaderCheckbox_Conditional_1_ng_template_0_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableHeaderCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function TableHeaderCheckbox_Conditional_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableHeaderCheckbox_Conditional_1_ng_template_0_0_Template, 1, 0, null, 2);
      }
      if (rf & 2) {
        const template_r1 = i010.\u0275\u0275nextContext();
        const ctx_r1 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", template_r1)("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(2, _c0, ctx_r1.checked));
      }
    }
    function TableHeaderCheckbox_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, TableHeaderCheckbox_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", null, 0, i010.\u0275\u0275templateRefExtractor);
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: TableHeaderCheckbox2,
      selectors: [["p-table-header-checkbox"], ["p-tableheadercheckbox"]],
      inputs: {
        disabled: [1, "disabled"],
        inputId: [1, "inputId"],
        name: [1, "name"],
        ariaLabel: [1, "ariaLabel"]
      },
      features: [i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 9,
      consts: [["icon", ""], [3, "ngModelChange", "onChange", "pt", "ngModel", "binary", "disabled", "inputId", "name", "ariaLabel", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TableHeaderCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275elementStart(0, "p-checkbox", 1);
          i010.\u0275\u0275controlCreate();
          i010.\u0275\u0275twoWayListener("ngModelChange", function TableHeaderCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
            i010.\u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
            return $event;
          });
          i010.\u0275\u0275listener("onChange", function TableHeaderCheckbox_Template_p_checkbox_onChange_0_listener($event) {
            return ctx.onClick($event);
          });
          i010.\u0275\u0275conditionalCreate(1, TableHeaderCheckbox_Conditional_1_Template, 2, 0);
          i010.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_9_0 = void 0;
          i010.\u0275\u0275property("pt", ctx.ptm("pcCheckbox"));
          i010.\u0275\u0275twoWayProperty("ngModel", ctx.checked);
          i010.\u0275\u0275property("binary", true)("disabled", ctx.isDisabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.resolvedAriaLabel)("unstyled", ctx.unstyled());
          i010.\u0275\u0275control();
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional((tmp_9_0 = ctx.dataTable.headerCheckboxIconTemplate()) ? 1 : -1, tmp_9_0);
        }
      },
      dependencies: [NgTemplateOutlet, CheckboxModule, i1.Checkbox, FormsModule, i2.NgControlStatus, i2.NgModel],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableHeaderCheckbox, [{
    type: Component10,
    args: [{
      selector: "p-table-header-checkbox, p-tableheadercheckbox",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        CheckboxModule,
        FormsModule
      ],
      template: `
        <p-checkbox [pt]="ptm('pcCheckbox')" [(ngModel)]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="isDisabled()" [inputId]="inputId()" [name]="name()!" [ariaLabel]="resolvedAriaLabel" [unstyled]="unstyled()">
            @if (dataTable.headerCheckboxIconTemplate(); as template) {
                <ng-template #icon>
                    <ng-template *ngTemplateOutlet="template; context: { $implicit: checked }" />
                </ng-template>
            }
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    disabled: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    inputId: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "inputId",
        required: false
      }]
    }],
    name: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }]
  });
})();
var ColumnFilterFormElement = class ColumnFilterFormElement2 extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(TableStyle);
  field = input(...ngDevMode ? [void 0, { debugName: "field" }] : (
    /* istanbul ignore next */
    []
  ));
  type = input(...ngDevMode ? [void 0, { debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  filterConstraint = input(...ngDevMode ? [void 0, { debugName: "filterConstraint" }] : (
    /* istanbul ignore next */
    []
  ));
  filterTemplate = input(...ngDevMode ? [void 0, { debugName: "filterTemplate" }] : (
    /* istanbul ignore next */
    []
  ));
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  minFractionDigits = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "minFractionDigits" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => numberAttribute(v, void 0)
  }));
  maxFractionDigits = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "maxFractionDigits" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => numberAttribute(v, void 0)
  }));
  prefix = input(...ngDevMode ? [void 0, { debugName: "prefix" }] : (
    /* istanbul ignore next */
    []
  ));
  suffix = input(...ngDevMode ? [void 0, { debugName: "suffix" }] : (
    /* istanbul ignore next */
    []
  ));
  locale = input(...ngDevMode ? [void 0, { debugName: "locale" }] : (
    /* istanbul ignore next */
    []
  ));
  localeMatcher = input(...ngDevMode ? [void 0, { debugName: "localeMatcher" }] : (
    /* istanbul ignore next */
    []
  ));
  currency = input(...ngDevMode ? [void 0, { debugName: "currency" }] : (
    /* istanbul ignore next */
    []
  ));
  currencyDisplay = input(...ngDevMode ? [void 0, { debugName: "currencyDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  useGrouping = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "useGrouping" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  filterOn = input(...ngDevMode ? [void 0, { debugName: "filterOn" }] : (
    /* istanbul ignore next */
    []
  ));
  dataTable = inject(TABLE_INSTANCE);
  colFilter = inject(COLUMN_FILTER_INSTANCE);
  showButtons = computed(() => this.colFilter.showButtons(), ...ngDevMode ? [{ debugName: "showButtons" }] : (
    /* istanbul ignore next */
    []
  ));
  onFilterCallback = ((value) => {
    const constraint = this.filterConstraint();
    if (constraint) constraint.value = value;
    this.colFilter.setHasFilter(true);
    this.dataTable._filter();
  }).bind(this);
  filterTemplateContext() {
    return {
      $implicit: this.filterConstraint()?.value,
      filterCallback: this.onFilterCallback,
      type: this.type(),
      field: this.field(),
      filterConstraint: this.filterConstraint(),
      placeholder: this.placeholder(),
      minFractionDigits: this.minFractionDigits(),
      maxFractionDigits: this.maxFractionDigits(),
      prefix: this.prefix(),
      suffix: this.suffix(),
      locale: this.locale(),
      localeMatcher: this.localeMatcher(),
      currency: this.currency(),
      currencyDisplay: this.currencyDisplay(),
      useGrouping: this.useGrouping(),
      showButtons: this.showButtons()
    };
  }
  constructor() {
    super();
    this.dataTable.tableService.valueSource$.pipe(takeUntilDestroyed()).subscribe(() => this.cd.markForCheck());
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("columnFilterFormElement"));
  }
  onModelChange(value) {
    const constraint = this.filterConstraint();
    if (constraint) constraint.value = value;
    const applyButtonVisible = this.showButtons() && this.colFilter.showApplyButton();
    if (this.type() === "boolean" || this.type() === "date" && !applyButtonVisible || (this.type() === "text" || this.type() === "numeric") && this.filterOn() === "input" || this.dataTable.isFilterBlank(value)) {
      this.colFilter.setHasFilter(true);
      this.dataTable._filter();
    }
  }
  onTextInputEnterKeyDown(event) {
    this.colFilter.setHasFilter(true);
    this.dataTable._filter();
    event.preventDefault();
  }
  onNumericInputKeyDown(event) {
    if (event.key === "Enter") {
      this.dataTable._filter();
      event.preventDefault();
    }
  }
  static \u0275fac = function ColumnFilterFormElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ColumnFilterFormElement2)();
  };
  static \u0275cmp = (function() {
    function ColumnFilterFormElement_Conditional_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function ColumnFilterFormElement_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, ColumnFilterFormElement_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 0);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.filterTemplate())("ngTemplateOutletContext", ctx_r0.filterTemplateContext());
      }
    }
    function ColumnFilterFormElement_Conditional_1_Case_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "input", 5);
        i010.\u0275\u0275listener("input", function ColumnFilterFormElement_Conditional_1_Case_0_Template_input_input_0_listener($event) {
          i010.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onModelChange($event.target.value));
        })("keydown.enter", function ColumnFilterFormElement_Conditional_1_Case_0_Template_input_keydown_enter_0_listener($event) {
          i010.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onTextInputEnterKeyDown($event));
        });
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ariaLabel", ctx_r0.ariaLabel())("pt", ctx_r0.ptm("pcFilterInputText"))("value", ctx_r0.filterConstraint()?.value)("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("placeholder", ctx_r0.placeholder());
      }
    }
    function ColumnFilterFormElement_Conditional_1_Case_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-input-number", 6);
        i010.\u0275\u0275controlCreate();
        i010.\u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_Conditional_1_Case_1_Template_p_input_number_ngModelChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onModelChange($event));
        })("onKeyDown", function ColumnFilterFormElement_Conditional_1_Case_1_Template_p_input_number_onKeyDown_0_listener($event) {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onNumericInputKeyDown($event));
        });
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("ngModel", ctx_r0.filterConstraint()?.value)("showButtons", ctx_r0.showButtons())("minFractionDigits", ctx_r0.minFractionDigits())("maxFractionDigits", ctx_r0.maxFractionDigits())("ariaLabel", ctx_r0.ariaLabel())("prefix", ctx_r0.prefix())("suffix", ctx_r0.suffix())("placeholder", ctx_r0.placeholder())("mode", ctx_r0.currency() ? "currency" : "decimal")("locale", ctx_r0.locale())("localeMatcher", ctx_r0.localeMatcher())("currency", ctx_r0.currency())("currencyDisplay", ctx_r0.currencyDisplay())("useGrouping", ctx_r0.useGrouping())("pt", ctx_r0.ptm("pcFilterInputNumber"))("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275control();
      }
    }
    function ColumnFilterFormElement_Conditional_1_Case_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-checkbox", 7);
        i010.\u0275\u0275controlCreate();
        i010.\u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_Conditional_1_Case_2_Template_p_checkbox_ngModelChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r4);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onModelChange($event));
        });
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pt", ctx_r0.ptm("pcFilterCheckbox"))("indeterminate", ctx_r0.filterConstraint()?.value === null)("binary", true)("ngModel", ctx_r0.filterConstraint()?.value)("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275control();
      }
    }
    function ColumnFilterFormElement_Conditional_1_Case_3_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-datepicker", 8);
        i010.\u0275\u0275controlCreate();
        i010.\u0275\u0275listener("ngModelChange", function ColumnFilterFormElement_Conditional_1_Case_3_Template_p_datepicker_ngModelChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r5);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onModelChange($event));
        });
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pt", ctx_r0.ptm("pcFilterDatePicker"))("ariaLabel", ctx_r0.ariaLabel())("placeholder", ctx_r0.placeholder())("ngModel", ctx_r0.filterConstraint()?.value)("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275control();
      }
    }
    function ColumnFilterFormElement_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, ColumnFilterFormElement_Conditional_1_Case_0_Template, 1, 5, "input", 1)(1, ColumnFilterFormElement_Conditional_1_Case_1_Template, 1, 16, "p-input-number", 2)(2, ColumnFilterFormElement_Conditional_1_Case_2_Template, 1, 5, "p-checkbox", 3)(3, ColumnFilterFormElement_Conditional_1_Case_3_Template, 1, 5, "p-datepicker", 4);
      }
      if (rf & 2) {
        let tmp_1_0 = void 0;
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275conditional((tmp_1_0 = ctx_r0.type()) === "text" ? 0 : tmp_1_0 === "numeric" ? 1 : tmp_1_0 === "boolean" ? 2 : tmp_1_0 === "date" ? 3 : -1);
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: ColumnFilterFormElement2,
      selectors: [["p-column-filter-form-element"], ["p-columnfilterformelement"]],
      inputs: {
        field: [1, "field"],
        type: [1, "type"],
        filterConstraint: [1, "filterConstraint"],
        filterTemplate: [1, "filterTemplate"],
        placeholder: [1, "placeholder"],
        minFractionDigits: [1, "minFractionDigits"],
        maxFractionDigits: [1, "maxFractionDigits"],
        prefix: [1, "prefix"],
        suffix: [1, "suffix"],
        locale: [1, "locale"],
        localeMatcher: [1, "localeMatcher"],
        currency: [1, "currency"],
        currencyDisplay: [1, "currencyDisplay"],
        useGrouping: [1, "useGrouping"],
        ariaLabel: [1, "ariaLabel"],
        filterOn: [1, "filterOn"]
      },
      features: [i010.\u0275\u0275ProvidersFeature([TableStyle]), i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature],
      decls: 2,
      vars: 1,
      consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "pInputText", "", 3, "ariaLabel", "pt", "value", "unstyled"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "pt", "unstyled"], [3, "pt", "indeterminate", "binary", "ngModel", "unstyled"], ["appendTo", "body", 3, "pt", "ariaLabel", "placeholder", "ngModel", "unstyled"], ["type", "text", "pInputText", "", 3, "input", "keydown.enter", "ariaLabel", "pt", "value", "unstyled"], [3, "ngModelChange", "onKeyDown", "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "pt", "unstyled"], [3, "ngModelChange", "pt", "indeterminate", "binary", "ngModel", "unstyled"], ["appendTo", "body", 3, "ngModelChange", "pt", "ariaLabel", "placeholder", "ngModel", "unstyled"]],
      template: function ColumnFilterFormElement_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275conditionalCreate(0, ColumnFilterFormElement_Conditional_0_Template, 1, 2, "ng-container")(1, ColumnFilterFormElement_Conditional_1_Template, 4, 1);
        }
        if (rf & 2) {
          i010.\u0275\u0275conditional(ctx.filterTemplate() ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, FormsModule, i2.NgControlStatus, i2.NgModel, InputTextModule, i3$1.InputText, InputNumberModule, i4$1.InputNumber, CheckboxModule, i1.Checkbox, DatePickerModule, i6.DatePicker, BindModule],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ColumnFilterFormElement, [{
    type: Component10,
    args: [{
      selector: "p-column-filter-form-element, p-columnfilterformelement",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        FormsModule,
        InputTextModule,
        InputNumberModule,
        CheckboxModule,
        DatePickerModule,
        BindModule
      ],
      template: `
        @if (filterTemplate()) {
            <ng-container *ngTemplateOutlet="filterTemplate(); context: filterTemplateContext()" />
        } @else {
            @switch (type()) {
                @case ('text') {
                    <input
                        type="text"
                        [ariaLabel]="ariaLabel()"
                        pInputText
                        [pt]="ptm('pcFilterInputText')"
                        [value]="filterConstraint()?.value"
                        (input)="onModelChange($event.target.value)"
                        (keydown.enter)="onTextInputEnterKeyDown($event)"
                        [attr.placeholder]="placeholder()"
                        [unstyled]="unstyled()"
                    />
                }
                @case ('numeric') {
                    <p-input-number
                        [ngModel]="filterConstraint()?.value"
                        (ngModelChange)="onModelChange($event)"
                        (onKeyDown)="onNumericInputKeyDown($event)"
                        [showButtons]="showButtons()"
                        [minFractionDigits]="minFractionDigits()"
                        [maxFractionDigits]="maxFractionDigits()"
                        [ariaLabel]="ariaLabel()"
                        [prefix]="prefix()"
                        [suffix]="suffix()"
                        [placeholder]="placeholder()"
                        [mode]="currency() ? 'currency' : 'decimal'"
                        [locale]="locale()"
                        [localeMatcher]="localeMatcher()"
                        [currency]="currency()"
                        [currencyDisplay]="currencyDisplay()"
                        [useGrouping]="useGrouping()"
                        [pt]="ptm('pcFilterInputNumber')"
                        [unstyled]="unstyled()"
                    />
                }
                @case ('boolean') {
                    <p-checkbox [pt]="ptm('pcFilterCheckbox')" [indeterminate]="filterConstraint()?.value === null" [binary]="true" [ngModel]="filterConstraint()?.value" (ngModelChange)="onModelChange($event)" [unstyled]="unstyled()" />
                }
                @case ('date') {
                    <p-datepicker [pt]="ptm('pcFilterDatePicker')" [ariaLabel]="ariaLabel()" [placeholder]="placeholder()" [ngModel]="filterConstraint()?.value" (ngModelChange)="onModelChange($event)" appendTo="body" [unstyled]="unstyled()" />
                }
            }
        }
    `,
      providers: [TableStyle],
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    field: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "field",
        required: false
      }]
    }],
    type: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    filterConstraint: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterConstraint",
        required: false
      }]
    }],
    filterTemplate: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterTemplate",
        required: false
      }]
    }],
    placeholder: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    minFractionDigits: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "minFractionDigits",
        required: false
      }]
    }],
    maxFractionDigits: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "maxFractionDigits",
        required: false
      }]
    }],
    prefix: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "prefix",
        required: false
      }]
    }],
    suffix: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "suffix",
        required: false
      }]
    }],
    locale: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "locale",
        required: false
      }]
    }],
    localeMatcher: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "localeMatcher",
        required: false
      }]
    }],
    currency: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "currency",
        required: false
      }]
    }],
    currencyDisplay: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "currencyDisplay",
        required: false
      }]
    }],
    useGrouping: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "useGrouping",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    filterOn: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterOn",
        required: false
      }]
    }]
  });
})();
var ColumnFilter = class ColumnFilter2 extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind2, { self: true });
  _componentStyle = inject(TableStyle);
  field = input(...ngDevMode ? [void 0, { debugName: "field" }] : (
    /* istanbul ignore next */
    []
  ));
  type = input("text", ...ngDevMode ? [{ debugName: "type" }] : (
    /* istanbul ignore next */
    []
  ));
  display = input("row", ...ngDevMode ? [{ debugName: "display" }] : (
    /* istanbul ignore next */
    []
  ));
  showMenu = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showMenu" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  matchMode = input(...ngDevMode ? [void 0, { debugName: "matchMode" }] : (
    /* istanbul ignore next */
    []
  ));
  operator = model(FilterOperator.AND, ...ngDevMode ? [{ debugName: "operator" }] : (
    /* istanbul ignore next */
    []
  ));
  showOperator = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showOperator" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showClearButton = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showClearButton" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showApplyButton = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showApplyButton" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showMatchModes = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showMatchModes" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showAddButton = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showAddButton" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  hideOnClear = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "hideOnClear" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : (
    /* istanbul ignore next */
    []
  ));
  matchModeOptions = input(...ngDevMode ? [void 0, { debugName: "matchModeOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  maxConstraints = input(2, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "maxConstraints" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  minFractionDigits = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "minFractionDigits" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => numberAttribute(v, void 0)
  }));
  maxFractionDigits = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "maxFractionDigits" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: (v) => numberAttribute(v, void 0)
  }));
  prefix = input(...ngDevMode ? [void 0, { debugName: "prefix" }] : (
    /* istanbul ignore next */
    []
  ));
  suffix = input(...ngDevMode ? [void 0, { debugName: "suffix" }] : (
    /* istanbul ignore next */
    []
  ));
  locale = input(...ngDevMode ? [void 0, { debugName: "locale" }] : (
    /* istanbul ignore next */
    []
  ));
  localeMatcher = input(...ngDevMode ? [void 0, { debugName: "localeMatcher" }] : (
    /* istanbul ignore next */
    []
  ));
  currency = input(...ngDevMode ? [void 0, { debugName: "currency" }] : (
    /* istanbul ignore next */
    []
  ));
  currencyDisplay = input(...ngDevMode ? [void 0, { debugName: "currencyDisplay" }] : (
    /* istanbul ignore next */
    []
  ));
  filterOn = input("enter", ...ngDevMode ? [{ debugName: "filterOn" }] : (
    /* istanbul ignore next */
    []
  ));
  useGrouping = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "useGrouping" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  showButtons = input(true, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "showButtons" } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  filterButtonProps = input({}, ...ngDevMode ? [{ debugName: "filterButtonProps" }] : (
    /* istanbul ignore next */
    []
  ));
  computedFilterButtonProps = computed(() => {
    const props = this.filterButtonProps() ?? {};
    return {
      filter: __spreadValues({
        severity: "secondary",
        variant: "text",
        rounded: true
      }, props.filter),
      inline: { clear: __spreadValues({
        severity: "secondary",
        variant: "text",
        rounded: true
      }, props.inline?.clear) },
      popover: {
        addRule: __spreadValues({
          severity: "info",
          variant: "text",
          size: "small"
        }, props.popover?.addRule),
        removeRule: __spreadValues({
          severity: "danger",
          variant: "text",
          size: "small"
        }, props.popover?.removeRule),
        apply: __spreadValues({
          size: "small"
        }, props.popover?.apply),
        clear: __spreadValues({
          variant: props.popover?.clear?.outlined === false ? void 0 : "outlined",
          size: "small"
        }, props.popover?.clear)
      }
    };
  }, ...ngDevMode ? [{ debugName: "computedFilterButtonProps" }] : (
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
  onShow = output();
  onHide = output();
  icon = viewChild("menuButton", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "icon" } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  clearButtonViewChild = viewChild("clearBtn", ...ngDevMode ? [{ debugName: "clearButtonViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  overlaySubscription;
  renderOverlay = signal(false, ...ngDevMode ? [{ debugName: "renderOverlay" }] : (
    /* istanbul ignore next */
    []
  ));
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "headerTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  filterTemplate = contentChild("filter", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "filterTemplate" } : (
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
  filterIconTemplate = contentChild("filtericon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "filterIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  removeRuleIconTemplate = contentChild("removeruleicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "removeRuleIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  addRuleIconTemplate = contentChild("addruleicon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "addRuleIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  operatorOptions;
  overlayVisible;
  overlay;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  matchModes;
  selfClick;
  overlayEventListener;
  overlayId;
  filterApplied = false;
  get fieldConstraints() {
    return this.dataTable.filters ? this.dataTable.filters[this.field()] : null;
  }
  get rowFilterConstraint() {
    return this.dataTable.filters[this.field()];
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu() && (this.display() === "row" ? this.type() !== "boolean" : true);
  }
  get isShowOperator() {
    return this.showOperator() && this.type() !== "boolean";
  }
  get isShowAddConstraint() {
    return this.showAddButton() && this.type() !== "boolean" && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints();
  }
  get showMenuButtonLabel() {
    return this.translate(TranslationKeys.SHOW_FILTER_MENU);
  }
  get applyButtonLabel() {
    return this.translate(TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.translate(TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.translate(TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.translate(TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.translate(TranslationKeys.NO_FILTER);
  }
  get filterMenuButtonAriaLabel() {
    return this.config?.translation ? this.overlayVisible ? this.config?.translation?.aria?.hideFilterMenu : this.config?.translation?.aria?.showFilterMenu : void 0;
  }
  get removeRuleButtonAriaLabel() {
    return this.config?.translation ? this.config?.translation?.removeRule : void 0;
  }
  get filterOperatorAriaLabel() {
    return this.config?.translation ? this.config?.translation?.aria?.filterOperator : void 0;
  }
  get filterConstraintAriaLabel() {
    return this.config?.translation ? this.config?.translation?.aria?.filterConstraint : void 0;
  }
  dataTable = inject(TABLE_INSTANCE);
  overlayService = inject(OverlayService);
  constructor() {
    super();
    this.config.translationObserver.pipe(takeUntilDestroyed()).subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.dataTable.tableService.valueSource$.pipe(takeUntilDestroyed()).subscribe(() => {
      this.setHasFilter(true);
      this.cd.markForCheck();
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("columnFilter"));
  }
  ptmFilterConstraintOptions(matchMode) {
    return { context: { highlighted: matchMode && this.isRowMatchModeSelected(matchMode.value) } };
  }
  onInit() {
    this.overlayId = UniqueComponentId();
    if (!this.dataTable.filters[this.field()]) this.initFieldFilterConstraint();
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions() || this.config.filterMatchModeOptions[this.type()]?.map((key) => ({
      label: this.translate(key),
      value: key
    }));
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.translate(TranslationKeys.MATCH_ALL),
      value: FilterOperator.AND
    }, {
      label: this.translate(TranslationKeys.MATCH_ANY),
      value: FilterOperator.OR
    }];
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dataTable.filters[this.field()] = this.display() == "row" ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator()
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton()) this.dataTable._filter();
  }
  onRowMatchModeChange(matchMode) {
    const fieldFilter = this.dataTable.filters[this.field()];
    fieldFilter.matchMode = matchMode;
    if (!this.dataTable.isFilterBlank(fieldFilter.value)) this.dataTable._filter();
    this.hide();
  }
  onRowMatchModeKeyDown(event) {
    let item = event.target;
    switch (event.key) {
      case "ArrowDown": {
        const nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute("tabindex");
          nextItem.tabIndex = "0";
          nextItem.focus();
        }
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        const prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute("tabindex");
          prevItem.tabIndex = "0";
          prevItem.focus();
        }
        event.preventDefault();
        break;
      }
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dataTable.filters[this.field()].matchMode === matchMode;
  }
  addConstraint() {
    this.dataTable.filters[this.field()].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
    DomHandler.focus(this.clearButtonViewChild()?.nativeElement);
  }
  removeConstraint(filterMeta) {
    this.dataTable.filters[this.field()] = this.dataTable.filters[this.field()].filter((meta) => meta !== filterMeta);
    if (!this.showApplyButton()) this.dataTable._filter();
    DomHandler.focus(this.clearButtonViewChild()?.nativeElement);
  }
  onOperatorChange(value) {
    this.dataTable.filters[this.field()].forEach((filterMeta) => {
      filterMeta.operator = value;
      this.operator.set(value);
    });
    if (!this.showApplyButton()) this.dataTable._filter();
  }
  toggleMenu(event) {
    this.overlayVisible = !this.overlayVisible;
    if (this.overlayVisible) this.renderOverlay.set(true);
    event.stopPropagation();
  }
  onToggleButtonKeyDown(event) {
    switch (event.key) {
      case "Escape":
      case "Tab":
        this.overlayVisible = false;
        break;
      case "ArrowDown":
        if (this.overlayVisible) {
          let focusable = DomHandler.getFocusableElements(this.overlay);
          if (focusable) focusable[0].focus();
          event.preventDefault();
        } else if (event.altKey) {
          this.overlayVisible = true;
          event.preventDefault();
        }
        break;
      case "Enter":
        this.toggleMenu(event);
        event.preventDefault();
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon()?.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return tt(nextItem, '[data-pc-section="filterconstraintseparator"]') ? this.findNextItem(nextItem) : nextItem;
    else return item.parentElement?.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return tt(prevItem, '[data-pc-section="filterconstraintseparator"]') ? this.findPrevItem(prevItem) : prevItem;
    else return item.parentElement?.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayBeforeEnter(event) {
    this.overlay = event.element;
    if (this.overlay && this.overlay.parentElement !== this.document.body) {
      const buttonEl = et(this.el.nativeElement, '[data-pc-name="pccolumnfilterbutton"]');
      St(this.document.body, this.overlay);
      C(this.overlay, {
        position: "absolute",
        top: "0"
      });
      z(this.overlay, buttonEl);
      ZIndexUtils.set("overlay", this.overlay, this.config.zIndex.overlay);
    }
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindScrollListener();
    this.overlayEventListener = (e5) => {
      if (this.overlay && this.overlay.contains(e5.target)) this.selfClick = true;
    };
    this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
    this.onShow.emit({ originalEvent: event });
    this.focusOnFirstElement();
  }
  onOverlayAnimationAfterLeave(event) {
    const overlay = this.overlay;
    this.restoreOverlayAppend();
    this.onOverlayHide();
    this.renderOverlay.set(false);
    if (this.overlaySubscription) this.overlaySubscription.unsubscribe();
    ZIndexUtils.clear(overlay);
    this.onHide.emit({ originalEvent: event });
  }
  restoreOverlayAppend() {
    if (this.overlay) this.el.nativeElement.appendChild(this.overlay);
  }
  focusOnFirstElement() {
    if (this.overlay) DomHandler.focus(DomHandler.getFirstFocusableElement(this.overlay, ""));
  }
  getDefaultMatchMode() {
    if (this.matchMode()) return this.matchMode();
    else if (this.type() === "text") return FilterMatchMode.STARTS_WITH;
    else if (this.type() === "numeric") return FilterMatchMode.EQUALS;
    else if (this.type() === "date") return FilterMatchMode.DATE_IS;
    else return FilterMatchMode.CONTAINS;
  }
  getDefaultOperator() {
    return this.dataTable.filters ? this.dataTable.filters[this.field()][0].operator : this.operator();
  }
  hasRowFilter() {
    return this.dataTable.filters[this.field()] && !this.dataTable.isFilterBlank(this.dataTable.filters[this.field()].value);
  }
  setHasFilter(newValue) {
    let fieldFilter = this.dataTable.filters[this.field()];
    if (fieldFilter && newValue) {
      if (Array.isArray(fieldFilter)) this.filterApplied = !this.dataTable.isFilterBlank(fieldFilter[0].value);
      else this.filterApplied = !this.dataTable.isFilterBlank(fieldFilter.value);
    } else this.filterApplied = false;
  }
  get hasFilter() {
    if (!Array.isArray(this.fieldConstraints) && this.fieldConstraints?.applyFilter) {
      delete this.fieldConstraints.applyFilter;
      this.setHasFilter(true);
    } else if (Array.isArray(this.fieldConstraints) && this.fieldConstraints[0]?.applyFilter) {
      delete this.fieldConstraints[0].applyFilter;
      this.setHasFilter(true);
    }
    if (!this.filterApplied) return false;
    this.setHasFilter(true);
    return this.filterApplied;
  }
  isOutsideClicked(event) {
    return !(et(this.overlay.nextElementSibling, '[data-pc-section="filteroverlay"]') || et(this.overlay.nextElementSibling, '[data-pc-name="popover"]') || this.overlay?.isSameNode(event.target) || this.overlay?.contains(event.target) || this.icon()?.nativeElement.isSameNode(event.target) || this.icon()?.nativeElement.contains(event.target) || et(event.target, '[data-pc-name="pcaddrulebuttonlabel"]') || et(event.target.parentElement, '[data-pc-name="pcaddrulebuttonlabel"]') || et(event.target, '[data-pc-name="pcfilterremoverulebutton"]') || et(event.target.parentElement, '[data-pc-name="pcfilterremoverulebutton"]'));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event) => {
        const dialogElements = document.querySelectorAll('[role="dialog"]');
        const targetIsColumnFilterMenuButton = event.target.closest('[data-pc-name="pccolumnfilterbutton"]');
        if (this.overlayVisible && this.isOutsideClicked(event) && (targetIsColumnFilterMenuButton || dialogElements?.length <= 1)) this.hide();
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", () => {
      if (this.overlayVisible && !DomHandler.isTouchDevice()) this.hide();
    });
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon()?.nativeElement, () => {
      if (this.overlayVisible) this.hide();
    });
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
  }
  hide() {
    this.overlayVisible = false;
    if (this.overlay) ZIndexUtils.revertZIndex(ZIndexUtils.get(this.overlay));
    this.cd.markForCheck();
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.setHasFilter(false);
    this.dataTable._filter();
    if (this.hideOnClear()) this.hide();
  }
  applyFilter() {
    this.setHasFilter(true);
    this.dataTable._filter();
    this.hide();
  }
  onDestroy() {
    if (this.overlay) {
      this.restoreOverlayAppend();
      ZIndexUtils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.overlaySubscription) this.overlaySubscription.unsubscribe();
  }
  static \u0275fac = function ColumnFilter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ColumnFilter2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["header"];
    const _c1 = ["filter"];
    const _c2 = ["footer"];
    const _c3 = ["filtericon"];
    const _c4 = ["removeruleicon"];
    const _c5 = ["addruleicon"];
    const _c6 = ["menuButton"];
    const _c7 = ["clearBtn"];
    const _c8 = (a0) => ({
      hasFilter: a0
    });
    const _c9 = (a0) => ({
      $implicit: a0
    });
    const _forTrack0 = ($index, $item) => $item.value;
    function ColumnFilter_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275element(0, "p-column-filter-form-element", 5);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("filterElementContainer"));
        i010.\u0275\u0275property("type", ctx_r0.type())("field", ctx_r0.field())("ariaLabel", ctx_r0.ariaLabel())("filterConstraint", ctx_r0.rowFilterConstraint)("filterTemplate", ctx_r0.filterTemplate())("placeholder", ctx_r0.placeholder())("minFractionDigits", ctx_r0.minFractionDigits())("maxFractionDigits", ctx_r0.maxFractionDigits())("prefix", ctx_r0.prefix())("suffix", ctx_r0.suffix())("locale", ctx_r0.locale())("localeMatcher", ctx_r0.localeMatcher())("currency", ctx_r0.currency())("currencyDisplay", ctx_r0.currencyDisplay())("useGrouping", ctx_r0.useGrouping())("filterOn", ctx_r0.filterOn())("pt", ctx_r0.pt())("unstyled", ctx_r0.unstyled());
      }
    }
    function ColumnFilter_Conditional_2_Conditional_2_1_ng_template_0_Template(rf, ctx) {
    }
    function ColumnFilter_Conditional_2_Conditional_2_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, ColumnFilter_Conditional_2_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function ColumnFilter_Conditional_2_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "span", 7);
        i010.\u0275\u0275template(1, ColumnFilter_Conditional_2_Conditional_2_1_Template, 1, 0, null, 10);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
        i010.\u0275\u0275attribute("data-pc-section", "columnfilterbuttonicon");
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.filterIconTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(4, _c8, ctx_r0.hasFilter));
      }
    }
    function ColumnFilter_Conditional_2_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 8);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
      }
    }
    function ColumnFilter_Conditional_2_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 9);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
      }
    }
    function ColumnFilter_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "button", 6, 0);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_2_Template_button_click_0_listener($event) {
          i010.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.toggleMenu($event));
        })("keydown", function ColumnFilter_Conditional_2_Template_button_keydown_0_listener($event) {
          i010.\u0275\u0275restoreView(_r2);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onToggleButtonKeyDown($event));
        });
        i010.\u0275\u0275conditionalCreate(2, ColumnFilter_Conditional_2_Conditional_2_Template, 2, 6, "span", 7)(3, ColumnFilter_Conditional_2_Conditional_3_Template, 1, 1, ":svg:svg", 8)(4, ColumnFilter_Conditional_2_Conditional_4_Template, 1, 1, ":svg:svg", 9);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("pcColumnFilterButton"));
        i010.\u0275\u0275property("pButton", ctx_r0.computedFilterButtonProps().filter)("pButtonPT", ctx_r0.ptm("pcColumnFilterButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("aria-haspopup", true)("aria-label", ctx_r0.filterMenuButtonAriaLabel)("aria-controls", ctx_r0.overlayVisible ? ctx_r0.overlayId : null)("aria-expanded", ctx_r0.overlayVisible ?? false);
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275conditional(ctx_r0.filterIconTemplate() ? 2 : ctx_r0.hasFilter ? 3 : 4);
      }
    }
    function ColumnFilter_Conditional_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function ColumnFilter_Conditional_3_Conditional_2_For_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "li", 14);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_2_For_2_Template_li_click_0_listener() {
          const matchMode_r6 = i010.\u0275\u0275restoreView(_r5).$implicit;
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.onRowMatchModeChange(matchMode_r6.value));
        })("keydown", function ColumnFilter_Conditional_3_Conditional_2_For_2_Template_li_keydown_0_listener($event) {
          i010.\u0275\u0275restoreView(_r5);
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.onRowMatchModeKeyDown($event));
        })("keydown.enter", function ColumnFilter_Conditional_3_Conditional_2_For_2_Template_li_keydown_enter_0_listener() {
          const matchMode_r6 = i010.\u0275\u0275restoreView(_r5).$implicit;
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.onRowMatchModeChange(matchMode_r6.value));
        });
        i010.\u0275\u0275text(1);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const matchMode_r6 = ctx.$implicit;
        const \u0275$index_32_r7 = ctx.$index;
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("filterConstraint"));
        i010.\u0275\u0275classProp("p-datatable-filter-constraint-selected", ctx_r0.isRowMatchModeSelected(matchMode_r6.value));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterConstraint", ctx_r0.ptmFilterConstraintOptions(matchMode_r6)));
        i010.\u0275\u0275attribute("tabindex", \u0275$index_32_r7 === 0 ? "0" : null);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275textInterpolate1(" ", matchMode_r6.label, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "ul", 7);
        i010.\u0275\u0275repeaterCreate(1, ColumnFilter_Conditional_3_Conditional_2_For_2_Template, 2, 7, "li", 13, _forTrack0);
        i010.\u0275\u0275element(3, "li", 7);
        i010.\u0275\u0275elementStart(4, "li", 14);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_2_Template_li_click_4_listener() {
          i010.\u0275\u0275restoreView(_r4);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onRowClearItemClick());
        })("keydown", function ColumnFilter_Conditional_3_Conditional_2_Template_li_keydown_4_listener($event) {
          i010.\u0275\u0275restoreView(_r4);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onRowMatchModeKeyDown($event));
        })("keydown.enter", function ColumnFilter_Conditional_3_Conditional_2_Template_li_keydown_enter_4_listener() {
          i010.\u0275\u0275restoreView(_r4);
          const ctx_r0 = i010.\u0275\u0275nextContext(2);
          return i010.\u0275\u0275resetView(ctx_r0.onRowClearItemClick());
        });
        i010.\u0275\u0275text(5);
        i010.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275classMap(ctx_r0.cx("filterConstraintList"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterConstraintList"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275repeater(ctx_r0.matchModes);
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275classMap(ctx_r0.cx("filterConstraintSeparator"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterConstraintSeparator"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275classMap(ctx_r0.cx("filterConstraint"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("emtpyFilterLabel"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275textInterpolate1(" ", ctx_r0.noFilterLabel, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r8 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "div", 7)(1, "p-select", 18);
        i010.\u0275\u0275controlCreate();
        i010.\u0275\u0275listener("ngModelChange", function ColumnFilter_Conditional_3_Conditional_3_Conditional_0_Template_p_select_ngModelChange_1_listener($event) {
          i010.\u0275\u0275restoreView(_r8);
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.onOperatorChange($event));
        });
        i010.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("filterOperator"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterOperator"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275classMap(ctx_r0.cx("pcFilterOperatorDropdown"));
        i010.\u0275\u0275property("options", ctx_r0.operatorOptions)("pt", ctx_r0.ptm("pcFilterOperatorDropdown"))("ngModel", ctx_r0.operator())("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275control();
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "p-select", 22);
        i010.\u0275\u0275controlCreate();
        i010.\u0275\u0275listener("ngModelChange", function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_1_Template_p_select_ngModelChange_0_listener($event) {
          i010.\u0275\u0275restoreView(_r9);
          const fieldConstraint_r10 = i010.\u0275\u0275nextContext().$implicit;
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.onMenuMatchModeChange($event, fieldConstraint_r10));
        });
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const fieldConstraint_r10 = i010.\u0275\u0275nextContext().$implicit;
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("pcFilterConstraintDropdown"));
        i010.\u0275\u0275property("options", ctx_r0.matchModes)("ngModel", fieldConstraint_r10.matchMode)("pt", ctx_r0.ptm("pcFilterConstraintDropdown"))("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275control();
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 24);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(5);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("pcFilterRemoveRuleButton")["icon"]);
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_2_ng_template_0_Template(rf, ctx) {
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_2_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "button", 23);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_Template_button_click_0_listener() {
          i010.\u0275\u0275restoreView(_r11);
          const fieldConstraint_r10 = i010.\u0275\u0275nextContext().$implicit;
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.removeConstraint(fieldConstraint_r10));
        });
        i010.\u0275\u0275conditionalCreate(1, ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_Conditional_1_Template, 1, 1, ":svg:svg", 24);
        i010.\u0275\u0275template(2, ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_2_Template, 1, 0, null, 25);
        i010.\u0275\u0275text(3);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(4);
        i010.\u0275\u0275classMap(ctx_r0.cx("pcFilterRemoveRuleButton"));
        i010.\u0275\u0275property("pButton", ctx_r0.computedFilterButtonProps().popover.removeRule)("pButtonPT", ctx_r0.ptm("pcFilterRemoveRuleButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("aria-label", ctx_r0.removeRuleButtonLabel);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(!ctx_r0.removeRuleIconTemplate() ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.removeRuleIconTemplate());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275textInterpolate1(" ", ctx_r0.removeRuleButtonLabel, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_For_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementStart(0, "div", 7);
        i010.\u0275\u0275conditionalCreate(1, ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_1_Template, 1, 6, "p-select", 19);
        i010.\u0275\u0275element(2, "p-column-filter-form-element", 20);
        i010.\u0275\u0275elementStart(3, "div");
        i010.\u0275\u0275conditionalCreate(4, ColumnFilter_Conditional_3_Conditional_3_For_3_Conditional_4_Template, 4, 9, "button", 21);
        i010.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const fieldConstraint_r10 = ctx.$implicit;
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("filterRule"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterRule"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.showMatchModes() && ctx_r0.matchModes ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("type", ctx_r0.type())("field", ctx_r0.field())("filterConstraint", fieldConstraint_r10)("filterTemplate", ctx_r0.filterTemplate())("placeholder", ctx_r0.placeholder())("minFractionDigits", ctx_r0.minFractionDigits())("maxFractionDigits", ctx_r0.maxFractionDigits())("prefix", ctx_r0.prefix())("suffix", ctx_r0.suffix())("locale", ctx_r0.locale())("localeMatcher", ctx_r0.localeMatcher())("currency", ctx_r0.currency())("currencyDisplay", ctx_r0.currencyDisplay())("useGrouping", ctx_r0.useGrouping())("filterOn", ctx_r0.filterOn())("pt", ctx_r0.pt())("unstyled", ctx_r0.unstyled());
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275conditional(ctx_r0.showRemoveIcon ? 4 : -1);
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_4_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275namespaceSVG();
        i010.\u0275\u0275element(0, "svg", 27);
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(4);
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("pcAddRuleButtonLabel")["icon"]);
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_4_2_ng_template_0_Template(rf, ctx) {
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_4_2_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275template(0, ColumnFilter_Conditional_3_Conditional_3_Conditional_4_2_ng_template_0_Template, 0, 0, "ng-template");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        const _r12 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "button", 26);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_3_Conditional_4_Template_button_click_0_listener() {
          i010.\u0275\u0275restoreView(_r12);
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.addConstraint());
        });
        i010.\u0275\u0275conditionalCreate(1, ColumnFilter_Conditional_3_Conditional_3_Conditional_4_Conditional_1_Template, 1, 1, ":svg:svg", 27);
        i010.\u0275\u0275template(2, ColumnFilter_Conditional_3_Conditional_3_Conditional_4_2_Template, 1, 0, null, 25);
        i010.\u0275\u0275text(3);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275classMap(ctx_r0.cx("pcFilterAddRuleButton"));
        i010.\u0275\u0275property("pButton", ctx_r0.computedFilterButtonProps().popover.addRule)("pButtonPT", ctx_r0.ptm("pcAddRuleButtonLabel"))("pButtonUnstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("aria-label", ctx_r0.addRuleButtonLabel);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(!ctx_r0.addRuleIconTemplate() ? 1 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.addRuleIconTemplate());
        i010.\u0275\u0275advance();
        i010.\u0275\u0275textInterpolate1(" ", ctx_r0.addRuleButtonLabel, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_6_Template(rf, ctx) {
      if (rf & 1) {
        const _r13 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "button", 28, 1);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_3_Conditional_6_Template_button_click_0_listener() {
          i010.\u0275\u0275restoreView(_r13);
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.clearFilter());
        });
        i010.\u0275\u0275text(2);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("pButton", ctx_r0.computedFilterButtonProps().popover.clear)("pButtonPT", ctx_r0.ptm("pcFilterClearButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("aria-label", ctx_r0.clearButtonLabel);
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275textInterpolate1(" ", ctx_r0.clearButtonLabel, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Conditional_7_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "button", 29);
        i010.\u0275\u0275listener("click", function ColumnFilter_Conditional_3_Conditional_3_Conditional_7_Template_button_click_0_listener() {
          i010.\u0275\u0275restoreView(_r14);
          const ctx_r0 = i010.\u0275\u0275nextContext(3);
          return i010.\u0275\u0275resetView(ctx_r0.applyFilter());
        });
        i010.\u0275\u0275text(1);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(3);
        i010.\u0275\u0275property("pButton", ctx_r0.computedFilterButtonProps().popover.apply)("pButtonPT", ctx_r0.ptm("pcFilterApplyButton"))("pButtonUnstyled", ctx_r0.unstyled());
        i010.\u0275\u0275attribute("aria-label", ctx_r0.applyButtonLabel);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275textInterpolate1(" ", ctx_r0.applyButtonLabel, " ");
      }
    }
    function ColumnFilter_Conditional_3_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275conditionalCreate(0, ColumnFilter_Conditional_3_Conditional_3_Conditional_0_Template, 2, 9, "div", 12);
        i010.\u0275\u0275elementStart(1, "div", 7);
        i010.\u0275\u0275repeaterCreate(2, ColumnFilter_Conditional_3_Conditional_3_For_3_Template, 5, 22, "div", 12, i010.\u0275\u0275repeaterTrackByIndex);
        i010.\u0275\u0275elementEnd();
        i010.\u0275\u0275conditionalCreate(4, ColumnFilter_Conditional_3_Conditional_3_Conditional_4_Template, 4, 9, "button", 15);
        i010.\u0275\u0275elementStart(5, "div", 7);
        i010.\u0275\u0275conditionalCreate(6, ColumnFilter_Conditional_3_Conditional_3_Conditional_6_Template, 3, 5, "button", 16);
        i010.\u0275\u0275conditionalCreate(7, ColumnFilter_Conditional_3_Conditional_3_Conditional_7_Template, 2, 5, "button", 17);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext(2);
        i010.\u0275\u0275conditional(ctx_r0.isShowOperator ? 0 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275classMap(ctx_r0.cx("filterRuleList"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterRuleList"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275repeater(ctx_r0.fieldConstraints);
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275conditional(ctx_r0.isShowAddConstraint ? 4 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275classMap(ctx_r0.cx("filterButtonbar"));
        i010.\u0275\u0275property("pBind", ctx_r0.ptm("filterButtonBar"));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.showClearButton() ? 6 : -1);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.showApplyButton() ? 7 : -1);
      }
    }
    function ColumnFilter_Conditional_3_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        i010.\u0275\u0275elementContainer(0);
      }
    }
    function ColumnFilter_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        const _r3 = i010.\u0275\u0275getCurrentView();
        i010.\u0275\u0275elementStart(0, "div", 11);
        i010.\u0275\u0275listener("pMotionOnBeforeEnter", function ColumnFilter_Conditional_3_Template_div_pMotionOnBeforeEnter_0_listener($event) {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onOverlayBeforeEnter($event));
        })("pMotionOnAfterLeave", function ColumnFilter_Conditional_3_Template_div_pMotionOnAfterLeave_0_listener($event) {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onOverlayAnimationAfterLeave($event));
        })("click", function ColumnFilter_Conditional_3_Template_div_click_0_listener() {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onContentClick());
        })("keydown.escape", function ColumnFilter_Conditional_3_Template_div_keydown_escape_0_listener() {
          i010.\u0275\u0275restoreView(_r3);
          const ctx_r0 = i010.\u0275\u0275nextContext();
          return i010.\u0275\u0275resetView(ctx_r0.onEscape());
        });
        i010.\u0275\u0275template(1, ColumnFilter_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 10);
        i010.\u0275\u0275conditionalCreate(2, ColumnFilter_Conditional_3_Conditional_2_Template, 6, 10, "ul", 12)(3, ColumnFilter_Conditional_3_Conditional_3_Template, 8, 10);
        i010.\u0275\u0275template(4, ColumnFilter_Conditional_3_ng_container_4_Template, 1, 0, "ng-container", 10);
        i010.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r0 = i010.\u0275\u0275nextContext();
        i010.\u0275\u0275classMap(ctx_r0.cx("filterOverlay"));
        i010.\u0275\u0275property("pMotion", ctx_r0.showMenu() && ctx_r0.overlayVisible)("pMotionAppear", true)("pMotionOptions", ctx_r0.computedMotionOptions())("pBind", ctx_r0.ptm("filterOverlay"))("id", ctx_r0.overlayId);
        i010.\u0275\u0275attribute("aria-modal", true);
        i010.\u0275\u0275advance();
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(13, _c9, ctx_r0.field()));
        i010.\u0275\u0275advance();
        i010.\u0275\u0275conditional(ctx_r0.display() === "row" ? 2 : 3);
        i010.\u0275\u0275advance(2);
        i010.\u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate())("ngTemplateOutletContext", i010.\u0275\u0275pureFunction1(15, _c9, ctx_r0.field()));
      }
    }
    return /* @__PURE__ */ i010.\u0275\u0275defineComponent({
      type: ColumnFilter2,
      selectors: [["p-column-filter"], ["p-columnfilter"]],
      contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i010.\u0275\u0275contentQuerySignal(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.filterTemplate, _c1, 4)(dirIndex, ctx.footerTemplate, _c2, 4)(dirIndex, ctx.filterIconTemplate, _c3, 4)(dirIndex, ctx.removeRuleIconTemplate, _c4, 4)(dirIndex, ctx.addRuleIconTemplate, _c5, 4);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance(6);
        }
      },
      viewQuery: function ColumnFilter_Query(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275viewQuerySignal(ctx.icon, _c6, 5, ElementRef)(ctx.clearButtonViewChild, _c7, 5);
        }
        if (rf & 2) {
          i010.\u0275\u0275queryAdvance(2);
        }
      },
      inputs: {
        field: [1, "field"],
        type: [1, "type"],
        display: [1, "display"],
        showMenu: [1, "showMenu"],
        matchMode: [1, "matchMode"],
        operator: [1, "operator"],
        showOperator: [1, "showOperator"],
        showClearButton: [1, "showClearButton"],
        showApplyButton: [1, "showApplyButton"],
        showMatchModes: [1, "showMatchModes"],
        showAddButton: [1, "showAddButton"],
        hideOnClear: [1, "hideOnClear"],
        placeholder: [1, "placeholder"],
        matchModeOptions: [1, "matchModeOptions"],
        maxConstraints: [1, "maxConstraints"],
        minFractionDigits: [1, "minFractionDigits"],
        maxFractionDigits: [1, "maxFractionDigits"],
        prefix: [1, "prefix"],
        suffix: [1, "suffix"],
        locale: [1, "locale"],
        localeMatcher: [1, "localeMatcher"],
        currency: [1, "currency"],
        currencyDisplay: [1, "currencyDisplay"],
        filterOn: [1, "filterOn"],
        useGrouping: [1, "useGrouping"],
        showButtons: [1, "showButtons"],
        ariaLabel: [1, "ariaLabel"],
        filterButtonProps: [1, "filterButtonProps"],
        motionOptions: [1, "motionOptions"]
      },
      outputs: {
        operator: "operatorChange",
        onShow: "onShow",
        onHide: "onHide"
      },
      features: [i010.\u0275\u0275ProvidersFeature([TableStyle, {
        provide: COLUMN_FILTER_INSTANCE,
        useExisting: ColumnFilter2
      }]), i010.\u0275\u0275HostDirectivesFeature([i1$3.Bind]), i010.\u0275\u0275InheritDefinitionFeature],
      decls: 4,
      vars: 5,
      consts: [["menuButton", ""], ["clearBtn", ""], [3, "class", "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "filterOn", "pt", "unstyled"], ["type", "button", "iconOnly", "", 3, "pButton", "class", "pButtonPT", "pButtonUnstyled"], ["pMotionName", "p-anchored-overlay", "role", "dialog", 3, "pMotion", "pMotionAppear", "pMotionOptions", "class", "pBind", "id"], [3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "filterOn", "pt", "unstyled"], ["type", "button", "iconOnly", "", 3, "click", "keydown", "pButton", "pButtonPT", "pButtonUnstyled"], [3, "pBind"], ["data-p-icon", "filter-fill", 3, "pBind"], ["data-p-icon", "filter", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["pMotionName", "p-anchored-overlay", "role", "dialog", 3, "pMotionOnBeforeEnter", "pMotionOnAfterLeave", "click", "keydown.escape", "pMotion", "pMotionAppear", "pMotionOptions", "pBind", "id"], [3, "class", "pBind"], [3, "class", "pBind", "p-datatable-filter-constraint-selected"], [3, "click", "keydown", "keydown.enter", "pBind"], ["type", "button", "text", "", "size", "small", 3, "pButton", "class", "pButtonPT", "pButtonUnstyled"], ["type", "button", 3, "pButton", "pButtonPT", "pButtonUnstyled"], ["type", "button", "size", "small", 3, "pButton", "pButtonPT", "pButtonUnstyled"], [3, "ngModelChange", "options", "pt", "ngModel", "unstyled"], [3, "options", "ngModel", "class", "pt", "unstyled"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "filterOn", "pt", "unstyled"], ["type", "button", "text", "", "severity", "danger", "size", "small", 3, "pButton", "class", "pButtonPT", "pButtonUnstyled"], [3, "ngModelChange", "options", "ngModel", "pt", "unstyled"], ["type", "button", "text", "", "severity", "danger", "size", "small", 3, "click", "pButton", "pButtonPT", "pButtonUnstyled"], ["data-p-icon", "trash", 3, "pBind"], [4, "ngTemplateOutlet"], ["type", "button", "text", "", "size", "small", 3, "click", "pButton", "pButtonPT", "pButtonUnstyled"], ["data-p-icon", "plus", 3, "pBind"], ["type", "button", 3, "click", "pButton", "pButtonPT", "pButtonUnstyled"], ["type", "button", "size", "small", 3, "click", "pButton", "pButtonPT", "pButtonUnstyled"]],
      template: function ColumnFilter_Template(rf, ctx) {
        if (rf & 1) {
          i010.\u0275\u0275elementStart(0, "div");
          i010.\u0275\u0275conditionalCreate(1, ColumnFilter_Conditional_1_Template, 1, 20, "p-column-filter-form-element", 2);
          i010.\u0275\u0275conditionalCreate(2, ColumnFilter_Conditional_2_Template, 5, 10, "button", 3);
          i010.\u0275\u0275conditionalCreate(3, ColumnFilter_Conditional_3_Template, 5, 17, "div", 4);
          i010.\u0275\u0275elementEnd();
        }
        if (rf & 2) {
          i010.\u0275\u0275classMap(ctx.cx("filter"));
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.display() === "row" ? 1 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.showMenuButton ? 2 : -1);
          i010.\u0275\u0275advance();
          i010.\u0275\u0275conditional(ctx.renderOverlay() ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, FormsModule, i2.NgControlStatus, i2.NgModel, ButtonModule, i3.ButtonDirective, SelectModule, i4.Select, InputTextModule, InputNumberModule, CheckboxModule, DatePickerModule, BindModule, i1$3.Bind, MotionModule, i5.MotionDirective, Filter, FilterFill, Trash, Plus, ColumnFilterFormElement],
      encapsulation: 2
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(ColumnFilter, [{
    type: Component10,
    args: [{
      selector: "p-column-filter, p-columnfilter",
      standalone: true,
      imports: [
        NgTemplateOutlet,
        FormsModule,
        ButtonModule,
        SelectModule,
        InputTextModule,
        InputNumberModule,
        CheckboxModule,
        DatePickerModule,
        BindModule,
        MotionModule,
        Filter,
        FilterFill,
        Trash,
        Plus,
        ColumnFilterFormElement
      ],
      template: `
        <div [class]="cx('filter')">
            @if (display() === 'row') {
                <p-column-filter-form-element
                    [class]="cx('filterElementContainer')"
                    [type]="type()"
                    [field]="field()"
                    [ariaLabel]="ariaLabel()"
                    [filterConstraint]="rowFilterConstraint"
                    [filterTemplate]="filterTemplate()"
                    [placeholder]="placeholder()"
                    [minFractionDigits]="minFractionDigits()"
                    [maxFractionDigits]="maxFractionDigits()"
                    [prefix]="prefix()"
                    [suffix]="suffix()"
                    [locale]="locale()"
                    [localeMatcher]="localeMatcher()"
                    [currency]="currency()"
                    [currencyDisplay]="currencyDisplay()"
                    [useGrouping]="useGrouping()"
                    [filterOn]="filterOn()"
                    [pt]="pt()"
                    [unstyled]="unstyled()"
                />
            }
            @if (showMenuButton) {
                <button
                    #menuButton
                    type="button"
                    iconOnly
                    [pButton]="computedFilterButtonProps().filter"
                    [class]="cx('pcColumnFilterButton')"
                    [attr.aria-haspopup]="true"
                    [attr.aria-label]="filterMenuButtonAriaLabel"
                    [attr.aria-controls]="overlayVisible ? overlayId : null"
                    [attr.aria-expanded]="overlayVisible ?? false"
                    [pButtonPT]="ptm('pcColumnFilterButton')"
                    [pButtonUnstyled]="unstyled()"
                    (click)="toggleMenu($event)"
                    (keydown)="onToggleButtonKeyDown($event)"
                >
                    @if (filterIconTemplate()) {
                        <span [pBind]="ptm('pcColumnFilterButton')['icon']" [attr.data-pc-section]="'columnfilterbuttonicon'">
                            <ng-template *ngTemplateOutlet="filterIconTemplate(); context: { hasFilter: hasFilter }" />
                        </span>
                    } @else if (hasFilter) {
                        <svg data-p-icon="filter-fill" [pBind]="ptm('pcColumnFilterButton')['icon']" />
                    } @else {
                        <svg data-p-icon="filter" [pBind]="ptm('pcColumnFilterButton')['icon']" />
                    }
                </button>
            }
            @if (renderOverlay()) {
                <div
                    [pMotion]="showMenu() && overlayVisible"
                    [pMotionAppear]="true"
                    pMotionName="p-anchored-overlay"
                    (pMotionOnBeforeEnter)="onOverlayBeforeEnter($event)"
                    (pMotionOnAfterLeave)="onOverlayAnimationAfterLeave($event)"
                    [pMotionOptions]="computedMotionOptions()"
                    [class]="cx('filterOverlay')"
                    [pBind]="ptm('filterOverlay')"
                    [id]="overlayId"
                    [attr.aria-modal]="true"
                    role="dialog"
                    (click)="onContentClick()"
                    (keydown.escape)="onEscape()"
                >
                    <ng-container *ngTemplateOutlet="headerTemplate(); context: { $implicit: field() }" />
                    @if (display() === 'row') {
                        <ul [class]="cx('filterConstraintList')" [pBind]="ptm('filterConstraintList')">
                            @for (matchMode of matchModes; track matchMode.value; let i = $index) {
                                <li
                                    (click)="onRowMatchModeChange(matchMode.value)"
                                    (keydown)="onRowMatchModeKeyDown($event)"
                                    (keydown.enter)="onRowMatchModeChange(matchMode.value)"
                                    [class]="cx('filterConstraint')"
                                    [pBind]="ptm('filterConstraint', ptmFilterConstraintOptions(matchMode))"
                                    [class.p-datatable-filter-constraint-selected]="isRowMatchModeSelected(matchMode.value)"
                                    [attr.tabindex]="i === 0 ? '0' : null"
                                >
                                    {{ matchMode.label }}
                                </li>
                            }
                            <li [class]="cx('filterConstraintSeparator')" [pBind]="ptm('filterConstraintSeparator')"></li>
                            <li [class]="cx('filterConstraint')" [pBind]="ptm('emtpyFilterLabel')" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">
                                {{ noFilterLabel }}
                            </li>
                        </ul>
                    } @else {
                        @if (isShowOperator) {
                            <div [class]="cx('filterOperator')" [pBind]="ptm('filterOperator')">
                                <p-select [options]="operatorOptions" [pt]="ptm('pcFilterOperatorDropdown')" [ngModel]="operator()" (ngModelChange)="onOperatorChange($event)" [class]="cx('pcFilterOperatorDropdown')" [unstyled]="unstyled()" />
                            </div>
                        }
                        <div [class]="cx('filterRuleList')" [pBind]="ptm('filterRuleList')">
                            @for (fieldConstraint of fieldConstraints; track $index; let i = $index) {
                                <div [class]="cx('filterRule')" [pBind]="ptm('filterRule')">
                                    @if (showMatchModes() && matchModes) {
                                        <p-select
                                            [options]="matchModes"
                                            [ngModel]="fieldConstraint.matchMode"
                                            (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                            [class]="cx('pcFilterConstraintDropdown')"
                                            [pt]="ptm('pcFilterConstraintDropdown')"
                                            [unstyled]="unstyled()"
                                        />
                                    }
                                    <p-column-filter-form-element
                                        [type]="type()"
                                        [field]="field()"
                                        [filterConstraint]="fieldConstraint"
                                        [filterTemplate]="filterTemplate()"
                                        [placeholder]="placeholder()"
                                        [minFractionDigits]="minFractionDigits()"
                                        [maxFractionDigits]="maxFractionDigits()"
                                        [prefix]="prefix()"
                                        [suffix]="suffix()"
                                        [locale]="locale()"
                                        [localeMatcher]="localeMatcher()"
                                        [currency]="currency()"
                                        [currencyDisplay]="currencyDisplay()"
                                        [useGrouping]="useGrouping()"
                                        [filterOn]="filterOn()"
                                        [pt]="pt()"
                                        [unstyled]="unstyled()"
                                    />
                                    <div>
                                        @if (showRemoveIcon) {
                                            <button
                                                type="button"
                                                text
                                                severity="danger"
                                                size="small"
                                                [pButton]="computedFilterButtonProps().popover.removeRule"
                                                [class]="cx('pcFilterRemoveRuleButton')"
                                                [attr.aria-label]="removeRuleButtonLabel"
                                                [pButtonPT]="ptm('pcFilterRemoveRuleButton')"
                                                [pButtonUnstyled]="unstyled()"
                                                (click)="removeConstraint(fieldConstraint)"
                                            >
                                                @if (!removeRuleIconTemplate()) {
                                                    <svg data-p-icon="trash" [pBind]="ptm('pcFilterRemoveRuleButton')['icon']" />
                                                }
                                                <ng-template *ngTemplateOutlet="removeRuleIconTemplate()" />
                                                {{ removeRuleButtonLabel }}
                                            </button>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        @if (isShowAddConstraint) {
                            <button
                                type="button"
                                text
                                size="small"
                                [pButton]="computedFilterButtonProps().popover.addRule"
                                [class]="cx('pcFilterAddRuleButton')"
                                [attr.aria-label]="addRuleButtonLabel"
                                [pButtonPT]="ptm('pcAddRuleButtonLabel')"
                                [pButtonUnstyled]="unstyled()"
                                (click)="addConstraint()"
                            >
                                @if (!addRuleIconTemplate()) {
                                    <svg data-p-icon="plus" [pBind]="ptm('pcAddRuleButtonLabel')['icon']" />
                                }
                                <ng-template *ngTemplateOutlet="addRuleIconTemplate()" />
                                {{ addRuleButtonLabel }}
                            </button>
                        }
                        <div [class]="cx('filterButtonbar')" [pBind]="ptm('filterButtonBar')">
                            @if (showClearButton()) {
                                <button
                                    #clearBtn
                                    type="button"
                                    [pButton]="computedFilterButtonProps().popover.clear"
                                    [attr.aria-label]="clearButtonLabel"
                                    [pButtonPT]="ptm('pcFilterClearButton')"
                                    [pButtonUnstyled]="unstyled()"
                                    (click)="clearFilter()"
                                >
                                    {{ clearButtonLabel }}
                                </button>
                            }
                            @if (showApplyButton()) {
                                <button
                                    type="button"
                                    size="small"
                                    [pButton]="computedFilterButtonProps().popover.apply"
                                    [attr.aria-label]="applyButtonLabel"
                                    [pButtonPT]="ptm('pcFilterApplyButton')"
                                    [pButtonUnstyled]="unstyled()"
                                    (click)="applyFilter()"
                                >
                                    {{ applyButtonLabel }}
                                </button>
                            }
                        </div>
                    }
                    <ng-container *ngTemplateOutlet="footerTemplate(); context: { $implicit: field() }" />
                </div>
            }
        </div>
    `,
      providers: [TableStyle, {
        provide: COLUMN_FILTER_INSTANCE,
        useExisting: ColumnFilter
      }],
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind2]
    }]
  }], () => [], {
    field: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "field",
        required: false
      }]
    }],
    type: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    display: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "display",
        required: false
      }]
    }],
    showMenu: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showMenu",
        required: false
      }]
    }],
    matchMode: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "matchMode",
        required: false
      }]
    }],
    operator: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "operator",
        required: false
      }]
    }, {
      type: i010.Output,
      args: ["operatorChange"]
    }],
    showOperator: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showOperator",
        required: false
      }]
    }],
    showClearButton: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showClearButton",
        required: false
      }]
    }],
    showApplyButton: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showApplyButton",
        required: false
      }]
    }],
    showMatchModes: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showMatchModes",
        required: false
      }]
    }],
    showAddButton: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showAddButton",
        required: false
      }]
    }],
    hideOnClear: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "hideOnClear",
        required: false
      }]
    }],
    placeholder: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    matchModeOptions: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "matchModeOptions",
        required: false
      }]
    }],
    maxConstraints: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "maxConstraints",
        required: false
      }]
    }],
    minFractionDigits: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "minFractionDigits",
        required: false
      }]
    }],
    maxFractionDigits: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "maxFractionDigits",
        required: false
      }]
    }],
    prefix: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "prefix",
        required: false
      }]
    }],
    suffix: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "suffix",
        required: false
      }]
    }],
    locale: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "locale",
        required: false
      }]
    }],
    localeMatcher: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "localeMatcher",
        required: false
      }]
    }],
    currency: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "currency",
        required: false
      }]
    }],
    currencyDisplay: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "currencyDisplay",
        required: false
      }]
    }],
    filterOn: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterOn",
        required: false
      }]
    }],
    useGrouping: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "useGrouping",
        required: false
      }]
    }],
    showButtons: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "showButtons",
        required: false
      }]
    }],
    ariaLabel: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "ariaLabel",
        required: false
      }]
    }],
    filterButtonProps: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "filterButtonProps",
        required: false
      }]
    }],
    motionOptions: [{
      type: i010.Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    onShow: [{
      type: i010.Output,
      args: ["onShow"]
    }],
    onHide: [{
      type: i010.Output,
      args: ["onHide"]
    }],
    icon: [{
      type: i010.ViewChild,
      args: ["menuButton", {
        read: ElementRef,
        isSignal: true
      }]
    }],
    clearButtonViewChild: [{
      type: i010.ViewChild,
      args: ["clearBtn", { isSignal: true }]
    }],
    headerTemplate: [{
      type: i010.ContentChild,
      args: ["header", {
        descendants: false,
        isSignal: true
      }]
    }],
    filterTemplate: [{
      type: i010.ContentChild,
      args: ["filter", {
        descendants: false,
        isSignal: true
      }]
    }],
    footerTemplate: [{
      type: i010.ContentChild,
      args: ["footer", {
        descendants: false,
        isSignal: true
      }]
    }],
    filterIconTemplate: [{
      type: i010.ContentChild,
      args: ["filtericon", {
        descendants: false,
        isSignal: true
      }]
    }],
    removeRuleIconTemplate: [{
      type: i010.ContentChild,
      args: ["removeruleicon", {
        descendants: false,
        isSignal: true
      }]
    }],
    addRuleIconTemplate: [{
      type: i010.ContentChild,
      args: ["addruleicon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var TableModule = class TableModule2 {
  static \u0275fac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i010.\u0275\u0275defineNgModule({
    type: TableModule2
  });
  static \u0275inj = /* @__PURE__ */ i010.\u0275\u0275defineInjector({
    imports: [Table, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ColumnFilter, ColumnFilterFormElement, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [
        Table,
        TableBody,
        SortableColumn,
        FrozenColumn,
        RowGroupHeader,
        SelectableRow,
        RowToggler,
        ContextMenuRow,
        ResizableColumn,
        ReorderableColumn,
        EditableColumn,
        CellEditor,
        SortIcon,
        TableRadioButton,
        TableCheckbox,
        TableHeaderCheckbox,
        ReorderableRowHandle,
        ReorderableRow,
        SelectableRowDblClick,
        EditableRow,
        InitEditableRow,
        SaveEditableRow,
        CancelEditableRow,
        ColumnFilter,
        ColumnFilterFormElement
      ],
      exports: [
        Table,
        SharedModule,
        SortableColumn,
        FrozenColumn,
        RowGroupHeader,
        SelectableRow,
        RowToggler,
        ContextMenuRow,
        ResizableColumn,
        ReorderableColumn,
        EditableColumn,
        CellEditor,
        SortIcon,
        TableRadioButton,
        TableCheckbox,
        TableHeaderCheckbox,
        ReorderableRowHandle,
        ReorderableRow,
        SelectableRowDblClick,
        EditableRow,
        InitEditableRow,
        SaveEditableRow,
        CancelEditableRow,
        ColumnFilter,
        ColumnFilterFormElement,
        ScrollerModule
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  COLUMN_FILTER_INSTANCE,
  CancelEditableRow,
  CellEditor,
  ColumnFilter,
  ColumnFilterFormElement,
  ContextMenuRow,
  EditableColumn,
  EditableRow,
  FrozenColumn,
  InitEditableRow,
  ReorderableColumn,
  ReorderableRow,
  ReorderableRowHandle,
  ResizableColumn,
  RowGroupHeader,
  RowToggler,
  SaveEditableRow,
  SelectableRow,
  SelectableRowDblClick,
  SortIcon,
  SortableColumn,
  TABLE_INSTANCE,
  Table,
  TableBody,
  TableCheckbox,
  TableClasses,
  TableHeaderCheckbox,
  TableModule,
  TableRadioButton,
  TableService,
  TableStyle
};
//# sourceMappingURL=primeng_table.o-EwEUcL0D-dev.js.map

if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  Spinner
} from "@nf-internal/chunk-EYWABEEY";
import "@nf-internal/chunk-4VP7SACV";
import {
  Ft,
  et,
  ft,
  re,
  zt
} from "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadProps,
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-scroller.mjs
import { NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, Injectable, InjectionToken, NgModule, ViewEncapsulation, computed, contentChild, effect, inject, input, output, signal, untracked, viewChild } from "@angular/core";
import { BaseComponent, PARENT_INSTANCE } from "primeng/basecomponent";
import * as i1 from "primeng/bind";
import { Bind as Bind2 } from "primeng/bind";
import { BaseStyle } from "primeng/base";
export * from "primeng/types/scroller";
var css = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;
var classes = {
  root: ({ instance }) => ["p-virtualscroller", {
    "p-virtualscroller-inline": instance.inline(),
    "p-virtualscroller-both p-both-scroll": instance.both(),
    "p-virtualscroller-horizontal p-horizontal-scroll": instance.horizontal()
  }],
  content: "p-virtualscroller-content",
  spacer: "p-virtualscroller-spacer",
  loader: ({ instance }) => ["p-virtualscroller-loader", { "p-virtualscroller-loader-mask": !instance.loaderTemplate() }],
  loadingIcon: "p-virtualscroller-loading-icon"
};
var ScrollerStyle = class ScrollerStyle2 extends BaseStyle {
  name = "virtualscroller";
  css = css;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollerStyle_BaseFactory = void 0;
    return function ScrollerStyle_Factory(__ngFactoryType__) {
      return (\u0275ScrollerStyle_BaseFactory || (\u0275ScrollerStyle_BaseFactory = i0.\u0275\u0275getInheritedFactory(ScrollerStyle2)))(__ngFactoryType__ || ScrollerStyle2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: ScrollerStyle2,
    factory: ScrollerStyle2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ScrollerStyle, [{ type: Injectable }], null, null);
})();
var ScrollerClasses;
(function(ScrollerClasses2) {
  ScrollerClasses2["root"] = "p-virtualscroller";
  ScrollerClasses2["content"] = "p-virtualscroller-content";
  ScrollerClasses2["spacer"] = "p-virtualscroller-spacer";
  ScrollerClasses2["loader"] = "p-virtualscroller-loader";
  ScrollerClasses2["loadingIcon"] = "p-virtualscroller-loading-icon";
})(ScrollerClasses || (ScrollerClasses = {}));
var SCROLLER_INSTANCE = new InjectionToken("SCROLLER_INSTANCE");
var Scroller = class Scroller2 extends BaseComponent {
  componentName = "VirtualScroller";
  bindDirectiveInstance = inject(Bind2, { self: true });
  $pcScroller = inject(SCROLLER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : (
    /* istanbul ignore next */
    []
  ));
  id = input(...ngDevMode ? [void 0, { debugName: "id" }] : (
    /* istanbul ignore next */
    []
  ));
  style = input(...ngDevMode ? [void 0, { debugName: "style" }] : (
    /* istanbul ignore next */
    []
  ));
  styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  tabindex = input(0, ...ngDevMode ? [{ debugName: "tabindex" }] : (
    /* istanbul ignore next */
    []
  ));
  items = input(...ngDevMode ? [void 0, { debugName: "items" }] : (
    /* istanbul ignore next */
    []
  ));
  itemSize = input(0, ...ngDevMode ? [{ debugName: "itemSize" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollHeight = input(...ngDevMode ? [void 0, { debugName: "scrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  scrollWidth = input(...ngDevMode ? [void 0, { debugName: "scrollWidth" }] : (
    /* istanbul ignore next */
    []
  ));
  orientation = input("vertical", ...ngDevMode ? [{ debugName: "orientation" }] : (
    /* istanbul ignore next */
    []
  ));
  step = input(0, ...ngDevMode ? [{ debugName: "step" }] : (
    /* istanbul ignore next */
    []
  ));
  delay = input(0, ...ngDevMode ? [{ debugName: "delay" }] : (
    /* istanbul ignore next */
    []
  ));
  resizeDelay = input(10, ...ngDevMode ? [{ debugName: "resizeDelay" }] : (
    /* istanbul ignore next */
    []
  ));
  appendOnly = input(false, ...ngDevMode ? [{ debugName: "appendOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  inline = input(false, ...ngDevMode ? [{ debugName: "inline" }] : (
    /* istanbul ignore next */
    []
  ));
  lazy = input(false, ...ngDevMode ? [{ debugName: "lazy" }] : (
    /* istanbul ignore next */
    []
  ));
  disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  loaderDisabled = input(false, ...ngDevMode ? [{ debugName: "loaderDisabled" }] : (
    /* istanbul ignore next */
    []
  ));
  columns = input(...ngDevMode ? [void 0, { debugName: "columns" }] : (
    /* istanbul ignore next */
    []
  ));
  showSpacer = input(true, ...ngDevMode ? [{ debugName: "showSpacer" }] : (
    /* istanbul ignore next */
    []
  ));
  showLoader = input(false, ...ngDevMode ? [{ debugName: "showLoader" }] : (
    /* istanbul ignore next */
    []
  ));
  numToleratedItems = input(...ngDevMode ? [void 0, { debugName: "numToleratedItems" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = input(...ngDevMode ? [void 0, { debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  autoSize = input(false, ...ngDevMode ? [{ debugName: "autoSize" }] : (
    /* istanbul ignore next */
    []
  ));
  trackBy = input(...ngDevMode ? [void 0, { debugName: "trackBy" }] : (
    /* istanbul ignore next */
    []
  ));
  options = input(...ngDevMode ? [void 0, { debugName: "options" }] : (
    /* istanbul ignore next */
    []
  ));
  _id = computed(() => this.options()?.id ?? this.id(), ...ngDevMode ? [{ debugName: "_id" }] : (
    /* istanbul ignore next */
    []
  ));
  _style = computed(() => this.options()?.style ?? this.style(), ...ngDevMode ? [{ debugName: "_style" }] : (
    /* istanbul ignore next */
    []
  ));
  _styleClass = computed(() => this.options()?.styleClass ?? this.styleClass(), ...ngDevMode ? [{ debugName: "_styleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  _tabindex = computed(() => this.options()?.tabindex ?? this.tabindex(), ...ngDevMode ? [{ debugName: "_tabindex" }] : (
    /* istanbul ignore next */
    []
  ));
  _items = computed(() => this.options()?.items ?? this.items(), ...ngDevMode ? [{ debugName: "_items" }] : (
    /* istanbul ignore next */
    []
  ));
  _itemSize = computed(() => this.options()?.itemSize ?? this.itemSize(), ...ngDevMode ? [{ debugName: "_itemSize" }] : (
    /* istanbul ignore next */
    []
  ));
  _scrollHeight = computed(() => this.options()?.scrollHeight ?? this.scrollHeight(), ...ngDevMode ? [{ debugName: "_scrollHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  _scrollWidth = computed(() => this.options()?.scrollWidth ?? this.scrollWidth(), ...ngDevMode ? [{ debugName: "_scrollWidth" }] : (
    /* istanbul ignore next */
    []
  ));
  _orientation = computed(() => this.options()?.orientation ?? this.orientation(), ...ngDevMode ? [{ debugName: "_orientation" }] : (
    /* istanbul ignore next */
    []
  ));
  _step = computed(() => this.options()?.step ?? this.step(), ...ngDevMode ? [{ debugName: "_step" }] : (
    /* istanbul ignore next */
    []
  ));
  _delay = computed(() => this.options()?.delay ?? this.delay(), ...ngDevMode ? [{ debugName: "_delay" }] : (
    /* istanbul ignore next */
    []
  ));
  _resizeDelay = computed(() => this.options()?.resizeDelay ?? this.resizeDelay(), ...ngDevMode ? [{ debugName: "_resizeDelay" }] : (
    /* istanbul ignore next */
    []
  ));
  _appendOnly = computed(() => this.options()?.appendOnly ?? this.appendOnly(), ...ngDevMode ? [{ debugName: "_appendOnly" }] : (
    /* istanbul ignore next */
    []
  ));
  _inline = computed(() => this.options()?.inline ?? this.inline(), ...ngDevMode ? [{ debugName: "_inline" }] : (
    /* istanbul ignore next */
    []
  ));
  _lazy = computed(() => this.options()?.lazy ?? this.lazy(), ...ngDevMode ? [{ debugName: "_lazy" }] : (
    /* istanbul ignore next */
    []
  ));
  _disabled = computed(() => this.options()?.disabled ?? this.disabled(), ...ngDevMode ? [{ debugName: "_disabled" }] : (
    /* istanbul ignore next */
    []
  ));
  _loaderDisabled = computed(() => this.options()?.loaderDisabled ?? this.loaderDisabled(), ...ngDevMode ? [{ debugName: "_loaderDisabled" }] : (
    /* istanbul ignore next */
    []
  ));
  _columns = computed(() => this.options()?.columns ?? this.columns(), ...ngDevMode ? [{ debugName: "_columns" }] : (
    /* istanbul ignore next */
    []
  ));
  _showSpacer = computed(() => this.options()?.showSpacer ?? this.showSpacer(), ...ngDevMode ? [{ debugName: "_showSpacer" }] : (
    /* istanbul ignore next */
    []
  ));
  _showLoader = computed(() => this.options()?.showLoader ?? this.showLoader(), ...ngDevMode ? [{ debugName: "_showLoader" }] : (
    /* istanbul ignore next */
    []
  ));
  _numToleratedItems = computed(() => this.options()?.numToleratedItems ?? this.numToleratedItems(), ...ngDevMode ? [{ debugName: "_numToleratedItems" }] : (
    /* istanbul ignore next */
    []
  ));
  _loading = computed(() => this.options()?.loading ?? this.loading(), ...ngDevMode ? [{ debugName: "_loading" }] : (
    /* istanbul ignore next */
    []
  ));
  _autoSize = computed(() => this.options()?.autoSize ?? this.autoSize(), ...ngDevMode ? [{ debugName: "_autoSize" }] : (
    /* istanbul ignore next */
    []
  ));
  _trackBy = computed(() => this.options()?.trackBy ?? this.trackBy(), ...ngDevMode ? [{ debugName: "_trackBy" }] : (
    /* istanbul ignore next */
    []
  ));
  contentStyleClass = computed(() => this.options()?.contentStyleClass, ...ngDevMode ? [{ debugName: "contentStyleClass" }] : (
    /* istanbul ignore next */
    []
  ));
  onLazyLoad = output();
  onScroll = output();
  onScrollIndexChange = output();
  elementViewChild = viewChild("element", ...ngDevMode ? [{ debugName: "elementViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  contentViewChild = viewChild("content", ...ngDevMode ? [{ debugName: "contentViewChild" }] : (
    /* istanbul ignore next */
    []
  ));
  hostHeight = signal(void 0, ...ngDevMode ? [{ debugName: "hostHeight" }] : (
    /* istanbul ignore next */
    []
  ));
  contentTemplate = contentChild("content", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "contentTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  itemTemplate = contentChild("item", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "itemTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  loaderTemplate = contentChild("loader", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loaderTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  loaderIconTemplate = contentChild("loadericon", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "loaderIconTemplate" } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  d_loading = false;
  d_numToleratedItems;
  contentEl;
  vertical = computed(() => this._orientation() === "vertical", ...ngDevMode ? [{ debugName: "vertical" }] : (
    /* istanbul ignore next */
    []
  ));
  horizontal = computed(() => this._orientation() === "horizontal", ...ngDevMode ? [{ debugName: "horizontal" }] : (
    /* istanbul ignore next */
    []
  ));
  both = computed(() => this._orientation() === "both", ...ngDevMode ? [{ debugName: "both" }] : (
    /* istanbul ignore next */
    []
  ));
  get loadedItems() {
    const items = this._items();
    if (items && !this.d_loading) {
      if (this.both()) return items.slice(this._appendOnly() ? 0 : this.first.rows, this.last.rows).map((item) => {
        if (this._columns()) return item;
        else if (Array.isArray(item)) return item.slice(this._appendOnly() ? 0 : this.first.cols, this.last.cols);
        else return item;
      });
      else if (this.horizontal() && this._columns()) return items;
      else return items.slice(this._appendOnly() ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled() ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    const columns = this._columns();
    if (columns && (this.both() || this.horizontal())) return this.d_loading && this._loaderDisabled() ? this.both() ? this.loaderArr[0] : this.loaderArr : columns.slice(this.both() ? this.first.cols : this.first, this.both() ? this.last.cols : this.last);
    return columns;
  }
  first = 0;
  last = 0;
  page = 0;
  isRangeChanged = false;
  numItemsInViewport = 0;
  lastScrollPos = 0;
  lazyLoadState = {};
  loaderArr = [];
  spacerStyle;
  contentStyle;
  scrollTimeout;
  resizeTimeout;
  _destroyed = false;
  initialized = false;
  windowResizeListener;
  defaultWidth;
  defaultHeight;
  defaultContentWidth;
  defaultContentHeight;
  _componentStyle = inject(ScrollerStyle);
  constructor() {
    super();
    effect(() => {
      if (this._scrollHeight() === "100%") this.hostHeight.set("100%");
    });
    effect(() => {
      const loading = this._loading();
      untracked(() => {
        if (this._lazy() && loading !== void 0 && loading !== this.d_loading) this.d_loading = loading;
      });
    });
    effect(() => {
      this._orientation();
      untracked(() => {
        this.lastScrollPos = this.both() ? {
          top: 0,
          left: 0
        } : 0;
      });
    });
    effect(() => {
      const numT = this._numToleratedItems();
      untracked(() => {
        if (numT !== void 0 && numT !== this.d_numToleratedItems) this.d_numToleratedItems = numT;
      });
    });
    effect(() => {
      this._itemSize();
      this._scrollHeight();
      this._scrollWidth();
      untracked(() => {
        if (this.initialized) {
          this.init();
          this.calculateAutoSize();
        }
      });
    });
    effect(() => {
      this._items();
      untracked(() => {
        if (this.initialized && !this._lazy()) this.init();
      });
    });
    effect(() => {
      const opts = this.options();
      untracked(() => {
        if (opts?.contentStyle !== void 0) this.contentStyle = opts.contentStyle;
      });
    });
  }
  loaderIconContext = { options: { styleClass: "p-virtualscroller-loading-icon" } };
  onInit() {
    this.setInitialState();
  }
  onAfterViewInit() {
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
    if (!this.initialized) this.viewInit();
  }
  onDestroy() {
    this._destroyed = true;
    this.unbindResizeListener();
    if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.contentEl = null;
    this.initialized = false;
  }
  viewInit() {
    if (isPlatformBrowser(this.platformId) && !this.initialized) {
      if (ft(this.elementViewChild()?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.defaultWidth = zt(this.elementViewChild()?.nativeElement);
        this.defaultHeight = Ft(this.elementViewChild()?.nativeElement);
        this.defaultContentWidth = zt(this.contentEl);
        this.defaultContentHeight = Ft(this.contentEl);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled()) {
      this.bindResizeListener();
      setTimeout(() => {
        this.setSpacerSize();
        this.setSize();
        this.calculateOptions();
        this.calculateAutoSize();
        this.cd.detectChanges();
      }, 1);
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild()?.nativeElement || et(this.elementViewChild()?.nativeElement, ".p-virtualscroller-content");
  }
  setInitialState() {
    this.first = this.both() ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both() ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both() ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both() ? {
      top: 0,
      left: 0
    } : 0;
    if (this.d_loading === void 0 || this.d_loading === false) this.d_loading = this._loading() || false;
    this.d_numToleratedItems = this._numToleratedItems();
    this.loaderArr = this.loaderArr.length > 0 ? this.loaderArr : [];
  }
  getElementRef() {
    return this.elementViewChild();
  }
  getPageByFirst(first) {
    return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step() || 1));
  }
  isPageChanged(first) {
    return this._step() ? this.page !== this.getPageByFirst(first ?? this.first) : true;
  }
  scrollTo(options) {
    this.elementViewChild()?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    if (this.both() ? index.every((i) => i > -1) : index > -1) {
      const first = this.first;
      const { scrollTop = 0, scrollLeft = 0 } = this.elementViewChild()?.nativeElement ?? {};
      const { numToleratedItems } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this._itemSize();
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = this.both() ? {
        rows: 0,
        cols: 0
      } : 0;
      let isRangeChanged = false, isScrollChanged = false;
      if (this.both()) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
        isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        if (this.horizontal()) scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop);
        else scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
        isScrollChanged = this.lastScrollPos !== (this.horizontal() ? scrollLeft : scrollTop);
        isRangeChanged = newFirst !== first;
      }
      this.isRangeChanged = isRangeChanged;
      if (isScrollChanged) this.first = newFirst;
    }
  }
  scrollInView(index, to, behavior = "auto") {
    if (to) {
      const { first, viewport } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === "to-start";
      const isToEnd = to === "to-end";
      if (isToStart) {
        if (this.both()) {
          if (viewport.first.rows - first.rows > index[0]) scrollTo(viewport.first.cols * this._itemSize()[1], (viewport.first.rows - 1) * this._itemSize()[0]);
          else if (viewport.first.cols - first.cols > index[1]) scrollTo((viewport.first.cols - 1) * this._itemSize()[1], viewport.first.rows * this._itemSize()[0]);
        } else if (viewport.first - first > index) {
          const pos = (viewport.first - 1) * this._itemSize();
          if (this.horizontal()) scrollTo(pos, 0);
          else scrollTo(0, pos);
        }
      } else if (isToEnd) {
        if (this.both()) {
          if (viewport.last.rows - first.rows <= index[0] + 1) scrollTo(viewport.first.cols * this._itemSize()[1], (viewport.first.rows + 1) * this._itemSize()[0]);
          else if (viewport.last.cols - first.cols <= index[1] + 1) scrollTo((viewport.first.cols + 1) * this._itemSize()[1], viewport.first.rows * this._itemSize()[0]);
        } else if (viewport.last - first <= index + 1) {
          const pos = (viewport.first + 1) * this._itemSize();
          if (this.horizontal()) scrollTo(pos, 0);
          else scrollTo(0, pos);
        }
      }
    } else this.scrollToIndex(index, behavior);
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    let firstInViewport = this.first;
    let lastInViewport = 0;
    const el = this.elementViewChild()?.nativeElement;
    if (el) {
      const { scrollTop, scrollLeft } = el;
      if (this.both()) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize()[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize()[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        firstInViewport = calculateFirstInViewport(this.horizontal() ? scrollLeft : scrollTop, this._itemSize());
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const el = this.elementViewChild()?.nativeElement;
    const contentWidth = (el ? el.offsetWidth - contentPos.left : 0) || 0;
    const contentHeight = (el ? el.offsetHeight - contentPos.top : 0) || 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
    const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both() ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize()[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize()[1])
    } : calculateNumItemsInViewport(this.horizontal() ? contentWidth : contentHeight, this._itemSize());
    return {
      numItemsInViewport,
      numToleratedItems: this.d_numToleratedItems || (this.both() ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport))
    };
  }
  calculateOptions() {
    const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both() ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this._showLoader()) this.loaderArr = this.both() ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
    if (this._lazy()) Promise.resolve().then(() => {
      this.lazyLoadState = {
        first: this._step() ? this.both() ? {
          rows: 0,
          cols: first.cols
        } : 0 : first,
        last: Math.min(this._step() ? this._step() : this.last, this._items().length)
      };
      this.handleEvents("onLazyLoad", this.lazyLoadState);
    });
  }
  calculateAutoSize() {
    if (this._autoSize() && !this.d_loading) Promise.resolve().then(() => {
      if (this.contentEl) {
        this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
        this.contentEl.style.position = "relative";
        this.elementViewChild().nativeElement.style.contain = "none";
        const [contentWidth, contentHeight] = [zt(this.contentEl), Ft(this.contentEl)];
        if (contentWidth !== this.defaultContentWidth) this.elementViewChild().nativeElement.style.width = "";
        if (contentHeight !== this.defaultContentHeight) this.elementViewChild().nativeElement.style.height = "";
        const [width, height] = [zt(this.elementViewChild().nativeElement), Ft(this.elementViewChild().nativeElement)];
        if (this.both() || this.horizontal()) this.elementViewChild().nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth() || this.defaultWidth + "px";
        if (this.both() || this.vertical()) this.elementViewChild().nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight() || this.defaultHeight + "px";
        this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
        this.contentEl.style.position = "";
        this.elementViewChild().nativeElement.style.contain = "";
      }
    });
  }
  getLast(last = 0, isCols = false) {
    const items = this._items();
    const columns = this._columns();
    return items ? Math.min(isCols ? (columns || items[0]).length : items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style = getComputedStyle(this.contentEl);
      const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
      const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
      const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
      const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    const nativeElement = this.elementViewChild()?.nativeElement;
    if (nativeElement) {
      const parentElement = nativeElement.parentElement?.parentElement;
      const elementWidth = nativeElement.offsetWidth;
      const parentWidth = parentElement?.offsetWidth || 0;
      const width = this._scrollWidth() || `${elementWidth || parentWidth}px`;
      const elementHeight = nativeElement.offsetHeight;
      const parentHeight = parentElement?.offsetHeight || 0;
      const height = this._scrollHeight() || `${elementHeight || parentHeight}px`;
      const setProp = (_name, _value) => nativeElement.style[_name] = _value;
      if (this.both() || this.horizontal()) {
        setProp("height", height);
        setProp("width", width);
      } else setProp("height", height);
    }
  }
  setSpacerSize() {
    const items = this._items();
    if (items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = __spreadProps(__spreadValues({}, this.spacerStyle), {
        [`${_name}`]: (_value || []).length * _size + _cpos + "px"
      });
      if (this.both()) {
        setProp("height", items, this._itemSize()[0], contentPos.y);
        setProp("width", this._columns() || items[1], this._itemSize()[1], contentPos.x);
      } else if (this.horizontal()) setProp("width", this._columns() || items, this._itemSize(), contentPos.x);
      else setProp("height", items, this._itemSize(), contentPos.y);
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly()) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadProps(__spreadValues({}, this.contentStyle), {
        transform: `translate3d(${_x}px, ${_y}px, 0)`
      });
      if (this.both()) setTransform(calculateTranslateVal(first.cols, this._itemSize()[1]), calculateTranslateVal(first.rows, this._itemSize()[0]));
      else {
        const translateVal = calculateTranslateVal(first, this._itemSize());
        if (this.horizontal()) setTransform(translateVal, 0);
        else setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    if (!target) throw new Error("Event target is null");
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT) return 0;
      else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) lastValue += _numT + 1;
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both() ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both()) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly() || this._appendOnly() && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize()[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize()[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal() ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly() || this._appendOnly() && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize());
        newFirst = calculateFirst(currentIndex, calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight), this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents("onScrollIndexChange", newState);
      if (this._lazy() && this.isPageChanged(first)) {
        const lazyLoadState = {
          first: this._step() ? Math.min(this.getPageByFirst(first) * this._step(), this._items().length - this._step()) : first,
          last: Math.min(this._step() ? (this.getPageByFirst(first) + 1) * this._step() : last, this._items().length)
        };
        if (this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last) this.handleEvents("onLazyLoad", lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents("onScroll", { originalEvent: event });
    if (this._delay()) {
      if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
      if (!this.d_loading && this._showLoader()) {
        const { isRangeChanged } = this.onScrollPositionChange(event);
        if (isRangeChanged || (this._step() ? this.isPageChanged() : false)) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this._showLoader() && (!this._lazy() || this._loading() === void 0)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
        }
        this.cd.detectChanges();
      }, this._delay());
    } else if (!this.d_loading) this.onScrollChange(event);
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.windowResizeListener) {
        const window = this.document.defaultView;
        const event = re() ? "orientationchange" : "resize";
        this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
      }
    }
  }
  unbindResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      if (ft(this.elementViewChild()?.nativeElement)) {
        const [width, height] = [zt(this.elementViewChild()?.nativeElement), Ft(this.elementViewChild()?.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        if (this.both() ? isDiffWidth || isDiffHeight : this.horizontal() ? isDiffWidth : this.vertical() ? isDiffHeight : false) {
          this.d_numToleratedItems = this._numToleratedItems();
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = zt(this.contentEl);
          this.defaultContentHeight = Ft(this.contentEl);
          this.init();
        }
      }
    }, this._resizeDelay());
  }
  handleEvents(name, params) {
    if (this._destroyed) return;
    const opts = this.options();
    return opts && opts[name] ? opts[name](params) : this[name].emit(params);
  }
  getContentTemplateContext() {
    return {
      $implicit: this.loadedItems,
      options: this.getContentOptions()
    };
  }
  getItemTemplateContext(item, index) {
    return {
      $implicit: item,
      options: this.getOptions(index)
    };
  }
  getLoaderTemplateContext(index) {
    return { options: this.getLoaderOptions(index, this.both() && { numCols: this.numItemsInViewport.cols }) };
  }
  getDisabledContentTemplateContext() {
    return {
      $implicit: this.items(),
      options: {
        rows: this._items() ?? void 0,
        columns: this.loadedColumns
      }
    };
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-virtualscroller-content ${this.d_loading ? "p-virtualscroller-loading" : ""}`,
      items: this.loadedItems,
      getItemOptions: (index) => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize(),
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical(),
      horizontal: this.horizontal(),
      both: this.both(),
      scrollTo: this.scrollTo.bind(this),
      scrollToIndex: this.scrollToIndex.bind(this),
      orientation: this._orientation(),
      scrollableElement: this.elementViewChild()?.nativeElement
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items() || []).length;
    const index = this.both() ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return __spreadValues({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
      loading: this.d_loading
    }, extOptions);
  }
  static \u0275fac = function Scroller_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || Scroller2)();
  };
  static \u0275cmp = (function() {
    const _c0 = ["content"];
    const _c1 = ["item"];
    const _c2 = ["loader"];
    const _c3 = ["loadericon"];
    const _c4 = ["element"];
    const _c5 = ["*"];
    function _forTrack0($index, $item) {
      return this._trackBy() ? this._trackBy()($index, $item) : $index;
    }
    function Scroller_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Scroller_Conditional_0_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Scroller_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate())("ngTemplateOutletContext", ctx_r1.getContentTemplateContext());
      }
    }
    function Scroller_Conditional_0_Conditional_3_For_3_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Scroller_Conditional_0_Conditional_3_For_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Scroller_Conditional_0_Conditional_3_For_3_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const item_r3 = ctx.$implicit;
        const \u0275$index_12_r4 = ctx.$index;
        const ctx_r1 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate())("ngTemplateOutletContext", ctx_r1.getItemTemplateContext(item_r3, \u0275$index_12_r4));
      }
    }
    function Scroller_Conditional_0_Conditional_3_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 7, 1);
        i0.\u0275\u0275repeaterCreate(2, Scroller_Conditional_0_Conditional_3_For_3_Template, 1, 2, "ng-container", null, _forTrack0, true);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275styleMap(ctx_r1.contentStyle);
        i0.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("content"), ctx_r1.contentStyleClass()));
        i0.\u0275\u0275property("pBind", ctx_r1.ptm("content"));
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275repeater(ctx_r1.loadedItems);
      }
    }
    function Scroller_Conditional_0_Conditional_4_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275element(0, "div", 7);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275styleMap(ctx_r1.spacerStyle);
        i0.\u0275\u0275classMap(ctx_r1.cx("spacer"));
        i0.\u0275\u0275property("pBind", ctx_r1.ptm("spacer"));
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const \u0275$index_24_r5 = ctx.$index;
        const ctx_r1 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderTemplate())("ngTemplateOutletContext", ctx_r1.getLoaderTemplateContext(\u0275$index_24_r5));
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275repeaterCreate(0, Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_Template, 1, 2, "ng-container", null, i0.\u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275repeater(ctx_r1.loaderArr);
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r1.loaderIconTemplate())("ngTemplateOutletContext", ctx_r1.loaderIconContext);
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275namespaceSVG();
        i0.\u0275\u0275element(0, "svg", 9);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(4);
        i0.\u0275\u0275classMap(ctx_r1.cx("loadingIcon"));
        i0.\u0275\u0275property("spin", true)("pBind", ctx_r1.ptm("loadingIcon"));
      }
    }
    function Scroller_Conditional_0_Conditional_5_Conditional_2_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275conditionalCreate(0, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_Template, 1, 2, "ng-container")(1, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_1_Template, 1, 4, ":svg:svg", 8);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(3);
        i0.\u0275\u0275conditional(ctx_r1.loaderIconTemplate() ? 0 : 1);
      }
    }
    function Scroller_Conditional_0_Conditional_5_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 7);
        i0.\u0275\u0275conditionalCreate(1, Scroller_Conditional_0_Conditional_5_Conditional_1_Template, 2, 0)(2, Scroller_Conditional_0_Conditional_5_Conditional_2_Template, 2, 1);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275classMap(ctx_r1.cx("loader"));
        i0.\u0275\u0275property("pBind", ctx_r1.ptm("loader"));
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r1.loaderTemplate() ? 1 : 2);
      }
    }
    function Scroller_Conditional_0_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i0.\u0275\u0275getCurrentView();
        i0.\u0275\u0275elementStart(0, "div", 3, 0);
        i0.\u0275\u0275listener("scroll", function Scroller_Conditional_0_Template_div_scroll_0_listener($event) {
          i0.\u0275\u0275restoreView(_r1);
          const ctx_r1 = i0.\u0275\u0275nextContext();
          return i0.\u0275\u0275resetView(ctx_r1.onContainerScroll($event));
        });
        i0.\u0275\u0275conditionalCreate(2, Scroller_Conditional_0_Conditional_2_Template, 1, 2, "ng-container")(3, Scroller_Conditional_0_Conditional_3_Template, 4, 5, "div", 4);
        i0.\u0275\u0275conditionalCreate(4, Scroller_Conditional_0_Conditional_4_Template, 1, 5, "div", 4);
        i0.\u0275\u0275conditionalCreate(5, Scroller_Conditional_0_Conditional_5_Template, 3, 4, "div", 5);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275styleMap(ctx_r1._style());
        i0.\u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1._styleClass()));
        i0.\u0275\u0275property("pBind", ctx_r1.ptm("root"));
        i0.\u0275\u0275attribute("id", ctx_r1._id())("tabindex", ctx_r1._tabindex());
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275conditional(ctx_r1.contentTemplate() ? 2 : 3);
        i0.\u0275\u0275advance(2);
        i0.\u0275\u0275conditional(ctx_r1._showSpacer() ? 4 : -1);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(!ctx_r1._loaderDisabled() && ctx_r1._showLoader() && ctx_r1.d_loading ? 5 : -1);
      }
    }
    function Scroller_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementContainer(0);
      }
    }
    function Scroller_Conditional_1_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275template(0, Scroller_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext(2);
        i0.\u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate())("ngTemplateOutletContext", ctx_r1.getDisabledContentTemplateContext());
      }
    }
    function Scroller_Conditional_1_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275projection(0);
        i0.\u0275\u0275conditionalCreate(1, Scroller_Conditional_1_Conditional_1_Template, 1, 2, "ng-container");
      }
      if (rf & 2) {
        const ctx_r1 = i0.\u0275\u0275nextContext();
        i0.\u0275\u0275advance();
        i0.\u0275\u0275conditional(ctx_r1.contentTemplate() ? 1 : -1);
      }
    }
    return /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: Scroller2,
      selectors: [["p-scroller"], ["p-virtualscroller"], ["p-virtual-scroller"]],
      contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          i0.\u0275\u0275contentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4)(dirIndex, ctx.itemTemplate, _c1, 4)(dirIndex, ctx.loaderTemplate, _c2, 4)(dirIndex, ctx.loaderIconTemplate, _c3, 4);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(4);
        }
      },
      viewQuery: function Scroller_Query(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275viewQuerySignal(ctx.elementViewChild, _c4, 5)(ctx.contentViewChild, _c0, 5);
        }
        if (rf & 2) {
          i0.\u0275\u0275queryAdvance(2);
        }
      },
      hostVars: 2,
      hostBindings: function Scroller_HostBindings(rf, ctx) {
        if (rf & 2) {
          i0.\u0275\u0275styleProp("height", ctx.hostHeight());
        }
      },
      inputs: {
        hostName: [1, "hostName"],
        id: [1, "id"],
        style: [1, "style"],
        styleClass: [1, "styleClass"],
        tabindex: [1, "tabindex"],
        items: [1, "items"],
        itemSize: [1, "itemSize"],
        scrollHeight: [1, "scrollHeight"],
        scrollWidth: [1, "scrollWidth"],
        orientation: [1, "orientation"],
        step: [1, "step"],
        delay: [1, "delay"],
        resizeDelay: [1, "resizeDelay"],
        appendOnly: [1, "appendOnly"],
        inline: [1, "inline"],
        lazy: [1, "lazy"],
        disabled: [1, "disabled"],
        loaderDisabled: [1, "loaderDisabled"],
        columns: [1, "columns"],
        showSpacer: [1, "showSpacer"],
        showLoader: [1, "showLoader"],
        numToleratedItems: [1, "numToleratedItems"],
        loading: [1, "loading"],
        autoSize: [1, "autoSize"],
        trackBy: [1, "trackBy"],
        options: [1, "options"]
      },
      outputs: {
        onLazyLoad: "onLazyLoad",
        onScroll: "onScroll",
        onScrollIndexChange: "onScrollIndexChange"
      },
      features: [i0.\u0275\u0275ProvidersFeature([
        ScrollerStyle,
        {
          provide: SCROLLER_INSTANCE,
          useExisting: Scroller2
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Scroller2
        }
      ]), i0.\u0275\u0275HostDirectivesFeature([i1.Bind]), i0.\u0275\u0275InheritDefinitionFeature],
      ngContentSelectors: _c5,
      decls: 2,
      vars: 1,
      consts: [["element", ""], ["content", ""], [3, "style", "class", "pBind"], [3, "scroll", "pBind"], [3, "class", "style", "pBind"], [3, "class", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], ["data-p-icon", "spinner", 3, "class", "spin", "pBind"], ["data-p-icon", "spinner", 3, "spin", "pBind"]],
      template: function Scroller_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275projectionDef();
          i0.\u0275\u0275conditionalCreate(0, Scroller_Conditional_0_Template, 6, 10, "div", 2)(1, Scroller_Conditional_1_Template, 2, 1);
        }
        if (rf & 2) {
          i0.\u0275\u0275conditional(!ctx._disabled() ? 0 : 1);
        }
      },
      dependencies: [NgTemplateOutlet, Spinner, Bind2],
      encapsulation: 2,
      changeDetection: 1
    });
  })();
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Scroller, [{
    type: Component,
    args: [{
      selector: "p-scroller, p-virtualscroller, p-virtual-scroller",
      imports: [
        NgTemplateOutlet,
        Spinner,
        Bind2
      ],
      standalone: true,
      template: `
        @if (!_disabled()) {
            <div #element [attr.id]="_id()" [attr.tabindex]="_tabindex()" [style]="_style()" [class]="cn(cx('root'), _styleClass())" (scroll)="onContainerScroll($event)" [pBind]="ptm('root')">
                @if (contentTemplate()) {
                    <ng-container *ngTemplateOutlet="contentTemplate(); context: getContentTemplateContext()"></ng-container>
                } @else {
                    <div #content [class]="cn(cx('content'), contentStyleClass())" [style]="contentStyle" [pBind]="ptm('content')">
                        @for (item of loadedItems; track _trackBy() ? _trackBy()!($index, item) : $index; let index = $index) {
                            <ng-container *ngTemplateOutlet="itemTemplate(); context: getItemTemplateContext(item, index)"></ng-container>
                        }
                    </div>
                }
                @if (_showSpacer()) {
                    <div [class]="cx('spacer')" [style]="spacerStyle" [pBind]="ptm('spacer')"></div>
                }
                @if (!_loaderDisabled() && _showLoader() && d_loading) {
                    <div [class]="cx('loader')" [pBind]="ptm('loader')">
                        @if (loaderTemplate()) {
                            @for (item of loaderArr; track $index; let index = $index) {
                                <ng-container *ngTemplateOutlet="loaderTemplate(); context: getLoaderTemplateContext(index)"></ng-container>
                            }
                        } @else {
                            @if (loaderIconTemplate()) {
                                <ng-container *ngTemplateOutlet="loaderIconTemplate(); context: loaderIconContext"></ng-container>
                            } @else {
                                <svg data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" [pBind]="ptm('loadingIcon')" />
                            }
                        }
                    </div>
                }
            </div>
        } @else {
            <ng-content />
            @if (contentTemplate()) {
                <ng-container *ngTemplateOutlet="contentTemplate(); context: getDisabledContentTemplateContext()"></ng-container>
            }
        }
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      providers: [
        ScrollerStyle,
        {
          provide: SCROLLER_INSTANCE,
          useExisting: Scroller
        },
        {
          provide: PARENT_INSTANCE,
          useExisting: Scroller
        }
      ],
      hostDirectives: [Bind2],
      host: { "[style.height]": "hostHeight()" }
    }]
  }], () => [], {
    hostName: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "hostName",
        required: false
      }]
    }],
    id: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    style: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "style",
        required: false
      }]
    }],
    styleClass: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "styleClass",
        required: false
      }]
    }],
    tabindex: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "tabindex",
        required: false
      }]
    }],
    items: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "items",
        required: false
      }]
    }],
    itemSize: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "itemSize",
        required: false
      }]
    }],
    scrollHeight: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "scrollHeight",
        required: false
      }]
    }],
    scrollWidth: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "scrollWidth",
        required: false
      }]
    }],
    orientation: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "orientation",
        required: false
      }]
    }],
    step: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "step",
        required: false
      }]
    }],
    delay: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "delay",
        required: false
      }]
    }],
    resizeDelay: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "resizeDelay",
        required: false
      }]
    }],
    appendOnly: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "appendOnly",
        required: false
      }]
    }],
    inline: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "inline",
        required: false
      }]
    }],
    lazy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "lazy",
        required: false
      }]
    }],
    disabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    loaderDisabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "loaderDisabled",
        required: false
      }]
    }],
    columns: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "columns",
        required: false
      }]
    }],
    showSpacer: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "showSpacer",
        required: false
      }]
    }],
    showLoader: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "showLoader",
        required: false
      }]
    }],
    numToleratedItems: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "numToleratedItems",
        required: false
      }]
    }],
    loading: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "loading",
        required: false
      }]
    }],
    autoSize: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "autoSize",
        required: false
      }]
    }],
    trackBy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "trackBy",
        required: false
      }]
    }],
    options: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onLazyLoad: [{
      type: i0.Output,
      args: ["onLazyLoad"]
    }],
    onScroll: [{
      type: i0.Output,
      args: ["onScroll"]
    }],
    onScrollIndexChange: [{
      type: i0.Output,
      args: ["onScrollIndexChange"]
    }],
    elementViewChild: [{
      type: i0.ViewChild,
      args: ["element", { isSignal: true }]
    }],
    contentViewChild: [{
      type: i0.ViewChild,
      args: ["content", { isSignal: true }]
    }],
    contentTemplate: [{
      type: i0.ContentChild,
      args: ["content", {
        descendants: false,
        isSignal: true
      }]
    }],
    itemTemplate: [{
      type: i0.ContentChild,
      args: ["item", {
        descendants: false,
        isSignal: true
      }]
    }],
    loaderTemplate: [{
      type: i0.ContentChild,
      args: ["loader", {
        descendants: false,
        isSignal: true
      }]
    }],
    loaderIconTemplate: [{
      type: i0.ContentChild,
      args: ["loadericon", {
        descendants: false,
        isSignal: true
      }]
    }]
  });
})();
var ScrollerModule = class ScrollerModule2 {
  static \u0275fac = function ScrollerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScrollerModule2)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: ScrollerModule2
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    imports: [Scroller]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [Scroller],
      exports: [Scroller]
    }]
  }], null, null);
})();
export {
  Scroller,
  ScrollerClasses,
  ScrollerModule,
  ScrollerStyle
};
//# sourceMappingURL=primeng_scroller.GzTpkXXf3f-dev.js.map

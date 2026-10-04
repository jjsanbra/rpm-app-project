if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  NOT_FOUND,
  NotFoundError,
  getCurrentInjector,
  inject,
  isNotFound,
  setCurrentInjector
} from "@nf-internal/chunk-45K4EDCW";
import "@nf-internal/chunk-4UP7UTRR";

// node_modules/@angular/core/fesm2022/primitives-di.mjs
/**
 * @license Angular v22.2.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function defineInjectable(opts) {
  return {
    token: opts.token,
    providedIn: opts.providedIn || null,
    factory: opts.factory,
    value: void 0
  };
}
function registerInjectable(ctor, declaration) {
  ctor.\u0275prov = declaration;
  return ctor;
}
export {
  NOT_FOUND,
  NotFoundError,
  defineInjectable,
  getCurrentInjector,
  inject,
  isNotFound,
  registerInjectable,
  setCurrentInjector
};
//# sourceMappingURL=_angular_core_primitives_di.SQSFYBAXqQ-dev.js.map

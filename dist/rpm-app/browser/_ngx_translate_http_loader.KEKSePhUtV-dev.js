if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  __spreadValues
} from "@nf-internal/chunk-4UP7UTRR";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
import { HttpClient, HttpBackend } from "@angular/common/http";
import * as i0 from "@angular/core";
import { InjectionToken, inject, Injectable } from "@angular/core";
import { mergeDeep, TranslateLoader } from "@ngx-translate/core";
import { catchError, of, forkJoin, map } from "rxjs";
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      resources: [],
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    const requests = this.config.resources.map((resource) => {
      const path = typeof resource === "string" ? `${resource}${lang}.json` : `${resource.prefix}${lang}${resource.suffix ?? ".json"}`;
      const request$ = this.http.get(`${path}${cacheBuster}`);
      if (this.config.failOnError) {
        return request$;
      }
      return request$.pipe(catchError((err) => {
        console.warn(`@ngx-translate/http-loader: error loading translation for ${lang}:`, err);
        return of({});
      }));
    });
    if (requests.length === 0) {
      return of({});
    }
    return forkJoin(requests).pipe(map((response) => response.reduce((acc, curr) => mergeDeep(acc, curr), {})));
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();
function provideTranslateHttpLoader(config = {}) {
  if ("resources" in config && config.resources) {
    return provideTranslateMultiHttpLoader(config);
  }
  const singleConfig = config;
  const multiConfig = {
    enforceLoading: singleConfig.enforceLoading ?? false,
    useHttpBackend: singleConfig.useHttpBackend ?? false,
    failOnError: singleConfig.failOnError ?? false,
    resources: [
      {
        prefix: singleConfig.prefix ?? "/assets/i18n/",
        suffix: singleConfig.suffix ?? ".json"
      }
    ]
  };
  return provideTranslateMultiHttpLoader(multiConfig);
}
function provideTranslateMultiHttpLoader(config = {}) {
  return [
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: __spreadValues({
        resources: ["/assets/i18n/"]
      }, config)
    },
    {
      provide: TranslateLoader,
      useClass: TranslateHttpLoader
    }
  ];
}
export {
  TRANSLATE_HTTP_LOADER_CONFIG,
  TranslateHttpLoader,
  provideTranslateHttpLoader,
  provideTranslateMultiHttpLoader
};
//# sourceMappingURL=_ngx_translate_http_loader.KEKSePhUtV-dev.js.map

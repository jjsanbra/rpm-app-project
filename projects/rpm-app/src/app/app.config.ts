import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MessageService, ConfirmationService } from 'primeng/api';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { authInterceptor, provideDefaultDateFormat, PadelThemePreset } from '@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideDefaultDateFormat(),
    provideTranslateService({
      fallbackLang: 'es',
      lang: 'es'
    }),
    provideTranslateHttpLoader({
      prefix: './assets/i18n/',
      suffix: '.json'
    }),
    providePrimeNG({
      license: 'eyJpZCI6ImQwYjM1YmY2LTNjMTktNGZjNi05ZTdjLTYyNjE5YWMxMzliNSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTA5MzgzODgsImV4cCI6MTgyMjQ3NDM4OH0.SxDwyjRjd-JUMsD9_YHgE5EplULSxX7-nLLAL2e6KJwa8mHsm6EZXNnbnqzY8NCbSesRxzoD7a9OjhwyZsfiCw',
      theme: {
        preset: PadelThemePreset,
        options: {
          darkModeSelector: false,
          cssLayer: false
        }
      },
      ripple: true
    }),
    MessageService,
    ConfirmationService
  ]
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideDefaultDateFormat, PadelThemePreset } from '@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideDefaultDateFormat(),
    providePrimeNG({
      theme: { preset: PadelThemePreset, options: { darkModeSelector: false, cssLayer: false } }
    })
  ]
};

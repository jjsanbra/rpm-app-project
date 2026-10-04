import { Provider } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

export const DEFAULT_DATE_FORMAT = 'dd/MM/yyyy';

/**
 * Proveedor para configurar el formato de fecha por defecto de Angular (DatePipe).
 * Por defecto establece 'dd/MM/yyyy'.
 */
export const provideDefaultDateFormat = (dateFormat: string = DEFAULT_DATE_FORMAT): Provider => ({
  provide: DATE_PIPE_DEFAULT_OPTIONS,
  useValue: { dateFormat }
});

/**
 * error.utils.ts — Función universal para extraer mensajes de error legibles
 * de respuestas HTTP de Angular y Express backend.
 */
export function extractErrorMessage(err: any, fallbackMessage: string = 'Ha ocurrido un error inesperado.'): string {
  if (!err) return fallbackMessage;

  // Si err es string directamente
  if (typeof err === 'string') return err;

  const errorObj = err.error !== undefined ? err.error : err;

  // Caso 1: errorObj es un string directo
  if (typeof errorObj === 'string') {
    return errorObj;
  }

  // Caso 2: errorObj.error es un string directo
  if (typeof errorObj?.error === 'string') {
    return errorObj.error;
  }

  // Caso 3: errorObj.error contiene details de validación (express-validator)
  if (errorObj?.error?.details && Array.isArray(errorObj.error.details) && errorObj.error.details.length > 0) {
    const detailMsgs = errorObj.error.details
      .map((d: any) => (d.msg || d.message || (d.field ? `${d.field}: inválido` : '')))
      .filter(Boolean)
      .join(', ');
    if (detailMsgs) {
      return detailMsgs;
    }
  }

  // Caso 4: errorObj.error contiene un objeto con message
  if (errorObj?.error?.message && typeof errorObj.error.message === 'string') {
    return errorObj.error.message;
  }

  // Caso 5: errorObj.message directo
  if (errorObj?.message && typeof errorObj.message === 'string') {
    return errorObj.message;
  }

  // Caso 6: message en el nivel superior del HttpErrorResponse
  if (err?.message && typeof err.message === 'string') {
    return err.message;
  }

  return fallbackMessage;
}

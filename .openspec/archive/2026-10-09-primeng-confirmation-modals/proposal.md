# 📋 Propuesta de Cambio: primeng-confirmation-modals

## 1. Contexto y Problema de Negocio
Actualmente, diversas acciones críticas de la plataforma se ejecutan sin confirmación previa o sin una interfaz unificada:
- En el portal de equipos (`rpm-teams`), la acción de **confirmar resultado de un partido** (`confirmMatch`) se envía inmediatamente a la API tras pulsar el botón, sin solicitar una validación previa del marcador ni advertir al usuario sobre la consolidación de puntos.
- En el marcador en directo (`rpm-live`), la acción de **firma oficial del acta** (`onSign`) sella el partido de forma definitiva sin confirmación de doble paso.
- En el módulo de administración (`rpm-admin`), si bien se utiliza `ConfirmationService` para eliminaciones, la apariencia visual (estilos de botones, tamaños e iconografía) y las etiquetas no están completamente estandarizadas ni preparadas para la ejecución en modo *standalone* de cada microfrontend.

La falta de un estándar visual y funcional homogéneo para las confirmaciones puede provocar errores accidentales de los usuarios (confirmaciones erróneas de resultados o firmas no deseadas) y degrada la experiencia de usuario (UX).

## 2. Solución Funcional Propuesta
Estandarizar todos los avisos de confirmación de la plataforma utilizando el componente oficial **ConfirmDialog** y el servicio **ConfirmationService** de **PrimeNG**:

1. **Confirmación de Resultado de Partido (`rpm-teams`)**:
   - Al pulsar "Confirmar Resultado", se despliega una modal de confirmación PrimeNG indicando el tanteo por sets a validar.
   - Requiere aceptación explícita antes de enviar la petición `POST /api/matches/:id/confirm`.

2. **Firma y Cierre de Acta en Directo (`rpm-live`)**:
   - Al pulsar "Firmar Acta", se despliega una modal de confirmación PrimeNG advirtiendo de que el partido quedará cerrado y validado.

3. **Estandarización de Borrados y Acciones Administrativas (`rpm-admin`)**:
   - Unificar todas las modales de confirmación con variantes estandarizadas:
     - **Acciones Destructivas** (Eliminar equipo, ranking, organizador, desinscribir, etc.): botón de peligro (`p-button-danger`), icono de advertencia (`pi pi-exclamation-triangle`).
     - **Acciones Afirmativas / Transaccionales** (Confirmar resultado, firmar acta): botón primario/éxito (`p-button-primary` o `p-button-success`), icono de verificación (`pi pi-check-circle`).

4. **Soporte Híbrido Shell Federado + Standalone**:
   - Proveer `<p-confirmdialog>` y `ConfirmationService` tanto en el shell principal `rpm-app` como en cada microfrontend individual para permitir ejecución y testing aislado.

## 3. Criterios de Aceptación (AC)
- [ ] **AC-1:** La acción de confirmar resultado en `rpm-teams` abre una modal PrimeNG con el resumen del marcador y no ejecuta la llamada HTTP hasta que el usuario hace clic en "Confirmar".
- [ ] **AC-2:** La acción de firmar acta en `rpm-live` abre una modal PrimeNG de confirmación antes de sellar el partido.
- [ ] **AC-3:** Todas las modales de confirmación de la aplicación emplean `ConfirmationService` de PrimeNG con textos internacionalizados (`ngx-translate`) y estilos homogéneos.
- [ ] **AC-4:** Los microfrontends soportan la apertura de modales de confirmación tanto al ejecutarse dentro del shell `rpm-app` vía Native Federation como en modo *standalone* (`npm start` individual).
- [ ] **AC-5:** Todos los tests unitarios (`*.spec.ts`) existentes y nuevos pasan satisfactoriamente simulando las confirmaciones.

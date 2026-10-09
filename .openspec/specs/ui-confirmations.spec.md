# Especificación: Diálogos de Confirmación UI (PrimeNG)

## 1. Requerimientos Funcionales
* **Estandarización de Interfaz:** Todos los avisos de confirmación en la aplicación deben presentarse mediante el componente `p-confirmdialog` y `ConfirmationService` de PrimeNG.
* **Confirmación de Partidos por Equipos:**
  * Al hacer clic en "Confirmar Resultado", la interfaz debe mostrar una modal con el resumen del marcador y advertencia antes de persistir la confirmación.
* **Firma de Acta en Vivo:**
  * Al pulsar "Firmar Acta", la interfaz debe mostrar una modal solicitando confirmación para sellar el resultado final y cerrar la sesión en vivo.
* **Acciones Destructivas:**
  * Eliminación de rankings, equipos, organizadores, elementos auxiliares o desinscripciones deben exigir confirmación con botón de peligro (`p-button-danger`).
* **Internacionalización:**
  * Todos los títulos, mensajes y botones de los diálogos deben estar localizados (`es`, `en`).

## 2. Contrato de Componentes e Inyección
* `ConfirmationService` provisto en el inyector raíz de la aplicación y disponible en cada microfrontend.
* `<p-confirmdialog>` presente en la plantilla base para renderizar el overlay de PrimeNG.

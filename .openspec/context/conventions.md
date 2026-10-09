# Convenciones de Desarrollo y Contratos

## 1. Estándares de la API REST
* **Prefijo base:** `/api`
* **Formato de respuesta estándar:**
  ```json
  {
    "data": { ... } | [ ... ],
    "message": "Mensaje descriptivo opcional",
    "total": 100 // en respuestas paginadas
  }
  ```
* **Formato de errores estándar:**
  ```json
  {
    "error": "Código de error o mensaje",
    "details": [ ... ]
  }
  ```
* **Códigos HTTP principales:**
  * `200 OK`: Operación exitosa (GET, PUT, PATCH).
  * `201 Created`: Recurso creado exitosamente (POST).
  * `400 Bad Request`: Error de validación en parámetros o payload.
  * `401 Unauthorized`: Token JWT ausente, expirado o inválido.
  * `403 Forbidden`: Usuario autenticado pero sin rol suficiente.
  * `404 Not Found`: Recurso no encontrado.
  * `409 Conflict`: Conflicto de estado (ej. email duplicado, equipo ya inscrito).
  * `429 Too Many Requests`: Límite de peticiones alcanzado.

## 2. Tipado y Angular (Frontend)
* No usar tipos `any` en modelos compartidos.
* Utilizar Signals de Angular para estado reactivo local en componentes.
* La capa `@core` debe mantenerse independiente del DOM y enfocada en datos/lógica de negocio.
* Los componentes remotos deben importar servicios y modelos exclusivamente desde `@core`.

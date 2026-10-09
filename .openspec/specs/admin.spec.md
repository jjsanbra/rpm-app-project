# Especificación: Administración y Catálogos Maestros (Admin)

## 1. Requerimientos Funcionales
* **Gestión de Catálogos Maestros:**
  * Sedes deportivas (`locations`): nombre, dirección, ciudad, pistas disponibles.
  * Niveles de juego (`levels`): código, descripción, orden de habilidad.
  * Categorías (`categories`): masculina, femenina, mixta, veteranos.
  * Patrocinadores (`sponsors`): nombre, logo URL, nivel de patrocinio.
* **Gestión de Usuarios y Organizadores:**
  * Listado global, asignación de roles, activación/desactivación.
* **Pistas de Auditoría:**
  * Registro inmutable de acciones críticas (cambios de resultados, eliminación de registros, resoluciones de incidencias).

## 2. Contratos de Endpoints API
* `GET /api/levels`, `POST /api/levels`, `PUT /api/levels/:id`, `DELETE /api/levels/:id`
* `GET /api/categories`, `POST /api/categories`, `PUT /api/categories/:id`, `DELETE /api/categories/:id`
* `GET /api/locations`, `POST /api/locations`, `PUT /api/locations/:id`, `DELETE /api/locations/:id`
* `GET /api/sponsors`, `POST /api/sponsors`, `PUT /api/sponsors/:id`, `DELETE /api/sponsors/:id`
* `GET /api/users/organizers`, `POST /api/users/organizers`, `PUT /api/users/organizers/:id`
* `GET /api/audit`: Consulta de logs con filtros de fecha, usuario y entidad.

## 3. Modelo de Datos Clave
* **Location:** `{ id, name, address, city, postalCode, courtsCount, isActive }`
* **Level:** `{ id, code, name, description, sortOrder }`
* **Category:** `{ id, name, gender, ageRange }`
* **Sponsor:** `{ id, name, logoUrl, tier, websiteUrl, isActive }`
* **AuditLog:** `{ id, userId, action, entity, entityId, changes, ipAddress, createdAt }`

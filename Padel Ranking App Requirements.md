# APLICACIÓN WEB DE RANKING DE PÁDEL

Quiero que desarrolles una aplicación web completa para gestionar un RANKING DE PÁDEL.

IMPORTANTE:
- El concepto principal de la aplicación es un RANKING, no un torneo.
- Debes utilizar siempre la terminología "Ranking".
- Quiero una arquitectura limpia, modular, escalable y preparada para futuras ampliaciones.
- No inventes funcionalidades que contradigan las reglas descritas aquí.
- Si alguna decisión técnica menor no está especificada, elige una solución razonable, mantenible y documenta la decisión.
- El resultado debe ser un proyecto funcional, no solamente una maqueta visual.
- Todo lo que afecte a permisos, puntuaciones, fechas, resultados y seguridad debe validarse SIEMPRE en backend.

==================================================
1. OBJETIVO GENERAL
==================================================

La aplicación permitirá gestionar uno o varios rankings de pádel.

Cada ranking tendrá:
- Nombre
- Descripción
- Fecha de inicio
- Fecha de finalización
- Reglamento
- Sistema de puntuación
- Información general
- Equipos participantes
- Clasificación
- Partidos
- Resultados
- Incidencias
- Opcionalmente patrocinadores, ubicación (sede), categoría y nivel (el tipo de pista no es necesario).

La aplicación tendrá tres grandes áreas:

1. Landing pública
2. Zona privada de administración
3. Zona privada de equipos

Todos los usuarios podrán consultar la información pública del ranking, partidos y clasificación.

Los usuarios de un equipo únicamente podrán gestionar los resultados correspondientes a partidos de SU PROPIO equipo.

El administrador tendrá control total.

==================================================
2. ROLES
==================================================

Existirán los siguientes roles de usuario:

- ADMIN
- ORGANIZER
- TEAM_USER

### ADMIN

Superusuario de la plataforma. Puede:
- Crear rankings globales.
- Editar cualquier ranking.
- Activar/desactivar cualquier ranking.
- Eliminar cualquier ranking.
- Configurar fechas y reglamento.
- Crear y gestionar usuarios con rol `ORGANIZER`.
- Crear equipos.
- Editar equipos.
- Eliminar/desactivar equipos.
- Gestionar jugadores.
- Gestionar emails de los equipos.
- Crear usuarios.
- Gestionar partidos de cualquier ranking.
- Gestionar resultados y modificar actas oficiales.
- Corregir resultados arbitrales.
- Resolver incidencias.
- Consultar clasificación.
- Gestionar patrocinadores.
- Gestionar ubicaciones.
- Gestionar niveles/categorías.
- Gestionar configuración general.
- Reenviar emails de acceso.
- Consultar información de auditoría global.

### ORGANIZER (Organizador)

Rol intermedio para gestores de competiciones específicas. Su ciclo de vida es gestionado exclusivamente por el `ADMIN` mediante un módulo administrativo completo (crear, editar, activar/desactivar y eliminar).

Datos del Organizador:
- `firstName`: Nombre
- `lastName`: Apellidos
- `email`: Correo electrónico único
- `phone`: Teléfono de contacto
- `role`: 'ORGANIZER'

Puede:
- Iniciar sesión en la plataforma y acceder al Panel de Gestión.
- Crear sus propios rankings (`createdBy = organizer.id`).
- Modificar, editar, activar/desactivar y eliminar **únicamente sus propios rankings**.
- Inscribir y gestionar equipos dentro de sus propios rankings.
- Generar el calendario de partidos round-robin para sus propios rankings.
- Modificar actas oficiales o corregir resultados de partidos que pertenezcan a sus propios rankings.
- Resolver incidencias reportadas en partidos de sus rankings.
- Consultar clasificaciones y estadísticas de sus rankings.

NO puede:
- Ver, editar ni eliminar rankings creados por el `ADMIN` o por otros `ORGANIZER` (Aislamiento Multi-Tenancy estricto tanto en backend como frontend).
- Crear, editar o eliminar a otros organizadores (competencia exclusiva del ADMIN).
- Acceder a los registros globales de auditoría de la plataforma.
- Modificar configuraciones globales del sistema fuera del ámbito de sus propios torneos.

### POLÍTICA DE TELÉFONOS EN USUARIOS
- Todos los usuarios de la plataforma (Organizadores, Jugadores y Usuarios de Equipo) disponen de un campo `phone` para contacto directo y gestión de partidos.
- El usuario `ADMIN` es un superusuario del sistema y no requiere teléfono.

### TEAM_USER

Puede:
- Iniciar sesión.
- Consultar rankings.
- Consultar clasificación.
- Consultar todos los partidos.
- Consultar los resultados.
- Registrar resultados únicamente de partidos en los que participa su propio equipo.
- Seleccionar la fecha real en la que se disputó el partido al registrar el resultado.
- Consultar y confirmar resultados de partidos de su equipo.
- Comunicar incidencias sobre partidos de su equipo.
- Gestionar su acceso/contraseña.

NO puede:
- Crear equipos.
- Modificar otros equipos.
- Registrar resultados de partidos ajenos.
- Modificar la puntuación manualmente.
- Modificar la clasificación.
- Modificar resultados confirmados.
- Modificar la configuración del ranking.

MUY IMPORTANTE:
La autorización debe comprobarse en backend. No basta con ocultar botones en Angular. Un TEAM_USER no debe poder manipular otro equipo enviando manualmente una petición HTTP.

==================================================
3. LANDING PÚBLICA
==================================================

Crear una landing moderna, limpia, deportiva y profesional, orientada al pádel.

Debe mostrar:

- Qué es el ranking.
- Cómo funciona.
- Fechas del ranking.
- Reglamento.
- Sistema de puntuación.
- Equipos participantes.
- Clasificación pública.
- Partidos/resultados.
- Información relevante.
- Acceso para equipos.
- Acceso para administración.

El diseño debe ser:
- Responsive.
- Mobile-first.
- Moderno.
- Premium/deportivo.
- Claro y fácil de utilizar.
- Adecuado para una aplicación de pádel.

==================================================
4. RANKINGS
==================================================

Un ranking debe tener como mínimo:

- id UUID
- name
- description
- startDate
- endDate
- regulation
- active
- poster opcional
- rankingConfig
- locationId opcional
- levelId opcional
- categoryId opcional
- createdAt
- updatedAt

No establecer un número máximo fijo de equipos salvo que posteriormente se configure expresamente.

REGLA:
Un ranking debe tener como mínimo 4 equipos.

El administrador será quien determine qué equipos participan.

==================================================
5. EQUIPOS
==================================================

Cada equipo está formado por:

- 2 jugadores titulares obligatorios.
- 1 jugador reserva opcional.

Por tanto:

Titulares:
- titular 1: obligatorio
- titular 2: obligatorio

Reserva:
- opcional

No permitir equipos con menos de 2 titulares.

El equipo debe tener:

- id UUID
- nombre
- jugador titular 1 (nombre y apellidos)
- jugador titular 2 (nombre y apellidos)
- jugador reserva opcional (nombre y apellidos)
- teléfono de contacto titular 1 (`phone` - obligatorio)
- teléfono de contacto titular 2 (`phone2` - opcional)
- al menos 1 email de contacto
- como máximo 2 emails de contacto
- active
- createdAt
- updatedAt

REGLAS DE CONTACTO Y EMAIL:
- Cada equipo debe tener como mínimo 1 teléfono y 1 email.
- Cada equipo puede tener hasta 2 teléfonos y 2 emails para los dos titulares.
- Los teléfonos se visualizan en tablas administrativas y en tarjetas informativas de rivales para agilizar la concertación de partidos.
- Los emails deben validarse.
- No almacenar contraseñas en texto plano.
- Los emails deben utilizarse para comunicación y acceso de los usuarios del equipo.

El administrador es el único que crea/registra los equipos.

NO existe registro público de equipos.

==================================================
6. USUARIOS Y ACCESO DE EQUIPOS
==================================================

Al crear un equipo, el administrador introducirá los datos de los titulares, sus teléfonos y entre 1 y 2 emails.

El sistema deberá crear/asociar los accesos correspondientes al equipo sincronizando nombre, apellidos y teléfono.

Los usuarios asociados a esos emails tendrán rol TEAM_USER.

Todos los usuarios TEAM_USER asociados a un mismo equipo tendrán permisos sobre ese equipo.

Los jugadores son datos del equipo. No es obligatorio crear una cuenta independiente para cada jugador si el sistema de acceso del equipo utiliza los emails de contacto.

La estructura debe permitir en el futuro ampliar el modelo si fuese necesario.

### Alta de equipo

Cuando el administrador cree un equipo:

1. Validar equipo.
2. Validar 2 titulares obligatorios.
3. Validar reserva opcional.
4. Validar entre 1 y 2 emails.
5. Crear/asociar usuarios TEAM_USER.
6. Generar mecanismo seguro de activación/configuración de contraseña.
7. Enviar email de bienvenida.

El email debe incluir:

- Bienvenida.
- Nombre del ranking.
- Nombre del equipo.
- Información básica de acceso.
- Enlace de acceso.
- Instrucciones para establecer contraseña.
- Instrucciones para registrar resultados.
- Instrucciones para recuperar contraseña.

Nunca enviar contraseñas en texto plano.

El administrador podrá:
- Reenviar email de bienvenida.
- Cambiar emails.
- Editar jugadores.
- Modificar el equipo.
- Desactivar/reactivar el equipo.

==================================================
7. AUTENTICACIÓN
==================================================

Implementar autenticación mediante:

- Email + contraseña.
- JWT.
- Middleware de autenticación.
- Middleware de autorización por rol.
- Expiración configurable del JWT.
- Recuperación de contraseña.
- Configuración inicial de contraseña mediante enlace seguro.

### ACCESO RÁPIDO EN ENTORNO LOCAL (DEV ACCOUNT SWITCHER)
- En **entorno local de desarrollo (`localhost`)**, la pantalla de login dispone de un selector rápido interactivo de cuentas preconfiguradas (ADMIN, ORGANIZADOR 1, ORGANIZADOR 2, Equipos).
- Al pulsar sobre cualquiera de ellos, la aplicación inicia sesión de manera instantánea sin requerir que el desarrollador introduzca manualmente el email y la contraseña.
- En **el resto de entornos (red local con IP, staging, producción, dispositivos móviles)**, el selector rápido se deshabilita automáticamente y es **estrictamente obligatorio** rellenar el email y la contraseña para garantizar la seguridad del acceso.

### ACCESO MULTIDISPOSITIVO (RED LOCAL Y EXTERNA)
- La aplicación soporta ejecución con `--host 0.0.0.0 --disable-host-check` (`npm run start:network`) para ser consumida y testeada desde tablets, teléfonos móviles u otros ordenadores conectados a la misma red local o mediante túneles seguros (e.g., ngrok / Cloudflare Tunnels).

El backend deberá adjuntar el usuario autenticado al request.

Ejemplo conceptual:

req.user = {
  id,
  role,
  teamId
}

Nunca confiar en teamId enviado por el frontend si no coincide con el usuario autenticado.

==================================================
8. REGLAS DE PARTIDOS
==================================================

El ranking funcionará como mínimo con formato de todos contra todos (round-robin), salvo que posteriormente se añada otro sistema.

Cada pareja/equipo debe enfrentarse contra los demás equipos del ranking.

Los partidos no necesitan tener una fecha previamente asignada.

NO almacenar una hora del partido.

La fecha del partido se selecciona cuando se registra el resultado.

Antes de registrar el resultado:

- El partido no tiene necesariamente fecha.
- Mostrar algo como "Fecha pendiente de resultado".

Después de registrar el resultado:

- Mostrar la fecha seleccionada.
- Esa fecha representa el día real en el que se disputó el partido.

==================================================
9. REGLA DE FECHA DEL PARTIDO
==================================================

ESTA REGLA ES MUY IMPORTANTE.

Cuando un usuario registra un resultado debe seleccionar la fecha en la que se disputó el partido.

La fecha seleccionada debe cumplir:

matchDate >= ranking.startDate

Y:

matchDate <= ranking.endDate

Es decir:

- Puede ser el mismo día que comienza el ranking.
- Puede ser cualquier día posterior.
- Como máximo puede ser el de la fecha de finalización.
- No se permiten partidos registrados con una fecha anterior al inicio.
- No se permiten partidos con fecha posterior a "fecha final del ranking".

Ejemplo:

Ranking:
- Inicio: 01/09
- Fin: 30/09

Fechas de partido válidas:
- 01/09
- 02/09
- ...
- 30/09

Fechas NO válidas:
- 01/10

Esta validación debe realizarse:
- En frontend para mejorar UX.
- En backend como validación definitiva.

La fecha de partido NO es la fecha en la que se envió el resultado.

Guardar ambas cosas:

- matchDate → fecha seleccionada por el usuario como fecha real del partido.
- resultSubmittedAt → timestamp automático del backend indicando cuándo se registró el resultado.

NO guardar hora de partido.

==================================================
10. MODELO DE PARTIDO
==================================================

Crear una entidad Match similar a:

- id UUID
- rankingId
- teamOneId
- teamTwoId
- matchDate nullable hasta registrar resultado
- resultSubmittedAt nullable
- resultSubmittedBy nullable
- status
- setsTeamOne
- setsTeamTwo
- pointsTeamOne
- pointsTeamTwo
- confirmedAt nullable
- confirmedBy nullable
- disputedAt nullable
- disputedBy nullable
- createdAt
- updatedAt

Los puntos deben ser calculados por backend.

Nunca permitir que el frontend decida los puntos.

==================================================
11. ESTADOS DEL PARTIDO
==================================================

Utilizar estados similares a:

- PENDING_RESULT
- PENDING_CONFIRMATION
- CONFIRMED
- DISPUTED
- CANCELLED

Inicialmente:

PENDING_RESULT

Cuando un equipo registra resultado:

PENDING_CONFIRMATION

Cuando el rival confirma:

CONFIRMED

Si el rival comunica una incidencia:

DISPUTED

El administrador podrá resolver la incidencia.

==================================================
12. REGISTRO DE RESULTADOS
==================================================

Un TEAM_USER únicamente podrá registrar resultados de partidos de su propio equipo.

Ejemplo:

Equipo A vs Equipo B

Si el usuario pertenece al Equipo A:
- Puede registrar el resultado.

Si pertenece al Equipo C:
- No puede.

El backend debe comprobarlo.

Al registrar resultado se solicitará:

- Fecha del partido.
- Resultado por sets.

Por ejemplo:

Entrada por juegos en cada set (reglamentario de pádel: 6-0..6-4, 7-5, 7-6 o súper tie-break en 3º set):
- Set 1: 6-3
- Set 2: 4-6
- Set 3 (Desempate si 1-1): 7-5

El sistema (frontend y backend) calcula automáticamente:
- Sets ganados: 2-1 (Solo lectura en UI)
- Juegos totales y diferencia de juegos
- Puntos correspondientes (4 pts al ganador, 2 pts al perdedor)

Validar que el resultado de sets y parciales de juegos sea coherente y reglamentario.
No permitir resultados imposibles ni sets empatados.

Una vez enviado:

1. Validar permisos.
2. Validar fecha.
3. Validar tanteo de juegos por set.
4. Calcular automáticamente sets ganados, juegos totales y puntos.
5. Guardar resultado completo y parciales.
6. Guardar quién lo registró.
7. Guardar cuándo se registró.
8. Cambiar estado a PENDING_CONFIRMATION.
9. Notificar al equipo rival.

==================================================
13. SISTEMA DE PUNTUACIÓN
==================================================

REGLAS DEFINITIVAS:

Victoria en 2 sets (2-0 / 0-2):

- Ganador: 5 puntos
- Perdedor: 1 punto (por disputar el partido)

Victoria en 3 sets (2-1 / 1-2):

- Ganador: 4 puntos
- Perdedor: 2 puntos

Tabla:

| Resultado | Ganador | Perdedor |
|-----------|---------|----------|
| 2-0       | 5       | 1        |
| 0-2       | 5       | 1        |
| 2-1       | 4       | 2        |
| 1-2       | 4       | 2        |

Los puntos y sets:
- Se calculan a partir de los juegos por set introducidos.
- Se calculan exclusivamente en backend (con visualización en tiempo real en frontend).
- Nunca son editables manualmente como valores arbitrarios por TEAM_USER.
- Se recalculan si el administrador modifica el acta (el motivo de modificación de acta es opcional pero queda auditado).

==================================================
14. CONFIRMACIÓN DE RESULTADOS
==================================================

Flujo obligatorio:

### Paso 1

Equipo A registra tanteo de juegos:

Equipo A vs Equipo B

Ejemplo:
- Fecha: 15/09
- Parciales: 6-4, 3-6, 7-5
- Sets calculados: 2-1

Backend calcula:

Equipo A: 4 puntos (16 juegos)
Equipo B: 2 puntos (15 juegos)

Estado:

PENDING_CONFIRMATION

### Paso 2

Enviar email a TODOS los emails registrados del Equipo B.

El email debe indicar:

- Ranking.
- Equipo que registró el resultado.
- Equipos participantes.
- Fecha del partido.
- Resultado (sets y parciales de juegos).
- Puntos calculados.
- Quién registró el resultado.
- Botón "Confirmar resultado".
- Botón "Comunicar incidencia".

### Paso 3

El equipo rival puede:

A) Confirmar.

Resultado:
- CONFIRMED
- Clasificación actualizada definitivamente.

O:

B) Comunicar incidencia.

Resultado:
- DISPUTED
- Se crea una incidencia.
- El administrador recibe una notificación.

### Paso 4

El administrador revisa la incidencia.

Puede:
- Modificar resultado / acta (parciales de juegos, sets, fecha, estado).
- Motivo opcional de resolución arbitral auditada.
- Confirmar.
- Resolver incidencia.
- Dejar constancia de la resolución.

==================================================
15. RESULTADOS CONFIRMADOS
==================================================

Una vez confirmado un resultado:

- TEAM_USER no puede modificarlo.
- TEAM_USER no puede eliminarlo.
- TEAM_USER no puede cambiar la fecha.
- TEAM_USER no puede cambiar la puntuación.

El administrador sí podrá realizar modificaciones desde la zona administrativa.

Toda modificación administrativa debe quedar registrada en una auditoría mínima.

==================================================
15.1 TANTEO EN TIEMPO REAL Y RETRANSMISIÓN EN PISTA (LIVE MATCH TRACKER)
==================================================

La aplicación incluye un sistema de tanteo punto a punto en tiempo real para disputar partidos en pista, implementado en el microfrontend independiente `rpm-live`.

### Flujo de Activación y Validación Cruzada Obligatoria

1. **Solicitud de inicio (`REQUESTED`)**:
   - Uno de los equipos participantes (o el administrador) inicia la sesión en directo desde la app seleccionando la modalidad de juego.
   - La sesión pasa a estado `REQUESTED`.
   - **Regla de seguridad estricta**: El equipo que inició la solicitud queda en espera (`isWaitingForRival`) y **NO puede auto-aprobarse**. Si intenta llamar al endpoint de aceptación, el backend rechazará la petición con error 400.
2. **Aceptación por el rival (`IN_PROGRESS`)**:
   - El equipo rival recibe la notificación visual en su dispositivo con el nombre del equipo retador y la modalidad elegida.
   - Al pulsar *"Aceptar y Empezar Partido"*, el estado pasa a `IN_PROGRESS` y ambos dispositivos se sincronizan instantáneamente en pista.
3. **Modalidades de Puntuación Soportadas**:
   - **Punto de Oro (`GOLDEN_POINT`)**: En 40-40, el siguiente punto otorga directamente el juego al equipo anotador (estándar Premier Padel / WPT).
   - **Con Ventajas (`ADVANTAGE`)**: En 40-40 (Iguales / Deuce), se requiere ganar por 2 puntos consecutivos (`40-40` -> `AD` -> `Juego` o vuelta a `40-40` si anota el rival).
4. **Mecánica del Marcador en Directo**:
   - Secuencia tradicional de puntos: `0` -> `15` -> `30` -> `40` -> `AD` / `Juego`.
   - Conteo de juegos y sets (mejor de 3 sets reglamentarios).
   - En empate 6-6 en un set, activación automática del **Tie-Break** (a 7 puntos con diferencia de 2).
   - Alerta visual automática de **Cambio de lado de pista** en juegos totales impares.
   - Indicador visual del equipo al servicio (saque).
   - Botón **Deshacer (Undo)** para retroceder el último punto ante cualquier error humano.
5. **Doble Firma Digital del Acta Oficial**:
   - Al concluir el último set (`COMPLETED`), se habilita el panel de firma digital de capitanes.
   - Requiere la firma de validación de ambos capitanes de equipo.
   - Con ambas firmas registradas, el partido transiciona automáticamente a `CONFIRMED` y actualiza de inmediato la clasificación oficial del ranking.
6. **Retransmisión en Vivo para Espectadores (Streaming SSE)**:
   - Los espectadores pueden presenciar en directo la evolución punto a punto del marcador sin recargar la página, utilizando una conexión unidireccional de baja latencia mediante Server-Sent Events (SSE).

==================================================
16. INCIDENCIAS
==================================================

Crear entidad Incident:

- id UUID
- matchId
- reportedBy
- reportedAt
- description
- status
- resolution
- resolvedBy
- resolvedAt
- createdAt
- updatedAt

Estados posibles:

- OPEN
- IN_REVIEW
- RESOLVED
- REJECTED

El administrador debe poder consultar y gestionar todas las incidencias.

==================================================
17. CLASIFICACIÓN
==================================================

Mostrar como mínimo:

- Posición
- Equipo
- Jugadores
- Partidos jugados (PJ)
- Victorias (PG)
- Derrotas (PP)
- Sets ganados / Sets perdidos
- Diferencia de sets (SDIF)
- Juegos ganados / Juegos perdidos
- Diferencia de juegos (JDIF)
- Diferencia de puntos (PDIF)
- Puntos totales (PTS)

La clasificación se ordenará jerárquicamente por:

1. Puntos totales
2. Diferencia de sets
3. Diferencia de juegos
4. Diferencia de puntos

La clasificación debe actualizarse automáticamente cuando un resultado pase a estado CONFIRMED.

Puede existir una clasificación provisional para resultados pendientes de confirmación, pero debe distinguirse claramente de la clasificación oficial.

==================================================
18. VISUALIZACIÓN DE PARTIDOS
==================================================

Todos los usuarios autenticados podrán consultar todos los partidos del ranking.

La tabla puede incluir:

- Fecha
- Equipo 1
- Equipo 2
- Estado
- Resultado
- Puntos
- Acción

Antes de tener resultado:

Fecha:
"Fecha pendiente de resultado"

Después:

Fecha:
matchDate

Las acciones dependerán del usuario y del estado del partido.

==================================================
19. NOTIFICACIONES POR EMAIL
==================================================

Crear un servicio de email desacoplado.

Debe permitir:

- Email de bienvenida.
- Configuración inicial de contraseña.
- Recuperación de contraseña.
- Registro de resultado.
- Solicitud de confirmación.
- Comunicación de incidencia.
- Resolución de incidencia.
- Reenvío de acceso.

El servicio debe estar preparado para cambiar posteriormente de proveedor de email sin modificar la lógica de negocio.

Configuración mediante variables de entorno:

EMAIL_HOST
EMAIL_PORT
EMAIL_USER
EMAIL_PASSWORD
EMAIL_FROM

==================================================
20. ADMINISTRACIÓN
==================================================

Crear un dashboard administrativo.

Secciones:

- Dashboard
- Rankings
- Equipos
- Jugadores
- Partidos
- Resultados
- Incidencias
- Usuarios
- Niveles
- Categorías
- Ubicaciones
- Patrocinadores
- Configuración

Dashboard con información resumida:

- Rankings activos
- Número de equipos
- Partidos pendientes
- Resultados pendientes de confirmación
- Incidencias abiertas
- Últimos resultados registrados

==================================================
21. REGISTRO DE EQUIPOS EN RANKINGS
==================================================

Un equipo puede participar en varios rankings.

Un ranking puede tener varios equipos.

Crear una relación:

Ranking <-> Team

Puede utilizarse una entidad intermedia:

RankingTeam / RegisterTeam

Campos recomendados:

- id UUID
- rankingId
- teamId
- status
- createdAt
- updatedAt

Estados posibles:

- ACTIVE
- INACTIVE

NO existe registro público.

El administrador es quien incorpora los equipos al ranking.

==================================================
22. ENTIDADES ADICIONALES (CATÁLOGOS MAESTROS)
==================================================

Todas las entidades maestras auxiliares deben permitir su gestión completa (**Creación, Listado, Edición y Eliminación**) desde el panel de administración con modales dinámicos y estilos homogéneos.

### Level (Niveles)
- `id`: UUID
- `name`: Nombre del nivel (e.g. Iniciación, Intermedio, Avanzado, Pro, Veteranos +45)
- `description`: Descripción de los objetivos y características del nivel

### Category (Categorías)
- `id`: UUID
- `name`: Nombre de la categoría (e.g. Masculina, Femenina, Mixta, Sub-21)
- `description`: Descripción de la categoría

### Sponsor (Patrocinadores)
- `id`: UUID
- `name`: Nombre del patrocinador o marca oficial
- `description`: Descripción del patrocinio
- `logo`: Imagen o logo en Base64/URL

### Location (Sedes / Ubicaciones)
Cada sede o instalación deportiva debe registrar y permitir la edición de todos los campos del modelo de base de datos:
- `id`: UUID
- `name`: Nombre del club o complejo deportivo
- `street`: Dirección / Calle y número
- `city`: Ciudad / Municipio
- `postalCode`: Código postal
- `description`: Características de las pistas e instalaciones
- `state`: Provincia / Comunidad
- `country`: País (por defecto 'España')

Tanto la tabla de listado en la interfaz de administración como los modales de creación y edición deben reflejar y permitir modificar estos campos específicos.

Estas entidades deben estar desacopladas para poder ampliarlas posteriormente.

==================================================
23. IMÁGENES
==================================================

Para esta primera fase/prototipo:

- Permitir imágenes como Base64/blob donde sea necesario.
- El sistema debe abstraer la gestión del almacenamiento para poder sustituirla posteriormente por almacenamiento externo.

Por ejemplo:
- Poster del ranking.
- Logo de patrocinador.
- Avatar si fuese necesario.

==================================================
24. BACKEND
==================================================

Tecnología obligatoria:

- Node.js v22+
- Express.js

Arquitectura modular por entidad.

Cada módulo debe estar organizado preferentemente como:

entity/
  model.js
  service.js
  controller.js
  routes.js

Ejemplo:

rankings/
  ranking.model.js
  ranking.service.js
  ranking.controller.js
  ranking.routes.js

teams/
  team.model.js
  team.service.js
  team.controller.js
  team.routes.js

matches/
  match.model.js
  match.service.js
  match.controller.js
  match.routes.js

etc.

Separar claramente:

- Routes
- Controllers
- Services
- Models
- Middleware
- Utils
- Config
- Database

==================================================
25. BASE DE DATOS
==================================================

Durante la fase de desarrollo utilizar:

SQLite EN MEMORIA.

La base de datos debe inicializarse automáticamente al arrancar la aplicación.

Debe existir:

db.js

como punto centralizado de acceso/configuración de base de datos.

Preparar la arquitectura para poder sustituir SQLite por una base de datos persistente posteriormente.

No acoplar la lógica de negocio directamente a detalles de SQLite.

==================================================
26. UUID
==================================================

Todas las entidades principales deben utilizar UUID como identificador.

Evitar IDs numéricos autoincrementales como identificadores de negocio.

==================================================
27. INTEGRIDAD DE DATOS
==================================================

El seed debe ser robusto.

Debe respetar:

- NOT NULL.
- Foreign Keys.
- Relaciones válidas.
- Usuarios válidos.
- Equipos válidos.
- Rankings válidos.
- Partidos válidos.
- Relaciones ranking-equipo válidas.

No crear datos huérfanos.

Los datos iniciales deben permitir probar todo el flujo:

- Login admin.
- Login equipo.
- Ranking.
- Equipos.
- Partidos.
- Registro de resultado.
- Cálculo de puntos.
- Confirmación.
- Incidencia.
- Resolución.
- Clasificación.

==================================================
28. SEED DE DESARROLLO
==================================================

Crear datos de ejemplo suficientes para probar la aplicación.

Por ejemplo:

- 1 administrador.
- 1 ranking.
- 4 o más equipos.
- 2 titulares por equipo.
- Algunas reservas.
- Emails de ejemplo.
- Partidos generados.
- Algunos resultados.
- Algún resultado pendiente de confirmación.
- Alguna incidencia.

No utilizar contraseñas reales.

Documentar las credenciales de desarrollo en README únicamente para entorno de desarrollo.

==================================================
29. API REST
==================================================

Crear API REST clara.

Rutas aproximadas:

/api/auth

/api/rankings
/api/rankings/:id

/api/teams
/api/teams/:id

/api/users
/api/users/:id

/api/matches
/api/matches/:id

/api/incidents
/api/incidents/:id

/api/levels
/api/categories
/api/sponsors
/api/locations

/api/ranking-team-registrations

Las rutas deberán aplicar correctamente:
- autenticación
- autorización
- validación
- manejo de errores

==================================================
30. OPERACIONES DE RESULTADOS
==================================================

Crear endpoints específicos y claros para:

- Registrar resultado.
- Confirmar resultado.
- Comunicar incidencia.
- Resolver incidencia.
- Modificar resultado por admin.

Por ejemplo:

POST /api/matches/:matchId/result

POST /api/matches/:matchId/confirm

POST /api/matches/:matchId/dispute

PUT /api/matches/:matchId

No hace falta seguir exactamente estos nombres si existe una arquitectura REST mejor, pero el comportamiento debe ser equivalente.

==================================================
31. VALIDACIONES
==================================================

Validar siempre en backend:

- Emails.
- Campos obligatorios.
- UUID.
- Permisos.
- Existencia de entidades.
- Equipos participantes.
- Resultado válido.
- Fecha válida.
- Relación usuario-equipo.
- Estado del partido.
- Ranking activo.
- Reglas de puntuación.
- Fechas del ranking.
- Fecha del partido.

### Regla de fecha

Debe cumplirse:

ranking.startDate <= matchDate <= ranking.endDate

Nunca confiar exclusivamente en la validación de Angular.

==================================================
32. ERRORES HTTP
==================================================

Utilizar códigos HTTP apropiados.

Como mínimo:

400:
Petición incorrecta / datos inválidos.

401:
No autenticado.

403:
No autorizado.

404:
Recurso no encontrado.

409:
Conflicto de estado o recurso.

422:
Error de validación semántica, si se considera conveniente.

500:
Error interno.

Crear un formato de error consistente.

==================================================
33. SWAGGER
==================================================

Añadir Swagger UI.

Ruta:

/api-docs

Documentar:
- Endpoints.
- Parámetros.
- Body.
- Respuestas.
- Autenticación JWT.
- Errores.
- Ejemplos.

==================================================
34. CORS
==================================================

Configurar CORS para desarrollo.

Utilizar:

CORS_ORIGINS

como variable de entorno.

No dejar una configuración insegura permanente para producción.

==================================================
35. FRONTEND
==================================================

Tecnología obligatoria:

Angular 22+

Preparar arquitectura compatible con Micro Frontends / Native Federation.
Usar como librería de componentes PrimeNG en su versión compatible con Angular (v22+), configurando el tema oficial Aura en su variante clara (Light Mode) para máxima legibilidad y estética profesional.

No introducir complejidad innecesaria si no aporta valor en la primera versión, pero estructurar el proyecto para que pueda evolucionar hacia microfrontends.

Separar:

- Core
- Shared
- Auth
- Public
- Admin
- Team
- Ranking
- Matches
- Classification

==================================================
36. FRONTEND — ZONA PÚBLICA
==================================================

Pantallas:

- Home / Landing
- Ranking
- Clasificación
- Partidos
- Reglamento
- Información general
- Login

==================================================
37. FRONTEND — ADMIN
==================================================

Pantallas y Funcionalidades:

- Dashboard
- Gestión de rankings (Crear y editar ranking: nombre, descripción, fechas, sede/ubicación, nivel y categoría, activación/desactivación)
- Gestión de equipos (Crear y editar equipo: nombre, jugadores titulares 1 y 2, jugador reserva opcional, emails de contacto y acceso sincronizados con `users`, activación/desactivación y reenvío de credenciales de bienvenida)
- Generador de calendario de partidos (Round-Robin)
- Gestión y modificación administrativa de partidos (Admin Override con recálculo automático de clasificación y puntos)
- Gestión y resolución de incidencias arbitrales
- Gestión de tablas maestras/auxiliares (Niveles, Categorías, Sedes/Ubicaciones, Patrocinadores)
- Registro de auditoría de seguridad

==================================================
38. FRONTEND — EQUIPO
==================================================

Pantallas:

- Dashboard de equipo
- Información del equipo
- Sus jugadores
- Sus partidos
- Registrar resultado
- Confirmar resultado recibido
- Comunicar incidencia
- Historial de resultados
- Clasificación

El equipo podrá consultar todos los partidos del ranking, pero sólo tendrá acciones de edición sobre sus propios partidos.

==================================================
39. UX DEL REGISTRO DE RESULTADO
==================================================

Crear un formulario claro:

PARTIDO

Equipo A
vs
Equipo B

FECHA DEL PARTIDO
[ selector de fecha ]

Mostrar debajo:

"Fecha válida desde DD/MM/YYYY hasta DD/MM/YYYY"

donde:

mínimo = ranking.startDate

máximo = ranking.endDate - 3 días

Resultado:

Sets Equipo A
[ 0 / 1 / 2 ]

Sets Equipo B
[ 0 / 1 / 2 ]

Mostrar dinámicamente los puntos calculados, pero recordar:

Los puntos definitivos los calcula el backend.

Al enviar:

"Registrar resultado"

Después mostrar:

"Resultado registrado. Pendiente de confirmación del equipo rival."

==================================================
40. SEGURIDAD
==================================================

Aplicar como mínimo:

- Hash seguro de contraseñas.
- JWT.
- Expiración JWT configurable.
- Validación de inputs.
- Sanitización.
- CORS.
- Protección de endpoints.
- Control de permisos.
- Rate limiting para autenticación y endpoints sensibles.
- Secrets mediante variables de entorno.
- No guardar contraseñas en texto plano.
- No exponer información sensible.
- Validación backend de ownership.

Especialmente importante:

Un TEAM_USER NO debe poder cambiar el teamId de una petición y modificar un partido de otro equipo.

La autorización debe comprobar:

authenticatedUser.teamId

contra:

match.teamOneId
match.teamTwoId

==================================================
41. AUDITORÍA
==================================================

Crear una auditoría mínima para acciones sensibles:

- Registro de resultado.
- Confirmación.
- Incidencia.
- Resolución.
- Modificación administrativa.
- Cambio de puntuación derivado de modificación.
- Cambio de equipo.
- Cambio de permisos.

Guardar como mínimo:

- usuario
- acción
- entidad
- entidadId
- fecha
- datos relevantes

==================================================
42. REGLAS DE NEGOCIO CENTRALES
==================================================

Estas reglas son prioritarias y no deben romperse:

1. Un ranking necesita como mínimo 4 equipos.

2. No hay máximo fijo de equipos salvo configuración futura.

3. No es necesario que el número de equipos sea múltiplo de 6.

4. Cada equipo tiene exactamente 2 titulares.

5. Cada equipo puede tener 1 reserva opcional.

6. Cada equipo tiene entre 1 y 2 emails.

7. Sólo el ADMIN crea equipos.

8. No existe registro público de equipos.

9. Los TEAM_USER sólo pueden gestionar partidos de su equipo.

10. Todos pueden consultar todos los partidos y clasificación.

11. Los partidos no necesitan fecha previa.

12. La fecha se selecciona al registrar el resultado.

13. No existe hora del partido.

14. La fecha del partido debe cumplir:

   ranking.startDate <= matchDate <= ranking.endDate

15. Debe almacenarse:
   - matchDate
   - resultSubmittedAt

16. Victoria 2-0:
   - ganador 5
   - perdedor 1

17. Victoria 2-1:
   - ganador 4
   - perdedor 2

18. Los puntos los calcula exclusivamente backend.

19. Un resultado registrado queda pendiente de confirmación.

20. El equipo rival recibe notificación.

21. El rival puede confirmar.

22. El rival puede comunicar incidencia.

23. Una incidencia pasa al administrador.

24. El administrador puede resolverla.

25. Un resultado confirmado no puede ser modificado por TEAM_USER.

26. El ADMIN tiene control total.

27. No existe el rol MAINTAINER.

==================================================
43. VARIABLES DE ENTORNO
==================================================

Crear .env.example con:

NODE_ENV=development

PORT=3000

JWT_SECRET=
JWT_EXPIRATION=

DATABASE_URL=

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_FROM=

FRONTEND_URL=
CORS_ORIGINS=

Documentar todas las variables.

==================================================
44. TESTS
==================================================

Crear tests para las reglas de negocio críticas.

Como mínimo:

### Autenticación
- Login correcto.
- Login incorrecto.
- JWT expirado.

### Equipos
- Crear equipo como admin.
- Intentar crear equipo como TEAM_USER.
- Equipo con menos de 2 titulares.
- Equipo con 0 emails.
- Equipo con 3 emails.

### Partidos
- TEAM_USER puede registrar partido propio.
- TEAM_USER no puede registrar partido ajeno.
- Admin puede modificar partido.

### Fechas
- Fecha igual al inicio → válida.
- Fecha posterior al inicio → válida.
- Fecha igual al fin → válida.
- Fecha posterior al fin → inválida.
- Fecha anterior al inicio → inválida.

### Puntuación
- 2-0 → 5/1.
- 2-1 → 4/2.

### Confirmación
- Resultado registrado → PENDING_CONFIRMATION.
- Confirmación → CONFIRMED.
- Incidencia → DISPUTED.

### Clasificación
- Los puntos se actualizan correctamente.
- Los resultados confirmados afectan a la clasificación.
- Los resultados no confirmados se distinguen correctamente.

==================================================
45. README
==================================================

Crear README completo explicando:

- Descripción del proyecto.
- Arquitectura.
- Requisitos.
- Instalación.
- Variables de entorno.
- Arranque simultáneo con `npm start` (usando `concurrently` para backend y frontend).
- Arranque independiente (backend en puerto 3000, frontend en puerto 4200).
- Base de datos SQLite en memoria.
- Seed.
- Usuarios de desarrollo.
- Swagger.
- Tests.
- Estructura de carpetas.
- Flujo de autenticación.
- Flujo de resultados.
- Sistema de puntuación.
- Regla de fechas.
- Cómo desplegar posteriormente.
- Cómo sustituir SQLite por una base de datos persistente.

==================================================
46. ESTRUCTURA DE PROYECTO
==================================================

Proponer una estructura similar a:

/backend
  /src
    /config
    /database
    /middleware
    /modules
      /auth
      /users
      /rankings
      /teams
      /matches
      /incidents
      /levels
      /categories
      /sponsors
      /locations
      /rankingTeams
    /services
      /email
    /utils
    app.js
    server.js

/frontend
  /src
    /app
      /core
      /shared
      /features
        /public
        /auth
        /admin
        /team
        /ranking
        /matches
        /classification

Adaptar la estructura a un aplicación Angular 22, mateniendo la separación clara por dominio.

==================================================
47. CALIDAD DEL CÓDIGO
==================================================

Quiero:

- TypeScript en Angular.
- JavaScript o TypeScript en backend, priorizando una estructura mantenible.
- Código limpio.
- Funciones pequeñas.
- Responsabilidades separadas.
- Servicios reutilizables.
- Validaciones centralizadas.
- Errores consistentes.
- No duplicar lógica.
- No poner lógica de negocio importante en componentes Angular.
- No poner lógica de negocio compleja directamente en controllers.
- No confiar en validaciones exclusivamente frontend.
- Comentarios únicamente cuando aporten valor.

==================================================
48. PREPARACIÓN PARA FUTURO
==================================================

Aunque esta primera versión será sencilla, dejar la arquitectura preparada para:

- Base de datos persistente.
- Almacenamiento externo de imágenes.
- Proveedor de email externo.
- Diferentes sistemas de puntuación.
- Desempates configurables.
- Diferentes formatos de competición.
- Múltiples rankings simultáneos.
- Estadísticas avanzadas.
- Notificaciones adicionales.
- Microfrontends mediante Native Federation.
- Aplicación móvil futura.

NO implementar funcionalidades futuras si no son necesarias ahora.

Simplemente evitar decisiones arquitectónicas que bloqueen su incorporación.

==================================================
49. CRITERIOS DE ACEPTACIÓN
==================================================

Consideraré correcta la aplicación cuando pueda realizar este flujo completo:

1. Entrar como ADMIN.
2. Crear un ranking.
3. Definir fecha de inicio y fecha de finalización.
4. Crear al menos 4 equipos.
5. Cada equipo tiene 2 titulares.
6. Añadir una reserva opcional.
7. Añadir entre 1 y 2 emails.
8. Enviar email de bienvenida.
9. Los equipos pueden iniciar sesión.
10. Generar los partidos del ranking.
11. Consultar clasificación.
12. Consultar partidos.
13. Un equipo registra el resultado de uno de sus partidos.
14. Selecciona la fecha del partido.
15. El sistema valida la regla:
    inicio <= fecha <= fin.
16. El backend calcula automáticamente los puntos.
17. El resultado queda PENDING_CONFIRMATION.
18. El equipo rival recibe un email.
19. El rival confirma.
20. El resultado pasa a CONFIRMED.
21. La clasificación se actualiza.
22. El rival puede comunicar una incidencia en otro partido.
23. El administrador recibe/consulta la incidencia.
24. El administrador la resuelve.
25. Un equipo no puede modificar un partido que no le pertenece.
26. Un equipo no puede modificar un resultado confirmado.
27. El administrador puede corregir resultados.
28. Swagger funciona.
29. Los tests principales pasan.
30. El proyecto arranca correctamente desde cero.

==================================================
50. INSTRUCCIÓN FINAL PARA EL DESARROLLO
==================================================

No quiero solamente una descripción de cómo hacerlo.

Quiero que construyas el proyecto siguiendo estas especificaciones.

Antes de implementar:

1. Revisa todas las reglas.
2. Detecta posibles contradicciones.
3. Si existe una decisión técnica menor no especificada, toma una decisión razonable.
4. No cambies ninguna regla de negocio definida en este documento.

Después:

1. Crea la estructura del proyecto.
2. Implementa backend.
3. Implementa base de datos SQLite en memoria.
4. Implementa modelos.
5. Implementa servicios.
6. Implementa controllers.
7. Implementa rutas.
8. Implementa autenticación y autorización.
9. Implementa cálculo de puntuación.
10. Implementa gestión de resultados.
11. Implementa confirmación.
12. Implementa incidencias.
13. Implementa emails.
14. Implementa Swagger.
15. Implementa seed.
16. Implementa frontend Angular 22+.
17. Implementa landing.
18. Implementa zona admin.
19. Implementa zona equipo.
20. Implementa clasificación.
21. Implementa partidos.
22. Implementa tests.
23. Crea README.
24. Comprueba que todo compile y que los flujos principales funcionen.

Prioriza primero la funcionalidad y las reglas de negocio y después el refinamiento visual.

La aplicación debe quedar preparada para ejecutar localmente en entorno de desarrollo.


# Observaciones generales de tecnologías y arquitectura del frontend

- This is a **micro-frontend** Angular application using **Native Federation**:
  - **`rpm-app` (Puerto 4200)**: Host / Shell application con layout global, navbar, footer, auth guard y enrutador federado.
  - **`rpm-admin` (Puerto 4201)**: Remote para administración, rankings, equipos, resolución de disputas y auditoría.
  - **`rpm-rankings` (Puerto 4202)**: Remote para landing pública, visor de rankings, clasificaciones y calendarios.
  - **`rpm-teams` (Puerto 4203)**: Remote para portal de equipos, carga de resultados y apertura de incidencias.
  - **`rpm-users` (Puerto 4204)**: Remote para autenticación, login y gestión de credenciales.
  - **`rpm-live` (Puerto 4205)**: Remote para tanteo de partidos en tiempo real, selector Punto de Oro/Ventajas, firma digital y streaming SSE.
- Always use standalone components over NgModules (default in project)
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use `@HostBinding` and `@HostListener` decorators. Use `host` object instead
- Use `NgOptimizedImage` for static images (not base64)

## Component style & bindings
- Use `input()` and `output()` functions instead of decorators
- Use class/style bindings instead of `ngClass`/`ngStyle`
- Native control flow (`@if`, `@for`, `@switch`) instead of structural directives

## State Management & Services

- Use signals for local state, `computed()` for derived state
- Use `update()` or `set()` on signals, never `mutate()`
- Services use `inject()` function instead of constructor injection
- Services are `providedIn: 'root'` singletons

## I18n & UI Framework

- **ngx-translate** with MessageFormat compiler for pluralization
- Spanish as default language (`defaultLanguage: 'es'`)
- **PrimeNG** with Aura theme for UI components
- Translation files in `src/assets/i18n/es.json`

### API Integration

- Services in `projects/rpm-app/src/app/core/services/`
- Real-time streaming with EventSource / SSE (`listenMatchStream`, `listenGlobalMatches`)
- All API calls intercepted by `authInterceptor` for JWT token attachment

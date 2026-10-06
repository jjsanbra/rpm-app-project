# DESIGN.md - Sistema de Ranking de Pádel (UI/UX Guide)

Este documento es la guía de diseño (Design System & UI Requirements) para la generación de la interfaz visual de la aplicación "Padel Ranking App". Está basado en los requerimientos técnicos del proyecto y fuertemente inspirado en la estética del documento de referencia `Demo 02 – Campo – Campo WordPress Theme.pdf`.

## 1. Identidad Visual y Tema (Inspiración "Campo")

El diseño debe transmitir una sensación **Premium, Deportiva, Moderna y Comunitaria**, adaptando la estética de tenis del tema "Campo" al mundo del **Pádel**.

*   **Librería Base:** PrimeNG v22+
*   **Tema Base:** **Aura (Light Mode)**. Interfaz clara, muy legible, con un uso intensivo de espacios en blanco (whitespace) y bordes sutiles.
*   **Paleta de Colores (Propuesta):**
    *   *Backgrounds:* Blanco puro (#FFFFFF) y grises muy suaves (#F8FAFC) para separar secciones.
    *   *Primario:* Verde Pádel vibrante o Azul Eléctrico (para botones principales, CTAs, y elementos activos).
    *   *Texto:* Gris oscuro pizarroso (#1E293B) para máxima legibilidad.
    *   *Acentos:* Colores de estado semánticos (Verde para `CONFIRMED`/Victoria, Amarillo para `PENDING`, Rojo para `DISPUTED`/Derrota).
*   **Tipografía:** Fuentes sans-serif modernas, geométricas y legibles (ej. Inter, Poppins o Montserrat para los encabezados de la landing, similar al peso visual del PDF de referencia).
*   **Imágenes:** Fotografía de pádel de alta calidad (pistas de cristal, palas, jugadores en acción), logotipos de patrocinadores y avatares/escudos de equipos.

---

## 2. Pantallas a Diseñar por Módulo (Micro-Frontends)

### 2.1. Landing Page Pública (Módulo `rpm-rankings`)
*Basado en la estructura del PDF "Campo", adaptado a rankings.*

*   **Hero Section:** 
    *   *Referencia Campo:* "Great Tennis Experience".
    *   *Adaptación Pádel:* Título impactante (ej. "Domina el Ranking de Pádel"), subtítulo sobre el sistema de competición, y un CTA prominente ("Consulta la Clasificación" / "Acceso Equipos"). Imagen de fondo de alta calidad de una pista de pádel.
*   **Banners de Características (Features):**
    *   *Referencia Campo:* "Expert Programs", "Elite Instructors".
    *   *Adaptación Pádel:* "Tanteo en Vivo", "Gestión de Actas", "Multi-vuelta". Tarjetas limpias (PrimeNG Cards) con iconos minimalistas.
*   **Estadísticas del Club/Ranking:**
    *   *Referencia Campo:* "1994 Since, 15 Courts, 369 Members".
    *   *Adaptación Pádel:* Contador visual con "Equipos Inscritos", "Partidos Disputados", "Sets Jugados".
*   **Tabla de Clasificación Pública (Clave):**
    *   Una tabla PrimeNG (estilo claro, sin bordes pesados) mostrando el top de equipos. Columnas: Posición, Equipo, PJ, PG, PP, Puntos.
*   **Últimos Resultados (Reemplaza al "Schedule" del PDF):**
    *   *Referencia Campo:* Tabla de horarios de lunes a domingo.
    *   *Adaptación Pádel:* Un feed o listado visual de los últimos partidos disputados, mostrando el resultado por sets (ej. Equipo A [6-4, 7-5] Equipo B) y el estado (Confirmado).
*   **Testimonios y Footer:**
    *   *Referencia Campo:* "The workouts with Campo are amazing...".
    *   *Adaptación Pádel:* Footer con contacto, patrocinadores (logos limpios en gris) y links de acceso a Admin/Equipos.

### 2.2. Panel de Administración (Módulo `rpm-admin`)
*Enfoque en alta densidad de datos, claridad y utilitarismo.*

*   **Layout Global:** Sidebar de navegación lateral oscura o gris (Dashboard, Rankings, Equipos, Partidos, Incidencias, Maestros) y Topbar con breadcrumbs y perfil.
*   **Dashboard View:** Tarjetas de métricas (KPIs) en la parte superior (Rankings Activos, Partidos Pendientes de Confirmación, Incidencias Abiertas). Gráficos simples usando PrimeNG Charts.
*   **DataTables (Equipos/Partidos):** Tablas paginadas con capacidad de filtrado y ordenación. Uso de PrimeNG Tags para los estados de los partidos (`PENDING_RESULT`, `CONFIRMED`, `DISPUTED`).
*   **Modales/Diálogos:** Formularios dinámicos (PrimeNG Dialog + FloatLabel) para crear/editar Equipos, Jugadores y gestionar las Actas de Partidos (Admin Override).

### 2.3. Portal de Equipos (Módulo `rpm-teams`)
*Enfoque en la acción rápida para el jugador (Mobile-first fundamental).*

*   **Dashboard de Equipo:** Vista de "Mis Próximos Partidos" y "Resultados Pendientes de Confirmar".
*   **Formulario de Registro de Resultado:** 
    *   UI muy intuitiva. Selector de fecha (PrimeNG Calendar).
    *   Inputs numéricos claros para los sets (ej. Set 1: [6] - [4]).
    *   Cálculo visual dinámico en tiempo real que muestre los Puntos (Ej: "Ganador: 4 pts, Perdedor: 2 pts") antes de enviar.
*   **Bandeja de Confirmación:** Tarjetas visuales de partidos registrados por los rivales con dos grandes botones: "Confirmar Resultado" (Verde) y "Abrir Incidencia" (Rojo).

### 2.4. Live Match Tracker (Módulo `rpm-live`)
*El microfrontend de tanteo en pista. Debe parecer una app de marcador deportivo.*

*   **Scoreboard (Marcador Central):** Tipografía enorme, optimizada para verse bajo el sol en móviles/tablets.
*   **Controles de Puntuación:** Botones gigantes y accesibles para sumar puntos (15, 30, 40, Juego) con soporte visual claro para **Punto de Oro** o **Ventajas**.
*   **Indicadores:** Visualización clara de quién tiene el servicio (icono de pelota) y alertas a pantalla completa para "Cambio de Lado" y "Tie-Break".
*   **Panel de Firma (Al finalizar):** Un modal o vista de tipo "Canvas" para que ambos capitanes firmen el acta digitalmente en la pantalla del dispositivo.

---

## 3. Directrices Clave de Componentes (PrimeNG)

1.  **Botones (PrimeNG Button):** Usar esquinas ligeramente redondeadas (`rounded-md` o similar en Tailwind). Emplear variantes de severidad (`success`, `danger`, `warning`) para acciones críticas (Confirmar, Borrar, Reportar).
2.  **Formularios (Inputs):** Usar `FloatLabel` de PrimeNG para un look moderno en formularios de login y registro de equipos.
3.  **Tarjetas (Cards):** Sombras suaves (`shadow-sm` a `shadow-md`), bordes sutiles. Eliminar cualquier decoración excesiva.
4.  **Tablas:** Diseño limpio (layout `striped` o `grid` sutil), con filas responsivas que se conviertan en tarjetas apilables en resoluciones móviles.

## 4. Arquitectura Frontend (Para Contexto del Diseño)
*Nota para el diseñador: Considera que la aplicación está dividida en Micro-Frontends. Mantén la barra de navegación (Shell/rpm-app) consistente en todos los diseños interiores, cambiando solo el contenido principal del contenedor.*

*   El **Login** debe tener un "Selector Rápido de Cuentas" visible (Dev Mode feature) que debe ser diseñado como pequeños avatares o botones de acceso rápido debajo del formulario tradicional.
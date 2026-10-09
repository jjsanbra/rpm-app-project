# Especificación: Sistema de Diseño Padel Court Athletic Luxury

## 1. Requerimientos de Diseño y Tokens
* **Superficies y Fondos:**
  * Fondo base del canvas en `#F8FAFC` con degradados ambientales sutiles.
  * Tarjetas de contenido en `#FFFFFF` con borde `1px solid #E2E8F0` y elevación de 4 niveles.
  * Capas de vidrio esmerilado con `backdrop-filter: blur(16px)` y fondo `rgba(255, 255, 255, 0.85)`.
* **Identidad Cromática:**
  * Primario: Césped Esmeralda (`#059669` / `#10B981`) con gradiente cinético a Cyan (`#06B6D4`).
  * Secundario: Azul Pista (`#2563EB`) y Púrpura Acento (`#7C3AED`).
  * Estados Semánticos de Partido:
    * Confirmado: Verde `#10B981` (fondo `rgba(16, 185, 129, 0.12)`).
    * Pendiente: Ámbar `#D97706` (fondo `rgba(245, 158, 11, 0.12)`).
    * Disputado: Rojo `#DC2626` (fondo `rgba(239, 68, 68, 0.12)`).
* **Tipografía Dual:**
  * `Outfit`: Encabezados, títulos de sección, nombres de equipos, display y dígitos de marcador en vivo.
  * `Inter`: Tablas de datos, clasificaciones, cuerpos de texto, formularios y etiquetas.
* **Componentes de Dominio:**
  * *Navegación Flotante:* Barra de cristal suspendida (`top: 1rem`).
  * *Podio de Clasificación:* Medallas circulares 1º Oro, 2º Plata, 3º Bronce.
  * *Marcador Courtside:* Vista de pista con dígitos `36px`/`900`, botones táctiles gigantes `80px-120px` y alertas flotantes de Punto de Oro / Tie-Break.

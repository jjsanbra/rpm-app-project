# Reglas y Directivas para Agentes de IA en `rpm-app-project`

## 🔒 Control de Versiones y Git (Regla Crítica)

- **PROHIBICIÓN ESTRICTA DE COMMITS / PUSHES AUTOMÁTICOS:**
  - NUNCA ejecutes `git commit` ni `git push` automáticamente tras realizar cambios, tareas o migraciones.
  - Deja siempre los cambios en el *working tree* (área de trabajo local) para que el usuario pueda revisarlos.
  - Solo ejecuta comandos de commit o push cuando el usuario lo solicite de forma **expresa y literal** (ej: *"haz commit"*, *"commitea y sube a remoto"*).

## 🇪🇸 Convenciones de Idioma
- Todas las respuestas, explicaciones, especificaciones funcionales (`.openspec/specs/`), propuestas (`proposal.md`), diseños (`design.md`) y tareas (`tasks.md`) deben estar redactadas en **español**.

## 🏗️ Flujo de Arquitectura Spec-Driven Development (SDD)
1. Especificaciones en `.openspec/`
2. Endpoints y JSDoc Swagger en `backend/src/`
3. Sincronización de tipos y clientes con `npm run api:sync`
4. Consumo de modelos y servicios desde `@core` en los microfrontends de Angular

# Desarrollo de una plataforma de gestión de proyectos ágiles

La empresa necesita una plataforma de gestión de proyectos ágiles que integre múltiples servicios y tecnologías. La plataforma debe manejar la autenticación, gestión de roles, transiciones de estado de tareas, notificaciones, reportes en tiempo real, persistencia de datos, caché, búsqueda, limitación de tasas, compresión de respuestas, configuración de CORS, health checks, logging, métricas de performance y tests de integración. Los actores involucrados son el 'gestor de proyectos', 'desarrollador', 'servicio de notificación','sistema de reportes', 'base de datos', 'cache','motor de búsqueda', 'usuario final'. Las propiedades operativas incluyen latencia máxima de 200ms para notificaciones, throughput de 1000 solicitudes/segundo, disponibilidad del 99.9%, consistencia eventual entre la base de datos y el cache.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | plataforma-de-gestion-de-proyectos-agiles |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 40 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Autenticación y gestión de roles

**Objetivo:** Implementar la autenticación OAuth2 y un sistema de roles basado en RBAC con permisos granulares.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar el flujo de autenticación OAuth2 para usuarios.
- Implementar la gestión de roles con permisos granulares.
- Asegurar que los roles y permisos se aplican correctamente en las operaciones de la plataforma.

**Entregable:** Servicio de autenticación y gestión de roles operativo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la seguridad y la granularidad de los permisos.
- Piensa en cómo los roles y permisos se relacionan con las operaciones de la plataforma.

</details>

### Fase 2: Motor de workflow y notificaciones

**Objetivo:** Implementar un motor de workflow para manejar transiciones de estado de las tareas y un sistema de notificaciones integrado con servicios externos.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar el motor de workflow para manejar las transiciones de estado de las tareas.
- Integrar el sistema de notificaciones con servicios externos como Slack y Microsoft Teams.
- Asegurar que las notificaciones se envíen correctamente y en tiempo real.

**Entregable:** Motor de workflow y sistema de notificaciones operativo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia y la confiabilidad de las notificaciones.
- Piensa en cómo manejar los fallos en la integración con servicios externos.

</details>

### Fase 3: Sistema de reportes y persistencia de datos

**Objetivo:** Implementar un sistema de reportes en tiempo real usando WebSockets y persistencia de datos en PostgreSQL con migraciones automatizadas.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Diseñar el sistema de reportes en tiempo real usando WebSockets.
- Implementar la persistencia de datos en PostgreSQL con migraciones automatizadas usando Knex.js.
- Asegurar que los reportes se actualicen en tiempo real y que los datos se persistan correctamente.

**Entregable:** Sistema de reportes y persistencia de datos operativo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la latencia y la consistencia de los reportes en tiempo real.
- Piensa en cómo manejar las migraciones de la base de datos de manera segura y eficiente.

</details>

### Fase 4: Cache, búsqueda y limitación de tasas

**Objetivo:** Implementar cache con Redis para las consultas más frecuentes del dashboard, un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch, y rate limiting por usuario y por endpoint.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementar cache con Redis para las consultas más frecuentes del dashboard.
- Implementar un sistema de búsqueda full-text sobre las tareas y comentarios usando ElasticSearch.
- Implementar rate limiting por usuario y por endpoint para prevenir el abuso del sistema.
- Asegurar que el cache, la búsqueda y la limitación de tasas funcionen correctamente y de manera eficiente.

**Entregable:** Cache, sistema de búsqueda y limitación de tasas operativo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la eficiencia y la confiabilidad del cache y la búsqueda.
- Piensa en cómo implementar la limitación de tasas de manera justa y efectiva.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un sistema de roles basado en RBAC con permisos granulares?
- **paraQueSirve**: ¿Para qué sirve un motor de workflow en una plataforma de gestión de proyectos ágiles?
- **comoSeUsa**: ¿Cómo se usa un sistema de reportes en tiempo real en una plataforma de gestión de proyectos ágiles?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar un sistema de cache con Redis?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de rate limiting por usuario y por endpoint?

## Criterios de Evaluacion

- Implementación correcta de la autenticación OAuth2 y gestión de roles.
- Funcionamiento del motor de workflow y sistema de notificaciones.
- Actualización en tiempo real de los reportes y persistencia de datos.
- Funcionamiento eficiente del cache, búsqueda y limitación de tasas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*

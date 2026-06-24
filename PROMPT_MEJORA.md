# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';
import redis from 'redis';
import elasticsearch from 'elasticsearch';
import passport from 'passport';
import { PinoLogger } from './logger';
import { PrometheusMetrics } from './metrics';
import { TaskController } from '../presentation/controllers/taskController';
import { TaskRepository } from '../infrastructure/repositories/taskRepository';
import { SecurityConfig } from '../infrastructure/auth/securityConfig';
import { NotificationService } from '../infrastructure/notifications/notificationService';
import { Task } from '../domain/entities/task';
import { CreateTaskUseCase } from '../application/usecases/task/createTask';

const app = express();
const port = process.env.PORT || 3000;

// === ARCHIVO: src/infrastructure/auth/securityConfig.ts ===
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { User } from '../entities/user';
import { TokenUtils } from './tokenUtils';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret',
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

export const SecurityConfig = {
  initialize: () => {
    passport.initialize();
  },
  authenticate: (req: any, res: any, next: any) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err ||!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      req.user = user;
      next();
    })(req, res, next);
  },
};

// === ARCHIVO: src/infrastructure/auth/tokenUtils.ts ===
import jwt from 'jsonwebtoken';

export class TokenUtils {
  static generateToken(user: any) {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  }
  static verifyToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  }
}

// === ARCHIVO: src/infrastructure/repositories/taskRepository.ts ===
import { Task } from '../entities/task';
import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});

export class TaskRepository {
  async createTask(task: Task) {
    return await db('tasks').insert(task);
  }
  async getTask(id: string) {
    return await db('tasks').where('id', id).first();
  }
  async updateTask(id: string, task: Task) {
    return await db('tasks').where('id', id).update(task);
  }
  async deleteTask(id: string) {
    return await db('tasks').where('id', id).del();
  }
}

// === ARCHIVO: src/application/usecases/task/createTask.ts ===
import { TaskRepository } from '../../infrastructure/repositories/taskRepository';
import { Task } from '../../domain/entities/task';

export class CreateTaskUseCase {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(task: Task) {
    return await this.taskRepository.createTask(task);
  }
}

// === ARCHIVO: src/domain/entities/task.ts ===
export class Task {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}

// === ARCHIVO: src/presentation/controllers/taskController.ts ===
import { Request, Response } from 'express';
import { CreateTaskUseCase } from '../application/usecases/task/createTask';
import { TaskRepository } from '../infrastructure/repositories/taskRepository';
import { Task } from '../domain/entities/task';

export class TaskController {
  private createTaskUseCase: CreateTaskUseCase;

  constructor() {
    const taskRepository = new TaskRepository();
    this.createTaskUseCase = new CreateTaskUseCase(taskRepository);
  }

  async createTask(req: Request, res: Response) {
    try {
      const task = new Task(
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.status,
        new Date(),
        new Date()
      );
      const result = await this.createTaskUseCase.execute(task);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

// === ARCHIVO: config/database.ts ===
export const databaseConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
};

// === ARCHIVO: config/redis.ts ===
export const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
};

// === ARCHIVO: config/elasticsearch.ts ===
export const elasticsearchConfig = {
  host: process.env.ELASTICSEARCH_HOST || 'localhost:9200',
};

// === ARCHIVO: scripts/migrate.ts ===
import knex from 'knex';
import { databaseConfig } from '../config/database';

const db = knex(databaseConfig);

async function migrate() {
  try {
    await db.migrate.latest();
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    await db.destroy();
  }
}

migrate();

// === ARCHIVO: tests/integration/task.test.ts ===
import { expect } from 'chai';
import { TaskController } from '../../src/presentation/controllers/taskController';
import { Task } from '../../src/domain/entities/task';

describe('TaskController', () => {
  let taskController: TaskController;
  let task: Task;

  beforeEach(() => {
    taskController = new TaskController();
    task = new Task('1', 'Test Task', 'Test Description', 'Pending', new Date(), new Date());
  });

  it('should create a task', async () => {
    const req = { body: task } as any;
    const res = {
      status: (code: number) => res,
      json: (data: any) => data,
    } as any;
    await taskController.createTask(req, res);
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.calledWith(task);
  });

  it('should handle errors when creating a task', async () => {
    const req = { body: {} } as any;
    const res = {
      status: (code: number) => res,
      json: (data: any) => data,
    } as any;
    await taskController.createTask(req, res);
    expect(res.status).to.be.calledWith(500);
    expect(res.json).to.be.calledWith({ message: 'Error creating task' });
  });
});

// === ARCHIVO: src/infrastructure/notifications/notificationService.ts ===
import { Task } from '../entities/task';

export class NotificationService {
  async sendNotification(task: Task) {
    console.log(`Notification sent for task: ${task.title}`);
  }
}

// === ARCHIVO: package.json ===
{
  "name": "platform-gestion-proyectos-agiles",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "nodemon index.js",
    "test": "mocha --require ts-node/register 'tests/**/*.test.ts'"
  },
  "dependencies": {
    "express": "^4.18.2",
    "knex": "^2.4.0",
    "redis": "^4.6.4",
    "elasticsearch": "^17.4.0",
    "passport": "^0.6.0",
    "pino": "^8.9.1",
    "prometheus-client": "^0.14.0"
  },
  "devDependencies": {
    "typescript": "^5.1.6",
    "ts-node": "^10.9.1",
    "mocha": "^10.2.0",
    "chai": "^4.3.7"
  }
}

```

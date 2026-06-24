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
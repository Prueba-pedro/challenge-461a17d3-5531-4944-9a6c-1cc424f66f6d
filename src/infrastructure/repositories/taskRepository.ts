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
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
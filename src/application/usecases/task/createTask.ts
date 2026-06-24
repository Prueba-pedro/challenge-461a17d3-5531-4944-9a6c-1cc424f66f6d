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
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
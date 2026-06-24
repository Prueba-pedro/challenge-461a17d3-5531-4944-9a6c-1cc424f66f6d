import { Task } from '../entities/task';

export class NotificationService {
  async sendNotification(task: Task) {
    console.log(`Notification sent for task: ${task.title}`);
  }
}
import { Injectable } from '@angular/core';
import { Task } from '@interfaces/task.interface';
import { NewTask } from '@interfaces/new-task.interface';
import { DUMMY_TASKS } from '@app/dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {}

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}

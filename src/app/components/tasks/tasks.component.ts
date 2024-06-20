import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Task } from '../../interfaces/task.interface';
import { DUMMY_TASKS } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  tasks: Task[] = DUMMY_TASKS;
  isAddingTask: boolean = false;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onAddTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  onCompleteTask(id: string): void {
    // We "complete" a task by removing it from the list of tasks
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces/task.interface';
import { DUMMY_TASKS } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onAddTask() {}
  onClearTasks() {}
  onDeleteTask(id: Event) {}
}

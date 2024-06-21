import { Component, inject, input } from '@angular/core';
import { TaskComponent } from '@components/task/task.component';
import { NewTaskComponent } from '@components/new-task/new-task.component';
import { Task } from '@interfaces/task.interface';
import { TasksService } from '@services/tasks.service';

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
  isAddingTask: boolean = false;
  private tasksService = inject(TasksService);

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCloseAddTask(): void {
    this.isAddingTask = false;
  }
}

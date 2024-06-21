import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from '@shared/card/card.component';
import { Task } from '@interfaces/task.interface';
import { TasksService } from '@services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);

  onCompleteTask(): void {
    // We "complete" a task by removing it from the list of tasks
    this.tasksService.removeTask(this.task().id);
  }
}

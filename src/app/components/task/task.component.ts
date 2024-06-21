import { Component, input, output } from '@angular/core';
import { CardComponent } from '@shared/card/card.component';
import { Task } from '@interfaces/task.interface';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task().id);
  }
}

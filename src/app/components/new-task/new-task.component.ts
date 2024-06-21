import { Component, signal, output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '@services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();

  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  private tasksService = inject(TasksService);

  onCancel(): void {
    // This method should close the New Task form
    this.close.emit();
  }

  onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.close.emit();
  }
}

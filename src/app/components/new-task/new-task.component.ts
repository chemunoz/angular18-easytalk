import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '@interfaces/new-task.interface';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>();
  add = output<NewTask>();
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  onCancel(): void {
    // This method should close the New Task form
    this.cancel.emit();
  }

  onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate(),
    });
  }
}

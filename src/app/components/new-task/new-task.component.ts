import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output<void>();

  onCancel(): void {
    // This method should close the New Task form
    this.cancel.emit();
  }
}

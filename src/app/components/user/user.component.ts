import { Component, computed, input, output } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed<string>(() => `assets/users/${this.user().avatar}`);

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}

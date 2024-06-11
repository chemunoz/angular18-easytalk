import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal({ id: '', name: '', avatar: '' });
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  constructor() {
    this.getRandomUser();
  }

  private getRandomUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

  onSelectUser(): void {
    this.getRandomUser();
  }
}

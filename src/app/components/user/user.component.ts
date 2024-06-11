import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = { id: '', name: '', avatar: '' };

  constructor() {
    this.getRandomUser();
  }

  private getRandomUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }

  get imagePath(): string {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser(): void {
    this.getRandomUser();
  }
}

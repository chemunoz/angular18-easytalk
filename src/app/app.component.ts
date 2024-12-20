import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component';
import { UserComponent } from '@components/user/user.component';
import { TasksComponent } from '@components/tasks/tasks.component';
import { User } from '@interfaces/user.interface';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}

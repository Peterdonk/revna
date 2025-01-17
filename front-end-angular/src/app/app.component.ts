import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserListComponent} from './features/user-management/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'revna-user-management';
}

import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {Route} from '@angular/router';

export default [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
  { path: 'add', component: UserFormComponent },   // Removed 'users/' prefix
  { path: 'edit/:id', component: UserFormComponent }  // Removed 'users/' prefix
] satisfies Route[];

import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { NewEditUsersComponent } from './new-edit-users/new-edit-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  { path: 'new', component: NewEditUsersComponent },
  { path: 'users/edit/:id', component: NewEditUsersComponent },
];

export const UsersRoutes = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEditUsersComponent } from './new-edit-users/new-edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutes } from './users.routing';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes,
    TableModule,
    ButtonModule,
    DividerModule,
    PaginatorModule,
    MenuModule,
  ],
  declarations: [NewEditUsersComponent, ListUsersComponent],
})
export class UsersModule {}

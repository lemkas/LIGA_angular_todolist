import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GetTodosGuardGuard } from './guards/get-todos-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'todos',
    component: TodoComponent,
    canActivate: [GetTodosGuardGuard],
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthComponent,
    TodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoInputComponent,
    TodoFilterComponent,
    AboutComponent,
  ],
  exports: [RouterModule],
  providers: [GetTodosGuardGuard],
})
export class AppRoutingModule {}

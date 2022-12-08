import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AuthComponent } from './pages/auth/auth.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'todos', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  declarations: [
    AuthComponent,
    TodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoInputComponent,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

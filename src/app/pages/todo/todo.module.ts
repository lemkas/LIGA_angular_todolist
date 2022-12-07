import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TodoListItemComponent } from 'src/app/components/todo-list-item/todo-list-item.component';
import { TodoInputComponent } from 'src/app/components/todo-input/todo-input.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoInputComponent,
  ],
  imports: [CommonModule],
})
export class TodoModule {}

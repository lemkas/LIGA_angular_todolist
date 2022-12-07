import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListItemModule } from '../todo-list-item/todo-list-item.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
})
export class TodoListModule {}

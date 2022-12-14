import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ISearchSpec } from 'src/app/models/search-spec';
import { ITodoRecord, STATUS_TODO } from 'src/app/models/todo-item';
import { CrudTodoService } from 'src/app/services/crud-todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodoRecord[] = this.crudTodoService.getAll();
  text!: string;
  status!: STATUS_TODO;
  constructor(public crudTodoService: CrudTodoService) {}

  ngOnInit(): void {}

  deleteTodo(id: string) {
    this.crudTodoService.delete(id);
    this.todos = this.crudTodoService.getAll();
  }
  editTodo(editedTodo: ITodoRecord) {
    console.log(editedTodo);
    setTimeout(() => {
      this.crudTodoService.edit(editedTodo);
    }, 200);
  }

  filterTodo(filter?: STATUS_TODO) {
    this.todos = this.crudTodoService.getAll(filter);
  }

  createTodo(text: string) {
    if (text) {
      const newTodo: ITodoRecord = {
        id: String(Math.random()),
        text,
        status: STATUS_TODO.usual,
      };
      this.crudTodoService.add(newTodo);
    }
  }
}

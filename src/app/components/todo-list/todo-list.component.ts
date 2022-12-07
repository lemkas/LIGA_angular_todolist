import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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

  ngOnChanges() {}

  ngOnInit(): void {}

  deleteTodo(id: string) {
    this.crudTodoService.delete(id);
    console.log(this.todos, 'from component');
    this.todos = this.crudTodoService.getAll();
  }

  editTodo(id: string, text: string, status: STATUS_TODO) {
    const editedTodo: ITodoRecord = {
      id,
      text,
      status,
    };

    this.crudTodoService.edit(editedTodo);
    this.text = '';
  }

  createTodo(ev: any) {
    console.log(ev);
    //   if (text) {
    //     const newTodo: ITodoRecord = {
    //       id: String(Math.random()),
    //       text: STATUS_TODO.usual,
    //       status,
    //     };
    //     this.crudTodoService.add(newTodo);
    //     this.text = '';
    //   }
  }
}

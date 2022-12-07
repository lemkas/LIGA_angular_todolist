import { Component, OnInit, Output, Input } from '@angular/core';
import { ITodoRecord, STATUS_TODO } from 'src/app/models/todo-item';
import { CrudTodoService } from 'src/app/services/crud-todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: ITodoRecord[] = this.crudTodoService.getAll();
  @Output() text!: string;
  constructor(public crudTodoService: CrudTodoService) {}

  ngOnChanges() {}

  ngOnInit(): void {}

  deleteTodoHandler(id: string) {
    this.crudTodoService.delete(id);
    console.log(this.todos, 'from component');
    this.todos = this.crudTodoService.getAll();
  }

  editInputHandler(id: string, text: string, status: STATUS_TODO) {
    const editedTodo: ITodoRecord = {
      id,
      text,
      status,
    };

    this.crudTodoService.edit(editedTodo);
    this.text = '';
  }
}

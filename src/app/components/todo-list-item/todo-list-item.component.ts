import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoRecord, STATUS_TODO } from 'src/app/models/todo-item';
import { CrudTodoService } from 'src/app/services/crud-todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: ITodoRecord;
  @Output() deleteTodoHandler = new EventEmitter();
  @Output() editTodoHandler = new EventEmitter();
  showEdit: boolean = false;
  text!: string;
  constructor() {}
  showEditToggle() {
    this.showEdit = !this.showEdit;
  }

  editTodo(id: string, text: string, status: STATUS_TODO) {
    const editedTodo: ITodoRecord = {
      id,
      text,
      status,
    };
    this.editTodoHandler.emit(editedTodo);
  }

  ngOnInit(): void {}
}

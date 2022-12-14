import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoRecord, STATUS_TODO } from 'src/app/models/todo-item';

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
  status!: STATUS_TODO;
  // class: string =
  //   this.todo.status === STATUS_TODO.done
  //     ? 'todo-list-item done'
  //     : 'todo-list-item';
  constructor() {}
  showEditToggle() {
    this.showEdit = !this.showEdit;
  }

  editTodo(id: string, text: string, status: STATUS_TODO) {
    const editedTodo: ITodoRecord = {
      id,
      text: text ? text : this.todo.text,
      status: status ? status : this.todo.status,
    };
    this.editTodoHandler.emit(editedTodo);
  }

  ngOnInit(): void {}
}

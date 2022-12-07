import { Component, Input, OnInit } from '@angular/core';
import { ITodoRecord } from 'src/app/models/todo-item';
import { CrudTodoService } from 'src/app/services/crud-todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: ITodoRecord;
  constructor() {}

  ngOnInit(): void {}
}

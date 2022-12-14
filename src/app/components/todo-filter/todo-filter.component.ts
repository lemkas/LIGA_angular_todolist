import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { STATUS_TODO } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent implements OnInit {
  filter!: STATUS_TODO;
  @Output() filterTodo = new EventEmitter();
  changeFilterHandler(filter: STATUS_TODO) {
    this.filterTodo.emit(filter);
  }
  constructor() {}

  ngOnInit(): void {}
}

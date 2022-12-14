import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISearchSpec } from 'src/app/models/search-spec';
import { STATUS_TODO } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent implements OnInit {
  filter!: STATUS_TODO;
  text!: string;
  @Output() filterTodo = new EventEmitter();
  changeFilterHandler(filter?: STATUS_TODO, text?: string) {
    // const searchSpec: ISearchSpec = {
    //   filter,
    //   text,
    // };

    this.filterTodo.emit(filter);
  }
  constructor() {}

  ngOnInit(): void {}
}

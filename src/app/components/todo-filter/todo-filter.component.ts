import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISearchSpec } from 'src/app/models/search-spec';
import { STATUS_TODO } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent implements OnInit {
  filterForm!: FormGroup;
  filter!: STATUS_TODO;
  text!: string;
  @Output() filterTodo = new EventEmitter();
  // changeFilterHandler(filter?: STATUS_TODO, text?: string) {
  //   const searchSpec: ISearchSpec = {
  //     filter,
  //     text,
  //   };

  //   this.filterTodo.emit(filter);
  // }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      search: '',
      filter: '',
    });
  }

  changeFilterHandler() {
    console.log(this.filterForm.value);
    this.filterTodo.emit(this.filterForm.value);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ISearchSpec } from 'src/app/models/search-spec';
import { STATUS_TODO } from 'src/app/models/todo-item';
import { FilterValidators } from './filter.validators';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss'],
})
export class TodoFilterComponent implements OnInit {
  filterForm!: FormGroup;
  filter!: STATUS_TODO;
  text!: string;
  validError!: string;
  @Output() filterTodo = new EventEmitter();
  constructor(private fb: FormBuilder, private validators: FilterValidators) {}

  ngOnInit(): void {
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      search: ['', [], this.validators.forbiddenWords],
      filter: '',
    });
  }

  changeFilterHandler() {
    console.log(this.filterForm.errors);
    this.filterTodo.emit(this.filterForm.value);
  }

  toggleValidError() {
    return this.filterForm.get('search')!.errors!.forbiddenWord;
  }
}

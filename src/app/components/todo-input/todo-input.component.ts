import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  text!: string;
  @Output() createTodo = new EventEmitter<any>();
  constructor() {}

  inputHandler() {
    this.createTodo.emit(this.text);
  }

  ngOnInit(): void {}
}

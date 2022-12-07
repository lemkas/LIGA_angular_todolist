import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  text!: string;
  @Output() addHandler = new EventEmitter();
  constructor() {}
  createTodo(text: string) {
    this.addHandler.emit(this.text);
    this.text = '';
  }
  ngOnInit(): void {}
}

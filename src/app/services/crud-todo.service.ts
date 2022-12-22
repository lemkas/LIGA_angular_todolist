import { Injectable } from '@angular/core';
import { ISearchSpec } from '../models/search-spec';
import { ITodoRecord, STATUS_TODO } from '../models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class CrudTodoService {
  _todos: ITodoRecord[] = [
    {
      id: '1',
      text: 'Купить молоко',
      status: STATUS_TODO.done,
    },
    {
      id: '2',
      text: 'Прочитать почту',
      status: STATUS_TODO.important,
    },
    {
      id: '3',
      text: 'Отдохнуть',
      status: STATUS_TODO.usual,
    },
  ];

  getAll(searchSpec?: ISearchSpec): ITodoRecord[] {
    if (searchSpec?.filter && searchSpec?.search) {
      return this._todos.filter(
        (todo) =>
          todo.status === searchSpec.filter &&
          todo.text
            .toLocaleLowerCase()
            .includes(searchSpec.search?.toLocaleLowerCase() ?? '')
      );
    } else if (!searchSpec?.filter && searchSpec?.search) {
      return this._todos.filter((todo) =>
        todo.text
          .toLocaleLowerCase()
          .includes(searchSpec.search?.toLocaleLowerCase() ?? '')
      );
    } else if (searchSpec?.filter && !searchSpec?.search) {
      return this._todos.filter((todo) => todo.status === searchSpec.filter);
    } else {
      return this._todos;
    }
  }

  add(newTodo: ITodoRecord) {
    this._todos.unshift(newTodo);
  }

  delete(id: string) {
    this._todos = this._todos.filter((todo) => !(todo.id == id));
  }

  edit(editedTodo: ITodoRecord) {
    const oldTodoIndex = this._todos.findIndex(
      (todo) => todo.id === editedTodo.id
    );
    this._todos[oldTodoIndex] = editedTodo;
  }
}

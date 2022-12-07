import { TestBed } from '@angular/core/testing';

import { CrudTodoService } from './crud-todo.service';

describe('CrudTodoService', () => {
  let service: CrudTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

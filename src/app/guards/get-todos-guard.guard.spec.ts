import { TestBed } from '@angular/core/testing';

import { GetTodosGuardGuard } from './get-todos-guard.guard';

describe('GetTodosGuardGuard', () => {
  let guard: GetTodosGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GetTodosGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

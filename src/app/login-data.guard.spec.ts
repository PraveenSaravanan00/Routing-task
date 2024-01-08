import { TestBed } from '@angular/core/testing';

import { LoginDataGuard } from './login-data.guard';

describe('LoginDataGuard', () => {
  let guard: LoginDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

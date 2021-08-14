import { TestBed } from '@angular/core/testing';

import { NavigateCheckGuard } from './navigate-check.guard';

describe('NavigateCheckGuard', () => {
  let guard: NavigateCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NavigateCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

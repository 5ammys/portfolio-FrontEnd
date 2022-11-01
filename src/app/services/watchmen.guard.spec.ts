import { TestBed } from '@angular/core/testing';

import { WatchmenGuard } from './watchmen.guard';

describe('WatchmenGuard', () => {
  let guard: WatchmenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WatchmenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

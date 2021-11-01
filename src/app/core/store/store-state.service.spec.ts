import { TestBed } from '@angular/core/testing';

import { StoreStateService } from './store-state.service';

describe('StoreStateService', () => {
  let service: StoreStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

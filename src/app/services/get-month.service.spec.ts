import { TestBed } from '@angular/core/testing';

import { GetMonthService } from './get-month.service';

describe('GetMonthService', () => {
  let service: GetMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

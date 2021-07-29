import { TestBed } from '@angular/core/testing';

import { HivMonthlyReportService } from './hiv-monthly-report.service';

describe('HivMonthlyReportService', () => {
  let service: HivMonthlyReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HivMonthlyReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

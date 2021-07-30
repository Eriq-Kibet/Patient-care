import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MonthlyReportService } from './../services/monthly-report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.scss']
})
export class MonthlyReportComponent implements OnInit {
  paramName: any;
  paramMonth: any;
  reportResult: any;
  constructor(private monthlyReportService: MonthlyReportService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {

      this.paramMonth = params['month'];
      this.paramName = params['name'];
    })
    this.getMonthlyReport();
  }
  getMonthlyReport() {
    this.monthlyReportService.sendMonthlyReport(this.paramName, this.paramMonth).subscribe((results) => {
      console.log(results);
      this.reportResult = results;

    })
  }
}

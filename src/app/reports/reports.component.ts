import { Component, OnInit } from '@angular/core';
import { HivMonthlyReportService } from '../services/hiv-monthly-report.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})

export class ReportsComponent implements OnInit {
  monthSet: any;
  selectedMonth: any;
  constructor(private hivMonthlyReportService: HivMonthlyReportService) { }
  ngOnInit(): void {

  }

  onChange(event: any) {
    this.selectedMonth = event
    this.getReport();
  }
  public getReport() {
    this.hivMonthlyReportService.sendSelectedMonth(this.selectedMonth).subscribe((response) => {
      console.log("hiv report", response);
      this.monthSet = response;
    },
      (error) => {
        console.log(error);


      })
  }
}

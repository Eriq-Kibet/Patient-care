import { Component, OnInit } from '@angular/core';
import { GetMonthService } from '../services/get-month.service';
import { HivMonthlyReportService } from '../services/hiv-monthly-report.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  months: any;
  selectedMonth: any;
  constructor(private getMonthService: GetMonthService, private hivMonthlyReportService: HivMonthlyReportService) { }

  ngOnInit(): void {
    this.getMonth();
    this.getReport();
  }
  public getMonth() {
    this.getMonthService.getEncounterMonth().subscribe((response) => {
      this.months = response;
      console.log("months", response);

    },
      (error) => {
        console.log(error);
      }
    )
  }
  public getReport() {
    this.hivMonthlyReportService.sendSelectedMonth(this.selectedMonth).subscribe((response) => {
      console.log("hiv report", response);
      this.selectedMonth = response;
    },
      (error) => {
        console.log(error);


      })
  }
}

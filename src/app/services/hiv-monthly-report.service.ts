import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ConstantsService } from '../config/constants.service';




@Injectable({
  providedIn: 'root'
})
export class HivMonthlyReportService {

  constructor(private httpClient: HttpClient, private constantsService: ConstantsService) { }
  public getURL(): string {
    return this.constantsService.getURL();
  }

  public sendSelectedMonth(selectedMonth: string) {
    const url = this.getURL() + "monthly-report"
    const params = new HttpParams().set('e.hiv_status', selectedMonth)
    return this.httpClient.get(url, { params: params })
  }
}

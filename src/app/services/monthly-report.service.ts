import { Injectable } from '@angular/core';
import { ConstantsService } from '../config/constants.service';
import { HttpClient , HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MonthlyReportService {
  constructor(private httpClient: HttpClient, private constantsService: ConstantsService) { }
  public getURL(): string {
    return this.constantsService.getURL();
  }
  // Send Get Request

  public sendMonthlyReport(hivStatus: string, year_month:string) {
    const url = this.getURL() + "hiv-status-report"
    const params = new HttpParams().set('hiv_status', hivStatus).set('encounter_datetime', year_month)
    return this.httpClient.get(url, { params: params })
  }
}

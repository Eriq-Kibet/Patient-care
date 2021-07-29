import { Injectable } from '@angular/core';
import { ConstantsService } from '../config/constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMonthService {

  constructor(private httpClient: HttpClient, private constantsService: ConstantsService) { }
  public getURL(): string {
    return this.constantsService.getURL();
  }
  public getEncounterMonth() {
    const url = this.getURL() + "months"
    return this.httpClient.get(url)
  }
}
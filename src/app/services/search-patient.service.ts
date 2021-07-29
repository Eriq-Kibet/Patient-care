import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ConstantsService } from '../config/constants.service';

@Injectable({
    providedIn: 'root'
})
export class PatientSearchService {

    constructor(private httpClient: HttpClient, private constantsService: ConstantsService) { }
    public getURL(): string {
        return this.constantsService.getURL();
    }
    /**
     * sendGetRequest
     */
    public sendSearchPatients(searchValue: string) {
        const url = this.getURL() + "patients"
        const params = new HttpParams().set('name', searchValue)
        return this.httpClient.get(url, { params: params })
    }
}
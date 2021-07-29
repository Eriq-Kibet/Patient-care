import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private API = "http://localhost:5100/api/";

  constructor() { }
  public getURL() {
    return this.API;
  }
}

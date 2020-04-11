import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  data: any = null;
  constructor(private http: HttpClient) { }
  getSheet(phoneNumber, selectedStore) {
    let res = this.http.get(`${environment.googlesheetApi}?phoneNumber=${phoneNumber}&selectedStore=${selectedStore}`);
    return res;
  }
}

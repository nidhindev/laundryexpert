import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { phoneNumberValidator } from './phoneNumber-validator'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  constructor(private http: HttpClient) { }
  getSheet(id, selectedStore) {
    var isphoneNumber =  phoneNumberValidator(id); 
    var query = `storeName=${selectedStore}&orderNumber=${id}`
    if (isphoneNumber)
    query = `storeName=${selectedStore}&phoneNUmber=${id}`
    let res = this.http.get(`${environment.googlesheetApi}/customer/v2?${query}`);
    return res;
  }

  updateSheet(sheet ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    let res = this.http.put(`${environment.googlesheetApi}/update`, sheet, httpOptions);
    return res;
  }

  getBusinessConfig() {
    return this.http.get(`${environment.business}`);
  }
}

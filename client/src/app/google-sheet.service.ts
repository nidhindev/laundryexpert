import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { phoneNumberValidator } from './phoneNumber-validator'
@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  constructor(private http: HttpClient) { }
  getSheet(id, selectedStore) {
    var isphoneNumber =  phoneNumberValidator(id); 
    var searchBy = 'billNumber'
    if (isphoneNumber)
      searchBy = 'phoneNumber'
    let res = this.http.get(`${environment.googlesheetApi}?id=${id}&selectedStore=${selectedStore}&searchBy=${searchBy}`);
    return res;
  }
}

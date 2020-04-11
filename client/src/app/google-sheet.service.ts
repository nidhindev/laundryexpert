import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  data: any = null;
  constructor(private http: HttpClient) { }
  getSheet(id, selectedStore) {
    var isnum = /^\d+$/.test(id);
    var searchBy = 'billNumber'
    if (isnum)
      searchBy = 'phoneNumber'
    let res = this.http.get(`${environment.googlesheetApi}?id=${id}&selectedStore=${selectedStore}&searchBy=${searchBy}`);
    return res;
  }
}

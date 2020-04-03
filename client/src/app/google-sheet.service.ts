import { Injectable } from '@angular/core';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  data: any = null;
  constructor(private http: HttpClient) { }
  getSheet() {
    let res = this.http.get('https://laundryexpert.herokuapp.com/googlesheet');
    return res;
  }
}

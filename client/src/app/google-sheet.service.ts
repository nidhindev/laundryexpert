import { Injectable } from '@angular/core';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {
//https://docs.google.com/spreadsheets/d/17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8
//const doc = new GoogleSpreadsheet('https://docs.google.com/spreadsheets/d/17cYZqSLhHOpvP5T27dsv8A3Rk9E6-iHCH7q8uaTs5C8');

data: any = null;

  constructor(private http: HttpClient) { }

  getSheet() {
    console.log("reached")
    let res = this.http.get('http://localhost:3000/googlesheet');
    return res;
  }
}

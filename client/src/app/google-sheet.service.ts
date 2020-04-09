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
    //return [{"billNumber":"1000","name":"Raju","date":"","phoneNumber":"919875678756","items":[{"name":"Shirt ","totalPieces":"5","finishedPieces":"5","status":"Ready "},{"name":"Dothi","totalPieces":"6","finishedPieces":"6","status":"Ready"},{"name":"Pant","totalPieces":"6","finishedPieces":"6","status":"Ready "},{"name":"Saree","totalPieces":"8","finishedPieces":"8","status":"Ready "}]},{"billNumber":"1001","name":"Sachin","date":"","phoneNumber":"919887645667","items":[{"name":"Shirt","totalPieces":"12","finishedPieces":"5","status":"Pending "}]},{"billNumber":"1002","name":"Sheela","date":"","phoneNumber":"918424346546","items":[{"name":"Pant","totalPieces":"1","finishedPieces":"0","status":"Pending "},{"name":"Banion","totalPieces":"2","finishedPieces":"2","status":"ready "}]},{"billNumber":"1003","name":"Mohan","date":"","phoneNumber":"91966345485","items":[{"name":"Saree","totalPieces":"3","finishedPieces":"2+1","status":"Ready +return"},{"name":"Pant","totalPieces":"5"},{"name":"Top","totalPieces":"2","finishedPieces":"2","status":"Ready"},{"name":"Setsaree","totalPieces":"2","finishedPieces":"1+1","status":"Ready+return"}]},{"billNumber":"1004","name":"Saji","date":"","phoneNumber":"91963364548","items":[{"name":"Saree","totalPieces":"2","finishedPieces":"2","status":"Ready"},{"name":"Dothi","totalPieces":"3","finishedPieces":"3","status":"Ready"}]}];
    return res;
  }
}

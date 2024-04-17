import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/mapper';

  convert(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
  getAttribProduct(): Observable<any> {
    return this.http.get<any>(this.url+"/attributes/product");
  }

  getAttribTransaction(): Observable<any> {
    return this.http.get<any>(this.url+"/attributes/transaction");
  }
  addProduct(data: any):Observable<any>{
    return this.http.post<any>(this.url+"/addProduct", data);

  }
  getTableRef()
  {
    return this.http.get<any>(this.url+"/groupby");

  }
  updateProduct(data:any):Observable<any>
  {
    return this.http.put<any>(this.url+"/updateProduct", data);
  }

  updateTransaction(data:any):Observable<any>
  {
    return this.http.put<any>(this.url+"/updateTransaction", data);
  }
  addTransaction(data: any):Observable<any>
  {
    return this.http.post<any>(this.url+"/addTransaction", data);  
  }
}

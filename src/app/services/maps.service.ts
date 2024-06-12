import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mapper } from 'app/models/mapper';
import { Maps } from 'app/models/maps';
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
  getAll():Observable<Mapper[]> {
    return this.http.get<Mapper[]>(this.url);
  }
  getbyId(id:string):Observable<Mapper> {
    return this.http.get<Mapper>(this.url+"/"+id);
  }
  delete(id:number):Observable<Mapper> {
    return this.http.delete<Mapper>(this.url+"/"+id);
  }
  update(id:string,data:Mapper):Observable<Mapper> {
    return this.http.put<Mapper>(this.url+"/"+id,data);
  }
  getAttribProduct(): Observable<any> {
    return this.http.get<any>(this.url+"/attributes/product");
  }
  getAttribClient(): Observable<any> {
    return this.http.get<any>(this.url+"/attributes/client");
  }
  getAttribAdress(): Observable<any> {
    return this.http.get<any>(this.url+"/attributes/adress");
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

  addClient(data: any):Observable<any>{
    return this.http.post<any>(this.url+"/addClient", data);

  }

  updateClient(data:any):Observable<any>
  {
    return this.http.put<any>(this.url+"/updateClient", data);
  }

  addAdress(data: any):Observable<any>{
    return this.http.post<any>(this.url+"/addAdress", data);

  }

  updateAdress(data:any):Observable<any>
  {
    return this.http.put<any>(this.url+"/updateAdress", data);
  }
}

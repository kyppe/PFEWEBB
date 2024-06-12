import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  login(email:string,password:string):Observable<any>
  {
    return this.http.post(this.url+"/login",{"email":email,"password":password})
  }

  getAll(): Observable<Client[]> {
    
    return this.http.get<Client[]>(this.url);
  }
  getById(id: string): Observable<Client> {
    return this.http.get<Client>(this.url + '/' + id);
  }
  addClient(client: any): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }
  deleteClient(id: string):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateClient(id: string, client: any): Observable<Client> {
    return this.http.put<Client>(this.url+'/'+id, client);
  }
  activateClient(id:string,client:any):Observable<Client>
  {
    return this.http.put<Client>(this.url+'/actif/'+id,client)
  }

  affecterProfile(idClie,idProf:number):Observable<Client>
  {
    return this.http.put<Client>(this.url+'/affecterProfile/'+idClie+'/'+idProf,{})

  }
  getAttributes(): Observable<String[]> {
    return this.http.get<String[]>(this.url+"/attributes");
  }
  groupBy(): Observable<any[]> {
    return this.http.get<any[]>(this.url+"/getDates");
  }
}

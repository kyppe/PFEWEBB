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

  getAll(): Observable<Client[]> {
    
    return this.http.get<Client[]>(this.url);
  }
  getById(id: number): Observable<Client> {
    return this.http.get<Client>(this.url + '/' + id);
  }
  addClient(client: any): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }
  deleteClient(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateClient(id: number, client: any): Observable<Client> {
    return this.http.put<Client>(this.url+'/'+id, client);
  }
  activateClient(id:number,client:any):Observable<Client>
  {
    return this.http.put<Client>(this.url+'/actif/'+id,client)
  }
}

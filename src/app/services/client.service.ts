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
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }
  deleteClient(client: Client) {
    return this.http.delete(this.url + '/'+client.id);
  }
}

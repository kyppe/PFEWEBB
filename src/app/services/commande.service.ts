import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from 'app/models/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = 'http://localhost:3000/Commandes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.url);
  }
  getById(id: number): Observable<Commande> {
    return this.http.get<Commande>(this.url + '/' + id);
  }
  addCommande(Commande: any): Observable<Commande> {
    return this.http.post<Commande>(this.url, Commande);
  }
  deleteCommande(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateCommande(id: number, Commande: any): Observable<Commande> {
    return this.http.put<Commande>(this.url+'/'+id, Commande);
  }
}

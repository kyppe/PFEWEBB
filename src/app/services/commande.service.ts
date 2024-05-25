import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from 'app/models/commande';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = 'http://localhost:3000/Commandes';
  url2 = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.url);
  }
  getById(id: string): Observable<Commande> { 
    return this.http.get<Commande>(this.url + '/' + id);
  }
  addCommande(id:string,Commande: any): Observable<Commande> {
    return this.http.put<Commande>(this.url2+"/addcommande/"+id, Commande);
  }
  deleteCommande(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateCommande(id: string, Commande: any): Observable<Commande> {
    return this.http.put<Commande>(this.url+'/'+id, Commande);
  }
  updateEtateCommande(data:any,id:number,etat:any):Observable<any>
  {
    return this.http.put<any>(this.url+"/"+id+"/etat/"+etat,data)
  }
}

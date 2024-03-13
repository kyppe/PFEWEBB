import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.url);
  }
  getById(id: string): Observable<Produit> {
    return this.http.get<Produit>(this.url + '/' + id);
  }
  addproduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.url, produit);
  }
  deleteproduit(ref: string) {
    return this.http.delete(this.url + '/'+ref);
  }
  affecterCategorie(idProd,idCat:number):Observable<Produit>
  {
    return this.http.put<Produit>(this.url+'/affecterCategorie/'+idProd+'/'+idCat,{})
  }


}

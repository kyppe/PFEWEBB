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
  deleteproduit(produit: Produit) {
    return this.http.delete(this.url + '/'+produit.id);
  }
}

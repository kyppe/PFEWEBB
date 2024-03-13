import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'app/models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.url);
  }
  getById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.url + '/' + id);
  }
  addCategorie(Categorie: any): Observable<Categorie> {
    return this.http.post<Categorie>(this.url, Categorie);
  }
  deleteCategorie(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateCategorie(id: string, Categorie: any): Observable<any> {
    return this.http.put<Categorie>(this.url+'/'+id, Categorie);
  }
}

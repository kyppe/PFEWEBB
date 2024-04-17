import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from 'app/models/adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  url = 'http://localhost:3000/adresses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(this.url);
  }
  getById(id: number): Observable<Adresse> {
    return this.http.get<Adresse>(this.url + '/' + id);
  }
  addAdresse(adresse: Adresse): Observable<Adresse> {
    return this.http.post<Adresse>(this.url, adresse);
  }
  deleteAdresse(adresse: Adresse) {
    return this.http.delete(this.url + '/'+adresse.id);
  }
  getAttributes(): Observable<String[]> {
    return this.http.get<String[]>(this.url+"/attributes");
  }
}

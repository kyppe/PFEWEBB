import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from 'app/models/administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateuristrateurService {

  url = 'http://localhost:3000/admins';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Administrateur[]> {
    return this.http.get<Administrateur[]>(this.url);
  }
  getById(id: number): Observable<Administrateur> {
    return this.http.get<Administrateur>(this.url + '/' + id);
  }
  addAdministrateur(administrateur: Administrateur): Observable<Administrateur> {
    return this.http.post<Administrateur>(this.url, administrateur);
  }
  deleteAdministrateur(administrateur: Administrateur) {
    return this.http.delete(this.url + '/'+administrateur.id);
  }
}

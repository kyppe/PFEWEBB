import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchProfileCategorie } from 'app/models/match-profile-categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchProfileCategorieService {

  url = 'http://localhost:3000/matchprofilecategories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<MatchProfileCategorie[]> {
    return this.http.get<MatchProfileCategorie[]>(this.url);
  }
  getById(id: number): Observable<MatchProfileCategorie> {
    return this.http.get<MatchProfileCategorie>(this.url + '/' + id);
  }
  addMatchProfileCategories(MatchProfileCategories: any): Observable<MatchProfileCategorie> {
    return this.http.post<MatchProfileCategorie>(this.url, MatchProfileCategories);
  }
  deleteMatchProfileCategories(id: number) {
    return this.http.delete(this.url + '/'+id);
  }
}

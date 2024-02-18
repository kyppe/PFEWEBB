import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/commercial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  url = 'http://localhost:3000/salesmans';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Commercial[]> {
    return this.http.get<Commercial[]>(this.url);
  }
  getById(id: number): Observable<Commercial> {
    return this.http.get<Commercial>(this.url + '/' + id);
  }
  addCommercial(commercial: any): Observable<Commercial> {
    return this.http.post<Commercial>(this.url, commercial);
  }
  deleteCommercial(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateCommercial(id: number, commercial: any): Observable<any> {
    return this.http.put<Commercial>(this.url+'/'+id, commercial);
  }
}

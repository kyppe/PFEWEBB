import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'app/models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);
  }
  getById(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.url + '/' + id);
  }
  addProfile(Profile: any): Observable<Profile> {
    return this.http.post<Profile>(this.url, Profile);
  }
  deleteProfile(id: number):Observable<any>  {
    return this.http.delete<void>(this.url + '/'+id);
  }
  updateProfile(id: string, Profile: any): Observable<any> {
    return this.http.put<Profile>(this.url+'/'+id, Profile);
  }
}

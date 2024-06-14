import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeTransaction } from 'app/models/type-transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeTransactionService {

  url = 'http://localhost:3000/typeTransaction';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TypeTransaction[]> {
    return this.http.get<TypeTransaction[]>(this.url);
  }
  getById(id: number): Observable<TypeTransaction> {
    return this.http.get<TypeTransaction>(this.url + '/' + id);
  }
  addTypeTransaction(TypeTransaction: any): Observable<TypeTransaction> {
    return this.http.post<TypeTransaction>(this.url, TypeTransaction);
  }
  deleteTypeTransaction(id: number) {
    return this.http.delete(this.url + '/'+id);
  }
  updateTypeTransaction(id: number, typeTransaction: any): Observable<any> {
    return this.http.put<TypeTransaction>(this.url+'/'+id, typeTransaction);
  }
}

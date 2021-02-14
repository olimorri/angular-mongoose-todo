import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private baseUrl = "http://localhost:3000/todo";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }
}

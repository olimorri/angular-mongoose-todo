import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { Todo } from './todo';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  todo: Todo;

  private baseUrl = "http://localhost:3000/todo";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  postTodos(todo: Todo): Observable<Todo> {
    console.log(todo)
    const body =JSON.stringify(todo);
    const headers = { 'content-type': 'application/json'}
    return this.http.post<Todo>(this.baseUrl, body, {'headers':headers})
  }
}

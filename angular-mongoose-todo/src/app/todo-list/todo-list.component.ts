import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] | undefined;

  constructor(private apiClientService: ApiClientService ) { }

  ngOnInit(): void {
    this.loadTodos()
  }

  loadTodos() : void {
    this.apiClientService.getTodos()
      .subscribe(todo => this.todos = todo);
  }


}

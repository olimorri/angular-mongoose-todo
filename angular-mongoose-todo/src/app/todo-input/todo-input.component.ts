import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Output() createTodo = new EventEmitter<string>();

  todo: Todo;

  constructor(private apiClientService: ApiClientService ) { }

  ngOnInit(): void {
  }

  addNewTodo(value :string) {
    this.todo = ({"content": value, "completed": false, "timestamp": Date.now()})
    this.apiClientService.postTodos(this.todo)
    .subscribe(todo => {
      console.log(todo)
      this.apiClientService.getTodos();
    })
  }

  

}



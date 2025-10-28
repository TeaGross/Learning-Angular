import { Component } from '@angular/core';
import { ApiService } from '../../app/services/Api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todos',
  imports: [NgFor, AsyncPipe, RouterLink],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  todos: Observable<Todo[]>;

  constructor(private apiService: ApiService) { 
  this.todos = this.apiService.getTodos();
  }
 
}

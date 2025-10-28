import { Component } from '@angular/core';
import { ApiService } from '../../app/services/Api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-presentation',
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './todo-presentation.html',
  styleUrl: './todo-presentation.scss',
})
export class TodoPresentation {
   todo: Observable<Todo>; 

  constructor(private router: ActivatedRoute, private apiService: ApiService) {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.todo = this.apiService.getTodoById(id).pipe(
      map(todo => {
      if (todo.id === 1) {
        return {...todo, new: 'Det här är en ny text'}
      } 
      return todo;
      
    })
    );
   }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient) {}

    public getTodos(): Observable<Todo[]> {
        const URL: string = 'https://jsonplaceholder.typicode.com/todos'
        return this.http.get<Todo[]>(URL);
    }

    public getTodoById(id:number): Observable<Todo> {
        const URL: string = `https://jsonplaceholder.typicode.com/todos/${id}`;
        return this.http.get<Todo>(URL);
    }
    
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';
import { HttpClient } from "@angular/common/http";
import { NewTodoInterface } from '../types/newTodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodosFromService(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>('http://localhost:3000/todos')
  }

  addTodo(newTodo: NewTodoInterface) {
    return this.http.post<TodoInterface>('http://localhost:3000/todos', newTodo)
  }

  deleteTodo(id: string) {
    return this.http.delete('http://localhost:3000/todos/delete-todo/' + id)
  }

  updateTodo(id: string, body: any) {
    return this.http.put('http://localhost:3000/todos/update-todo/' + id, body)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todo/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.url);
  }

  createTask(task: TodoService) {
    return this.http.post(this.url, JSON.stringify(task));
  }

  updateTask(task: any){
    return this.http.patch(this.url + '/' + task.id, JSON.stringify({ isRead: true }));
  }

  removeTask(){

  }


}

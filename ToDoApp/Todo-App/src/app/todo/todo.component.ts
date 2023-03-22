import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todos } from './todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todos: Todos[] = [];
  displayAddTodo = false;
  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(){
    this.todoService.getTasks().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  createTask(input: any) {
    let task: any = { title: input.value };
    input.value = '';
    this.todoService.createTask(task)
      .subscribe(response => {
        task.id = response;
      });
  }

  showAddTask(){
    this.displayAddTodo = true;
  }

}

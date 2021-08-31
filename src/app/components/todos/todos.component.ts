import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: Todo[];

  constructor(
    private todoService: TodoService,
  ) {
    this.todos = this.todoService.todos;
  }

  ngOnInit(): void {
  }

  public onDelete(todo: Todo): void {
    console.log('TodosComponent', todo);
  }

}

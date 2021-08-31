import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = [
    {
      id: 1,
      content: ' First todo',
      complete: false,
    },{
      id: 2,
      content: 'Second todo',
      complete: true,
    },{
      id: 3,
      content: 'Third todo',
      complete: false,
    }
  ];

  constructor() { }

  public deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter((todoElement : Todo): boolean => {
      return todoElement.id !== todo.id;
    });
  }

  public toggleTodo(todo: Todo): void{
    this.todos = this.todos.map((todoElement: Todo): Todo => {
      if (todo.id === todoElement.id){
        todoElement.complete = !todoElement.complete;
      }
      return todoElement;
    });
  }
}

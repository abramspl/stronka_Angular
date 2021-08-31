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

  public addTodo(todo: Todo): void{

    todo.id = this.getLastTodoId() + 1;
    this.todos.push(todo);
  }

  private getLastTodoId(): number {
    var lastId: number = 0;

    this.todos.forEach((todoElement: Todo) => {
      const todoElementId = todoElement.id ?? 0;

      if(lastId < todoElementId) {
        lastId = todoElementId;
      }
    });
    return lastId;
  }

}

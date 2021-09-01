import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = [];

  private url: string = 'https://jsonplaceholder.typicode.com/todos';

  private limit: string = '?_limit=5';

  constructor(private httpClient: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.url}${this.limit}`).pipe(
      map(
        (result: any) => {
          var todos: Todo[] = [];

          result.forEach((element: any) => {
            const todo: Todo = new Todo();

            todo.content = element.title;
            todo.id = element.id;
            todo.completed = element.completed;

            todos.push(todo);
            
          });
          return todos;
        }
      )
    );
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    const url: string = `${this.url}/${todo.id}`;

    return this.httpClient.delete<Todo>(
      url,
      httpOptions
    );
  }

  public toggleTodo(todo: Todo): void{
    this.todos = this.todos.map((todoElement: Todo): Todo => {
      if (todo.id === todoElement.id){
        todoElement.completed = !todoElement.completed;
      }
      return todoElement;
    });
  }

  public addTodo(todo: Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(
      this.url,
      todo,
      httpOptions
    );
  }

}

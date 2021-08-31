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
}

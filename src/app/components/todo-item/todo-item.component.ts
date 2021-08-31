import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo!: Todo;

  @Output()
  public deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(todo: Todo): void{
    this.deleteTodo.emit(todo);
  }

  public onToggle(): void {
    this.todo.complete = !this.todo.complete;
  }

  public setClasses(): string {
    var classes = '';

    if (this.todo.complete){
      classes = 'is-completed';
    }

    return classes;
  }


}

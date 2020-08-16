import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="gg-trash" (click)="removeItem()"> 
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})



export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
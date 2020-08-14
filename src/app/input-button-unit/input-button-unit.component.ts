import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input [value]="title" 
           (keyup.enter) = "changeTitleFirst($event)" >
    <button (click)="changeTitleSecond('Button Clicked!')">
    Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  changeTitleFirst(event): void {
    console.log(event);
    this.title = event.target.value; // the original functionality still works
    console.log(this.title);
  }

  changeTitleSecond(newTitle: string): void {
    this.title = newTitle;
  }
}
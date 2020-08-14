import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  template: `
  <p>
    input-button-unit works!
    The title is: {{ title }}
  </p>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello World!";

  constructor() { }

  ngOnInit() {
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `

  <h1>
    Welcome to {{ title }}!
  </h1>
  
  <h1 *ngIf="userLoggedIn">Welcome!</h1>

  <app-input-button-unit></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }}
    </li>
  </ul>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-list';
  userLoggedIn = true;
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}

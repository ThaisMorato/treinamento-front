import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //vazio
  public title: string ='Minhas tarefas'

  /**
   *
   */
  constructor() {
  }

}

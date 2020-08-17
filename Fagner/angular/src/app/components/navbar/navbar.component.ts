import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mode:string = 'list'

  constructor() { }

  ngOnInit(): void {
  }
}


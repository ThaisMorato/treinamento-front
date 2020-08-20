import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model'
import { from } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Mode: AppComponent) { }

  ngOnInit(): void {

  } 
}



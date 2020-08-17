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
  public Href: string = window.location.href
  public mode:string = 'list'

  constructor(private Mode: AppComponent) { }

  ngOnInit(): void {
    if (this.Href == 'http://localhost:4200/change') {
      this.Mode.mode = 'add'
    }
  } 
}



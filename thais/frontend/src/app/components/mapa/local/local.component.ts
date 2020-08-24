import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @Input() selecionado: any;

  constructor() { }

  ngOnInit(): void {
  }

}

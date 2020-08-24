import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { AppService } from 'src/app/app-service.service'
import { InfoLocal } from 'src/models/info-local';

@Component({
  selector: 'app-info-local',
  templateUrl: './info-local.component.html',
  styleUrls: ['./info-local.component.css']
})
export class InfoLocalComponent implements OnInit {

  infoLocal: InfoLocal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService ) { }

  ngOnInit(): void {
    const latlng: string = this.route.snapshot.paramMap.get('latlng');
    this.obterInfoLocal(latlng);
  }

  obterInfoLocal(latlng: string) {
    this.appService.getInfoLocal(latlng).subscribe(
      infoLocal => this.infoLocal = infoLocal as InfoLocal,
      err => {
        alert('Erro obtendo dados.');
        this.router.navigate(['/'])
      }
    )
  }

  back(){
    this.router.navigate(['mapa'])
  }
}

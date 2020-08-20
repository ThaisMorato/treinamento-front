import { Component, OnInit, OnDestroy } from '@angular/core';
import L from 'leaflet';
import { environment as env } from '../../../environments/environment'
import { Local } from '../../../models/local.model'
import { AppService } from 'src/app/app-service.service'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {

  mapa: any;
  locais: Local[]

  constructor(private localService: AppService) { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-16.000030, -51.900967], 4.3);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoon: 19 }).addTo(this.mapa);

    this.localService.getLocais().subscribe(
      dados => {
        this.locais = dados as Local[];
        console.log(this.locais);
      },
      err => alert('Erro ao obter dados')
    )
  }
  ngOnDestroy() {
    this.mapa.invalidateSize();
  }
}

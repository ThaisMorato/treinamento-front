import { Component, OnInit, OnDestroy } from '@angular/core';
import L from 'leaflet';
import { environment as env } from '../../../environments/environment'
import { Local } from '../../../models/local.model'
import { AppService } from 'src/app/app-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {

  mapa: any;
  locais: Local[]

  constructor(
    private router: Router,
    private localService: AppService) { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-16.000030, -51.900967], 4.3);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoon: 19 }).addTo(this.mapa);

    this.localService.getLocais().subscribe(
      dados => {
        this.locais = dados as Local[];
        this.adicionarMarkers();

      },
      err => alert('Erro ao obter dados')
    )
  }
  ngOnDestroy() {
    this.mapa.invalidateSize();
  }

  adicionarMarkers() {
    const markers = []
    this.locais.forEach(local => markers.push(L.marker(local.latlng).addTo(this.mapa)));
    markers.forEach(marker => marker.on('click',
      (e) => this.onMarkerClick(e, this.locais)))
  }

  onMarkerClick(e, locais) {
    const local = locais.find(local =>
      (local.latlng[0] === e.latlng.lat && local.latlng[1] === e.latlng.lng))
    this.router.navigate([`/info-local/${local.latlng}`]); 
  }
}

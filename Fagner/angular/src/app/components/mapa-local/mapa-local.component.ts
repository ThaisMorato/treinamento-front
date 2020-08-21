import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import L from 'leaflet';
import { environment as env } from '../../../environments/environment'

@Component({
  selector: 'app-mapa-local',
  templateUrl: './mapa-local.component.html',
  styleUrls: ['./mapa-local.component.css']
})
export class MapaLocalComponent implements OnInit, OnDestroy {

  @Input() latlng:string;
  @Input() name:string;
  mapa: any;

  constructor() { }

  ngOnInit(): void {
    this.renderizarMapa()
  }

  ngOnDestroy() {
    this.mapa.invalidateSize();
  }

  renderizarMapa() {
    const latlng = this.latlng.split(',')
    this.mapa = L.map('mapa-local').setView(latlng, 13)
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoom: 19 }).addTo(this.mapa)
    L.marker(latlng).addTo(this.mapa).bindPopup(this.name).openPopup()
    L.cicle(latlng, {
      color:'orange',
      fillColor: 'light-blue',
      fillOpacity: 0.35,
      radius: 1000
    }).addTo(this.mapa)
  }
}

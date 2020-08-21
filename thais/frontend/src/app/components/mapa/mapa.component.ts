import { Component, OnInit, OnDestroy } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {

  mapa: any;
  marker: any;

  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-19.9395084, -43.9302112], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, minZoom: 5}).addTo(this.mapa);
    this.marker = L.marker([-19.9395084, -43.9302112]).addTo(this.mapa);
    this.marker.bindPopup("<b>CONCERT</b><br>Technologies").openPopup();
  }

  ngOnDestroy(){
    this.mapa.invalidateSize();
  }

}

import { AreaService } from './area.service';
import { LocalService } from './local.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, OnDestroy {

  mapa: any;

  markerLocal: any;
  markerLocais: any =  [];
  meuslocais: any = [];
  locais: boolean = false;

  markerArea: any;
  markerAreas: any =  [];
  minhasareas: any = [];
  areas: boolean = false;

  selecionado = {
    nome: '',
    descricao: '',
    tipo: ''
  };

  constructor(private localService: LocalService, private areaService: AreaService) { }

  ngOnInit(): void {
    this.mostrarMapa();
    this.localService.buscarLocais().subscribe(meuslocais => {
      this.meuslocais = meuslocais
    });
    this.areaService.buscarAreas().subscribe(minhasareas => {
      this.minhasareas = minhasareas
    });
  }

  ngOnDestroy(){
    this.mapa.invalidateSize();
  }

  mostrarMapa(){
    this.mapa = L.map('mapa').setView([-19.937612,-43.9377179], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, minZoom: 5}).addTo(this.mapa);
  }

  adicionarLocais(){
    this.meuslocais.forEach(local => {
      this.markerLocal = L.marker([local.lat,local.lng]).addTo(this.mapa);
      this.markerLocal.bindPopup(`<b>${local.nome}</b>`);
      this.markerLocais.push(this.markerLocal);
      this.markerLocal.on('click',
        (e) => this.selecionado = {
          nome: local.nome,
          descricao: local.descricao,
          tipo: 'local'
        }
      );
    });
    this.locais = true;
  }

  adicionarAreas(){
    this.minhasareas.forEach(area => {
      this.markerArea = L.circle([area.lat, area.lng], {
        radius: area.radius
        }).addTo(this.mapa);
      this.markerArea.bindPopup(`<b>${area.nome}</b>`);
      this.markerAreas.push(this.markerArea);
      this.markerArea.on('click',
        (e) => this.selecionado = {
          nome: area.nome,
          descricao: area.descricao,
          tipo: 'area'
        }
      );
    });
    this.areas = true;
  }

  removerLocais(){
    this.markerLocais.forEach(markerLocal => {
      this.mapa.removeLayer(markerLocal);
    });
    this.locais = false;
    if(this.selecionado.tipo=='local'){
      this.selecionado = {
        nome: '',
          descricao: '',
          tipo: ''
      }
    }
  }

  removerAreas(){
    this.markerAreas.forEach(markerArea => {
      this.mapa.removeLayer(markerArea);
    });
    this.areas = false;
    if(this.selecionado.tipo=='area'){
      this.selecionado = {
        nome: '',
          descricao: '',
          tipo: ''
      }
    }
  }
}

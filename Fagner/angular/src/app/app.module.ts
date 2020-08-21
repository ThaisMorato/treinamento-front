import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MapaComponent } from './components/mapa/mapa.component';

import { AppRoutingModule } from './app-routing.module';
import { InfoLocalComponent } from './components/info-local/info-local.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { MapaLocalComponent } from './components/mapa-local/mapa-local.component';
import { GraficoComponent } from './components/grafico/grafico.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapaComponent,
    InfoLocalComponent,
    TarefasComponent,
    MapaLocalComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

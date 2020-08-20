import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaComponent } from './components/mapa/mapa.component'
import { InfoLocalComponent } from './components/info-local/info-local.component'
import { TarefasComponent } from './components/tarefas/tarefas.component';

const routes: Routes = [
  { path: '', component: TarefasComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'info-local/:latlng', component: InfoLocalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

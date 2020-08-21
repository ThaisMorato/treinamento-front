import { GraficoComponent } from './components/grafico/grafico.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TarefasComponent } from './components/tarefas/tarefas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TarefasComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'graficos',
    component: GraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoedasCotacoesComponent } from './views/moedas-cotacoes/moedas-cotacoes/moedas-cotacoes.component';

const routes: Routes = [
  {
    path: 'moedas-cotacoes',
    component: MoedasCotacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

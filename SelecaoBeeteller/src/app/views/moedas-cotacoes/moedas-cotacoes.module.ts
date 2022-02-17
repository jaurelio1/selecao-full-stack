import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoedasCotacoesRoutingModule } from './moedas-cotacoes-routing.module';
import { MoedasCotacoesComponent } from './moedas-cotacoes/moedas-cotacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MoedasCotacoesComponent],
  imports: [
    CommonModule,
    MoedasCotacoesRoutingModule,
    SharedModule
  ]
})
export class MoedasCotacoesModule { }

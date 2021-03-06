import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PRIMENG_IMPORTS } from './shared/primeng-imports';
import { MoedasCotacoesModule } from './views/moedas-cotacoes/moedas-cotacoes.module';
import { MoedasCotacoesComponent } from './views/moedas-cotacoes/moedas-cotacoes/moedas-cotacoes.component';
import { MenuComponent } from './views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PRIMENG_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

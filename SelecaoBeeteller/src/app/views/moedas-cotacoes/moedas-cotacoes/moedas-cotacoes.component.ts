import { Component, OnInit } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-moedas-cotacoes',
  templateUrl: './moedas-cotacoes.component.html',
  styleUrls: ['./moedas-cotacoes.component.css']
})
export class MoedasCotacoesComponent implements OnInit {

  valorRealDolar: number = 0.0;
  valorBtcDolar: number = 0.0;
  valorBtcEuro: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}

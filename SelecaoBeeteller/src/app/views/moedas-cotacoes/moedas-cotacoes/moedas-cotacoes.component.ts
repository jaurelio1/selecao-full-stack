import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Cotacao } from 'src/app/components/domain/cotacoes';

interface Moeda{
  name: string,
  code: string
}

@Component({
  selector: 'app-moedas-cotacoes',
  templateUrl: './moedas-cotacoes.component.html',
  styleUrls: ['./moedas-cotacoes.component.css']
})
export class MoedasCotacoesComponent implements OnInit {

  valorRealDolar: number = 0.0;
  valorBtcDolar: number = 0.0;
  valorBtcEuro: number = 0.0;

  moedas: SelectItem[] = [];

  moedaSelecionada: SelectItem = {label: 'USD', value: 'Dolar Americano'};

  cards: Cotacao[];

  constructor() { 
    this.moedas = [
      {label: 'USD', value: 'Dolar Americano'},
      {label: 'EUR', value: 'Euro'},
      {label: 'Btn', value: 'Bitcoin'}
    ]

    this.cards = [
      {moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: 1, data: '10/01/2021'},
      {moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: -2, data: '11/01/2021'},
      {moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: -0.2, data: '12/01/2021'}
    ]

  }

  ngOnInit(): void {
  }

  selecionarDolarAmericano(): boolean{
    console.log(this.moedaSelecionada.value);    
    return (this.moedaSelecionada.value === 'Dolar Americano') ? true : false;
  }
}

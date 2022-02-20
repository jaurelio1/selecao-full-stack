import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Cotacao } from 'src/app/components/domain/cotacoes';

interface Moeda {
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

  alreadyClickedPctChange: boolean = false

  moedas: SelectItem[] = [];

  moedaSelecionada: SelectItem = { label: 'USD', value: 'Dolar Americano' };

  cards: Cotacao[];

  constructor() {
    this.moedas = [
      { label: 'USD', value: 'Dolar Americano' },
      { label: 'EUR', value: 'Euro' },
      { label: 'Btn', value: 'Bitcoin' }
    ]

    this.cards = [
      { moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: 1, data: '10/01/2021' },
      { moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: -2, data: '11/01/2021' },
      { moeda: 'Dolar Americano', minima: 5.5461, maxima: 5.507, variacao: -0.2, data: '12/01/2021' }
    ]

  }

  ngOnInit(): void {
    window.onclick = function (event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }

  selecionarDolarAmericano(): boolean {
    return (this.moedaSelecionada.value === 'Dolar Americano') ? true : false;
  }

  showDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  changeToDolar() {
    if (this.moedaSelecionada.value !== "Dolar Americano") {
      this.moedaSelecionada = { label: 'USD', value: 'Dolar Americano' };
    }
  }

  changeToEuro() {
    if (this.moedaSelecionada.value !== "Euro") {
      this.moedaSelecionada = { label: 'EUR', value: 'Euro' };
    }
  }

  changeToBitcoin() {
    if (this.moedaSelecionada.value !== "Bitcoin") {
      this.moedaSelecionada = { label: 'Btn', value: 'Bitcoin' };
    }
  }

  sortByPctChange(){
    if(this.alreadyClickedPctChange === true){
      this.cards = this.cards.sort((a,b) => b.variacao - a.variacao);
      this.alreadyClickedPctChange = false
    }
    else{
      this.cards = this.cards.sort((a,b) => a.variacao - b.variacao);
      this.alreadyClickedPctChange = true;
    }
  }
}

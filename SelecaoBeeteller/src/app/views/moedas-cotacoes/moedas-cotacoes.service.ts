import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { USDBRL } from 'src/app/components/domain/usdbrl';
import { BTCUSD } from 'src/app/components/domain/btcusd';
import { BTCEUR } from 'src/app/components/domain/btceur';

@Injectable({
  providedIn: 'root'
})
export class MoedasCotacoesService {

  resourceUrl = environment.apiUrl + "/moedas-cotacoes";

  constructor(private httpClient: HttpClient) { }

  getUSDBRL(): Observable<USDBRL> {
    return this.httpClient.get<USDBRL>(this.resourceUrl + "/buscar-moedas-usd-brl", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  getBTCUSD(): Observable<BTCUSD> {
    return this.httpClient.get<BTCUSD>(this.resourceUrl + "/buscar-moedas-btc-usd", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  getBTCEUR(): Observable<BTCEUR> {
    return this.httpClient.get<BTCEUR>(this.resourceUrl + "/buscar-moedas-btc-eur", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }


}

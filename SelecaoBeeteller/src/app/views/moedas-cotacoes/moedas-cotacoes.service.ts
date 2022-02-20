import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { USDBRL } from 'src/app/components/domain/usdbrl';
import { Coin } from 'src/app/components/domain/coin';

@Injectable({
  providedIn: 'root'
})
export class MoedasCotacoesService {

  resourceUrl = environment.apiUrl + "/moedas-cotacoes";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
  });

  constructor(private httpClient: HttpClient) { }

  getUSDBRL(): Observable<USDBRL> {
    // /buscar-moedas-usd-brl
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<USDBRL>(this.resourceUrl + "/buscar-moedas-usd-brl", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }


}

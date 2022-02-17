import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoedasCotacoesService {

  resourceUrl = environment.apiUrl + "/moedas-cotacoes"

  constructor() { }
}

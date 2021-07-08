import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class BaseCalculo {
  v: number = 0
  coef: number = 0
  valorPacela: number = 0
  valorTotal : number = 0
}
@Injectable({
  providedIn: 'root'
})
export class CalculadorParcelasService {

  constructor(private http: HttpClient) { }

  getParcela() {
    return this.http.get<{ baseCalculo: Array<BaseCalculo> }>('./assets/config.json')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
const api = environment.api
@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  _simular = 'SimularPagamento/'
  _cadastroHome = 'CadastroHome/'
  _cadastroEmprestimo = 'CadastroEmprestimo/'
  constructor(private http: HttpClient) { }

  async postSimularPagamento(registro: any) {
    let result
    await this.http.post(api + this._simular, registro).toPromise()
      .then(res => {
        result = res
      }).catch(error => { console.log('erro (postSimularPagamento) => ', error) })
    return result
  }

  async postCadastroHome(registro: any) {
    let result
    await this.http.post(api + this._cadastroHome, registro).toPromise()
      .then(res => {
        result = res
      }).catch(error => { console.log('erro (postCadastroHome) => ', error) })
    return result
  }

  async postCadastroEmprestimo(registro: any) {
    let result
    await this.http.post(api + this._cadastroEmprestimo, registro).toPromise()
      .then(res => {
        result = res
      }).catch(error => { console.log('erro (postCadastroEmprestimo) => ', error) })
    return result
  }

}

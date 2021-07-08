import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoDigitalBmgComponent } from './pages/contato-digital-bmg/contato-digital-bmg.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EmprestimoCartaoCreditoComponent } from './pages/emprestimo-cartao-credito/emprestimo-cartao-credito.component';
import { EmprestimoConsignadoComponent } from './pages/emprestimo-consignado/emprestimo-consignado.component';
import { HomeComponent } from './pages/home/home.component';
import { ParcelamentoBoletoComponent } from './pages/parcelamento-boleto/parcelamento-boleto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parcelamentoBoleto', component: ParcelamentoBoletoComponent },
  { path: 'contatoDigitalBMG', component: ContatoDigitalBmgComponent },
  { path: 'emprestimoCartaoCredito', component: EmprestimoCartaoCreditoComponent },
  { path: 'emprestimoConsignado', component: EmprestimoConsignadoComponent },
  // { path: 'contato', component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoDigitalBmgComponent } from './pages/contato-digital-bmg/contato-digital-bmg.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EmprestimoCartaoCreditoComponent } from './pages/emprestimo-cartao-credito/emprestimo-cartao-credito.component';
import { EmprestimoConsignadoComponent } from './pages/emprestimo-consignado/emprestimo-consignado.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ParcelamentoBoletoComponent } from './pages/parcelamento-boleto/parcelamento-boleto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CalculadorParcelasService } from './service/calculador-parcelas.service';
import { CadastroService } from './service/cadastro.service';
import { NgxCurrencyModule, CurrencyMaskConfig } from "ngx-currency";
import { EmailService } from './service/email.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ParcelamentoBoletoComponent,
    ContatoDigitalBmgComponent,
    EmprestimoCartaoCreditoComponent,
    EmprestimoConsignadoComponent,
    ContatoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxCurrencyModule
  ],
  providers: [CalculadorParcelasService, CadastroService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

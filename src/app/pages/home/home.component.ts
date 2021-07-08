import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CadastroService } from 'src/app/service/cadastro.service';
import { BaseCalculo, CalculadorParcelasService } from 'src/app/service/calculador-parcelas.service';
import { EmailService } from 'src/app/service/email.service';
import '../../../assets/js/smtp.js';
declare let Email: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form_cadastro!: FormGroup
  form_simular!: FormGroup;
  perguntas = [
    { id: 1, pergunta: "Quais tipos de boletos posso pagar?", resposta: "Todos os tipos de conta que possua código de barras. Ex: luz, água, telefone, cartão de crédito, aluguel,condomínio, prestações de carro ou moto, IPVA, IPTU, INSS, multas, mensalidade escolar, plano de saúde, etc,em até 12 vezes." },
    { id: 2, pergunta: "Em quanto tempo o boleto é quitado?", resposta: "O boleto poderá ser quitado em até dois dias úteis." },
    { id: 3, pergunta: "Quanto custa abrir sua Conta Digital BMG?", resposta: "Não tem custo, é GRATUITA. Abra agora, sem consulta ao SPC E SERASA!" },
    { id: 4, pergunta: "Tem mais alguma dúvida?", resposta: "Entre em contato com nossos canais de atendimento:contato@ufatapago.com.bro ou Whatsapp: (12) 9xxxx-xxxx" }
  ];
  
  activeResponsta: number = 0
  parcelas: BaseCalculo[] = [];
  listParcelas: BaseCalculo[] = [];
  constructor(
    private form: FormBuilder,
    private service: CadastroService,
    private _parcela: CalculadorParcelasService,
    private toast: ToastrService,
    private _email: EmailService
  ) { }

  ngOnInit(): void {
    this.creatForm()
    this.getParcelas()
  }
  getParcelas() {
    this._parcela.getParcela().toPromise()
      .then((res) => {
        this.parcelas = res.baseCalculo
      })
  }
  teste() {
    console.log('click')
    this._email.send()
  }
  calcular(base: any) {
    let coef = parseFloat(base.target.value)
    console.log(coef)
  }
  creatForm() {
    this.form_simular = this.form.group({
      vencimento: new FormControl('', Validators.required),
      valorBoleto: new FormControl('', Validators.required),
      parcela: new FormControl('', Validators.required)
    })

    this.form_cadastro = this.form.group({
      nome: new FormControl(),
      sobNome: new FormControl(),
      cpf: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),
      aceite: new FormControl(),
    })

  }
  async simularPagamento() {
    if (this.form_simular.invalid) {
      this.toast.error('Preencha todos os campos para simular sua parcela')
      return
    }
    let registro = this.form_simular.value



    let response = await this.service.postSimularPagamento(registro)
    if (response) {
      this.toast.success('Request success')
    } else {
      this.toast.error('Request erro')
    }
  }
  async cadastrar() {
    // Email.send({
    //   Host : 'mail.ufatapago.com.br',
    //   Username : 'contato@ufatapago.com.br',
    //   Password : 'Senha@123',
    //   To : 'hilton@tcavalcanti.com.br',
    //   From : 'contato@ufatapago.com.br',
    //   Subject : 'xxxxx',
    //   Body : `
    //   <i>This is sent as a feedback from my resume page.<br><br> <b>~End of Message.~</b> `
    //   })
    let registro = this.form_cadastro.value
    console.log(registro)
    let response = await this.service.postCadastroHome(registro)
    if (response) {
      this.toast.success('Email Enviado')
    } else {
      this.toast.error('Erro ao enviar email')
    }
  }
  calcularParcela() {
    const getValue = this.form_simular.get('valorBoleto')!.value
    console.log(getValue)
    const valorBoleto = parseFloat(getValue)
    // const coeficiente = parseFloat(registro.parcela)

    const listParcela = this.parcelas
    listParcela.forEach(value => {
      const coeficiente = value.coef
      value.valorPacela = Number((valorBoleto * coeficiente).toFixed(2))
      value.valorTotal = Number((value.v * value.valorPacela).toFixed(2))
    })
    this.listParcelas = listParcela
    this.parcelas = listParcela
    return listParcela

  }

}

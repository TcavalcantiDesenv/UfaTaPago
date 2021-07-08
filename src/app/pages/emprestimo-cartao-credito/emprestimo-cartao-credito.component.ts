import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-emprestimo-cartao-credito',
  templateUrl: './emprestimo-cartao-credito.component.html',
  styleUrls: ['./emprestimo-cartao-credito.component.scss']
})
export class EmprestimoCartaoCreditoComponent implements OnInit {
  form_cadastro: any;

  constructor(private form: FormBuilder, private service: CadastroService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.creatForm()
  }
  creatForm() {
    this.form_cadastro = this.form.group({
      nome: new FormControl(),
      email: new FormControl(),
      telefone1: new FormControl(),
      telefone2: new FormControl(),
    })

  }
  async cadastrar() {
    let registro = this.form_cadastro.value
    console.log(registro)
    let response = await this.service.postCadastroEmprestimo(registro)
    if (response) {
      this.toast.success('Request success')
    } else {
      this.toast.error('Request erro')
    }
  }

}

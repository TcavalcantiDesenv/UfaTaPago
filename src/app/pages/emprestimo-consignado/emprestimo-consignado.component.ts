import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo-consignado',
  templateUrl: './emprestimo-consignado.component.html',
  styleUrls: ['./emprestimo-consignado.component.scss']
})
export class EmprestimoConsignadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nav(link : string){
    window.location.href = link
  }

}

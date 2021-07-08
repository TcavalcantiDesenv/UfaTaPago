import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit , OnChanges {
  @Input('expandMenu') expandMenu = false

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log('acionou')
  }

}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-digital-bmg',
  templateUrl: './contato-digital-bmg.component.html',
  styleUrls: ['./contato-digital-bmg.component.scss']
})
export class ContatoDigitalBmgComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  innerWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  nav(url: string) {
    window.open(url, '_blank');
  }
}

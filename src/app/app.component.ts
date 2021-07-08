import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  expandMenu = false
  refresh = false
  teste(){
    this.refresh = true
    setTimeout(()=>this.refresh = false,100)
    
    console.log('passou',this.expandMenu)
  }
}

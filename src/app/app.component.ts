import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { InicioComponent } from "./components/inicio/inicio.component";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiori';


  scrollTop(){
  document.documentElement.scrollTop = 0;

 }
}

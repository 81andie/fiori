import { haikusMusicados } from './interfaces/poem.interface';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from "./components/inicio/inicio.component";
import { CommonModule } from '@angular/common';
import { CardHaikusMusicadosComponent } from "./components/card-haikus-musicados/card-haikus-musicados.component";
import { HaikusMusicadosComponent } from "./components/haikus-musicados/haikus-musicados.component";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, CommonModule, CardHaikusMusicadosComponent, HaikusMusicadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiori';

 
  scrollTop() {
    document.documentElement.scrollTop = 0;
  }



}

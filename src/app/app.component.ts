import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HaikusComponent } from "./components/haikus/haikus.component";
import { SobreMiComponent } from "./components/sobre-mi/sobre-mi.component";
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { HaikusMusicadosComponent } from "./components/haikus-musicados/haikus-musicados.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, HaikusComponent, SobreMiComponent, CabeceraComponent, HaikusMusicadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiori';
}

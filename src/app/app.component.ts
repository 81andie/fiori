import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { InicioComponent } from "./components/inicio/inicio.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { HeroComponent } from "./components/hero/hero.component";
import { SobreMiComponent } from "./components/sobre-mi/sobre-mi.component";
import { HaikusComponent } from "./components/haikus/haikus.component";
import { CuentosMusicalesComponent } from "./components/cuentos-musicales/cuentos-musicales.component";
import { HaikusMusicadosComponent } from "./components/haikus-musicados/haikus-musicados.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InicioComponent, NavbarComponent, FooterComponent, CabeceraComponent, HeroComponent, SobreMiComponent, HaikusComponent, CuentosMusicalesComponent, HaikusMusicadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiori';
}

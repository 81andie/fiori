import { Component } from '@angular/core';


import { RouterModule } from '@angular/router';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";
import { HaikusComponent } from "../haikus/haikus.component";
import { HaikusMusicadosComponent } from "../haikus-musicados/haikus-musicados.component";
import { PoemasComponent } from "../poemas/poemas.component";
import { CuentosMusicalesComponent } from "../cuentos-musicales/cuentos-musicales.component";
import { MorganComponent } from "../morgan/morgan.component";

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, CabeceraComponent, SobreMiComponent, NavbarComponent, HeroComponent, FooterComponent, HaikusComponent, HaikusMusicadosComponent, PoemasComponent, CuentosMusicalesComponent, MorganComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

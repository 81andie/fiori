import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { HeroComponent } from "../hero/hero.component";
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { HaikusComponent } from "../haikus/haikus.component";
import { HaikusMusicadosComponent } from "../haikus-musicados/haikus-musicados.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-inicio',
  imports: [CardComponent, CabeceraComponent, HeroComponent, SobreMiComponent, HaikusComponent, HaikusMusicadosComponent, FooterComponent, NavbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

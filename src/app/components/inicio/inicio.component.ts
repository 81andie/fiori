import { Component } from '@angular/core';


import { RouterModule } from '@angular/router';
import { CabeceraComponent } from "../cabecera/cabecera.component";
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";
import { PoemasComponent } from "../poemas/poemas.component";
import { HaikusComponent } from "../haikus/haikus.component";
import { HaikusMusicadosComponent } from "../haikus-musicados/haikus-musicados.component";
import { MorganComponent } from "../morgan/morgan.component";
import { TiamatComponent } from "../tiamat/tiamat.component";
import { HaikusGeishasComponent } from "../haikus-geishas/haikus-geishas.component";




@Component({
  selector: 'app-inicio',
  imports: [RouterModule, PoemasComponent, HeroComponent, HaikusComponent, HaikusMusicadosComponent, MorganComponent, TiamatComponent, SobreMiComponent, CabeceraComponent, HaikusGeishasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

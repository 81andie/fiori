import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";
import { PoemasComponent } from "../poemas/poemas.component";
import { HaikusComponent } from "../haikus/haikus.component";
import { HaikusMusicadosComponent } from "../haikus-musicados/haikus-musicados.component";
import { HaikusGeishasComponent } from "../haikus-geishas/haikus-geishas.component";





@Component({
  selector: 'app-inicio',
  imports: [RouterModule, PoemasComponent, HeroComponent, HaikusComponent, HaikusMusicadosComponent, SobreMiComponent, FooterComponent, HaikusGeishasComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

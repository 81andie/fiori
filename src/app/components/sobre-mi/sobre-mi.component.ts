import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { CabeceraComponent } from "../cabecera/cabecera.component";

@Component({
  selector: 'app-sobre-mi',
  imports: [HeroComponent, CabeceraComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

}

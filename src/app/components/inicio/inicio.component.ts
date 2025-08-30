import { poemsLarge } from './../../interfaces/poemsLarge.interface';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from "../sobre-mi/sobre-mi.component";
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";

import { HaikusComponent } from "../haikus/haikus.component";

import { HaikusGeishasComponent } from "../haikus-geishas/haikus-geishas.component";
import { MilfullnessPoemsComponent } from "../milfullness-poems/milfullness-poems.component";

import { MindFullnessService } from '../../services/MindFullness.service';

import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { PoemasLargosService } from '../../services/poemasLargos.service';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';
import { CommonModule } from '@angular/common';
import { VersesPageComponent } from "../verses-page/verses-page.component";
import { CaligramaComponent } from "../caligrama/caligrama.component";










@Component({
  selector: 'app-inicio',
  imports: [RouterModule, HeroComponent, HaikusComponent, SobreMiComponent, FooterComponent, HaikusGeishasComponent, CommonModule, VersesPageComponent, MilfullnessPoemsComponent, CaligramaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {



}

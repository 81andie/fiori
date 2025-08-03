import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HaikusComponent } from './components/haikus/haikus.component';
import { HaikusMusicadosComponent } from './components/haikus-musicados/haikus-musicados.component';

import { PoemasComponent } from './components/poemas/poemas.component';
import { PoemasMusicadosComponent } from './components/poemas-musicados/poemas-musicados.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HaikusGeishasComponent } from './components/haikus-geishas/haikus-geishas.component';
import { PoemasLargosComponent } from './components/poemas-largos/poemas-largos.component';
import { MorganComponent } from './components/morgan/morgan.component';
import { TiamatComponent } from './components/tiamat/tiamat.component';
import { MilfullnessPoemsComponent } from './components/milfullness-poems/milfullness-poems.component';


export const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Haikus', component: HaikusComponent },
  { path: 'HaikusMusicados', component: HaikusMusicadosComponent },
  { path: 'HaikusGeishas', component: HaikusGeishasComponent },
  { path: 'Poemas', component: PoemasComponent },
  { path: 'Poemasmusicados', component: PoemasMusicadosComponent },
  { path: 'PoemasLargos', component: PoemasLargosComponent },
  
  { path: 'Morgan', component: MorganComponent },
  { path: 'Tiamat', component: TiamatComponent },
   { path: 'MilfullnessPoems', component: MilfullnessPoemsComponent },
  { path: 'Sobremi', component: SobreMiComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

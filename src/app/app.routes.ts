import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HaikusComponent } from './components/haikus/haikus.component';
import { HaikusMusicadosComponent } from './components/haikus-musicados/haikus-musicados.component';
import { PoemasMusicadosComponent } from './components/poemas-musicados/poemas-musicados.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HaikusGeishasComponent } from './components/haikus-geishas/haikus-geishas.component';
import { MorganComponent } from './components/morgan/morgan.component';
import { TiamatComponent } from './components/tiamat/tiamat.component';
import { VersesPageComponent } from './components/verses-page/verses-page.component';
import { MilfullnessPoemsComponent } from './components/milfullness-poems/milfullness-poems.component';
import { CaligramaComponent } from './components/caligrama/caligrama.component';



export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'haikus', component: HaikusComponent },
  { path: 'haikus-musicados', component: HaikusMusicadosComponent },
  { path: 'haikus-geishas', component: HaikusGeishasComponent },
  { path: 'poemas-musicados', component: PoemasMusicadosComponent },
  { path: 'morgan', component: MorganComponent },
  {path: 'mindfullness', component:MilfullnessPoemsComponent},
  { path: 'tiamat', component: TiamatComponent },
  { path: 'verses', component: VersesPageComponent },
   { path: 'caligrama', component: CaligramaComponent },
  { path: 'sobremi', component: SobreMiComponent },




  // Redirección por defecto
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Ruta comodín
  { path: '**', redirectTo: 'inicio' }
];


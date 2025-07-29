import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HaikusComponent } from './components/haikus/haikus.component';
import { HaikusMusicadosComponent } from './components/haikus-musicados/haikus-musicados.component';
import { CuentosMusicalesComponent } from './components/cuentos-musicales/cuentos-musicales.component';
import { PoemasComponent } from './components/poemas/poemas.component';
import { PoemasMusicadosComponent } from './components/poemas-musicados/poemas-musicados.component';

export const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'haikus', component: HaikusComponent },
  { path: 'haikus musicados', component: HaikusMusicadosComponent },
  { path: 'poemas', component: PoemasComponent },
   { path: 'poemas musicados', component: PoemasMusicadosComponent },
  { path: 'cuentos', component: CuentosMusicalesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

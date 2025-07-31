import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HaikusComponent } from './components/haikus/haikus.component';
import { HaikusMusicadosComponent } from './components/haikus-musicados/haikus-musicados.component';
import { CuentosMusicalesComponent } from './components/cuentos-musicales/cuentos-musicales.component';
import { PoemasComponent } from './components/poemas/poemas.component';
import { PoemasMusicadosComponent } from './components/poemas-musicados/poemas-musicados.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

export const routes: Routes = [

  { path: 'Inicio', component: InicioComponent },
  { path: 'Poemas', component: PoemasComponent },
  { path: 'Haikus', component: HaikusComponent },
  { path: 'Haikus con musica', component: HaikusMusicadosComponent },
   { path: 'poemas musicados', component: PoemasMusicadosComponent },
  { path: 'Cuentos', component: CuentosMusicalesComponent },
    { path: 'Sobre mi', component: SobreMiComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

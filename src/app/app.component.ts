import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { HaikusComponent } from "./components/haikus/haikus.component";
import { SobreMiComponent } from "./components/sobre-mi/sobre-mi.component";
import { CabeceraComponent } from "./components/cabecera/cabecera.component";
import { HaikusMusicadosComponent } from "./components/haikus-musicados/haikus-musicados.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent, HaikusComponent, SobreMiComponent, CabeceraComponent, HaikusMusicadosComponent, FooterComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fiori';
}

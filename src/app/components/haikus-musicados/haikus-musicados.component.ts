
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, inject, OnDestroy, Inject, PLATFORM_ID, OnInit, Input, } from '@angular/core';
import { haikusMusicados } from '../../interfaces/poem.interface';

import { CardHaikusMusicadosComponent } from '../card-haikus-musicados/card-haikus-musicados.component';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { CardReproductorComponent } from "../card-reproductor/card-reproductor.component";



@Component({
  selector: 'app-haikus-musicados',
  imports: [CommonModule, CardReproductorComponent],
  templateUrl: './haikus-musicados.component.html',
  styleUrl: './haikus-musicados.component.css'
})
export class HaikusMusicadosComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.getHaikusMusicadosSongs();
  }
  public audioPlayerService = inject(AudioPlayerService)
  public audiohaikus: haikusMusicados[] = [];



  getHaikusMusicadosSongs() {
    this.audioPlayerService.getHaikusWidthAudios().subscribe((data) => {
      console.log(data)
      this.audiohaikus = data;
      console.log(data)
    });
  }

}

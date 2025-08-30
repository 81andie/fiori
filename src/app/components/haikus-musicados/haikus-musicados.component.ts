
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, inject, OnDestroy, Inject, PLATFORM_ID, OnInit, } from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';

import { Subscription } from 'rxjs';
import { CardHaikusMusicadosComponent } from '../card-haikus-musicados/card-haikus-musicados.component';



@Component({
  selector: 'app-haikus-musicados',
  imports: [CommonModule, CardHaikusMusicadosComponent],
  templateUrl: './haikus-musicados.component.html',
  styleUrl: './haikus-musicados.component.css'
})
export class HaikusMusicadosComponent implements OnInit{

 constructor() {

   }

   ngOnInit(): void {
     this.getHaikusMusicadosSongs();
   }

   private AudioPlayerService = inject(HaikusService)
   public Audiohaikus: haikusMusicados[] = [];


   getHaikusMusicadosSongs() {
     this.AudioPlayerService.getHaikusMusicados().subscribe((data) => {
       console.log(data)
       this.Audiohaikus = data;
       console.log(data)
     });

   }


}

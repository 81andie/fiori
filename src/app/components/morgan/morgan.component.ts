
import { MorganCardComponent } from '../morgan-card/morgan-card.component';
import { Component, ElementRef, AfterViewInit, inject, ViewChild, OnInit } from '@angular/core';
import { MorganAudioPlayer } from '../../interfaces/MorganAudioPlayer.interface';
import { MorganAudioPlayerService } from '../../services/Morgan.service';
import { CommonModule } from '@angular/common';
import { JuegoUkeleleComponent } from "../juego-ukelele/juego-ukelele.component";




@Component({
  selector: 'app-morgan',
  imports: [CommonModule, MorganCardComponent, JuegoUkeleleComponent],
  templateUrl: './morgan.component.html',
  styleUrl: './morgan.component.css'
})
export class MorganComponent {


  constructor() {

  }
  ngOnInit(): void {
    this.getMorganNarrations();
  }

  private MorganAudioPlayer = inject(MorganAudioPlayerService)
  public MorganNarrations: MorganAudioPlayer[] = [];


  getMorganNarrations() {
    this.MorganAudioPlayer.getAudioPlayerMorgan().subscribe((data) => {
      console.log(data)
      this.MorganNarrations = data;
    });

  }

}

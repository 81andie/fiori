
import { Component, ElementRef, AfterViewInit, inject, ViewChild, OnInit } from '@angular/core';
import { AudioServiceCover } from '../../services/AudioServiceCovers.service';
import { coverCardAudios } from '../../interfaces/coverCardAudio.interface';
import { CommonModule } from '@angular/common';
import { CardReproductorComponent } from '../card-reproductor/card-reproductor.component';

@Component({
  selector: 'app-covers',
  imports: [CommonModule, CardReproductorComponent],
  templateUrl: './covers.component.html',
  styleUrl: './covers.component.css'
})
export class CoversComponent implements OnInit {

  constructor(){

  }

  ngOnInit():void{
this.getCoverSongs()
  }

  private CoversAudioPlayer = inject(AudioServiceCover)
  public audioCovers: coverCardAudios[]=[]

  getCoverSongs(){
    this.CoversAudioPlayer.getAudioPlayerCovers().subscribe((data)=>{
      console.log(data)
      this.audioCovers=data
    })
  }

}

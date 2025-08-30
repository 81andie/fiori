import { CardTiamatAudioComponent } from './../card-tiamat-audio/card-tiamat-audio.component';

import { Component, ElementRef, AfterViewInit, inject, ViewChild, OnInit } from '@angular/core';

import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { tiamatAudioPlayer } from '../../interfaces/tiamat.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-tiamat',
  imports: [CommonModule, CardTiamatAudioComponent],
  templateUrl: './tiamat.component.html',
  styleUrl: './tiamat.component.css'
})
export class TiamatComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    this.getTiamatSongs();
  }

  private TiamatAudioPlayer = inject(TiamatAudioPlayerService)
  public AudioTiamat: tiamatAudioPlayer[] = [];


  getTiamatSongs() {
    this.TiamatAudioPlayer.getAudioPlayerTiamat().subscribe((data) => {
      console.log(data)
      this.AudioTiamat = data;
    });
  }


}



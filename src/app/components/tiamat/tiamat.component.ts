
import { Component, ElementRef, AfterViewInit, inject, ViewChild, OnInit } from '@angular/core';

import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { tiamatAudioPlayer } from '../../interfaces/tiamat.interface';
import { CommonModule } from '@angular/common';
import { CardReproductorComponent } from "../card-reproductor/card-reproductor.component";
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";


@Component({
  selector: 'app-tiamat',
  imports: [CommonModule, CardReproductorComponent,PdfJsViewerModule],
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



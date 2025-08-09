import { CardTiamatAudioComponent } from './../card-tiamat-audio/card-tiamat-audio.component';

import { Component, ElementRef, AfterViewInit, inject, ViewChild, OnInit } from '@angular/core';

import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { tiamatAudioPlayer } from '../../interfaces/tiamat.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tiamat',
  imports: [ CommonModule, CardTiamatAudioComponent],
  templateUrl: './tiamat.component.html',
  styleUrl: './tiamat.component.css'
})
export class TiamatComponent implements AfterViewInit, OnInit{

  constructor() {

  }
  ngOnInit(): void {
this.getTiamatSongs();
  }

  private TiamatAudioPlayer = inject(TiamatAudioPlayerService)
  public AudioTiamat: tiamatAudioPlayer[] = [];


  private isScrolling = false;
  @ViewChild('scrollContainerTiamat', { static: true }) scrollContainerTiamat!: ElementRef<HTMLElement>;


  ngAfterViewInit(): void {

    const container = this.scrollContainerTiamat.nativeElement;
    container.addEventListener('wheel', (event) => this.onWheel(event), { passive: false });


  }


  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;
    this.isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const scrollWidth = window.innerWidth;

    const currentScroll = this.scrollContainerTiamat.nativeElement.scrollLeft;
    const nextScroll = Math.round((currentScroll + direction * scrollWidth) / scrollWidth) * scrollWidth;

    this.scrollContainerTiamat.nativeElement.scrollTo({
      left: nextScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 600);
  }

    getTiamatSongs() {
    this.TiamatAudioPlayer.getAudioPlayerTiamat().subscribe((data) => {
      console.log(data)
      this.AudioTiamat = data;
    });

  }


}




import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { tiamatAudioPlayer } from './../../interfaces/tiamat.interface';
import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { AudioService } from '../../services/Audio.service';
import { TiamatComponent } from '../tiamat/tiamat.component';
import { map, Observable, take } from 'rxjs';




@Component({
  selector: 'app-card-tiamat-audio',
  imports: [CommonModule],
  templateUrl: './card-tiamat-audio.component.html',
  styleUrl: './card-tiamat-audio.component.css'
})
export class CardTiamatAudioComponent<T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges {


  @Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;


  public allAudios: T[] = [];
  public tiamatAudios: T[] = [];
  currentTrack?: T;
  public currentTrackIndex: number = 0; // Añade esto
  public playList: T[] = []; // Añade esto


  isVisible: boolean = true;

  constructor(
    private TiamatAudioPlayerService: TiamatAudioPlayerService,
    private AudioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (this.audios?.length) {
      this.allAudios = [...this.audios];
      this.tiamatAudios = [...this.audios];
      this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);
      this.updateCurrentTrack();
      this.sacarAudiosyHaikus();
    } else {
      this.sacarAudiosyHaikus();
    }
  }

  ngAfterViewInit(): void {
    if (this.waveformRef?.nativeElement) {
      this.AudioService.initWaveSurfer('tiamat', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.tiamatAudios = [...this.audios];
      this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);

      if (this.waveformRef?.nativeElement) {
        this.AudioService.initWaveSurfer('tiamat', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }

  sacarAudiosyHaikus(): void {
    this.TiamatAudioPlayerService.getAudioPlayerTiamat()
      .pipe(take(1))
      .subscribe((data: tiamatAudioPlayer[]) => {
        const typedData = data as unknown as T[];
        if (!typedData?.length) return;

        this.allAudios = [...typedData];
        this.tiamatAudios = [...typedData];

        this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);

        // 👉 si quieres empezar en aleatorio
        const randomIndex = Math.floor(Math.random() * typedData.length);
        this.AudioService.playTrack('tiamat', randomIndex);

        this.updateCurrentTrack();
      });

  }




  play() {
    this.AudioService.playPause('tiamat');
    this.updateCurrentTrack();

  }

  next() {
    this.AudioService.nextTrack('tiamat');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.AudioService.previousTrack('tiamat');
    this.updateCurrentTrack();
  }




  updateCurrentTrack() {
    this.currentTrack = this.AudioService.getCurrentTrack<T>('tiamat');
    this.currentTrackIndex = this.tiamatAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.tiamatAudios; // Actualiza la lista
  }

  toggleAudio() {
    this.isVisible = !this.isVisible;
  }


selectTrack(index: number) {
 this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);

  // Usa el método que ya tienes en el servicio
  this.AudioService.playTrack('tiamat', index);

  // Refresca el estado local para marcar en la UI
  this.currentTrackIndex = index;
  this.currentTrack = this.tiamatAudios[index];
}



}

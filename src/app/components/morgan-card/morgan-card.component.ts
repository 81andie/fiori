
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MorganAudioPlayerService } from '../../services/Morgan.service';
import { MorganAudioPlayer } from '../../interfaces/MorganAudioPlayer.interface';
import { AudioService } from '../../services/Audio.service';
import { MorganComponent } from '../morgan/morgan.component';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-morgan-card',
  imports: [CommonModule],
  templateUrl: './morgan-card.component.html',
  styleUrl: './morgan-card.component.css'
})
export class MorganCardComponent<T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges {

  @Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;

  public allAudios: T[] = [];
  public MorganAudios: T[] = [];

  currentTrack?: T;
  public currentTrackIndex: number = 0;
  public playList: T[] = [];


  isVisible: boolean = true;

  constructor(
    private MorganAudioPlayerService: MorganAudioPlayerService,
    private AudioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  ngOnInit(): void {
    if (this.audios?.length) {
         this.allAudios = [...this.audios];
         this.MorganAudios = [...this.audios];
         this.AudioService.setPlaylist<T>('tiamat', this.MorganAudios);
         this.updateCurrentTrack();
         this.sacarNarraciones();
       } else {
         this.sacarNarraciones();
       }
  }
  ngAfterViewInit(): void {
      if (this.waveformRef?.nativeElement) {
      this.AudioService.initWaveSurfer('morgan', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.MorganAudios = [...this.audios];
      this.AudioService.setPlaylist<T>('morgan', this.MorganAudios);

      if (this.waveformRef?.nativeElement) {
        this.AudioService.initWaveSurfer('morgan', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }


sacarNarraciones(): void {
    this.MorganAudioPlayerService.getAudioPlayerTiamat()
    .pipe(take(1))
    .subscribe((data: MorganAudioPlayer[]) => {
      const typedData = data as unknown as T[];
      if (!typedData?.length) return;

      this.allAudios = [...typedData];
      this.MorganAudios= [...typedData];

      this.AudioService.setPlaylist<T>('morgan', this.MorganAudios);

      // 👉 Solo elegir el actual, NO reproducir todavía
      const randomIndex = Math.floor(Math.random() * typedData.length);
      this.currentTrack = this.MorganAudios[randomIndex];
      this.currentTrackIndex = randomIndex;

      this.updateCurrentTrack();
    });
  }


   play() {
    this.AudioService.playPause('morgan');
    this.updateCurrentTrack();

  }

  next() {
    this.AudioService.nextTrack('morgan');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.AudioService.previousTrack('morgan');
    this.updateCurrentTrack();
  }




  updateCurrentTrack() {
    this.currentTrack = this.AudioService.getCurrentTrack<T>('morgan');
    this.currentTrackIndex = this.MorganAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.MorganAudios; // Actualiza la lista
  }

  toggleAudio() {
    this.isVisible = !this.isVisible;
  }


selectTrack(index: number) {
 this.AudioService.setPlaylist<T>('tiamat', this.MorganAudios);

  // Usa el método que ya tienes en el servicio
  this.AudioService.playTrack('tiamat', index);

  // Refresca el estado local para marcar en la UI
  this.currentTrackIndex = index;
  this.currentTrack = this.MorganAudios[index];
}




}

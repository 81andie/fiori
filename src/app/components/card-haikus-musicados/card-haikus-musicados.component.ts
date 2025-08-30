import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { HaikusService } from '../../services/haikus.service';
import { AudioService } from '../../services/Audio.service';
import { CommonModule } from '@angular/common';
import { HaikusComponent } from '../haikus/haikus.component';
import { AudioPlayerService } from '../../services/AudioPlayer.service';

@Component({
  selector: 'app-card-haikus-musicados',
  imports: [CommonModule],
  templateUrl: './card-haikus-musicados.component.html',
  styleUrl: './card-haikus-musicados.component.css'
})
export class CardHaikusMusicadosComponent<T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges {

  @Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;

  public allAudios: T[] = [];
  public haikusAudios: T[] = [];
  currentTrack?: T;

  public currentTrackIndex: number = 0;
  public playList: T[] = [];

  isVisible: boolean = true;


  constructor(
    private haikusMusicService: AudioPlayerService,
    private audioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }




  ngOnInit(): void {

    if (this.audios?.length) {
      this.allAudios= [...this.audios];
      this.haikusAudios = [...this.audios];
      this.audioService.setPlaylist<T>('haikus', this.haikusAudios);
      this.updateCurrentTrack();
      this.sacarAudiosHaikus();

    }

  }

  ngAfterViewInit(): void {
    if (this.waveformRef?.nativeElement) {
      this.audioService.initWaveSurfer('haikus', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.haikusAudios = [...this.audios];
      this.audioService.setPlaylist<T>('haikus', this.haikusAudios);

      if (this.waveformRef?.nativeElement) {
        this.audioService.initWaveSurfer('haikus', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }




  sacarAudiosHaikus() {
    this.haikusMusicService.getHaikusWidthAudios()
      .pipe(take(1))

      .subscribe((data: haikusMusicados[]) => {
        const typedData = data as unknown as T[];
        if (!typedData?.length) return;

        this.allAudios = [...typedData];
        this.haikusAudios = [...typedData];

        this.audioService.setPlaylist<T>('haikus', this.haikusAudios);
        console.log(this.audios)

        // 👉 si quieres empezar en aleatorio
        const randomIndex = Math.floor(Math.random() * typedData.length);
        this.audioService.playTrack('haikus', randomIndex);

        this.updateCurrentTrack();
      });


  }



  play() {
    this.audioService.playPause('haikus');
    this.updateCurrentTrack();

  }

  next() {
    this.audioService.nextTrack('haikus');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.audioService.previousTrack('haikus');
    this.updateCurrentTrack();
  }




  updateCurrentTrack() {
    this.currentTrack = this.audioService.getCurrentTrack<T>('haikus');
    this.currentTrackIndex = this.haikusAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.haikusAudios; // Actualiza la lista
  }



  selectTrack(index: number) {
    this.audioService.setPlaylist<T>('haikus', this.haikusAudios);

    // Usa el método que ya tienes en el servicio
    this.audioService.playTrack('haikus', index);

    // Refresca el estado local para marcar en la UI
    this.currentTrackIndex = index;
    this.currentTrack = this.haikusAudios[index];
  }

 toggleAudio() {
    this.isVisible = !this.isVisible;
  }

}

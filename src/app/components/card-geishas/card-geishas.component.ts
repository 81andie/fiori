import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { take } from 'rxjs';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioService } from '../../services/Audio.service';
import { GeishasVersesService } from '../../services/geishas.service';
import { GeishesVerses } from '../../interfaces/geishas.interface';


@Component({
  selector: 'app-card-geishas',
  imports: [CommonModule],
  templateUrl: './card-geishas.component.html',
  styleUrl: './card-geishas.component.css'
})
export class CardGeishasComponent <T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges {

  @Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;

  public allAudios: T[] = [];
  public geishasAudios: T[] = [];
  currentTrack?: T;

  public currentTrackIndex: number = 0;
  public playList: T[] = [];

  isVisible: boolean = true;


  constructor(
    private haikusGeishasMusicService: GeishasVersesService,
    private audioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }




  ngOnInit(): void {

    if (this.audios?.length) {
      this.allAudios= [...this.audios];
      this.geishasAudios = [...this.audios];
      this.audioService.setPlaylist<T>('geishas', this.geishasAudios);
      this.updateCurrentTrack();
      this.sacarAudiosHaikus();

    }

  }

  ngAfterViewInit(): void {
    if (this.waveformRef?.nativeElement) {
      this.audioService.initWaveSurfer('geishas', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.geishasAudios = [...this.audios];
      this.audioService.setPlaylist<T>('geishas', this.geishasAudios);

      if (this.waveformRef?.nativeElement) {
        this.audioService.initWaveSurfer('geishas', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }




  sacarAudiosHaikus() {
    this.haikusGeishasMusicService.getVersesGeishas()
      .pipe(take(1))

      .subscribe((data: GeishesVerses[]) => {
        const typedData = data as unknown as T[];
        if (!typedData?.length) return;

        this.allAudios = [...typedData];
        this.geishasAudios = [...typedData];

        this.audioService.setPlaylist<T>('geishas', this.geishasAudios);
        console.log(this.audios)

        // 👉 si quieres empezar en aleatorio
        const randomIndex = Math.floor(Math.random() * typedData.length);
        this.audioService.playTrack('geishas', randomIndex);

        this.updateCurrentTrack();
      });

  }


  play() {
    this.audioService.playPause('geishas');
    this.updateCurrentTrack();

  }

  next() {
    this.audioService.nextTrack('geishas');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.audioService.previousTrack('geishas');
    this.updateCurrentTrack();
  }



  updateCurrentTrack() {
    this.currentTrack = this.audioService.getCurrentTrack<T>('geishas');
    this.currentTrackIndex = this.geishasAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.geishasAudios; // Actualiza la lista
  }

  selectTrack(index: number) {
    this.audioService.setPlaylist<T>('geishas', this.geishasAudios);

    // Usa el método que ya tienes en el servicio
    this.audioService.playTrack('geishas', index);

    // Refresca el estado local para marcar en la UI
    this.currentTrackIndex = index;
    this.currentTrack = this.geishasAudios[index];
  }

 toggleAudio() {
    this.isVisible = !this.isVisible;
  }

  

}

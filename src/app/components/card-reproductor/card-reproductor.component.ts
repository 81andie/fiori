import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { take } from 'rxjs';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioService } from '../../services/Audio.service';
import { GeishasVersesService } from '../../services/geishas.service';
import { GeishesVerses } from '../../interfaces/geishas.interface';


@Component({
  selector: 'app-card-reproductor',
  imports: [CommonModule],
  templateUrl: './card-reproductor.component.html',
  styleUrl: './card-reproductor.component.css'
})
export class CardReproductorComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() audios: {audio: string}[] = [];
  @Input() playlistId: string = 'default';
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;
  @Input() gradient: string = "bg-gradient-to-b from-stone-800 to-rose-400";
  public allAudios: {audio: string}[] = [];
  public geishasAudios: {audio: string}[] = [];
  currentTrack?: {audio: string};

  public currentTrackIndex: number = 0;
  public playList: {audio: string}[] = [];

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
      this.audioService.setPlaylist<{audio: string}>('geishas', this.geishasAudios);
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
      this.audioService.setPlaylist<{audio: string}>('geishas', this.geishasAudios);

      if (this.waveformRef?.nativeElement) {
        this.audioService.initWaveSurfer('geishas', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();

    }
    console.log(this.gradient)
  }




  sacarAudiosHaikus() {
    this.haikusGeishasMusicService.getVersesGeishas()
      .pipe(take(1))

      .subscribe((data: GeishesVerses[]) => {
        const typedData = data as unknown as {audio: string}[];
        if (!typedData?.length) return;

        this.allAudios = [...typedData];
        this.geishasAudios = [...typedData];

        this.audioService.setPlaylist<{audio: string}>('geishas', this.geishasAudios);
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
    this.currentTrack = this.audioService.getCurrentTrack<{audio: string}>('geishas');
    this.currentTrackIndex = this.geishasAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.geishasAudios; // Actualiza la lista
  }

  selectTrack(index: number) {
    this.audioService.setPlaylist<{audio: string}>('geishas', this.geishasAudios);

    // Usa el método que ya tienes en el servicio
    this.audioService.playTrack('geishas', index);

    // Refresca el estado local para marcar en la UI
    this.currentTrackIndex = index;
    this.currentTrack = this.geishasAudios[index];
  }

 toggleAudio() {
    this.isVisible = !this.isVisible;
    console.log("hello")
  }

}

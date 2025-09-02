import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import{CommonModule, isPlatformBrowser} from '@angular/common';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';
import { AudioService } from '../../services/Audio.service';
import { take } from 'rxjs';
import { Improvisaciones } from '../../interfaces/improvisaciones.interface';

@Component({
  selector: 'app-improvisaciones-card-machado',
  imports: [CommonModule],
  templateUrl: './improvisaciones-card-machado.component.html',
  styleUrl: './improvisaciones-card-machado.component.css'
})
export class ImprovisacionesCardMachadoComponent <T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges{

@Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;

  public allAudios: T[] = [];
  public machadoAudios: T[] = [];
  currentTrack?: T;

  public currentTrackIndex: number = 0;
  public playList: T[] = [];

  isVisible: boolean = true;


  constructor(
    private machadoImprovisacionesService: ImprovisacionesService,
    private audioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }




  ngOnInit(): void {

    if (this.audios?.length) {
      this.allAudios= [...this.audios];
      this.machadoAudios = [...this.audios];
      this.audioService.setPlaylist<T>('machado', this.machadoAudios);
      this.updateCurrentTrack();
      this.sacarAudiosHaikus();

    }

  }

  ngAfterViewInit(): void {
    if (this.waveformRef?.nativeElement) {
      this.audioService.initWaveSurfer('machado', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.machadoAudios = [...this.audios];
      this.audioService.setPlaylist<T>('machado', this.machadoAudios);

      if (this.waveformRef?.nativeElement) {
        this.audioService.initWaveSurfer('machado', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }




  sacarAudiosHaikus() {
    this.machadoImprovisacionesService.getImprovisacionesMachado()
      .pipe(take(1))

      .subscribe((data: Improvisaciones[]) => {
        const typedData = data as unknown as T[];
        if (!typedData?.length) return;

        this.allAudios = [...typedData];
        this.machadoAudios = [...typedData];

        this.audioService.setPlaylist<T>('machado', this.machadoAudios);
        console.log(this.audios)

        // 👉 si quieres empezar en aleatorio
        const randomIndex = Math.floor(Math.random() * typedData.length);
        this.audioService.playTrack('machado', randomIndex);

        this.updateCurrentTrack();
      });

  }


  play() {
    this.audioService.playPause('machado');
    this.updateCurrentTrack();

  }

  next() {
    this.audioService.nextTrack('machado');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.audioService.previousTrack('machado');
    this.updateCurrentTrack();
  }



  updateCurrentTrack() {
    this.currentTrack = this.audioService.getCurrentTrack<T>('machado');
    this.currentTrackIndex = this.machadoAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.machadoAudios; // Actualiza la lista
  }



  selectTrack(index: number) {
    this.audioService.setPlaylist<T>('machado', this.machadoAudios);

    // Usa el método que ya tienes en el servicio
    this.audioService.playTrack('machado', index);

    // Refresca el estado local para marcar en la UI
    this.currentTrackIndex = index;
    this.currentTrack = this.machadoAudios[index];
  }

 toggleAudio() {
    this.isVisible = !this.isVisible;
  }


}

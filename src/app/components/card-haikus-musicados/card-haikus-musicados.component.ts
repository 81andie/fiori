import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { HaikusService } from '../../services/haikus.service';
import { AudioService } from '../../services/Audio.service';
import { CommonModule } from '@angular/common';
import { HaikusComponent } from '../haikus/haikus.component';

@Component({
  selector: 'app-card-haikus-musicados',
  imports: [CommonModule],
  templateUrl: './card-haikus-musicados.component.html',
  styleUrl: './card-haikus-musicados.component.css'
})
export class CardHaikusMusicadosComponent <T extends { audio: string }> implements OnInit, AfterViewInit, OnChanges {

    @Input() audios: T[] = [];
  @ViewChild('waveform', { static: false }) waveformRef?: ElementRef;

  public allAudios: T[] = [];
  public haikusAudios: T[] = [];
  currentTrack?: T;

  public currentTrackIndex: number = 0;
  public playList: T[] = [];

  isVisible: boolean = true;
  constructor(
    private haikusMusicService: HaikusService,
    private AudioService: AudioService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }




  ngOnInit(): void {

    if (this.audios?.length) {
      this.audios = [...this.audios];
      this.haikusAudios = [...this.audios];
      this.AudioService.setPlaylist<T>('haikus', this.haikusAudios);
      this.updateCurrentTrack();
      this.sacarAudiosHaikus();

    }

  }

   ngAfterViewInit(): void {
      if(this.waveformRef?.nativeElement) {
      this.AudioService.initWaveSurfer('tiamat', this.waveformRef.nativeElement);
      this.updateCurrentTrack();

    }
  }


    ngOnChanges(changes: SimpleChanges) {
    if (changes['audios'] && this.audios?.length) {
      this.allAudios = [...this.audios];
      this.haikusAudios = [...this.audios];
      this.AudioService.setPlaylist<T>('haikus', this.haikusAudios);

      if (this.waveformRef?.nativeElement) {
        this.AudioService.initWaveSurfer('haikus', this.waveformRef.nativeElement);
      }
      this.updateCurrentTrack();
    }
  }

sacarAudiosHaikus(){
  this.haikusMusicService.getHaikusMusicados()
  .pipe(take(1))

  .subscribe((data: haikusMusicados[]) => {
          const typedData = data as unknown as T[];
          if (!typedData?.length) return;

          this.allAudios = [...typedData];
          this.haikusAudios = [...typedData];

          this.AudioService.setPlaylist<T>('haikus', this.haikusAudios);
          console.log(this.audios)

          // 👉 si quieres empezar en aleatorio
          const randomIndex = Math.floor(Math.random() * typedData.length);
          this.AudioService.playTrack('haikus', randomIndex);

          this.updateCurrentTrack();
        });


}



play() {
    this.AudioService.playPause('haikus');
    this.updateCurrentTrack();

  }

  next() {
    this.AudioService.nextTrack('haikus');
    this.updateCurrentTrack();
  }

  prev() {
    console.log("hello")
    this.AudioService.previousTrack('haikus');
    this.updateCurrentTrack();
  }




  updateCurrentTrack() {
    this.currentTrack = this.AudioService.getCurrentTrack<T>('haikus');
    this.currentTrackIndex = this.haikusAudios.findIndex(track => track === this.currentTrack);
    this.playList = this.haikusAudios; // Actualiza la lista
  }



selectTrack(index: number) {
 this.AudioService.setPlaylist<T>('haikus', this.haikusAudios);

  // Usa el método que ya tienes en el servicio
  this.AudioService.playTrack('haikus', index);

  // Refresca el estado local para marcar en la UI
  this.currentTrackIndex = index;
  this.currentTrack = this.haikusAudios[index];
}

toggleAudio() {
    this.isVisible = !this.isVisible;
    console.log("hello")
  }


}

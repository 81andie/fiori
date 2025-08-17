import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('waveform', { static: false }) waveformRef!: ElementRef;

  wavesurfer!: WaveSurfer;
  playList: haikusMusicados[] = [];
  currentTrackIndex = 0;

  public isAudioVisible: boolean = false;
  public haikusMusicados: haikusMusicados[] = [];
  public haiku: haikusMusicados[] = [];
  searchTerm: string = '';
  myInput: FormControl = new FormControl('');
  isVisible: boolean = true;

  private destroy$ = new Subject<void>();
  private sacarAudiosyHaikuDestroy!: Subscription;



  constructor(private haikusMusicadosService: AudioPlayerService,

    @Inject(PLATFORM_ID) private platformId: Object

  ) { }

  ngOnInit(): void {
    this.sacarAudiosyHaikus();

  }

  ngAfterViewInit(): void {
    // El waveform se inicializará en sacarAudiosyHaikus después de obtener los datos
  }

  ngOnDestroy(): void {
    this.wavesurfer?.destroy();       // ✅ Destruye WaveSurfer si existe
    this.destroy$.next();             // ✅ Cierra el observable
    this.destroy$.complete();
    this.sacarAudiosyHaikuDestroy?.unsubscribe();
  }


  sacarAudiosyHaikus() {
   this.sacarAudiosyHaikuDestroy= this.haikusMusicadosService.getHaikusWidthAudios()
      .pipe(takeUntil(this.destroy$))

      .subscribe((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.haikusMusicados = data;
        this.haiku = data;
        this.playList = data;
        this.currentTrackIndex = randomIndex;


        setTimeout(() => {
          this.initWaveSurfer();
        }, 50); // Asegurarse de que el DOM esté listo
      });
  }

  initWaveSurfer() {
    if (!isPlatformBrowser(this.platformId)) return; //

    const currentUrl = this.playList[this.currentTrackIndex]?.audio;
    if (!currentUrl || !this.waveformRef?.nativeElement) return;

    // Destruir instancia anterior si ya existe
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }

    this.wavesurfer = WaveSurfer.create({
      container: this.waveformRef.nativeElement,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      barWidth: 1,
      height: 20,
    });

    this.wavesurfer.load(currentUrl);

    this.wavesurfer.on('finish', () => {
      console.log('Finished');
    });

  }

  filteredSongs(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchBar = this.myInput.value.trim().toLowerCase();
      if (searchBar.length > 0) {
        const filtered = this.haiku.filter(haikufiltered =>
          haikufiltered.title.toLowerCase().includes(searchBar)
        );

        this.haikusMusicados = filtered;
        this.playList = filtered;
        this.currentTrackIndex = 0;

        if (this.playList.length > 0) {
          setTimeout(() => this.initWaveSurfer(), 20);
        } else {
          this.wavesurfer?.destroy();
        }
      }
    }
  }

  togglePlay() {
    this.wavesurfer?.playPause();
  }

  nextTrack() {
    if (this.currentTrackIndex < this.playList.length - 1) {
      this.currentTrackIndex++;
      this.initWaveSurfer();
    }
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
      this.initWaveSurfer();
    }
  }

  playTrack(index: number) {
    this.currentTrackIndex = index;
    this.initWaveSurfer();
  }




  toggleAudio(): void {

    console.log("hello")
    this.isVisible = !this.isVisible;
  }




}

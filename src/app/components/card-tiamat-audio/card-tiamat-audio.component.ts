import { tiamatAudioPlayer } from './../../interfaces/tiamat.interface';
import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-card-tiamat-audio',
imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card-tiamat-audio.component.html',
  styleUrl: './card-tiamat-audio.component.css'
})
export class CardTiamatAudioComponent implements OnInit, AfterViewInit {

 @ViewChild('waveform', { static: false }) waveformRef!: ElementRef;

  wavesurfer!: WaveSurfer;
  playList: tiamatAudioPlayer[] = [];
  currentTrackIndex = 0;

  public isAudioVisible: boolean = false;
  public tiamatAudios: tiamatAudioPlayer[] = [];
  public tiamatAudio: tiamatAudioPlayer[] = [];
  searchTerm: string = '';
  myInput: FormControl = new FormControl('');
  isVisible: boolean = true;


  constructor(private TiamatAudioPlayerService: TiamatAudioPlayerService,

  @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  ngOnInit(): void {
    this.sacarAudiosyHaikus();

  }

  ngAfterViewInit(): void {
    // El waveform se inicializará en sacarAudiosyHaikus después de obtener los datos
  }

  sacarAudiosyHaikus() {
    this.TiamatAudioPlayerService.getAudioPlayerTiamat().subscribe((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      this.tiamatAudios = data;
      this.tiamatAudio = data;
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
        const filtered = this.tiamatAudio.filter(filtered =>
          filtered.title.toLowerCase().includes(searchBar)
        );

        this.tiamatAudios = filtered;
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

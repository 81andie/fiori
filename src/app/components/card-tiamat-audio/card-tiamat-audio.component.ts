
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tiamatAudioPlayer } from './../../interfaces/tiamat.interface';
import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { AudioService } from '../../services/Audio.service';
import { TiamatComponent } from '../tiamat/tiamat.component';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-card-tiamat-audio',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  searchTerm: string = '';
  myInput: FormControl = new FormControl('');
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
    this.TiamatAudioPlayerService.getAudioPlayerTiamat().subscribe((data: tiamatAudioPlayer[]) => {
      const typedData = data as unknown as T[];
      if (!typedData) return;

      if (!data) return;

      const randomIndex = Math.floor(Math.random() * data.length);

      this.allAudios = [...typedData];
      this.tiamatAudios = [...typedData];
      console.log(this.tiamatAudios)

      this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);

      if (this.waveformRef?.nativeElement) {
        this.AudioService.initWaveSurfer('tiamat', this.waveformRef.nativeElement);
      }

      this.updateCurrentTrack();
    });
  }

  filteredSongs(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (this.myInput.value ?? '').toString().trim().toLowerCase();

      if (!searchTerm) {
        this.tiamatAudios = [...this.allAudios];
        this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);
        console.log(searchTerm)
        this.updateCurrentTrack();
        return;
      }

      let audios = this.allAudios;
      this.tiamatAudios = this.allAudios.filter(a => a.audio.toLowerCase().includes(searchTerm));

      this.AudioService.setPlaylist<T>('tiamat', this.tiamatAudios);

      if (this.waveformRef?.nativeElement) {
        this.AudioService.initWaveSurfer('tiamat', this.waveformRef.nativeElement);
      }

      this.updateCurrentTrack();
    }
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




}

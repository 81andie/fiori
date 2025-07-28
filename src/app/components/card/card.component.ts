import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemasService } from '../../services/poemas.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import WaveSurfer from 'wavesurfer.js';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit, AfterViewInit {

  @ViewChild('waveform', { static: false }) waveformRef!: ElementRef;

  wavesurfer!: WaveSurfer;
  playList: haikusMusicados[] = [];
  currentTrackIndex = 0;

  public isAudioVisible: boolean = false;
  public haikusMusicados: haikusMusicados[] = [];
  public haiku: haikusMusicados[] = [];
  searchTerm: string = '';
  myInput: FormControl = new FormControl('');


  constructor(private haikusMusicadosService: AudioPlayerService,

  @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  ngOnInit(): void {
    this.sacarAudiosyHaikus();
    this.toggleAudio()
  }

  ngAfterViewInit(): void {
    // El waveform se inicializará en sacarAudiosyHaikus después de obtener los datos
  }

  sacarAudiosyHaikus() {
    this.haikusMusicadosService.getHaikusWidthAudios().subscribe((data) => {
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
if (!isPlatformBrowser(this.platformId)) return; // ⛔ evita ejecutarlo en el servidor

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
    this.isAudioVisible = !this.isAudioVisible;
  }

}







/* playSong(audioUrl: any) {

    if (this.player) {
      this.player.src = audioUrl;
      this.player.play();
    }

  }

  stopPlaySong(audioUrl: any) {
    if (this.player) {
      this.player.src = audioUrl;
      this.player.pause()
    }

  }


muteAudio() {
  if (this.player) {
    this.player.muted = true;
    console.log('Audio muteado');
  }
}

unmuteAudio() {
  if (this.player) {
    this.player.muted = false;
    console.log('Audio activado');
  }
}

nextSong() {
  if (this.currentIndex < this.haikusMusicados.length - 0) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0; // vuelve a la primera si estás al final
  }
  this.haikusMusicadosService.getHaikusWidthAudios().subscribe((data) => {
    if (data && data.length > 0) {
      this.haikusMusicados = [data[this.currentIndex]];
      this.playSong(this.haikusMusicados[0].audio);
    }
  });


}

  prevSong() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.haikusMusicados.length - 0; // vuelve a la última si estás en la primera
  }
  this.haikusMusicadosService.getHaikusWidthAudios().subscribe((data) => {
    if (data && data.length > 0) {
      this.haikusMusicados = [data[this.currentIndex]];
      this.playSong(this.haikusMusicados[2].audio);
    }
  });
}
*/






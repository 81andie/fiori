import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemasService } from '../../services/poemas.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PLATFORM_ID, inject, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {



  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  private haikusMusicadosService = inject(AudioPlayerService)
  public haikusMusicados: haikusMusicados[] = [];
  public haiku: haikusMusicados[] = [];
  player!: HTMLAudioElement;
  public currentIndex: number = 0;

  searchTerm: string = '';
  myInput: FormControl = new FormControl('');


  ngOnInit(): void {
    this.sacarAudiosyHaikus()


    if (isPlatformBrowser(this.platformId)) {
      this.player = new Audio();
    }




  }

  sacarAudiosyHaikus() {
    this.haikusMusicadosService.getHaikusWidthAudios().subscribe((data) => {
      this.haikusMusicados = data;
      this.haiku = data;
      this.currentIndex = 0;
      const randomIndex = Math.floor(Math.random() * data.length);
      this.haikusMusicados = [data[randomIndex]];

      return this.haikusMusicados && this.haiku

    })
  }




  filteredSongs(event: KeyboardEvent) {


    if (event.key === 'Enter') {
      const searchBar = this.myInput.value.trim().toLowerCase();


      if (searchBar.length > 0) {

        let filtered = this.haiku.filter((haikufiltered) => {
          // Example filter: check if haikufiltered.title includes the searchBar
          // Adjust the property as needed based on haikusMusicados interface
          const titleLower = haikufiltered.title.toLowerCase();

          let matchs = titleLower.includes(searchBar);
          console.log('matchs:', matchs)
          return matchs;

        });

        this.haikusMusicados = filtered

        console.log(this.haikusMusicados)

      }
      // this.myInput.reset()
    }

  }


  playSong(audioUrl: any) {

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


}

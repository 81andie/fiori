import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemasService } from '../../services/poemas.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioPlayerService } from '../../services/AudioPlayer.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {



  constructor() { }

  private haikusMusicadosService = inject(AudioPlayerService)
  public haikusMusicados: haikusMusicados[] = [];
  public haiku: haikusMusicados[] = []

  searchTerm: string = '';
  myInput: FormControl = new FormControl('');


  ngOnInit(): void {
    this.sacarAudiosyHaikus()

  }

  sacarAudiosyHaikus() {
    this.haikusMusicadosService.getHaikusWidthAudios().subscribe((data) => {
      this.haikusMusicados = data;
      this.haiku = data;
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
      //this.myInput.reset()
    }
  }





}

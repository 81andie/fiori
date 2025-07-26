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


  }

  filteredSongs(event: KeyboardEvent) {
    console.log(this.myInput.value);
    console.log("hello")


    if (event.key === 'Enter') {
      const searchBar = this.myInput.value.trim().toLowerCase();
      console.log('Input:', searchBar);

      if (searchBar.length > 0) {

        let filtered = this.haiku.filter((haikufiltered) => {
          // Example filter: check if haikufiltered.title includes the searchBar
          // Adjust the property as needed based on haikusMusicados interface
          return haikufiltered.title?.toLowerCase().includes(searchBar);
        });
        this.haikusMusicados= filtered
      }


    }
  }





}

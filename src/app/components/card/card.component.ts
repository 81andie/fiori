import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoemasService } from '../../services/poemas.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { AudioPlayerService } from '../../services/AudioPlayer.service';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  haikus = computed(() => this.audioPlayer.haikus());
  currentIndex = computed(() => this.audioPlayer.currentIndex());
  isPlaying = computed(() => this.audioPlayer.isPlaying());
  progress = computed(() => this.audioPlayer.progress());
  filteredHaikus = computed(() => this.audioPlayer.filteredHaikus());
  private _searchTerm = signal('');
  searchTerm = computed(() => this._searchTerm());





  constructor(private poemasService: PoemasService,
    public audioPlayer: AudioPlayerService
  ) { }



  ngOnInit(): void {
    this.getPoemasMusicadosReproductor()
    
  }

  getPoemasMusicadosReproductor() {
    this.poemasService.getHaikusMusicados().subscribe((data) => {

      console.log(data)
      this.audioPlayer.setHaikus(data);

      console.log(this.audioPlayer)



    })
  }

  playPause() {
    this.audioPlayer.togglePlayPause();
  }

  next() {
    this.audioPlayer.next();
  }

  previous() {
    this.audioPlayer.previous();
  }

  seek(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const percent = event.offsetX / target.offsetWidth;
    this.audioPlayer.seekTo(percent);
  }

  setSearchTerm(term: string | null | undefined) {
    this._searchTerm.set(term ?? '');
  }


}

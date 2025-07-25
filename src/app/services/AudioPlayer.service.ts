import { computed, Injectable, signal } from '@angular/core';
import { haikusMusicados } from '../interfaces/poem.interface';

@Injectable({ providedIn: 'root' })
export class AudioPlayerService {

  public audio?: HTMLAudioElement;
  // ahora puede ser undefined

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio();

      this.audio.ontimeupdate = () => {
        if (this.audio?.duration) {
          this.progress.set((this.audio.currentTime / this.audio.duration) * 100);
        }
      };

      this.audio.onended = () => {
        this.next();
      };
    }
  }

  haikus = signal<haikusMusicados[]>([]);
  currentIndex = signal(0);
  isPlaying = signal(false);
  progress = signal(0);
    searchTerm = signal('');


  filteredHaikus = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.haikus();

    return this.haikus().filter(haiku =>
      haiku.title.toLowerCase().includes(term) ||
      haiku.date.toLowerCase().includes(term) ||
      haiku.jp.toLowerCase().includes(term) ||
      haiku.es.toLowerCase().includes(term)
    );
  });





  setHaikus(haikus: haikusMusicados[]) {
    this.haikus.set(haikus);
    if (haikus.length > 0) {
      this.setAudio(0);
    }
  }

  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }


    // Reproduce un haiku a partir del índice dentro del array original
  playFromFiltered(index: number) {
    const filtered = this.filteredHaikus();
    const haiku = filtered[index];
    if (!haiku) return;

    // Obtener índice en el array original
    const originalIndex = this.haikus().findIndex(h => h === haiku);
    if (originalIndex === -1) return;

    this.setAudio(originalIndex);
  }




  setAudio(index: number) {
    if (index < 0 || index >= this.haikus().length) return;
    this.currentIndex.set(index);
    if (!this.audio) return;
    this.audio.src = this.haikus()[index].audio; // cambia `audioUrl` al nombre correcto
    this.audio.load();
    this.play();
  }

  play() {
    if (!this.audio) return;
    this.audio.play();
    this.isPlaying.set(true);
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying.set(false);
  }

  togglePlayPause() {
    if (this.isPlaying()) {
      this.pause();
    } else {
      this.play();
    }
  }

  next() {
    let nextIndex = this.currentIndex() + 1;
    if (nextIndex >= this.haikus().length) nextIndex = 0;
    this.setAudio(nextIndex);
  }

  previous() {
    let prevIndex = this.currentIndex() - 1;
    if (prevIndex < 0) prevIndex = this.haikus().length - 1;
    this.setAudio(prevIndex);
  }

  seekTo(percent: number) {
    if (!this.audio?.duration) return;
    this.audio.currentTime = (percent / 100) * this.audio.duration;
    this.progress.set(percent);
  }
}

import { Injectable } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Injectable({ providedIn: 'root' })
export class AudioService {

  private wavesurfer!: WaveSurfer;
  private playList: any[] = [];
  private currentTrackIndex = 0;

  constructor() {}


  private loadCurrentTrack() {
  if (this.wavesurfer) {
    this.wavesurfer.load(this.getCurrentTrack()?.audio);
    this.wavesurfer.once('ready', () => {
      this.wavesurfer.play();
    });
  }
}

  setPlaylist(playlist: any[]) {
    this.playList = playlist;
    this.currentTrackIndex = 0;
  }

  getCurrentTrack() {
    return this.playList[this.currentTrackIndex];
  }

  initWaveSurfer(container: HTMLElement) {
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }
    this.wavesurfer = WaveSurfer.create({
      container,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      barWidth: 1,
      height: 20,
    });

    this.wavesurfer.load(this.getCurrentTrack()?.audio);

    this.wavesurfer.on('finish', () => {
      this.nextTrack();
    });
  }

  playPause() {
    this.wavesurfer?.playPause();
  }

  nextTrack() {
    if (this.currentTrackIndex < this.playList.length - 1) {
      this.currentTrackIndex++;
      this.loadCurrentTrack();
    }
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.currentTrackIndex--;
      this.loadCurrentTrack();
    }
  }

  playTrack(index: number) {
    if (index >= 0 && index < this.playList.length) {
      this.currentTrackIndex = index;
      this.loadCurrentTrack();
    }
  }



  destroy() {
    this.wavesurfer?.destroy();
  }

}

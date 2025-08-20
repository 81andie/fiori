import { Injectable } from '@angular/core';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';

interface PlayerInstance<T> {
  wavesurfer: WaveSurfer | null;
  playlist: T[];
  currentTrackIndex: number;
}

@Injectable({ providedIn: 'root' })
export class AudioService {

  private players = new Map<string, PlayerInstance<any>>();

  // Nuevo: Método para verificar si está reproduciendo
  isPlaying(id: string): boolean {
    return this.players.get(id)?.wavesurfer?.isPlaying() || false;
  }

  setPlaylist<T>(id: string, playlist: T[]) {
    const currentPlayer = this.players.get(id);
    this.players.set(id, {
      wavesurfer: currentPlayer?.wavesurfer || null,
      playlist,
      currentTrackIndex: currentPlayer?.currentTrackIndex || 0
    });
  }

  getCurrentTrack<T>(id: string): T | undefined {
    const player = this.players.get(id);
    return player?.playlist[player.currentTrackIndex];
  }

  initWaveSurfer(id: string, container: HTMLElement, options?: Partial<WaveSurferOptions>) {
    let player = this.players.get(id);
    if (!player) return;

    // Destruir instancia previa si existe
    if (player.wavesurfer) {
      player.wavesurfer?.destroy();
    }

    player.wavesurfer = WaveSurfer.create({
      container,
      waveColor: 'rgb(153, 255, 204)',
      progressColor: 'rgb(100, 0, 100)',
      barWidth: 1,
      height: 20,
      ...options
    });

    this.loadCurrentTrack(id);

    player.wavesurfer.on('finish', () => this.nextTrack(id));
    player.wavesurfer.on('error', (error) => {
      console.error('Error loading audio:', error);
      this.nextTrack(id); // Pasa a la siguiente canción si hay error
    });
  }

  // Nuevo: Método separado para cargar la pista actual
  loadCurrentTrack(id: string) {
    const player = this.players.get(id);
    if (!player?.wavesurfer) return;

    const track = player.playlist[player.currentTrackIndex];
    if (track && track['audio']) {
      player.wavesurfer.load(track['audio']);
    }
  }

  playPause(id: string) {
    const player = this.players.get(id);
    if (!player?.wavesurfer) return;

    if (player.wavesurfer.isPlaying()) {
      player.wavesurfer.pause();
    } else {
      player.wavesurfer.play();
    }
  }

  nextTrack(id: string) {
    const player = this.players.get(id);
    if (!player) return;

    player.currentTrackIndex =
      (player.currentTrackIndex < player.playlist.length - 1)
        ? player.currentTrackIndex + 1
        : 0;

    this.loadCurrentTrack(id);
    player.wavesurfer?.play(); // Reproduce automáticamente
  }

  previousTrack(id: string) {
    const player = this.players.get(id);
    if (!player) return;

    player.currentTrackIndex =
      (player.currentTrackIndex > 0)
        ? player.currentTrackIndex - 1
        : player.playlist.length - 1;

    this.loadCurrentTrack(id);
    player.wavesurfer?.play(); // Reproduce automáticamente
  }

  playTrack(id: string, index: number) {
    const player = this.players.get(id);
    if (!player) return;

    if (index >= 0 && index < player.playlist.length) {
      player.currentTrackIndex = index;
      this.loadCurrentTrack(id);
      player.wavesurfer?.play(); // Reproduce automáticamente
    }
  }

  destroy(id: string) {
    const player = this.players.get(id);
    if (player?.wavesurfer) {
      player.wavesurfer.destroy();
    }
    this.players.delete(id);
  }
}

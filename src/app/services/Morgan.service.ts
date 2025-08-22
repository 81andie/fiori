import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MorganAudioPlayer } from '../interfaces/MorganAudioPlayer.interface';



@Injectable({providedIn:'root'})
export class MorganAudioPlayerService {
  constructor(private http:HttpClient) {
  }

private jsonUrlAudioPlayerMorgan = 'assets/morganNarration.json';

getAudioPlayerTiamat(){
  return this.http.get<[MorganAudioPlayer]>(this.jsonUrlAudioPlayerMorgan)
}


}

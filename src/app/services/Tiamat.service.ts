import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tiamatAudioPlayer } from '../interfaces/tiamat.interface';

@Injectable({providedIn:'root'})

export class TiamatAudioPlayerService {
  constructor(private http:HttpClient) {
  }

private jsonUrlAudioPlayerTiamat = 'assets/tiamat.json';

getAudioPlayerTiamat(){
  return this.http.get<[tiamatAudioPlayer]>(this.jsonUrlAudioPlayerTiamat)
}


}




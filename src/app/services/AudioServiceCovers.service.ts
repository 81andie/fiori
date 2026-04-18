import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coverCardAudios } from '../interfaces/coverCardAudio.interface';

@Injectable({providedIn:'root'})

export class AudioServiceCover {
  constructor(private http:HttpClient) {
  }

private jsonUrlAudioCovers = 'assets/covers.json';

getAudioPlayerCovers(){
  return this.http.get<[coverCardAudios]>(this.jsonUrlAudioCovers)
}


}

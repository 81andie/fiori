import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { haikusMusicados } from '../interfaces/poem.interface';



@Injectable({ providedIn: 'root' })




export class AudioPlayerService {


constructor(private http: HttpClient) { };

private jsonUrlAudioHaikus = 'assets/haikusMusicados.json';


getHaikusWidthAudios(){
  return this.http.get<[haikusMusicados]>(this.jsonUrlAudioHaikus)
}

}




















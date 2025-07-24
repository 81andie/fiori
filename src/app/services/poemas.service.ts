

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { poem,haikusMusicados } from '../interfaces/poem.interface';

@Injectable({ providedIn: 'root' })


export class PoemasService {

  constructor(private http: HttpClient) { }



  private jsonUrl = 'assets/haikus.json';
  private jsonUrlHaikusMusicados = 'assets/haikusMusicados.json';


  getPoems(): Observable<poem[]> {
    return this.http.get<poem[]>(this.jsonUrl)
  }

  getHaikusMusicados():Observable<haikusMusicados[]>{
    return this.http.get<haikusMusicados[]>(this.jsonUrlHaikusMusicados)
  }

}


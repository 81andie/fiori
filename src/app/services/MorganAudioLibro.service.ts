import { Story } from './../interfaces/story.interface';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class MorganAudioLibroService {

  constructor(private http: HttpClient) { }


  private jsonUrlStory = 'assets/morgan.json';


  getStory(): Observable<Story[]> {
    return this.http.get<[]>(this.jsonUrlStory);
  }



}


import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MindfullnessVerses } from '../interfaces/versesMindFullness.interface';

import { HttpClient } from '@angular/common/http';

// Definimos el tipo de la respuesta de scrollama


@Injectable({
  providedIn: 'root'
})
export class MindFullnessService {


  private isBrowser: boolean;



  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private jsonUrl = 'assets/MilfullnessVerses.json';


  getVersesMilfullness() {
    return this.http.get<MindfullnessVerses[]>(this.jsonUrl)
  }


}

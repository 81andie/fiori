

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { versesInvierno } from '../interfaces/versesInvierno';


// Definimos el tipo de la respuesta de scrollama

@Injectable({
  providedIn: 'root'
})

export class versesInviernoService {
  private isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private jsonUrl = 'assets/versesInvierno.json';


  getVersesInvierno() {
    return this.http.get<versesInvierno[]>(this.jsonUrl)
  }


}

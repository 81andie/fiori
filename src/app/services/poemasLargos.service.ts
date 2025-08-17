import { poemsLarge } from '../interfaces/poemsLarge.interface';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';


// Definimos el tipo de la respuesta de scrollama


@Injectable({
  providedIn: 'root'
})
export class PoemasLargosService {


  private isBrowser: boolean;



  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private jsonUrl = 'assets/poemasLargos.json';


  getPoemasLarge() {
    return this.http.get<poemsLarge[]>(this.jsonUrl)
  }


}

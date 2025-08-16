import { GeishesVerses } from './../interfaces/geishas.interface';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Improvisaciones } from '../interfaces/improvisaciones.interface';


// Definimos el tipo de la respuesta de scrollama


@Injectable({
  providedIn: 'root'
})
export class ImprovisacionesService {


  private isBrowser: boolean;



  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private jsonUrl = 'assets/ImprovisacionesMachado.json';


  getImprovisacionesMachado() {
    return this.http.get<Improvisaciones[]>(this.jsonUrl)
  }


}

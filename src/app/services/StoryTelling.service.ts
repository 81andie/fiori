
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import scrollama from 'scrollama';
import { HttpClient } from '@angular/common/http';
import {MilfullnessVerses} from '../interfaces/versesMilfuss.interface'

// Definimos el tipo de la respuesta de scrollama
interface ScrollamaStepResponse {
  element: HTMLElement;
  index: number;
  direction: 'up' | 'down';
}

@Injectable({
  providedIn: 'root'
})
export class StoryTellingService {
  private scroller = scrollama();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

   private jsonUrl = 'assets/MilfullnessVerses.json';



  handleResize = () => {
    if (!this.isBrowser) return;
    this.scroller?.resize();
  };


  initScrolling(offset: number = 0.3) {

    if (!this.isBrowser) return;

    this.scroller
      .setup({
        step: '.step',
        offset: offset as unknown as scrollama.DecimalType, // workaround tipo DecimalType
        debug: false
      })
      .onStepEnter((response: ScrollamaStepResponse) => {
        const horizontalContainer = document.querySelector<HTMLElement>('.horizontal-container');
        if (horizontalContainer) {
          horizontalContainer.style.transform = `translateX(-${response.index * 100}%)`;
        }
      });

    window.addEventListener('resize', this.handleResize);
  }

  // Limpieza al destruir
  destroyScrolling() {
    if (!this.isBrowser) return;
    window.removeEventListener('resize', this.handleResize);
    this.scroller.destroy();
  }


  getVersesMilfullness(){
    return this.http.get<MilfullnessVerses[]>(this.jsonUrl)
  }


}

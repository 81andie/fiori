import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Story } from '../interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class MorganAudioLibroService {
  private storyUrl = 'assets/morgan.json';

  constructor(private http: HttpClient) { }

  getStory(): Observable<Story> {
    return this.http.get<Story>(this.storyUrl).pipe(
      catchError(() => {
        return of(this.getEmptyStory());
      })
    );
  }

  private getEmptyStory(): Story {
    return {
      title: 'Error al cargar',
      author: '',
      collection: '',
      pages: [{
        title: 'Contenido no disponible',
        content: ['No se pudo cargar el libro'],
        image: undefined
      }]
    };
  }
}

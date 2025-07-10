

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { PoeticCollection, Poem } from '../interfaces/poem.interface';

@Injectable({ providedIn: 'root' })


export class PoemasService {

  private cachedHaikus: Poem[] | null = null;
  private apiUrl = 'assets/haikus.json';


  constructor(private http: HttpClient) { }



  getPoems(): Observable<Poem[]> {

    return this.http.get<Poem[]>(this.apiUrl)
      .pipe(
        tap((response) => {
          console.log('Datos recibidos', response)

          if (Array.isArray(response)) {
            // Aquí puedes manejar el caso cuando la respuesta es un array de poemas
           this.cachedHaikus = response
           console.log(this.cachedHaikus)

          }

        })
      )

  }






}


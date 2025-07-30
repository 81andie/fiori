
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { poemsVerses } from '../interfaces/poem.interface';


@Injectable({ providedIn: 'root' })
export class PoemasyVersosService {

  constructor(private http: HttpClient) { }


  private jsonUrlpoemsVerses = 'assets/verses.json';


  getPoemsAndVerses(): Observable<poemsVerses[]> {
    return this.http.get<poemsVerses[]>(this.jsonUrlpoemsVerses);
  }



}

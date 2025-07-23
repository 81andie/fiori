

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BlogData } from '../interfaces/poem.interface';

@Injectable({ providedIn: 'root' })


export class PoemasService {


 /*private jsonUrl = 'assets/haikus.json';
  constructor(private http: HttpClient) { }

  getPoems(): Observable<BlogData[]> {
    return this.http.get<BlogData[]>(this.jsonUrl)
  }*/

}


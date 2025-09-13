
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { AudioService } from '../../services/Audio.service';
import { MorganComponent } from '../morgan/morgan.component';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-morgan-card',
  imports: [CommonModule],
  templateUrl: './morgan-card.component.html',
  styleUrl: './morgan-card.component.css'
})
export class MorganCardComponent{





  constructor(


    @Inject(PLATFORM_ID) private platformId: Object
  ) { }



}

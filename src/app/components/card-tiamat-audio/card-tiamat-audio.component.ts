
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { tiamatAudioPlayer } from './../../interfaces/tiamat.interface';
import { TiamatAudioPlayerService } from './../../services/Tiamat.service';
import { AudioService } from '../../services/Audio.service';
import { TiamatComponent } from '../tiamat/tiamat.component';
import { map, Observable, take } from 'rxjs';



@Component({
  selector: 'app-card-tiamat-audio',
  imports: [CommonModule],
  templateUrl: './card-tiamat-audio.component.html',
  styleUrl: './card-tiamat-audio.component.css'
})
export class CardTiamatAudioComponent {



}

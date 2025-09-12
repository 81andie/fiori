import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { take } from 'rxjs';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { HaikusService } from '../../services/haikus.service';
import { AudioService } from '../../services/Audio.service';
import { CommonModule } from '@angular/common';
import { HaikusComponent } from '../haikus/haikus.component';
import { AudioPlayerService } from '../../services/AudioPlayer.service';

@Component({
  selector: 'app-card-haikus-musicados',
  imports: [CommonModule],
  templateUrl: './card-haikus-musicados.component.html',
  styleUrl: './card-haikus-musicados.component.css'
})

export class CardHaikusMusicadosComponent  {



}

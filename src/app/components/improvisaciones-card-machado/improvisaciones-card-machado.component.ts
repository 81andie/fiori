import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import{CommonModule, isPlatformBrowser} from '@angular/common';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';
import { AudioService } from '../../services/Audio.service';
import { take } from 'rxjs';
import { Improvisaciones } from '../../interfaces/improvisaciones.interface';

@Component({
  selector: 'app-improvisaciones-card-machado',
  imports: [CommonModule],
  templateUrl: './improvisaciones-card-machado.component.html',
  styleUrl: './improvisaciones-card-machado.component.css'
})
export class ImprovisacionesCardMachadoComponent{




}

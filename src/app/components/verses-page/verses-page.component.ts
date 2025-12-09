import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MindFullnessService } from '../../services/MindFullness.service';


import { ReusableVersesComponent } from '../reusable-verses/reusable-verses.component';
import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { PoemasLargosService } from '../../services/poemasLargos.service';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';
import { isPlatformBrowser } from '@angular/common';
import { Improvisaciones } from '../../interfaces/improvisaciones.interface';
import { ImprovisacionesCardMachadoComponent } from "../improvisaciones-card-machado/improvisaciones-card-machado.component";
import { versesInviernoService } from '../../services/VersesInvierno.service';
import { versesInvierno } from '../../interfaces/versesInvierno';


@Component({
  selector: 'app-verses-page',
  imports: [ReusableVersesComponent ],
  templateUrl: './verses-page.component.html',
  styleUrl: './verses-page.component.css'
})
export class VersesPageComponent implements OnInit {
  isBrowser: any;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  poemsService = inject(PoemasyVersosService);
  PoemasLargos = inject(PoemasLargosService);
  Improvisaciones = inject(ImprovisacionesService)
  Poemas = inject(PoemasyVersosService);
  PoemasInvierno = inject(versesInviernoService);


  public audiosMachado: Improvisaciones[] = []
  public winter:versesInvierno[]=[]



  ngOnInit(): void {

    this.getMachadoImprovisations();
    this.getVerseWinter()

  }


  getMachadoImprovisations() {

    this.Improvisaciones.getImprovisacionesMachado().subscribe((data)=>{
      this.audiosMachado = data;
    })

  }

  getVerseWinter() {

    this.PoemasInvierno.getVersesInvierno().subscribe((data)=>{
      this.winter=data
    })

  }



}

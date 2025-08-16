import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Improvisaciones } from '../../interfaces/improvisaciones.interface';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';



@Component({
  selector: 'app-improvisaciones',
  imports: [CommonModule],
  templateUrl: './improvisaciones.component.html',
  styleUrl: './improvisaciones.component.css'
})
export class ImprovisacionesComponent implements OnInit {


  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private isBrowser: boolean | undefined;
  public improvisations: Improvisaciones[] = [];
  private improvisationsService = inject(ImprovisacionesService)

  ngOnInit(): void {
  
    this.getImprovisations()
  }


   getImprovisations(){
    this.improvisationsService.getImprovisacionesMachado().subscribe((data)=>{
      this.improvisations=data;
    })
   }



}

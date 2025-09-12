import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GeishesVerses } from '../../interfaces/geishas.interface';
import { GeishasVersesService } from '../../services/geishas.service';
import { CardReproductorComponent } from "../card-reproductor/card-reproductor.component";




@Component({
  selector: 'app-reproductor-reusable',
  templateUrl: './reproductor-reusable.component.html',
  styleUrls: ['./reproductor-reusable.component.css'],
  imports: [CommonModule, CardReproductorComponent]
})
export class reproductorReusableComponent implements  OnInit {


  public versesGeishas:GeishesVerses[]=[]

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  private isBrowser: boolean | undefined;
  private geishasVersesService= inject(GeishasVersesService)


  ngOnInit(): void {
  this.getVersesGeishas()
  }


  getVersesGeishas(){
    this.geishasVersesService.getVersesGeishas().subscribe((data)=>{
      this.versesGeishas=data;
    })
  }



}





import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GeishesVerses } from '../../interfaces/geishas.interface';
import { GeishasVersesService } from '../../services/geishas.service';




@Component({
  selector: 'app-haikus-geishas',
  templateUrl: './haikus-geishas.component.html',
  styleUrls: ['./haikus-geishas.component.css'],
  imports: [ CommonModule]
})
export class HaikusGeishasComponent implements  OnInit {


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





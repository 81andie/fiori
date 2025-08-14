import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import scrollama from 'scrollama';
import { StoryTellingService } from '../../services/StoryTelling.service';


@Component({
  selector: 'app-milfullness-poems',
  imports: [CommonModule],
  templateUrl: './milfullness-poems.component.html',
  styleUrl: './milfullness-poems.component.css'
})

export class MilfullnessPoemsComponent implements  OnInit{

  private isBrowser: boolean | undefined;
  private StoryTellingService= inject(StoryTellingService)

  constructor(

    @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.handleResizes()
  }




  handleResizes (){
     if (!this.isBrowser) return;
    this.StoryTellingService.handleResize();

  }




}

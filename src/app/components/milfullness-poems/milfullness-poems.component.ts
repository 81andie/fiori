import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import scrollama from 'scrollama';
import { StoryTellingService } from '../../services/StoryTelling.service';
import { MilfullnessVerses } from '../../interfaces/versesMilfuss.interface';


@Component({
  selector: 'app-milfullness-poems',
  imports: [CommonModule],
  templateUrl: './milfullness-poems.component.html',
  styleUrl: './milfullness-poems.component.css'
})

export class MilfullnessPoemsComponent implements OnInit {


  private StoryTellingService = inject(StoryTellingService)

  public versesMilfulness: MilfullnessVerses[] = [];


  constructor() { }




  ngOnInit(): void {
    this.initScrolling();
    this.getVersesMilfulness()
  }



  initScrolling() {
    this.StoryTellingService.initScrolling(0.3);
    this.getRandlesize()
  }

  getVersesMilfulness() {
    this.StoryTellingService.getVersesMilfullness().subscribe((data) => {
      console.log(data)
      this.versesMilfulness = data
    })
  }

  getRandlesize(){
    this.StoryTellingService.handleResize()
  }


}






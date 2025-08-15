import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject, ViewChildren, QueryList } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { MindFullnessService } from '../../services/MindFullness.service';
import { MindfullnessVerses } from '../../interfaces/versesMindFullness.interface';
import { Subscription } from 'rxjs';
import { CardComponent } from "../card/card.component";



@Component({
  selector: 'app-milfullness-poems',
  imports: [CommonModule],
  templateUrl: './milfullness-poems.component.html',
  styleUrl: './milfullness-poems.component.css'
})

export class MilfullnessPoemsComponent implements OnInit {


  private mindFullnessService = inject(MindFullnessService)

  public versesMilfulness: MindfullnessVerses[] = [];

  private sub?: Subscription;





  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  private isBrowser: boolean | undefined;



  ngOnInit(): void {

    this.getVersesMilfulness()
  }


  getVersesMilfulness() {
    this.sub= this.mindFullnessService.getVersesMilfullness().subscribe((data) => {
      console.log(data)
      this.versesMilfulness = data


    })
  }








  ngOnDestroy() {
    this.sub?.unsubscribe();

  }


}









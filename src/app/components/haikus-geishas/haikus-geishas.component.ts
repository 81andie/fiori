import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import scrollama from 'scrollama';







@Component({
  selector: 'app-haikus-geishas',
  templateUrl: './haikus-geishas.component.html',
  styleUrls: ['./haikus-geishas.component.css']
})
export class HaikusGeishasComponent implements AfterViewInit, OnDestroy {

  private scroller = scrollama();
 private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
 this.isBrowser = isPlatformBrowser(platformId);
  }

 ngAfterViewInit(): void {
  if (!this.isBrowser) return;
    this.scroller
      .setup({
        step: '.step',
        offset: 0.5,
        debug: false
      })
      .onStepEnter((response) => {
        const stepIndex = response.index;
        const horizontalContainer = document.querySelector<HTMLElement>('.horizontal-container');
        if (horizontalContainer) {
          horizontalContainer.style.transform = `translateX(-${stepIndex * 100}%)`;
        }
      });

    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
     if (!this.isBrowser) return;
    this.scroller.resize();
  };

  ngOnDestroy(): void {
     if (!this.isBrowser) return;
    window.removeEventListener('resize', this.handleResize);
  }




}





import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import scrollama from 'scrollama';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';




@Component({
  selector: 'app-haikus-geishas',
  templateUrl: './haikus-geishas.component.html',
  styleUrls: ['./haikus-geishas.component.css']
})
export class HaikusGeishasComponent implements AfterViewInit, OnInit, OnDestroy {

  private scroller = scrollama();
  private isBrowser: boolean;
  public haiku: haikusMusicados[] = [];
  private haikusMusicadosService = inject(HaikusService)

  constructor(

    @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    this.initScrolling();
    this.initHaikus();
  }

  ngAfterViewInit(): void {
    this.initScrolling()
    this.initHaikus()
  }


  handleResize = () => {
    if (!this.isBrowser) return;
    this.scroller.resize();
  };

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    window.removeEventListener('resize', this.handleResize);
  }


  initScrolling() {
    if (!this.isBrowser) return;
    this.scroller
      .setup({
        step: '.step',
        offset: 0.3,
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

  initHaikus() {
    this.haikusMusicadosService.getHaikusMusicados().subscribe((data) => {
      console.log(data)
      this.haiku = data
      this.initScrolling();
    })
  }



}





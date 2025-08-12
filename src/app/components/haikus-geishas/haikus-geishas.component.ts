import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import scrollama from "scrollama";

interface ScrollItem {
  color: string;
  title?: string;
  position?: 'left' | 'right';
}

@Component({
  selector: 'app-haikus-geishas',
  imports: [CommonModule],
  templateUrl: './haikus-geishas.component.html',
  styleUrl: './haikus-geishas.component.css'
})
export class HaikusGeishasComponent implements OnInit {

  isBrowser: boolean = false;
  scrollItems: ScrollItem[] = [
    { color: 'red', title: 'Hello', position: 'left' },
    { color: 'yellow' },
    { color: 'green' },
    { color: 'blue', title: 'Goodbye', position: 'right' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit(): void {
    // instantiate the scrollama
    // const scroller = scrollama();

    // // setup the instance, pass callback functions
    // scroller
    //   .setup({
    //     step: ".step",
    //   })
    //   .onStepEnter((response: any) => {
    //     // { element, index, direction }
    //   })
    //   .onStepExit((response: any) => {
    //     // { element, index, direction }
    //   });

  }


}







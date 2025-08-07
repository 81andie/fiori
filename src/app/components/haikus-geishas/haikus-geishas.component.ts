import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

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
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.initScrollEffect();
    }
  }

  private scrollListener!: () => void;

  private initScrollEffect(): void {
    const stickySections = Array.from(document.querySelectorAll('.sticky_wrap'));




  }





  ngOnDestroy(): void {

  }

  @HostListener('scroll', ['$event'])
  hybridScroll() {
    console.log("hola");
    const stickySections = [...document.querySelectorAll('.sticky_wrap')]
      for (let i = 0; i < stickySections.length; i++) {
        this.transform(stickySections[i])
      }
  }


 transform(section:any) {

      const offsetTop = section.parentElement.offsetTop;

      const scrollSection = section.querySelector('.horizontal_scroll')

      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

      scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
    }



}







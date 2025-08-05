import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';

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

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.initScrollEffect();
    }
  }

  private scrollListener!: () => void;

  private initScrollEffect(): void {
    const stickySections = Array.from(document.querySelectorAll('.sticky_wrap'));

    this.scrollListener = () => {
      stickySections.forEach(section => this.transform(section));
    };

    window.addEventListener('scroll', this.scrollListener);
  }

  private transform(section: Element): void {
    const offsetTop = section.parentElement?.offsetTop || 0;
    const scrollSection = section.querySelector('.horizontal_scroll') as HTMLElement;

    if (!scrollSection) return;

    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }





}







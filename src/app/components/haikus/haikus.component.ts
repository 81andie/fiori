
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { poem } from '../../interfaces/poem.interface';


@Component({
  selector: 'app-haikus',
  imports: [CommonModule],
  templateUrl: './haikus.component.html',
  styleUrl: './haikus.component.css'

})

export class HaikusComponent implements AfterViewInit {

  constructor() {
    this.sacarPoemas()
  }



  haikus: poem[] = [];
  private haikusService = inject(HaikusService)

  private isScrolling = false;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;



  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;

    // Añadir listener manual con passive: false
    container.addEventListener('wheel', (event) => this.onWheel(event), { passive: false });
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;
    this.isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const scrollWidth = window.innerWidth;

    const currentScroll = this.scrollContainer.nativeElement.scrollLeft;
    const nextScroll = Math.round((currentScroll + direction * scrollWidth) / scrollWidth) * scrollWidth;

    this.scrollContainer.nativeElement.scrollTo({
      left: nextScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 600);
  }

  sacarPoemas() {
    this.haikusService.getPoems().subscribe((data) => {
      console.log(data)
      this.haikus = data;
    });

  }




}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, inject, ViewChild, Renderer2 } from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-haikus-musicados',
  imports: [CommonModule, CardComponent],
  templateUrl: './haikus-musicados.component.html',
  styleUrl: './haikus-musicados.component.css'
})
export class HaikusMusicadosComponent implements AfterViewInit {

  private haikusMusicadosService = inject(HaikusService)
  haikusMusicados: haikusMusicados[] = [];

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;
  @ViewChild('sentinelStart', { static: true }) sentinelStart!: ElementRef<HTMLElement>;
  @ViewChild('sentinelEnd', { static: true }) sentinelEnd!: ElementRef<HTMLElement>;

  private isScrolling = false;
  private autoScrollInterval: any = null;

  constructor(private renderer: Renderer2) {
    this.sacarPoemasMusicados();
  }

  ngAfterViewInit(): void {
    const container = this.scrollContainer.nativeElement;

    // Mantener scroll con rueda
    container.addEventListener('wheel', (event) => this.onWheel(event), { passive: false });

    // Observadores para sentinels inicio y fin
    const observerStart = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Entramos en la zona para autoscroll
          this.startAutoScroll();
        } else {
          // Salimos del inicio, parar autoscroll (posible cuando hacemos scroll hacia arriba)
          this.stopAutoScroll();
        }
      });
    }, { root: null, threshold: 0.1 });

    const observerEnd = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // El final es visible, paramos el autoscroll porque llegamos al final
          this.stopAutoScroll();
        }
      });
    }, { root: null, threshold: 0.3 });

    observerStart.observe(this.sentinelStart.nativeElement);
    observerEnd.observe(this.sentinelEnd.nativeElement);
  }

  onWheel(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;
    this.isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const scrollWidth = window.innerWidth;

    const container = this.scrollContainer.nativeElement;
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let nextScroll = currentScroll + direction * scrollWidth;
    nextScroll = Math.max(0, Math.min(nextScroll, maxScroll));

    container.scrollTo({
      left: nextScroll,
      behavior: 'smooth'
    });

    setTimeout(() => {
      this.isScrolling = false;
    }, 600);
  }

  startAutoScroll() {
    if (this.autoScrollInterval) return;

    const container = this.scrollContainer.nativeElement;
    const scrollWidth = window.innerWidth;

    this.autoScrollInterval = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      let nextScroll = container.scrollLeft + scrollWidth;

      if (nextScroll >= maxScrollLeft) {
        this.stopAutoScroll();
        return;
      }

      container.scrollTo({ left: nextScroll, behavior: 'smooth' });
    }, 1000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  sacarPoemasMusicados(){
    this.haikusMusicadosService.getHaikusMusicados().subscribe((data) => {
      this.haikusMusicados = data;
    });
  }

  trackById(index: number, item: haikusMusicados) {
    return item.id;
  }
}


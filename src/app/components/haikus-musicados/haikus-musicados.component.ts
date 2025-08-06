
import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, inject, ViewChild} from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { CardComponent } from "../card/card.component";


@Component({
  selector: 'app-haikus-musicados',
  imports: [CommonModule, CardComponent],
  templateUrl: './haikus-musicados.component.html',
  styleUrl: './haikus-musicados.component.css'
})
export class HaikusMusicadosComponent implements AfterViewInit{

  constructor(){
    this.sacarPoemasMusicados()
  }

  private haikusMusicadosService = inject(HaikusService)
     haikusMusicados: haikusMusicados[] = [];


  private isScrolling = false;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;


  ngAfterViewInit(): void {

    const container = this.scrollContainer.nativeElement;
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

  sacarPoemasMusicados(){
    this.haikusMusicadosService.getHaikusMusicados().subscribe((data) => {
      console.log(data)
      this.haikusMusicados = data;
    });

  }








}




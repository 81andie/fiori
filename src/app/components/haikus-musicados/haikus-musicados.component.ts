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




  constructor(private renderer: Renderer2) {
    this.sacarPoemasMusicados();
  }

  ngAfterViewInit(): void {



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


import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, inject, OnDestroy, Inject, PLATFORM_ID, } from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { haikusMusicados } from '../../interfaces/poem.interface';
import { CardComponent } from "../card/card.component";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-haikus-musicados',
  imports: [CommonModule, CardComponent],
  templateUrl: './haikus-musicados.component.html',
  styleUrl: './haikus-musicados.component.css'
})
export class HaikusMusicadosComponent implements AfterViewInit, OnDestroy {

  haikusMusicadosService = inject(HaikusService)
  haikusMusicados: haikusMusicados[] = [];
  private getsacarPoemasMusicados!: Subscription;

  private isBrowser: boolean | undefined;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnDestroy(): void {
  this.getsacarPoemasMusicados?.unsubscribe();
  }

  ngAfterViewInit(): void {
   this.sacarPoemasMusicados();
  }

  sacarPoemasMusicados(){
   this.getsacarPoemasMusicados=this.haikusMusicadosService.getHaikusMusicados().subscribe((data) => {
      this.haikusMusicados = data;
    });
  }

  trackById(index: number, item: haikusMusicados) {
    return item.id;
  }


}


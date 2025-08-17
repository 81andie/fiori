import { AfterViewInit, Component, ElementRef, Inject, inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { poemsVerses } from '../../interfaces/poem.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-poemas',
  imports: [CommonModule],
  templateUrl: './poemas.component.html',
  styleUrl: './poemas.component.css'
})
export class PoemasComponent implements AfterViewInit, OnDestroy {


  private poemasService = inject(PoemasyVersosService);
  public poemasYVersos: poemsVerses[] = [];

  private isBrowser: boolean | undefined;
  private sub?: Subscription;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }



  ngAfterViewInit(): void {
    this.sacarPoemasYVersos();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  sacarPoemasYVersos() {
    this.sub = this.poemasService.getPoemsAndVerses().subscribe((data) => {
      this.poemasYVersos = data;
    });
  }


}







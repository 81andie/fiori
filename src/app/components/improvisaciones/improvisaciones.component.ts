import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, NgZone, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Improvisaciones } from '../../interfaces/improvisaciones.interface';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-improvisaciones',
  imports: [CommonModule],
  templateUrl: './improvisaciones.component.html',
  styleUrl: './improvisaciones.component.css'
})
export class ImprovisacionesComponent implements OnInit, OnDestroy {


  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  private isBrowser: boolean | undefined;
  public improvisations: Improvisaciones[] = [];
  private improvisationsService = inject(ImprovisacionesService)
  private sub?: Subscription;

  ngOnInit(): void {
    this.getImprovisations()
  }


  getImprovisations() {
    this.sub = this.improvisationsService.getImprovisacionesMachado().subscribe((data) => {
      this.improvisations = data;
    })
  }

 ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

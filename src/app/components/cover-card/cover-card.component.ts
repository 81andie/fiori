import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardReproductorComponent } from '../card-reproductor/card-reproductor.component';

@Component({
  selector: 'app-cover-card',
  imports: [CommonModule,CardReproductorComponent],
  templateUrl: './cover-card.component.html',
  styleUrl: './cover-card.component.css'
})
export class CoverCardComponent {

}

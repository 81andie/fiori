import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Part {
  name: string;

}

@Component({
  selector: 'app-caligrama',
  imports: [CommonModule,DragDropModule],
  templateUrl: './caligrama.component.html',
  styleUrl: './caligrama.component.css'
})
export class CaligramaComponent {

parts: Part[] = [
    { name: 'Vent de tarda,' },
    { name: 'la gavina' },
    { name: 'juga amb la tramuntana,' },
    { name: "la sorra 's'aixeca'", },
    { name: 'emprenyadora' },
    { name: 'daurada i fina' },
    { name:  "el cel 's'amagat'",},
    { name: "en l'horitzó 'd'ultramar' blau", },
    { name: 'a la vora plateja' },
    { name: 'les boquetes dels peixets' },
    { name: 'bombolles omplen les onades' },
    { name: 'Així és el record' },
    { name:  "en 'l'Estartit'"},
    { name: 'Un vent de tarda' },
    { name: 'acarona a un tamariu' },
    { name: 'demà amb les Medes al fons' },
    { name: 'florirà' },

  ];

  dropped(event: CdkDragDrop<Part[]>, boxId: string) {
    const draggedPart = event.item.data as Part;

  }

}

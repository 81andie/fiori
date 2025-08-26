import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';

interface Part {
  name: string;

}

@Component({
  selector: 'app-juego-ukelele',
  imports: [CommonModule, DragDropModule],
  templateUrl: './juego-ukelele.component.html',
  styleUrl: './juego-ukelele.component.css'
})
export class JuegoUkeleleComponent {

  isVisible = false;

  parts: Part[] = [
    { name: 'Clavilles'},
    { name: 'Cordes' },
    { name: 'Cos' },
    { name: 'Celleta' },
    { name: 'pala'},
    { name: 'Pont'  },
    { name: 'Boca'  },
     { name: 'trasts'  },
      { name: 'mastil'  },


  ];


  dropped(event: CdkDragDrop<Part[]>, boxId: string) {
    const draggedPart = event.item.data as Part;

  }

  isVisibleImage(){
  this.isVisible= true;
  }

  isnotVisible(){
    this.isVisible = false
  }
}

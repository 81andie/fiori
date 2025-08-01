import { Story, Page } from './../../interfaces/story.interface';
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { MorganAudioLibroService } from '../../services/MorganAudioLibro.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-morgan',
  imports: [RouterModule, CommonModule],
  templateUrl: './morgan.component.html',
  styleUrl: './morgan.component.css'
})
export class MorganComponent implements OnInit {

    @ViewChildren('leaf') leaves!: QueryList<ElementRef>;
 constructor(private storyService: MorganAudioLibroService) {}


 stories: Story[]=[];

  currentPage = 0;

  ngOnInit(): void {
   this.storyService.getStory().subscribe(data => {
      this.stories = data;
      // Inicializa flipbook o lo que necesites tras cargar datos
      this.updateLeaves();
    });

  }

  ngAfterViewInit() {
    // Asegúrate que leaves esté listo y actualiza estilos si quieres
    this.updateLeaves();
  }

  updateLeaves() {
    if (!this.leaves) return;

    const leavesArray = this.leaves.toArray();

    leavesArray.forEach((leaf: { nativeElement: { querySelector: (arg0: string) => { (): any; new(): any; classList: { (): any; new(): any; add: { (arg0: string): void; new(): any; }; remove: { (arg0: string): void; new(): any; }; }; }; style: { transform: string; }; }; }, index: number) => {
      const position = index - this.currentPage;
      let transform = `translate3d(0,0,${(position < 0 ? 1 : -1) * Math.abs(index)}px)`;
      if (position < 0) {
        transform += ' rotate3d(0,1,0,-180deg)';
        leaf.nativeElement.querySelector('.page').classList.add('turned');
      } else {
        leaf.nativeElement.querySelector('.page').classList.remove('turned');
      }
      leaf.nativeElement.style.transform = transform;
    });
  }

  nextPage() {
    if(this.currentPage < this.stories.length - 1) {
      this.currentPage++;
      this.updateLeaves();
    }
  }

  prevPage() {
    if(this.currentPage > 0) {
      this.currentPage--;
      this.updateLeaves();
    }
  }







}

















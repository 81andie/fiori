import { Component, OnInit } from '@angular/core';
import { MorganAudioLibroService } from '../../services/MorganAudioLibro.service';
import { Story, Page } from '../../interfaces/story.interface';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-morgan',
  templateUrl: './morgan.component.html',
  styleUrls: ['./morgan.component.css'],
  imports: [NgStyle, CommonModule]
})
export class MorganComponent implements OnInit {
  bookData: Story = {
    title: '',
    author: '',
    collection: '',
    pages: []
  };
  currentPage = 0;
  isLoading = true;
  loadError = false;
  isfliping = false;
  rotatedPages = new Set<number>();
  isFlipped: boolean | undefined;

  constructor(private morganService: MorganAudioLibroService) { }

  ngOnInit(): void {
    this.loadBookData();

  }

  // Cambiado de private a public para acceso desde el template
  public loadBookData(): void {
    this.isLoading = true;
    this.loadError = false;

    this.morganService.getStory().subscribe({
      next: (data: Story) => {
        this.bookData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading story:', err);
        this.isLoading = false;
        this.loadError = true;
        this.bookData = this.getDefaultBookData();
      }
    });
  }

  private getDefaultBookData(): Story {
    return {
      title: 'Libro no disponible',
      author: '',
      collection: '',
      pages: [{
        title: 'Error al cargar',
        content: ['No se pudo cargar el contenido del libro'],
        image: undefined
      }]
    };
  }

  onAnimationDone() {
  if (this.isfliping) {
    this.currentPage++;
    this.isfliping = false;
  }
}
toggleFlip() {
  this.isFlipped = !this.isFlipped;
}

  nextPage() {
  if (this.currentPage < this.bookData.pages.length - 1 && !this.isfliping) {
    this.isfliping = true;

    setTimeout(() => {
      this.currentPage++;
      this.isfliping = false;
    }, 700); // dura lo mismo que la animación CSS
  }
}

prevPage() {
  if (this.currentPage > 0 && !this.isfliping) {
    this.isfliping = true;

    setTimeout(() => {
      this.currentPage--;
      this.isfliping = false;
    }, 700);
  }


}


}

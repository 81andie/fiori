import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
     if (typeof window !== 'undefined') {
    this.typewriter();
  }
  }

  private sounds: string[] = [
    'assets/typewriterkey1.mp3',
    'assets/typewriter2.mp3',
    'assets/typewriter2.mp3',
    'assets/typewirter3.mp3',
  ];


  public text: string = "Aquí encontraréis poemas y cuentos infantiles musicados, especialmente pensados para la sensibilización musical de niños y niñas de entre 3 y 5 años (P3 a P5), así como para la iniciación musical (de 5 a 7 años).Dentro de la temática de la cultura japonesa, he dedicado varias secciones a diferentes aspectos y modalidades. También encontraréis poemas tanto escritos como musicados. ";
  public displayedText: string = '';
  private i: number = 0;
  private speed: number = 150;
  private timeoutId: any;

  typewriter() {
    if (this.i < this.text.length) {
      this.displayedText += this.text.charAt(this.i);
      this.playSound();
      this.i++;
      this.timeoutId = setTimeout(() => this.typewriter(), this.speed);
    }
  }


  private playSound(): void {
    if(typeof window !== 'undefined'){
      const soundFile = this.sounds[Math.floor(Math.random() * this.sounds.length)];
    const audio = new Audio(soundFile);
    audio.play().catch(() => { }); // evita errores si no se puede reproducir
    }
  }

  ngOnDestroy(): void {
    // Limpiar el temporizador al destruir el componente
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }



}



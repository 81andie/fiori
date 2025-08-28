import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  ngOnInit(): void {

    this.typewriter();
  
  }

  private sounds: string[] = [
    'assets/typewriterkey1.mp3',
    'assets/typewriter2.mp3',
    'assets/typewriter2.mp3',
    'assets/typewirter3.mp3',
  ];


  public text: string = "Conoce mi blog ";
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
    audio.play().catch(() => { });
    }
  }

  ngOnDestroy(): void {

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }



}



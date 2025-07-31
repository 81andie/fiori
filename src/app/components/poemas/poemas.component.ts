import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { poemsVerses } from '../../interfaces/poem.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-poemas',
  imports: [CommonModule],
  templateUrl: './poemas.component.html',
  styleUrl: './poemas.component.css'
})
export class PoemasComponent implements AfterViewInit, OnInit {

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLElement>;

 

  private poemasService = inject(PoemasyVersosService);
  public poemasYVersos: poemsVerses[] = [];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sacarPoemasYVersos();
  }

  sacarPoemasYVersos() {
    this.poemasService.getPoemsAndVerses().subscribe((data) => {
      this.poemasYVersos = data;
    });
  }







}







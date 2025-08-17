
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, inject, OnInit } from '@angular/core';
import { HaikusService } from '../../services/haikus.service';
import { poem } from '../../interfaces/poem.interface';


@Component({
  selector: 'app-haikus',
  imports: [CommonModule],
  templateUrl: './haikus.component.html',
  styleUrl: './haikus.component.css'

})

export class HaikusComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  this.sacarPoemas()
  }



  haikus: poem[] = [];
  private haikusService = inject(HaikusService)

  sacarPoemas() {
    this.haikusService.getPoems().subscribe((data) => {
      console.log(data)
      this.haikus = data;
    });

  }




}

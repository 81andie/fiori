
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Entry, Poem, PoeticCollection } from '../../interfaces/poem.interface';
import { PoemasService } from './../../services/poemas.service';

@Component({
  selector: 'app-haikus',
  imports: [CommonModule],
  templateUrl: './haikus.component.html',
  styleUrl: './haikus.component.css'

})

export class HaikusComponent implements OnInit {

  constructor(private PoemsService: PoemasService) { }

  public haikus: Poem[] = [];



  ngOnInit(): void {
    this.gethaikus()
  }

  gethaikus(): void {

    this.PoemsService.getPoems().subscribe({
    next: (data) => {
      console.log('Datos recibidos', data.entries);

      let sacarPoemas: Poem[] = [];

      data.entries.forEach((entry:Entry)=>{


      })



    },
    error: (err) => {
      console.error('Error al obtener los haikus:', err);
    }
  });




}
}




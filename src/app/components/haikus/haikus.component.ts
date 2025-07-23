
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogData, Entrada} from '../../interfaces/poem.interface';
import { PoemasService } from './../../services/poemas.service';


@Component({
  selector: 'app-haikus',
  imports: [CommonModule],
  templateUrl: './haikus.component.html',
  styleUrl: './haikus.component.css'

})

export class HaikusComponent implements OnInit {

  constructor(private PoemsService: PoemasService) { }

  //public haikus: Poem[] = [];

  blogData: BlogData | undefined;
  entries: Entrada[] = [];

  ngOnInit(): void {
  /* this.getHaikus()*/
  }

 /* getHaikus(){
    this.PoemsService.getPoems().subscribe(data =>{
    this.blogData = data;
    this.entries=  data.entries;

    })
  }*/

}




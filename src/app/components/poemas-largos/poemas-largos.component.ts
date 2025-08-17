import { Component, inject, OnInit } from '@angular/core';
import { poemsLarge } from '../../interfaces/poemsLarge.interface';
import { PoemasLargosService } from '../../services/poemasLargos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-poemas-largos',
  imports: [CommonModule],
  templateUrl: './poemas-largos.component.html',
  styleUrl: './poemas-largos.component.css'
})
export class PoemasLargosComponent implements OnInit {

  ngOnInit(): void {

   this.getPoemasLargos();
  }

  private poemasLargosService = inject(PoemasLargosService);
  public poemasLargos: poemsLarge[] = [];

  private isBrowser: boolean | undefined;


  getPoemasLargos(){
    this.poemasLargosService.getPoemasLarge().subscribe((data)=>{
      this.poemasLargos= data;
    })
  }

}

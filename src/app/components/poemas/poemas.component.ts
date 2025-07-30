import { AfterViewInit, Component, inject } from '@angular/core';
import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { poemsVerses } from '../../interfaces/poem.interface';


@Component({
  selector: 'app-poemas',
  imports: [],
  templateUrl: './poemas.component.html',
  styleUrl: './poemas.component.css'
})
export class PoemasComponent implements AfterViewInit {

  constructor() { }

  private poemasService = inject(PoemasyVersosService)
  public poemasYVersos: poemsVerses[] = [];


  ngAfterViewInit(): void {
  this.sacarPoemasYVersos()
  }


  sacarPoemasYVersos() {
    this.poemasService.getPoemsAndVerses().subscribe((data)=>{
     console.log(data)
      this.poemasYVersos = data
    })

  }
}

import { Component, inject } from '@angular/core';
import { MindFullnessService } from '../../services/MindFullness.service';


import { ReusableVersesComponent } from '../reusable-verses/reusable-verses.component';
import { PoemasyVersosService } from '../../services/PoemasyVersos.service';
import { PoemasLargosService } from '../../services/poemasLargos.service';
import { ImprovisacionesService } from '../../services/Improvisaciones.service';


@Component({
  selector: 'app-verses-page',
  imports: [ReusableVersesComponent],
  templateUrl: './verses-page.component.html',
  styleUrl: './verses-page.component.css'
})
export class VersesPageComponent {
 poemsService = inject(PoemasyVersosService);
 PoemasLargos= inject(PoemasLargosService);
 Improvisaciones= inject(ImprovisacionesService)
}

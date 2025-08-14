import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import scrollama from 'scrollama';

@Injectable({ providedIn: 'root' })

export class StoryTellingService {

 private scroller = scrollama();

   handleResize = () => {
    this.scroller.resize();
  };

  initScrolling() {
    this.scroller
      .setup({
        step: '.step',
        offset: 0.3,
        debug: false
      })
    }

}

import { poemsVerses } from './../../interfaces/poem.interface';
import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-reusable-verses',
  imports: [CommonModule],
  templateUrl: './reusable-verses.component.html',
  styleUrl: './reusable-verses.component.css'
})
export class ReusableVersesComponent implements OnInit, OnDestroy {

  @Input() data$!: Observable<poemsVerses[]>;
  private sub?: Subscription;
  private isBrowser: boolean;
  public verses:poemsVerses[] = [];
  @Input() title: string = '';

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.getVerses()
  }

  getVerses() {
    this.sub = this.data$.subscribe(data => {
      this.verses = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

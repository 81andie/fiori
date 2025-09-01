import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeishasComponent } from './card-geishas.component';

describe('CardGeishasComponent', () => {
  let component: CardGeishasComponent;
  let fixture: ComponentFixture<CardGeishasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGeishasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGeishasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

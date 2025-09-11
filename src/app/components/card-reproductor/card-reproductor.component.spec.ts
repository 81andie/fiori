import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReproductorComponent } from './card-reproductor.component';

describe('CardGeishasComponent', () => {
  let component: CardReproductorComponent;
  let fixture: ComponentFixture<CardReproductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReproductorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

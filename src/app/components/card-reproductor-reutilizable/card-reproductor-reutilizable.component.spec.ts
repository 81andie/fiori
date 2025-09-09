import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReproductorReutilizableComponent } from './card-reproductor-reutilizable.component';

describe('CardReproductorReutilizableComponent', () => {
  let component: CardReproductorReutilizableComponent;
  let fixture: ComponentFixture<CardReproductorReutilizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReproductorReutilizableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReproductorReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

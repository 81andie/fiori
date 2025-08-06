import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTiamatAudioComponent } from './card-tiamat-audio.component';

describe('CardTiamatAudioComponent', () => {
  let component: CardTiamatAudioComponent;
  let fixture: ComponentFixture<CardTiamatAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTiamatAudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTiamatAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

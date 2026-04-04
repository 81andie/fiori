import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAudioPeliComponent } from './card-audio-peli.component';

describe('CardAudioPeliComponent', () => {
  let component: CardAudioPeliComponent;
  let fixture: ComponentFixture<CardAudioPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAudioPeliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAudioPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

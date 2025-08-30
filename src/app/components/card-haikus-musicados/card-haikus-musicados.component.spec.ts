import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHaikusMusicadosComponent } from './card-haikus-musicados.component';

describe('CardHaikusMusicadosComponent', () => {
  let component: CardHaikusMusicadosComponent;
  let fixture: ComponentFixture<CardHaikusMusicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHaikusMusicadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHaikusMusicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

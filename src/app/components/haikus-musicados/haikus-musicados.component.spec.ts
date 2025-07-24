import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaikusMusicadosComponent } from './haikus-musicados.component';

describe('HaikusMusicadosComponent', () => {
  let component: HaikusMusicadosComponent;
  let fixture: ComponentFixture<HaikusMusicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaikusMusicadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaikusMusicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

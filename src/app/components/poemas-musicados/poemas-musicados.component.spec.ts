import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemasMusicadosComponent } from './poemas-musicados.component';

describe('PoemasMusicadosComponent', () => {
  let component: PoemasMusicadosComponent;
  let fixture: ComponentFixture<PoemasMusicadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemasMusicadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemasMusicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

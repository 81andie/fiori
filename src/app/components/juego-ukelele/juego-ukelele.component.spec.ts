import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoUkeleleComponent } from './juego-ukelele.component';

describe('JuegoUkeleleComponent', () => {
  let component: JuegoUkeleleComponent;
  let fixture: ComponentFixture<JuegoUkeleleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoUkeleleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoUkeleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

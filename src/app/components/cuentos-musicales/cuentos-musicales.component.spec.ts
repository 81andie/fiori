import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosMusicalesComponent } from './cuentos-musicales.component';

describe('CuentosMusicalesComponent', () => {
  let component: CuentosMusicalesComponent;
  let fixture: ComponentFixture<CuentosMusicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentosMusicalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentosMusicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

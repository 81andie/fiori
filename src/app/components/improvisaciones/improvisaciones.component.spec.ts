import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovisacionesComponent } from './improvisaciones.component';

describe('ImprovisacionesComponent', () => {
  let component: ImprovisacionesComponent;
  let fixture: ComponentFixture<ImprovisacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprovisacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovisacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

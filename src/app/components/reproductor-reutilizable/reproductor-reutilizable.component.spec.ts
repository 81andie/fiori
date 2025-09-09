import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorReutilizableComponent } from './reproductor-reutilizable.component';

describe('ReproductorReutilizableComponent', () => {
  let component: ReproductorReutilizableComponent;
  let fixture: ComponentFixture<ReproductorReutilizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReproductorReutilizableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproductorReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

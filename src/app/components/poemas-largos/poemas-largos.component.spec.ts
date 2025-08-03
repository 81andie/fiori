import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemasLargosComponent } from './poemas-largos.component';

describe('PoemasLargosComponent', () => {
  let component: PoemasLargosComponent;
  let fixture: ComponentFixture<PoemasLargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoemasLargosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemasLargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

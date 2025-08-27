import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaligramaComponent } from './caligrama.component';

describe('CaligramaComponent', () => {
  let component: CaligramaComponent;
  let fixture: ComponentFixture<CaligramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaligramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaligramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

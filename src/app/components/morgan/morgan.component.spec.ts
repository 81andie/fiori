import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorganComponent } from './morgan.component';

describe('MorganComponent', () => {
  let component: MorganComponent;
  let fixture: ComponentFixture<MorganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaikusGeishasComponent } from './haikus-geishas.component';

describe('HaikusGeishasComponent', () => {
  let component: HaikusGeishasComponent;
  let fixture: ComponentFixture<HaikusGeishasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaikusGeishasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaikusGeishasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

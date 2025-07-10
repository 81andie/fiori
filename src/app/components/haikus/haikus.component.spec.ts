import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaikusComponent } from './haikus.component';

describe('HaikusComponent', () => {
  let component: HaikusComponent;
  let fixture: ComponentFixture<HaikusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaikusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaikusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

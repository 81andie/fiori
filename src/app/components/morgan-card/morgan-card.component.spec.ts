import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorganCardComponent } from './morgan-card.component';

describe('MorganCardComponent', () => {
  let component: MorganCardComponent;
  let fixture: ComponentFixture<MorganCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorganCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorganCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

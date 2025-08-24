import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FioriPoPupComponent } from './fiori-po-pup.component';

describe('FioriPoPupComponent', () => {
  let component: FioriPoPupComponent;
  let fixture: ComponentFixture<FioriPoPupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FioriPoPupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FioriPoPupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

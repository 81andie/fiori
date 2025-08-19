import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableVersesComponent } from './reusable-verses.component';

describe('ReusableVersesComponent', () => {
  let component: ReusableVersesComponent;
  let fixture: ComponentFixture<ReusableVersesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableVersesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableVersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

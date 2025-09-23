import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakariComponent } from './sakari.component';

describe('SakariComponent', () => {
  let component: SakariComponent;
  let fixture: ComponentFixture<SakariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SakariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SakariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

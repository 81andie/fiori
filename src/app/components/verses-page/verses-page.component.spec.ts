import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesPageComponent } from './verses-page.component';

describe('VersesPageComponent', () => {
  let component: VersesPageComponent;
  let fixture: ComponentFixture<VersesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

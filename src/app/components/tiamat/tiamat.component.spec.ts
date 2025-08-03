import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiamatComponent } from './tiamat.component';

describe('TiamatComponent', () => {
  let component: TiamatComponent;
  let fixture: ComponentFixture<TiamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiamatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

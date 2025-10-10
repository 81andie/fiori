import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalsonComponent } from './malson.component';

describe('MalsonComponent', () => {
  let component: MalsonComponent;
  let fixture: ComponentFixture<MalsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

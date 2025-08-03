import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilfullnessPoemsComponent } from './milfullness-poems.component';

describe('MilfullnessPoemsComponent', () => {
  let component: MilfullnessPoemsComponent;
  let fixture: ComponentFixture<MilfullnessPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilfullnessPoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilfullnessPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

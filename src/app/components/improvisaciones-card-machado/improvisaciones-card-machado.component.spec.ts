import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovisacionesCardMachadoComponent } from './improvisaciones-card-machado.component';

describe('ImprovisacionesCardMachadoComponent', () => {
  let component: ImprovisacionesCardMachadoComponent;
  let fixture: ComponentFixture<ImprovisacionesCardMachadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprovisacionesCardMachadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovisacionesCardMachadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInputsComponent } from './auth-inputs.component';

describe('AuthInputsComponent', () => {
  let component: AuthInputsComponent;
  let fixture: ComponentFixture<AuthInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthInputsComponent]
    });
    fixture = TestBed.createComponent(AuthInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdsComponent } from './curds.component';

describe('CurdsComponent', () => {
  let component: CurdsComponent;
  let fixture: ComponentFixture<CurdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurdsComponent]
    });
    fixture = TestBed.createComponent(CurdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

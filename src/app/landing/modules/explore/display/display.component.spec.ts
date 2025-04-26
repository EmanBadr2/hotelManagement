import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplayComponent } from './display.component';

describe('DesplayComponent', () => {
  let component: DesplayComponent;
  let fixture: ComponentFixture<DesplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesplayComponent]
    });
    fixture = TestBed.createComponent(DesplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

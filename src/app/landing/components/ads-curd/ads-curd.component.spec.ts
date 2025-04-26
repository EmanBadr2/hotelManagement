import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsCurdComponent } from './ads-curd.component';

describe('AdsCurdComponent', () => {
  let component: AdsCurdComponent;
  let fixture: ComponentFixture<AdsCurdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsCurdComponent]
    });
    fixture = TestBed.createComponent(AdsCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

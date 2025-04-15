import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewEditComponent } from './dialog-view-edit.component';

describe('DialogViewEditComponent', () => {
  let component: DialogViewEditComponent;
  let fixture: ComponentFixture<DialogViewEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogViewEditComponent]
    });
    fixture = TestBed.createComponent(DialogViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

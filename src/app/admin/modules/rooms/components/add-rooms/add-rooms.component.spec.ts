import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomsComponent } from './add-rooms.component';

describe('AddRoomsComponent', () => {
  let component: AddRoomsComponent;
  let fixture: ComponentFixture<AddRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRoomsComponent]
    });
    fixture = TestBed.createComponent(AddRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

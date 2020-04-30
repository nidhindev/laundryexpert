import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryexpertComponent } from './laundryexpert.component';

describe('LaundryexpertComponent', () => {
  let component: LaundryexpertComponent;
  let fixture: ComponentFixture<LaundryexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

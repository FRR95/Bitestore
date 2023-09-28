import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptysearchcomponentComponent } from './emptysearchcomponent.component';

describe('EmptysearchcomponentComponent', () => {
  let component: EmptysearchcomponentComponent;
  let fixture: ComponentFixture<EmptysearchcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptysearchcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptysearchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenusideComponent } from './navmenuside.component';

describe('NavmenusideComponent', () => {
  let component: NavmenusideComponent;
  let fixture: ComponentFixture<NavmenusideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavmenusideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmenusideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePortatilesComponent } from './store-portatiles.component';

describe('StorePortatilesComponent', () => {
  let component: StorePortatilesComponent;
  let fixture: ComponentFixture<StorePortatilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePortatilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePortatilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

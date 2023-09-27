import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreImpresorasComponent } from './store-impresoras.component';

describe('StoreImpresorasComponent', () => {
  let component: StoreImpresorasComponent;
  let fixture: ComponentFixture<StoreImpresorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreImpresorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreImpresorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

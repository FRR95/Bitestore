import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDiscosDurosComponent } from './store-discos-duros.component';

describe('StoreDiscosDurosComponent', () => {
  let component: StoreDiscosDurosComponent;
  let fixture: ComponentFixture<StoreDiscosDurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDiscosDurosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDiscosDurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

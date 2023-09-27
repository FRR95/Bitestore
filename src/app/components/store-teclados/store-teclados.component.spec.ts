import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTecladosComponent } from './store-teclados.component';

describe('StoreTecladosComponent', () => {
  let component: StoreTecladosComponent;
  let fixture: ComponentFixture<StoreTecladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTecladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTecladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

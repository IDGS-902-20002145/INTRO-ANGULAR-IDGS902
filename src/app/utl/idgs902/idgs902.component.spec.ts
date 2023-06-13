import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Idgs902Component } from './idgs902.component';

describe('Idgs902Component', () => {
  let component: Idgs902Component;
  let fixture: ComponentFixture<Idgs902Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Idgs902Component]
    });
    fixture = TestBed.createComponent(Idgs902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

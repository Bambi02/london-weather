import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCalculatorComponent } from './index-calculator.component';

describe('IndexCalculatorComponent', () => {
  let component: IndexCalculatorComponent;
  let fixture: ComponentFixture<IndexCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

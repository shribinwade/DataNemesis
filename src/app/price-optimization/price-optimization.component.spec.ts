import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceOptimizationComponent } from './price-optimization.component';

describe('PriceOptimizationComponent', () => {
  let component: PriceOptimizationComponent;
  let fixture: ComponentFixture<PriceOptimizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceOptimizationComponent]
    });
    fixture = TestBed.createComponent(PriceOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

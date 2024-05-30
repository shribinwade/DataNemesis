import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SKUSearchComponent } from './sku-search.component';

describe('SKUSearchComponent', () => {
  let component: SKUSearchComponent;
  let fixture: ComponentFixture<SKUSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SKUSearchComponent]
    });
    fixture = TestBed.createComponent(SKUSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

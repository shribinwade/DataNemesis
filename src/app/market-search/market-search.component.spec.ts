import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSearchComponent } from './market-search.component';

describe('MarketSearchComponent', () => {
  let component: MarketSearchComponent;
  let fixture: ComponentFixture<MarketSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketSearchComponent]
    });
    fixture = TestBed.createComponent(MarketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAnalysisComponent } from './review-analysis.component';

describe('ReviewAnalysisComponent', () => {
  let component: ReviewAnalysisComponent;
  let fixture: ComponentFixture<ReviewAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewAnalysisComponent]
    });
    fixture = TestBed.createComponent(ReviewAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

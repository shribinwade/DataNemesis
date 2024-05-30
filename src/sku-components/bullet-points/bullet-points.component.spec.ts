import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletPointsComponent } from './bullet-points.component';

describe('BulletPointsComponent', () => {
  let component: BulletPointsComponent;
  let fixture: ComponentFixture<BulletPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletPointsComponent]
    });
    fixture = TestBed.createComponent(BulletPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

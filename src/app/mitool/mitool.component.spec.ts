import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIToolComponent } from './mitool.component';

describe('MIToolComponent', () => {
  let component: MIToolComponent;
  let fixture: ComponentFixture<MIToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MIToolComponent]
    });
    fixture = TestBed.createComponent(MIToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

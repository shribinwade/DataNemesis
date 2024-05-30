import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkusearchComponent } from './skusearch.component';

describe('SkusearchComponent', () => {
  let component: SkusearchComponent;
  let fixture: ComponentFixture<SkusearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkusearchComponent]
    });
    fixture = TestBed.createComponent(SkusearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

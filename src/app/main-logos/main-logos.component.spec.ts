import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLogosComponent } from './main-logos.component';

describe('MainLogosComponent', () => {
  let component: MainLogosComponent;
  let fixture: ComponentFixture<MainLogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLogosComponent]
    });
    fixture = TestBed.createComponent(MainLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLordLoginComponent } from './land-lord-login.component';

describe('LandLordLoginComponent', () => {
  let component: LandLordLoginComponent;
  let fixture: ComponentFixture<LandLordLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandLordLoginComponent]
    });
    fixture = TestBed.createComponent(LandLordLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

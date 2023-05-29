import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLordRegistrationComponent } from './land-lord-registration.component';

describe('LandLordRegistrationComponent', () => {
  let component: LandLordRegistrationComponent;
  let fixture: ComponentFixture<LandLordRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandLordRegistrationComponent]
    });
    fixture = TestBed.createComponent(LandLordRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

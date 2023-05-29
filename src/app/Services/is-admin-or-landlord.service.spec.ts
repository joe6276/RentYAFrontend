import { TestBed } from '@angular/core/testing';

import { IsAdminOrLandlordService } from './is-admin-or-landlord.service';

describe('IsAdminOrLandlordService', () => {
  let service: IsAdminOrLandlordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsAdminOrLandlordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

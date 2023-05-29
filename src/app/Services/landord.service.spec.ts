import { TestBed } from '@angular/core/testing';

import { LandordService } from './landord.service';

describe('LandordService', () => {
  let service: LandordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

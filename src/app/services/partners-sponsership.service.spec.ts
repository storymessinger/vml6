import { TestBed, inject } from '@angular/core/testing';

import { PartnersSponsershipService } from './partners-sponsership.service';

describe('PartnersSponsershipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnersSponsershipService]
    });
  });

  it('should be created', inject([PartnersSponsershipService], (service: PartnersSponsershipService) => {
    expect(service).toBeTruthy();
  }));
});

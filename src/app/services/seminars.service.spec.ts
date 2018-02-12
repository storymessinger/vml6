import { TestBed, inject } from '@angular/core/testing';

import { SeminarsService } from './seminars.service';

describe('SeminarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeminarsService]
    });
  });

  it('should be created', inject([SeminarsService], (service: SeminarsService) => {
    expect(service).toBeTruthy();
  }));
});

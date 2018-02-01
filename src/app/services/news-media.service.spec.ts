import { TestBed, inject } from '@angular/core/testing';

import { NewsMediaService } from './news-media.service';

describe('NewsMediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsMediaService]
    });
  });

  it('should be created', inject([NewsMediaService], (service: NewsMediaService) => {
    expect(service).toBeTruthy();
  }));
});

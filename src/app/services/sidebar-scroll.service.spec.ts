import { TestBed, inject } from '@angular/core/testing';

import { SidebarScrollService } from './sidebar-scroll.service';

describe('SidebarScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarScrollService]
    });
  });

  it('should be created', inject([SidebarScrollService], (service: SidebarScrollService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { SACService } from './sac.service';

describe('SACService', () => {
  let service: SACService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SACService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

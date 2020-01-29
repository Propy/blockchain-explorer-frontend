import { TestBed } from '@angular/core/testing';

import { DeedService } from './deed.service';

describe('DeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeedService = TestBed.get(DeedService);
    expect(service).toBeTruthy();
  });
});

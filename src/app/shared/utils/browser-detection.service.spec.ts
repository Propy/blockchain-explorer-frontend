import { TestBed } from '@angular/core/testing';

import { BrowserDetectionService } from './browser-detection.service';

describe('BrowserDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserDetectionService = TestBed.get(BrowserDetectionService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UserTokenService } from './user-token.service';

describe('UserTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTokenService = TestBed.get(UserTokenService);
    expect(service).toBeTruthy();
  });
});

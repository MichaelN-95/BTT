import { TestBed } from '@angular/core/testing';

import { AuthGuardLogin } from './auth-guard-login.service';

describe('AuthGuardLoginService', () => {
  let service: AuthGuardLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoginNewService } from './login-new.service';

describe('LoginNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginNewService = TestBed.get(LoginNewService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServicesAuthInterceptorsService } from './services-auth-interceptors.service';

describe('ServicesAuthInterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesAuthInterceptorsService = TestBed.get(ServicesAuthInterceptorsService);
    expect(service).toBeTruthy();
  });
});

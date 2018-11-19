import { TestBed } from '@angular/core/testing';

import { ServiceStarwarsService } from './service-starwars.service';

describe('ServiceStarwarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceStarwarsService = TestBed.get(ServiceStarwarsService);
    expect(service).toBeTruthy();
  });
});

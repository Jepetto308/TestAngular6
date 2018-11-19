import { TestBed } from '@angular/core/testing';

import { RegistroPersonaService } from './registro-persona.service';

describe('RegistroPersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroPersonaService = TestBed.get(RegistroPersonaService);
    expect(service).toBeTruthy();
  });
});

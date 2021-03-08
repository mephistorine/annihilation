import { TestBed } from '@angular/core/testing';

import { AnnihilationService } from './annihilation.service';

describe('AnnihilationService', () => {
  let service: AnnihilationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnihilationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

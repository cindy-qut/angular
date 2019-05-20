import { TestBed } from '@angular/core/testing';

import { TailleService } from './taille.service';

describe('TailleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TailleService = TestBed.get(TailleService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChercherFilmService } from './chercher-film.service';

describe('ChercherFilmService', () => {
  let service: ChercherFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChercherFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

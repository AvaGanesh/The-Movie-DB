import { TestBed } from '@angular/core/testing';

import { MovieDBAPIService } from './movie-dbapi.service';

describe('MovieDBAPIService', () => {
  let service: MovieDBAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieDBAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CoursesWithFetchService } from './courses-with-fetch.service';

describe('CoursesWithFetchService', () => {
  let service: CoursesWithFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesWithFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

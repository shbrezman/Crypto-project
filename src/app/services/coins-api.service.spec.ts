import { TestBed } from '@angular/core/testing';

import { CoinsApiService } from './coins-api.service';

describe('CoinsApiService', () => {
  let service: CoinsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

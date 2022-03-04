import { TestBed } from '@angular/core/testing';

import { SentimientoApiService } from './sentimiento-api.service';

describe('SentimientoApiService', () => {
  let service: SentimientoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimientoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

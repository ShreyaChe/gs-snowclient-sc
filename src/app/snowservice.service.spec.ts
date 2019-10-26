import { TestBed } from '@angular/core/testing';

import { SnowserviceService } from './snowservice.service';

describe('SnowserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnowserviceService = TestBed.get(SnowserviceService);
    expect(service).toBeTruthy();
  });
});

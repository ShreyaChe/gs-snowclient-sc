import { TestBed } from '@angular/core/testing';

import { NodejService } from './nodej.service';

describe('NodejService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NodejService = TestBed.get(NodejService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NeuralNetworkServiceService } from './neural-network-service.service';

describe('NeuralNetworkServiceService', () => {
  let service: NeuralNetworkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeuralNetworkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

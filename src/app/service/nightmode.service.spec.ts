import { TestBed } from '@angular/core/testing';

import { NightmodeService } from './nightmode.service';

describe('NightmodeService', () => {
  let service: NightmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NightmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

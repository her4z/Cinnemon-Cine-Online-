import { TestBed } from '@angular/core/testing';

import { SeatsSoldService } from './seats-sold.service';

describe('SeatsSoldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatsSoldService = TestBed.get(SeatsSoldService);
    expect(service).toBeTruthy();
  });
});

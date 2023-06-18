import { TestBed } from '@angular/core/testing';

import { SkilsService } from './skils.service';

describe('SkilsService', () => {
  let service: SkilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

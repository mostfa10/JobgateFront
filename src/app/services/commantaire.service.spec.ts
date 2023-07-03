import { TestBed } from '@angular/core/testing';

import { CommantaireService } from './commantaire.service';

describe('CommantaireService', () => {
  let service: CommantaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommantaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

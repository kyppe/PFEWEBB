import { TestBed } from '@angular/core/testing';

import { MatchProfileCategorieService } from './match-profile-categorie.service';

describe('MatchProfileCategorieService', () => {
  let service: MatchProfileCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchProfileCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

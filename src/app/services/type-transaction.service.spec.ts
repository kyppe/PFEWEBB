import { TestBed } from '@angular/core/testing';

import { TypeTransactionService } from './type-transaction.service';

describe('TypeTransactionService', () => {
  let service: TypeTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

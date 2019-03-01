import { TestBed, inject } from '@angular/core/testing';

import { UsercoService } from './userco.service';

describe('UsercoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercoService]
    });
  });

  it('should be created', inject([UsercoService], (service: UsercoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ZoomeventService } from './zoomevent.service';

describe('ZoomeventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZoomeventService]
    });
  });

  it('should be created', inject([ZoomeventService], (service: ZoomeventService) => {
    expect(service).toBeTruthy();
  }));
});

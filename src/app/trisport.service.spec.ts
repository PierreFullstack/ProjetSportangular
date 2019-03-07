import { TestBed, inject } from '@angular/core/testing';

import { TrisportService } from './trisport.service';

describe('TrisportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrisportService]
    });
  });

  it('should be created', inject([TrisportService], (service: TrisportService) => {
    expect(service).toBeTruthy();
  }));
});

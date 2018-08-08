import { TestBed, inject } from '@angular/core/testing';

import { MapitService } from './mapit.service';

describe('MapitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapitService]
    });
  });

  it('should be created', inject([MapitService], (service: MapitService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { MockDamageService } from './mock-damage.service';

describe('MockDamageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDamageService]
    });
  });

  it('should be created', inject([MockDamageService], (service: MockDamageService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { MassageService } from './massage.service';

describe('MassageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassageService]
    });
  });

  it('should be created', inject([MassageService], (service: MassageService) => {
    expect(service).toBeTruthy();
  }));
});

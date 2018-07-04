import { TestBed, inject } from '@angular/core/testing';

import { ItemDetailService } from './item-detail.service';

describe('ItemDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDetailService]
    });
  });

  it('should be created', inject([ItemDetailService], (service: ItemDetailService) => {
    expect(service).toBeTruthy();
  }));
});

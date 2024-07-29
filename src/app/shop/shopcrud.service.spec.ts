import { TestBed } from '@angular/core/testing';

import { ShopcrudService } from './shopcrud.service';

describe('ShopcrudService', () => {
  let service: ShopcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

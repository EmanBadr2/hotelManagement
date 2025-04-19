/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdsService } from './ads.service';

describe('Service: Ads', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdsService]
    });
  });

  it('should ...', inject([AdsService], (service: AdsService) => {
    expect(service).toBeTruthy();
  }));
});

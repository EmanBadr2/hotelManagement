import { TestBed } from '@angular/core/testing';

import { CommentRateService } from './comment-rate.service';

describe('CommentRateService', () => {
  let service: CommentRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

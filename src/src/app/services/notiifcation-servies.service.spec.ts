import { TestBed } from '@angular/core/testing';

import { NotiifcationServiesService } from './notiifcation-servies.service';

describe('NotiifcationServiesService', () => {
  let service: NotiifcationServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiifcationServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

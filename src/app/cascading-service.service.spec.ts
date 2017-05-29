import { TestBed, inject } from '@angular/core/testing';

import { CascadingServiceService } from './cascading-service.service';

describe('CascadingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CascadingServiceService]
    });
  });

  it('should ...', inject([CascadingServiceService], (service: CascadingServiceService) => {
    expect(service).toBeTruthy();
  }));
});

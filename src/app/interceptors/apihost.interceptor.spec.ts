import { TestBed } from '@angular/core/testing';

import { ApihostInterceptor } from './apihost.interceptor';

describe('ApihostInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApihostInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApihostInterceptor = TestBed.inject(ApihostInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApihostInterceptor } from './apihost.interceptor';

export const httpinterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ApihostInterceptor, multi: true },
];

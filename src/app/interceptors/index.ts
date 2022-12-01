import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApihostInterceptor } from './apihost.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const httpinterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ApihostInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];

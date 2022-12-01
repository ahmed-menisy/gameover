import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApihostInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes(
        `https://free-to-play-games-database.p.rapidapi.com/api`
      )
    ) {
      request = request.clone({
        setHeaders: {
          'X-RapidAPI-Key':
            '761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
      });
    }

    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environments } from './../environments/environment';
import { AuthService } from './../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _AuthService: AuthService,
    private toastrService: ToastrService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (
          !request.url.includes(
            `https://free-to-play-games-database.p.rapidapi.com/api`
          ) &&
          err.status === 0
        ) {
          if (request.url.includes('https://routeegypt.herokuapp.com/')) {
            environments.authApi = `https://route-egypt-api.herokuapp.com/`;
          } else if (
            request.url.includes('https://route-egypt-api.herokuapp.com/')
          ) {
            environments.authApi = `https://sticky-note-fe.vercel.app/`;
          }

          this.toastrService.error(
            `${err.name}\n(Error In Api) \nPlease Try Again `,
            'Error',
            {
              timeOut: 3000,
            }
          );
        }

        return throwError(() => new Error(err));
      })
    );
  }
}

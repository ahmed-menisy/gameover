import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environments } from './../../environments/environment';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient) {
    this.saveUserData();
  }

  userData: BehaviorSubject<any> = new BehaviorSubject(null);

  // Sign UP Api
  signUpApi(obj: object): Observable<any> {
    return this._HttpClient.post(`${environments.authApi}signup`, obj);
  }

  // Sign In Api
  signInApi(obj: object): Observable<any> {
    return this._HttpClient.post(`${environments.authApi}signin`, obj);
  }

  // Save Data User
  saveUserData(): void {
    if (localStorage.getItem('uGame')) {
      const encode: string | null = localStorage.getItem('uGame');
      const decode: any = jwtDecode(encode!);
      this.userData.next(decode);
      console.log(decode);
    }
  }
}

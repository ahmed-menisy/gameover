import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environments } from './../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private _AuthService: AuthService,
    private _HttpClient: HttpClient,
    private _Router: Router
  ) {}
  @ViewChild('navbar') navbar!: ElementRef;

  @HostListener('window:scroll')
  onScroll() {
    if (scrollY > 0) {
      this.navbar.nativeElement.classList.add('fixed-top');
    } else {
      this.navbar.nativeElement.classList.remove('fixed-top');
    }
  }

  signOut(): void {
    this._HttpClient.post(`${environments.authApi}signOut`, {
      token: JSON.stringify(localStorage.getItem('uGame')),
    });
    this._AuthService.userData.next(null);
    localStorage.removeItem('uGame');
    this._Router.navigate(['/home']);
  }
}

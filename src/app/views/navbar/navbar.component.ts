import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @HostListener('window:scroll')
  onScroll() {
    if (scrollY > 0) {
      this.navbar.nativeElement.classList.add('fixed-top');
    } else {
      this.navbar.nativeElement.classList.remove('fixed-top');
    }
  }
}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Directive({
  selector: '[applogin]',
})
export class IsloginDirective {
  constructor(
    private el: ElementRef,
    private re: Renderer2,
    private _AuthService: AuthService
  ) {
    this._AuthService.userData.subscribe({
      next: (response) => {
        if (response) {
          this.re.setAttribute(this.el.nativeElement, 'hidden', 'true');
        } else {
          this.re.removeAttribute(this.el.nativeElement, 'hidden');
        }
      },
    });
  }
}

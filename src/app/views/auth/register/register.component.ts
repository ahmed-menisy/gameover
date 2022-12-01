import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from './../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router,
    private toastrService: ToastrService
  ) {}

  registerForm: FormGroup = this.fb.group({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{3,10}$/),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(80),
    ]),
  });

  // Sign Up Form
  setSignUpForm(obj: FormGroup): void {
    if (obj.valid)
      this._AuthService.signUpApi(obj.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message === 'success') {
            obj.reset();
            this.toastrService.success('SignUp Successfully', 'Success', {
              timeOut: 3000,
            });
            this._Router.navigate(['/auth/signin']);
          } else {
            this.toastrService.error(
              `${response.message.slice(response.message.indexOf(':') + 1)}`,
              'Error',
              {
                timeOut: 3000,
              }
            );
          }
        },
      });
  }
}

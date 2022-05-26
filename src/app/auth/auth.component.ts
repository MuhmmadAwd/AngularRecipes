import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  OnSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
        this.isLoading = false;
        this.router.navigate(["/recipes"])
      },
      (errorRes) => {
        console.log(errorRes);
        if (errorRes.error.error.message == 'EMAIL_EXISTS') {
          this.error = 'this email exists already! try another one';
        } else if (errorRes.error.error.message == 'EMAIL_NOT_FOUND') {
          this.error = 'this email not found! try again';
        } else {
          this.error = 'there an unknown error';
        }
        this.isLoading = false;
      }
    );
    form.reset();
  }

  ngOnInit(): void {}
}

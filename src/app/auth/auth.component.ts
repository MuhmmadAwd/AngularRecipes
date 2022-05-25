import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isLoginMode = true;
  isLoading = false;
  error:string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  OnSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (errorRes) => {
          console.log(errorRes);
          if(errorRes.error.error.message == "EMAIL_EXISTS"){
            this.error = "this email exists already! try another one"
          }else{
            this.error = "there an unknown error"
          }
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }

  ngOnInit(): void {}
}

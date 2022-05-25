import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthResData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdTJ76CELlVKhN8nR_oGYIg9nOUtR6kbw',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdTJ76CELlVKhN8nR_oGYIg9nOUtR6kbw',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }
}

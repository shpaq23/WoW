import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginForm} from '../interfaces/login-form';
import {JwtToken} from '../interfaces/jwt-token';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }
  login(loginCredentials: LoginForm): Observable<JwtToken> {
    return this.http.post<JwtToken>(this.url + '/login', {email: loginCredentials.email, password: loginCredentials.password});
  }
}


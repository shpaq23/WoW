import { Component } from '@angular/core';
import {LoginForm} from './interfaces/login-form';
import {AuthService} from './services/auth.service';
import {JwtToken} from './interfaces/jwt-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginCredentials: LoginForm;


  constructor(private authService: AuthService) { }

  setLoginCredentials(formValue: LoginForm) {
    this.loginCredentials = formValue;
    console.log(this.loginCredentials);
    this.login();
  }
  login() {
    this.authService.login(this.loginCredentials)
      .subscribe((response: JwtToken) => {
        console.log(response);
      });
  }

}

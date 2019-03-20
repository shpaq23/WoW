import { Component } from '@angular/core';
import {LoginForm} from './panel/login-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginCredentials: LoginForm;

  setLoginCredentials(formValue: LoginForm) {
    this.loginCredentials = formValue;
    console.log(this.loginCredentials);
  }

}

import { Component, OnInit } from '@angular/core';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(formValue: LoginForm) {
    console.log(formValue);
  }

}

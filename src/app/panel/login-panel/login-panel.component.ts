import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginForm} from '../login-form';



@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  @Output() loginCredentials = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  login(formValue: LoginForm) {
    this.loginCredentials.emit(formValue);
  }

}

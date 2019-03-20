import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginForm} from '../login-form';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Output() loginCredentials = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  sendFurther(formValue: LoginForm) {
    this.loginCredentials.emit(formValue);
  }

}

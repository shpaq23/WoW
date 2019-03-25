import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationService} from '../../api/services/registration.service';
import {RegistrationForm} from '../../api/interfaces/registration-form';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-registration-panel',
  templateUrl: './registration-panel.component.html',
  styleUrls: ['./registration-panel.component.css']
})
export class RegistrationPanelComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(private router: Router, private registerService: RegistrationService) { }



  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', {validators: [Validators.required]}),
      last_name: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      passwords: new FormGroup({
        password: new FormControl('', {validators: [Validators.required]}),
        re_password: new FormControl('', {validators: [Validators.required]}),
      }, {validators: [this.checkPasswords]}),
      creation_password: new FormControl('', {validators: [Validators.required]})
    }, {updateOn: 'submit'});
  }

  checkPasswords(group: FormGroup) {

    return group.controls.password.value === group.controls.re_password.value ? null : {notSame: true};
  }

  get form(): RegistrationForm {
    return {
      first_name: this.registerForm.controls.first_name.value,
      last_name: this.registerForm.controls.last_name.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      creation_password: this.registerForm.controls.creation_password.value
    };
  }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.registerService.register(this.form)
      .pipe(first())
      .subscribe({
        complete: () => { this.router.navigate(['/login']); },
        error: err => {
          this.error = err;
          this.loading = false;
        }
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../api/services/authentication.service';
import {first} from 'rxjs/operators';
import {LoginForm} from '../../api/interfaces/login-form';


@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
      }, {updateOn: 'submit'});

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['']);
    }
    // this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/characters';
    }


  get form(): LoginForm {
    return {email: this.loginForm.controls.email.value, password: this.loginForm.controls.password.value};
  }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.form)
      .pipe(first())
      .subscribe({
          complete: () => { this.router.navigate([this.returnUrl]); },
          error: err => {
            this.error = err;
            this.loading = false; }
          });

  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationForm} from '../interfaces/registration-form';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  register(rF: RegistrationForm) {
    return this.http.post(this.url + '/register', {
      first_name: rF.first_name,
      last_name: rF.last_name,
      email: rF.email,
      password: rF.password,
      creation_password: rF.creation_password
    });
  }

}

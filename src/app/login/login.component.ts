import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  loginForm = new FormGroup({
    username: this.username,
    password: this.password
  });
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  submit() {
    const result = this.auth.performLogin(this.loginForm.value.username, this.loginForm.value.password);
  }

}

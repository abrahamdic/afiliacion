import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  password: string;
  login_sucessfull: boolean = false;
  login_error: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    // Validación básica 
    if (this.usuario === undefined && this.password === undefined) {
      this.login_sucessfull = false;
      this.login_error = true;
    } else if (this.usuario === undefined || this.password === undefined) {
      this.login_sucessfull = false;
      this.login_error = true;
    } else if (this.usuario !== 'abraham' && this.password !== 'aquino') {
      this.login_sucessfull = false;
      this.login_error = true;
    } else if (this.usuario === 'abraham' && this.password === 'aquino') {
      this.login_sucessfull = true;
      this.login_error = false;
    } else {
      this.login_sucessfull = false;
      this.login_error = true;
    }
  }
}

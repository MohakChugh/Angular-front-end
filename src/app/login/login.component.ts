import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  getEmailPassword(email: any, password: any) {
    this.email = email;
    this.password = password;
    console.log(password);
    console.log(email);

    // check vaidation and then
    this.router.navigate(['/dashboard']);
  }
}

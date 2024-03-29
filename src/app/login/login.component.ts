import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  rooturl = 'http://localhost:8080';
  DATA = {};
  res = {};
  constructor( private router: Router, private http: HttpClient ) { }

  requestmethod(url, DATA) {
    return this.http.post(this.rooturl + url, DATA, {responseType: 'text'}).subscribe(response => {
      console.log(response);
      let recieveddata = {
        status : 200
      };
      recieveddata = JSON.parse(response);
      console.log(recieveddata.status);
      if (recieveddata.status === 200) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  getEmailPassword(email: any, password: any) {
    this.email = email;
    this.password = password;
    console.log(password);
    console.log(email);
    this.DATA = {
      email : this.email,
      password : this.password
    };
    this.res = this.requestmethod('/api/auth/login', this.DATA);
  }
}

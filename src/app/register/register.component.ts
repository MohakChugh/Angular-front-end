import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeatpassword: string;
  aadharnumber: number;
  phonenumber: number;
  DATA = {};
  res = {};
  rooturl = 'http://localhost:8080';
  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit() {
  }

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

  getdata(firstname: any, lastname: any, email: any, password: any, repeatpassword: any, aadharnumber: any, phonenumber: any) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.aadharnumber = aadharnumber;
    this.phonenumber = phonenumber;
    this.repeatpassword = repeatpassword;
    console.log(email);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    console.log(aadharnumber);
    console.log(phonenumber);
    console.log(repeatpassword);
    this.DATA = {
      email : this.email,
      password : this.password,
      firstname : this.firstname,
      lastname : this.lastname,
      aadharnumber : this.aadharnumber,
      phonenumber : this.phonenumber,
      repeatpassword : this.repeatpassword
    };
    this.res = this.requestmethod('/api/auth/signup', this.DATA);
  }

}

import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  getdata(firstname: any, lastname: any, email: any, password: any, repeatpassword: any, aadharnumber: any, phonenumber: any) {
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    console.log(repeatpassword);
    console.log(aadharnumber);
    console.log(phonenumber);
  }

}

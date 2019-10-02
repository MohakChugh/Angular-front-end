import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  callmeetings: any;
  requests: any;
  tasks: any;
  alerts: any;

  rooturl = 'http://localhost:8080';
  DATA = {};
  res = {};

  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit() {
    this.requestmethod('/api/dashboard', this.DATA);
  }

  requestmethod(url, DATA) {
    return this.http.post(this.rooturl + url, DATA, {responseType: 'text'}).subscribe(response => {
      console.log(response);
      let recieveddata = {
        call_meetings: 10,
        forecast: 10,
        id: 10,
        pending_request: 10,
        tasks: 10
    };
      recieveddata = JSON.parse(response);
      console.log(recieveddata);
      this.callmeetings = recieveddata.call_meetings;
      this.alerts = recieveddata.forecast;
      this.requests = recieveddata.pending_request;
      this.tasks = recieveddata.tasks;
    });
  }
}

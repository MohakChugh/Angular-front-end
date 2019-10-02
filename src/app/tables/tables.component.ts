import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  rooturl = 'http://localhost:8080';
  DATA = {};
  res = {};

  problems = [];

//   problems = [{
//     digitalSignatures: 1,
//     location: 'Kalkaji',
//     name: 'Mohak Chugh',
//     problemid: 1,
//     reportDate: '2019-10-02',
//     status: 'Pending',
//     upvoes: 1
// },
// {
//     digitalSignatures: 1,
//     location: 'Janakpuri',
//     name: 'Narender Kumar',
//     problemid: 2,
//     reportDate: '2019-10-02',
//     status: 'Pending',
//     upvoes: 1
// },
// {
//     digitalSignatures: 1,
//     location: 'Cr Park',
//     name: 'Mohak Chugh',
//     problemid: 3,
//     reportDate: '2019-10-02',
//     status: 'Active',
//     upvoes: 1
// },
// {
//     digitalSignatures: 3,
//     location: 'Cr Park',
//     name: 'Riya Kumar',
//     problemid: 4,
//     reportDate: '2019-10-02',
//     status: 'Active',
//     upvoes: 1
// },
// {
//     digitalSignatures: 3,
//     location: 'Cr Park',
//     name: 'Rupali Singh',
//     problemid: 5,
//     reportDate: '2019-10-02',
//     status: 'Active',
//     upvoes: 1
// },
// {
//     digitalSignatures: 3,
//     location: 'Kalkaji',
//     name: 'Rashi Jhamb',
//     problemid: 6,
//     reportDate: '2019-10-02',
//     status: 'Active',
//     upvoes: 1
// }];
  constructor( private router: Router, private http: HttpClient ) { }

  ngOnInit() {
    this.requestmethod('/api/feed', this.DATA);

  }
  requestmethod(url, DATA) {
    return this.http.post(this.rooturl + url, DATA, {responseType: 'text'}).subscribe(response => {
      console.log(response);
    //   let recieveddata = {
    //     call_meetings: 10,
    //     forecast: 10,
    //     id: 10,
    //     pending_request: 10,
    //     tasks: 10
    // };
      this.problems = JSON.parse(response);
      // console.log(recieveddata);
      // this.callmeetings = recieveddata.call_meetings;
      // this.alerts = recieveddata.forecast;
      // this.requests = recieveddata.pending_request;
      // this.tasks = recieveddata.tasks;
    });
  }
}

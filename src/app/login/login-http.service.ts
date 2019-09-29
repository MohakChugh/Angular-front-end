import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {
  private rooturl = 'localhost:8080';

  constructor(private http: HttpClient) { }
  public requestmethod(url, data) {
    return this.http.post(this.rooturl + url, data);
  }
}

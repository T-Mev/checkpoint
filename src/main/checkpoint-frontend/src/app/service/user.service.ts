import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private url: UrlService) { }


  login(username: string, password: string) {
    this.http.post(`${this.url.url}/REST/auth/login`, {username: username, password: password}, this.httpOptions).subscribe((res: any) => {
      sessionStorage.setItem("username", res.username);
      sessionStorage.setItem("token", `${res.tokenType} ${res.accessToken}`);
      window.location.reload();
    })
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  register(username: string, password: string) {
    return this.http.post(`${this.url.url}/REST/auth/register`, {username: username, password: password}, this.httpOptions);
  }

  // Add to each necessary component instead
  authenticate() {
    return sessionStorage.getItem('username') !== null;
  }

}

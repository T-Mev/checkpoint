import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private url: UrlService) { }

  login(credentials): Observable<any> {
    return this.http.post(this.url.authUrl + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this.url.authUrl + 'register', {
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}

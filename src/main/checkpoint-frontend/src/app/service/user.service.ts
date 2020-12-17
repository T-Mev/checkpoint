import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getUserCollection(username: string): Observable<any> {
    return this.http.get(`${this.url.generalUrl}/REST/user?name=${username}`, { responseType: 'text' });
  } 

  // Add to each necessary component instead
  // authenticate() {
  //   return sessionStorage.getItem('username') !== null;
  // }

}

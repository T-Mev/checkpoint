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
export class UserService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getUserCollection(username: string): Observable<any> {
    // return this.http.get(`${this.url.generalUrl}/REST/user?name=${username}`, { responseType: 'text' });
    return this.http.get(`${this.url.generalUrl}/REST/user?name=${username}`);
  }

  addGameToCollection(username: string, gameId: number): Observable<any> {
    return this.http.post(`${this.url.generalUrl}/REST/user/${username}`, gameId, httpOptions);
  }

  // addGameToCollection(username: string, gameId: number): Observable<any> {
  //   return this.http.post(`${this.url.generalUrl}user?username=${username}&gameId=${gameId}`, { username: username, gameId: gameId }, httpOptions);
  // }

  // Add to each necessary component instead
  // authenticate() {
  //   return sessionStorage.getItem('username') !== null;
  // }

}

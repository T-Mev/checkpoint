import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

// Put in separate file
// interface userInfo {
//   username: string;
//   password: string;
// }

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getGame(id: number) {
    return this.http.get(`${this.url.url}/REST/games?id=${id}`);
  }

  getPlatform(id: number) {
    return this.http.get(`${this.url.url}/REST/browse?platform=${id}`);
  }

  getPopular() {
    return this.http.get(`${this.url.url}/REST`);
  }

  getSearch(value: string) {
    return this.http.get(`${this.url.url}/REST/search?term=${value}`);
  }

  getUpcoming() {
    return this.http.get(`${this.url.url}/REST/upcoming`);
  }

  // login(userInfo: userInfo) {
  //   return this.http.post(`${this.url.url}/REST/login`, userInfo)
  // }

}

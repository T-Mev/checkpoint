import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Put in separate file
// interface userInfo {
//   username: string;
//   password: string;
// }

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // Development url:
  url: string = "http://localhost:8080";

  // Production url:
  // url: string = "";

  constructor(private http: HttpClient) { }

  getGame(id: number) {
    return this.http.get(`${this.url}/REST/games?id=${id}`);
  }

  getPlatform(id: number) {
    return this.http.get(`${this.url}/REST/browse?platform=${id}`);
  }

  getPopular() {
    return this.http.get(`${this.url}/REST`);
  }

  getSearch(value: string) {
    return this.http.get(`${this.url}/REST/search?term=${value}`);
  }

  getUpcoming() {
    return this.http.get(`${this.url}/REST/upcoming`);
  }

  // login(userInfo: userInfo) {
  //   return this.http.post(`${this.url}/REST/login`, userInfo)
  // }

}

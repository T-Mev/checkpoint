import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // Development url:
  url: string = "http://localhost:8080";

  // Production url:
  // url: string = "";

  constructor(private http: HttpClient) { }

  getPlatform(id: number) {
    return this.http.get(`${this.url}/REST/browse?platform=${id}`);
  }

  getPopular() {
    return this.http.get(`${this.url}/REST`);
  }

  getUpcoming() {
    return this.http.get(`${this.url}/REST/upcoming`);
  }

}

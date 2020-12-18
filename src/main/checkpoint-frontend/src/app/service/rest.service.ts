import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getGame(id: number) {
    return this.http.get(`${this.url.generalUrl}/REST/games?id=${id}`);
  }

  getPlatform(id: number) {
    return this.http.get(`${this.url.generalUrl}/REST/browse?platform=${id}`);
  }

  getPopular() {
    return this.http.get(`${this.url.generalUrl}/REST`);
  }

  getSearch(value: string) {
    return this.http.get(`${this.url.generalUrl}/REST/search?term=${value}`);
  }

  getUpcoming() {
    return this.http.get(`${this.url.generalUrl}/REST/upcoming`);
  }

}

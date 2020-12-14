import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

    // Development url:
    url: string = "http://localhost:8080";

    // Production url:
    // url: string = "";

}

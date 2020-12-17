import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

    // Auth Development URL:
    authUrl: string = "http://localhost:8080/REST/auth/";

    // Auth Production URL:
    // authUrl: string = "";

    // User Development URL:
    userUrl: string = 'http://localhost:8080/REST/user/';

    // User Production URL:
    // userUrl: string = "";

    // General Development URL:
    generalUrl: string = "http://localhost:8080";

    // General Production URL:
    // generalUrl: string = "";
}

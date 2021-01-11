import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  // Auth Development URL:
  authUrl: string = "/REST/auth/";

  // Auth Production URL:
  // authUrl: string = "";

  // User Development URL:
  userUrl: string = '/REST/user/';

  // User Production URL:
  // userUrl: string = "";

  // General Development URL:
  generalUrl: string = "";

  // General Production URL:
  // generalUrl: string = "";

  // Share Development URL:
  shareUrl: string = "http://localhost:4200";

  // Share Production URL:
  // authUrl: string = "";
}

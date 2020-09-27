import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkpoint-frontend';
  test;

  constructor(private http: HttpClient) {
    this.http.get("http://localhost:8080/REST/games/12").subscribe(res => {
      this.test = res;
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkpoint-frontend';
  private data: any = []
  constructor(private http: HttpClient) {

  }

  getData(){
    this.http.get("http://localhost:8080/REST/games/427").subscribe(res => {
      this.data = res;
      console.log(this.data)
    })
  }

}

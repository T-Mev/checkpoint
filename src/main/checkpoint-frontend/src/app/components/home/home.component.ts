import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getPopular().subscribe(res => {
      this.games = res;
      console.log(this.games);
    });
  }

}

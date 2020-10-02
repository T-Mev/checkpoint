import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  games;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getUpcoming().subscribe(res => {
      this.games = res;
      console.log(this.games);
    })
  }

}

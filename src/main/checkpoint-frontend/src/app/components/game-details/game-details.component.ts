import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  games;

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getGame(param.id).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

}

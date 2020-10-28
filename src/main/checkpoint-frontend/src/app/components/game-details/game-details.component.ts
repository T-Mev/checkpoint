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

  getReleaseDateRegion(regionID: number): string {

    switch (regionID) {
      case 1: return "Europe";
      case 2: return "North America";
      case 3: return "Australia";
      case 4: return "New Zealand";
      case 5: return "Japan";
      case 6: return "China";
      case 7: return "Asia";
      case 8: return "Worldwide";
    }

  }

}

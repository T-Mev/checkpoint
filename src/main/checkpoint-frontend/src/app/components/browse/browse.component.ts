import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  //Make this a typescript interface
  games;

  constructor(private router: Router, private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getPlatform(param.platform).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

  colorPicker(score: number): string {
    if (score >= 75) {
      return "green";
    } else if (score >= 50) {
      return "yellow";
    } else {
      return "red";
    }
  }

  formatNumber(num: number): number {
    return Math.round(num);
  }

}

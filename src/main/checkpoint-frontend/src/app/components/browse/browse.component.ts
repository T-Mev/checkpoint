import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  errorMessage: string;
  games: any;
  hasGames: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getPlatform(param.platform).subscribe(res => {
        this.games = res;

        if (this.games.length === 0) {
          this.hasGames = false;
        } else {
          this.hasGames = true;
        }

      },
        err => {
          this.hasGames = false;
          this.errorMessage = "User Not found";
        });
    });
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

}

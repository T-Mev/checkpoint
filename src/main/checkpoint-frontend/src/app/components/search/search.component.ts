import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  errorMessage: string;
  games: any;
  hasGames: boolean = true;
  searchTerm: string;

  constructor(private router: Router, private route: ActivatedRoute, private rest: RestService) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(param => {
      this.searchTerm = param.term.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, (match: string) => match.toUpperCase());
      this.rest.getSearch(param.term).subscribe(res => {
        this.games = res;

        if (this.games.length === 0) {
          this.hasGames = false;
        }

      },
        err => {
          this.hasGames = false;
          this.errorMessage = "User Not found";
        });
    })
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

}

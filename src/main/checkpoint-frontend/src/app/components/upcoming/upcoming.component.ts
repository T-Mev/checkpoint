import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  games: any;

  constructor(private router: Router, private rest: RestService) { }

  ngOnInit() {
    this.rest.getUpcoming().subscribe(res => {
      this.games = res;
    })
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

}

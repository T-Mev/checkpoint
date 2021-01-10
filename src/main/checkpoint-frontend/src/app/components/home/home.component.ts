import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: any;

  constructor(private router: Router, private rest: RestService) { }

  ngOnInit() {
    this.rest.getPopular().subscribe(res => {
      this.games = res;
    });
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

}

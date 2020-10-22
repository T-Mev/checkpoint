import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  games;

  constructor(private router: Router, private rest: RestService) { }

  ngOnInit() {
    this.rest.getPopular().subscribe(res => {
      this.games = res;
      console.log(this.games);
    });
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

}

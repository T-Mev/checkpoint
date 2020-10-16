import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  games;

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getPopular().subscribe(res => {
      this.games = res;
      console.log(this.games);
    });
  }

}

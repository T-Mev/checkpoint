import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
// export class HomeComponent implements OnInit, AfterViewInit {

  games;

  // @ViewChild("carouselLoop", { static: false })
  // carousel: ElementRef;


  constructor(private rest: RestService) { }
  // ngAfterViewInit(): void {
  // }

  ngOnInit() {
    this.rest.getPopular().subscribe(res => {
      this.games = res;
      console.log(this.games);
      // console.log(this.carousel);
    });
  }

}

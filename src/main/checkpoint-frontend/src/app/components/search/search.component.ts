import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  //Make this a typescript interface
  games;

  constructor(private route: ActivatedRoute, private rest: RestService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getSearch(param.term).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

}

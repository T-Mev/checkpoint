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
  searchTerm: string;
  constructor(private route: ActivatedRoute, private rest: RestService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.searchTerm = param.term.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
      this.rest.getSearch(param.term).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

}

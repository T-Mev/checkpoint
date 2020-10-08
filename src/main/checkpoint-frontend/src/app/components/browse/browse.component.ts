import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {

  //Make this a typescript interface
  games;

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getPlatform(param.platform).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

}

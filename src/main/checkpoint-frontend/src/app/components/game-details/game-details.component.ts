import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  @ViewChild("iframeModal", { static: false }) iframeModal;
  @ViewChild("videoModal", { static: false }) videoModal;

  games;

  constructor(private route: ActivatedRoute, private rest: RestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.rest.getGame(param.id).subscribe(res => {
        this.games = res;
        console.log(this.games);
      });
    })
  }

  getReleaseDateRegion(regionID: number): string {
    switch (regionID) {
      case 1: return "Europe";
      case 2: return "North America";
      case 3: return "Australia";
      case 4: return "New Zealand";
      case 5: return "Japan";
      case 6: return "China";
      case 7: return "Asia";
      case 8: return "Worldwide";
    }
  }

  updateVideoUrl(id: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id);
  }

  openModal(id: string) {
    console.log(this.videoModal);
  }

}

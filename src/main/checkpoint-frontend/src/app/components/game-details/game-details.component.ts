import { Component, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  games;
  videoURL;

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

  formatScore(num: number): number {
    return Math.round(num) / 10;
  }

  updateVideoUrl(id: string) {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
  }

  openModal(id: string) {
    this.updateVideoUrl(id);
  }

  closeModal() {
    setTimeout(() => this.videoURL = null, 300)
  }

}

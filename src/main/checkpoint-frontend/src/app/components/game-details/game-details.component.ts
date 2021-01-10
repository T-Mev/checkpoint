import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  addedToCollection: boolean = false;
  currentUser: any;
  errorMessage = '';
  games: any;
  gameId;
  haveGame: boolean;
  gameExists: boolean = true;
  successMessage;
  videoURL;


  constructor(private route: ActivatedRoute, private rest: RestService, private sanitizer: DomSanitizer,
    private token: TokenStorageService, private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.currentUser = this.token.getUser();

    this.route.queryParams.subscribe(param => {
      this.rest.getGame(param.id).subscribe(res => {
        this.games = res;
        this.gameId = this.games[0].id;

        if (this.token.getUser() !== null) {
          this.userService.includedInCollection(this.currentUser.username, this.gameId).subscribe(
            res => {
              this.haveGame = res;
            }
          );
        }

      },
        err => {
          this.gameExists = false;
          this.errorMessage = "Game Not found";
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

  addToCollection(gameId: number) {
    this.userService.addGameToCollection(this.currentUser.username, this.gameId).subscribe(
      res => {
        this.successMessage = res;
        this.addedToCollection = true;
        this.snackBar.openFromComponent(CustomSnackbarComponent, {
          duration: 3000,
          panelClass: ['snackbar']
        });
      },
      err => {
        this.errorMessage = err.error;
      }
    );

  }

}

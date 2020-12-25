import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  deleteRes;
  games;
  gamesList: number[] = [];
  selectedStyling: any;
  itemsInGamesList: boolean = false;

  constructor(private router: Router, private token: TokenStorageService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();

    if (this.currentUser == null) {
      this.router.navigate(['profile']);
    }

    this.userService.getUserCollection(this.currentUser.username).subscribe(
      res => {
        this.games = res;
        console.log(this.games);
      },
      err => {
        this.games = JSON.parse(err.error).message;
      }
    );
  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

  // removeGame(gameId: number) {
  //   this.userService.removeGameFromCollection(this.currentUser.username, gameId).subscribe(
  //     res => {
  //       this.deleteRes = res;
  //       console.log(this.deleteRes);
  //       window.location.reload();
  //     },
  //     err => {
  //       // this.deleteRes = JSON.parse(err.error).message;
  //       console.log(err);
  //     }
  //   );
  // }

  addToGamesList(gameId: number) {
    if (!this.gamesList.includes(gameId)) {
      this.gamesList.push(gameId);
      this.itemsInGamesList = true;
      this.selectedStyling = {
        'border': '4px solid #f88400',
        'border-radius': '5px'
      }
      console.log(this.gamesList);
    } else {
      this.gamesList.splice(this.gamesList.indexOf(gameId), 1);
      if (this.gamesList.length <= 0) {
        this.itemsInGamesList = false;
      }
      console.log(this.gamesList);
    }
  }

  removeAllGames() {
    this.userService.removeAllGamesFromCollection(this.currentUser.username, this.gamesList).subscribe(
      res => {
        this.deleteRes = res;
        console.log(this.deleteRes);
        window.location.reload();
      },
      err => {
        // this.deleteRes = JSON.parse(err.error).message;
        console.log(err);
        window.location.reload();
      }
    );
  }

}

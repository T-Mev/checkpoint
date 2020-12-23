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

  removeGame(gameId: number) {
    this.userService.removeGameFromCollection(this.currentUser.username, gameId).subscribe(
      res => {
        this.deleteRes = res;
        console.log(this.deleteRes);
        window.location.reload();
      },
      err => {
        // this.deleteRes = JSON.parse(err.error).message;
        console.log(err);
      }
    );
  }

}

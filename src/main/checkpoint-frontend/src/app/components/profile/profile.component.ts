import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  buttonText: string = "delete";
  currentUser: any = null;
  customStyle: any;
  errorMessage: string;
  games;
  gamesList: number[] = [];
  isOwner: boolean;
  itemsInGamesList: boolean = false;
  showEdit: boolean = false;
  showInput: boolean = false;
  successMessage: string;
  urlUser: string = null;
  username: string;

  constructor(private router: Router, private token: TokenStorageService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();

    // if (this.currentUser == null) {
    //   this.router.navigate(['profile']);
    // }

    this.route.params.subscribe(res => {
      if (res.username) {
        this.urlUser = res.username;
      }
    })

    if (!this.urlUser && this.currentUser != null) {

      this.getCollection(this.currentUser.username);
      this.username = this.currentUser.username;
      this.isOwner = true;
    } else {
      this.getCollection(this.urlUser);
      this.username = this.urlUser;
      this.isOwner = this.urlUser === this.currentUser.username;
    }

  }

  toGame(gameId: number) {
    this.router.navigate(['/games'], { queryParams: { id: gameId } });
  }

  addToGamesList(gameId: number) {
    if (!this.gamesList.includes(gameId)) {
      this.gamesList.push(gameId);
      this.itemsInGamesList = true;
      this.buttonText = "check";
      console.log(this.gamesList);
    } else {
      this.gamesList.splice(this.gamesList.indexOf(gameId), 1);
      if (this.gamesList.length <= 0) {
        this.itemsInGamesList = false;
        this.toggleEdit();
      }
      this.buttonText = "delete";
      console.log(this.gamesList);
    }
  }

  removeAllGames() {
    this.userService.removeAllGamesFromCollection(this.currentUser.username, this.gamesList).subscribe(
      res => {
        this.successMessage = res;
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error;
      }
    );
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
    if (this.showEdit) {
      this.customStyle = {
        'transform': 'scale(.93)'
      }
    } else {
      this.customStyle = {
        'transform': 'scale(.99)'
      }
    }
  }

  deselectAllFromGamesList() {
    this.gamesList = [];
    if (this.gamesList.length <= 0) {
      this.itemsInGamesList = false;
      this.toggleEdit();
    }
    console.log(this.gamesList);
  }


  getCollection(username: string) {
    this.userService.getUserCollection(username).subscribe(
      res => {
        this.games = res;
        console.log(this.games);
      },
      err => {
        this.errorMessage = "User Not found";
      }
    )
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}

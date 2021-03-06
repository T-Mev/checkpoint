import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UrlService } from 'src/app/service/url.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild("share", { static: false }) share;

  buttonText: string = "delete";
  currentUser: any = null;
  customStyle: any;
  errorMessage: string;
  games: any;
  gamesList: number[] = [];
  hasGames: boolean = true;
  isOwner: boolean;
  itemsInGamesList: boolean = false;
  shareUrl: string;
  showEdit: boolean = false;
  showInput: boolean = false;
  successMessage: string;
  urlUser: string = null;
  username: string;

  constructor(private router: Router, private token: TokenStorageService, private userService: UserService, private route: ActivatedRoute, private url: UrlService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.shareUrl = this.url.shareProdUrl;

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
    } else {
      this.gamesList.splice(this.gamesList.indexOf(gameId), 1);
      if (this.gamesList.length <= 0) {
        this.itemsInGamesList = false;
        this.toggleEdit();
      }
      this.buttonText = "delete";
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
  }


  getCollection(username: string) {
    this.userService.getUserCollection(username).subscribe(
      res => {
        this.games = res;
      },
      err => {
        this.hasGames = false;
        this.errorMessage = "User Not found";
      }
    );
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  onShareClick() {
    this.showInput = !this.showInput;
    if (this.showInput) {
      this.shareHighlight();
    }
  }

  shareHighlight() {
    if (this.share) {
      this.share.nativeElement.select();
    } else {
      setTimeout(() => {
        this.shareHighlight()
      }, 3)
    }
  }

}

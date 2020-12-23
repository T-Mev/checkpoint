import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser;

  constructor(private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

  toBrowse(id: number) {
    this.router.navigate(['/browse'], { queryParams: { platform: id } });
  }

  toSearch(value: string) {
    this.router.navigate(['/search'], { queryParams: { term: value } });
  }

}

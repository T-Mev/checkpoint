import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  toBrowse(id: number) {
    this.router.navigate(['/browse'], { queryParams: { platform: id } });
  }

  toSearch(value: string) {
    this.router.navigate(['/search'], { queryParams: { term: value } });
  }

  ngOnInit() {
  }

}

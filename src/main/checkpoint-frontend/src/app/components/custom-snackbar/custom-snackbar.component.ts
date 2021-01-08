import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css']
})
export class CustomSnackbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toProfile() {
    this.router.navigate(['/profile'])
      .then(() => {
        window.location.reload();
      });
  }

}

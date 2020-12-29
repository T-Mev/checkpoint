import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      res => {
        this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);
        this.currentUser = this.tokenStorage.getUser();

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        setTimeout(() => window.location.reload(), 1000)
      },
      err => {
        if (err.error.message) {
          this.errorMessage = err.error.message;
        } else if (err.error) {
          this.errorMessage = err.error;
        }
        this.isLoginFailed = true;
      }
    );
  }

}

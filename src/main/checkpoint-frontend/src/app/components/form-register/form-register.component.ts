import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      res => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        this.authService.login(this.form).subscribe(
          res => {
            this.tokenStorage.saveToken(res.accessToken);
            this.tokenStorage.saveUser(res);
          });

        setTimeout(() => window.location.reload(), 1000);
      },
      err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    );

  }

}

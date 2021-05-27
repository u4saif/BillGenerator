import { FireAuthService } from './../../services/auth/fire-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: FireAuthService) {}

  ngOnInit(): void {}
  username;
  password;
  isLoaded: boolean = false;
  isInvalid: boolean = false;
  user;

  googleSignin() {
    this.loginService.googleSignin();
  }
  
  login() {
    this.username == 'saif@gmail.com' && this.password == '123456'
      ? this.loginSuccess()
      : (this.isInvalid = true);
  }
  email(username) {
    this.username = username.viewModel;
  }

  pass(password) {
    this.password = password.viewModel;
  }

  loginSuccess() {
    window.localStorage.setItem(
      'tokenId',
      JSON.stringify(
        'yab00b.a0AfH6SMDp-9VBW00em9ci1VyE56sKX-hBFPT8zU0ApVlFfMEickvKO8YPUdobP-8MshIeTCjaFNK5uS5C20MAPmuLWFDkGBfztTUAriZpFSogmGLBE'
      )
    );
    this.router.navigate(['/home']);
  }
}

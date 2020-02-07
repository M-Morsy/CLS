import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../../models/login-request.model';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginRequest = {
    username: '',
    password: ''
  }
  message: string;
  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/listing');
    } else {
      return 0;
    }
  }

  onLogin() {
    this.loginService.login(this.loginForm).subscribe((user: any) => {
      console.log(user);
      if (user.length === 0) {
        this.message = 'Username / Password is not valid';
      } else if (user.length > 0) {
        localStorage.setItem('username', user[0].username);
        this.router.navigateByUrl('/listing');
      }
    }, error => {});
  }


}

import { Injectable } from '@angular/core';
import { LoginRequest } from 'src/app/features/user-management/models/login-request.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(body: LoginRequest) {
    return this.http.get(environment.apiUrl + 'users?username=' + body.username + '&password=' + body.password);
  }
  
  isLoggedIn() {
    if (localStorage.getItem('username')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}

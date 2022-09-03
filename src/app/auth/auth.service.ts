import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { UserService } from '../users-table/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private router: Router,
    // private userService: UserService,
  ) { }

  private access_token = null;

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = {
      'username': user.username,
      'password': user.password
    };

    return this.apiService.post('/users/login', JSON.stringify(body), loginHeaders)
      .pipe(
        map( (res) => {
          // console.log("Login result: " + JSON.stringify(res));
          this.access_token = res.body.accessToken;
          // console.log("res.accessToken: " + res.body.accessToken);
          localStorage.setItem("jwt", res.body.accessToken);
          console.log("JWT from localStorage: " + localStorage.getItem("jwt"));
        }
        ));
  }

  register(user: any) {
    console.log(user);
    const registerHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post('/users/', JSON.stringify(user), registerHeaders)
      .pipe(
        map( 
          (res) => {
        console.log(res);
      }
      ));
  }

  logout() {
    // this.userService.currentUser = null;
    this.access_token = null;
    window.alert("You have been signed out.");
    this.router.navigate(['/']);
  }

  isTokenPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }
}

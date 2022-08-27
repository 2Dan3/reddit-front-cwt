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

    return this.apiService.post('/login', JSON.stringify(body), loginHeaders)
      .pipe(
        map( (res) => {
          console.log(res);
          this.access_token = res.accessToken;
          localStorage.setItem("jwt", res.accessToken);
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
    this.router.navigate(['/login']);
  }

  isTokenPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';
import { User } from './model/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  
  users: User[] = [];

  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router,
    )
    {
      // console.log("Access_token from users list BEFORE USERS API CALL: " + this.authService.getToken());


      this.apiService.get("/users/all")
      .subscribe(
        (res) => {
          this.users = [];
          
          for (let res_obj of res) {
            this.users.push(new User(res_obj)); 
          }
        },
        (_error: HttpErrorResponse) => {
          console.log(JSON.stringify(_error));

          if (_error.status == 403) {
            window.alert("Unauthorized access attempt was denied!");
            this.router.navigate(['/']);
          }

        }
      );
      // console.log("Access_token from users list AFTER USERS API CALL: " + this.authService.getToken());

     }

  ngOnInit(): void {
    // 
  }

}

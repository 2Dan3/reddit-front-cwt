import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

}

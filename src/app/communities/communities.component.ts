import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';
import { Community } from './model/community.model';
import { CommunityService } from './services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  communities: any[] = [];

  constructor(
    private communityService: CommunityService,
    private router: Router,
    private apiService: ApiService,
    protected authService: AuthService,
    ) 
    {
    // this.communities = this.communityService.getAll();

    this.apiService.get("/communities")
    .subscribe( 
      (res) => {
        this.communities = [];

        for(let res_obj of res) {
          this.communities.push(new Community(res_obj));
        }
        // console.log("response status;" + res['status']);
        console.log("Result:" +JSON.stringify(res));
        console.log("communities upon data arrival: ", this.communities);
      },
      (_error: any) => {
        console.log("Error caught  " + _error);
        // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
      });      
    }

  ngOnInit(): void {
    // this.communities = this.communityService.communityList;
    // console.log(this.communities);
  }

  toAddCommunityForm() {
    this.router.navigate(['/add_community']);
  }

}

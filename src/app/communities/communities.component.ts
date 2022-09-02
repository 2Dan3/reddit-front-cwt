import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
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
    ) 
    {
    // this.communities = this.communityService.getAll();

    this.apiService.get("/communities")
    .subscribe( 
      (res) => {
        this.communities = res;
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
    
  }

  toAddCommunityForm() {
    this.router.navigate(['/add_community']);
  }

}

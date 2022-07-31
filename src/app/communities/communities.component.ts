import { Component, OnInit } from '@angular/core';
import { Community } from './model/community.model';
import { CommunityService } from './services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  communities: Community[] = [];

  constructor(
    private communityService: CommunityService) { 

    }

  ngOnInit(): void {
    this.communities = this.communityService.getAll();
  }

}

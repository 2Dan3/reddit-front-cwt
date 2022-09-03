import { Component, Input, OnInit } from '@angular/core';
import { Community } from '../model/community.model';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css']
})
export class CommunityCardComponent implements OnInit {

  @Input()
  community!: Community;

  constructor() 
  {
    // console.log("from community-card: community._id = ", this.community._id);
  }

  ngOnInit(): void {

    
  }

  // toCommunity(community_id: string|number) {
    
  // }

}

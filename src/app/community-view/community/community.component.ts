import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Community } from 'src/app/communities/model/community.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  @Input()
  community!: Community;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.community = new Community();
    this.community._id = this.route.snapshot.params['id'];
    // TODO*: getCommunity to API
  }

}

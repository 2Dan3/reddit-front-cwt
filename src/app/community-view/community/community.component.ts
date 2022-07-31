import { Component, Input, OnInit } from '@angular/core';
import { Community } from 'src/app/communities/model/community.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  @Input()
  community!: Community;

  constructor() { }

  ngOnInit(): void {
  }

}

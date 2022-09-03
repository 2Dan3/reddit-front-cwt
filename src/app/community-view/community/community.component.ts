import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Community } from 'src/app/communities/model/community.model';
import { CommunityService } from 'src/app/communities/services/community.service';
import { Rule } from 'src/app/rules/model/rule.model';
import { RuleService } from 'src/app/rules/services/rule.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  @Input()
  community!: Community;
  rules: Rule[] = [];

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private communityService: CommunityService,) 
    { 
    
  }

  ngOnInit(): void {
    this.community = new Community();
    this.community._id = this.route.snapshot.params['id'];
    // this.community.name = this.route.snapshot.params['name'];

    // this.community = this.communityService.findById();
    // TODO*: getCommunity to API

    this.rules = this.ruleService.getAll(this.community._id);
  }

}

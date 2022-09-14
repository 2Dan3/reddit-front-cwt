import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { AuthService } from 'src/app/auth/auth.service';
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

  community_form: FormGroup;
  @Input()
  community!: Community;
  rules: Rule[] = [];
  isUserAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private ruleService: RuleService,
    private communityService: CommunityService,
    private authService: AuthService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) 
  { 
    this.community_form = this.formBuilder.group({
      "suspensionReason": ['', Validators.compose([Validators.required])],
    });

    
    this.apiService.get("/users/whoami")
    .subscribe( 
      (res: any) => {
        if (res.role === 'ADMIN'){
          this.isUserAdmin = true;
        }
      },
      (_error: any) => {
        console.log(_error);
      }); 
  }

  ngOnInit(): void {
    this.community = new Community();
    this.community._id = this.route.snapshot.params['id'];
    // this.community.name = this.route.snapshot.params['name'];

    // this.community = this.communityService.findById();
    // TODO*: getCommunity to API

    this.rules = this.ruleService.getAll(this.community._id);
  }

  protected suspendCommunity() :void{

  }

  protected isAdmin(){
    return this.authService.isTokenPresent() && this.isUserAdmin;
  }

}

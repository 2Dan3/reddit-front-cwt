import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'community-suspension-form',
  templateUrl: './community-suspension-form.component.html',
  styleUrls: ['./community-suspension-form.component.css']
})
export class CommunitySuspensionFormComponent implements OnInit {

  protected suspension_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,

  )
  { 
    this.suspension_form = this.formBuilder.group({
      "suspensionReason": ['', Validators.compose([Validators.required])],
    });
  } 

  ngOnInit(): void {
  }

  protected suspendCommunity(){
    console.log(this.suspension_form.value);
      // *TODO: reorganize post method
      this.apiService.delete("/communities/"+ this.route.snapshot.params['id'] +"/suspend", this.suspension_form.value)
        .subscribe( 
          (res: any) => {
            console.log("Community suspended!");
            window.alert("You've suspended the community!");
            this.router.navigate(['/']);
          },
          (_error: any) => {
            // this.submitted = false;
            console.log(_error);
            // this.router.navigate(['/']);
            // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
          });
  }

}

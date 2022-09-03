import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-community-form',
  templateUrl: './community-form.component.html',
  styleUrls: ['./community-form.component.css']
})
export class CommunityFormComponent implements OnInit {

  communityForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService,
    private formBuilder: FormBuilder 
  )
  {
    this.communityForm = this.formBuilder.group({
      "name": ['', Validators.compose([Validators.required])],
      "description": ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  saveCommunity() {
      // this.notification = undefined;
      console.log("Entered saveCommunity()!");
      // this.communityForm.value['author'] = "name";
      // this.submitted = true;
      console.log(this.communityForm.value);
      // *TODO: reorganize post method
      this.apiService.post("/communities", this.communityForm.value)
        .subscribe( 
          (res: any) => {
            console.log("Community created!");
            window.alert("Your Community was created!");
            this.router.navigate(['/']);
          },
          (_error: any) => {
            // this.submitted = false;
            console.log(_error);
            this.router.navigate(['/']);
            // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
          });
  }

}

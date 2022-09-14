import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  protected data_form!: FormGroup;

  protected password_form: FormGroup;

  protected non_matching_pw = false;
  protected email_taken = false;

  protected total_karma_points = 0;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,

  )
  {
    this.setKarmaPoints();

    this.data_form = this.formBuilder.group({
      "description": ['', Validators.compose([])],
      "displayName": ['', Validators.compose([Validators.required])],
      "email": ['', Validators.compose([Validators.required, Validators.email])],
    }
)
    this.apiService.get("/users/whoami")
        .subscribe( 
          (res: any) => {
            console.log(JSON.stringify(res));

            this.initDataForm(res['description'], res['displayName'], res['email']);
          },
          (_error: HttpErrorResponse) => {

            console.log(JSON.stringify(_error));
          });
          
    

    this.password_form = this.formBuilder.group({
      "oldPass": ['', Validators.compose([Validators.required])],
      "newPass": ['', Validators.compose([Validators.required, Validators.minLength(8)])],

    });

  }

  ngOnInit(): void {
  }

  choosePic() {
    // TODO*: Implement
  }

  private initDataForm(description: string, displayName: string, email: string){
    this.data_form = this.formBuilder.group({
      "description": [description, Validators.compose([])],
      "displayName": [displayName, Validators.compose([Validators.required])],
      "email": [email, Validators.compose([Validators.required, Validators.email])],
    });

  }

  private setKarmaPoints(){
    this.apiService.get("/users/karma")
        .subscribe( 
          (res: any) => {
            this.total_karma_points = res;
          },
          (_error: HttpErrorResponse) => {

            console.log(JSON.stringify(_error));
          });
  }


  protected changePassword(){
    this.apiService.put("/users/", this.password_form.value)
        .subscribe( 
          (res: any) => {
            this.non_matching_pw = false;
            this.password_form.reset;
            console.log("Password req successful!");
            window.alert("Hooray! Your password change request was successfully processed.");
            // this.router.navigate(['/']);
            this.password_form.reset();
          },
          (_error: HttpErrorResponse) => {

            if (_error.status == 406) {
              this.non_matching_pw = true;
            }
            this.password_form.reset();
            console.log(JSON.stringify(_error));
            // this.router.navigate(['/']);
          });
  }

  protected changeData(){
    this.apiService.put("/users/edit", this.data_form.value)
        .subscribe( 
          (res: any) => {
            this.email_taken = false;
            console.log("Data edit req successful!");
            window.alert("Your data was successfully edited!");
            // this.router.navigate(['/']);
          },
          (_error: HttpErrorResponse) => {

            if (_error.status == 406) {
              // window.alert("The input email is already taken.");
              this.email_taken = true;
            }

            console.log(JSON.stringify(_error));
            // this.router.navigate(['/']);
          });
  }

}

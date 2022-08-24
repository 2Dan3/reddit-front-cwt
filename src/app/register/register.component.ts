import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../users-table/services/user.service';

// interface DisplayMessage{
//     msgType: string;
//     msgBody: string;
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm :FormGroup;

  submitted = false;

  // notification: DisplayMessage;

  constructor(
    private userService: UserService,
    // private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) 
  {
    this.registerForm = this.formBuilder.group({
      "username": ['', Validators.compose([Validators.required])],
      "password": ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      // "email": ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    // this.notification = undefined;
    console.log("Entered onSubmit()!");
    // if (document.getElementById("pw")?.innerText == document.getElementById("repeated-pw")?.innerText) {
    //   window.alert("Passwords do not match!");
    //   console.log("Passwords do not match!");
    // }
    this.submitted = true;

    // this.authService.register(this.registerForm.value)
    //   .subscribe( 
    //     () => {
    //       // this.userService.getMyInfo().subscribe();
    //       this.router.navigate(['/login']);
    //     },
    //     (_error: any) => {
    //       this.submitted = false;
    //       console.log(_error);
    //       // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
    //     });
  }


  private buildForm() {
    this.registerForm = this.formBuilder.group({
      "username": ['', Validators.compose([Validators.required])],
      "password": ['', Validators.compose([Validators.required])],
      "email": ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

}

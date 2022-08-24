import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    // private authService: AuthService,
    private formBuilder: FormBuilder 
  )
  {this.loginForm = this.formBuilder.group({
      "username": ['', Validators.compose([Validators.required])],
      "password": ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  ngOnInit(): void {
  }

  login() {
      // this.notification = undefined;
      console.log("Entered login()!");
      // if (document.getElementById("pw")?.innerText == document.getElementById("repeated-pw")?.innerText) {
      //   window.alert("Passwords do not match!");
      //   console.log("Passwords do not match!");
      // }
      // this.submitted = true;
      console.log(this.loginForm.value);
      // this.authService.login(this.loginForm.value)
      //   .subscribe( 
      //     (res: any) => {

      //       this.router.navigate(['']);
      //     },
      //     (_error: any) => {
      //       // this.submitted = false;
      //       console.log(_error);
      //       // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
      //     });
  }

}
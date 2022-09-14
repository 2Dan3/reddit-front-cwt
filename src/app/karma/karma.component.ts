import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-karma',
  templateUrl: './karma.component.html',
  styleUrls: ['./karma.component.css']
})
export class KarmaComponent implements OnInit {

  protected reaction_downvote = { "type" : "DOWNVOTE" };
  protected reaction_upvote = { "type" : "UPVOTE" };

  // @Input()
  // upvote_count!: number;
  // @Input()
  // downvote_count!: number;

  @Input()
  total_karma!: number | string;
  @Output()
  triggeredReaction : EventEmitter<string>;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,

  )
  {
    this.triggeredReaction = new EventEmitter();

  }

  ngOnInit(): void {
    // TODO*: delete - temporary mock-data:
    // this.upvote_count = 380;
    // this.downvote_count = 23;
  }

  protected saveReaction(reaction_type: any) {

    if (!this.authService.isTokenPresent()) {
      // NO LOGGED USER
      if (window.confirm("Sign in to be able to participate!") == true) {
        // REDIRECT TO SIGN IN
        this.router.navigate(['login']);
      }
    }
    else{
      // USER LOGGED --> SAVE REACTION
      this.triggeredReaction.emit(reaction_type);
    }
  }



}

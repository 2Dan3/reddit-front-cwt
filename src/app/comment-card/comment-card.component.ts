import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Comment } from '../comment-list/model/comment.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input()
  _comment! :Comment;

  constructor(
    private apiService: ApiService,

  )
  {

  }

  ngOnInit(): void {
  }

  protected saveCommentReaction(reaction_type: string) {
    console.log("From comment card, id: " + this._comment._id);

    this.apiService.post("/comments/" + this._comment._id +"/reactions", { "ReactionType" : reaction_type} )
        .subscribe( 
          (res: any) => {
            console.log("Reaction to comment submitted!");
            window.alert("Your Reaction was submitted!");
            // TODO* ++ or -- the karma
          },
          (_error: HttpErrorResponse) => {

            if (_error.status == 406) {
              window.alert("You've already "+ reaction_type.toLowerCase() + "ed this!");
            }
            
            // this.submitted = false;
            console.log(_error);
            // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
          });
  }

}

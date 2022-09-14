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

  protected saveCommentReaction(reaction_type: any) {
    console.log("From comment card, id: " + this._comment._id);

    this.apiService.post("/comments/" + this._comment._id +"/reactions", reaction_type )
        .subscribe( 
          (res: any) => {
            console.log("Reaction to comment submitted!");
            window.alert("Your Reaction was submitted!");

            this.getCommentKarma(this._comment._id);
          },
          (_error: HttpErrorResponse) => {

            if (_error.status == 406) {
              window.alert("You've already "+ reaction_type.type.toLowerCase() + "d this!");
            }
            
            console.log(_error);
          });
  }

  private getCommentKarma(commentId: number){
    this.apiService.get("/comments/" + commentId +"/karma")
        .subscribe( 
          (res: any) => {
            console.log(res);

            this._comment.karma_points = res;
          },
          (_error: HttpErrorResponse) => {
            console.log(_error);
          });
  }

}

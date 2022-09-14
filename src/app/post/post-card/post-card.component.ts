import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Post } from 'src/app/posts/model/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  post! :Post;

  constructor(
    private apiService: ApiService,

  ) { }

  ngOnInit(): void {
    // console.log("Current Post: " + this.post._id + this.post.author_display_name + this.post.creation_date + this.post.text + this.post.title); 
  }

  protected savePostReaction(reaction_type: any) {
    // console.log("From post card, id: " + this.post._id);

    this.apiService.post("/posts/" + this.post._id +"/reactions", reaction_type )
        .subscribe( 
          (res: any) => {
            console.log("Reaction to post submitted!");
            window.alert("Your Reaction was submitted!");

            this.getPostKarma(this.post._id);
          },
          (_error: HttpErrorResponse) => {

            if (_error.status == 406) {
              window.alert("You've already "+ reaction_type.type.toLowerCase() + "d this!");
            }
            
            console.log(_error);
          });
  }

  private getPostKarma(postId: number){
    this.apiService.get("/comments/" + postId +"/karma")
        .subscribe( 
          (res: any) => {
            console.log(res);

            this.post.total_karma = res;
          },
          (_error: HttpErrorResponse) => {
            console.log(_error);
          });
  }

}

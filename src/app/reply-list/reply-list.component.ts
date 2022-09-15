import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Comment } from '../comment-list/model/comment.model';
import { CommentService } from '../comment-list/services/comment.service';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {

  parent_comment :Comment = new Comment();
  comments!: Comment[];

  constructor(
    private route :ActivatedRoute,
    private apiService :ApiService,
    ) 
    {
      // this.parent_comment = new Comment();
      const parentIdNum: number = this.route.snapshot.params['parent_id'];
      const postIdNum: number = this.route.snapshot.params['post_id'];

      this.apiService.get("/posts/"+ postIdNum + "/comments/" + parentIdNum.toString() )
      .subscribe(
        (res) => {
          // this.post_id = this.route.snapshot.params['id'];
          // window.location.reload();
          // console.log(JSON.stringify(res));
          
          this.parent_comment = new Comment(res);
        },
        (_error) => {
          console.log(JSON.stringify(_error));
        }
      );
      
      this.apiService.get("/posts/"+ postIdNum + "/comments" + "?replyToId=" + parentIdNum)
      .subscribe(
        (res) => {
          // this.post_id = this.route.snapshot.params['id'];
          // window.location.reload();
          // console.log(JSON.stringify(res));
          this.comments = [];

          for(let res_obj of res) {
            this.comments.push(new Comment(res_obj));
          }

        },
        (_error) => {
          console.log(JSON.stringify(_error));
        }
      );
    }

  ngOnInit(): void { }

  saveReplyToComment(replyObj: any){
    this.apiService.post(this.getReplyPostURL(this.route.snapshot.params['post_id'], this.route.snapshot.params['parent_id']), replyObj)
      .subscribe(
        (res) => {
          // this.post_id = this.route.snapshot.params['id'];
          
          window.alert("Your reply was successfully posted!");
          window.location.reload();
        },
        (_error) => {
          console.log(JSON.stringify(_error));
        }
      );
  }

  private getReplyPostURL(idOfPost: number, idOfParent: number) :string{
    const urlPost = "/posts/"+ idOfPost + "/comments/" + idOfParent + "";
    return urlPost;
  }

}

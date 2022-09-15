import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { Comment } from 'src/app/comment-list/model/comment.model';
import { Post } from 'src/app/posts/model/post';
import { PostService } from 'src/app/posts/services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input()
  post! :Post;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private apiService: ApiService,
    )
    {
      const currentId = this.route.snapshot.params['id'];
      this.apiService.get("/posts/" + currentId)
      .subscribe(
        (res) => {
          this.post = new Post(res);
          console.log(this.post);
        },
        (_error) => {
          console.log(JSON.stringify(_error));

        }
      );

      this.apiService.get("/posts/"+ currentId + "/comments")
      .subscribe(
        (res) => {
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

  ngOnInit(): void {
    // 
  }

  saveIndependentComment(commentObj: any){
    this.apiService.post("/posts/"+ this.route.snapshot.params['id'] + "/comments", commentObj)
      .subscribe(
        (res) => {
          // this.post_id = this.route.snapshot.params['id'];
          window.alert("Your comment was successfully posted!");
          window.location.reload();
        },
        (_error) => {
          console.log(JSON.stringify(_error));
        }
      );
  }

}

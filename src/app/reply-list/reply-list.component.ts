import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../comment-list/model/comment.model';
import { CommentService } from '../comment-list/services/comment.service';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {

  parent_comment :Comment;

  constructor(
    private commentService :CommentService,
    private route :ActivatedRoute ) 
    {
      this.parent_comment = new Comment();
     }

  ngOnInit(): void {
    const parent_comment_id = this.route.snapshot.params['parent_id'];
    // TODO*: erase ngOnInit content w/ tests completion
    this.parent_comment = this.commentService.findById(parent_comment_id);
    
  }

}

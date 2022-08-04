import { Component, Input, OnInit } from '@angular/core';
import { Comment } from './model/comment.model';
import { CommentService } from './services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] = [];

  @Input()
  post_id! :string|number;

  constructor(
    private commentService: CommentService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getAll();
  }

}

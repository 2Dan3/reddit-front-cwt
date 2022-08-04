import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comment-list/model/comment.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input()
  _comment! :Comment;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/model/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  post! :Post;

  constructor() { }

  ngOnInit(): void {
    console.log("Current Post: " + this.post._id + this.post.author_display_name + this.post.creation_date + this.post.text + this.post.title);
    
  }

}

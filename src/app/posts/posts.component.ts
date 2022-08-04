import { Component, Input, OnInit } from '@angular/core';
import { Post } from './model/post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  community_id! :string|number;

  posts: Post[] = [];

  constructor(
    private postService : PostService) {

     }

  ngOnInit(): void {
    this.posts = this.postService.getAll(this.community_id);

  }

}

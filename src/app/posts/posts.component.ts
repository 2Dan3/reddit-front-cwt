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

  sortByDateDesc(){
    console.log("Sort By Date: Newest")
    // *TODO: Implement this.postService API call
  }
  sortByDateAsc(){
    console.log("Sort By Date: Oldest")
    // *TODO: Implement this.postService API call
  }  

  sortByKarmaDesc(){
    console.log("Sort By Karma: Most popular")
    // *TODO: Implement this.postService API call
  }
  sortByKarmaAsc(){
    console.log("Sort By Karma: Least popular")
    // *TODO: Implement this.postService API call
  }

  sortByTrendingDesc(){
    console.log("Sort By Trending: Hottest")
    // *TODO: Implement this.postService API call
  }
  sortByTrendingAsc(){
    console.log("Sort By Trending: Coldest")
    // *TODO: Implement this.postService API call
  }
  
}

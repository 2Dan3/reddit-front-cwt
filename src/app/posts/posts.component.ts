import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
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
    private postService : PostService,
    private apiService : ApiService,
    private route : ActivatedRoute,
    ) 
    {
        console.log("from posts component, community_id: " + route.snapshot.params['id']);

        this.apiService.get("/communities/"+ route.snapshot.params['id'] +"/posts")
        .subscribe( 
        (res) => {
          this.posts = [];

          for(let res_obj of res) {
            this.posts.push(new Post(res_obj));
          }
          // console.log("response status;" + res['status']);
          console.log("Result:" +JSON.stringify(res));
          console.log("posts upon data arrival: ", this.posts);
        },
        (_error: any) => {
          console.log("Error caught  " + _error);
        });
    }

  ngOnInit(): void {
    // this.posts = this.postService.getAll(this.community_id);
    // console.log("comm_id: " + this.community_id);
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

  protected isPostListEmpty(){
    return this.posts.length == 0;
  }
  
}

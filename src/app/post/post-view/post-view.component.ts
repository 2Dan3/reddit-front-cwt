import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit(): void {
    this.post = new Post();
    const currentId = this.route.snapshot.params['id'];
    this.post = this.postService.findById(currentId);
  }

}

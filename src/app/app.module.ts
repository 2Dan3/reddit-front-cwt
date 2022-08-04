import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunitiesComponent } from './communities/communities.component';
import { PostsComponent } from './posts/posts.component';
import { CommunityComponent } from './community-view/community/community.component';
import { CommunityCardComponent } from './communities/community-card/community-card.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentCardComponent } from './comment-card/comment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunitiesComponent,
    CommunityComponent,
    CommunityCardComponent,
    PostsComponent,
    PostViewComponent,
    PostCardComponent,
    CommentListComponent,
    CommentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

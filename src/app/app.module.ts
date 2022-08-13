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
import { ProfileComponent } from './profile/profile.component';
import { KarmaComponent } from './karma/karma.component';
import { FlairListComponent } from './flair/flair-list/flair-list.component';
import { FlairTagComponent } from './flair/flair-tag/flair-tag.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

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
    CommentCardComponent,
    ProfileComponent,
    KarmaComponent,
    FlairListComponent,
    FlairTagComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

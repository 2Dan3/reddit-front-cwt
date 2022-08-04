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

@NgModule({
  declarations: [
    AppComponent,
    CommunitiesComponent,
    CommunityComponent,
    CommunityCardComponent,
    PostsComponent,
    PostViewComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

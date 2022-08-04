import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunitiesComponent } from './communities/communities.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CommunityComponent } from './community-view/community/community.component';
import { CommunityCardComponent } from './communities/community-card/community-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunitiesComponent,
    PostsComponent,
    PostComponent,
    CommunityComponent,
    CommunityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

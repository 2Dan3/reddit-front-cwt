import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ReplyListComponent } from './reply-list/reply-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { RulesComponent } from './rules/rules.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommunityFormComponent } from './community-form/community-form.component';
import { TokenInterceptor } from './interceptors/TokenInterceptor';

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
    LoginComponent,
    ReplyListComponent,
    UsersTableComponent,
    RulesComponent,
    NavBarComponent,
    CommunityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

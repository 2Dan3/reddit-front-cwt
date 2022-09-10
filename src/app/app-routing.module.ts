import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityFormComponent } from './community-form/community-form.component';
import { CommunityComponent } from './community-view/community/community.component';
import { LoginComponent } from './login/login.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReplyListComponent } from './reply-list/reply-list.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  {path: "",  component: CommunitiesComponent},
  {path: "community/:id", component: CommunityComponent},
  {path: "post/:id", component: PostViewComponent},
  {path: "profile", component: ProfileComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "replies/:parent_id", component: ReplyListComponent},
  {path: "users", component: UsersTableComponent},
  {path: "add_community", component: CommunityFormComponent},
  {path: "add_post", component: PostFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityComponent } from './community-view/community/community.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "",  component: CommunitiesComponent},
  {path: "community/:id", component: CommunityComponent},
  {path: "post/:id", component: PostViewComponent},
  {path: "profile/:id", component: ProfileComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

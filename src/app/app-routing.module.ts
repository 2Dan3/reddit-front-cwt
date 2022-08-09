import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityComponent } from './community-view/community/community.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "",  component: CommunitiesComponent},
  {path: "community/:id", component: CommunityComponent},
  {path: "post/:id", component: PostViewComponent},
  {path: "profile/:id", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

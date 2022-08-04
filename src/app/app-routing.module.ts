import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { CommunityComponent } from './community-view/community/community.component';

const routes: Routes = [
  {path: "",  component: CommunitiesComponent},
  {path: "community/:id", component: CommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

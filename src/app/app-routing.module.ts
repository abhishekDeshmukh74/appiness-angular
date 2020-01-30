import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubUsersComponent } from './github-users/github-users.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'github-users',
  },
  {
    path: 'github-users',
    component: GithubUsersComponent,
  },
  {
    path: 'user-repos/:username',
    component: UserReposComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

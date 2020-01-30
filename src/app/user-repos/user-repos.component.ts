import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Repo } from '../app.interfaces';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  username: string;
  repos: Repo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getUsername();
    this.getRepos();
  }

  getUsername() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.username = params.username;
    });
  }

  getRepos() {
    this.appService.getReposByUsername(this.username)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.repos = res;
        },
        (error: Error) => {
          console.log(error);
          // this.alertService.error('Login failed');
        }
      );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}

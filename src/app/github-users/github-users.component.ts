import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {

  users: User[];

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.appService.getUsers()
      .subscribe(
        (res: any) => {
          console.log(res);
          this.users = res;
        },
        (error: Error) => {
          console.log(error);
          // this.alertService.error('Login failed');
        }
      );
  }

}

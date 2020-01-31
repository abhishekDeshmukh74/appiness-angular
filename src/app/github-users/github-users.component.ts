import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../app.interfaces';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.scss']
})
export class GithubUsersComponent implements OnInit {

  users: User[];
  searchBoxFormControl = new FormControl('');

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.getUsers();

    this.searchBoxFormControl
      .valueChanges
      .pipe(
        debounceTime(200)
      )
      .subscribe((username: string) => {
        this.searchUsers(username);
      });
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
  searchUsers(username: string) {
    this.appService.searchUsers(username)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.users = res.items;
        },
        (error: Error) => {
          console.log(error);
          // this.alertService.error('Login failed');
        }
      );
  }

}

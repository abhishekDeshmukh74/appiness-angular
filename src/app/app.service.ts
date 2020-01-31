import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private username = 'abhishek';
  private clientid = '620eac64150e691de073';
  private clientsecret = '018592c0b0d7a8bcdab12aca301f18a58631b1af';
  private githubApiUrl = 'https://api.github.com';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get(`${this.githubApiUrl}/users`);
  }

  searchUsers(username: string) {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${username}`);
  }

  getReposByUsername(username: string) {
    return this.http.get(`${this.githubApiUrl}/users/${username}/repos`);
  }

}

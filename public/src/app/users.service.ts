import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class UsersService {

  user1;
  user2;
  users;

  constructor(private _http: Http) { }

  getAllUsers(callback) {
    this._http.get('/users').subscribe(
      (response) => {
        this.users = response.json();
        callback(this.users);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  findUser(username, callback, errCallback) {
    this._http.get('https://api.github.com/users/' + username + '?access_token=' + environment.access_token).subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        errCallback();
      }
    );
  }

  calculate(user1, user2, callback) {
    this.user1 = user1;
    const score1 = (user1.user.public_repos + user1.user.followers) * 12;
    this.user1.score = score1;
    this.addUser({ username: user1.username, score: score1 }, () => {
    });

    this.user2 = user2;
    const score2 = (user2.user.public_repos + user2.user.followers) * 12;
    this.user2.score = score2;
    this.addUser({ username: user2.username, score: score2 }, () => {
    });

    callback();
  }

  addUser(user, callback) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    this._http.post('/users', body, options).subscribe(
      (response) => {
        callback();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRecentScores() {
    return [this.user1, this.user2];
  }

}

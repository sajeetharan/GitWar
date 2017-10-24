import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent implements OnInit {

  player1:any = {
    isUser: null,
    username: '',
    imgURL: '',
    user: null
  };

  player2:any = {
    isUser: null,
    username: '',
    imgURL: '',
    user: null
  };

  constructor(private _usersService: UsersService, private _router: Router) { }

  findUser(username, playerNum) {
    this._usersService.findUser(username, (user) => {
      if (playerNum === 1) {
        this.player1 = user;
        this.player1.isUser = true;
        this.player1.imgURL = user.avatar_url;
      } else {
        this.player2 = user;
        this.player2.isUser = true;
        this.player2.imgURL = user.avatar_url;
      }
    }, () => {
      if (playerNum === 1) {
        this.player1.isUser = false;
      } else {
        this.player2.isUser = false;
      }
    });
  }

  war() {
    this._usersService.calculate(this.player1, this.player2, () => {
      this._router.navigateByUrl('/results');
    });
  }

  ngOnInit() {
  }

}

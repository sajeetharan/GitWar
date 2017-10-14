import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  users;

  constructor(private _usersService: UsersService) {
    this._usersService.getAllUsers((users) => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}

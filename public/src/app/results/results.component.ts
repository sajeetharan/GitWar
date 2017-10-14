import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  user1;
  user2;

  constructor(private _usersService: UsersService, private _router: Router) {
    const recentScores = this._usersService.getRecentScores();
    if (recentScores[0].score > recentScores[1].score) {
      this.user1 = recentScores[0];
      this.user2 = recentScores[1];
    } else {
      this.user1 = recentScores[1];
      this.user2 = recentScores[0];
    }
  }

  reset() {
    this._router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarComponent } from './war/war.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/war' },
  { path: 'war', component: WarComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'rankings', component: RankingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

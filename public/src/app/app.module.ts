import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarComponent } from './war/war.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ResultsComponent } from './results/results.component';
import { GraphComponent } from './graph/graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    WarComponent,
    ResultsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { StoreModule } from "@ngrx/store";
import  * as fromScoreboard from "../app/scoreboard/scoreboard.reducer";


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({game :fromScoreboard.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

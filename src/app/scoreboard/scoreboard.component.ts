import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "../scoreboard/scoreboard.reducer";
import { homeScore } from "../scoreboard/scoreboard.actions";
import { Observable } from "rxjs";
import { select } from "@ngrx/store";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(private store: Store<{state: State}>) { 
    this.state$ = store.pipe(select('game'));
  }
  state$ : Observable<State>;
  
  ngOnInit() {
this.store.dispatch(homeScore());
    this.state$.subscribe(s=>console.log(s));
  }
  public onClickHomeScore()
  {
    
    
  }
}

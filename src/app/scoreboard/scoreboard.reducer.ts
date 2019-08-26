
import { createReducer } from "@ngrx/store";
import { on } from "@ngrx/store";
import * as scoreboardPage from "../scoreboard/scoreboard.actions";
import { Action } from "@ngrx/store";

export interface State {
    home:number;
    away: number;
}

export const initialState: State ={
    away: 0,
    home:0
}

const scoreboardReducer = createReducer(
    initialState,
    on(scoreboardPage.homeScore, (state:State) => ({ ...state, home: state.home + 1 })),
    on(scoreboardPage.awayScore, (state:State) => ({ ...state, home: state.away + 1 })),
    on(scoreboardPage.resetScore, (state:State) => ({ home: 0, away:0 })),
    
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}


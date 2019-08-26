import { createAction } from "@ngrx/store";

export const homeScore = createAction('[ home score ] scoreboard page');
export const awayScore = createAction('[ away score ] scoreboard page');
export const setScore = createAction('[ set score ] scoreboard page');
export const resetScore = createAction('[ reset score ] scoreboard page');
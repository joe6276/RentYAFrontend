/// All the counter actions

import { createAction, props } from "@ngrx/store";

export const Increment= createAction('[Counter] -Increment',props<{incrementBy:number}>())
export const Decrement= createAction('[Counter] -Decrement',props<{decrementBy:number}>())
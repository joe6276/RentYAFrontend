import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
// import { Decrement, Increment } from "../Actions/counterActions";
import * as CounterActions from '../Actions/counterActions'


export interface CounterInterface{
    count:number
}

const initialState:CounterInterface={
    count:10
}

const getCounterState= createFeatureSelector<CounterInterface>('counter')
export const getCounter= createSelector(getCounterState, (state)=>state.count)

export const counterReducer= createReducer(
        initialState,
    on(CounterActions.Increment, (state, action):CounterInterface=>{
        return {
            ...state,
            count: state.count + action.incrementBy,
        }
    }),
    on(CounterActions.Decrement, (state,action)=>{
        return {
            ...state,
            count: state.count - action.decrementBy
        }
    })
    )
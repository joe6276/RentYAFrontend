import { createAction, createReducer, on } from "@ngrx/store";


export const counterReducer= createReducer(
    {count:10},
    on(createAction('Increment'), state=>{
        return {
            ...state,
            count: state.count +1
        }
    }),
    on(createAction('Decrement'), state=>{
        return {
            ...state,
            count: state.count - 1
        }
    })
    )
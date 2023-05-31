import { createReducer, on } from "@ngrx/store";
import * as UserActions from '../Actions/userActions'

export interface UserInterface{
registrationSuccessMessage:string
registrationFailureMessage:string
}

const initialState:UserInterface={
    registrationFailureMessage:'',
    registrationSuccessMessage:''
}

export const userReducers= createReducer(
    initialState,
    on(UserActions.userRegistrationSuccess, (state,action):UserInterface=>{

        return{
            ...state,
            registrationSuccessMessage:action.message
        }
    }),

    on(UserActions.userRegistrationFailure, (state,action):UserInterface=>{

        return{
            ...state,
            registrationSuccessMessage:action.error
        }
    })

)
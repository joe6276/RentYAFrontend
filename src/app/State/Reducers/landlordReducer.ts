import { createReducer, on } from "@ngrx/store";
import * as LandLordActions from '../Actions/landLordActions'

export interface LandLordInterface{
addLandLordSuccess:string
addLandLordError:string
loginLandLordSuccess:string
loginLandLordError:string
}
const initialState:LandLordInterface={
    addLandLordError:'',
    addLandLordSuccess:'',
    loginLandLordError:'',
    loginLandLordSuccess:'',
}

export const landLordReducer= createReducer(
initialState,

on(LandLordActions.CreateALandLordSuccess, (state,action):LandLordInterface=>{
    return{
        ...state,
        addLandLordSuccess:action.message
    }
}),
on(LandLordActions.CreateALandLordFailure, (state,action):LandLordInterface=>{
    return{
        ...state,
        addLandLordError:action.message
    }
}),

on(LandLordActions.LoginLandLordSuccess, (state,action):LandLordInterface=>{
    return{
        ...state,
        loginLandLordSuccess:action.res.message
    }
}),
on(LandLordActions.LoginLandLordFailure, (state,action):LandLordInterface=>{
    return{
        ...state,
        loginLandLordError:action.message
    }
})
)
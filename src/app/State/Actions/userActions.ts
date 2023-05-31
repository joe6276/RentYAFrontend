import { createAction, props } from "@ngrx/store";
import { LoginUser, NewUser } from "src/app/Interfaces";



export const userRegistration = createAction('[Registration] user Registration', props<{newUser:NewUser}>())
export const userRegistrationSuccess = createAction('[Registration] user Registration Success', props<{message:string}>())
export const userRegistrationFailure = createAction('[Registration] user Registration Failure', props<{error:string}>())



export const userLogin = createAction('[Login] user Login', props<{user:LoginUser}>())
export const userLoginSuccess = createAction('[Login] user Login Success')
export const userLoginFailure = createAction('[Login] user Registration Failure', props<{error:string}>())
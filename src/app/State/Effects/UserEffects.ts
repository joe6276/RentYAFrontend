import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/Services/user.service";
import * as UserActions from '../Actions/userActions'
import { catchError, map, mergeMap, of } from "rxjs";
@Injectable()
export class UserEffects {

    constructor(private userService:UserService, private action$:Actions){}

    AddUser$$= createEffect(()=>{
        return this.action$.pipe(
            ofType(UserActions.userRegistration),
            mergeMap(action=>{
                return this.userService.addUser(action.newUser).pipe(
                    map(ms=>UserActions.userRegistrationSuccess({message:ms.message})),
                    catchError(error=>of(UserActions.userRegistrationFailure({error:error})))
                )
            })
        )
      })


    loginUser$$= createEffect(()=>{
        return this.action$.pipe(
            ofType(UserActions.userLogin),
            mergeMap(action=>{
                return this.userService.loginUser(action.user).pipe(
                    map(ms=>UserActions.userLoginSuccess()),
                    catchError(error=>of(UserActions.userLoginFailure({error:error})))
                )
            })
        )
      })

}
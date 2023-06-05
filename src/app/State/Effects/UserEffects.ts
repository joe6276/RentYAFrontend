import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/Services/user.service";
import * as UserActions from '../Actions/userActions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "src/app/Services/auth.service";
@Injectable()
export class UserEffects {

    constructor(private userService:UserService, private action$:Actions, private router:Router, private authService:AuthService){}

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
                    tap((ms)=>{
                        this.authService.login(ms)
                        this.router.navigate(['/property'])
                        
                    }),
                    map(ms=>UserActions.userLoginSuccess()),
                    
                    catchError(error=>of(UserActions.userLoginFailure({error:error})))
                )
            })
        )
      })

}
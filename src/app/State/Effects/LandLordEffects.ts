import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LandordService } from "src/app/Services/landord.service";
import * as LandLordActions from '../Actions/landLordActions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/Services/auth.service";
import { LogUserSuccess } from "src/app/Interfaces";
import { Router } from "@angular/router";

@Injectable()
export class LandLordEffects {
constructor(private actions:Actions, private landLordService:LandordService, private authService:AuthService, private router:Router){}
    addLandLord$= createEffect(()=>{
    return this.actions.pipe(
        ofType(LandLordActions.CreateALandLord),
        mergeMap(actions=>{
            return this.landLordService.addLandlord(actions.newLandLord).pipe(
                map(message=>LandLordActions.CreateALandLordSuccess({message:message.message})),
                catchError(error=>of(LandLordActions.CreateALandLordFailure({message:error})))
            )
        })
    )
    })

    loginLandlord$= createEffect(()=>{
        return this.actions.pipe(
            ofType(LandLordActions.LoginLandLord),
            mergeMap(actions=>{
                return this.landLordService.logLandlord(actions.landlord).pipe(
                    map(response=>LandLordActions.LoginLandLordSuccess({res:response})),
                    tap(res=>{
                         this.authService.loginLandLord(res.res) 
                         this.router.navigate(['/property'])
                    }),
                    catchError(error=>of(LandLordActions.LoginLandLordFailure({message:error})))
                )
            })
        )
        })

        getApproved$= createEffect(()=>{
            return this.actions.pipe(
                ofType(LandLordActions.approvedLandLord),
                mergeMap(()=>{
                    return this.landLordService.getapprovedLandlords().pipe(
                        map(res=> LandLordActions.approvedLandLordSuccess({res})),
                        catchError(error=>of(LandLordActions.approvedLandLordFailure({message:error})))
                    )
                })
            )
        })

        getUnApproved$= createEffect(()=>{
            return this.actions.pipe(
                ofType(LandLordActions.approvedLandLord),
                mergeMap(()=>{
                    return this.landLordService.getapprovedLandlords().pipe(
                        map(res=> LandLordActions.approvedLandLordSuccess({res})),
                        catchError(error=>of(LandLordActions.approvedLandLordFailure({message:error})))
                    )
                })
            )
        })
}